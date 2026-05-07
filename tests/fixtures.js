const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SideBar = require('../pages/SideBar');
const Topbar = require('../pages/Topbar');
const QuotationsPage = require('../pages/Sales/QuotationsPage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new SideBar(page));
  },
  topbar: async ({ page }, use) => {
    await use(new Topbar(page));
  },
  quotationsPage: async ({ page }, use) => {
    await use(new QuotationsPage(page));
  }
});

module.exports = { test, expect: base.expect };
