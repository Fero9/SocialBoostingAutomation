const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  projectId: "5e2ny4",
  
  env: {
    authToken: process.env.AUTH_TOKEN,
  },
  e2e: {
    baseUrl: "https://wpstaging.socialboosting.com/?convert_optout=1",
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  followRedirect: true,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
});
