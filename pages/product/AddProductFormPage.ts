import type { Locator, Page } from '@playwright/test';

export interface AddProductFormData {
    // General Information
    productType?: string;
    productCode?: string;
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

    // Form Action
    action?: 'save' | 'saveAndEdit' | 'reset';
}

export default class AddProductPage {
    readonly page: Page;

    // ─── Navigation ───────────────────────────────────────────────────────────
    readonly dashboardNavLink: Locator;
    readonly salesNavLink: Locator;
    readonly productsNavLink: Locator;
    readonly allProductsNavLink: Locator;
    readonly addProductNavLink: Locator;
    readonly licenseManagementNavLink: Locator;
    readonly categoriesNavLink: Locator;
    readonly brandsNavLink: Locator;
    readonly stockAdjustmentsNavLink: Locator;
    readonly purchasesNavLink: Locator;
    readonly customersNavLink: Locator;
    readonly usersNavLink: Locator;
    readonly reportsNavLink: Locator;
    readonly settingsNavLink: Locator;

    // ─── Header ───────────────────────────────────────────────────────────────
    readonly sidebarToggleButton: Locator;
    readonly searchInput: Locator;
    readonly notificationBell: Locator;
    readonly notificationBadge: Locator;
    readonly headerSettingsButton: Locator;
    readonly languageButton: Locator;
    readonly userProfileButton: Locator;

    // ─── Page Header ──────────────────────────────────────────────────────────
    readonly pageTitle: Locator;
    readonly breadcrumbProductsLink: Locator;
    readonly breadcrumbAddProduct: Locator;

    // ─── General Information Section ──────────────────────────────────────────
    readonly generalInformationSection: Locator;
    readonly productTypeDropdown: Locator;
    readonly productTypeHiddenInput: Locator;
    readonly productCodeInput: Locator;
    readonly generateProductCodeButton: Locator;
    readonly productNameInput: Locator;
    readonly secondaryNameInput: Locator;
    readonly slugInput: Locator;
    readonly barcodeSymbologyDropdown: Locator;
    readonly barcodeSymbologyHiddenInput: Locator;
    readonly brandDropdown: Locator;
    readonly brandHiddenInput: Locator;
    readonly categoryDropdown: Locator;
    readonly categoryHiddenInput: Locator;
    readonly tagsInput: Locator;
    readonly statusDropdown: Locator;
    readonly statusHiddenInput: Locator;

    // ─── Descriptions Section ─────────────────────────────────────────────────
    readonly descriptionsSection: Locator;
    readonly productDescriptionWriteTab: Locator;
    readonly productDescriptionPreviewTab: Locator;
    readonly productDescriptionEditor: Locator;
    readonly productDescriptionBoldButton: Locator;
    readonly productDescriptionItalicButton: Locator;
    readonly productDescriptionStrikethroughButton: Locator;
    readonly productDescriptionH1Button: Locator;
    readonly productDescriptionH2Button: Locator;
    readonly productDescriptionH3Button: Locator;
    readonly productDescriptionBulletListButton: Locator;
    readonly productDescriptionNumberedListButton: Locator;
    readonly productDescriptionQuoteButton: Locator;
    readonly productDescriptionCodeBlockButton: Locator;
    readonly productDescriptionLinkButton: Locator;
    readonly invoiceDescriptionWriteTab: Locator;
    readonly invoiceDescriptionPreviewTab: Locator;
    readonly invoiceDescriptionEditor: Locator;
    readonly invoiceDescriptionBoldButton: Locator;
    readonly invoiceDescriptionItalicButton: Locator;
    readonly invoiceDescriptionStrikethroughButton: Locator;
    readonly invoiceDescriptionH1Button: Locator;
    readonly invoiceDescriptionH2Button: Locator;
    readonly invoiceDescriptionH3Button: Locator;
    readonly invoiceDescriptionBulletListButton: Locator;
    readonly invoiceDescriptionNumberedListButton: Locator;
    readonly invoiceDescriptionQuoteButton: Locator;
    readonly invoiceDescriptionCodeBlockButton: Locator;
    readonly invoiceDescriptionLinkButton: Locator;

    // ─── Media Section ────────────────────────────────────────────────────────
    readonly mediaSection: Locator;
    readonly productImageDropzone: Locator;
    readonly productImageFileInput: Locator;

