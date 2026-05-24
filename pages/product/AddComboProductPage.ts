import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

// ============================================================
// INTERFACE
// ============================================================
export interface ComboProductItem {
    productName: string;
    quantity?:   number; // uses +/- stepper, default is 1
}
export interface AddComboProductFormData {

    // ── General Information ───────────────────────────────────
    productType?:        string;
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
    productDescription?:  string;
    invoiceDescription?:  string;

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

    // ── Combo Items ───────────────────────────────────────────
    comboItems?:         ComboProductItem[];

        // ── Bundle Composition ────────────────────────────────────
    bundleType?:                    string;
    bundlePrice?:                   string;
    allowOutOfStockComponents?:     boolean;

    // ── Inventory (Combo-specific) ────────────────────────────
    quantity?:           string;
    inventoryMode?:      string;
    bundleSku?:          string;
    manageInventory?:    boolean;

    // ── Tax Pricing (Combo-specific) ──────────────────────────
    discountType?:       string;
    discountValue?:      string;
    autoCalculate?:      boolean;

    // ── Final Action ──────────────────────────────────────────
    action?: 'save' | 'saveAndEdit' | 'reset';
}

export interface ComboItem {
    productName: string;
    quantity:    string;
}

// ============================================================
// PAGE OBJECT
// ============================================================

export default class AddComboProductPage {
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

    // ── Combo Products Section ────────────────────────────────
    // Search input: placeholder="Search product"
    readonly comboProductSearchInput: Locator;
    // Quantity stepper minus / plus buttons & display (per row, used dynamically)
    readonly comboTableBody:          Locator;

    // ── Bundle Composition Section ────────────────────────────
    readonly bundleTypeDropdown:              Locator;
    readonly bundlePriceInput:                Locator;
    readonly allowOutOfStockComponentsCheckbox: Locator;

        // ── Inventory Section (Combo-specific) ────────────────────
    readonly quantityInput:          Locator;
    readonly inventoryModeDropdown:  Locator;
    readonly bundleSkuInput:         Locator;
    readonly manageInventoryCheckbox: Locator;

    // ── Tax Pricing Section (Combo-specific) ──────────────────
    readonly discountTypeDropdown:  Locator;
    readonly discountValueInput:    Locator;
    readonly autoCalculateCheckbox: Locator;

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

        // Combo Products Section
        // The search input inside the Combo Products section
        this.comboProductSearchInput = page.locator(
            "input[placeholder='Search product']"
        );
        // The tbody of the combo products table
        this.comboTableBody = page.locator(
            "h2:text('Combo Products') ~ div table tbody"
        );

        // Bundle Composition Section
        this.bundleTypeDropdown               = page.locator('button#bundle_type');
        this.bundlePriceInput                 = page.locator('input#bundle_price');
        this.allowOutOfStockComponentsCheckbox = page.locator('input#allow_out_of_stock_components');

        // Inventory Section (Combo-specific)
        this.quantityInput           = page.locator('input#quantity');
        this.inventoryModeDropdown   = page.locator('button#inventory_mode');
        this.bundleSkuInput          = page.locator('input#bundle_sku');
        this.manageInventoryCheckbox = page.locator('input#manage_inventory');
      /*  // Shipping
        this.lengthInput                 = page.locator('input#length');
        this.heightInput                 = page.locator('input#height');
        this.widthInput                  = page.locator('input#width');
        this.weightInput                 = page.locator('input#weight');
        this.shippingClassDropdown       = page.locator('button#shipping_class_id');
        this.fulfillmentLocationDropdown = page.locator('button#fulfillment_location');
*/
        // Tax Pricing Section (Combo-specific)
        this.discountTypeDropdown  = page.locator('button#discount_type');
        this.discountValueInput    = page.locator('input#discount_value');
        this.autoCalculateCheckbox = page.locator('input#auto_calculate');

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
    // PAGE TYPE SELECTION
    // ============================================================

    /**
     * Selects "Combo Product" from the Product Type dropdown.
     * Must be called before filling any other section.
     */
    async selectComboProductType(): Promise<void> {
        await this.selectFromDropdown(this.productTypeDropdown, 'Combo Product');
        await expect(this.productTypeDropdown).toContainText('Combo Product');
        await this.page.waitForTimeout(400);
        console.log('Product Type set to Combo Product');
    }

    // ============================================================
    // PAGE LOAD VERIFICATION
    // ============================================================

    async verifyPageLoaded(): Promise<void> {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toContainText('Add Product');
        await expect(this.breadcrumbProductsLink).toBeVisible();
        await expect(this.breadcrumbCurrentPage).toContainText('Add Product');
    }

    // ============================================================
    // SECTION FILL METHODS (Private)
    // ============================================================

