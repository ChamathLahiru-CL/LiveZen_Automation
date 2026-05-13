import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

// ============================================================
// INTERFACE
// ============================================================

export interface AddProductFormData {
    // General Information
    productType?: string;
    productCode?: string;
    generateAutoCode?: boolean;
    productName?: string;
    secondaryName?: string;
    slug?: string;
    barcodeSymbology?: string;
    brand?: string;
    category?: string;
    tags?: string[];
    status?: string;

    // Descriptions
    productDescription?: string;
    invoiceDescription?: string;

    // Media
    productImagePath?: string;
    mockImageBuffer?: Buffer;

    // Pricing & Inventory
    productCost?: string;
    productPrice?: string;
    tax?: string;
    unit?: string;
    saleUnit?: string;
    purchaseUnit?: string;
    alertQuantity?: string;

    // Visibility
    webVisibility?: boolean;
    posVisibility?: boolean;

    // SEO
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];

    // Variant Options (Variant Product only)
    variantColor?: boolean;
    variantMaterial?: boolean;
    variantPattern?: boolean;
    variantSize?: boolean;
    variantStyle?: boolean;

    // Inventory
    sku?: string;
    barcode?: string;
    quantity?: string;
    manageInventory?: boolean;
    allowBackorder?: boolean;
    stockTracking?: boolean;

    // Shipping
    length?: string;
    height?: string;
    width?: string;
    weight?: string;
    shippingClass?: string;
    fulfillmentLocation?: string;

    // Tax Pricing
    taxCostPrice?: string;
    taxSalePrice?: string;
    comparePrice?: string;
    discountRules?: string;

    // Variant Details
    lowStockAlert?: string;

    // Final Action
    action?: 'save' | 'saveAndEdit' | 'reset';
}

// ============================================================
// PAGE OBJECT
// ============================================================

export default class AddProductPage {
    readonly page: Page;

    // ── General Information ──────────────────────────────────
    readonly productTypeDropdown: Locator;
    readonly productCodeInput: Locator;
    readonly generateCodeButton: Locator;
    readonly productNameInput: Locator;
    readonly secondaryNameInput: Locator;
    readonly slugInput: Locator;
    readonly barcodeSymbologyDropdown: Locator;
    readonly brandDropdown: Locator;
    readonly categoryDropdown: Locator;
    readonly tagsInput: Locator;
    readonly statusDropdown: Locator;

    // ── Descriptions ─────────────────────────────────────────
    readonly productDescriptionEditor: Locator;
    readonly invoiceDescriptionEditor: Locator;

    // ── Media ─────────────────────────────────────────────────
    readonly productImageDropzone: Locator;
    readonly productImageFileInput: Locator;

    // ── Pricing & Inventory ───────────────────────────────────
    readonly productCostInput: Locator;
    readonly productPriceInput: Locator;
    readonly taxDropdown: Locator;
    readonly unitDropdown: Locator;
    readonly saleUnitDropdown: Locator;
    readonly purchaseUnitDropdown: Locator;
    readonly alertQuantityInput: Locator;

    // ── Visibility ────────────────────────────────────────────
    readonly webVisibilityToggle: Locator;
    readonly posVisibilityToggle: Locator;

    // ── SEO ───────────────────────────────────────────────────
    readonly metaTitleInput: Locator;
    readonly metaDescriptionInput: Locator;
    readonly metaKeywordsInput: Locator;

    // ── Variant Options ───────────────────────────────────────
    readonly variantColorCheckbox: Locator;
    readonly variantMaterialCheckbox: Locator;
    readonly variantPatternCheckbox: Locator;
    readonly variantSizeCheckbox: Locator;
    readonly variantStyleCheckbox: Locator;
    readonly variantSKUInput: Locator;

    // ── Inventory ─────────────────────────────────────────────
    readonly skuInput: Locator;
    readonly barcodeInput: Locator;
    readonly quantityInput: Locator;
    readonly manageInventoryCheckbox: Locator;
    readonly allowBackorderCheckbox: Locator;
    readonly stockTrackingCheckbox: Locator;

