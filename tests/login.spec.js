const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SideBar = require('../pages/SideBar');
const TopBar = require('../pages/TopBar');
const userData = require('../testdata/user.json');

// Test Positive Login functionality
test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);
    const sidebar = new SideBar(page);
    const topbar = new TopBar(page);

    await login.goto();
    await login.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);    
    await topbar.clickProfileButton();
    await topbar.clickLogoutButton();  

});

test('Remember Me Functionality Test', async ({ page }) => {
    const login = new LoginPage(page);
    const topbar = new TopBar(page);
    await login.goto();
    await login.usernameInput.fill(userData.validUser.username);
    await login.passwordInput.fill(userData.validUser.password);
    await login.rememberMeCheckbox.check();
    await login.loginButton.click();
    await expect(page).toHaveURL(/dashboard/);
    await topbar.clickProfileButton();
    await topbar.clickLogoutButton();
    await expect(page).toHaveURL(/login/);
    await login.goto();
    await expect(page.locator('#email')).toHaveValue(userData.validUser.username);
    await expect(page.locator('#password')).toHaveValue(userData.validUser.password);
});

test('Forgot Password Link Test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.forgotPassword();
    await expect(page).toHaveURL(/reset-password/);
});

test('Password Mask Toggle Test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.usernameInput.fill(userData.validUser.username);
    await login.passwordInput.fill(userData.validUser.password);
    await login.passwordMaskCheck();
});




// Test Negative Login functionality
// Invalid username and password test
test('Invalid Login Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(userData.invalidUser.username, userData.invalidUser.password);
    await expect(page.locator('text=Invalid email or password')).toBeVisible();

});

// Empty credentials test
test('Empty Credentials Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(userData.emptyCredentials.username, userData.emptyCredentials.password);
    
    // Check if still on login page (not logged in)
    await expect(page.locator('text=Both username/email and password are required')).toBeVisible();
});

// Empty username test
test('Empty Username Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(userData.emptyUsername.username, userData.emptyUsername.password);
    
    await expect(page.locator('text=Username/email is required')).toBeVisible();
});

// Empty password test
test('Empty Password Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(userData.emptyPassword.username, userData.emptyPassword.password);
    
    await expect(page.locator('text=Password is required')).toBeVisible();
});

