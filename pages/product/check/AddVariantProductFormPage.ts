// import type { Locator, Page } from '@playwright/test';

// /**
//  * Strongly typed Add Product form interface.
//  * ALL fields are 100% optional - only fields you provide will be filled.
//  */
// export interface AddProductFormData {

//     // ------------------------------
//     // General Information Section
//     // ------------------------------
//     productType?: string;
//     productCode?: string;
//     generateAutoProductCode?: boolean;
//     productName?: string;
//     secondaryName?: string;
//     slug?: string;
//     barcodeSymbology?: string;
//     brand?: string;
//     category?: string;
//     tags?: string[];
//     status?: string;

//     // ------------------------------
//     // Descriptions Section
//     // ------------------------------
//     productDescription?: string;
//     invoiceDescription?: string;

//     // ------------------------------
//     // Media Section
//     // ------------------------------
//     productImagePath?: string;

//     // ------------------------------
//     // Pricing & Inventory Section
//     // ------------------------------
//     productCost?: string;
//     productPrice?: string;
//     tax?: string;
//     unit?: string;
//     saleUnit?: string;
//     purchaseUnit?: string;
//     alertQuantity?: string;

//     // ------------------------------
//     // Visibility Section
//     // ------------------------------
//     webVisibility?: boolean;
//     posVisibility?: boolean;

//     // ------------------------------
//     // SEO Section
//     // ------------------------------
//     metaTitle?: string;
//     metaDescription?: string;
//     metaKeywords?: string[];

//     // ------------------------------
//     // Variant Options Section
//     // ------------------------------
//     variantColor?: boolean;
//     variantMaterial?: boolean;
//     variantPattern?: boolean;
//     variantSize?: boolean;
//     variantStyle?: boolean;

//     // ------------------------------
//     // Inventory Section
//     // ------------------------------
//     sku?: string;
//     barcode?: string;
//     quantity?: string;
//     manageInventory?: boolean;
//     allowBackorder?: boolean;
//     stockTracking?: boolean;

//     // ------------------------------
//     // Shipping Section
//     // ------------------------------
//     length?: string;
//     height?: string;
//     width?: string;
//     weight?: string;
//     shippingClass?: string;
//     fulfillmentLocation?: string;

//     // ------------------------------
//     // Tax Pricing Section
//     // ------------------------------
//     taxCostPrice?: string;
//     taxSalePrice?: string;
//     comparePrice?: string;
//     discountRules?: string;

//     // ------------------------------
//     // Variant Details Section
//     // ------------------------------
//     lowStockAlert?: string;

//     // ------------------------------
//     // Final Form Action
//     // ------------------------------
//     action?: 'save' | 'saveAndEdit' | 'reset';
// }

// export default class AddProductPage {
//     readonly page: Page;

//     // ==================================================
//     // Stable Page Locators
//     // ==================================================

//     readonly productTypeDropdown: Locator;
//     readonly productCodeInput: Locator;
//     readonly generateCodeButton: Locator;
//     readonly productNameInput: Locator;
//     readonly secondaryNameInput: Locator;
//     readonly slugInput: Locator;
//     readonly barcodeSymbologyDropdown: Locator;
//     readonly brandDropdown: Locator;
//     readonly categoryDropdown: Locator;
//     readonly tagsInput: Locator;
//     readonly statusDropdown: Locator;

//     readonly productDescriptionEditor: Locator;
//     readonly invoiceDescriptionEditor: Locator;

//     readonly productImageFileInput: Locator;

//     readonly productCostInput: Locator;
//     readonly productPriceInput: Locator;
//     readonly taxDropdown: Locator;
//     readonly unitDropdown: Locator;
//     readonly saleUnitDropdown: Locator;
//     readonly purchaseUnitDropdown: Locator;
//     readonly alertQuantityInput: Locator;

//     readonly webVisibilityToggle: Locator;
//     readonly posVisibilityToggle: Locator;

//     readonly metaTitleInput: Locator;
//     readonly metaDescriptionInput: Locator;
//     readonly metaKeywordsInput: Locator;

