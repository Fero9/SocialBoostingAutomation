const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

// Retrieve authentication token from environment variable
const authToken = process.env.AUTH_TOKEN;

module.exports = defineConfig({
  projectId: "5e2ny4",

  env: {
    authToken
  },
  e2e: {
    baseUrl: 'https://wpstaging.socialboosting.com',
    //?convert_optout=1
    setupNodeEvents(on, config) {
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  followRedirect: true,
  pageLoadTimeout: 20000,
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
});
