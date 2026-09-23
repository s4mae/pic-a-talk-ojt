const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pic-a-talk.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
