import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

// ============================================================
// INTERFACE
// ============================================================

export interface EditProductFormData {   
    
    searchProductName?: string; // For locating the product in the list to edit

    // ── General Information ───────────────────────────────────
    productName?:        string;
    secondaryName?:      string;
    slug?:               string;
    generateSlugFromName?: boolean;
    barcodeSymbology?:   string;
    brand?:              string;
    category?:           string;
    tags?:               string[];
    status?:             string;

    // ── Descriptions ──────────────────────────────────────────
    productDescription?:  string;
    invoiceDescription?:  string;

    // ── Media ─────────────────────────────────────────────────
    productImagePath?:    string;
    mockImageBuffer?:     Buffer;
    deleteExistingImage?: boolean;

    // ── Pricing & Inventory ───────────────────────────────────
    productCost?:         string;
    productPrice?:        string;
    tax?:                 string;
    unit?:                string;
    saleUnit?:            string;
    purchaseUnit?:        string;
    alertQuantity?:       string;

    // ── Visibility ────────────────────────────────────────────
    webVisibility?:       boolean;
    posVisibility?:       boolean;

    // ── Final Action ──────────────────────────────────────────
    action?: 'update' | 'reset';
}

// ============================================================
// PAGE OBJECT
// ============================================================

export default class EditProductPage {
    readonly page: Page;

    // ── Action button and Edit options ────────────────────────
    readonly searchInput:       Locator;
    readonly viewActionsButton: Locator;
    readonly editOption:       Locator;

    // ── Tab Navigation ────────────────────────────────────────
    readonly generalTab:  Locator;
    readonly metaDataTab: Locator;
    readonly typeDataTab: Locator;

    // ── Page Header & Breadcrumb ──────────────────────────────
    readonly pageTitle:              Locator;
    readonly breadcrumbProductsLink: Locator;
    readonly breadcrumbCurrentPage:  Locator;

    // ── General Information ──────────────────────────────────
    readonly productTypeDropdown:      Locator;
    readonly productCodeInput:         Locator;
    readonly productNameInput:         Locator;
    readonly secondaryNameInput:       Locator;
    readonly slugInput:                Locator;
    readonly generateSlugFromNameButton: Locator;
    readonly barcodeSymbologyDropdown: Locator;
    readonly brandDropdown:            Locator;
    readonly categoryDropdown:         Locator;
    readonly tagsInput:                Locator;
    readonly statusDropdown:           Locator;

    // ── Descriptions ─────────────────────────────────────────
    readonly productDescriptionEditor: Locator;
    readonly invoiceDescriptionEditor: Locator;

    // ── Media ─────────────────────────────────────────────────
    readonly productImageDropzone:   Locator;
    readonly productImageFileInput:  Locator;
    readonly deleteImageButton:      Locator;
    readonly existingImagePreview:   Locator;

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

    // ── Actions ───────────────────────────────────────────────
    readonly resetButton:  Locator;
    readonly updateButton: Locator;

    // ── Confirm Update Dialog ─────────────────────────────────
    readonly confirmUpdateDialog:       Locator;
    readonly confirmUpdateDialogTitle:  Locator;
    readonly confirmUpdateDialogText:   Locator;
    readonly confirmUpdateButton:       Locator;
    readonly confirmCancelButton:       Locator;
    readonly confirmUpdateCloseButton:  Locator;

    // ============================================================
    // CONSTRUCTOR
    // ============================================================

