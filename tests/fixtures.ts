import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import QuotationsPage from '../pages/Sales/QuotationsPage';
import SalesOrdersPage from '../pages/Sales/SalesOrdersPage';
import userData from '../testdata/user.json';

type Fixtures = {
  loginPage: LoginPage;
  sidebar: SideBar;
  topbar: Topbar;
  quotationsPage: QuotationsPage;
  loggedIn: void;
  salesOrdersPage: SalesOrdersPage;
};

export const test = base.extend<Fixtures>({
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
  },
  loggedIn: async ({ loginPage, page }, use) => {
    await loginPage.goto();
    await loginPage.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
    await use();
  },
  salesOrdersPage: async ({ page }, use) => {
    await use(new SalesOrdersPage(page));
  }
});

export { expect } from '@playwright/test'; 
