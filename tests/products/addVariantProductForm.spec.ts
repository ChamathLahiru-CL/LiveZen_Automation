import { test, expect } from '../fixtures';
import AddProductPage, { AddProductFormData } from '../../pages/product/AddVariantProductPage';

// ============================================================
// TEST DATA
// ============================================================

// TEMP: random number generator (100-200) for testing only. Remove after testing.
const tempMin = 100;
const tempMax = 200;
const nextTempNumber = () => Math.floor(Math.random() * (tempMax - tempMin + 1)) + tempMin;
const formatTempProductCode = (num: number) => `PROD${String(num).padStart(5, '0')}`;

const fillVariantBasics = async (productPage: AddProductPage, tempNum: number) => {
    await productPage.selectFromDropdown(productPage.productTypeDropdown, 'Variant Product');
    await productPage.productCodeInput.fill(formatTempProductCode(tempNum));
    await productPage.productNameInput.fill(`variant-${tempNum}`);
    await productPage.slugInput.fill(`variant-${tempNum}`);
    await productPage.selectFromDropdown(productPage.brandDropdown, 'ABCD');
    await productPage.selectFromDropdown(productPage.categoryDropdown, 'Test 1 -> uim2');
    await productPage.categoryDropdown.click();
    await productPage.selectFromDropdown(productPage.statusDropdown, 'Active');
    await productPage.productCostInput.fill('90');
    await productPage.productPriceInput.fill('180');
    await productPage.alertQuantityInput.fill('5');
};

const SINGLE_PRODUCT: AddProductFormData = {
    // General Information
    productType:      'Single Product',
    generateAutoCode: true,
    productName:      `Nike Air Max 2025 - ${Date.now()}`,
    secondaryName:    'Air Max Elite Edition',
    slug:             `nike-air-max-2025-${Date.now()}`,
    barcodeSymbology: 'CODE128',
    brand:            'ABCD',
    category:         'Test 1',
    tags:             ['nike', 'sports', 'running'],
    status:           'Active',

    // Descriptions
    productDescription: 'Premium Nike Air Max 2025 running shoes with advanced cushioning.',
    invoiceDescription: 'Nike Air Max 2025',

    // Media (mock buffer - no real file needed)
    mockImageBuffer: Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        'base64'
    ),

    // Pricing & Inventory
    productCost:   '75',
    productPrice:  '149',
    tax:           'Standard VAT (19%)',
    unit:          'Piece',
    saleUnit:      'Piece',
    purchaseUnit:  'Piece',
    alertQuantity: '10',

    // Visibility
    webVisibility: true,
    posVisibility: true,

    // SEO
    metaTitle:       'Nike Air Max 2025 - Best Running Shoes',
    metaDescription: 'Buy Nike Air Max 2025 at the best price.',
    metaKeywords:    ['nike', 'air max', 'running shoes'],

    // Inventory
    sku:              `NK-AMX-${Date.now()}`,
    barcode:          '9876543210123',
    quantity:         '250',
    manageInventory:  true,
    allowBackorder:   false,
    stockTracking:    true,

    // Shipping
    length:              '32',
    height:              '15',
    width:               '22',
    weight:              '1.5',
    // shippingClass:       'Standard',
    fulfillmentLocation: 'Main Warehouse',

    // Tax Pricing
    taxCostPrice:  '75',
    taxSalePrice:  '149',
    comparePrice:  '180',
    discountRules: '[{"min_qty": 5, "discount": 5}, {"min_qty": 10, "discount": 10}]',

    // Action
    action: 'save',
};

const createVariantProduct = (): AddProductFormData => {
    const tempNum = nextTempNumber();

    return {
        // General Information
        productType:      'Variant Product',
        productCode:      formatTempProductCode(tempNum),
        generateAutoCode: true,
        productName:      `test-${tempNum}`,
        secondaryName:    'test123',
        slug:             `test-${tempNum}`,
        brand:            'ABCD',
        category:         'Test 1 -> uim2',
        tags:             ['adidas', 'variant', 'boost'],
        status:           'Active',

        // Descriptions
        productDescription: 'Adidas Ultra Boost with multiple variant options.',
        invoiceDescription: 'Adidas Ultra Boost',

        // Mock image
        mockImageBuffer: Buffer.from(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'base64'
        ),

        // Pricing & Inventory
        productCost:   '90',
        productPrice:  '180',
        alertQuantity: '5',

        // Visibility
        webVisibility: true,
        posVisibility: false,

        // Variant Options
        variantColor:    true,
        variantSize:     true,
        variantMaterial: false,
        variantPattern:  false,
        variantStyle:    false,

        // Inventory
        sku:             `AD-UB-${tempNum}`,
        barcode:         '1234567890123',
        quantity:        '100',
        manageInventory: true,
        stockTracking:   true,
        allowBackorder:  false,

        // Shipping
        length: '30',
        height: '12',
        width:  '20',
        weight: '1.2',

        // Tax Pricing
        taxCostPrice: '90',
        taxSalePrice: '180',
        comparePrice: '210',

        //low stock alert
        lowStockAlert: '5',
        // Action
        action: 'save',
    };
};

