const cacheName = "offline-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/about.css",
        "/css/body.css",
        "/css/headerglobal.css",
        "/images/icon.png",
        "/images/parash-removebg-preview.png",
        "/images/parash.jpg",
        "/js/index.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  );
});
