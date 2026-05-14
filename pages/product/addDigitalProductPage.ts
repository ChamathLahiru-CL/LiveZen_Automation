
import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

// ============================================================
// INTERFACE
// ============================================================

export interface AddDigitalProductFormData {

    // ── General Information ───────────────────────────────────
    productCode?:        string;
    generateAutoCode?:   boolean;
    productName?:        string;
    secondaryName?:      string;
    slug?:               string;
    barcodeSymbology?:   string;
    brand?:              string;
    category?:           string;
    tags?:               string[];
    status?:             string;

    // ── Descriptions ──────────────────────────────────────────
    productDescription?:        string;
    invoiceDescription?:        string;

    // ── Media ─────────────────────────────────────────────────
    productImagePath?:   string;
    mockImageBuffer?:    Buffer;

    // ── Pricing & Inventory ───────────────────────────────────
    productCost?:        string;
    productPrice?:       string;
    tax?:                string;
    unit?:               string;
    saleUnit?:           string;
    purchaseUnit?:       string;
    alertQuantity?:      string;

    // ── Visibility ────────────────────────────────────────────
    webVisibility?:      boolean;
    posVisibility?:      boolean;

    // ── SEO ───────────────────────────────────────────────────
    metaTitle?:          string;
    metaDescription?:    string;
    metaKeywords?:       string[];

    // ── Digital Delivery ──────────────────────────────────────
    deliveryType?:       string;
    fileExpiry?:         string;
    maxDownloads?:       string;
    digitalFilePath?:    string;
    assignPerOrder?:     boolean;

    // ── License Management ────────────────────────────────────
    downloadTokenValidity?: string;
    allowInstantAccess?:    boolean;
    expiryDate?:            string;   // e.g. "2026-12-31"

    // ── Tax Pricing ───────────────────────────────────────────
    taxSalePrice?:       string;
    comparePrice?:       string;

    // ── Final Action ──────────────────────────────────────────
    action?: 'save' | 'saveAndEdit' | 'reset';
}

// ============================================================
// PAGE OBJECT
// ============================================================

export default class AddDigitalProductPage {
    readonly page: Page;

    // ── General Information ──────────────────────────────────
    readonly productTypeDropdown:      Locator;
    readonly productCodeInput:         Locator;
    readonly generateCodeButton:       Locator;
    readonly productNameInput:         Locator;
    readonly secondaryNameInput:       Locator;
    readonly slugInput:                Locator;
    readonly barcodeSymbologyDropdown: Locator;
    readonly brandDropdown:            Locator;
    readonly categoryDropdown:         Locator;
    readonly tagsInput:                Locator;
    readonly statusDropdown:           Locator;

    // ── Descriptions ─────────────────────────────────────────
    readonly productDescriptionEditor: Locator;
    readonly invoiceDescriptionEditor: Locator;

    // ── Media ─────────────────────────────────────────────────
    readonly productImageDropzone:  Locator;
    readonly productImageFileInput: Locator;

    // ── Pricing & Inventory ───────────────────────────────────
    readonly productCostInput:     Locator;
    readonly productPriceInput:    Locator;
    readonly taxDropdown:          Locator;
    readonly unitDropdown:         Locator;
    readonly saleUnitDropdown:     Locator;
    readonly purchaseUnitDropdown: Locator;
    readonly alertQuantityInput:   Locator;

    // ── Visibility ────────────────────────────────────────────
    readonly webVisibilityToggle: Locator;
    readonly posVisibilityToggle: Locator;

    // ── SEO ───────────────────────────────────────────────────
    readonly metaTitleInput:       Locator;
    readonly metaDescriptionInput: Locator;
    readonly metaKeywordsInput:    Locator;

    // ── Digital Delivery ──────────────────────────────────────
    readonly deliveryTypeDropdown:  Locator;
    readonly fileExpiryInput:       Locator;
    readonly maxDownloadsInput:     Locator;
    readonly digitalFileInput:      Locator;
    readonly digitalFileDropzone:   Locator;
    readonly assignPerOrderCheckbox: Locator;

    // ── License Management ────────────────────────────────────
    readonly downloadTokenValidityInput: Locator;
    readonly allowInstantAccessCheckbox: Locator;
    readonly expiryDateInput:            Locator;

    // ── Tax Pricing ───────────────────────────────────────────
    readonly taxSalePriceInput:  Locator;
    readonly comparePriceInput:  Locator;

    // ── Breadcrumb & Page Header ──────────────────────────────
    readonly pageTitle:              Locator;
    readonly breadcrumbProductsLink: Locator;
    readonly breadcrumbCurrentPage:  Locator;

    // ── Actions ───────────────────────────────────────────────
    readonly resetButton:       Locator;
    readonly saveAndEditButton: Locator;
    readonly saveButton:        Locator;

    // ============================================================
    // CONSTRUCTOR
    // ============================================================

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
        this.productImageDropzone  = page.locator('div.dropzone').first();
        this.productImageFileInput = page.locator(
            "input[type='file'][accept*='image/jpeg,image/jpg,image/png,image/webp']"
        );

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