    // ─── Pricing & Inventory Section ──────────────────────────────────────────
    readonly pricingInventorySection: Locator;
    readonly productCostInput: Locator;
    readonly productPriceInput: Locator;
    readonly taxDropdown: Locator;
    readonly taxHiddenInput: Locator;
    readonly unitDropdown: Locator;
    readonly unitHiddenInput: Locator;
    readonly saleUnitDropdown: Locator;
    readonly saleUnitHiddenInput: Locator;
    readonly purchaseUnitDropdown: Locator;
    readonly purchaseUnitHiddenInput: Locator;
    readonly alertQuantityInput: Locator;

    // ─── Visibility Section ───────────────────────────────────────────────────
    readonly visibilitySection: Locator;
    readonly webVisibilityToggle: Locator;
    readonly posVisibilityToggle: Locator;

    // ─── SEO Section ──────────────────────────────────────────────────────────
    readonly seoSection: Locator;
    readonly metaTitleInput: Locator;
    readonly metaDescriptionInput: Locator;
    readonly metaKeywordsInput: Locator;

    // ─── Inventory Section ────────────────────────────────────────────────────
    readonly inventorySection: Locator;
    readonly skuInput: Locator;
    readonly barcodeInput: Locator;
    readonly quantityInput: Locator;
    readonly manageInventoryCheckbox: Locator;
    readonly allowBackorderCheckbox: Locator;
    readonly stockTrackingCheckbox: Locator;

    // ─── Shipping Section ─────────────────────────────────────────────────────
    readonly shippingSection: Locator;
    readonly lengthInput: Locator;
    readonly heightInput: Locator;
    readonly widthInput: Locator;
    readonly weightInput: Locator;
    readonly shippingClassDropdown: Locator;
    readonly shippingClassHiddenInput: Locator;
    readonly fulfillmentLocationDropdown: Locator;
    readonly fulfillmentLocationHiddenInput: Locator;

    // ─── Tax Pricing Section ──────────────────────────────────────────────────
    readonly taxPricingSection: Locator;
    readonly taxCostPriceInput: Locator;
    readonly taxSalePriceInput: Locator;
    readonly comparePriceInput: Locator;
    readonly discountRulesTextarea: Locator;

    // ─── Form Action Buttons ──────────────────────────────────────────────────
    readonly resetButton: Locator;
    readonly saveAndEditButton: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // ─── Navigation ───────────────────────────────────────────────────────
        this.dashboardNavLink = page.locator("a[href='/dashboard']").first();
        this.salesNavLink = page.locator("//span[@title='Sales']");
        this.productsNavLink = page.locator("//span[@title='Products']");
        this.allProductsNavLink = page.locator("a[href='/products'] span[title='All Products']");
        this.addProductNavLink = page.locator("a[href='/products/create'] span[title='Add Product']");
        this.licenseManagementNavLink = page.locator("a[href='/digital-product-license-keys'] span[title='License Management']");
        this.categoriesNavLink = page.locator("a[href='/categories'] span[title='Categories']");
        this.brandsNavLink = page.locator("a[href='/brands'] span[title='Brands']");
        this.stockAdjustmentsNavLink = page.locator("a[href='/stock-adjustments'] span[title='Stock Adjustments']");
        this.purchasesNavLink = page.locator("//span[@title='Purchases']");
        this.customersNavLink = page.locator("//span[@title='Customers']");
        this.usersNavLink = page.locator("//span[@title='Users']");
        this.reportsNavLink = page.locator("a[href='/reports'] span[title='Reports']");
        this.settingsNavLink = page.locator("//span[@title='Settings']");

        // ─── Header ───────────────────────────────────────────────────────────
        this.sidebarToggleButton = page.locator("//button[contains(@class,'lucide-chevrons-left')]");
        this.searchInput = page.locator("input[type='search'][placeholder='Search']");
        this.notificationBell = page.locator("//button[contains(@class,'lucide-bell')]");
        this.notificationBadge = page.locator("//span[contains(@class,'bg-red-500') and contains(@class,'rounded-full')]");
        this.headerSettingsButton = page.locator("//button[contains(@class,'lucide-settings')]").last();
        this.languageButton = page.locator("//button[.//img[@alt='Language']]");
        this.userProfileButton = page.locator("//button[.//div[contains(@class,'bg-blue-500') and contains(@class,'rounded-full')]]");