    constructor(page: Page) {
        this.page = page;

        // Action button and Edit options
        this.searchInput       = page.getByRole('textbox', { name: 'Search products...' });
        this.viewActionsButton = page.getByRole('button').filter({ hasText: /^$/ });
        this.editOption       = page.getByRole('button', { name: 'Edit', exact: true });

        // Tab Navigation
        this.generalTab  = page.getByRole('button', { name: 'General',   exact: true });
        this.metaDataTab = page.getByRole('button', { name: 'Meta Data', exact: true });
        this.typeDataTab = page.getByRole('button', { name: 'Type Data', exact: true });

        // Page Header & Breadcrumb
        this.pageTitle              = page.locator('h1.text-xl.font-semibold');
        this.breadcrumbProductsLink = page.locator("nav[aria-label='Breadcrumb'] a[href='/products']");
        this.breadcrumbCurrentPage  = page.locator("nav[aria-label='Breadcrumb'] span.font-medium");

        // General Information
        this.productTypeDropdown        = page.locator('button#productTypeId');
        this.productCodeInput           = page.locator('input#product');
        this.productNameInput           = page.locator('input#name');
        this.secondaryNameInput         = page.locator('input#secondaryName');
        this.slugInput                  = page.locator('input#slug');
        this.generateSlugFromNameButton = page.getByRole('button', { name: 'Generate from Name' });
        this.barcodeSymbologyDropdown   = page.locator('button#barcodeSymbology');
        this.brandDropdown              = page.locator('button#brand');
        this.categoryDropdown           = page.locator('button#categories');
        this.tagsInput                  = page.locator('input#tags');
        this.statusDropdown             = page.locator('button#status');

        // Descriptions
        this.productDescriptionEditor = page.locator('div.ProseMirror').first();
        this.invoiceDescriptionEditor = page.locator('div.ProseMirror').last();

        // Media
        this.productImageDropzone  = page.locator('div.dropzone').first();
        this.productImageFileInput = page.locator(
            "input[type='file'][accept*='image/jpeg,image/jpg,image/png,image/webp']"
        );
        // Delete button for existing uploaded image
        this.deleteImageButton    = page.locator('button:has-text("Delete")');
        // Existing image preview thumbnail
        this.existingImagePreview = page.locator('ul.mb-0.mt-4 li img');

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

        // Actions
        this.resetButton  = page.locator("//button[.//span[text()='Reset']]");
        this.updateButton = page.locator("//button[.//span[text()='Update']]");

        // ── Confirm Update Dialog ─────────────────────────────
        this.confirmUpdateDialog      = page.locator('div.rounded-lg.border.border-yellow-200.bg-yellow-50');
        this.confirmUpdateDialogTitle = this.confirmUpdateDialog.locator('h3', { hasText: 'Confirm Update' });
        this.confirmUpdateDialogText  = this.confirmUpdateDialog.locator('p', { hasText: 'Are you sure you want to update this product?' });
        this.confirmUpdateButton      = this.confirmUpdateDialog.locator('button', { hasText: 'Update' });
        this.confirmCancelButton      = this.confirmUpdateDialog.locator('button', { hasText: 'Cancel' });
        this.confirmUpdateCloseButton = this.confirmUpdateDialog.locator('button:has(svg.lucide-x)');
    }

    // ============================================================
    // NAVIGATION
    // ============================================================

