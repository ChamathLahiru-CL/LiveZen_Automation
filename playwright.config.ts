import { defineConfig } from '@playwright/test';

export default defineConfig({

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