    // ── Shipping ──────────────────────────────────────────────
    readonly lengthInput: Locator;
    readonly heightInput: Locator;
    readonly widthInput: Locator;
    readonly weightInput: Locator;
    readonly shippingClassDropdown: Locator;
    readonly fulfillmentLocationDropdown: Locator;

    // ── Tax Pricing ───────────────────────────────────────────
    readonly taxCostPriceInput: Locator;
    readonly taxSalePriceInput: Locator;
    readonly comparePriceInput: Locator;
    readonly discountRulesTextarea: Locator;

    // ── Variant Details ───────────────────────────────────────
    readonly lowStockAlertInput: Locator;

    // ── Breadcrumb ────────────────────────────────────────────
    readonly breadcrumbProductsLink: Locator;
    readonly breadcrumbCurrentPage: Locator;
    readonly pageTitle: Locator;

    // ── Actions ───────────────────────────────────────────────
    readonly resetButton: Locator;
    readonly saveAndEditButton: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // General Information
        this.productTypeDropdown      = page.locator('button#productTypeId');
        this.productCodeInput         = page.locator('input#product');
        this.generateCodeButton       = page.locator('button[title="Generate new code"]');
        this.productNameInput         = page.locator('input#name');
        this.secondaryNameInput       = page.locator('input#secondaryName');
        this.slugInput                = page.locator('input#slug');
        this.barcodeSymbologyDropdown = page.locator('button#barcodeSymbology');
        this.brandDropdown            = page.locator('button#brand');
        this.categoryDropdown         = page.locator('button#categories');
        this.tagsInput                = page.locator('input#tags');
        this.statusDropdown           = page.locator('button#status');

        // Descriptions
        this.productDescriptionEditor = page.locator('div.ProseMirror').first();
        this.invoiceDescriptionEditor = page.locator('div.ProseMirror').last();

        // Media
        this.productImageDropzone  = page.locator('div.dropzone');
        this.productImageFileInput = page.locator("input[type='file'][accept*='image']");

        // Pricing & Inventory
        this.productCostInput     = page.locator('input#costPrice');
        this.productPriceInput    = page.locator('input#salePrice');
        this.taxDropdown          = page.locator('button#taxId');
        this.unitDropdown         = page.locator('button#unitId');
        this.saleUnitDropdown     = page.locator('button#saleUnitId');
        this.purchaseUnitDropdown = page.locator('button#purchaseUnitId');
        this.alertQuantityInput   = page.locator('input#alertQuantity');

        // Visibility
        this.webVisibilityToggle = page.getByRole('switch', { name: 'Web Visibility' });
        this.posVisibilityToggle = page.getByRole('switch', { name: 'POS Visibility' });

        // SEO
        this.metaTitleInput       = page.locator('input#meta_title');
        this.metaDescriptionInput = page.locator('input#meta_description');
        this.metaKeywordsInput    = page.locator('input#meta_keywords');

        // Variant Options
        this.variantColorCheckbox    = page.getByLabel('Color');
        this.variantMaterialCheckbox = page.getByLabel('Material');
        this.variantPatternCheckbox  = page.getByLabel('Pattern');
        this.variantSizeCheckbox     = page.getByLabel('Size');
        this.variantStyleCheckbox    = page.getByLabel('Style');

        // SKU input inside the Variants table row
        // (only visible in DOM after at least one variant checkbox is checked)
        this.variantSKUInput = page.locator('input[placeholder="Enter SKU"]').first();

        // Inventory
        this.skuInput                = page.locator('input#sku');
        this.barcodeInput            = page.locator('input#barcode');
        this.quantityInput           = page.locator('input#quantity');
        this.manageInventoryCheckbox = page.locator('input#manage_inventory');
        this.allowBackorderCheckbox  = page.locator('input#allow_backorder');
        this.stockTrackingCheckbox   = page.locator('input#stock_tracking');

        // Shipping
        this.lengthInput                 = page.locator('input#length');
        this.heightInput                 = page.locator('input#height');
        this.widthInput                  = page.locator('input#width');
        this.weightInput                 = page.locator('input#weight');
        this.shippingClassDropdown       = page.locator('button#shipping_class_id');
        this.fulfillmentLocationDropdown = page.locator('button#fulfillment_location');

