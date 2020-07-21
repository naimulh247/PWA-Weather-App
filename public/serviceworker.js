const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

// Install Service Worker

self.addEventListener('install', (event)=> {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(()=>{
                console.log('Opened Cache')
                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for Request 

self.addEventListener('fetch', (event)=> {
    
});

// Activate the Service Worker

self.addEventListener('activate', (event)=> {
    
});