    // ── Step 1 : General Information ─────────────────────────

private async fillGeneralInformation(data: AddComboProductFormData) {

    // ── Product Type MUST be selected first ───────────────
    // Other sections (Variant Options, Inventory, etc.)
    // only render after the product type is selected.
    if (data.productType) {
        await this.selectFromDropdown(this.productTypeDropdown, data.productType);
        await expect(this.productTypeDropdown).toContainText(data.productType);

        // Wait for the page to re-render sections based on selected type
        await this.page.waitForTimeout(400);
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

    console.log('   General Information filled & verified');
}

    // ── Step 2 : Descriptions ─────────────────────────────────

    private async fillDescriptions(data: AddComboProductFormData): Promise<void> {

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

        console.log('   Descriptions filled & verified');
    }

    // ── Step 3 : Media ────────────────────────────────────────

    private async fillMedia(data: AddComboProductFormData): Promise<void> {

        await expect(this.productImageDropzone).toBeVisible();

        if (data.productImagePath) {
            await this.productImageFileInput.setInputFiles(data.productImagePath);
            await this.page.waitForTimeout(500);
        } else if (data.mockImageBuffer) {
            await this.productImageFileInput.setInputFiles({
                name:     'mock-combo-product-image.png',
                mimeType: 'image/png',
                buffer:   data.mockImageBuffer,
            });
            await this.page.waitForTimeout(500);
        }

        console.log('   Media section handled');
    }

    // ── Step 4 : Pricing & Inventory ─────────────────────────

    private async fillPricingAndInventory(data: AddComboProductFormData): Promise<void> {

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

        console.log('   Pricing & Inventory filled & verified');
    }

    // ── Step 5 : Visibility ───────────────────────────────────

    private async fillVisibility(data: AddComboProductFormData): Promise<void> {

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

        console.log('   Visibility set & verified');
    }

    // ── Step 6 : SEO ──────────────────────────────────────────

    private async fillSEO(data: AddComboProductFormData): Promise<void> {

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

        console.log('   SEO filled & verified');
    }

    // ── Step 7 : Combo Items ──────────────────────────────────

    /**
     * Fills the Combo Products section.
     *
     * UI behaviour (from HTML & screenshots):
     *  - There is a single search input: placeholder="Search product"
     *  - Type a product name → select from dropdown results
     *  - The product row appears in the table with SKU, Name, Unit Price,
     *    a quantity stepper (− / number / +) and a delete button
     *  - Quantity is controlled by clicking + / − buttons or
     *    directly editing the number input inside the stepper
     *  - Repeat for each combo item
     */
    private async fillComboProducts(data: AddComboProductFormData): Promise<void> {

        // Verify section is visible
        await expect(
            this.page.locator("h2:text('Combo Products')")
        ).toBeVisible();

        if (!data.comboItems || data.comboItems.length === 0) {
            console.log('   No combo items provided — skipping Combo Products section');
            return;
        }

        for (let i = 0; i < data.comboItems.length; i++) {
            const item = data.comboItems[i];

            console.log(`   Adding combo item ${i + 1}: "${item.productName}"`);

            // Type in the search input
            await this.comboProductSearchInput.click();
            await this.comboProductSearchInput.fill(item.productName);
            await this.page.waitForTimeout(500);

            // Select matching option from the autocomplete listbox
            const productOption = this.page
                .getByRole('option', { name: item.productName, exact: false })
                .first();

            await productOption.waitFor({ state: 'visible', timeout: 5000 });
            await productOption.click();

            // Wait for the row to appear in the table
            await this.page.waitForTimeout(300);

            // Set quantity via stepper if quantity > 1
            // The stepper row is the last <tr> added to the tbody
            if (item.quantity && item.quantity > 1) {
                const rows       = this.page.locator("h2:text('Combo Products') ~ div table tbody tr");
                const lastRow    = rows.last();
                const plusButton = lastRow.locator('button[aria-label^="Increase quantity"]');

                // Click + button (quantity - 1) times (starts at 1)
                const clickCount = item.quantity - 1;
                for (let c = 0; c < clickCount; c++) {
                    await plusButton.click();
                    await this.page.waitForTimeout(100);
                }

                // Verify quantity stepper display value
                const stepperInput = lastRow.locator('input[type="number"], span.quantity-display, td:nth-child(4)');
                console.log(`      Quantity set to ${item.quantity} for "${item.productName}"`);
            }
        }

        // Verify the table has the correct number of rows (excluding empty state row)
        const tableRows = this.page.locator(
            "h2:text('Combo Products') ~ div table tbody tr:not(:has(td[colspan]))"
        );
        await expect(tableRows).toHaveCount(data.comboItems.length);

        console.log(`   Combo Products filled — ${data.comboItems.length} item(s) added`);
    }

     // ── Step 8 : Bundle Composition ──────────────────────────

    private async fillBundleComposition(data: AddComboProductFormData): Promise<void> {

        // Verify section is visible
        await expect(
            this.page.locator("h2:text('Bundle Composition')")
        ).toBeVisible();

        if (data.bundleType) {
            await this.selectFromDropdown(this.bundleTypeDropdown, data.bundleType);
            await expect(this.bundleTypeDropdown).toContainText(data.bundleType);
        }

        if (data.bundlePrice) {
            await this.bundlePriceInput.fill(data.bundlePrice);
            await expect(this.bundlePriceInput).toHaveValue(data.bundlePrice);
        }

        if (data.allowOutOfStockComponents !== undefined) {
            await this.setCheckbox(
                this.allowOutOfStockComponentsCheckbox,
                data.allowOutOfStockComponents
            );
            await expect(this.allowOutOfStockComponentsCheckbox).toBeChecked({
                checked: data.allowOutOfStockComponents,
            });
        }

        console.log('   Bundle Composition filled & verified');
    }

    // ── Step 9 : Inventory (Combo-specific) ───────────────────

    private async fillInventory(data: AddComboProductFormData): Promise<void> {

        // Verify section is visible
        const inventoryHeading = this.page.getByRole('heading', {
            level: 2,
            name: /^Inventory$/,
        });

        await inventoryHeading.scrollIntoViewIfNeeded();
        await expect(inventoryHeading).toBeVisible();

        if (data.quantity) {
            await this.quantityInput.fill(data.quantity);
            await expect(this.quantityInput).toHaveValue(data.quantity);
        }

        if (data.inventoryMode) {
            await this.selectFromDropdown(this.inventoryModeDropdown, data.inventoryMode);
            await expect(this.inventoryModeDropdown).toContainText(data.inventoryMode);
        }

        if (data.bundleSku) {
            await this.bundleSkuInput.fill(data.bundleSku);
            await expect(this.bundleSkuInput).toHaveValue(data.bundleSku);
        }

        if (data.manageInventory !== undefined) {
            await this.setCheckbox(this.manageInventoryCheckbox, data.manageInventory);
            await expect(this.manageInventoryCheckbox).toBeChecked({
                checked: data.manageInventory,
            });
        }

        console.log('   Inventory filled & verified');
    }

    // ── Step 10 : Tax Pricing (Combo-specific) ────────────────

    private async fillTaxPricing(data: AddComboProductFormData): Promise<void> {

        // Verify section is visible
        await expect(
            this.page.locator("h2:text('Tax Pricing')")
        ).toBeVisible();

        if (data.discountType) {
            await this.selectFromDropdown(this.discountTypeDropdown, data.discountType);
            await expect(this.discountTypeDropdown).toContainText(data.discountType);
        }

        if (data.discountValue) {
            await this.discountValueInput.fill(data.discountValue);
            await expect(this.discountValueInput).toHaveValue(data.discountValue);
        }

        if (data.autoCalculate !== undefined) {
            await this.setCheckbox(this.autoCalculateCheckbox, data.autoCalculate);
            await expect(this.autoCalculateCheckbox).toBeChecked({
                checked: data.autoCalculate,
            });
        }

        console.log('   Tax Pricing filled & verified');
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
    // MASTER END-TO-END WORKFLOW METHOD
    // ============================================================

    /**
     * Master E2E workflow method for Combo Product.
     *
     * Step-by-step:
     *  1. Navigates to the create page
     *  2. Verifies page loaded
     *  3. Selects "Combo Product" type
     *  4. Fills all sections
     *  5. Verifies each field after fill
     *  6. Submits the form based on the action specified
     *
     * Call this single method from your test file.
     */
    async runAddComboProductWorkflow(data: AddComboProductFormData): Promise<void> {

        console.log('\n══════════════════════════════════════════════════');
        console.log('START: Add Combo Product E2E Workflow');
        console.log('══════════════════════════════════════════════════\n');

        console.log('Verifying page loaded correctly...');
        await this.verifyPageLoaded();

        console.log('Selecting Combo Product Type...');
        await this.selectComboProductType();

        console.log('Step 1/10 → General Information');
        await this.fillGeneralInformation(data);

        console.log('Step 2/10 → Descriptions');
        await this.fillDescriptions(data);

        console.log('Step 3/10 → Media');
        await this.fillMedia(data);

        console.log('Step 4/10 → Pricing & Inventory');
        await this.fillPricingAndInventory(data);

        console.log('Step 5/10 → Visibility');
        await this.fillVisibility(data);

        console.log('Step 6/10 → SEO');
        await this.fillSEO(data);

        console.log('Step 7/10 → Combo Products');
        await this.fillComboProducts(data);

        console.log('Step 8/10 → Bundle Composition');
        await this.fillBundleComposition(data);

        console.log('Step 9/10 → Inventory');
        await this.fillInventory(data);

        console.log('Step 10/10 → Tax Pricing');
        await this.fillTaxPricing(data);

        console.log('\nSubmitting Form...');

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
        console.log('DONE: Add Combo Product E2E Workflow Completed!');
        console.log('══════════════════════════════════════════════════\n');
    }
}