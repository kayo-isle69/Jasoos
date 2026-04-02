const CACHE_NAME = 'jasoos-v2';
const ASSETS = [
  './',
  './index.html',
  './jasoos.html',
  './manifest.json',
];

// Install — cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(() => {}))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate — remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', e => {
  // Only handle GET requests, skip chrome-extension etc
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (!['http:', 'https:'].includes(url.protocol)) return;

  // For Google Fonts and other external resources: cache-first
  if (url.origin !== self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp && resp.status === 200) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return resp;
        }).catch(() => cached);
      })
    );
    return;
  }

  // For same-origin: network first, fall back to cache
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        if (resp && resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