//     readonly variantColorCheckbox: Locator;
//     readonly variantMaterialCheckbox: Locator;
//     readonly variantPatternCheckbox: Locator;
//     readonly variantSizeCheckbox: Locator;
//     readonly variantStyleCheckbox: Locator;

//     readonly skuInput: Locator;
//     readonly barcodeInput: Locator;
//     readonly quantityInput: Locator;
//     readonly manageInventoryCheckbox: Locator;
//     readonly allowBackorderCheckbox: Locator;
//     readonly stockTrackingCheckbox: Locator;

//     readonly lengthInput: Locator;
//     readonly heightInput: Locator;
//     readonly widthInput: Locator;
//     readonly weightInput: Locator;
//     readonly shippingClassDropdown: Locator;
//     readonly fulfillmentLocationDropdown: Locator;

//     readonly taxCostPriceInput: Locator;
//     readonly taxSalePriceInput: Locator;
//     readonly comparePriceInput: Locator;
//     readonly discountRulesTextarea: Locator;

//     readonly lowStockAlertInput: Locator;

//     readonly resetButton: Locator;
//     readonly saveAndEditButton: Locator;
//     readonly saveButton: Locator;

//     constructor(page: Page) {
//         this.page = page;

//         // General Information
//         this.productTypeDropdown = page.locator('button#productTypeId');
//         this.productCodeInput = page.locator('input#product');
//         this.generateCodeButton = page.locator('button[title="Generate new code"]');
//         this.productNameInput = page.locator('input#name');
//         this.secondaryNameInput = page.locator('input#secondaryName');
//         this.slugInput = page.locator('input#slug');
//         this.barcodeSymbologyDropdown = page.locator('button#barcodeSymbology');
//         this.brandDropdown = page.locator('button#brand');
//         this.categoryDropdown = page.locator('button#categories');
//         this.tagsInput = page.locator('input#tags');
//         this.statusDropdown = page.locator('button#status');

//         // Rich Text Editors
//         this.productDescriptionEditor = page.locator('div.ProseMirror').first();
//         this.invoiceDescriptionEditor = page.locator('div.ProseMirror').last();

//         // Media
//         this.productImageFileInput = page.locator("input[type='file'][accept*='image']");

//         // Pricing
//         this.productCostInput = page.locator('input#costPrice');
//         this.productPriceInput = page.locator('input#salePrice');
//         this.taxDropdown = page.locator('button#taxId');
//         this.unitDropdown = page.locator('button#unitId');
//         this.saleUnitDropdown = page.locator('button#saleUnitId');
//         this.purchaseUnitDropdown = page.locator('button#purchaseUnitId');
//         this.alertQuantityInput = page.locator('input#alertQuantity');

//         // Visibility
//         this.webVisibilityToggle = page.getByRole('switch', { name: 'Web Visibility' });
//         this.posVisibilityToggle = page.getByRole('switch', { name: 'POS Visibility' });

//         // SEO
//         this.metaTitleInput = page.locator('input#meta_title');
//         this.metaDescriptionInput = page.locator('input#meta_description');
//         this.metaKeywordsInput = page.locator('input#meta_keywords');

//         // Variant Options
//         this.variantColorCheckbox = page.getByLabel('Color');
//         this.variantMaterialCheckbox = page.getByLabel('Material');
//         this.variantPatternCheckbox = page.getByLabel('Pattern');
//         this.variantSizeCheckbox = page.getByLabel('Size');
//         this.variantStyleCheckbox = page.getByLabel('Style');

//         // Inventory
//         this.skuInput = page.locator('input#sku');
//         this.barcodeInput = page.locator('input#barcode');
//         this.quantityInput = page.locator('input#quantity');
//         this.manageInventoryCheckbox = page.locator('input#manage_inventory');
//         this.allowBackorderCheckbox = page.locator('input#allow_backorder');
//         this.stockTrackingCheckbox = page.locator('input#stock_tracking');

//         // Shipping
//         this.lengthInput = page.locator('input#length');
//         this.heightInput = page.locator('input#height');
//         this.widthInput = page.locator('input#width');
//         this.weightInput = page.locator('input#weight');
//         this.shippingClassDropdown = page.locator('button#shipping_class_id');
//         this.fulfillmentLocationDropdown = page.locator('button#fulfillment_location');

