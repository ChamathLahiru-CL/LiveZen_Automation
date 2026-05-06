const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SideBar = require('../pages/SideBar');

test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    const sidebar = new SideBar(page);

    await login.goto();
    await login.login('superadmin@shopbox.com', 'Admin@123');

    await expect(page).toHaveURL(/dashboard/);
    
    await sidebar.clickDashboard();
    await sidebar.clickSales();
    await sidebar.clickProducts();
    await sidebar.clickPurchases();
    await sidebar.clickCustomer();
    await sidebar.clickUsers();
    await sidebar.clickReports();
    await sidebar.clickSettings();
    

    
    
});

