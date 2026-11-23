/* Client Quest — offline cache, scoped to /quest/.
   Bump CACHE when precached files change so clients pick up the update. */
const CACHE = 'client-quest-v1';
const ASSETS = [
  '/quest/',
  '/quest/index.html',
  '/quest/manifest.webmanifest',
  '/quest/icons/icon-192.png',
  '/quest/icons/icon-512.png',
  '/quest/icons/icon-maskable-512.png'
];

async function store(cache, url, response) {
  if (!response || !response.ok) throw new Error('precaching failed: ' + url);
  if (!response.redirected) {
    await cache.put(url, response);
    return;
  }
  const headers = new Headers(response.headers);
  headers.delete('content-encoding');
  headers.delete('content-length');
  await cache.put(url, new Response(await response.blob(), {
    status: response.status,
    statusText: response.statusText,
    headers
  }));
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(ASSETS.map(async (url) => {
      const response = await fetch(url, { cache: 'reload' });
      await store(cache, url, response);
    }));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith('client-quest-v') && key !== CACHE)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname !== '/quest' && !url.pathname.startsWith('/quest/')) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request) || await cachedPage(cache, url);
    const network = fetch(event.request).then((response) => {
      if (response && response.ok) store(cache, event.request, response.clone()).catch(() => {});
      return response;
    }).catch(() => null);
    if (cached) return cached;
    const fresh = await network;
    if (fresh) return fresh;
    return cachedPage(cache, url) || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
  })());
});

async function cachedPage(cache, url) {
  if (url.pathname !== '/quest' && url.pathname !== '/quest/' && url.pathname !== '/quest/index.html') return null;
  return (await cache.match('/quest/index.html')) || (await cache.match('/quest/')) || null;
}
