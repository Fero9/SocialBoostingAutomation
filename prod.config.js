const {defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl:"https://www.socialboosting.com"
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    followRedirect: true,
    pageLoadTimeout: 50000,
    chromeWebSecurity: false,
    experimentalMemoryManagement:true,
})