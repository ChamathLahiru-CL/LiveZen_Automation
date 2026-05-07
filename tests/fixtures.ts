import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import QuotationsPage from '../pages/Sales/QuotationsPage';

type Fixtures = {
  loginPage: LoginPage;
  sidebar: SideBar;
  topbar: Topbar;
  quotationsPage: QuotationsPage;
};

const test = base.extend<Fixtures>({
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

export { test, expect };