        // ─── Page Header ──────────────────────────────────────────────────────
        this.pageTitle = page.locator("h1.text-xl.font-semibold");
        this.breadcrumbProductsLink = page.locator("nav[aria-label='Breadcrumb'] a[href='/products']");
        this.breadcrumbAddProduct = page.locator("nav[aria-label='Breadcrumb'] span.font-medium");

        // ─── General Information Section ──────────────────────────────────────
        this.generalInformationSection = page.locator("section:has(h2:text('General Information'))");
        this.productTypeDropdown = page.locator("button#productTypeId");
        this.productTypeHiddenInput = page.locator("input[name='productTypeId']");
        this.productCodeInput = page.locator("input#product[name='product']");
        this.generateProductCodeButton = page.locator("//input[@id='product']/following-sibling::button[@title='Generate new code']");
        this.productNameInput = page.locator("input#name[name='name']");
        this.secondaryNameInput = page.locator("input#secondaryName[name='secondaryName']");
        this.slugInput = page.locator("input#slug[name='slug']");
        this.barcodeSymbologyDropdown = page.locator("button#barcodeSymbology");
        this.barcodeSymbologyHiddenInput = page.locator("input[name='barcodeSymbology']");
        this.brandDropdown = page.locator("button#brand");
        this.brandHiddenInput = page.locator("input[name='brand']");
        this.categoryDropdown = page.locator("button#categories");
        this.categoryHiddenInput = page.locator("input[name='categories[]']");
        this.tagsInput = page.locator("input#tags[name='tags']");
        this.statusDropdown = page.locator("button#status");
        this.statusHiddenInput = page.locator("input[name='status']");

        // ─── Descriptions Section ─────────────────────────────────────────────
        this.descriptionsSection = page.locator("section:has(h2:text('Descriptions'))");
        this.productDescriptionWriteTab = page.locator("//label[@for='description']/ancestor::div[contains(@class,'mb-3')]//button[text()='Write']");
        this.productDescriptionPreviewTab = page.locator("//label[@for='description']/ancestor::div[contains(@class,'mb-3')]//button[text()='Preview']");
        this.productDescriptionEditor = page.locator("div.tiptap-editor-container").first().locator("div.ProseMirror");
        this.productDescriptionBoldButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Bold']");
        this.productDescriptionItalicButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Italic']");
        this.productDescriptionStrikethroughButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Strikethrough']");
        this.productDescriptionH1Button = page.locator("div.tiptap-editor-container").first().locator("button[title='Heading 1']");
        this.productDescriptionH2Button = page.locator("div.tiptap-editor-container").first().locator("button[title='Heading 2']");
        this.productDescriptionH3Button = page.locator("div.tiptap-editor-container").first().locator("button[title='Heading 3']");
        this.productDescriptionBulletListButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Bullet List']");
        this.productDescriptionNumberedListButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Numbered List']");
        this.productDescriptionQuoteButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Quote']");
        this.productDescriptionCodeBlockButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Code Block']");
        this.productDescriptionLinkButton = page.locator("div.tiptap-editor-container").first().locator("button[title='Link']");
        this.invoiceDescriptionWriteTab = page.locator("//label[@for='invoice_description']/ancestor::div[contains(@class,'mb-3')]//button[text()='Write']");
        this.invoiceDescriptionPreviewTab = page.locator("//label[@for='invoice_description']/ancestor::div[contains(@class,'mb-3')]//button[text()='Preview']");
        this.invoiceDescriptionEditor = page.locator("div.tiptap-editor-container").last().locator("div.ProseMirror");
        this.invoiceDescriptionBoldButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Bold']");
        this.invoiceDescriptionItalicButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Italic']");
        this.invoiceDescriptionStrikethroughButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Strikethrough']");
        this.invoiceDescriptionH1Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 1']");
        this.invoiceDescriptionH2Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 2']");
        this.invoiceDescriptionH3Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 3']");
        this.invoiceDescriptionBulletListButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Bullet List']");
        this.invoiceDescriptionNumberedListButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Numbered List']");
        this.invoiceDescriptionQuoteButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Quote']");
        this.invoiceDescriptionCodeBlockButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Code Block']");
        this.invoiceDescriptionLinkButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Link']");

        // ─── Media Section ────────────────────────────────────────────────────
        this.mediaSection = page.locator("section:has(h2:text('Media'))");
        this.productImageDropzone = page.locator("div.dropzone");
        this.productImageFileInput = page.locator("input[type='file'][accept='image/jpeg,image/jpg,image/png,image/webp']");