        // Tax Pricing
        this.taxCostPriceInput    = page.locator('input#cost_price');
        this.taxSalePriceInput    = page.locator('input#sale_price');
        this.comparePriceInput    = page.locator('input#compare_price');
        this.discountRulesTextarea = page.locator('textarea#discount_rules');

        // Variant Details
        this.lowStockAlertInput = page.locator('input#low_stock_alert');

        // Breadcrumb & Page Header
        this.pageTitle              = page.locator('h1.text-xl.font-semibold');
        this.breadcrumbProductsLink = page.locator("nav[aria-label='Breadcrumb'] a[href='/products']");
        this.breadcrumbCurrentPage  = page.locator("nav[aria-label='Breadcrumb'] span.font-medium");

        // Actions
        this.resetButton       = page.locator("//button[.//span[text()='Reset']]");
        this.saveAndEditButton = page.locator("//button[.//span[text()='Save and Edit']]");
        this.saveButton        = page.locator("//button[.//span[text()='Save']]");
    }

    // ============================================================
    // NAVIGATION
    // ============================================================

    async goto() {
        await this.page.goto('https://app.livezencloud.com/products/create');
        await this.page.waitForLoadState('networkidle');
    }

    // ============================================================
    // CORE HELPERS
    // ============================================================

    async selectFromDropdown(dropdown: Locator, optionText: string) {
        await dropdown.click();
        const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
        const searchInput    = this.page.locator("input[placeholder='Search options...']");
        if (await searchInput.isVisible()) {
            await searchInput.fill(optionText);
        }
        await dropdownOption.scrollIntoViewIfNeeded();
        await dropdownOption.click();
    }

    async setToggle(toggle: Locator, enable: boolean) {
        const current = await toggle.getAttribute('aria-checked') === 'true';
        if (current !== enable) await toggle.click();
    }

    async setCheckbox(checkbox: Locator, check: boolean) {
        check ? await checkbox.check() : await checkbox.uncheck();
    }

    // ============================================================
    // ✅ SECTION FILL METHODS
    // ============================================================

    // ── Step 1 : General Information ─────────────────────────

    private async fillGeneralInformation(data: AddProductFormData) {

        if (data.productType) {
            await this.selectFromDropdown(this.productTypeDropdown, data.productType);
            await expect(this.productTypeDropdown).toContainText(data.productType);
        }

        if (data.generateAutoCode) {
            await this.generateCodeButton.click();
            await this.page.waitForTimeout(300);
        }

        if (data.productCode) {
            await this.productCodeInput.clear();
            await this.productCodeInput.fill(data.productCode);
            await expect(this.productCodeInput).toHaveValue(data.productCode);
        }

        if (data.productName) {
            await this.productNameInput.fill(data.productName);
            await expect(this.productNameInput).toHaveValue(data.productName);
        }

        if (data.secondaryName) {
            await this.secondaryNameInput.fill(data.secondaryName);
            await expect(this.secondaryNameInput).toHaveValue(data.secondaryName);
        }

        if (data.slug) {
            await this.slugInput.fill(data.slug);
            await expect(this.slugInput).toHaveValue(data.slug);
        }

        if (data.barcodeSymbology) {
            await this.selectFromDropdown(this.barcodeSymbologyDropdown, data.barcodeSymbology);
            await expect(this.barcodeSymbologyDropdown).toContainText(data.barcodeSymbology);
        }

        if (data.brand) {
            await this.selectFromDropdown(this.brandDropdown, data.brand);
            await expect(this.brandDropdown).toContainText(data.brand);
        }

        if (data.category) {
            await this.selectFromDropdown(this.categoryDropdown, data.category);
            await expect(this.categoryDropdown).toContainText(data.category);
            await this.categoryDropdown.click(); // Close dropdown
        }

        if (data.tags && data.tags.length > 0) {
            for (const tag of data.tags) {
                await this.tagsInput.fill(tag);
                await this.tagsInput.press('Enter');
            }
        }

        if (data.status) {
            await this.selectFromDropdown(this.statusDropdown, data.status);
            await expect(this.statusDropdown).toContainText(data.status);
        }

        console.log('   ✅ General Information filled & verified');
    }

    // ── Step 2 : Descriptions ─────────────────────────────────

    private async fillDescriptions(data: AddProductFormData) {

        if (data.productDescription) {
            await this.productDescriptionEditor.click();
            await this.productDescriptionEditor.fill(data.productDescription);
            await expect(this.productDescriptionEditor).toContainText(data.productDescription);
        }

        if (data.invoiceDescription) {
            await this.invoiceDescriptionEditor.click();
            await this.invoiceDescriptionEditor.fill(data.invoiceDescription);
            await expect(this.invoiceDescriptionEditor).toContainText(data.invoiceDescription);
        }

        console.log('   ✅ Descriptions filled & verified');
    }

    // ── Step 3 : Media ────────────────────────────────────────

    private async fillMedia(data: AddProductFormData) {

        await expect(this.productImageDropzone).toBeVisible();

        if (data.productImagePath) {
            await this.productImageFileInput.setInputFiles(data.productImagePath);
            await this.page.waitForTimeout(500);
        } else if (data.mockImageBuffer) {
            await this.productImageFileInput.setInputFiles({
                name: 'mock-product-image.png',
                mimeType: 'image/png',
                buffer: data.mockImageBuffer,
            });
            await this.page.waitForTimeout(500);
        }

        console.log('   ✅ Media section handled');
    }

    // ── Step 4 : Pricing & Inventory ─────────────────────────

    private async fillPricingAndInventory(data: AddProductFormData) {

        if (data.productCost) {
            await this.productCostInput.fill(data.productCost);
            await expect(this.productCostInput).toHaveValue(data.productCost);
        }

        if (data.productPrice) {
            await this.productPriceInput.fill(data.productPrice);
            await expect(this.productPriceInput).toHaveValue(data.productPrice);
        }

        if (data.tax) {
            await this.selectFromDropdown(this.taxDropdown, data.tax);
            await expect(this.taxDropdown).toContainText(data.tax);
        }

        if (data.unit) {
            await this.selectFromDropdown(this.unitDropdown, data.unit);
            await expect(this.unitDropdown).toContainText(data.unit);
        }

        if (data.saleUnit) {
            await this.selectFromDropdown(this.saleUnitDropdown, data.saleUnit);
            await expect(this.saleUnitDropdown).toContainText(data.saleUnit);
        }

        if (data.purchaseUnit) {
            await this.selectFromDropdown(this.purchaseUnitDropdown, data.purchaseUnit);
            await expect(this.purchaseUnitDropdown).toContainText(data.purchaseUnit);
        }

        if (data.alertQuantity) {
            await this.alertQuantityInput.fill(data.alertQuantity);
            await expect(this.alertQuantityInput).toHaveValue(data.alertQuantity);
        }

        console.log('   ✅ Pricing & Inventory filled & verified');
    }

    // ── Step 5 : Visibility ───────────────────────────────────

    private async fillVisibility(data: AddProductFormData) {

        if (data.webVisibility !== undefined) {
            await this.setToggle(this.webVisibilityToggle, data.webVisibility);
            const state = await this.webVisibilityToggle.getAttribute('aria-checked');
            expect(state).toBe(String(data.webVisibility));
        }

        if (data.posVisibility !== undefined) {
            await this.setToggle(this.posVisibilityToggle, data.posVisibility);
            const state = await this.posVisibilityToggle.getAttribute('aria-checked');
            expect(state).toBe(String(data.posVisibility));
        }

        console.log('   ✅ Visibility set & verified');
    }

    // ── Step 6 : SEO ──────────────────────────────────────────

    private async fillSEO(data: AddProductFormData) {

        if (data.metaTitle) {
            await this.metaTitleInput.fill(data.metaTitle);
            await expect(this.metaTitleInput).toHaveValue(data.metaTitle);
        }

        if (data.metaDescription) {
            await this.metaDescriptionInput.fill(data.metaDescription);
            await expect(this.metaDescriptionInput).toHaveValue(data.metaDescription);
        }

        if (data.metaKeywords && data.metaKeywords.length > 0) {
            for (const keyword of data.metaKeywords) {
                await this.metaKeywordsInput.fill(keyword);
                await this.metaKeywordsInput.press('Enter');
            }
        }

        console.log('   ✅ SEO filled & verified');
    }

    // ── Step 7 : Variant Options ──────────────────────────────

    private async fillVariantOptions(data: AddProductFormData) {

        const isVariant = await this.page
            .locator("h2:text('Variant Options')")
            .isVisible();

        if (!isVariant) return;

        // ── 7a : Check the variant category checkboxes ────────
        if (data.variantColor !== undefined)    await this.setCheckbox(this.variantColorCheckbox,    data.variantColor);
        if (data.variantMaterial !== undefined) await this.setCheckbox(this.variantMaterialCheckbox, data.variantMaterial);
        if (data.variantPattern !== undefined)  await this.setCheckbox(this.variantPatternCheckbox,  data.variantPattern);
        if (data.variantSize !== undefined)     await this.setCheckbox(this.variantSizeCheckbox,     data.variantSize);
        if (data.variantStyle !== undefined)    await this.setCheckbox(this.variantStyleCheckbox,    data.variantStyle);

        // ── 7b : Verify checkboxes ────────────────────────────
        if (data.variantColor !== undefined)    await expect(this.variantColorCheckbox).toBeChecked({ checked: data.variantColor });
        if (data.variantMaterial !== undefined) await expect(this.variantMaterialCheckbox).toBeChecked({ checked: data.variantMaterial });
        if (data.variantPattern !== undefined)  await expect(this.variantPatternCheckbox).toBeChecked({ checked: data.variantPattern });
        if (data.variantSize !== undefined)     await expect(this.variantSizeCheckbox).toBeChecked({ checked: data.variantSize });
        if (data.variantStyle !== undefined)    await expect(this.variantStyleCheckbox).toBeChecked({ checked: data.variantStyle });

        // ── 7c : Fill SKU in Variants table row ───────────────
        // The SKU input only renders inside the variants table AFTER
        // at least one variant checkbox has been checked.
        const anyVariantSelected =
            data.variantColor    ||
            data.variantMaterial ||
            data.variantPattern  ||
            data.variantSize     ||
            data.variantStyle;

        if (anyVariantSelected && data.sku) {
            // Wait for the variants table row SKU input to become visible
            await this.page.waitForSelector(
                'input[placeholder="Enter SKU"]',
                { state: 'visible', timeout: 5000 }
            );

            // Fill the first SKU input in the variants table
            await this.variantSKUInput.fill(data.sku);
            await expect(this.variantSKUInput).toHaveValue(data.sku);

            console.log(`   ✅ Variant SKU filled: ${data.sku}`);
        }

        console.log('   ✅ Variant Options set & verified');
    }

    // ── Step 8 : Inventory ────────────────────────────────────

    private async fillInventory(data: AddProductFormData) {

        if (data.sku) {
            await this.skuInput.fill(data.sku);
            await expect(this.skuInput).toHaveValue(data.sku);
        }

        if (data.barcode) {
            await this.barcodeInput.fill(data.barcode);
            await expect(this.barcodeInput).toHaveValue(data.barcode);
        }

        if (data.quantity) {
            await this.quantityInput.fill(data.quantity);
            await expect(this.quantityInput).toHaveValue(data.quantity);
        }

        if (data.manageInventory !== undefined) {
            await this.setCheckbox(this.manageInventoryCheckbox, data.manageInventory);
            await expect(this.manageInventoryCheckbox).toBeChecked({ checked: data.manageInventory });
        }

        if (data.allowBackorder !== undefined) {
            await this.setCheckbox(this.allowBackorderCheckbox, data.allowBackorder);
            await expect(this.allowBackorderCheckbox).toBeChecked({ checked: data.allowBackorder });
        }

        if (data.stockTracking !== undefined) {
            await this.setCheckbox(this.stockTrackingCheckbox, data.stockTracking);
            await expect(this.stockTrackingCheckbox).toBeChecked({ checked: data.stockTracking });
        }

        console.log('   ✅ Inventory filled & verified');
    }

    // ── Step 9 : Shipping ─────────────────────────────────────

    private async fillShipping(data: AddProductFormData) {

        if (data.length) {
            await this.lengthInput.fill(data.length);
            await expect(this.lengthInput).toHaveValue(data.length);
        }

        if (data.height) {
            await this.heightInput.fill(data.height);
            await expect(this.heightInput).toHaveValue(data.height);
        }

        if (data.width) {
            await this.widthInput.fill(data.width);
            await expect(this.widthInput).toHaveValue(data.width);
        }

        if (data.weight) {
            await this.weightInput.fill(data.weight);
            await expect(this.weightInput).toHaveValue(data.weight);
        }

        /*
        // No option have to selected to show dropdown value in the field,
        // so we check if data exists before selecting
        if (data.shippingClass) {
            await this.selectFromDropdown(this.shippingClassDropdown, data.shippingClass);
            await expect(this.shippingClassDropdown).toContainText(data.shippingClass);
        }
        */

        if (data.fulfillmentLocation) {
            await this.selectFromDropdown(this.fulfillmentLocationDropdown, data.fulfillmentLocation);
            await expect(this.fulfillmentLocationDropdown).toContainText(data.fulfillmentLocation);
        }

        console.log('   ✅ Shipping filled & verified');
    }

    // ── Step 10 : Tax Pricing ─────────────────────────────────

    private async fillTaxPricing(data: AddProductFormData) {

        if (data.taxCostPrice) {
            await this.taxCostPriceInput.fill(data.taxCostPrice);
            await expect(this.taxCostPriceInput).toHaveValue(data.taxCostPrice);
        }

        if (data.taxSalePrice) {
            await this.taxSalePriceInput.fill(data.taxSalePrice);
            await expect(this.taxSalePriceInput).toHaveValue(data.taxSalePrice);
        }

        if (data.comparePrice) {
            await this.comparePriceInput.fill(data.comparePrice);
            await expect(this.comparePriceInput).toHaveValue(data.comparePrice);
        }

        if (data.discountRules) {
            await this.discountRulesTextarea.fill(data.discountRules);
            await expect(this.discountRulesTextarea).toHaveValue(data.discountRules);
        }

        if (data.lowStockAlert) {
            await this.lowStockAlertInput.fill(data.lowStockAlert);
            await expect(this.lowStockAlertInput).toHaveValue(data.lowStockAlert);
        }

        console.log('   ✅ Tax Pricing filled & verified');
    }

    // ── Step 11 : Submit ──────────────────────────────────────

    async resetForm() {
        await this.resetButton.click();
    }

    async saveAndEdit() {
        await this.saveAndEditButton.click();
    }

    async save() {
        await this.saveButton.click();
    }

    // ============================================================
    // 🚀 MASTER END-TO-END FORM WORKFLOW METHOD
    // ============================================================

    /**
     * Master E2E workflow method.
     * Fills every section of the Add Product form step by step,
     * verifies each field after fill, then submits the form.
     *
     * Call this single method from your test file.
     */
    async runAddProductWorkflow(data: AddProductFormData): Promise<void> {

        console.log('\n══════════════════════════════════════════════════');
        console.log('🚀 START: Add Product E2E Workflow');
        console.log('══════════════════════════════════════════════════\n');

        console.log('📋 Step 1/10 → General Information');
        await this.fillGeneralInformation(data);

        console.log('📝 Step 2/10 → Descriptions');
        await this.fillDescriptions(data);

        console.log('🖼️  Step 3/10 → Media');
        await this.fillMedia(data);

        console.log('💰 Step 4/10 → Pricing & Inventory');
        await this.fillPricingAndInventory(data);

        console.log('👁️  Step 5/10 → Visibility');
        await this.fillVisibility(data);

        console.log('🔍 Step 6/10 → SEO');
        await this.fillSEO(data);

        console.log('🎛️  Step 7/10 → Variant Options');
        await this.fillVariantOptions(data);

        console.log('📦 Step 8/10 → Inventory');
        await this.fillInventory(data);

        console.log('🚚 Step 9/10 → Shipping');
        await this.fillShipping(data);

        console.log('🧾 Step 10/10 → Tax Pricing');
        await this.fillTaxPricing(data);

        console.log('\n💾 Submitting Form...');
        await this.save();

        console.log('\n══════════════════════════════════════════════════');
        console.log('🎉 DONE: Add Product E2E Workflow Completed!');
        console.log('══════════════════════════════════════════════════\n');
    }
}