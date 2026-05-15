import { test, expect } from '../fixtures';
import AddComboProductPage, {
    type AddComboProductFormData,
    type ComboProductItem,
    type ComboItem,
} from '../../pages/product/AddComboProductPage';

// ============================================================
// TEST DATA FIXTURES
// ============================================================

/**
 * Full valid data set — used for happy-path E2E test
 */
const FULL_COMBO_PRODUCT_DATA: AddComboProductFormData = {

    // General Information
    productType:     'Combo Product',
    productName:     'Combo QA Test Product'+new Date().getTime(),
    secondaryName:   'QA Combo Secondary Name'+new Date().getTime(),
    slug:            'combo-qa-test-product'+new Date().getTime(),
    brand:           'Test 1',
    category:        'Test 1',
    tags:            ['combo', 'qa', 'automation'],
    status:          'Active',

    // Descriptions
    productDescription: 'This is an automated QA test combo product description.',
    invoiceDescription: 'Invoice description for QA combo product.',

    // Pricing & Inventory
    productCost:   '100',
    productPrice:  '199',
    alertQuantity: '5',

    // Visibility
    webVisibility: true,
    posVisibility: true,

    // SEO
    metaTitle:       'Combo QA Test Product | SEO Title',
    metaDescription: 'Meta description for combo QA test product.',
    metaKeywords:    ['combo', 'qa', 'test'],

    // Combo Items
     comboItems: [
        { productName: 'Product A', quantity: 2 },
        { productName: 'Product B', quantity: 1 },
    ],

        // Bundle Composition
    bundleType:                'Fixed Bundle',
    bundlePrice:               '350',
    allowOutOfStockComponents: false,

    // Inventory (Combo-specific)
    quantity:        '50',
    inventoryMode:   'Track Bundle',
    bundleSku:       'BUNDLE-QA-001',
    manageInventory: true,

    // Tax Pricing (Combo-specific)
    discountType:  'Percentage',
    discountValue: '10',
    autoCalculate: true,

    // Action
    action: 'save',
};

/**
 * Minimal required-fields-only data set
 */
const MINIMAL_COMBO_PRODUCT_DATA: AddComboProductFormData = {
    productType:   'Combo Product',
    productName:   'Minimal Combo Product'+new Date().getTime(),
    slug:          'minimal-combo-product',
    brand:         'Test Brand',
    category:      'Combo',
    status:        'Active',
    productCost:   '20',
    productPrice:  '40',
    alertQuantity: '2',
    action:        'save',
};

/**
 * Single combo item data set
 */
const SINGLE_COMBO_ITEM: ComboProductItem = {
    productName: '24 Inch Monitor 55',
    quantity:    1,
};

/**
 * Multiple combo items data set
 */
