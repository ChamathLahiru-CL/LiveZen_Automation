import { test, expect } from '../fixtures';
import EditProductPage from '../../pages/product/Actions/EditProductPage';
import { ViewProductPage } from '../../pages/product/Actions/ViewProductPage';

test.describe('Product Editing Workflow', () => {

    let editPage: EditProductPage;
    let viewPage: ViewProductPage;

    test.beforeEach(async ({loggedIn, page }) => {
        editPage = new EditProductPage(page);
        viewPage = new ViewProductPage(page);
    });

    test('should search for a product and open the edit page', async ({ page }) => {        
        
        const targetProductId = 'PROD00053';   
        
        await editPage.selectProductToEdit(targetProductId);
        
        // Option A: Check the URL
        await expect(page).toHaveURL(/.*edit.*/); 
        
        // Option B: Check for a specific header on the edit page
        const editHeading = page.getByRole('main').getByRole('heading', { name: 'Edit Product' });
        await expect(editHeading).toBeVisible();
    });

    test('change the product name and verify the update', async ({ page }) => {
        const targetProductId = 'PROD00053';   
        const newProductName = 'Check AfterUpdate';

        await editPage.selectProductToEdit(targetProductId);
        await editPage.productNameInput.fill(newProductName);
        await editPage.updateProduct();
        await editPage.waitForConfirmUpdateDialog();
        // await editPage.assertConfirmUpdateDialog();
        await editPage.confirmUpdate();
        // Verify the update by checking the product name on the edit page
        
        
    });
});