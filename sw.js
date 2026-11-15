const CACHE_NAME = 'plyostride-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './plyostride-icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'TIMER_DONE') {
    const title = event.data.title || 'PLYOSTRIDE Timer Complete';
    const body = event.data.body || 'Ready for your next set.';
    if (self.registration && self.registration.showNotification) {
      self.registration.showNotification(title, {
        body,
        icon: 'plyostride-icon-512.png',
        badge: 'plyostride-icon-512.png',
        vibrate: [200, 90, 250],
        tag: 'plyostride-timer'
      });
    }
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return self.clients.openWindow('./');
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networked = fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => cached);
      return cached || networked;
    })
  );
});
