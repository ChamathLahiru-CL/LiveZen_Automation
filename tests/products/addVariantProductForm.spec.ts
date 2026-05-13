import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';
import AddVariantProductFormPage from '../../pages/product/AddVariantProductFormPage';

test('E2E - Create new product successfully', async ({ loggedIn, page, allProductsPage }) => {
    const productPage = new AddVariantProductFormPage(page);

    await allProductsPage.navigateToAllProducts();
    await allProductsPage.clickAddProduct();

    await productPage.fillFullForm(userData.addVariantProductData as any);

    await expect(page).toHaveURL(/\/products/);
});