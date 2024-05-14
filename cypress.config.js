const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

const cypressSplit = require('cypress-split')

// Retrieve authentication token from environment variable
const authToken = process.env.AUTH_TOKEN;

module.exports = defineConfig({
  env: {
    authToken
  },
  e2e: {
    baseUrl: 'https://wpstaging.socialboosting.com?convert_optout=1',
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  followRedirect: true,
  pageLoadTimeout: 50000,
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
});
