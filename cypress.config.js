const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // added for compare the screenshot
      const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
