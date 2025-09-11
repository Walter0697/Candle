const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Find and modify the existing InjectManifest plugin
    config.plugins.forEach((plugin) => {
      if (plugin.constructor.name === 'InjectManifest') {
        // Update the plugin's configuration directly
        plugin.options = plugin.options || {};
        plugin.options.maximumFileSizeToCacheInBytes = 10 * 1024 * 1024;
        // Also set globIgnores to exclude large files
        plugin.options.globIgnores = [
          '**/*.map',
          '**/node_modules/**/*',
          '**/static/js/main.*.js' // Exclude the large main bundle
        ];
      }
    });
    
    // Suppress the workbox warning by modifying the webpack stats
    config.stats = config.stats || {};
    config.stats.warningsFilter = [
      /maximumFileSizeToCacheInBytes/,
      /won't be precached/
    ];
    
    return config;
  }
);
