const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

// Retrieve authentication token from environment variable
const authToken = process.env.AUTH_TOKEN;

module.exports = defineConfig({
  env: {
    authToken
  },
  e2e: {
    baseUrl: 'https://wpstaging.socialboosting.com',
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
  experimentalMemoryManagement: true,
});
