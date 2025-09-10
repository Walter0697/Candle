module.exports = {
  // Increase the maximum file size for precaching
  maximumFileSizeToCacheInBytes: 8 * 1024 * 1024, // 8MB (7.43MB bundle)
  
  // Configure which files to precache
  globPatterns: [
    '**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,eot}'
  ],
  
  // Exclude source maps and other large files that shouldn't be precached
  globIgnores: [
    '**/*.map',
    '**/node_modules/**/*'
  ],
  
  // Configure runtime caching
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
        }
      }
    }
  ]
};
