
import AddProductPage from '../../pages/product/AddProductFormPage';
import { test, expect } from '../fixtures';
import userData from '../../testdata/user.json';
import AllProductsPage from '../../pages/product/AllProductsPage';

test('Add Product - Full Form Fill E2E', async ({ loggedIn, page, allProductsPage }) => {
    const addProductPage = new AddProductPage(page);

    await allProductsPage.navigateToAllProducts();
    await allProductsPage.clickAddProduct();

    await addProductPage.fillFullForm({
        // General Information
        productType: 'Single Product',
        productName: 'ABCD Air Max 2024',
        secondaryName: 'Air Max',
        slug: 'abcd-air-max-2024',
        barcodeSymbology: 'CODE128',
        brand: 'ABCD',
        category: 'Test 1',
        tags: ['nike', 'shoes', 'sports'],
        status: 'Active',

        // Descriptions
        productDescription: 'Premium ABCD Air Max sneakers.',
        invoiceDescription: 'ABCD Air Max 2024 - Premium Edition',

        // Media
        productImagePath: 'tests/assets/product.png',

        // Pricing & Inventory
        productCost: '80',
        productPrice: '150',
        tax: 'Standard VAT (19%)',
        unit: 'Piece',
        saleUnit: 'Piece',
        purchaseUnit: 'Piece',
        alertQuantity: '5',

        // Visibility
        webVisibility: true,
        posVisibility: true,

        // SEO
        metaTitle: 'Nike Air Max 2024 - Best Price',
        metaDescription: 'Buy Nike Air Max 2024 at best price.',
        metaKeywords: ['nike', 'air max', 'sneakers'],

        // Inventory
        sku: 'NIKE-AM-2024',
        barcode: '9876543210',
        quantity: '100',
        manageInventory: true,
        allowBackorder: false,
        stockTracking: true,

        // Shipping
        length: '30',
        height: '15',
        width: '20',
        weight: '1.2',
        shippingClass: 'Standard',
        fulfillmentLocation: 'Warehouse A',

        // Tax Pricing
        taxCostPrice: '80',
        taxSalePrice: '150',
        comparePrice: '180',
        discountRules: '[{"min_qty": 5, "discount": 10}]',

        // Action
        action: 'save',
    });

    await expect(page).toHaveURL(/\/products/);
});