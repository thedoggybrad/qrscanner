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
  'https://thedoggybrad.github.io/qrscanner/images/qrcode-scanner.svg',
  'https://thedoggybrad.github.io/qrscanner/images/touch/favicon.ico',
  'https://thedoggybrad.github.io/qrscanner/images/touch/android-chrome-192x192.png',
  'https://thedoggybrad.github.io/qrscanner/images/touch/android-chrome-512x512.png',
  'https://thedoggybrad.github.io/qrscanner/images/touch/apple-touch-icon.jpg',
  'https://thedoggybrad.github.io/qrscanner/images/touch/favicon-16x16.png',
  'https://thedoggybrad.github.io/qrscanner/images/touch/favicon-32x32.png',
  'https://thedoggybrad.github.io/qrscanner/images/touch/mstile-150x150.png',
  'https://thedoggybrad.github.io/qrscanner/images/screenshots/screenshot1.png',
  'https://thedoggybrad.github.io/qrscanner/images/screenshots/screenshot2.png',
  'https://thedoggybrad.github.io/qrscanner/images/screenshots/screenshot3.png',
  'https://www.w3.org/2000/svg',
  'http://www.w3.org/1999/xlink',
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
