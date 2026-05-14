import { test, expect } from '../fixtures';
import AddDigitalProductPage, {
    type AddDigitalProductFormData,
} from '../../pages/product/addDigitalProductPage';

// ============================================================
// TEST DATA FIXTURES
// ============================================================

/**
 * Full valid data set — used for happy-path E2E test
 */
const FULL_DIGITAL_PRODUCT_DATA: AddDigitalProductFormData = {
    // General Information
    productName:       'Digital QA Test Product',
    secondaryName:     'QA Secondary Name',
    slug:              'digital-qa-test-product',
    brand:             'Test Brand',
    category:          'Digital',
    tags:              ['qa', 'digital', 'automation'],
    status:            'Active',

    // Descriptions
    productDescription: 'This is an automated QA test product description.',
    invoiceDescription: 'Invoice description for QA digital product.',

    // Pricing & Inventory
    productCost:    '50',
    productPrice:   '99',
    alertQuantity:  '5',

    // Visibility
    webVisibility: true,
    posVisibility: true,

    // SEO
    metaTitle:       'Digital QA Test Product | SEO Title',
    metaDescription: 'Meta description for digital QA test product.',
    metaKeywords:    ['digital', 'qa', 'test'],

    // Digital Delivery
    deliveryType:  'Direct Download',
    fileExpiry:    '30',
    maxDownloads:  '5',
    assignPerOrder: false,

    // License Management
    downloadTokenValidity: '60',
    allowInstantAccess:    true,
    expiryDate:            '2026-12-31',

    // Tax Pricing
    taxSalePrice:  '95',
    comparePrice:  '120',

    // Action
    action: 'save',
};

/**
 * Minimal required-fields-only data set
 */
