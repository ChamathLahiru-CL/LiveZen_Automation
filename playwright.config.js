const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  workers: 1,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    launchOptions: {
      slowMo: 200
    }
  },
  reporter: [['html', { open: 'always' }]]
});