//         // Tax Pricing
//         this.taxCostPriceInput = page.locator('input#cost_price');
//         this.taxSalePriceInput = page.locator('input#sale_price');
//         this.comparePriceInput = page.locator('input#compare_price');
//         this.discountRulesTextarea = page.locator('textarea#discount_rules');

//         // Variant Details
//         this.lowStockAlertInput = page.locator('input#low_stock_alert');

//         // Action Buttons
//         this.resetButton = page.getByRole('button', { name: 'Reset' });
//         this.saveAndEditButton = page.getByRole('button', { name: 'Save and Edit' });
//         this.saveButton = page.getByRole('button', { name: 'Save' });
//     }

//     // ==================================================
//     // 🎯 YOUR EXACT DROPDOWN METHOD (copied word for word)
//     // ==================================================
//     async selectFromDropdown(dropdown: Locator, optionText: string) {
//         await dropdown.click();

//         const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
//         const searchInput = this.page.locator("input[placeholder='Search options...']");

//         if (await searchInput.isVisible()) {
//             await searchInput.fill(optionText);
//         }

//         await dropdownOption.scrollIntoViewIfNeeded();
//         await dropdownOption.click();
//     }

//     async goto() {
//         await this.page.goto('/products/create');
//     }

//     // Smart helpers
//     async setToggle(toggle: Locator, enable: boolean) {
//         const isChecked = await toggle.getAttribute('aria-checked') === 'true';
//         if (isChecked !== enable) await toggle.click();
//     }

//     async setCheckbox(checkbox: Locator, check: boolean) {
//         check ? await checkbox.check() : await checkbox.uncheck();
//     }

//     // ==================================================
//     // 🚀 LEGENDARY END TO END FULL FORM FILL METHOD
//     // ==================================================
//     /**
//      * Fills every single section of the Add Product form automatically.
//      * You only need to pass the fields you want to set.
//      */
//     async fillFullForm(data: AddProductFormData): Promise<void> {
//         console.log('🚀 [AddProduct] Starting end-to-end product form fill...');

//         console.log('📋 [1/10] Processing General Information...');
//         if (data.productType) await this.selectFromDropdown(this.productTypeDropdown, data.productType);
//         if (data.generateAutoProductCode) await this.generateCodeButton.click();
//         if (data.productCode) await this.productCodeInput.fill(data.productCode);
//         if (data.productName) await this.productNameInput.fill(data.productName);
//         if (data.secondaryName) await this.secondaryNameInput.fill(data.secondaryName);
//         if (data.slug) await this.slugInput.fill(data.slug);
//         if (data.barcodeSymbology) await this.selectFromDropdown(this.barcodeSymbologyDropdown, data.barcodeSymbology);
//         if (data.brand) await this.selectFromDropdown(this.brandDropdown, data.brand);
//         if (data.category) await this.selectFromDropdown(this.categoryDropdown, data.category);
//         if (data.tags) {
//             for (const tag of data.tags) {
//                 await this.tagsInput.fill(tag);
//                 await this.tagsInput.press('Enter');
//             }
//         }
//         if (data.status) await this.selectFromDropdown(this.statusDropdown, data.status);

//         console.log('📝 [2/10] Processing Descriptions...');
//         if (data.productDescription) {
//             await this.productDescriptionEditor.click();
//             await this.productDescriptionEditor.fill(data.productDescription);
//         }
//         if (data.invoiceDescription) {
//             await this.invoiceDescriptionEditor.click();
//             await this.invoiceDescriptionEditor.fill(data.invoiceDescription);
//         }

//         // console.log('🖼️  [3/10] Processing Media...');
//         // if (data.productImagePath) await this.productImageFileInput.setInputFiles(data.productImagePath);

