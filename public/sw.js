/* Mi Lista de Medicamentos — offline cache. Serves same-origin GETs from cache first.
   Nothing is ever sent anywhere: this worker only READS from the same origin. */
const CACHE = 'mf-builder-v1';
const ASSETS = [
  '/builder.html', '/logo.png', '/manifest.webmanifest',
  '/fonts/fraunces-var.woff2', '/fonts/dmsans-var.woff2',
  '/vendor/jspdf.umd.min.js', '/vendor/jspdf.plugin.autotable.min.js',
  '/icons/icon-192.png', '/icons/icon-512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
