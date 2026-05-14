import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import QuotationsPage from '../pages/Sales/QuotationsPage';
import SalesOrdersPage from '../pages/Sales/SalesOrdersPage';
import AllProductsPage from '../pages/product/AllProductsPage';
import AddProductFormPage from '../pages/product/AddProductFormPage'; 
import AddDigitalProductPage from '../pages/product/addDigitalProductPage';
import AddComboProductPage from '../pages/product/AddComboProductPage';
import { getLoginCredentials } from '../utils/env';

type Fixtures = {
  loginPage: LoginPage;
  sidebar: SideBar;
  topbar: Topbar;
  quotationsPage: QuotationsPage;
  salesOrdersPage: SalesOrdersPage;
  allProductsPage: AllProductsPage;
  addProductFormPage: AddProductFormPage;
  addDigitalProductPage: AddDigitalProductPage;
  addComboProductPage: AddComboProductPage;

  loggedIn: void;
  

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
  salesOrdersPage: async ({ page }, use) => {
    await use(new SalesOrdersPage(page));
  },
  allProductsPage: async ({ page }, use) => {
    await use(new AllProductsPage(page));
  },
  addProductFormPage: async ({ page }, use) => {
    await use(new AddProductFormPage(page));
  },
  addComboProductPage: async ({ page }, use) => {
    await use(new AddComboProductPage(page));
  },
  addDigitalProductPage: async ({ page }, use) => {
    await use(new AddDigitalProductPage(page));
  },

  loggedIn: async ({ loginPage, page }, use) => {
    await loginPage.goto();
    const { username, password } = getLoginCredentials();
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/dashboard/);
    await use();
  }
});

export { expect } from '@playwright/test'; 