        // ─── Pricing & Inventory Section ──────────────────────────────────────
        this.pricingInventorySection = page.locator("section:has(h2:text('Pricing & Inventory'))");
        this.productCostInput = page.locator("input#costPrice[name='costPrice']");
        this.productPriceInput = page.locator("input#salePrice[name='salePrice']");
        this.taxDropdown = page.locator("button#taxId");
        this.taxHiddenInput = page.locator("input[name='taxId']");
        this.unitDropdown = page.locator("button#unitId");
        this.unitHiddenInput = page.locator("input[name='unitId']");
        this.saleUnitDropdown = page.locator("button#saleUnitId");
        this.saleUnitHiddenInput = page.locator("input[name='saleUnitId']");
        this.purchaseUnitDropdown = page.locator("button#purchaseUnitId");
        this.purchaseUnitHiddenInput = page.locator("input[name='purchaseUnitId']");
        this.alertQuantityInput = page.locator("input#alertQuantity[name='alertQuantity']");

        // ─── Visibility Section ───────────────────────────────────────────────
        this.visibilitySection = page.locator("section:has(h2:text('Visibility'))");
        this.webVisibilityToggle = this.visibilitySection.getByRole('switch').nth(0);
        this.posVisibilityToggle = this.visibilitySection.getByRole('switch').nth(1);

        // ─── SEO Section ──────────────────────────────────────────────────────
        this.seoSection = page.locator("section:has(h2:text('Search Engine Optimization (SEO)'))");
        this.metaTitleInput = page.locator("input#meta_title[name='meta_title']");
        this.metaDescriptionInput = page.locator("input#meta_description[name='meta_description']");
        this.metaKeywordsInput = page.locator("input#meta_keywords[name='meta_keywords']");

        // ─── Inventory Section ────────────────────────────────────────────────
        this.inventorySection = page.locator("section:has(h2:text('Inventory'))");
        this.skuInput = page.locator("input#sku[name='sku']");
        this.barcodeInput = page.locator("input#barcode[name='barcode']");
        this.quantityInput = page.locator("input#quantity[name='quantity']");
        this.manageInventoryCheckbox = page.locator("input#manage_inventory[name='manage_inventory']");
        this.allowBackorderCheckbox = page.locator("input#allow_backorder[name='allow_backorder']");
        this.stockTrackingCheckbox = page.locator("input#stock_tracking[name='stock_tracking']");

        // ─── Shipping Section ─────────────────────────────────────────────────
        this.shippingSection = page.locator("section:has(h2:text('Shipping'))");
        this.lengthInput = page.locator("input#length[name='length']");
        this.heightInput = page.locator("input#height[name='height']");
        this.widthInput = page.locator("input#width[name='width']");
        this.weightInput = page.locator("input#weight[name='weight']");
        this.shippingClassDropdown = page.locator("button#shipping_class_id");
        this.shippingClassHiddenInput = page.locator("input[name='shipping_class_id']");
        this.fulfillmentLocationDropdown = page.locator("button#fulfillment_location");
        this.fulfillmentLocationHiddenInput = page.locator("input[name='fulfillment_location']");

        // ─── Tax Pricing Section ──────────────────────────────────────────────
        this.taxPricingSection = page.locator("section:has(h2:text('Tax Pricing'))");
        this.taxCostPriceInput = page.locator("input#cost_price[name='cost_price']");
        this.taxSalePriceInput = page.locator("input#sale_price[name='sale_price']");
        this.comparePriceInput = page.locator("input#compare_price[name='compare_price']");
        this.discountRulesTextarea = page.locator("textarea#discount_rules[name='discount_rules']");

