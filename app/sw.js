const CACHE_NAME = 'dinamicas-jc-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/home.html',
  '/dinamicas.html',
  '/detalhe.html',
  '/favoritos.html',
  '/guia.html',
  '/icebreakers.html',
  '/preguntas.html',
  '/calendario.html',
  '/momentos.html',
  '/css/style.css',
  '/js/app.js',
  '/logo.svg',
  '/logo-1080.svg',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Playfair+Display:wght@700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
