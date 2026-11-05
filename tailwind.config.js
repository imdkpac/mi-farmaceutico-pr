/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        pine: '#0F2E30',
        'deep-pine': '#1A4A4D',
        paper: '#F4EFE6',
        sand: '#E2D6BF',
        sage: '#A8BDA6',
        'muted-ink': '#5C6F6A',
        flamboyan: '#E2512F',
      },
      borderRadius: {
        container: '28px',
      },
    },
  },
  plugins: [],
};