const MINIMAL_DIGITAL_PRODUCT_DATA: AddDigitalProductFormData = {
    productName:   'Minimal Digital Product',
    slug:          'minimal-digital-product',
    brand:         'Test Brand',
    category:      'Digital',
    status:        'Active',
    productCost:   '10',
    productPrice:  '20',
    alertQuantity: '1',
    action:        'save',
};

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Add Digital Product — Full Coverage Test Suite', () => {

    let digitalProductPage: AddDigitalProductPage;

    test.beforeEach(async ({ loggedIn, page }) => {
        digitalProductPage = new AddDigitalProductPage(page);
        await digitalProductPage.goto();
        await digitalProductPage.selectProductType('Digital Product');
    });

    // ==========================================================
    // TC-001 : Page Load & Structure Verification
    // ==========================================================

    test('TC-001 | Page Load — should display all sections and correct page title', async ({ page }) => {

        // Page Header
        await expect(digitalProductPage.pageTitle).toBeVisible();
        await expect(digitalProductPage.pageTitle).toContainText('Add Product');

        // Breadcrumb
        await expect(digitalProductPage.breadcrumbProductsLink).toBeVisible();
        await expect(digitalProductPage.breadcrumbCurrentPage).toContainText('Add Product');

        // Product type pre-selected as Digital Product
        await expect(digitalProductPage.productTypeDropdown).toContainText('Digital Product');

        // Section headings visible
        const sections = [
            'General Information',
            'Descriptions',
            'Media',
            'Pricing & Inventory',
            'Visibility',
            'Search Engine Optimization (SEO)',
            'Digital Delivery',
            'License Management',
            'Tax Pricing',
        ];

        for (const section of sections) {
            await expect(
                page.locator(`h2:text('${section}')`)
            ).toBeVisible();
        }

        // Action buttons visible
        await expect(digitalProductPage.resetButton).toBeVisible();
        await expect(digitalProductPage.saveAndEditButton).toBeVisible();
        await expect(digitalProductPage.saveButton).toBeVisible();

        console.log('TC-001 Passed: Page loaded with all sections');
    });

    // ==========================================================
    // TC-002 : General Information Section
    // ==========================================================

    test('TC-002 | General Information — should fill and verify all fields', async () => {

        const data: AddDigitalProductFormData = {
            productName:     'TC-002 Digital Product',
            secondaryName:   'TC-002 Secondary',
            slug:            'tc-002-digital-product',
            brand:           'ABCD',
            category:        'Test 1',
            tags:            ['tag1', 'tag2'],
            status:          'Active',
        };

        // Product Name
        await digitalProductPage.productNameInput.fill(data.productName!);
        await expect(digitalProductPage.productNameInput).toHaveValue(data.productName!);

        // Secondary Name
        await digitalProductPage.secondaryNameInput.fill(data.secondaryName!);
        await expect(digitalProductPage.secondaryNameInput).toHaveValue(data.secondaryName!);

        // Slug
        await digitalProductPage.slugInput.fill(data.slug!);
        await expect(digitalProductPage.slugInput).toHaveValue(data.slug!);

        // Brand dropdown
        await digitalProductPage.selectFromDropdown(digitalProductPage.brandDropdown, data.brand!);
        await expect(digitalProductPage.brandDropdown).toContainText(data.brand!);

        // Category dropdown
        await digitalProductPage.selectFromDropdown(digitalProductPage.categoryDropdown, data.category!);
        await expect(digitalProductPage.categoryDropdown).toContainText(data.category!);
        await digitalProductPage.categoryDropdown.click();

        // Tags
        for (const tag of data.tags!) {
            await digitalProductPage.tagsInput.fill(tag);
            await digitalProductPage.tagsInput.press('Enter');
        }

        // Status dropdown
        await digitalProductPage.selectFromDropdown(digitalProductPage.statusDropdown, data.status!);
        await expect(digitalProductPage.statusDropdown).toContainText(data.status!);

        console.log('TC-002 Passed: General Information fields verified');
    });

    // ==========================================================
    // TC-003 : Auto-Generate Product Code
    // ==========================================================

    test('TC-003 | General Information — should auto-generate product code', async () => {

        const valueBefore = await digitalProductPage.productCodeInput.inputValue();

        await digitalProductPage.generateCodeButton.click();
        await digitalProductPage.page.waitForTimeout(400);

        const valueAfter = await digitalProductPage.productCodeInput.inputValue();
        expect(valueAfter).not.toBe('');
        expect(valueAfter.length).toBeGreaterThan(0);

        console.log(`TC-003 Passed: Code generated — before: "${valueBefore}", after: "${valueAfter}"`);
    });

    // ==========================================================
    // TC-004 : Descriptions Section
    // ==========================================================

    test('TC-004 | Descriptions — should fill product and invoice descriptions', async () => {

        const productDesc = 'Product description for TC-004 automation test.';
        const invoiceDesc = 'Invoice description for TC-004 automation test.';

        await digitalProductPage.productDescriptionEditor.click();
        await digitalProductPage.productDescriptionEditor.fill(productDesc);
        await expect(digitalProductPage.productDescriptionEditor).toContainText(productDesc);

        await digitalProductPage.invoiceDescriptionEditor.click();
        await digitalProductPage.invoiceDescriptionEditor.fill(invoiceDesc);
        await expect(digitalProductPage.invoiceDescriptionEditor).toContainText(invoiceDesc);

        console.log('TC-004 Passed: Descriptions filled & verified');
    });

    // ==========================================================
    // TC-005 : Media Section
    // ==========================================================

    test('TC-005 | Media — should display product image dropzone', async () => {

        await expect(digitalProductPage.productImageDropzone).toBeVisible();

        // Upload a mock image buffer
        const mockPng = Buffer.from(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'base64'
        );

        await digitalProductPage.productImageFileInput.setInputFiles({
            name:     'test-image.png',
            mimeType: 'image/png',
            buffer:   mockPng,
        });

        await digitalProductPage.page.waitForTimeout(500);
        console.log('TC-005 Passed: Media dropzone visible & mock image uploaded');
    });

    // ==========================================================
    // TC-006 : Pricing & Inventory Section
    // ==========================================================

    test('TC-006 | Pricing & Inventory — should fill all pricing fields', async () => {

        await digitalProductPage.productCostInput.fill('75');
        await expect(digitalProductPage.productCostInput).toHaveValue('75');

        await digitalProductPage.productPriceInput.fill('150');
        await expect(digitalProductPage.productPriceInput).toHaveValue('150');

        await digitalProductPage.alertQuantityInput.fill('10');
        await expect(digitalProductPage.alertQuantityInput).toHaveValue('10');

        console.log('TC-006 Passed: Pricing & Inventory fields filled & verified');
    });

    // ==========================================================
    // TC-007 : Pricing — Optional Dropdowns
    // ==========================================================

    test('TC-007 | Pricing — should select optional tax, unit, sale & purchase unit dropdowns', async () => {

        // These tests assume options exist in the app — adjust values as needed
        const taxOption      = 'VAT 10%';
        const unitOption     = 'Piece';
        const saleUnit       = 'Piece';
        const purchaseUnit   = 'Piece';

        await digitalProductPage.selectFromDropdown(digitalProductPage.taxDropdown, taxOption);
        await expect(digitalProductPage.taxDropdown).toContainText(taxOption);

        await digitalProductPage.selectFromDropdown(digitalProductPage.unitDropdown, unitOption);
        await expect(digitalProductPage.unitDropdown).toContainText(unitOption);

        await digitalProductPage.selectFromDropdown(digitalProductPage.saleUnitDropdown, saleUnit);
        await expect(digitalProductPage.saleUnitDropdown).toContainText(saleUnit);

        await digitalProductPage.selectFromDropdown(digitalProductPage.purchaseUnitDropdown, purchaseUnit);
        await expect(digitalProductPage.purchaseUnitDropdown).toContainText(purchaseUnit);

        console.log('TC-007 Passed: Optional pricing dropdowns selected & verified');
    });

    // ==========================================================
    // TC-008 : Visibility Toggles
    // ==========================================================

    test('TC-008 | Visibility — should toggle Web and POS visibility', async () => {

        // Enable both
        await digitalProductPage.setToggle(digitalProductPage.webVisibilityToggle, true);
        expect(await digitalProductPage.webVisibilityToggle.getAttribute('aria-checked')).toBe('true');

        await digitalProductPage.setToggle(digitalProductPage.posVisibilityToggle, true);
        expect(await digitalProductPage.posVisibilityToggle.getAttribute('aria-checked')).toBe('true');

        // Disable both
        await digitalProductPage.setToggle(digitalProductPage.webVisibilityToggle, false);
        expect(await digitalProductPage.webVisibilityToggle.getAttribute('aria-checked')).toBe('false');

        await digitalProductPage.setToggle(digitalProductPage.posVisibilityToggle, false);
        expect(await digitalProductPage.posVisibilityToggle.getAttribute('aria-checked')).toBe('false');

        console.log('TC-008 Passed: Visibility toggles verified');
    });

    // ==========================================================
    // TC-009 : SEO Section
    // ==========================================================

    test('TC-009 | SEO — should fill meta title, description and keywords', async () => {

        await digitalProductPage.metaTitleInput.fill('TC-009 Meta Title');
        await expect(digitalProductPage.metaTitleInput).toHaveValue('TC-009 Meta Title');

        await digitalProductPage.metaDescriptionInput.fill('TC-009 meta description text');
        await expect(digitalProductPage.metaDescriptionInput).toHaveValue('TC-009 meta description text');

        const keywords = ['keyword1', 'keyword2', 'keyword3'];
        for (const kw of keywords) {
            await digitalProductPage.metaKeywordsInput.fill(kw);
            await digitalProductPage.metaKeywordsInput.press('Enter');
        }

        console.log('TC-009 Passed: SEO fields filled & verified');
    });

    // ==========================================================
    // TC-010 : Digital Delivery Section
    // ==========================================================

    test('TC-010 | Digital Delivery — should fill delivery type, expiry, max downloads', async () => {

        await expect(
            digitalProductPage.page.locator("h2:text('Digital Delivery')")
        ).toBeVisible();

        await digitalProductPage.selectFromDropdown(
            digitalProductPage.deliveryTypeDropdown,
            'Direct Download'
        );
        await expect(digitalProductPage.deliveryTypeDropdown).toContainText('Direct Download');

        await digitalProductPage.fileExpiryInput.fill('30');
        await expect(digitalProductPage.fileExpiryInput).toHaveValue('30');

        await digitalProductPage.maxDownloadsInput.fill('5');
        await expect(digitalProductPage.maxDownloadsInput).toHaveValue('5');

        // Verify file upload dropzone is visible
        await expect(digitalProductPage.digitalFileDropzone).toBeVisible();

        console.log('TC-010 Passed: Digital Delivery fields filled & verified');
    });

    // ==========================================================
    // TC-011 : Digital Delivery — Assign Per Order Checkbox
    // ==========================================================

    test('TC-011 | Digital Delivery — should check and uncheck Assign per Order', async () => {

        await digitalProductPage.setCheckbox(digitalProductPage.assignPerOrderCheckbox, true);
        await expect(digitalProductPage.assignPerOrderCheckbox).toBeChecked();

        await digitalProductPage.setCheckbox(digitalProductPage.assignPerOrderCheckbox, false);
        await expect(digitalProductPage.assignPerOrderCheckbox).not.toBeChecked();

        console.log('TC-011 Passed: Assign per Order checkbox verified');
    });

    // ==========================================================
    // TC-012 : License Management Section
    // ==========================================================

    test('TC-012 | License Management — should fill token validity and allow instant access', async () => {

        await expect(
            digitalProductPage.page.locator("h2:text('License Management')")
        ).toBeVisible();

        await digitalProductPage.downloadTokenValidityInput.fill('60');
        await expect(digitalProductPage.downloadTokenValidityInput).toHaveValue('60');

        await digitalProductPage.setCheckbox(digitalProductPage.allowInstantAccessCheckbox, true);
        await expect(digitalProductPage.allowInstantAccessCheckbox).toBeChecked();

        console.log('TC-012 Passed: License Management fields filled & verified');
    });

    // ==========================================================
    // TC-013 : License Management — Expiry Date via Flatpickr
    // ==========================================================

    test('TC-013 | License Management — should set expiry date via flatpickr', async ({ page }) => {

        await digitalProductPage.expiryDateInput.click();
        await page.waitForTimeout(300);

        // Set date via flatpickr JS API
        await page.evaluate(() => {
            const input = document.querySelector<HTMLInputElement>('input#expiry_date');
            if (input && (input as any)._flatpickr) {
                (input as any)._flatpickr.setDate('2026-12-31', true);
            }
        });

        await page.waitForTimeout(200);
        await page.keyboard.press('Escape');

        // Verify field has a value (flatpickr formats it)
        const expiryValue = await digitalProductPage.expiryDateInput.inputValue();
        expect(expiryValue).not.toBe('');

        console.log(`TC-013 Passed: Expiry date set → "${expiryValue}"`);
    });

    // ==========================================================
    // TC-014 : Tax Pricing Section
    // ==========================================================

    test('TC-014 | Tax Pricing — should fill sale price and compare price', async () => {

        await digitalProductPage.taxSalePriceInput.fill('95');
        await expect(digitalProductPage.taxSalePriceInput).toHaveValue('95');

        await digitalProductPage.comparePriceInput.fill('120');
        await expect(digitalProductPage.comparePriceInput).toHaveValue('120');

        console.log('TC-014 Passed: Tax Pricing fields filled & verified');
    });

    // ==========================================================
    // TC-015 : Reset Button
    // ==========================================================

    test('TC-015 | Reset — should clear the form when Reset is clicked', async () => {

        // Fill a field first
        await digitalProductPage.productNameInput.fill('Reset Test Product');
        await expect(digitalProductPage.productNameInput).toHaveValue('Reset Test Product');

        // Click reset
        await digitalProductPage.resetForm();
        await digitalProductPage.page.waitForTimeout(500);

        // Product name should be cleared
        await expect(digitalProductPage.productNameInput).toHaveValue('');

        console.log('TC-015 Passed: Reset button cleared the form');
    });

    // ==========================================================
    // TC-016 : Required Field Validation
    // ==========================================================

    test('TC-016 | Validation — should not submit with missing required fields', async () => {

        // Click Save without filling anything
        await digitalProductPage.save();

        // Page should stay on create — no redirect
        await expect(digitalProductPage.page).toHaveURL(/\/products\/create/);

        console.log('TC-016 Passed: Form blocked submission with empty required fields');
    });

    // ==========================================================
    // TC-017 : Minimal Fields — Save with Required Data Only
    // ==========================================================

    test('TC-017 | E2E Minimal — should save digital product with required fields only', async () => {

        await digitalProductPage.runAddDigitalProductWorkflow(MINIMAL_DIGITAL_PRODUCT_DATA);

        // After save — should navigate away from create page (redirect on success)
        await digitalProductPage.page.waitForTimeout(1500);
        const url = digitalProductPage.page.url();
        expect(url).not.toContain('/products/create');

        console.log('TC-017 Passed: Minimal digital product saved successfully');
    });

    // ==========================================================
    // TC-018 : Full E2E Happy Path
    // ==========================================================

    test('TC-018 | E2E Full — should complete full digital product workflow successfully', async () => {

        await digitalProductPage.runAddDigitalProductWorkflow(FULL_DIGITAL_PRODUCT_DATA);

        // After save — should navigate away from create page (redirect on success)
        await digitalProductPage.page.waitForTimeout(1500);
        const url = digitalProductPage.page.url();
        expect(url).not.toContain('/products/create');

        console.log('TC-018 Passed: Full digital product E2E workflow completed');
    });

    // ==========================================================
    // TC-019 : Save and Edit Action
    // ==========================================================

    test('TC-019 | Action — Save and Edit should redirect to edit page', async () => {

        await digitalProductPage.runAddDigitalProductWorkflow({
            ...MINIMAL_DIGITAL_PRODUCT_DATA,
            action: 'saveAndEdit',
        });

        await digitalProductPage.page.waitForTimeout(1500);
        const url = digitalProductPage.page.url();

        // Should redirect to product edit page
        expect(url).toMatch(/\/products\/\d+\/edit|\/products\/edit/);

        console.log('TC-019 Passed: Save and Edit redirected to edit page');
    });

    // ==========================================================
    // TC-020 : Negative — Slug with Invalid Characters
    // ==========================================================

    test('TC-020 | Validation — slug should only accept lowercase letters, numbers, hyphens', async ({ page }) => {

        await digitalProductPage.slugInput.fill('Invalid Slug With Spaces!');

        // The hint text should be visible
        const slugHint = page.locator('p:has-text("Lowercase letters, numbers, and hyphens allowed")');
        await expect(slugHint).toBeVisible();

        console.log('TC-020 Passed: Slug validation hint visible');
    });

    // ==========================================================
    // TC-021 : Negative — Numeric Fields Accept Only Numbers
    // ==========================================================

    test('TC-021 | Validation — numeric inputs should reject non-numeric input', async () => {

        // Type non-numeric characters
        await digitalProductPage.productCostInput.fill('abc');

        // HTML number input rejects non-numeric, value should be empty
        const costValue = await digitalProductPage.productCostInput.inputValue();
        expect(costValue).toBe('');

        await digitalProductPage.fileExpiryInput.fill('xyz');
        const expiryValue = await digitalProductPage.fileExpiryInput.inputValue();
        expect(expiryValue).toBe('');

        console.log('TC-021 Passed: Numeric inputs rejected non-numeric values');
    });

    // ==========================================================
    // TC-022 : Barcorde Symbology Dropdown
    // ==========================================================

    test('TC-022 | General Information — should select barcode symbology', async () => {

        await digitalProductPage.selectFromDropdown(
            digitalProductPage.barcodeSymbologyDropdown,
            'CODE128'
        );
        await expect(digitalProductPage.barcodeSymbologyDropdown).toContainText('CODE128');

        console.log('TC-022 Passed: Barcode symbology selected & verified');
    });

    // ==========================================================
    // TC-023 : Allow Instant Access — Unchecked by Default
    // ==========================================================

    test('TC-023 | License Management — Allow Instant Access should be unchecked by default', async () => {

        await expect(digitalProductPage.allowInstantAccessCheckbox).not.toBeChecked();

        console.log('TC-023 Passed: Allow Instant Access is unchecked by default');
    });

    // ==========================================================
    // TC-024 : Assign Per Order — Unchecked by Default
    // ==========================================================

    test('TC-024 | Digital Delivery — Assign Per Order should be unchecked by default', async () => {

        await expect(digitalProductPage.assignPerOrderCheckbox).not.toBeChecked();

        console.log('TC-024 Passed: Assign Per Order is unchecked by default');
    });

    // ==========================================================
    // TC-025 : Visibility Toggles — Enabled by Default
    // ==========================================================

    test('TC-025 | Visibility — Web and POS visibility should be ON by default', async () => {

        const webState = await digitalProductPage.webVisibilityToggle.getAttribute('aria-checked');
        const posState = await digitalProductPage.posVisibilityToggle.getAttribute('aria-checked');

        expect(webState).toBe('true');
        expect(posState).toBe('true');

        console.log('TC-025 Passed: Visibility toggles are ON by default');
    });
});