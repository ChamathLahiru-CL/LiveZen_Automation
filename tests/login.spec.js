const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('superadmin@shopbox.com', 'Admin@123');

    await expect(page).toHaveURL(/dashboard/);
});

