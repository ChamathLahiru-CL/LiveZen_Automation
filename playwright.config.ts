import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 90000,

  workers: 1,

  reporter: [['html', { open: 'always' }]],

  use: {
    acceptDownloads: true,

    headless: false,

    viewport: null,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 15000,

    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 400
    }
  },

  projects: [

    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome'
      }
    },

/*    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge'
      }
    },

    {
      name: 'Firefox',
      use: {
        browserName: 'firefox'
      }
    } */

  ]

});