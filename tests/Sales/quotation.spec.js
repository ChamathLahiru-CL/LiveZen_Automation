const { test, expect } = require('../fixtures');
const userData = require('../../testdata/user.json');

test('Open Quotation Page', async ({ page, loginPage, quotationsPage }) => {
    await loginPage.goto();
    await loginPage.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/); 
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
});