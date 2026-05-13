import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';


test('Open Sales Orders Page', async ({ page, loginPage, salesOrdersPage }) => {
    await loginPage.goto();
    await loginPage.login(userData.validUser.username, userData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
});

test('Check the Paid Sales Orders', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.paidFilter.click();
});

test('Check the Partial Paid Sales Orders', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.partialPaidFilter.click();
});

test('Check the Unpaid Sales Orders', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.unpaidFilter.click();
});

test('Check the Cancelled Sales Orders', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.cancelledFilter.click();
});

test('Search for a Sales Order', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.searchInput.fill('SO00020');
    await salesOrdersPage.searchInput.press('Enter');
    await salesOrdersPage.orderCodeIDNonDeleted.click();
    await salesOrdersPage.exportButton.click();
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        salesOrdersPage.downloadPDFButton.click(),
    ]);
    await download.saveAs(`${process.env.USERPROFILE}\\Downloads\\order-slip.pdf`);
});

test('Add new Sales Order', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.newAddButton.click();
    await salesOrdersPage.addSalesOrderButton.click();
});

test('Create a Sales Order', async ({ loggedIn, page, salesOrdersPage }) => {
    await salesOrdersPage.navigateToSalesOrders();
    await expect(page).toHaveURL(/sales-orders/);
    await salesOrdersPage.createNewSalesOrder(userData.salesOrderData);
});
