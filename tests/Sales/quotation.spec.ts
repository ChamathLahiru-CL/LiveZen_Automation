import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';
import { getLoginCredentials } from '../../utils/env';

test('Open Quotation Page', async ({ page, loginPage, quotationsPage }) => {
    const { username, password } = getLoginCredentials();
    await loginPage.goto();
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/dashboard/); 
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
});

test('Check the Sent Quotations', async ({ page, loginPage, quotationsPage }) => {
    const { username, password } = getLoginCredentials();
    await loginPage.goto();
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/dashboard/);
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
    await quotationsPage.checkSentQuotations();
});

test('Check the Completed Quotations', async ({ loggedIn, page, quotationsPage }) => {
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
    await quotationsPage.completeQuotation();
});

test('Check the Canceled Quotations', async ({ loggedIn, page, quotationsPage }) => {
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
    await quotationsPage.cancelQuotation();
});

test('Add New Quotation', async ({ loggedIn, page, quotationsPage }) => {
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
    await quotationsPage.addNewQuotation(userData.quotationData);
});