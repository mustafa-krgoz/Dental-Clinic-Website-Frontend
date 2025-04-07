// workbox-config.js
module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{js,css,html,png,svg,ico,json,woff2}'
    ],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 gün
          },
        },
      },
      {
        urlPattern: new RegExp('https://your-api-url.com/'), // istersen backend için de cache
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60, // 1 saat
          },
        },
      },
    ],
  };
