const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://starbugs-qa.vercel.app",
    video: true,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/output.xml',
      toConsole: true,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
