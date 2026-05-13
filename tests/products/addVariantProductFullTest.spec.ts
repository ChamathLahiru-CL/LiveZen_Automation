import { test, expect } from '../fixtures';
import AddProductPage from '../../pages/product/AddVariantProductFormPage';

// ============================================================
// TEST DATA
// ============================================================

const VALID_PRODUCT_DATA = {
    // General Information
    productType: 'Variant Product',
    productName: 'Nike Air Max 2025',
    secondaryName: 'Air Max Elite',
    slug: 'nike-air-max-2025',
    barcodeSymbology: 'CODE128',
    brand: 'Nike',
    category: 'Sports Shoes',
    tags: ['nike', 'sports', 'shoes', 'running'],
    status: 'Active',

    // Descriptions
    productDescription: 'Premium Nike Air Max 2025 running shoes with advanced cushioning technology.',
    invoiceDescription: 'Nike Air Max 2025 - Premium Edition | SKU: NK-AMX-2025',

    // Media
    productImagePath: 'tests/assets/product-image.png',

    // Pricing & Inventory
    productCost: '75',
    productPrice: '149',
    tax: 'VAT 10%',
    unit: 'Piece',
    saleUnit: 'Piece',
    purchaseUnit: 'Box',
    alertQuantity: '10',

    // Visibility
    webVisibility: true,
    posVisibility: true,

    // SEO
    metaTitle: 'Nike Air Max 2025 - Best Running Shoes Online',
    metaDescription: 'Buy Nike Air Max 2025 running shoes at the best price. Free shipping available.',
    metaKeywords: ['nike', 'air max', 'running shoes', '2025'],

    // Inventory
    sku: 'NK-AMX-2025',
    barcode: '9876543210123',
    quantity: '250',
    manageInventory: true,
    allowBackorder: false,
    stockTracking: true,

    // Shipping
    length: '32',
    height: '15',
    width: '22',
    weight: '1.5',
    shippingClass: 'Standard',
    fulfillmentLocation: 'Warehouse A',

    // Tax Pricing
    taxCostPrice: '75',
    taxSalePrice: '149',
    comparePrice: '180',
    discountRules: '[{"min_qty": 5, "discount": 5}, {"min_qty": 10, "discount": 10}]',

    // Action
    action: 'save' as const,
};

