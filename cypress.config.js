const { defineConfig } = require("cypress");
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')
const dotenv = require("dotenv");
dotenv.config();

// Retrieve authentication token from environment variable
const authToken = process.env.AUTH_TOKEN;

module.exports = defineConfig({
  projectId: '4dcma4',
  //projectId: "5e2ny4",

  env: {
    authToken
  },
  e2e: {
    baseUrl: 'https://socialboosting.com?convert_optout=1',
    //wpstaging.
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    followRedirect: true,
    pageLoadTimeout: 20000,
    chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
    specPattern: 'cypress/e2e/*.cy.js'
  },
});
