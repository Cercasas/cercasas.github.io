self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("hochat-static").then(cache => {
            return cache.addAll(["./", "./css/styles.css", "./css/styles2.css", "./js/main.js", "./assets/logo.png", "./assets/logot192.png"])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})