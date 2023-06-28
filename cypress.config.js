const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //declaring global variables
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/framework/*.js",
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
