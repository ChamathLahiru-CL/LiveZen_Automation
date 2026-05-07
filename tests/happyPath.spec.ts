import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import userData from '../testdata/user.json';


test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    const sidebar = new SideBar(page);
    const topbar = new Topbar(page);

    await login.goto();
    await login.login(userData.validUser.username, userData.validUser.password);

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

