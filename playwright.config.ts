import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 90000,

  workers: 1,

  use: {
    channel: 'msedge',
    acceptDownloads: true,

    headless: false,

    viewport: null,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 15000,

    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 600
    }

  },

  reporter: [['html', { open: 'always' }]]

});