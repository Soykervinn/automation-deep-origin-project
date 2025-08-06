const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ji8gyf',
  chromeWebSecurity: false,
  retries: {
    runMode: 0, // Retries numbers when we are running in continuous integration.
    openMode: 0 // Retires numbers when we are running in open mode.
  },
  e2e: {
    baseUrl: 'https://dummyjson.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
