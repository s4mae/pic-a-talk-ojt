const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1980,  // Set width to 1980px
    viewportHeight: 1060, // Set height to 1060px
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
