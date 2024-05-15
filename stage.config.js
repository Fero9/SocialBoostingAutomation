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
});
