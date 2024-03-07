const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://starbugs-qa.vercel.app",
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/output.xml',
      toConsole: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