        // Digital Delivery
        this.deliveryTypeDropdown   = page.locator('button#delivery_type');
        this.fileExpiryInput        = page.locator('input#file_expiry');
        this.maxDownloadsInput      = page.locator('input#max_downloads');
        this.digitalFileDropzone    = page.locator('div.dropzone').last();
        this.digitalFileInput       = page.locator(
            "input[type='file'][accept*='application/pdf']"
        );
        this.assignPerOrderCheckbox = page.locator('input#assign_per_order');

        // License Management
        this.downloadTokenValidityInput = page.locator('input#download_token_validity');
        this.allowInstantAccessCheckbox = page.locator('input#allow_instant_access');
        this.expiryDateInput            = page.locator('input#expiry_date');

        // Tax Pricing
        this.taxSalePriceInput = page.locator('input#sale_price');
        this.comparePriceInput = page.locator('input#compare_price');

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

    async goto(): Promise<void> {
        await this.page.goto('https://app.livezencloud.com/products/create');
        await this.page.waitForLoadState('networkidle');
    }

    // ============================================================
    // CORE HELPERS
    // ============================================================

    /**
     * Universal dropdown selection method.
     * - Clicks the dropdown button to open it
     * - If a search input is visible, fills it with the option text
     * - Scrolls to and clicks the matching option by exact text
     */
    async selectFromDropdown(dropdown: Locator, optionText: string): Promise<void> {
        await dropdown.click();

        const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
        const searchInput    = this.page.locator("input[placeholder='Search options...']");

        if (await searchInput.isVisible()) {
            await searchInput.fill(optionText);
        }

        await dropdownOption.scrollIntoViewIfNeeded();
        await dropdownOption.click();
    }

    async setToggle(toggle: Locator, enable: boolean): Promise<void> {
        const isCurrent = (await toggle.getAttribute('aria-checked')) === 'true';
        if (isCurrent !== enable) await toggle.click();
    }

    async setCheckbox(checkbox: Locator, check: boolean): Promise<void> {
        check ? await checkbox.check() : await checkbox.uncheck();
    }

    // ============================================================
    // SECTION FILL METHODS (Private)
    // ============================================================

    // ── Step 1 : General Information ─────────────────────────

