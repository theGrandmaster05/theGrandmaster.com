let cacheName = 'v1';
let cacheFiles = [
    './',
    './app/index.html',
    './app/static/css/index.css',
    './app/static/js/app.js'
]

self.addEventListener('install', function(e) {
    console.log('[Service worker] installed');

    e.waitUntil(
        caches.open(cacheName)
            .then(function(cache) {
                console.log('[Service worker] is caching files');
                return cache.addAll(cacheFiles);
            })
    )
});

self.addEventListener('activate', function(e) {
    console.log('[Service worker] activated');

    e.waitUntil(
        caches.keys()
            .then(function(cacheNames) {
                return Promise.all(cacheNames.map(function(thisCacheName) {
                    if(thisCacheName !== cacheName) {
                        console.log('[Service worker] removing cache');
                        return caches.delete(thisCacheName);
                    }
                }));
            })
    )
});

self.addEventListener('fetch', function(e) {
    console.log('[Service worker] fetching' , e.request.url);
    // e.respondWith(
    //     caches.match(e.response)
    // )
});