//         console.log('💰 [4/10] Processing Pricing & Inventory...');
//         if (data.productCost) await this.productCostInput.fill(data.productCost);
//         if (data.productPrice) await this.productPriceInput.fill(data.productPrice);
//         if (data.tax) await this.selectFromDropdown(this.taxDropdown, data.tax);
//         if (data.unit) await this.selectFromDropdown(this.unitDropdown, data.unit);
//         if (data.saleUnit) await this.selectFromDropdown(this.saleUnitDropdown, data.saleUnit);
//         if (data.purchaseUnit) await this.selectFromDropdown(this.purchaseUnitDropdown, data.purchaseUnit);
//         if (data.alertQuantity) await this.alertQuantityInput.fill(data.alertQuantity);

//         console.log('👁️  [5/10] Processing Visibility...');
//         if (data.webVisibility !== undefined) await this.setToggle(this.webVisibilityToggle, data.webVisibility);
//         if (data.posVisibility !== undefined) await this.setToggle(this.posVisibilityToggle, data.posVisibility);

//         console.log('🔍 [6/10] Processing SEO...');
//         if (data.metaTitle) await this.metaTitleInput.fill(data.metaTitle);
//         if (data.metaDescription) await this.metaDescriptionInput.fill(data.metaDescription);
//         if (data.metaKeywords) {
//             for (const keyword of data.metaKeywords) {
//                 await this.metaKeywordsInput.fill(keyword);
//                 await this.metaKeywordsInput.press('Enter');
//             }
//         }

//         console.log('🎛️  [7/10] Processing Variant Options...');
//         if (data.variantColor !== undefined) await this.setCheckbox(this.variantColorCheckbox, data.variantColor);
//         if (data.variantMaterial !== undefined) await this.setCheckbox(this.variantMaterialCheckbox, data.variantMaterial);
//         if (data.variantPattern !== undefined) await this.setCheckbox(this.variantPatternCheckbox, data.variantPattern);
//         if (data.variantSize !== undefined) await this.setCheckbox(this.variantSizeCheckbox, data.variantSize);
//         if (data.variantStyle !== undefined) await this.setCheckbox(this.variantStyleCheckbox, data.variantStyle);

//         console.log('📦 [8/10] Processing Inventory...');
//         if (data.sku) await this.skuInput.fill(data.sku);
//         if (data.barcode) await this.barcodeInput.fill(data.barcode);
//         if (data.quantity) await this.quantityInput.fill(data.quantity);
//         if (data.manageInventory !== undefined) await this.setCheckbox(this.manageInventoryCheckbox, data.manageInventory);
//         if (data.allowBackorder !== undefined) await this.setCheckbox(this.allowBackorderCheckbox, data.allowBackorder);
//         if (data.stockTracking !== undefined) await this.setCheckbox(this.stockTrackingCheckbox, data.stockTracking);

//         console.log('🚚 [9/10] Processing Shipping...');
//         if (data.length) await this.lengthInput.fill(data.length);
//         if (data.height) await this.heightInput.fill(data.height);
//         if (data.width) await this.widthInput.fill(data.width);
//         if (data.weight) await this.weightInput.fill(data.weight);
//         if (data.shippingClass) await this.selectFromDropdown(this.shippingClassDropdown, data.shippingClass);
//         if (data.fulfillmentLocation) await this.selectFromDropdown(this.fulfillmentLocationDropdown, data.fulfillmentLocation);

//         console.log('🧾 [10/10] Processing Tax Pricing...');
//         if (data.taxCostPrice) await this.taxCostPriceInput.fill(data.taxCostPrice);
//         if (data.taxSalePrice) await this.taxSalePriceInput.fill(data.taxSalePrice);
//         if (data.comparePrice) await this.comparePriceInput.fill(data.comparePrice);
//         if (data.discountRules) await this.discountRulesTextarea.fill(data.discountRules);
//         if (data.lowStockAlert) await this.lowStockAlertInput.fill(data.lowStockAlert);

//         // Final action
//         switch (data.action) {
//             case 'save':
//                 await this.saveButton.click();
//                 console.log('💾 Action executed: Save');
//                 break;
//             case 'saveAndEdit':
//                 await this.saveAndEditButton.click();
//                 console.log('💾 Action executed: Save and Edit');
//                 break;
//             case 'reset':
//                 await this.resetButton.click();
//                 console.log('🔄 Action executed: Reset');
//                 break;
//         }

//         console.log('✅🎉 End-to-end product form fill completed successfully!');
//     }
// }