    private async fillGeneralInformation(data: AddDigitalProductFormData): Promise<void> {

        // Verify product type is pre-selected as Digital Product
        await expect(this.productTypeDropdown).toContainText('Digital Product');

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
            await this.categoryDropdown.click(); // close dropdown
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

    private async fillDescriptions(data: AddDigitalProductFormData): Promise<void> {

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

    private async fillMedia(data: AddDigitalProductFormData): Promise<void> {

        await expect(this.productImageDropzone).toBeVisible();

        if (data.productImagePath) {
            await this.productImageFileInput.setInputFiles(data.productImagePath);
            await this.page.waitForTimeout(500);
        } else if (data.mockImageBuffer) {
            await this.productImageFileInput.setInputFiles({
                name:     'mock-product-image.png',
                mimeType: 'image/png',
                buffer:   data.mockImageBuffer,
            });
            await this.page.waitForTimeout(500);
        }

        console.log('   ✅ Media section handled');
    }

    // ── Step 4 : Pricing & Inventory ─────────────────────────

    private async fillPricingAndInventory(data: AddDigitalProductFormData): Promise<void> {

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

    private async fillVisibility(data: AddDigitalProductFormData): Promise<void> {

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

    private async fillSEO(data: AddDigitalProductFormData): Promise<void> {

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

    // ── Step 7 : Digital Delivery ─────────────────────────────

    private async fillDigitalDelivery(data: AddDigitalProductFormData): Promise<void> {

        // Verify section heading is visible
        await expect(this.page.locator("h2:text('Digital Delivery')")).toBeVisible();

        if (data.deliveryType) {
            await this.selectFromDropdown(this.deliveryTypeDropdown, data.deliveryType);
            await expect(this.deliveryTypeDropdown).toContainText(data.deliveryType);
        }

        if (data.fileExpiry) {
            await this.fileExpiryInput.fill(data.fileExpiry);
            await expect(this.fileExpiryInput).toHaveValue(data.fileExpiry);
        }

        if (data.maxDownloads) {
            await this.maxDownloadsInput.fill(data.maxDownloads);
            await expect(this.maxDownloadsInput).toHaveValue(data.maxDownloads);
        }

        // Digital file upload
        await expect(this.digitalFileDropzone).toBeVisible();
        if (data.digitalFilePath) {
            await this.digitalFileInput.setInputFiles(data.digitalFilePath);
            await this.page.waitForTimeout(500);
        }

        if (data.assignPerOrder !== undefined) {
            await this.setCheckbox(this.assignPerOrderCheckbox, data.assignPerOrder);
            await expect(this.assignPerOrderCheckbox).toBeChecked({ checked: data.assignPerOrder });
        }

        console.log('   ✅ Digital Delivery filled & verified');
    }

    // ── Step 8 : License Management ───────────────────────────

    private async fillLicenseManagement(data: AddDigitalProductFormData): Promise<void> {

        // Verify section heading is visible
        await expect(this.page.locator("h2:text('License Management')")).toBeVisible();

        if (data.downloadTokenValidity) {
            await this.downloadTokenValidityInput.fill(data.downloadTokenValidity);
            await expect(this.downloadTokenValidityInput).toHaveValue(data.downloadTokenValidity);
        }

        if (data.allowInstantAccess !== undefined) {
            await this.setCheckbox(this.allowInstantAccessCheckbox, data.allowInstantAccess);
            await expect(this.allowInstantAccessCheckbox).toBeChecked({ checked: data.allowInstantAccess });
        }

        // Expiry Date — uses flatpickr, we fill via direct input value injection
        if (data.expiryDate) {
            await this.expiryDateInput.click();
            await this.page.waitForTimeout(300);

            // Fill date directly into the flatpickr readonly input via evaluate
            await this.page.evaluate((dateValue: string) => {
                const input = document.querySelector<HTMLInputElement>('input#expiry_date');
                if (input && (input as any)._flatpickr) {
                    (input as any)._flatpickr.setDate(dateValue, true);
                }
            }, data.expiryDate);

            await this.page.waitForTimeout(200);

            // Close calendar by pressing Escape
            await this.page.keyboard.press('Escape');
            await expect(this.expiryDateInput).not.toHaveValue('');
        }

        console.log('   ✅ License Management filled & verified');
    }

    // ── Step 9 : Tax Pricing ──────────────────────────────────

    private async fillTaxPricing(data: AddDigitalProductFormData): Promise<void> {

        if (data.taxSalePrice) {
            await this.taxSalePriceInput.fill(data.taxSalePrice);
            await expect(this.taxSalePriceInput).toHaveValue(data.taxSalePrice);
        }

        if (data.comparePrice) {
            await this.comparePriceInput.fill(data.comparePrice);
            await expect(this.comparePriceInput).toHaveValue(data.comparePrice);
        }

        console.log('   ✅ Tax Pricing filled & verified');
    }

    // ============================================================
    // ACTION METHODS (Public)
    // ============================================================

    async resetForm(): Promise<void> {
        await this.resetButton.click();
    }

    async saveAndEdit(): Promise<void> {
        await this.saveAndEditButton.click();
    }

    async save(): Promise<void> {
        await this.saveButton.click();
    }

    // ============================================================
    // PAGE LOAD VERIFICATION
    // ============================================================

    async verifyPageLoaded(): Promise<void> {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toContainText('Add Product');
        await expect(this.breadcrumbProductsLink).toBeVisible();
        await expect(this.breadcrumbCurrentPage).toContainText('Add Product');
        await expect(this.productTypeDropdown).toContainText('Digital Product');
    }

    // ============================================================
    // 🚀 MASTER END-TO-END WORKFLOW METHOD
    // ============================================================

    /**
     * Master E2E workflow method for Digital Product.
     * Fills every section of the Add Digital Product form step by step,
     * verifies each field after fill, then submits the form.
     *
     * Call this single method from your test file.
     */
    async runAddDigitalProductWorkflow(data: AddDigitalProductFormData): Promise<void> {

        console.log('\n══════════════════════════════════════════════════');
        console.log('🚀 START: Add Digital Product E2E Workflow');
        console.log('══════════════════════════════════════════════════\n');

        console.log('🔍 Verifying page loaded correctly...');
        await this.verifyPageLoaded();

        console.log('📋 Step 1/9 → General Information');
        await this.fillGeneralInformation(data);

        console.log('📝 Step 2/9 → Descriptions');
        await this.fillDescriptions(data);

        console.log('🖼️  Step 3/9 → Media');
        await this.fillMedia(data);

        console.log('💰 Step 4/9 → Pricing & Inventory');
        await this.fillPricingAndInventory(data);

        console.log('👁️  Step 5/9 → Visibility');
        await this.fillVisibility(data);

        console.log('🔍 Step 6/9 → SEO');
        await this.fillSEO(data);

        console.log('📦 Step 7/9 → Digital Delivery');
        await this.fillDigitalDelivery(data);

        console.log('🔑 Step 8/9 → License Management');
        await this.fillLicenseManagement(data);

        console.log('🧾 Step 9/9 → Tax Pricing');
        await this.fillTaxPricing(data);

        console.log('\n💾 Submitting Form...');

        switch (data.action) {
            case 'saveAndEdit':
                await this.saveAndEdit();
                break;
            case 'reset':
                await this.resetForm();
                break;
            case 'save':
            default:
                await this.save();
                break;
        }

        console.log('\n══════════════════════════════════════════════════');
        console.log('🎉 DONE: Add Digital Product E2E Workflow Completed!');
        console.log('══════════════════════════════════════════════════\n');
    }
}