        // ─── Form Action Buttons ──────────────────────────────────────────────
        this.resetButton = page.locator("//button[.//span[text()='Reset']]");
        this.saveAndEditButton = page.locator("//button[.//span[text()='Save and Edit']]");
        this.saveButton = page.locator("//button[.//span[text()='Save']]");
    }

    // =========================================================================
    // ─── GOTO ─────────────────────────────────────────────────────────────────
    // =========================================================================

    async goto() {
        await this.page.goto('/products/create');
    }

    // =========================================================================
    // ─── UPDATED DROPDOWN HELPER ──────────────────────────────────────────────
    // =========================================================================

    /**
     * Universal dropdown selection method.
     * - Clicks the dropdown button to open it
     * - If a search input is visible, fills it with the option text
     * - Scrolls to and clicks the matching option by exact text
     */
    async selectFromDropdown(dropdown: Locator, optionText: string) {
        await dropdown.click();

        const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
        const searchInput = this.page.locator("input[placeholder='Search options...']");

        if (await searchInput.isVisible()) {
            await searchInput.fill(optionText);
        }

        await dropdownOption.scrollIntoViewIfNeeded();
        await dropdownOption.click();
    }

    // =========================================================================
    // ─── GENERAL INFORMATION METHODS ──────────────────────────────────────────
    // =========================================================================

    async selectProductType(optionText: string) {
        await this.selectFromDropdown(this.productTypeDropdown, optionText);
    }

    async fillProductCode(code: string) {
        await this.productCodeInput.clear();
        await this.productCodeInput.fill(code);
    }

    async generateNewProductCode() {
        await this.generateProductCodeButton.click();
    }

    async fillProductName(name: string) {
        await this.productNameInput.fill(name);
    }

    async fillSecondaryName(name: string) {
        await this.secondaryNameInput.fill(name);
    }

    async fillSlug(slug: string) {
        await this.slugInput.fill(slug);
    }

    async selectBarcodeSymbology(optionText: string) {
        await this.selectFromDropdown(this.barcodeSymbologyDropdown, optionText);
    }

    async selectBrand(optionText: string) {
        await this.selectFromDropdown(this.brandDropdown, optionText);
    }

    async selectCategory(optionText: string) {
        await this.selectFromDropdown(this.categoryDropdown, optionText);
        await this.categoryDropdown.click(); // Click again to close dropdown after selection
    }

    async addTag(tag: string) {
        await this.tagsInput.fill(tag);
        await this.tagsInput.press('Enter');
    }

    async selectStatus(optionText: string) {
        await this.selectFromDropdown(this.statusDropdown, optionText);
    }

    // =========================================================================
    // ─── DESCRIPTIONS METHODS ─────────────────────────────────────────────────
    // =========================================================================

    async fillProductDescription(text: string) {
        await this.productDescriptionEditor.click();
        await this.productDescriptionEditor.fill(text);
    }

    async fillInvoiceDescription(text: string) {
        await this.invoiceDescriptionEditor.click();
        await this.invoiceDescriptionEditor.fill(text);
    }

    // =========================================================================
    // ─── MEDIA METHODS ────────────────────────────────────────────────────────
    // =========================================================================

    async uploadProductImage(filePath: string) {
        await this.productImageFileInput.setInputFiles(filePath);
    }

    // =========================================================================
    // ─── PRICING & INVENTORY METHODS ──────────────────────────────────────────
    // =========================================================================

    async fillProductCost(cost: string) {
        await this.productCostInput.fill(cost);
    }

    async fillProductPrice(price: string) {
        await this.productPriceInput.fill(price);
    }

    async selectProductTax(optionText: string) {
        await this.selectFromDropdown(this.taxDropdown, optionText);
    }

    async selectProductUnit(optionText: string) {
        await this.selectFromDropdown(this.unitDropdown, optionText);
    }

    async selectSaleUnit(optionText: string) {
        await this.selectFromDropdown(this.saleUnitDropdown, optionText);
    }

    async selectPurchaseUnit(optionText: string) {
        await this.selectFromDropdown(this.purchaseUnitDropdown, optionText);
    }

    async fillAlertQuantity(quantity: string) {
        await this.alertQuantityInput.fill(quantity);
    }

    // =========================================================================
    // ─── VISIBILITY METHODS ───────────────────────────────────────────────────
    // =========================================================================

    async setWebVisibility(enable: boolean) {
        await this.visibilitySection.scrollIntoViewIfNeeded();
        const isChecked = await this.webVisibilityToggle.getAttribute('aria-checked');
        const currentlyEnabled = isChecked === 'true';
        if (currentlyEnabled !== enable) {
            await this.webVisibilityToggle.click();
        }
    }

    async setPosVisibility(enable: boolean) {
        await this.visibilitySection.scrollIntoViewIfNeeded();
        const isChecked = await this.posVisibilityToggle.getAttribute('aria-checked');
        const currentlyEnabled = isChecked === 'true';
        if (currentlyEnabled !== enable) {
            await this.posVisibilityToggle.click();
        }
    }

    // =========================================================================
    // ─── SEO METHODS ──────────────────────────────────────────────────────────
    // =========================================================================

    async fillMetaTitle(title: string) {
        await this.metaTitleInput.fill(title);
    }

    async fillMetaDescription(description: string) {
        await this.metaDescriptionInput.fill(description);
    }

    async addMetaKeyword(keyword: string) {
        await this.metaKeywordsInput.fill(keyword);
        await this.metaKeywordsInput.press('Enter');
    }

    // =========================================================================
    // ─── INVENTORY METHODS ────────────────────────────────────────────────────
    // =========================================================================

    async fillSku(sku: string) {
        await this.skuInput.fill(sku);
    }

    async fillBarcode(barcode: string) {
        await this.barcodeInput.fill(barcode);
    }

    async fillQuantity(quantity: string) {
        await this.quantityInput.fill(quantity);
    }

    async setManageInventory(check: boolean) {
        check
            ? await this.manageInventoryCheckbox.check()
            : await this.manageInventoryCheckbox.uncheck();
    }

    async setAllowBackorder(check: boolean) {
        check
            ? await this.allowBackorderCheckbox.check()
            : await this.allowBackorderCheckbox.uncheck();
    }

    async setStockTracking(check: boolean) {
        check
            ? await this.stockTrackingCheckbox.check()
            : await this.stockTrackingCheckbox.uncheck();
    }

    // =========================================================================
    // ─── SHIPPING METHODS ─────────────────────────────────────────────────────
    // =========================================================================

    async fillLength(length: string) {
        await this.lengthInput.fill(length);
    }

    async fillHeight(height: string) {
        await this.heightInput.fill(height);
    }

    async fillWidth(width: string) {
        await this.widthInput.fill(width);
    }

    async fillWeight(weight: string) {
        await this.weightInput.fill(weight);
    }
    
    // async selectShippingClass(optionText: string) {
    //     await this.selectFromDropdown(this.shippingClassDropdown, optionText);
    // }

    async selectFulfillmentLocation(optionText: string) {
        await this.selectFromDropdown(this.fulfillmentLocationDropdown, optionText);
    }

    // =========================================================================
    // ─── TAX PRICING METHODS ──────────────────────────────────────────────────
    // =========================================================================

    async fillTaxCostPrice(price: string) {
        await this.taxCostPriceInput.fill(price);
    }

    async fillTaxSalePrice(price: string) {
        await this.taxSalePriceInput.fill(price);
    }

    async fillComparePrice(price: string) {
        await this.comparePriceInput.fill(price);
    }

    async fillDiscountRules(json: string) {
        await this.discountRulesTextarea.fill(json);
    }

    // =========================================================================
    // ─── FORM ACTION METHODS ──────────────────────────────────────────────────
    // =========================================================================

    async resetForm() {
        await this.resetButton.click();
    }

    async saveAndEdit() {
        await this.saveAndEditButton.click();
    }

    async save() {
        await this.saveButton.click();
    }

    // =========================================================================
    // ─── END-TO-END FULL FORM FILL METHOD ─────────────────────────────────────
    // =========================================================================

    /**
     * Fills the entire Add Product form end-to-end based on the provided data object.
     * All fields are optional — only provided fields will be filled.
     *
     * @example
     * await addProductPage.fillFullForm({
     *   productType: 'Single Product',
     *   productName: 'Test Product',
     *   slug: 'test-product',
     *   brand: 'Nike',
     *   category: 'Shoes',
     *   status: 'Active',
     *   tags: ['tag1', 'tag2'],
     *   productDescription: 'This is a test product.',
     *   invoiceDescription: 'Invoice description here.',
     *   productImagePath: 'tests/assets/product.png',
     *   productCost: '100',
     *   productPrice: '150',
     *   alertQuantity: '5',
     *   webVisibility: true,
     *   posVisibility: true,
     *   metaTitle: 'Test Product Meta',
     *   metaDescription: 'Meta description here',
     *   metaKeywords: ['keyword1', 'keyword2'],
     *   sku: 'SKU-001',
     *   barcode: '123456789',
     *   quantity: '50',
     *   manageInventory: true,
     *   allowBackorder: false,
     *   stockTracking: true,
     *   length: '10',
     *   height: '5',
     *   width: '8',
     *   weight: '2',
     *   taxCostPrice: '95',
     *   taxSalePrice: '145',
     *   comparePrice: '160',
     *   discountRules: '[{"min_qty": 5, "discount": 10}]',
     *   action: 'save',
     * });
     */
    async fillFullForm(data: AddProductFormData): Promise<void> {
        console.log('🚀 Starting End-to-End Product Form Fill...');

        // ── STEP 1: General Information ───────────────────────────────────────
        console.log('📋 Step 1: Filling General Information...');

        if (data.productType) {
            await this.selectProductType(data.productType);
            console.log(`   ✅ Product Type      : ${data.productType}`);
        }

        if (data.productCode) {
            await this.fillProductCode(data.productCode);
            console.log(`   ✅ Product Code      : ${data.productCode}`);
        }

        if (data.productName) {
            await this.fillProductName(data.productName);
            console.log(`   ✅ Product Name      : ${data.productName}`);
        }

        if (data.secondaryName) {
            await this.fillSecondaryName(data.secondaryName);
            console.log(`   ✅ Secondary Name    : ${data.secondaryName}`);
        }

        if (data.slug) {
            await this.fillSlug(data.slug);
            console.log(`   ✅ Slug              : ${data.slug}`);
        }

        if (data.barcodeSymbology) {
            await this.selectBarcodeSymbology(data.barcodeSymbology);
            console.log(`   ✅ Barcode Symbology : ${data.barcodeSymbology}`);
        }

        if (data.brand) {
            await this.selectBrand(data.brand);
            console.log(`   ✅ Brand             : ${data.brand}`);
        }

        if (data.category) {
            await this.selectCategory(data.category);
            console.log(`   ✅ Category          : ${data.category}`);
        }

        if (data.tags && data.tags.length > 0) {
            for (const tag of data.tags) {
                await this.addTag(tag);
                console.log(`   ✅ Tag Added         : ${tag}`);
            }
        }

        if (data.status) {
            await this.selectStatus(data.status);
            console.log(`   ✅ Status            : ${data.status}`);
        }

        // ── STEP 2: Descriptions ──────────────────────────────────────────────
        console.log('📝 Step 2: Filling Descriptions...');

        if (data.productDescription) {
            await this.fillProductDescription(data.productDescription);
            console.log(`   ✅ Product Description filled`);
        }

        if (data.invoiceDescription) {
            await this.fillInvoiceDescription(data.invoiceDescription);
            console.log(`   ✅ Invoice Description filled`);
        }

        /*
        // ── STEP 3: Media ─────────────────────────────────────────────────────
        console.log('🖼️  Step 3: Handling Media...');

        if (data.productImagePath) {
            await this.uploadProductImage(data.productImagePath);
            console.log(`   ✅ Product Image     : ${data.productImagePath}`);
        }
        */

        // ── STEP 4: Pricing & Inventory ───────────────────────────────────────
        console.log('💰 Step 4: Filling Pricing & Inventory...');

        if (data.productCost) {
            await this.fillProductCost(data.productCost);
            console.log(`   ✅ Product Cost      : ${data.productCost}`);
        }

        if (data.productPrice) {
            await this.fillProductPrice(data.productPrice);
            console.log(`   ✅ Product Price     : ${data.productPrice}`);
        }

        if (data.tax) {
            await this.selectProductTax(data.tax);
            console.log(`   ✅ Product Tax       : ${data.tax}`);
        }

        if (data.unit) {
            await this.selectProductUnit(data.unit);
            console.log(`   ✅ Product Unit      : ${data.unit}`);
        }

        if (data.saleUnit) {
            await this.selectSaleUnit(data.saleUnit);
            console.log(`   ✅ Sale Unit         : ${data.saleUnit}`);
        }

        if (data.purchaseUnit) {
            await this.selectPurchaseUnit(data.purchaseUnit);
            console.log(`   ✅ Purchase Unit     : ${data.purchaseUnit}`);
        }

        if (data.alertQuantity) {
            await this.fillAlertQuantity(data.alertQuantity);
            console.log(`   ✅ Alert Quantity    : ${data.alertQuantity}`);
        }

        // ── STEP 5: Visibility ────────────────────────────────────────────────
        console.log('👁️  Step 5: Setting Visibility...');

        if (data.webVisibility !== undefined) {
            await this.setWebVisibility(data.webVisibility);
            console.log(`   ✅ Web Visibility    : ${data.webVisibility}`);
        }

        if (data.posVisibility !== undefined) {
            await this.setPosVisibility(data.posVisibility);
            console.log(`   ✅ POS Visibility    : ${data.posVisibility}`);
        }

        // ── STEP 6: SEO ───────────────────────────────────────────────────────
        console.log('🔍 Step 6: Filling SEO Information...');

        if (data.metaTitle) {
            await this.fillMetaTitle(data.metaTitle);
            console.log(`   ✅ Meta Title        : ${data.metaTitle}`);
        }

        if (data.metaDescription) {
            await this.fillMetaDescription(data.metaDescription);
            console.log(`   ✅ Meta Description  : ${data.metaDescription}`);
        }

        if (data.metaKeywords && data.metaKeywords.length > 0) {
            for (const keyword of data.metaKeywords) {
                await this.addMetaKeyword(keyword);
                console.log(`   ✅ Meta Keyword      : ${keyword}`);
            }
        }

        // ── STEP 7: Inventory ─────────────────────────────────────────────────
        console.log('📦 Step 7: Filling Inventory...');

        if (data.sku) {
            await this.fillSku(data.sku);
            console.log(`   ✅ SKU               : ${data.sku}`);
        }

        if (data.barcode) {
            await this.fillBarcode(data.barcode);
            console.log(`   ✅ Barcode           : ${data.barcode}`);
        }

        if (data.quantity) {
            await this.fillQuantity(data.quantity);
            console.log(`   ✅ Quantity          : ${data.quantity}`);
        }

        if (data.manageInventory !== undefined) {
            await this.setManageInventory(data.manageInventory);
            console.log(`   ✅ Manage Inventory  : ${data.manageInventory}`);
        }

        if (data.allowBackorder !== undefined) {
            await this.setAllowBackorder(data.allowBackorder);
            console.log(`   ✅ Allow Backorder   : ${data.allowBackorder}`);
        }

        if (data.stockTracking !== undefined) {
            await this.setStockTracking(data.stockTracking);
            console.log(`   ✅ Stock Tracking    : ${data.stockTracking}`);
        }

        // ── STEP 8: Shipping ──────────────────────────────────────────────────
        console.log('🚚 Step 8: Filling Shipping Details...');

        if (data.length) {
            await this.fillLength(data.length);
            console.log(`   ✅ Length            : ${data.length}`);
        }

        if (data.height) {
            await this.fillHeight(data.height);
            console.log(`   ✅ Height            : ${data.height}`);
        }

        if (data.width) {
            await this.fillWidth(data.width);
            console.log(`   ✅ Width             : ${data.width}`);
        }

        if (data.weight) {
            await this.fillWeight(data.weight);
            console.log(`   ✅ Weight            : ${data.weight}`);
        }

        /*
        if (data.shippingClass) {
            await this.selectShippingClass(data.shippingClass);
            console.log(`   ✅ Shipping Class    : ${data.shippingClass}`);
        }
        */

        if (data.fulfillmentLocation) {
            await this.selectFulfillmentLocation(data.fulfillmentLocation);
            console.log(`   ✅ Fulfillment Loc   : ${data.fulfillmentLocation}`);
        }

        // ── STEP 9: Tax Pricing ───────────────────────────────────────────────
        console.log('🧾 Step 9: Filling Tax Pricing...');

        if (data.taxCostPrice) {
            await this.fillTaxCostPrice(data.taxCostPrice);
            console.log(`   ✅ Tax Cost Price    : ${data.taxCostPrice}`);
        }

        if (data.taxSalePrice) {
            await this.fillTaxSalePrice(data.taxSalePrice);
            console.log(`   ✅ Tax Sale Price    : ${data.taxSalePrice}`);
        }

        if (data.comparePrice) {
            await this.fillComparePrice(data.comparePrice);
            console.log(`   ✅ Compare Price     : ${data.comparePrice}`);
        }

        if (data.discountRules) {
            await this.fillDiscountRules(data.discountRules);
            console.log(`   ✅ Discount Rules    : filled`);
        }

        // ── STEP 10: Form Action ──────────────────────────────────────────────
        console.log('💾 Step 10: Submitting Form...');

        switch (data.action) {
            case 'save':
                await this.save();
                console.log('   ✅ Action: Save');
                break;
            case 'saveAndEdit':
                await this.saveAndEdit();
                console.log('   ✅ Action: Save and Edit');
                break;
            case 'reset':
                await this.resetForm();
                console.log('   ✅ Action: Reset');
                break;
            default:
                console.log('   ⚠️  No action provided. Form was not submitted.');
                break;
        }

        console.log('🎉 End-to-End Product Form Fill Completed Successfully!');
    }
}