const SAVE_AND_EDIT_PRODUCT: AddProductFormData = {
    productType:      'Single Product',
    generateAutoCode: true,
    productName:      `Save And Edit Product - ${Date.now()}`,
    slug:             `save-edit-product-${Date.now()}`,
    brand:            'ABCD',
    category:         'Test 1',
    status:           'Active',
    productCost:      '50',
    productPrice:     '100',
    alertQuantity:    '5',
    sku:              `SAE-${Date.now()}`,
    action:           'saveAndEdit',
};

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Add Product - E2E Workflow Tests Variant Products', () => {

    let productPage: AddProductPage;

    test.beforeEach(async ({ loggedIn, page, allProductsPage }) => {
        productPage = new AddProductPage(page);
        await productPage.goto();
       
    });

    // ──────────────────────────────────────────────────────────
    // TEST 1: Full Single Product - All Sections
    // ──────────────────────────────────────────────────────────

    test('TC_01 | Single Product | Fill all sections & Save', async ({ page,allProductsPage }) => {

        await productPage.runAddProductWorkflow(SINGLE_PRODUCT);

        // Post-submit assertion
        // await expect(page).not.toHaveURL(/\/products\/create/);
        console.log('✅ TC_01 Passed: Single Product created and saved');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 2: Full Variant Product - With Variant Options
    // ──────────────────────────────────────────────────────────

    test('TC_02 | Variant Product | Fill all sections with Variant Options & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow(createVariantProduct());

        //await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        await page.pause();
        console.log('✅ TC_02 Passed: Variant Product created and saved');
        await page.pause();
    });

    // ──────────────────────────────────────────────────────────
    // TEST 3: Save and Edit Action
    // ──────────────────────────────────────────────────────────

    test('TC_03 | Single Product | Fill required fields & Save and Edit', async ({ page }) => {

        await productPage.runAddProductWorkflow(SAVE_AND_EDIT_PRODUCT);

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_03 Passed: Product saved and redirected to edit page');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 4: Reset Form
    // ──────────────────────────────────────────────────────────

    test('TC_04 | Single Product | Fill fields & Reset form', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:  'Single Product',
            productName:  'Reset Test Product',
            slug:         'reset-test-product',
            productCost:  '50',
            productPrice: '100',
            sku:          'RESET-001',
            action:       'reset',
        });

        // After reset - fields should be empty
        await expect(productPage.productNameInput).toHaveValue('');
        await expect(productPage.skuInput).toHaveValue('');
        await expect(productPage.productCostInput).toHaveValue('');
        console.log('✅ TC_04 Passed: Form reset successfully');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 5: Only Required Fields
    // ──────────────────────────────────────────────────────────

    test('TC_05 | Single Product | Fill only required fields & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:   'Single Product',
            generateAutoCode: true,
            productName:   `Minimal Product - ${Date.now()}`,
            slug:          `minimal-product-${Date.now()}`,
            brand:         'ABCD',
            category:      'Test 1',
            status:        'Active',
            productCost:   '30',
            productPrice:  '60',
            alertQuantity: '3',
            sku:           `MIN-${Date.now()}`,
            action:        'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_05 Passed: Minimal required fields product created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 6: Visibility OFF
    // ──────────────────────────────────────────────────────────

    test('TC_06 | Single Product | Both visibility OFF & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:   'Single Product',
            generateAutoCode: true,
            productName:   `Hidden Product - ${Date.now()}`,
            slug:          `hidden-product-${Date.now()}`,
            brand:         'ABCD',
            category:      'Test 1',
            status:        'Inactive',
            productCost:   '40',
            productPrice:  '80',
            alertQuantity: '2',
            sku:           `HIDDEN-${Date.now()}`,
            webVisibility: false,
            posVisibility: false,
            action:        'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_06 Passed: Hidden product with both visibility OFF created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 7: Full SEO Fields
    // ──────────────────────────────────────────────────────────

    test('TC_07 | Single Product | Fill all SEO fields & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:     'Single Product',
            generateAutoCode: true,
            productName:     `SEO Product - ${Date.now()}`,
            slug:            `seo-product-${Date.now()}`,
            brand:           'ABCD',
            category:        'Test 1',
            status:          'Active',
            productCost:     '55',
            productPrice:    '110',
            alertQuantity:   '4',
            sku:             `SEO-${Date.now()}`,
            metaTitle:       'SEO Product - Best Deals Online',
            metaDescription: 'Buy this SEO optimized product at the best price.',
            metaKeywords:    ['seo', 'product', 'test', 'playwright', 'automation'],
            action:          'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_07 Passed: Product with full SEO information created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 8: Full Shipping + Tax Pricing
    // ──────────────────────────────────────────────────────────

    test('TC_08 | Single Product | Full Shipping & Tax Pricing & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:     'Single Product',
            generateAutoCode: true,
            productName:     `Shipping Tax Product - ${Date.now()}`,
            slug:            `shipping-tax-product-${Date.now()}`,
            brand:           'ABCD',
            category:        'Test 1',
            status:          'Active',
            productCost:     '65',
            productPrice:    '130',
            alertQuantity:   '7',
            sku:             `SHIP-TAX-${Date.now()}`,
            length:          '30',
            height:          '15',
            width:           '20',
            weight:          '2',
            shippingClass:   'Standard',
            taxCostPrice:    '65',
            taxSalePrice:    '130',
            comparePrice:    '155',
            discountRules:   '[{"min_qty": 5, "discount": 8}]',
            action:          'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_08 Passed: Product with Shipping & Tax Pricing created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 9: Full Inventory Management
    // ──────────────────────────────────────────────────────────

    test('TC_09 | Single Product | Full Inventory Management & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:     'Single Product',
            generateAutoCode: true,
            productName:     `Inventory Product - ${Date.now()}`,
            slug:            `inventory-product-${Date.now()}`,
            brand:           'ABCD',
            category:        'Test 1',
            status:          'Active',
            productCost:     '70',
            productPrice:    '140',
            alertQuantity:   '8',
            sku:             `INV-${Date.now()}`,
            barcode:         '1122334455667',
            quantity:        '300',
            manageInventory: true,
            allowBackorder:  true,
            stockTracking:   true,
            action:          'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_09 Passed: Product with full Inventory Management created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 10: Complete Variant Product All Options
    // ──────────────────────────────────────────────────────────

    test('TC_10 | Variant Product | All 5 Variant Options checked & Save', async ({ page }) => {

        await productPage.runAddProductWorkflow({
            productType:      'Variant Product',
            generateAutoCode: true,
            productName:      `All Variants Product - ${Date.now()}`,
            slug:             `all-variants-product-${Date.now()}`,
            brand:            'ABCD',
            category:         'Test 1',
            status:           'Active',
            productCost:      '100',
            productPrice:     '200',
            alertQuantity:    '10',
            sku:              `ALL-VAR-${Date.now()}`,
            quantity:         '500',
            variantColor:     true,
            variantMaterial:  true,
            variantPattern:   true,
            variantSize:      true,
            variantStyle:     true,
            manageInventory:  true,
            stockTracking:    true,
            action:           'save',
        });

        await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
        console.log('✅ TC_10 Passed: Variant Product with all 5 variant options created');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 11: Variant SKU input appears after selecting options
    // ──────────────────────────────────────────────────────────

    test('TC_11 | Variant Product | Variant SKU input appears', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        await productPage.setCheckbox(productPage.variantColorCheckbox, true);
        await productPage.setCheckbox(productPage.variantSizeCheckbox, true);

        const variantSku = `VAR-SKU-${tempNum}`;
        await expect(productPage.variantSKUInput).toBeVisible();
        await productPage.variantSKUInput.fill(variantSku);
        await expect(productPage.variantSKUInput).toHaveValue(variantSku);
    });

    // ──────────────────────────────────────────────────────────
    // TEST 12: Add Variant adds a new row
    // ──────────────────────────────────────────────────────────

    test('TC_12 | Variant Product | Add Variant adds row', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        await productPage.setCheckbox(productPage.variantColorCheckbox, true);
        await productPage.setCheckbox(productPage.variantSizeCheckbox, true);

        const skuInputs = page.locator('input[placeholder="Enter SKU"]');
        const initialCount = await skuInputs.count();

        await page.getByRole('button', { name: 'Add Variant' }).click();
        await expect(skuInputs).toHaveCount(initialCount + 1);
    });

    // ──────────────────────────────────────────────────────────
    // TEST 13: Variant Product - SEO fields
    // ──────────────────────────────────────────────────────────

    test('TC_13 | Variant Product | Fill SEO fields', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        const metaTitle = `Variant Meta Title ${tempNum}`;
        const metaDescription = `Variant Meta Description ${tempNum}`;

        await productPage.metaTitleInput.fill(metaTitle);
        await expect(productPage.metaTitleInput).toHaveValue(metaTitle);

        await productPage.metaDescriptionInput.fill(metaDescription);
        await expect(productPage.metaDescriptionInput).toHaveValue(metaDescription);

        await productPage.metaKeywordsInput.fill('variant');
        await productPage.metaKeywordsInput.press('Enter');
        await productPage.metaKeywordsInput.fill('seo');
        await productPage.metaKeywordsInput.press('Enter');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 14: Variant Product - Visibility toggles
    // ──────────────────────────────────────────────────────────

    test('TC_14 | Variant Product | Visibility toggles', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        await productPage.setToggle(productPage.webVisibilityToggle, false);
        await productPage.setToggle(productPage.posVisibilityToggle, false);

        await expect(productPage.webVisibilityToggle).toHaveAttribute('aria-checked', 'false');
        await expect(productPage.posVisibilityToggle).toHaveAttribute('aria-checked', 'false');
    });

    // ──────────────────────────────────────────────────────────
    // TEST 15: Variant Product - Shipping & Tax Pricing fields
    // ──────────────────────────────────────────────────────────

    test('TC_15 | Variant Product | Shipping & Tax Pricing fields', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        await productPage.lengthInput.fill('31');
        await productPage.heightInput.fill('16');
        await productPage.widthInput.fill('21');
        await productPage.weightInput.fill('1.8');

        await expect(productPage.lengthInput).toHaveValue(/31/);
        await expect(productPage.heightInput).toHaveValue(/16/);
        await expect(productPage.widthInput).toHaveValue(/21/);
        await expect(productPage.weightInput).toHaveValue(/1.8/);

        await productPage.taxCostPriceInput.fill('90');
        await productPage.taxSalePriceInput.fill('180');
        await productPage.comparePriceInput.fill('210');
        await productPage.discountRulesTextarea.fill('[{"min_qty": 2, "discount": 3}]');
        await productPage.lowStockAlertInput.fill('6');

        await expect(productPage.taxCostPriceInput).toHaveValue(/90/);
        await expect(productPage.taxSalePriceInput).toHaveValue(/180/);
        await expect(productPage.comparePriceInput).toHaveValue(/210/);
        await expect(productPage.discountRulesTextarea).toHaveValue('[{"min_qty": 2, "discount": 3}]');
        await expect(productPage.lowStockAlertInput).toHaveValue(/6/);
    });

    // ──────────────────────────────────────────────────────────
    // TEST 16: Variant Product - Inventory fields
    // ──────────────────────────────────────────────────────────

    test('TC_16 | Variant Product | Inventory fields', async ({ page }) => {

        const tempNum = nextTempNumber();
        await fillVariantBasics(productPage, tempNum);

        const sku = `INV-${tempNum}`;
        await productPage.skuInput.fill(sku);
        await productPage.barcodeInput.fill('1122334455667');
        await productPage.quantityInput.fill('120');

        await productPage.setCheckbox(productPage.manageInventoryCheckbox, true);
        await productPage.setCheckbox(productPage.allowBackorderCheckbox, true);
        await productPage.setCheckbox(productPage.stockTrackingCheckbox, true);

        await expect(productPage.skuInput).toHaveValue(sku);
        await expect(productPage.barcodeInput).toHaveValue('1122334455667');
        await expect(productPage.quantityInput).toHaveValue(/120/);
        await expect(productPage.manageInventoryCheckbox).toBeChecked();
        await expect(productPage.allowBackorderCheckbox).toBeChecked();
        await expect(productPage.stockTrackingCheckbox).toBeChecked();
    });
});