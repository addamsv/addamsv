const cacheName = "MySite";

const static = [
  "./",
  "./index.html",
  "./index.js",
  "./styles.css",
];

self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(static);

  return self.skipWaiting();
});

// self.addEventListener("activate", (e) => {
//   self.clients.claim();
// });

// self.addEventListener("fetch", async (e) => {
//   const req = e.request;
//   const url = new URL(req.url);

//   if (url.origin === location.origin) {
//     e.respondWith(cacheFirst(req));
//   } else {
//     e.respondWith(networkAndCache(req));
//   }
// });

// const cacheFirst = async () => {}
// const networkAndCache = async () => {}