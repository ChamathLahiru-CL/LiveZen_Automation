const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const SideBar = require('../../pages/SideBar');
const TopBar = require('../../pages/TopBar');
const QuotationsPage = require('../../pages/Sales/QuotationsPage');
const userData = require('../../testdata/user.json');

    const login = new LoginPage(page);
    const sidebar = new SideBar(page);
    const topbar = new TopBar(page);
    const quotationsPage = new QuotationsPage(page);

test('Open Quotation Page', async ({ page }) => {
    await login.goto();
    await login.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/); 
    await sidebar.clickSales();
    await sidebar.clickQuotations();
    await expect(page).toHaveURL(/quotations/);
});