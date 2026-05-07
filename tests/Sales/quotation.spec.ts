import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';

test('Open Quotation Page', async ({ page, loginPage, quotationsPage }) => {
    await loginPage.goto();
    await loginPage.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/); 
    await quotationsPage.navigateToQuotations();
    await expect(page).toHaveURL(/quotations/);
});

test('Check the Sent Quotations', async ({ page, loginPage, quotationsPage }) => {
    await loginPage.goto();
    await loginPage.login(userData.validUser.username, userData.validUser.password);
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
    await quotationsPage.addNewQuotation({
        reference: 'REF-2026-001',
        biller: 'Test User',
        customer: 'QA intern',
        warehouse: 'Main Warehouse',
        customerTax: 'Zero VAT (0%)',
        discountType: 'After Tax',
        quotationStatus: 'Sent',
        product: '24 Inch Monitor 55',
        quotationNote: 'Test Quotation Note',
        staffNote: 'Test Staff Note'
    }); 
}); 
