const CACHE_VERSION = 'pokedex-client-sw-v0';
const CACHE_KEYS = ['/', '/index.html', '/vendor.js', '/app.js'];

self.addEventListener('install', event =>
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(CACHE_KEYS))
  )
);

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  )
);
