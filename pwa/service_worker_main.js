'use strict'

const CACHE_NAME = 'qrscanner';
// The files we want to cache
const resourceList = [
  '/',
  'https://thedoggybrad.github.io/qrscanner/index.html',
  'https://thedoggybrad.github.io/qrscanner/bundle.js',
  'https://thedoggybrad.github.io/qrscanner/bundle.css',
  'https://thedoggybrad.github.io/qrscanner/decoder.js',
  'https://thedoggybrad.github.io/qrscanner/pwacompat.min.js',
  'https://thedoggybrad.github.io/qrscanner/manifest.json',
  'https://thedoggybrad.github.io/qrscanner/pwa/service_worker_main.js',
  'https://thedoggybrad.github.io/qrscanner/pwa/service_worker_check.js',
  'https://thedoggybrad.github.io/qrscanner/images/',
  
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
