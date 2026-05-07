import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 60000,

  workers: 1,

  use: {

    headless: false,

    viewport: null,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 15000,

    launchOptions: {
      slowMo: 1000
    }

  },

  reporter: [['html', { open: 'always' }]]

});