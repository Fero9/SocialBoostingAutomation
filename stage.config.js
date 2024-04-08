const {defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl:"https://wpstaging.socialboosting.com/"
    },
})