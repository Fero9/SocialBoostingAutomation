const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://frantisek.socialboosting.com:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        proxyRequest(proxyConfig) {
          if (proxyConfig.url.includes('socialboosting.onfastspring.com')) {
            // Modify headers if needed, but usually not necessary
            return proxyConfig; 
          }
        }
      })
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  followRedirect: true,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  experimentalMemoryManagement:true,
});