const MULTIPLE_COMBO_ITEMS: ComboProductItem[] = [
    { productName: '24 Inch Monitor 55', quantity: 1 },
    { productName: 'Vision Pro', quantity: 2 },
    { productName: 'APL-IP15-S', quantity: 3 },
];

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Add Combo Product — Full Coverage Test Suite', () => {

    let comboProductPage: AddComboProductPage;

    test.beforeEach(async ({ loggedIn,page }) => {
        comboProductPage = new AddComboProductPage(page);
        await comboProductPage.goto();
    });

    // ==========================================================
    // TC-001 : Page Load & Structure Verification
    // ==========================================================

    test('TC-001 | Page Load — should display page title and breadcrumb correctly', async () => {

        await expect(comboProductPage.pageTitle).toBeVisible();
        await expect(comboProductPage.pageTitle).toContainText('Add Product');

        await expect(comboProductPage.breadcrumbProductsLink).toBeVisible();
        await expect(comboProductPage.breadcrumbCurrentPage).toContainText('Add Product');

        // Action buttons
        await expect(comboProductPage.resetButton).toBeVisible();
        await expect(comboProductPage.saveAndEditButton).toBeVisible();
        await expect(comboProductPage.saveButton).toBeVisible();

        console.log('TC-001 Passed: Page loaded with correct title & breadcrumb');
    });

    // ==========================================================
    // TC-002 : Product Type Selection
    // ==========================================================

    test('TC-002 | Product Type — should select Combo Product type successfully', async () => {

        await comboProductPage.selectComboProductType();
        await expect(comboProductPage.productTypeDropdown).toContainText('Combo Product');

        console.log('TC-002 Passed: Combo Product type selected & verified');
    });

    // ==========================================================
    // TC-003 : Combo Items Section Visibility After Type Selection
    // ==========================================================

    test('TC-003 | Combo Items — Combo Items section should appear after selecting Combo Product', async ({ page }) => {

        await comboProductPage.selectComboProductType();

        const comboSection = page.locator("h2:text('Combo Products')");
        
        await expect(comboSection).toBeVisible();
        
        console.log('TC-003 Passed: Combo Items section visible after type selection');
    });

    // ==========================================================
    // TC-004 : General Information Section
    // ==========================================================

    test('TC-004 | General Information — should fill and verify all fields', async () => {

        await comboProductPage.selectComboProductType();

        // Product Name
        await comboProductPage.productNameInput.fill('TC-004 Combo Product');
        await expect(comboProductPage.productNameInput).toHaveValue('TC-004 Combo Product');

        // Secondary Name
        await comboProductPage.secondaryNameInput.fill('TC-004 Secondary');
        await expect(comboProductPage.secondaryNameInput).toHaveValue('TC-004 Secondary');

        // Slug
        await comboProductPage.slugInput.fill('tc-004-combo-product');
        await expect(comboProductPage.slugInput).toHaveValue('tc-004-combo-product');

        // Brand
        await comboProductPage.selectFromDropdown(comboProductPage.brandDropdown, 'Test 1');
        await expect(comboProductPage.brandDropdown).toContainText('Test 1');

        // Category
        await comboProductPage.selectFromDropdown(comboProductPage.categoryDropdown, 'Test 1');
        await expect(comboProductPage.categoryDropdown).toContainText('Test 1');
        await comboProductPage.categoryDropdown.click();

        // Tags
        const tags = ['combo', 'test', 'qa'];
        for (const tag of tags) {
            await comboProductPage.tagsInput.fill(tag); 
            await comboProductPage.tagsInput.press('Enter');
        }

        // Status
        await comboProductPage.selectFromDropdown(comboProductPage.statusDropdown, 'Active');
        await expect(comboProductPage.statusDropdown).toContainText('Active');

        console.log('TC-004 Passed: General Information fields filled & verified');
    });

    // ==========================================================
    // TC-005 : Auto-Generate Product Code
    // ==========================================================

    test('TC-005 | General Information — should auto-generate product code', async () => {

        await comboProductPage.selectComboProductType();

        const valueBefore = await comboProductPage.productCodeInput.inputValue();

        await comboProductPage.generateCodeButton.click();
        await comboProductPage.page.waitForTimeout(400);

        const valueAfter = await comboProductPage.productCodeInput.inputValue();
        expect(valueAfter).not.toBe('');
        expect(valueAfter.length).toBeGreaterThan(0);

        console.log(`TC-005 Passed: Code generated — before: "${valueBefore}", after: "${valueAfter}"`);
    });

    // ==========================================================
    // TC-006 : Barcode Symbology Dropdown
    // ==========================================================

    test('TC-006 | General Information — should select barcode symbology', async () => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.selectFromDropdown(
            comboProductPage.barcodeSymbologyDropdown,
            'CODE128'
        );
        await expect(comboProductPage.barcodeSymbologyDropdown).toContainText('CODE128');

        console.log('TC-006 Passed: Barcode symbology selected & verified');
    });

    // ==========================================================
    // TC-007 : Descriptions Section
    // ==========================================================

    test('TC-007 | Descriptions — should fill product and invoice descriptions', async () => {

        await comboProductPage.selectComboProductType();

        const productDesc = 'TC-007 combo product description for automation test.';
        const invoiceDesc = 'TC-007 combo invoice description for automation test.';

        await comboProductPage.productDescriptionEditor.click();
        await comboProductPage.productDescriptionEditor.fill(productDesc);
        await expect(comboProductPage.productDescriptionEditor).toContainText(productDesc);

        await comboProductPage.invoiceDescriptionEditor.click();
        await comboProductPage.invoiceDescriptionEditor.fill(invoiceDesc);
        await expect(comboProductPage.invoiceDescriptionEditor).toContainText(invoiceDesc);

        console.log('TC-007 Passed: Descriptions filled & verified');
    });

    // ==========================================================
    // TC-008 : Media Section
    // ==========================================================

    test('TC-008 | Media — should display product image dropzone', async () => {

        await comboProductPage.selectComboProductType();
        await expect(comboProductPage.productImageDropzone).toBeVisible();

        // Upload mock image buffer
        const mockPng = Buffer.from(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'base64'
        );

        await comboProductPage.productImageFileInput.setInputFiles({
            name:     'combo-test-image.png',
            mimeType: 'image/png',
            buffer:   mockPng,
        });

        await comboProductPage.page.waitForTimeout(500);
        console.log('TC-008 Passed: Media dropzone visible & mock image uploaded');
    });

    // ==========================================================
    // TC-009 : Pricing & Inventory — Core Fields
    // ==========================================================

    test('TC-009 | Pricing & Inventory — should fill cost, price and alert quantity', async () => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.productCostInput.fill('100');
        await expect(comboProductPage.productCostInput).toHaveValue('100');

        await comboProductPage.productPriceInput.fill('199');
        await expect(comboProductPage.productPriceInput).toHaveValue('199');

        await comboProductPage.alertQuantityInput.fill('5');
        await expect(comboProductPage.alertQuantityInput).toHaveValue('5');

        console.log('TC-009 Passed: Pricing & Inventory core fields filled & verified');
    });

    // ==========================================================
    // TC-010 : Pricing — Optional Dropdowns
    // ==========================================================

    test('TC-010 | Pricing — should select optional tax, unit, sale & purchase unit', async () => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.selectFromDropdown(comboProductPage.taxDropdown, 'Zero VAT (0%)');
        await expect(comboProductPage.taxDropdown).toContainText('Zero VAT (0%)');

        await comboProductPage.selectFromDropdown(comboProductPage.unitDropdown, 'Piece');
        await expect(comboProductPage.unitDropdown).toContainText('Piece');

        await comboProductPage.selectFromDropdown(comboProductPage.saleUnitDropdown, 'Piece');
        await expect(comboProductPage.saleUnitDropdown).toContainText('Piece');

        await comboProductPage.selectFromDropdown(comboProductPage.purchaseUnitDropdown, 'Piece');
        await expect(comboProductPage.purchaseUnitDropdown).toContainText('Piece');

        console.log('TC-010 Passed: Optional pricing dropdowns selected & verified');
    });

    // ==========================================================
    // TC-011 : Visibility Toggles
    // ==========================================================

    test('TC-011 | Visibility — should toggle Web and POS visibility', async () => {

        await comboProductPage.selectComboProductType();

        // Enable both
        await comboProductPage.setToggle(comboProductPage.webVisibilityToggle, true);
        expect(
            await comboProductPage.webVisibilityToggle.getAttribute('aria-checked')
        ).toBe('true');

        await comboProductPage.setToggle(comboProductPage.posVisibilityToggle, true);
        expect(
            await comboProductPage.posVisibilityToggle.getAttribute('aria-checked')
        ).toBe('true');

        // Disable both
        await comboProductPage.setToggle(comboProductPage.webVisibilityToggle, false);
        expect(
            await comboProductPage.webVisibilityToggle.getAttribute('aria-checked')
        ).toBe('false');

        await comboProductPage.setToggle(comboProductPage.posVisibilityToggle, false);
        expect(
            await comboProductPage.posVisibilityToggle.getAttribute('aria-checked')
        ).toBe('false');

        console.log('TC-011 Passed: Visibility toggles set & verified');
    });

    // ==========================================================
    // TC-012 : Visibility — Default State
    // ==========================================================

    test('TC-012 | Visibility — Web and POS visibility should be ON by default', async () => {

        await comboProductPage.selectComboProductType();

        expect(
            await comboProductPage.webVisibilityToggle.getAttribute('aria-checked')
        ).toBe('true');

        expect(
            await comboProductPage.posVisibilityToggle.getAttribute('aria-checked')
        ).toBe('true');

        console.log('TC-012 Passed: Visibility toggles are ON by default');
    });

    // ==========================================================
    // TC-013 : SEO Section
    // ==========================================================

    test('TC-013 | SEO — should fill meta title, description and keywords', async () => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.metaTitleInput.fill('TC-013 Combo Meta Title');
        await expect(comboProductPage.metaTitleInput).toHaveValue('TC-013 Combo Meta Title');

        await comboProductPage.metaDescriptionInput.fill('TC-013 combo meta description text');
        await expect(comboProductPage.metaDescriptionInput).toHaveValue(
            'TC-013 combo meta description text'
        );

        const keywords = ['combo-kw1', 'combo-kw2', 'combo-kw3'];
        for (const kw of keywords) {
            await comboProductPage.metaKeywordsInput.fill(kw);
            await comboProductPage.metaKeywordsInput.press('Enter');
        }

        console.log('TC-013 Passed: SEO fields filled & verified');
    });

    // ==========================================================
    // TC-014 : Combo Items — Add Single Item
    // ==========================================================

    test('TC-014 | Combo Products — should search and add a single product to combo list', async ({page}) => {

        await comboProductPage.selectComboProductType();

        // Verify search input is visible (no "Add Item" button in actual UI)
        await expect(comboProductPage.comboProductSearchInput).toBeVisible();

        // Search for the product
        await comboProductPage.comboProductSearchInput.fill(SINGLE_COMBO_ITEM.productName);
        await comboProductPage.page.waitForTimeout(500);

        // Select from autocomplete results
        const productOption = comboProductPage.page
            .getByRole('option', { name: SINGLE_COMBO_ITEM.productName, exact: false })
            .first();

        await productOption.waitFor({ state: 'visible', timeout: 5000 });
        await productOption.click();
        await comboProductPage.page.waitForTimeout(300);

        // Verify product row appeared in the table
        const tableRows = comboProductPage.page.locator(
            "h2:text('Combo Products') ~ div table tbody tr:not(:has(td[colspan]))"
        );
        await expect(tableRows).toHaveCount(1);
        await expect(tableRows.first()).toContainText(SINGLE_COMBO_ITEM.productName);        
        console.log('TC-014 Passed: Single combo product searched, added & verified in table');
    });

    // ==========================================================
    // TC-015 : Combo Products — Add Multiple Items via Search
    // ==========================================================

     test('TC-015 | Combo Products — should add multiple products to combo list via search', async () => {

        await comboProductPage.selectComboProductType();

        for (const item of MULTIPLE_COMBO_ITEMS) {

            // Search for the product
            await comboProductPage.comboProductSearchInput.click();
            await comboProductPage.comboProductSearchInput.fill(item.productName);
            await comboProductPage.page.waitForTimeout(500);

            // Select from autocomplete results
            const productOption = comboProductPage.page
                .getByRole('option', { name: item.productName, exact: false })
                .first();

            await productOption.waitFor({ state: 'visible', timeout: 5000 });
            await productOption.click();
            await comboProductPage.page.waitForTimeout(300);

            // Increase quantity using + stepper if quantity > 1
            if (item.quantity && item.quantity > 1) {
                const rows       = comboProductPage.page.locator(
                    "h2:text('Combo Products') ~ div table tbody tr:not(:has(td[colspan]))"
                );
                const lastRow    = rows.last();
                const plusButton = lastRow.locator('button[aria-label^="Increase quantity"]');

                for (let c = 0; c < item.quantity - 1; c++) {
                    await plusButton.click();
                    await comboProductPage.page.waitForTimeout(100);
                }
            }
        }

        // Verify all product rows are present in the table
        const tableRows = comboProductPage.page.locator(
            "h2:text('Combo Products') ~ div table tbody tr:not(:has(td[colspan]))"
        );
        await expect(tableRows).toHaveCount(MULTIPLE_COMBO_ITEMS.length);

        console.log(`TC-015 Passed: ${MULTIPLE_COMBO_ITEMS.length} combo items added & verified`);
    });

    // ==========================================================
    // TC-016 : Inventory Section
    // ==========================================================

    test('TC-016 | Inventory — should fill quantity, inventory mode, bundle SKU and manage inventory', async () => {

        await comboProductPage.selectComboProductType();

        const inventoryHeading = comboProductPage.page.getByRole('heading', {
            level: 2,
            name: /^Inventory$/,
        });

        await inventoryHeading.scrollIntoViewIfNeeded();
        await expect(inventoryHeading).toBeVisible();

        // Quantity
        await comboProductPage.quantityInput.fill('25');
        await expect(comboProductPage.quantityInput).toHaveValue('25');

        // Inventory Mode dropdown
        await comboProductPage.selectFromDropdown(
            comboProductPage.inventoryModeDropdown,
            'Reserve from Components'
        );
        await expect(comboProductPage.inventoryModeDropdown).toContainText('Reserve from Components');

        // Bundle SKU
        await comboProductPage.bundleSkuInput.fill('BUNDLE-SKU-016');
        await expect(comboProductPage.bundleSkuInput).toHaveValue('BUNDLE-SKU-016');

        // Manage Inventory checkbox
        await comboProductPage.setCheckbox(comboProductPage.manageInventoryCheckbox, true);
        await expect(comboProductPage.manageInventoryCheckbox).toBeChecked();

        console.log('TC-016 Passed: Inventory (combo-specific) fields filled & verified');
    });


    // ==========================================================
    // TC-017 : Inventory — Manage Inventory Checkbox Toggle
    // ==========================================================

     test('TC-017 | Inventory — should check and uncheck Manage Inventory checkbox', async () => {

        await comboProductPage.selectComboProductType();

        // Check
        await comboProductPage.setCheckbox(comboProductPage.manageInventoryCheckbox, true);
        await expect(comboProductPage.manageInventoryCheckbox).toBeChecked();

        // Uncheck
        await comboProductPage.setCheckbox(comboProductPage.manageInventoryCheckbox, false);
        await expect(comboProductPage.manageInventoryCheckbox).not.toBeChecked();

        console.log('TC-017 Passed: Manage Inventory checkbox toggled & verified');
    });

    // ==========================================================
    // TC-018 : Bundle Composition Section
    // ==========================================================

    test('TC-018 | Bundle Composition — should fill bundle type, price and out-of-stock checkbox', async () => {

        await comboProductPage.selectComboProductType();

        await expect(
            comboProductPage.page.locator("h2:text('Bundle Composition')")
        ).toBeVisible();

        // Bundle Type dropdown
        await comboProductPage.selectFromDropdown(
            comboProductPage.bundleTypeDropdown,
            'Fixed Price'
        );
        await expect(comboProductPage.bundleTypeDropdown).toContainText('Fixed Price');

        // Bundle Price
        await comboProductPage.bundlePriceInput.fill('350');
        await expect(comboProductPage.bundlePriceInput).toHaveValue('350');

        // Allow Out-of-Stock Components checkbox
        await comboProductPage.setCheckbox(
            comboProductPage.allowOutOfStockComponentsCheckbox,
            true
        );
        await expect(comboProductPage.allowOutOfStockComponentsCheckbox).toBeChecked();

        console.log('TC-018 Passed: Bundle Composition fields filled & verified');
    });


    // ==========================================================
    // TC-019 : Tax Pricing Section
    // ==========================================================

     test('TC-019 | Tax Pricing — should fill discount type, discount value and auto calculate', async () => {

        await comboProductPage.selectComboProductType();

        await expect(
            comboProductPage.page.locator("h2:text('Tax Pricing')")
        ).toBeVisible();

        // Discount Type dropdown
        await comboProductPage.selectFromDropdown(
            comboProductPage.discountTypeDropdown,
            'Percentage'
        );
        await expect(comboProductPage.discountTypeDropdown).toContainText('Percentage');

        // Discount Value
        await comboProductPage.discountValueInput.fill('10');
        await expect(comboProductPage.discountValueInput).toHaveValue('10');

        // Auto Calculate checkbox
        await comboProductPage.setCheckbox(comboProductPage.autoCalculateCheckbox, true);
        await expect(comboProductPage.autoCalculateCheckbox).toBeChecked();

        console.log('TC-019 Passed: Tax Pricing (combo-specific) fields filled & verified');
    });


    // ==========================================================
    // TC-020 : Reset Button
    // ==========================================================

    test('TC-020 | Reset — should clear the form when Reset is clicked', async () => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.productNameInput.fill('Reset Test Combo Product');
        await expect(comboProductPage.productNameInput).toHaveValue('Reset Test Combo Product');

        await comboProductPage.resetForm();
        await comboProductPage.page.waitForTimeout(500);

        await expect(comboProductPage.productNameInput).toHaveValue('');

        console.log('TC-020 Passed: Reset button cleared the form');
    });

    // ==========================================================
    // TC-021 : Required Field Validation
    // ==========================================================

    test('TC-021 | Validation — should not submit with missing required fields', async () => {

        await comboProductPage.selectComboProductType();

        // Click Save without filling required fields
        await comboProductPage.save();

        // Page should stay on create — no redirect on validation failure
        await expect(comboProductPage.page).toHaveURL(/\/products\/create/);

        console.log('TC-021 Passed: Form blocked submission with empty required fields');
    });

    // ==========================================================
    // TC-022 : Negative — Numeric Inputs Reject Non-Numeric
    // ==========================================================

    test('TC-022 | Validation — numeric inputs should reject non-numeric values', async () => {

        await comboProductPage.selectComboProductType();

        const initialCost = await comboProductPage.productCostInput.inputValue();
        await comboProductPage.productCostInput.click();
        await comboProductPage.page.keyboard.type('abc');
        await expect(comboProductPage.productCostInput).toHaveValue(initialCost);

        const initialPrice = await comboProductPage.productPriceInput.inputValue();
        await comboProductPage.productPriceInput.click();
        await comboProductPage.page.keyboard.type('xyz');
        await expect(comboProductPage.productPriceInput).toHaveValue(initialPrice);

        const initialAlert = await comboProductPage.alertQuantityInput.inputValue();
        await comboProductPage.alertQuantityInput.click();
        await comboProductPage.page.keyboard.type('!@#');
        await expect(comboProductPage.alertQuantityInput).toHaveValue(initialAlert);

        console.log('TC-022 Passed: Numeric inputs rejected non-numeric values');
    });

    // ==========================================================
    // TC-023 : Negative — Slug Hint Visible
    // ==========================================================

    test('TC-023 | Validation — slug hint should be visible', async ({ page }) => {

        await comboProductPage.selectComboProductType();

        await comboProductPage.slugInput.fill('Invalid Slug!');

        const slugHint = page.locator(
            'p:has-text("Lowercase letters, numbers, and hyphens allowed")'
        );
        await expect(slugHint).toBeVisible();

        console.log('TC-023 Passed: Slug validation hint visible');
    });

    // ==========================================================
    // TC-024 : Combo Items — Add Item Button Visible After Type Select
    // ==========================================================

    test('TC-024 | Combo Products — search input should be visible after type selection', async () => {

        await comboProductPage.selectComboProductType();

        // Verify search input is visible (no Add Item button in actual UI)
        await expect(comboProductPage.comboProductSearchInput).toBeVisible();
        await expect(comboProductPage.comboProductSearchInput).toHaveAttribute(
            'placeholder',
            'Search product'
        );

        console.log('TC-024 Passed: Combo product search input is visible after type selection');
    });

    // ==========================================================
    // TC-025 : Combo Items — Quantity Input Accepts Decimals
    // ==========================================================

    test('TC-025 | Combo Products — quantity stepper should increase count using + button', async () => {

            await comboProductPage.selectComboProductType();

            // First add a product via search
            await comboProductPage.comboProductSearchInput.fill(SINGLE_COMBO_ITEM.productName);
            await comboProductPage.page.waitForTimeout(500);

            const productOption = comboProductPage.page
                .getByRole('option', { name: SINGLE_COMBO_ITEM.productName, exact: false })
                .first();

            await productOption.waitFor({ state: 'visible', timeout: 5000 });
            await productOption.click();
            await comboProductPage.page.waitForTimeout(300);

            // Click + button twice on the added row
            const lastRow    = comboProductPage.page.locator(
                "h2:text('Combo Products') ~ div table tbody tr:not(:has(td[colspan]))"
            ).last();

            const plusButton = lastRow.locator('button[aria-label^="Increase quantity"]');
            await plusButton.click();
            await comboProductPage.page.waitForTimeout(100);
            await plusButton.click();
            await comboProductPage.page.waitForTimeout(100);

            // Quantity should now be 3 (started at 1, clicked + twice)
            const qtyInput = lastRow.getByRole('spinbutton', {
                name: new RegExp(`^Quantity for ${SINGLE_COMBO_ITEM.productName}$`),
            });
            await expect(qtyInput).toHaveValue('3');

            console.log('TC-025 Passed: Combo item quantity stepper + button increases count correctly');
    });


    // ==========================================================
    // TC-026 : E2E Minimal — Save with Required Fields Only
    // ==========================================================

    test('TC-026 | E2E Minimal — should save combo product with required fields only', async () => {

        await comboProductPage.runAddComboProductWorkflow(MINIMAL_COMBO_PRODUCT_DATA);

        await comboProductPage.page.waitForTimeout(1500);
        const url = comboProductPage.page.url();
        expect(url).not.toContain('/products/create');

        console.log('✅ TC-026 Passed: Minimal combo product saved successfully');
    });

    // ==========================================================
    // TC-027 : E2E Full Happy Path
    // ==========================================================

    test('TC-027 | E2E Full — should complete full combo product workflow successfully', async () => {

        await comboProductPage.runAddComboProductWorkflow(FULL_COMBO_PRODUCT_DATA);

        await comboProductPage.page.waitForTimeout(1500);
        const url = comboProductPage.page.url();
        expect(url).not.toContain('/products/create');

        console.log('✅ TC-027 Passed: Full combo product E2E workflow completed');
    });

    // ==========================================================
    // TC-028 : Save and Edit Action
    // ==========================================================

    test('TC-028 | Action — Save and Edit should redirect to product edit page', async () => {

        await comboProductPage.runAddComboProductWorkflow({
            ...MINIMAL_COMBO_PRODUCT_DATA,
            action: 'saveAndEdit',
        });

        await comboProductPage.page.waitForTimeout(1500);
        const url = comboProductPage.page.url();
        expect(url).toMatch(/\/products\/\d+\/edit|\/products\/edit/);

        console.log('✅ TC-028 Passed: Save and Edit redirected to edit page');
    });

    // ==========================================================
    // TC-029 : Different Product Types Available in Dropdown
    // ==========================================================

    test('TC-029 | Product Type — dropdown should contain all product type options', async ({ page }) => {

        await comboProductPage.productTypeDropdown.click();

        const expectedTypes = [
            'Standard Product',
            'Variant Product',
            'Combo Product',
            'Digital Product',
        ];

        for (const type of expectedTypes) {
            const option = page.getByRole('option', { name: type, exact: true });
            await expect(option).toBeVisible();
        }

        // Close dropdown
        await page.keyboard.press('Escape');

        console.log('✅ TC-029 Passed: All product type options visible in dropdown');
    });

    // ==========================================================
    // TC-030 : Sections Hidden for Non-Combo Types After Switch
    // ==========================================================

    test('TC-030 | Product Type — switching away from Combo should hide Combo Items section', async ({ page }) => {

        // First select Combo
        await comboProductPage.selectComboProductType();
        await expect(page.locator("h2:text('Combo Items')")).toBeVisible();

        // Switch to Standard Product
        await comboProductPage.selectFromDropdown(
            comboProductPage.productTypeDropdown,
            'Standard Product'
        );
        await comboProductPage.page.waitForTimeout(400);

        // Combo Items section should now be hidden
        await expect(page.locator("h2:text('Combo Items')")).not.toBeVisible();

        console.log('✅ TC-030 Passed: Combo Items section hidden after switching product type');
    });
});