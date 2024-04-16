const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  env: {
    authToken: process.env.AUTH_TOKEN,
  },
  e2e: {
    baseUrl: "https://wpstaging.socialboosting.com/",
  },
});
