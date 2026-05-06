const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SideBar = require('../pages/SideBar');
const TopBar = require('../pages/TopBar');
const userData = require('../testdata/user.json');


test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    const sidebar = new SideBar(page);
    const topbar = new TopBar(page);

    await login.goto();
    await login.login(userData.username, userData.password);

    await expect(page).toHaveURL(/dashboard/);
    
    await sidebar.clickDashboard();
    await sidebar.clickSales();
    await sidebar.clickProducts();
    await sidebar.clickPurchases();
    await sidebar.clickCustomer();
    await sidebar.clickUsers();
    await sidebar.clickReports();
    await sidebar.clickSettings();
    
    await sidebar.clickDashboard();

    await topbar.clickCollapseButton();
    // await topbar.clickSearchButton();
    await topbar.clickLanguageChangeButton();
    await topbar.clickNotificationButton(); 
    
    await topbar.clickSettingButton();
    await topbar.clickCloseSettingButton();

    await topbar.clickProfileButton();
    await topbar.clickLogoutButton();

    

});

// test("Change the language", async ({ page }) => {
//     const login = new LoginPage(page);
//     const topbar = new TopBar(page);
//     await login.goto();
//     await login.login(userData.username, userData.password);

//     await expect(page).toHaveURL(/dashboard/);

//     await topbar.clickLanguageChangeButton();
//     await topbar.selectLanguage('sinhalese');
//     // await expect(page.locator('body')).toHaveClass(/rtl/);

//     await topbar.clickLanguageChangeButton();
//     await topbar.selectLanguage('english');
//     // await expect(page.locator('body')).not.toHaveClass(/rtl/);

// });

test("Check the notifications", async ({ page }) => {
    const login = new LoginPage(page);
    const topbar = new TopBar(page);
    const sidebar = new SideBar(page);
    await login.goto();
    await login.login(userData.username, userData.password);

    await expect(page).toHaveURL(/dashboard/);

    await topbar.clickNotificationButton();
    await topbar.seeAllNotifications();
    await expect(page).toHaveURL(/notifications/);
    await sidebar.clickDashboard();
    await expect(page).toHaveURL(/dashboard/);
});

// Setting functionality checking
test("Check the settings functionality", async ({ page }) => {

    const login = new LoginPage(page);
    const topbar = new TopBar(page);

    await login.goto();

    await login.login(userData.username, userData.password);

    await expect(page).toHaveURL(/dashboard/);

    await topbar.openSettings();

    await topbar.clickDirectionToggle();

});