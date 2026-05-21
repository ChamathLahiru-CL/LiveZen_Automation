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

        
        const targetProductId = 'PROD00057';   
        const newProductName = 'Check 25-09-2024';

        await editPage.selectProductToEdit(targetProductId);

        //Update the product name
        await editPage.productNameInput.fill(newProductName);

        // Save the changes
        await editPage.updateProduct();
        await editPage.waitForConfirmUpdateDialog();        
        await editPage.confirmUpdate();        

        // Verify the updated product details in the view modal
        await viewPage.selectProductToView(targetProductId);
        
        // Wait for the modal to be visible and assert the updated details
        await viewPage.waitForModalToBeVisible();

        // Assert that the product ID and name are updated correctly
        await viewPage.assertProductId(targetProductId);
        await viewPage.assertProductName(newProductName);
        
    });
});