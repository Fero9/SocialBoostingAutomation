const {defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: "4dcma4",
    
    e2e: {
        baseUrl:"https://www.socialboosting.com?convert_optout=1"
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    followRedirect: true,
    pageLoadTimeout: 20000,
    chromeWebSecurity: false,
    experimentalMemoryManagement:true,
})