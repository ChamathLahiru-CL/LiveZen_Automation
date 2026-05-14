import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import { getLoginCredentials } from '../utils/env';


test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    const sidebar = new SideBar(page);
    const topbar = new Topbar(page);
    const { username, password } = getLoginCredentials();

    await login.goto();
    await login.login(username, password);

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

