import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SideBar from '../pages/SideBar';
import Topbar from '../pages/Topbar';
import userData from '../testdata/user.json';

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


// Notification functionality checking

test("Check the notifications", async ({ page }) => {
    const login = new LoginPage(page);
    const topbar = new Topbar(page);
    const sidebar = new SideBar(page);
    await login.goto();
    await login.login(userData.validUser.username, userData.validUser.password);

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
    const topbar = new Topbar(page);

    await login.goto();

    await login.login(userData.validUser.username, userData.validUser.password);

    await expect(page).toHaveURL(/dashboard/);

    await topbar.openSettings();

    await topbar.clickDirectionToggle();

});

// Profile functionality checking

test("Check the profile functionality", async ({ page }) => {

    const login = new LoginPage(page);
    const topbar = new Topbar(page);

    await login.goto();

    await login.login(userData.validUser.username, userData.validUser.password);

    await expect(page).toHaveURL(/dashboard/);

    await topbar.clickMyProfile();
});
    