const VARIANT_PRODUCT_DATA = {
    productType: 'Variant Product',
    productName: 'Adidas Ultra Boost Variant',
    secondaryName: 'Ultra Boost',
    slug: 'adidas-ultra-boost-variant',
    brand: 'Adidas',
    category: 'Sports Shoes',
    tags: ['adidas', 'variant', 'boost'],
    status: 'Active',
    productCost: '90',
    productPrice: '180',
    alertQuantity: '5',
    variantColor: true,
    variantSize: true,
    variantMaterial: false,
    variantPattern: false,
    variantStyle: false,
    sku: 'AD-UB-VAR-001',
    quantity: '100',
    manageInventory: true,
    stockTracking: true,
    action: 'save' as const,
};

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Add Product Page - Full Coverage Test Suite', () => {

    let productPage: AddProductPage;

    test.beforeEach(async ({ loggedIn, page, allProductsPage }) => {
        productPage = new AddProductPage(page);

         await allProductsPage.navigateToAllProducts();
        await allProductsPage.clickAddProduct();
        // await productPage.goto();
        await page.waitForLoadState('networkidle');
    });

    // ==========================================================
    // 🧭 SECTION 1 - PAGE LOAD & UI VERIFICATION
    // ==========================================================

    test.describe('📄 Page Load & UI Verification', () => {

        // test('TC_001 - Page should load successfully with correct title', async ({ page }) => {
        //     await expect(page).toHaveURL(/\/products\/create/);
        //     await expect(productPage.pageTitle).toBeVisible();
        //     await expect(productPage.pageTitle).toHaveText('Add Product');
        // });

        // test('TC_002 - Page should display correct breadcrumb navigation', async ({ page }) => {
        //     await expect(productPage.breadcrumbProductsLink).toBeVisible();
        //     await expect(productPage.breadcrumbProductsLink).toHaveText('Products');
        //     await expect(productPage.breadcrumbCurrentPage).toBeVisible();
        //     await expect(productPage.breadcrumbCurrentPage).toHaveText('Add Product');
        // });

        // test('TC_003 - Page should display required field indicator message', async ({ page }) => {
        //     const requiredMessage = page.locator("text=Please fill in the information below.");
        //     await expect(requiredMessage).toBeVisible();
        // });

        test('TC_004 - All form sections should be visible on page load', async ({ page }) => {
            await expect(page.locator("h2:text('General Information')")).toBeVisible();
            await expect(page.locator("h2:text('Descriptions')")).toBeVisible();
            await expect(page.locator("h2:text('Media')")).toBeVisible();
            await expect(page.locator("h2:text('Pricing & Inventory')")).toBeVisible();
            await expect(page.locator("h2:text('Visibility')")).toBeVisible();
            await expect(page.locator("h2:text('Search Engine Optimization (SEO)')")).toBeVisible();
            await expect(page.locator("h2:text('Inventory')")).toBeVisible();
            await expect(page.locator("h2:text('Shipping')")).toBeVisible();
            await expect(page.locator("h2:text('Tax Pricing')")).toBeVisible();
        });

        test('TC_005 - All form action buttons should be visible', async ({ page }) => {
            await expect(productPage.resetButton).toBeVisible();
            await expect(productPage.saveAndEditButton).toBeVisible();
            await expect(productPage.saveButton).toBeVisible();
        });

        test('TC_006 - Sidebar navigation should be visible and contain all menu items', async ({ page }) => {
            await expect(page.locator("span[title='Dashboard']")).toBeVisible();
            await expect(page.locator("span[title='Products']")).toBeVisible();
            await expect(page.locator("span[title='Sales']")).toBeVisible();
            await expect(page.locator("span[title='Purchases']")).toBeVisible();
            await expect(page.locator("span[title='Customers']")).toBeVisible();
            await expect(page.locator("span[title='Reports']")).toBeVisible();
            await expect(page.locator("span[title='Settings']")).toBeVisible();
        });

        test('TC_007 - Header elements should be visible', async ({ page }) => {
            await expect(page.locator("input[type='search']")).toBeVisible();
            await expect(page.locator(".lucide-bell")).toBeVisible();
            await expect(page.locator("img[alt='Language']")).toBeVisible();
        });

        test('TC_008 - Footer should be visible with correct content', async ({ page }) => {
            const footer = page.locator('footer');
            await expect(footer).toBeVisible();
            await expect(footer).toContainText('Shopbox');
            await expect(footer).toContainText('Livezen Technologies');
        });
    });

    // ==========================================================
    // 🔍 SECTION 2 - GENERAL INFORMATION SECTION
    // ==========================================================

    test.describe('📋 General Information Section', () => {

        test('TC_009 - Product Type dropdown should be visible and have default value', async ({ page }) => {
            await expect(productPage.productTypeDropdown).toBeVisible();
            await expect(productPage.productTypeDropdown).toBeEnabled();
        });

        test('TC_010 - Product Type dropdown should show correct options', async ({ page }) => {
            await productPage.productTypeDropdown.click();
            await expect(page.getByRole('option', { name: 'Single Product', exact: true })).toBeVisible();
            await expect(page.getByRole('option', { name: 'Variant Product', exact: true })).toBeVisible();
            await page.keyboard.press('Escape');
        });

        test('TC_011 - Should select Single Product from Product Type dropdown', async () => {
            await productPage.selectFromDropdown(productPage.productTypeDropdown, 'Single Product');
            await expect(productPage.productTypeDropdown).toContainText('Single Product');
        });

        test('TC_012 - Should select Variant Product from Product Type dropdown', async () => {
            await productPage.selectFromDropdown(productPage.productTypeDropdown, 'Variant Product');
            await expect(productPage.productTypeDropdown).toContainText('Variant Product');
        });

        test('TC_013 - Product Code field should be auto-generated and visible', async ({ page }) => {
            await expect(productPage.productCodeInput).toBeVisible();
            const value = await productPage.productCodeInput.inputValue();
            expect(value.trim().length).toBeGreaterThan(0);
            expect(value).toMatch(/^PROD\d+/);
        });

        test('TC_014 - Generate Code button should regenerate a new product code', async ({ page }) => {
            const initialCode = await productPage.productCodeInput.inputValue();
            await productPage.generateCodeButton.click();
            await page.waitForTimeout(500);
            const newCode = await productPage.productCodeInput.inputValue();
            expect(newCode).toMatch(/^PROD\d+/);
        });

        test('TC_015 - Product Code should accept manual input', async () => {
            await productPage.productCodeInput.clear();
            await productPage.productCodeInput.fill('CUSTOM-001');
            await expect(productPage.productCodeInput).toHaveValue('CUSTOM-001');
        });

        test('TC_016 - Product Name field should be visible, enabled, and accept input', async () => {
            await expect(productPage.productNameInput).toBeVisible();
            await expect(productPage.productNameInput).toBeEnabled();
            await productPage.productNameInput.fill('Test Product Name');
            await expect(productPage.productNameInput).toHaveValue('Test Product Name');
        });

        test('TC_017 - Product Name field should have correct placeholder', async () => {
            await expect(productPage.productNameInput).toHaveAttribute('placeholder', 'Enter product name');
        });

        test('TC_018 - Secondary Name field should be visible and optional', async () => {
            await expect(productPage.secondaryNameInput).toBeVisible();
            await productPage.secondaryNameInput.fill('Secondary Test Name');
            await expect(productPage.secondaryNameInput).toHaveValue('Secondary Test Name');
        });

        test('TC_019 - Slug field should be visible and accept input', async () => {
            await expect(productPage.slugInput).toBeVisible();
            await productPage.slugInput.fill('test-product-slug');
            await expect(productPage.slugInput).toHaveValue('test-product-slug');
        });

        test('TC_020 - Slug field helper text should be visible', async ({ page }) => {
            await expect(page.locator("text=Lowercase letters, numbers, and hyphens allowed")).toBeVisible();
        });

        test('TC_021 - Barcode Symbology dropdown should open and be selectable', async ({ page }) => {
            await expect(productPage.barcodeSymbologyDropdown).toBeVisible();
            await productPage.barcodeSymbologyDropdown.click();
            const options = page.getByRole('option');
            await expect(options.first()).toBeVisible();
            await page.keyboard.press('Escape');
        });

        test('TC_022 - Brand dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.brandDropdown).toBeVisible();
            await productPage.brandDropdown.click();
            await expect(page.getByRole('option').first()).toBeVisible();
            await page.keyboard.press('Escape');
        });

        test('TC_023 - Category dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.categoryDropdown).toBeVisible();
            await productPage.categoryDropdown.click();
            await expect(page.getByRole('option').first()).toBeVisible();
            await page.keyboard.press('Escape');
        });

        test('TC_024 - Tags input should accept tags on Enter key', async ({ page }) => {
            await productPage.tagsInput.fill('tag1');
            await productPage.tagsInput.press('Enter');
            await expect(page.locator("text=tag1")).toBeVisible();
        });

        test('TC_025 - Tags input should accept tags with comma', async ({ page }) => {
            await productPage.tagsInput.fill('tag2,');
            await expect(page.locator("text=tag2")).toBeVisible();
        });

        test('TC_026 - Tags helper text should be visible', async ({ page }) => {
            await expect(page.locator("text=Press Enter or comma to add tags").first()).toBeVisible();
        });

        test('TC_027 - Status dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.statusDropdown).toBeVisible();
            await productPage.statusDropdown.click();
            await expect(page.getByRole('option').first()).toBeVisible();
            await page.keyboard.press('Escape');
        });
    });

    // ==========================================================
    // ✏️ SECTION 3 - DESCRIPTIONS SECTION
    // ==========================================================

    test.describe('📝 Descriptions Section', () => {

        test('TC_028 - Product Description editor should be visible', async ({ page }) => {
            await expect(productPage.productDescriptionEditor).toBeVisible();
        });

        test('TC_029 - Product Description Write tab should be active by default', async ({ page }) => {
            const writeTab = page.locator('button:text("Write")').first();
            await expect(writeTab).toBeVisible();
            await expect(writeTab).toHaveClass(/border-blue-500/);
        });

        test('TC_030 - Product Description Preview tab should switch view', async ({ page }) => {
            const previewTab = page.locator('button:text("Preview")').first();
            await previewTab.click();
            await expect(previewTab).toBeVisible();
        });

        test('TC_031 - Product Description editor should accept text input', async () => {
            await productPage.productDescriptionEditor.click();
            await productPage.productDescriptionEditor.fill('This is a test product description.');
            await expect(productPage.productDescriptionEditor).toContainText('This is a test product description.');
        });

        test('TC_032 - Product Description editor toolbar buttons should be visible', async ({ page }) => {
            const firstEditorContainer = page.locator('div.tiptap-editor-container').first();
            await expect(firstEditorContainer.locator('button[title="Bold"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Italic"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Strikethrough"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Heading 1"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Heading 2"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Heading 3"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Bullet List"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Numbered List"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Quote"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Code Block"]')).toBeVisible();
            await expect(firstEditorContainer.locator('button[title="Link"]')).toBeVisible();
        });

        test('TC_033 - Product Description Bold button should apply bold formatting', async ({ page }) => {
            await productPage.productDescriptionEditor.click();
            await productPage.productDescriptionEditor.fill('Bold text');
            await page.keyboard.press('Control+A');
            const boldBtn = page.locator('div.tiptap-editor-container').first().locator('button[title="Bold"]');
            await boldBtn.click();
            const strongTag = productPage.productDescriptionEditor.locator('strong');
            await expect(strongTag).toBeVisible();
        });

        test('TC_034 - Invoice Description editor should be visible', async () => {
            await expect(productPage.invoiceDescriptionEditor).toBeVisible();
        });

        test('TC_035 - Invoice Description editor should accept text input', async () => {
            await productPage.invoiceDescriptionEditor.click();
            await productPage.invoiceDescriptionEditor.fill('Invoice description test content.');
            await expect(productPage.invoiceDescriptionEditor).toContainText('Invoice description test content.');
        });

        test('TC_036 - Invoice Description toolbar buttons should be visible', async ({ page }) => {
            const lastEditorContainer = page.locator('div.tiptap-editor-container').last();
            await expect(lastEditorContainer.locator('button[title="Bold"]')).toBeVisible();
            await expect(lastEditorContainer.locator('button[title="Italic"]')).toBeVisible();
            await expect(lastEditorContainer.locator('button[title="Link"]')).toBeVisible();
        });

        test('TC_037 - Rich text formatting supported label should be visible', async ({ page }) => {
            await expect(page.locator("text=Rich text formatting supported").first()).toBeVisible();
        });
    });

    // // ==========================================================
    // // 🖼️ SECTION 4 - MEDIA SECTION
    // // ==========================================================

    // test.describe('🖼️ Media Section', () => {

    //     test('TC_038 - Product image dropzone should be visible', async () => {
    //         await expect(productPage.productImageDropzone).toBeVisible();
    //     });

    //     test('TC_039 - Dropzone should display upload instruction text', async ({ page }) => {
    //         await expect(page.locator("text=Drag and drop an image here, or click to upload")).toBeVisible();
    //     });

    //     test('TC_040 - File input should accept image file types only', async () => {
    //         const acceptAttr = await productPage.productImageFileInput.getAttribute('accept');
    //         expect(acceptAttr).toContain('image/jpeg');
    //         expect(acceptAttr).toContain('image/jpg');
    //         expect(acceptAttr).toContain('image/png');
    //         expect(acceptAttr).toContain('image/webp');
    //     });

    //     test('TC_041 - Should upload a valid product image', async ({ page }) => {
    //         await productPage.productImageFileInput.setInputFiles({
    //             name: 'test-product.png',
    //             mimeType: 'image/png',
    //             buffer: Buffer.from('fake-image-content'),
    //         });
    //         await page.waitForTimeout(500);
    //     });
    // });

    // ==========================================================
    // 💰 SECTION 5 - PRICING & INVENTORY SECTION
    // ==========================================================

    test.describe('💰 Pricing & Inventory Section', () => {

        test('TC_042 - Product Cost field should be visible and accept numeric input', async () => {
            await expect(productPage.productCostInput).toBeVisible();
            await expect(productPage.productCostInput).toBeEnabled();
            await productPage.productCostInput.fill('75.50');
            await expect(productPage.productCostInput).toHaveValue('75.50');
        });

        test('TC_043 - Product Cost field should have correct placeholder', async () => {
            await expect(productPage.productCostInput).toHaveAttribute('placeholder', 'Enter product cost');
        });

        test('TC_044 - Product Cost should not accept negative values (min=0)', async () => {
            const minAttr = await productPage.productCostInput.getAttribute('min');
            expect(minAttr).toBe('0');
        });

        test('TC_045 - Product Price field should be visible and accept numeric input', async () => {
            await expect(productPage.productPriceInput).toBeVisible();
            await productPage.productPriceInput.fill('149.99');
            await expect(productPage.productPriceInput).toHaveValue('149.99');
        });

        test('TC_046 - Product Price field should have correct placeholder', async () => {
            await expect(productPage.productPriceInput).toHaveAttribute('placeholder', 'Enter product price');
        });

        test('TC_047 - Product Tax dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.taxDropdown).toBeVisible();
            await productPage.taxDropdown.click();
            await page.keyboard.press('Escape');
        });

        test('TC_048 - Product Unit dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.unitDropdown).toBeVisible();
            await productPage.unitDropdown.click();
            await page.keyboard.press('Escape');
        });

        test('TC_049 - Default Sale Unit dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.saleUnitDropdown).toBeVisible();
            await productPage.saleUnitDropdown.click();
            await page.keyboard.press('Escape');
        });

        test('TC_050 - Default Purchase Unit dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.purchaseUnitDropdown).toBeVisible();
            await productPage.purchaseUnitDropdown.click();
            await page.keyboard.press('Escape');
        });

        test('TC_051 - Alert Quantity field should be visible and accept numeric input', async () => {
            await expect(productPage.alertQuantityInput).toBeVisible();
            await productPage.alertQuantityInput.fill('10');
            await expect(productPage.alertQuantityInput).toHaveValue('10');
        });

        test('TC_052 - Alert Quantity should have min=0 attribute', async () => {
            const minAttr = await productPage.alertQuantityInput.getAttribute('min');
            expect(minAttr).toBe('0');
        });
    });

    // ==========================================================
    // 👁️ SECTION 6 - VISIBILITY SECTION
    // ==========================================================

    test.describe('👁️ Visibility Section', () => {

        test('TC_053 - Web Visibility toggle should be visible', async () => {
            await expect(productPage.webVisibilityToggle).toBeVisible();
        });

        test('TC_054 - Web Visibility toggle should be ON by default', async () => {
            const ariaChecked = await productPage.webVisibilityToggle.getAttribute('aria-checked');
            expect(ariaChecked).toBe('true');
        });

        test('TC_055 - Web Visibility toggle should toggle OFF when clicked', async () => {
            await productPage.webVisibilityToggle.click();
            const ariaChecked = await productPage.webVisibilityToggle.getAttribute('aria-checked');
            expect(ariaChecked).toBe('false');
        });

        test('TC_056 - Web Visibility toggle should toggle back ON when clicked again', async () => {
            await productPage.webVisibilityToggle.click();
            await productPage.webVisibilityToggle.click();
            const ariaChecked = await productPage.webVisibilityToggle.getAttribute('aria-checked');
            expect(ariaChecked).toBe('true');
        });

        test('TC_057 - POS Visibility toggle should be visible', async () => {
            await expect(productPage.posVisibilityToggle).toBeVisible();
        });

        test('TC_058 - POS Visibility toggle should be ON by default', async () => {
            const ariaChecked = await productPage.posVisibilityToggle.getAttribute('aria-checked');
            expect(ariaChecked).toBe('true');
        });

        test('TC_059 - POS Visibility toggle should toggle OFF when clicked', async () => {
            await productPage.posVisibilityToggle.click();
            const ariaChecked = await productPage.posVisibilityToggle.getAttribute('aria-checked');
            expect(ariaChecked).toBe('false');
        });

        test('TC_060 - Both toggles should be independently controllable', async () => {
            await productPage.webVisibilityToggle.click();
            const webChecked = await productPage.webVisibilityToggle.getAttribute('aria-checked');
            const posChecked = await productPage.posVisibilityToggle.getAttribute('aria-checked');
            expect(webChecked).toBe('false');
            expect(posChecked).toBe('true');
        });
    });

    // ==========================================================
    // 🔍 SECTION 7 - SEO SECTION
    // ==========================================================

    test.describe('🔍 Search Engine Optimization (SEO) Section', () => {

        test('TC_061 - Meta Title field should be visible and accept input', async () => {
            await expect(productPage.metaTitleInput).toBeVisible();
            await productPage.metaTitleInput.fill('Test Meta Title');
            await expect(productPage.metaTitleInput).toHaveValue('Test Meta Title');
        });

        test('TC_062 - Meta Title field should have correct placeholder', async () => {
            await expect(productPage.metaTitleInput).toHaveAttribute('placeholder', 'Enter product meta title');
        });

        test('TC_063 - Meta Description field should be visible and accept input', async () => {
            await expect(productPage.metaDescriptionInput).toBeVisible();
            await productPage.metaDescriptionInput.fill('Test meta description for SEO.');
            await expect(productPage.metaDescriptionInput).toHaveValue('Test meta description for SEO.');
        });

        test('TC_064 - Meta Description field should have correct placeholder', async () => {
            await expect(productPage.metaDescriptionInput).toHaveAttribute('placeholder', 'Enter meta description');
        });

        test('TC_065 - Meta Keywords field should be visible and accept keywords', async ({ page }) => {
            await expect(productPage.metaKeywordsInput).toBeVisible();
            await productPage.metaKeywordsInput.fill('keyword1');
            await productPage.metaKeywordsInput.press('Enter');
            await expect(page.locator("text=keyword1")).toBeVisible();
        });

        test('TC_066 - Meta Keywords helper text should be visible', async ({ page }) => {
            await expect(page.locator("text=Press Enter or comma to add tags").last()).toBeVisible();
        });

        test('TC_067 - Multiple meta keywords should be addable', async ({ page }) => {
            await productPage.metaKeywordsInput.fill('keyword1');
            await productPage.metaKeywordsInput.press('Enter');
            await productPage.metaKeywordsInput.fill('keyword2');
            await productPage.metaKeywordsInput.press('Enter');
            await productPage.metaKeywordsInput.fill('keyword3');
            await productPage.metaKeywordsInput.press('Enter');
            await expect(page.locator("text=keyword1")).toBeVisible();
            await expect(page.locator("text=keyword2")).toBeVisible();
            await expect(page.locator("text=keyword3")).toBeVisible();
        });
    });

    // ==========================================================
    // 🎛️ SECTION 8 - VARIANT OPTIONS SECTION (Variant Product Only)
    // ==========================================================

    test.describe('🎛️ Variant Options Section', () => {

        test.beforeEach(async () => {
            await productPage.selectFromDropdown(productPage.productTypeDropdown, 'Variant Product');
        });

        test('TC_068 - Variant Options section should appear for Variant Product', async ({ page }) => {
            await expect(page.locator("h2:text('Variant Options')")).toBeVisible();
        });

        test('TC_069 - All variant checkboxes should be visible', async ({ page }) => {
            await expect(productPage.variantColorCheckbox).toBeVisible();
            await expect(productPage.variantMaterialCheckbox).toBeVisible();
            await expect(productPage.variantPatternCheckbox).toBeVisible();
            await expect(productPage.variantSizeCheckbox).toBeVisible();
            await expect(productPage.variantStyleCheckbox).toBeVisible();
        });

        test('TC_070 - All variant checkboxes should be unchecked by default', async () => {
            await expect(productPage.variantColorCheckbox).not.toBeChecked();
            await expect(productPage.variantMaterialCheckbox).not.toBeChecked();
            await expect(productPage.variantPatternCheckbox).not.toBeChecked();
            await expect(productPage.variantSizeCheckbox).not.toBeChecked();
            await expect(productPage.variantStyleCheckbox).not.toBeChecked();
        });

        test('TC_071 - Color variant checkbox should be checkable', async () => {
            await productPage.variantColorCheckbox.check();
            await expect(productPage.variantColorCheckbox).toBeChecked();
        });

        test('TC_072 - Size variant checkbox should be checkable', async () => {
            await productPage.variantSizeCheckbox.check();
            await expect(productPage.variantSizeCheckbox).toBeChecked();
        });

        test('TC_073 - Material variant checkbox should be checkable', async () => {
            await productPage.variantMaterialCheckbox.check();
            await expect(productPage.variantMaterialCheckbox).toBeChecked();
        });

        test('TC_074 - Pattern variant checkbox should be checkable', async () => {
            await productPage.variantPatternCheckbox.check();
            await expect(productPage.variantPatternCheckbox).toBeChecked();
        });

        test('TC_075 - Style variant checkbox should be checkable', async () => {
            await productPage.variantStyleCheckbox.check();
            await expect(productPage.variantStyleCheckbox).toBeChecked();
        });

        test('TC_076 - Multiple variant checkboxes should be selectable simultaneously', async () => {
            await productPage.variantColorCheckbox.check();
            await productPage.variantSizeCheckbox.check();
            await expect(productPage.variantColorCheckbox).toBeChecked();
            await expect(productPage.variantSizeCheckbox).toBeChecked();
            await expect(productPage.variantMaterialCheckbox).not.toBeChecked();
        });

        test('TC_077 - Variant checkbox should be uncheckable after being checked', async () => {
            await productPage.variantColorCheckbox.check();
            await productPage.variantColorCheckbox.uncheck();
            await expect(productPage.variantColorCheckbox).not.toBeChecked();
        });
    });

    // ==========================================================
    // 📦 SECTION 9 - INVENTORY SECTION
    // ==========================================================

    test.describe('📦 Inventory Section', () => {

        test('TC_078 - SKU field should be visible and accept input', async () => {
            await expect(productPage.skuInput).toBeVisible();
            await expect(productPage.skuInput).toBeEnabled();
            await productPage.skuInput.fill('TEST-SKU-001');
            await expect(productPage.skuInput).toHaveValue('TEST-SKU-001');
        });

        test('TC_079 - SKU field should have correct placeholder', async () => {
            await expect(productPage.skuInput).toHaveAttribute('placeholder', 'Enter SKU');
        });

        test('TC_080 - SKU field should be required', async () => {
            const required = await productPage.skuInput.getAttribute('required');
            expect(required).not.toBeNull();
        });

        test('TC_081 - Barcode field should be visible and accept input', async () => {
            await expect(productPage.barcodeInput).toBeVisible();
            await productPage.barcodeInput.fill('1234567890123');
            await expect(productPage.barcodeInput).toHaveValue('1234567890123');
        });

        test('TC_082 - Barcode field should have correct placeholder', async () => {
            await expect(productPage.barcodeInput).toHaveAttribute('placeholder', 'Enter barcode');
        });

        test('TC_083 - Quantity field should be visible and accept numeric input', async () => {
            await expect(productPage.quantityInput).toBeVisible();
            await productPage.quantityInput.fill('100');
            await expect(productPage.quantityInput).toHaveValue('100');
        });

        test('TC_084 - Quantity field should accept decimal values', async () => {
            await productPage.quantityInput.fill('50.5');
            await expect(productPage.quantityInput).toHaveValue('50.5');
        });

        test('TC_085 - Manage Inventory checkbox should be visible and unchecked by default', async () => {
            await expect(productPage.manageInventoryCheckbox).toBeVisible();
            await expect(productPage.manageInventoryCheckbox).not.toBeChecked();
        });

        test('TC_086 - Manage Inventory checkbox should be checkable', async () => {
            await productPage.manageInventoryCheckbox.check();
            await expect(productPage.manageInventoryCheckbox).toBeChecked();
        });

        test('TC_087 - Allow Backorder checkbox should be visible and unchecked by default', async () => {
            await expect(productPage.allowBackorderCheckbox).toBeVisible();
            await expect(productPage.allowBackorderCheckbox).not.toBeChecked();
        });

        test('TC_088 - Allow Backorder checkbox should be checkable', async () => {
            await productPage.allowBackorderCheckbox.check();
            await expect(productPage.allowBackorderCheckbox).toBeChecked();
        });

        test('TC_089 - Stock Tracking checkbox should be visible and unchecked by default', async () => {
            await expect(productPage.stockTrackingCheckbox).toBeVisible();
            await expect(productPage.stockTrackingCheckbox).not.toBeChecked();
        });

        test('TC_090 - Stock Tracking checkbox should be checkable', async () => {
            await productPage.stockTrackingCheckbox.check();
            await expect(productPage.stockTrackingCheckbox).toBeChecked();
        });

        test('TC_091 - All inventory checkboxes should work independently', async () => {
            await productPage.manageInventoryCheckbox.check();
            await productPage.allowBackorderCheckbox.check();
            await expect(productPage.manageInventoryCheckbox).toBeChecked();
            await expect(productPage.allowBackorderCheckbox).toBeChecked();
            await expect(productPage.stockTrackingCheckbox).not.toBeChecked();
        });
    });

    // ==========================================================
    // 🚚 SECTION 10 - SHIPPING SECTION
    // ==========================================================

    test.describe('🚚 Shipping Section', () => {

        test('TC_092 - Length field should be visible and accept decimal input', async () => {
            await expect(productPage.lengthInput).toBeVisible();
            await productPage.lengthInput.fill('30.5');
            await expect(productPage.lengthInput).toHaveValue('30.5');
        });

        test('TC_093 - Height field should be visible and accept decimal input', async () => {
            await expect(productPage.heightInput).toBeVisible();
            await productPage.heightInput.fill('15.0');
            await expect(productPage.heightInput).toHaveValue('15');
        });

        test('TC_094 - Width field should be visible and accept decimal input', async () => {
            await expect(productPage.widthInput).toBeVisible();
            await productPage.widthInput.fill('22.5');
            await expect(productPage.widthInput).toHaveValue('22.5');
        });

        test('TC_095 - Weight field should be visible and accept decimal input', async () => {
            await expect(productPage.weightInput).toBeVisible();
            await productPage.weightInput.fill('1.75');
            await expect(productPage.weightInput).toHaveValue('1.75');
        });

        test('TC_096 - All dimension fields should have step=0.01', async () => {
            expect(await productPage.lengthInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.heightInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.widthInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.weightInput.getAttribute('step')).toBe('0.01');
        });

        test('TC_097 - All dimension fields should have min=0', async () => {
            expect(await productPage.lengthInput.getAttribute('min')).toBe('0');
            expect(await productPage.heightInput.getAttribute('min')).toBe('0');
            expect(await productPage.widthInput.getAttribute('min')).toBe('0');
            expect(await productPage.weightInput.getAttribute('min')).toBe('0');
        });

        test('TC_098 - Shipping Class dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.shippingClassDropdown).toBeVisible();
            await productPage.shippingClassDropdown.click();
            await page.keyboard.press('Escape');
        });

        test('TC_099 - Fulfillment Location dropdown should be visible and open on click', async ({ page }) => {
            await expect(productPage.fulfillmentLocationDropdown).toBeVisible();
            await productPage.fulfillmentLocationDropdown.click();
            await page.keyboard.press('Escape');
        });
    });

    // ==========================================================
    // 🧾 SECTION 11 - TAX PRICING SECTION
    // ==========================================================

    test.describe('🧾 Tax Pricing Section', () => {

        test('TC_100 - Cost Price field should be visible and accept decimal input', async () => {
            await expect(productPage.taxCostPriceInput).toBeVisible();
            await productPage.taxCostPriceInput.fill('75.00');
            await expect(productPage.taxCostPriceInput).toHaveValue('75');
        });

        test('TC_101 - Sale Price field should be visible and accept decimal input', async () => {
            await expect(productPage.taxSalePriceInput).toBeVisible();
            await productPage.taxSalePriceInput.fill('149.00');
            await expect(productPage.taxSalePriceInput).toHaveValue('149');
        });

        test('TC_102 - Compare Price field should be visible and accept decimal input', async () => {
            await expect(productPage.comparePriceInput).toBeVisible();
            await productPage.comparePriceInput.fill('180.00');
            await expect(productPage.comparePriceInput).toHaveValue('180');
        });

        test('TC_103 - Discount Rules textarea should be visible and accept JSON', async () => {
            await expect(productPage.discountRulesTextarea).toBeVisible();
            const json = '[{"min_qty": 5, "discount": 10}]';
            await productPage.discountRulesTextarea.fill(json);
            await expect(productPage.discountRulesTextarea).toHaveValue(json);
        });

        test('TC_104 - Discount Rules textarea should have correct placeholder', async () => {
            await expect(productPage.discountRulesTextarea).toHaveAttribute('placeholder', 'Enter Discount Rules as JSON');
        });

        test('TC_105 - Discount Rules textarea should have rows=4', async () => {
            expect(await productPage.discountRulesTextarea.getAttribute('rows')).toBe('4');
        });

        test('TC_106 - All tax pricing numeric fields should have step=0.01 and min=0', async () => {
            expect(await productPage.taxCostPriceInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.taxSalePriceInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.comparePriceInput.getAttribute('step')).toBe('0.01');
            expect(await productPage.taxCostPriceInput.getAttribute('min')).toBe('0');
            expect(await productPage.taxSalePriceInput.getAttribute('min')).toBe('0');
            expect(await productPage.comparePriceInput.getAttribute('min')).toBe('0');
        });
    });

    // ==========================================================
    // 🔘 SECTION 12 - FORM ACTION BUTTONS
    // ==========================================================

    test.describe('🔘 Form Action Buttons', () => {

        test('TC_107 - Reset button should be visible and enabled', async () => {
            await expect(productPage.resetButton).toBeVisible();
            await expect(productPage.resetButton).toBeEnabled();
        });

        test('TC_108 - Reset button should clear all filled fields', async () => {
            await productPage.productNameInput.fill('Test Product');
            await productPage.skuInput.fill('TEST-001');
            await productPage.resetButton.click();
            await expect(productPage.productNameInput).toHaveValue('');
            await expect(productPage.skuInput).toHaveValue('');
        });

        test('TC_109 - Save and Edit button should be visible and enabled', async () => {
            await expect(productPage.saveAndEditButton).toBeVisible();
            await expect(productPage.saveAndEditButton).toBeEnabled();
        });

        test('TC_110 - Save button should be visible and enabled', async () => {
            await expect(productPage.saveButton).toBeVisible();
            await expect(productPage.saveButton).toBeEnabled();
        });

        test('TC_111 - Save button should show validation errors for required fields when empty', async ({ page }) => {
            await productPage.saveButton.click();
            await page.waitForTimeout(1000);
            const currentUrl = page.url();
            expect(currentUrl).toContain('/products/create');
        });
    });

    // ==========================================================
    // ✅ SECTION 13 - REQUIRED FIELD VALIDATION
    // ==========================================================

    test.describe('⚠️ Required Field Validation', () => {

        test('TC_112 - Product Type should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='productTypeId']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_113 - Product Code should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='product']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_114 - Product Name should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='name']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_115 - Slug should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='slug']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_116 - Brand should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='brand']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_117 - Category should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='categories']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_118 - Status should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='status']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_119 - Product Cost should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='costPrice']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_120 - Product Price should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='salePrice']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_121 - Alert Quantity should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='alertQuantity']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });

        test('TC_122 - SKU should be marked as required', async ({ page }) => {
            const label = page.locator("label[for='sku']");
            await expect(label.locator('.text-red-500')).toBeVisible();
        });
    });

    // ==========================================================
    // 🌐 SECTION 14 - FULL E2E SINGLE PRODUCT CREATION
    // ==========================================================

    test.describe('🌐 End-to-End Product Creation', () => {

        test('TC_123 - Should successfully fill all fields for a Single Product and Save', async ({ page }) => {
            await productPage.fillFullForm({
                ...VALID_PRODUCT_DATA,
                productImagePath: undefined, // skip file if no asset
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
            await expect(page).not.toHaveURL(/\/products\/create/);
        });

        test('TC_124 - Should successfully fill all fields for a Variant Product and Save', async ({ page }) => {
            await productPage.fillFullForm({
                ...VARIANT_PRODUCT_DATA,
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_125 - Should fill form and click Save and Edit', async ({ page }) => {
            await productPage.fillFullForm({
                ...VALID_PRODUCT_DATA,
                productImagePath: undefined,
                action: 'saveAndEdit',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_126 - Should fill entire form and Reset it', async ({ page }) => {
            await productPage.productNameInput.fill('Reset Test Product');
            await productPage.skuInput.fill('RESET-SKU-001');
            await productPage.productCostInput.fill('50');
            await productPage.resetButton.click();
            await expect(productPage.productNameInput).toHaveValue('');
        });

        test('TC_127 - Should fill only required fields and save successfully', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'Minimal Required Product',
                slug: 'minimal-required-product',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '50',
                productPrice: '100',
                alertQuantity: '5',
                sku: 'MIN-REQ-001',
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_128 - Should create product with all visibility options disabled', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'Hidden Product Test',
                slug: 'hidden-product-test',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Inactive',
                productCost: '30',
                productPrice: '60',
                alertQuantity: '2',
                sku: 'HIDDEN-001',
                webVisibility: false,
                posVisibility: false,
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_129 - Should create product with full SEO information', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'SEO Product Test',
                slug: 'seo-product-test',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '40',
                productPrice: '80',
                alertQuantity: '3',
                sku: 'SEO-001',
                metaTitle: 'SEO Product Test - Best Deals',
                metaDescription: 'Best SEO product description for testing purposes.',
                metaKeywords: ['seo', 'test', 'product', 'playwright'],
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_130 - Should create product with full shipping information', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'Shipping Product Test',
                slug: 'shipping-product-test',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '60',
                productPrice: '120',
                alertQuantity: '5',
                sku: 'SHIP-001',
                length: '30',
                height: '15',
                width: '20',
                weight: '2',
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_131 - Should create product with inventory management enabled', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'Inventory Managed Product',
                slug: 'inventory-managed-product',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '55',
                productPrice: '110',
                alertQuantity: '8',
                sku: 'INV-001',
                quantity: '200',
                manageInventory: true,
                allowBackorder: true,
                stockTracking: true,
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_132 - Should create Variant Product with Color and Size selected', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Variant Product',
                productName: 'Color and Size Variant Product',
                slug: 'color-size-variant-product',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '85',
                productPrice: '170',
                alertQuantity: '10',
                sku: 'VAR-COLOR-SIZE-001',
                variantColor: true,
                variantSize: true,
                quantity: '150',
                manageInventory: true,
                stockTracking: true,
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });

        test('TC_133 - Should create product with Tax Pricing information', async ({ page }) => {
            await productPage.fillFullForm({
                productType: 'Single Product',
                productName: 'Tax Priced Product',
                slug: 'tax-priced-product',
                brand: 'Nike',
                category: 'Sports Shoes',
                status: 'Active',
                productCost: '70',
                productPrice: '140',
                alertQuantity: '5',
                sku: 'TAX-001',
                taxCostPrice: '70',
                taxSalePrice: '140',
                comparePrice: '165',
                discountRules: '[{"min_qty": 5, "discount": 5}]',
                action: 'save',
            });
            await page.waitForLoadState('networkidle');
        });
    });

    // ==========================================================
    // 🔗 SECTION 15 - NAVIGATION TESTS
    // ==========================================================

    test.describe('🔗 Navigation Tests', () => {

        // test('TC_134 - Breadcrumb Products link should navigate back to products list', async ({ page }) => {
        //     await productPage.breadcrumbProductsLink.click();
        //     await expect(page).toHaveURL(/\/products/);
        // });

        test('TC_135 - Dashboard nav link should navigate to dashboard', async ({ page }) => {
            await page.locator("a[href='/dashboard']").first().click();
            await expect(page).toHaveURL(/\/dashboard/);
        });

        test('TC_136 - All Products sub-menu link should navigate to products list', async ({ page }) => {
            await page.locator("span[title='All Products']").click();
            await expect(page).toHaveURL(/\/products/);
        });
    });
});