    async selectProductToEdit(productId: string): Promise<void> {
        await this.page.goto('https://app.livezencloud.com/products');
        await this.page.waitForLoadState('networkidle');
          // 1. Search for the product
        await this.searchInput.fill(productId);
        
        // 2. Instead of waitForTimeout, wait for the specific row to appear
        // This targets the row that contains the productId text
        const productRow = this.page.locator('tr', { hasText: productId }).first();
        await expect(productRow).toBeVisible();

        // 3. Find the ellipsis button INSIDE that specific row
        const rowActionBtn = productRow.locator('button:has(svg.lucide-ellipsis)');
        await rowActionBtn.click();

        // 4. Click the Edit option from the dropdown
        await this.editOption.click();

        // 5. Wait for the page to load
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Navigate directly to the edit page by product ID.
     * URL pattern: /products/{id}/edit
     */
    async gotoById(productId: string): Promise<void> {
        await this.page.goto(`https://app.livezencloud.com/products/${productId}/edit`);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Navigate to the edit page from the All Products list.
     * Finds the row matching productName, clicks the ··· action button,
     * then clicks "Edit" in the dropdown.
     */
    async gotoFromProductsList(productName: string): Promise<void> {

        await this.page.goto('https://app.livezencloud.com/products');
        await this.page.waitForLoadState('networkidle');

        // Find the table row containing the product name
        const productRow = this.page
            .locator('table tbody tr')
            .filter({ hasText: productName })
            .first();

        await productRow.waitFor({ state: 'visible', timeout: 10000 });

        // Click the ··· (actions) button in that row
        const actionsButton = productRow.locator(
            'button[class*="inline-flex"][class*="items-center"][class*="justify-center"]'
        ).last();

        await actionsButton.click();
        await this.page.waitForTimeout(300);

        // Click "Edit" in the dropdown menu
        const editOption = this.page.getByRole('button', { name: 'Edit', exact: true });
        await editOption.waitFor({ state: 'visible', timeout: 5000 });
        await editOption.click();

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

    // ============================================================
    // TAB NAVIGATION HELPERS
    // ============================================================

    async clickGeneralTab(): Promise<void> {
        await this.generalTab.click();
        await this.page.waitForTimeout(300);
    }

    async clickMetaDataTab(): Promise<void> {
        await this.metaDataTab.click();
        await this.page.waitForTimeout(300);
    }

    async clickTypeDataTab(): Promise<void> {
        await this.typeDataTab.click();
        await this.page.waitForTimeout(300);
    }

    // ============================================================
    // PAGE LOAD VERIFICATION
    // ============================================================

    async verifyPageLoaded(): Promise<void> {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toContainText('Edit Product');
        await expect(this.breadcrumbProductsLink).toBeVisible();
        await expect(this.breadcrumbCurrentPage).toContainText('Edit Product');

        // Verify all 3 tabs are visible
        await expect(this.generalTab).toBeVisible();
        await expect(this.metaDataTab).toBeVisible();
        await expect(this.typeDataTab).toBeVisible();

        // Product Code should be disabled (read-only on edit)
        await expect(this.productCodeInput).toBeDisabled();
    }

    // ============================================================
    // CONFIRM UPDATE DIALOG METHODS
    // ============================================================

    /**
     * Wait for the Confirm Update dialog to appear
     */
    async waitForConfirmUpdateDialog(): Promise<void> {
        await expect(this.confirmUpdateDialog).toBeVisible({ timeout: 5000 });
        await expect(this.confirmUpdateDialogTitle).toBeVisible();
        await expect(this.confirmUpdateDialogText).toBeVisible();
        console.log('   🟡 Confirm Update dialog appeared');
    }

    /**
     * Assert all elements of the Confirm Update dialog are correct
     */
    async assertConfirmUpdateDialog(): Promise<void> {
        await expect(this.confirmUpdateDialog).toBeVisible();
        await expect(this.confirmUpdateDialogTitle).toHaveText('Confirm Update');
        await expect(this.confirmUpdateDialogText).toHaveText(
            'Are you sure you want to update this product?'
        );
        await expect(this.confirmUpdateButton).toBeVisible();
        await expect(this.confirmCancelButton).toBeVisible();
        await expect(this.confirmUpdateCloseButton).toBeVisible();
        console.log('   ✅ Confirm Update dialog content verified');
    }

    /**
     * Click the "Update" button in the Confirm Update dialog to confirm
     */
    async confirmUpdate(): Promise<void> {
        await this.waitForConfirmUpdateDialog();
        await this.confirmUpdateButton.click();
        // Wait for dialog to disappear after confirmation
        await expect(this.confirmUpdateDialog).toBeHidden({ timeout: 5000 });
        console.log('   ✅ Update confirmed via dialog');
    }

    /**
     * Click the "Cancel" button in the Confirm Update dialog to dismiss
     */
    async cancelConfirmUpdate(): Promise<void> {
        await this.waitForConfirmUpdateDialog();
        await this.confirmCancelButton.click();
        // Wait for dialog to disappear after cancellation
        await expect(this.confirmUpdateDialog).toBeHidden({ timeout: 5000 });
        console.log('   ↩️  Update cancelled via dialog Cancel button');
    }

    /**
     * Close the Confirm Update dialog using the X button
     */
    async closeConfirmUpdateDialog(): Promise<void> {
        await this.waitForConfirmUpdateDialog();
        await this.confirmUpdateCloseButton.click();
        // Wait for dialog to disappear
        await expect(this.confirmUpdateDialog).toBeHidden({ timeout: 5000 });
        console.log('   ↩️  Confirm Update dialog closed via X button');
    }

    // ============================================================
    // SECTION FILL METHODS (Private)
    // ============================================================

    // ── General Information ───────────────────────────────────

    private async fillGeneralInformation(data: EditProductFormData): Promise<void> {

        // Note: productType and productCode are READ-ONLY on edit page
        // productCode input is disabled — we only verify, never fill

        if (data.productName) {
            await this.productNameInput.clear();
            await this.productNameInput.fill(data.productName);
            await expect(this.productNameInput).toHaveValue(data.productName);
        }

        if (data.secondaryName) {
            await this.secondaryNameInput.clear();
            await this.secondaryNameInput.fill(data.secondaryName);
            await expect(this.secondaryNameInput).toHaveValue(data.secondaryName);
        }

        // Generate slug from name if requested
        if (data.generateSlugFromName) {
            await this.generateSlugFromNameButton.click();
            await this.page.waitForTimeout(300);
        } else if (data.slug) {
            await this.slugInput.clear();
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

        console.log('   ✅ General Information updated & verified');
    }

    // ── Descriptions ─────────────────────────────────────────

    private async fillDescriptions(data: EditProductFormData): Promise<void> {

        if (data.productDescription) {
            await this.productDescriptionEditor.click();
            // Select all existing content and replace
            await this.productDescriptionEditor.press('Control+a');
            await this.productDescriptionEditor.fill(data.productDescription);
            await expect(this.productDescriptionEditor).toContainText(data.productDescription);
        }

        if (data.invoiceDescription) {
            await this.invoiceDescriptionEditor.click();
            await this.invoiceDescriptionEditor.press('Control+a');
            await this.invoiceDescriptionEditor.fill(data.invoiceDescription);
            await expect(this.invoiceDescriptionEditor).toContainText(data.invoiceDescription);
        }

        console.log('   ✅ Descriptions updated & verified');
    }

    // ── Media ─────────────────────────────────────────────────

    private async fillMedia(data: EditProductFormData): Promise<void> {

        await expect(this.productImageDropzone).toBeVisible();

        // Delete existing image if requested
        if (data.deleteExistingImage) {
            const deleteBtn = this.deleteImageButton;
            if (await deleteBtn.isVisible()) {
                await deleteBtn.click();
                await this.page.waitForTimeout(500);
                console.log('   🗑️  Existing product image deleted');
            }
        }

        // Upload new image
        if (data.productImagePath) {
            await this.productImageFileInput.setInputFiles(data.productImagePath);
            await this.page.waitForTimeout(500);
        } else if (data.mockImageBuffer) {
            await this.productImageFileInput.setInputFiles({
                name:     'updated-product-image.png',
                mimeType: 'image/png',
                buffer:   data.mockImageBuffer,
            });
            await this.page.waitForTimeout(500);
        }

        console.log('   ✅ Media section handled');
    }

    // ── Pricing & Inventory ───────────────────────────────────

    private async fillPricingAndInventory(data: EditProductFormData): Promise<void> {

        if (data.productCost) {
            await this.productCostInput.clear();
            await this.productCostInput.fill(data.productCost);
            await expect(this.productCostInput).toHaveValue(data.productCost);
        }

        if (data.productPrice) {
            await this.productPriceInput.clear();
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
            await this.alertQuantityInput.clear();
            await this.alertQuantityInput.fill(data.alertQuantity);
            await expect(this.alertQuantityInput).toHaveValue(data.alertQuantity);
        }

        console.log('   ✅ Pricing & Inventory updated & verified');
    }

    // ── Visibility ────────────────────────────────────────────

    private async fillVisibility(data: EditProductFormData): Promise<void> {

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

        console.log('   ✅ Visibility updated & verified');
    }

    // ============================================================
    // ACTION METHODS (Public)
    // ============================================================

    async resetForm(): Promise<void> {
        await this.resetButton.click();
    }

    /**
     * Click the main Update button on the form.
     * This triggers the Confirm Update dialog to appear.
     * Use confirmUpdate() afterwards to confirm, or
     * cancelConfirmUpdate() / closeConfirmUpdateDialog() to dismiss.
     */
    async updateProduct(): Promise<void> {
        await this.updateButton.click();
    }

    /**
     * Click Update button and immediately confirm via the dialog.
     * This is the most common happy-path action.
     */
    async updateProductAndConfirm(): Promise<void> {
        await this.updateProduct();
        await this.confirmUpdate();
    }

    /**
     * Click Update button and cancel via the dialog.
     * Useful for testing that cancellation works correctly.
     */
    async updateProductAndCancel(): Promise<void> {
        await this.updateProduct();
        await this.cancelConfirmUpdate();
    }

    /**
     * Click Update button and close dialog via X button.
     * Useful for testing that X button dismisses the dialog.
     */
    async updateProductAndCloseDialog(): Promise<void> {
        await this.updateProduct();
        await this.closeConfirmUpdateDialog();
    }

    // ============================================================
    // 🚀 MASTER END-TO-END WORKFLOW METHOD
    // ============================================================

    /**
     * Master E2E workflow for editing a product.
     *
     * Execution order:
     *  1. Verify edit page loaded correctly
     *  2. Ensure General tab is active
     *  3. Fill General Information (name, slug, brand, category, tags, status)
     *  4. Fill Descriptions
     *  5. Fill Media (delete existing / upload new)
     *  6. Fill Pricing & Inventory
     *  7. Fill Visibility
     *  8. Submit (Update / Reset) → handles Confirm Update dialog
     */
    async runEditProductWorkflow(data: EditProductFormData): Promise<void> {

        console.log('\n══════════════════════════════════════════════════');
        console.log('🚀 START: Edit Product E2E Workflow');
        console.log('══════════════════════════════════════════════════\n');

        console.log('🔍 Verifying edit page loaded...');
        await this.verifyPageLoaded();

        // Always start from General tab
        console.log('🗂️  Activating General tab...');
        await this.clickGeneralTab();

        console.log('📋 Step 1/5 → General Information');
        await this.fillGeneralInformation(data);

        console.log('📝 Step 2/5 → Descriptions');
        await this.fillDescriptions(data);

        console.log('🖼️  Step 3/5 → Media');
        await this.fillMedia(data);

        console.log('💰 Step 4/5 → Pricing & Inventory');
        await this.fillPricingAndInventory(data);

        console.log('👁️  Step 5/5 → Visibility');
        await this.fillVisibility(data);

        console.log('\n💾 Submitting...');

        if (data.action === 'reset') {
            await this.resetForm();
            console.log('   ↩️  Form reset');
        } else {
            // Click Update → handle Confirm Update dialog
            await this.updateProduct();
            console.log('   🟡 Confirm Update dialog triggered');
            await this.confirmUpdate();
        }

        console.log('\n══════════════════════════════════════════════════');
        console.log('🎉 DONE: Edit Product E2E Workflow Completed!');
        console.log('══════════════════════════════════════════════════\n');
    }
}