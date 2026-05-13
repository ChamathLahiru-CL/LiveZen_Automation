
import AddProductPage from '../../pages/product/AddProductFormPage';
import type { AddProductFormData } from '../../pages/product/AddProductFormPage';
import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';
import AllProductsPage from '../../pages/product/AllProductsPage';

test('Add Product - Full Form Fill E2E', async ({ loggedIn, page, allProductsPage, addProductFormPage }) => {
    const addProductPage = new AddProductPage(page);

    await allProductsPage.navigateToAllProducts();
    await allProductsPage.clickAddProduct();

    await addProductFormPage.fillFullForm(userData.addProductData as AddProductFormData);

    await expect(page).toHaveURL(/\/products/);
});