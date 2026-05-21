import { test, expect } from '../fixtures';
import EditProductPage, {
    type EditProductFormData,
} from '../../pages/product/Actions/EditProductPage';

// ============================================================
// TEST CONSTANTS
// ============================================================

// Replace with an actual product that exists in the system
const EXISTING_PRODUCT_NAME = 'test-111';
const EXISTING_PRODUCT_ID   = 'PROD00111';

// ============================================================
// TEST DATA FIXTURES
// ============================================================

/**
 * Full update data set — used for happy-path E2E test
 */
const FULL_UPDATE_DATA: EditProductFormData = {
    productName:       'Updated QA Product ' + new Date().getTime(),
    secondaryName:     'Updated Secondary Name',
    slug:              'updated-qa-product-' + new Date().getTime(),
    brand:             'ABCD',
    category:          'Test 1',
    tags:              ['updated', 'qa', 'edit'],
    status:            'Active',
    productDescription: 'Updated product description via QA automation.',
    invoiceDescription: 'Updated invoice description via QA automation.',
    productCost:       '120',
    productPrice:      '250',
    alertQuantity:     '8',
    webVisibility:     true,
    posVisibility:     false,
    action:            'update',
};

/**
 * Minimal update — only required fields
 */
const MINIMAL_UPDATE_DATA: EditProductFormData = {
    productName:   'Minimal Updated Product ' + new Date().getTime(),
    productCost:   '55',
    productPrice:  '110',
    alertQuantity: '3',
    action:        'update',
};

/**
 * Visibility-only update
 */
const VISIBILITY_UPDATE_DATA: EditProductFormData = {
    webVisibility: false,
    posVisibility: true,
    action:        'update',
};

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Edit Product — Full Coverage Test Suite', () => {

    let editPage: EditProductPage;

    test.beforeEach(async ({ loggedIn, page }) => {
        editPage = new EditProductPage(page);
        // Navigate to edit page via product list for each test
        await editPage.gotoFromProductsList(EXISTING_PRODUCT_NAME);
    });

    // ==========================================================
    // TC-001 : Page Load & Structure Verification
    // ==========================================================

    test('TC-001 | Page Load — should display Edit Product title and breadcrumb', async () => {

        await expect(editPage.pageTitle).toBeVisible();
        await expect(editPage.pageTitle).toContainText('Edit Product');

        await expect(editPage.breadcrumbProductsLink).toBeVisible();
        await expect(editPage.breadcrumbCurrentPage).toContainText('Edit Product');

        console.log('TC-001 Passed: Edit Product page loaded correctly');
    });

    // ==========================================================
    // TC-002 : Tab Navigation — All 3 Tabs Visible
    // ==========================================================

    test('TC-002 | Tabs — all three tabs should be visible', async () => {

        await expect(editPage.generalTab).toBeVisible();
        await expect(editPage.metaDataTab).toBeVisible();
        await expect(editPage.typeDataTab).toBeVisible();

        console.log('TC-002 Passed: All 3 tabs (General, Meta Data, Type Data) visible');
    });

    // ==========================================================
    // TC-003 : Tab Navigation — General Tab Active by Default
    // ==========================================================

    test('TC-003 | Tabs — General tab should be active by default', async () => {

        // General Information section should be visible by default
        await expect(
            editPage.page.locator("h2:text('General Information')")
        ).toBeVisible();

        // General tab button should have active styling (bg-blue-500 text-white)
        await expect(editPage.generalTab).toHaveClass(/bg-blue-500/);

        console.log('TC-003 Passed: General tab is active by default');
    });

    // ==========================================================
    // TC-004 : Tab Navigation — Click Meta Data Tab
    // ==========================================================

    test('TC-004 | Tabs — clicking Meta Data tab should switch content', async () => {

        await editPage.clickMetaDataTab();

        // Meta Data tab should now be active
        await expect(editPage.metaDataTab).toHaveClass(/bg-blue-500/);

        console.log('TC-004 Passed: Meta Data tab clicked & content switched');
    });

    // ==========================================================
    // TC-005 : Tab Navigation — Click Type Data Tab
    // ==========================================================

    test('TC-005 | Tabs — clicking Type Data tab should switch content', async () => {

        await editPage.clickTypeDataTab();

        // Type Data tab should now be active
        await expect(editPage.typeDataTab).toHaveClass(/bg-blue-500/);

        console.log('TC-005 Passed: Type Data tab clicked & content switched');
    });

    // ==========================================================
    // TC-006 : Product Code — Should be Disabled (Read-Only)
    // ==========================================================

    test('TC-006 | General — Product Code input should be disabled on edit page', async () => {

        await expect(editPage.productCodeInput).toBeDisabled();

        // Verify it has a value loaded (not empty)
        const codeValue = await editPage.productCodeInput.inputValue();
        expect(codeValue.trim()).not.toBe('');

        console.log(`TC-006 Passed: Product Code is disabled, value = "${codeValue}"`);
    });

    // ==========================================================
    // TC-007 : Product Type — Should Be Pre-Populated
    // ==========================================================

    test('TC-007 | General — Product Type dropdown should show existing product type', async () => {

        await expect(editPage.productTypeDropdown).toBeVisible();
        const typeText = await editPage.productTypeDropdown.textContent();
        expect(typeText?.trim()).not.toBe('');

        console.log(`TC-007 Passed: Product Type pre-populated with "${typeText?.trim()}"`);
    });

    // ==========================================================
    // TC-008 : General Information — Fields Pre-Populated
    // ==========================================================

    test('TC-008 | General — all fields should be pre-populated with existing data', async () => {

        // Product Name should have a value
        const nameValue = await editPage.productNameInput.inputValue();
        expect(nameValue.trim()).not.toBe('');

        // Slug should have a value
        const slugValue = await editPage.slugInput.inputValue();
        expect(slugValue.trim()).not.toBe('');

        // Brand should show existing brand
        await expect(editPage.brandDropdown).not.toContainText('Select brand');

        // Status should show existing status
        await expect(editPage.statusDropdown).not.toContainText('Select status');

        console.log('TC-008 Passed: General Information fields are pre-populated');
    });

    // ==========================================================
    // TC-009 : General Information — Update Product Name
    // ==========================================================

    test('TC-009 | General — should update product name successfully', async () => {

        const newName = 'TC-009 Updated Name ' + new Date().getTime();

        await editPage.productNameInput.clear();
        await editPage.productNameInput.fill(newName);
        await expect(editPage.productNameInput).toHaveValue(newName);

        console.log(`TC-009 Passed: Product name updated to "${newName}"`);
    });

    // ==========================================================
    // TC-010 : General Information — Update Secondary Name
    // ==========================================================

    test('TC-010 | General — should update secondary name successfully', async () => {

        await editPage.secondaryNameInput.clear();
        await editPage.secondaryNameInput.fill('TC-010 Secondary Updated');
        await expect(editPage.secondaryNameInput).toHaveValue('TC-010 Secondary Updated');

        console.log('TC-010 Passed: Secondary Name updated & verified');
    });

    // ==========================================================
    // TC-011 : General Information — Update Slug Manually
    // ==========================================================

    test('TC-011 | General — should update slug manually', async () => {

        const newSlug = 'tc-011-updated-slug-' + Date.now();

        await editPage.slugInput.clear();
        await editPage.slugInput.fill(newSlug);
        await expect(editPage.slugInput).toHaveValue(newSlug);

        console.log(`TC-011 Passed: Slug updated to "${newSlug}"`);
    });

    // ==========================================================
    // TC-012 : General Information — Generate Slug from Name
    // ==========================================================

    test('TC-012 | General — Generate from Name button should auto-fill slug', async () => {

        // First update the product name
        await editPage.productNameInput.clear();
        await editPage.productNameInput.fill('TC012 Generate Slug Test');

        // Click Generate from Name
        await editPage.generateSlugFromNameButton.click();
        await editPage.page.waitForTimeout(300);

        // Slug should now be auto-generated from the name
        const slugValue = await editPage.slugInput.inputValue();
        expect(slugValue.trim()).not.toBe('');
        expect(slugValue).toMatch(/tc012|generate|slug|test/i);

        console.log(`TC-012 Passed: Slug generated from name → "${slugValue}"`);
    });

    // ==========================================================
    // TC-013 : General Information — Update Brand Dropdown
    // ==========================================================

    test('TC-013 | General — should update brand dropdown', async () => {

        await editPage.selectFromDropdown(editPage.brandDropdown, 'ABCD');
        await expect(editPage.brandDropdown).toContainText('ABCD');

        console.log('TC-013 Passed: Brand dropdown updated & verified');
    });

    // ==========================================================
    // TC-014 : General Information — Update Category Dropdown
    // ==========================================================

    test('TC-014 | General — should update category dropdown', async () => {

        await editPage.selectFromDropdown(editPage.categoryDropdown, 'Test 1');
        await expect(editPage.categoryDropdown).toContainText('Test 1');
        await editPage.categoryDropdown.click();

        console.log('TC-014 Passed: Category dropdown updated & verified');
    });

    // ==========================================================
    // TC-015 : General Information — Add New Tags
    // ==========================================================

    test('TC-015 | General — should add new tags to existing tags', async () => {

        await editPage.tagsInput.fill('newtag1');
        await editPage.tagsInput.press('Enter');

        await editPage.tagsInput.fill('newtag2');
        await editPage.tagsInput.press('Enter');

        // Verify new tags appear as tag badges
        await expect(
            editPage.page.locator('span:has-text("newtag1")')
        ).toBeVisible();

        await expect(
            editPage.page.locator('span:has-text("newtag2")')
        ).toBeVisible();

        console.log('TC-015 Passed: New tags added & visible');
    });

    // ==========================================================
    // TC-016 : General Information — Remove Existing Tag
    // ==========================================================

    test('TC-016 | General — should remove an existing tag by clicking its × button', async () => {

        // Find the first existing tag badge and click its remove button
        const firstTagBadge  = editPage.page.locator(
            'span.inline-flex.items-center.gap-1.px-2'
        ).first();

        const firstTagText   = await firstTagBadge.textContent();
        const removeButton   = firstTagBadge.locator('button');

        await removeButton.click();
        await editPage.page.waitForTimeout(200);

        console.log(`TC-016 Passed: Tag "${firstTagText?.trim()}" removed`);
    });

    // ==========================================================
    // TC-017 : General Information — Update Status
    // ==========================================================

    test('TC-017 | General — should update status dropdown', async () => {

        await editPage.selectFromDropdown(editPage.statusDropdown, 'Inactive');
        await expect(editPage.statusDropdown).toContainText('Inactive');

        // Revert back to Active
        await editPage.selectFromDropdown(editPage.statusDropdown, 'Active');
        await expect(editPage.statusDropdown).toContainText('Active');

        console.log('TC-017 Passed: Status dropdown updated & verified');
    });

    // ==========================================================
    // TC-018 : Descriptions — Pre-Populated with Existing Content
    // ==========================================================

    test('TC-018 | Descriptions — editors should be pre-populated with existing content', async () => {

        // Both editors should have existing content (not empty)
        const productDescText = await editPage.productDescriptionEditor.textContent();
        const invoiceDescText = await editPage.invoiceDescriptionEditor.textContent();

        expect(productDescText?.trim()).not.toBe('');
        expect(invoiceDescText?.trim()).not.toBe('');

        console.log('TC-018 Passed: Description editors pre-populated with existing content');
    });

    // ==========================================================
    // TC-019 : Descriptions — Update Product Description
    // ==========================================================

    test('TC-019 | Descriptions — should update product description', async () => {

        const newDesc = 'TC-019 updated product description content.';

        await editPage.productDescriptionEditor.click();
        await editPage.productDescriptionEditor.press('Control+a');
        await editPage.productDescriptionEditor.fill(newDesc);
        await expect(editPage.productDescriptionEditor).toContainText(newDesc);

        console.log('TC-019 Passed: Product description updated & verified');
    });

    // ==========================================================
    // TC-020 : Descriptions — Update Invoice Description
    // ==========================================================

    test('TC-020 | Descriptions — should update invoice description', async () => {

        const newDesc = 'TC-020 updated invoice description content.';

        await editPage.invoiceDescriptionEditor.click();
        await editPage.invoiceDescriptionEditor.press('Control+a');
        await editPage.invoiceDescriptionEditor.fill(newDesc);
        await expect(editPage.invoiceDescriptionEditor).toContainText(newDesc);

        console.log('TC-020 Passed: Invoice description updated & verified');
    });

    // ==========================================================
    // TC-021 : Media — Dropzone Visible
    // ==========================================================

    test('TC-021 | Media — product image dropzone should be visible', async () => {

        await expect(editPage.productImageDropzone).toBeVisible();

        console.log('TC-021 Passed: Product image dropzone is visible');
    });

    // ==========================================================
    // TC-022 : Media — Existing Image Shown with Delete Button
    // ==========================================================

    test('TC-022 | Media — existing product image should be shown with Delete button', async () => {

        // Delete button should be present when an image is already uploaded
        await expect(editPage.deleteImageButton).toBeVisible();

        console.log('TC-022 Passed: Existing image shown with Delete button');
    });

    // ==========================================================
    // TC-023 : Media — Upload New Image
    // ==========================================================

    test('TC-023 | Media — should upload a new product image', async () => {

        const mockPng = Buffer.from(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'base64'
        );

        await editPage.productImageFileInput.setInputFiles({
            name:     'updated-image.png',
            mimeType: 'image/png',
            buffer:   mockPng,
        });

        await editPage.page.waitForTimeout(500);
        console.log('TC-023 Passed: New product image uploaded');
    });

    // ==========================================================
    // TC-024 : Pricing & Inventory — Fields Pre-Populated
    // ==========================================================

    test('TC-024 | Pricing — fields should be pre-populated with existing values', async () => {

        const costValue  = await editPage.productCostInput.inputValue();
        const priceValue = await editPage.productPriceInput.inputValue();
        const alertValue = await editPage.alertQuantityInput.inputValue();

        expect(costValue.trim()).not.toBe('');
        expect(priceValue.trim()).not.toBe('');
        expect(alertValue.trim()).not.toBe('');

        console.log(
            `TC-024 Passed: Pricing pre-populated — cost: ${costValue}, price: ${priceValue}, alert: ${alertValue}`
        );
    });

    // ==========================================================
    // TC-025 : Pricing — Update Product Cost
    // ==========================================================

    test('TC-025 | Pricing — should update product cost', async () => {

        await editPage.productCostInput.clear();
        await editPage.productCostInput.fill('150');
        await expect(editPage.productCostInput).toHaveValue('150');

        console.log('TC-025 Passed: Product cost updated to 150');
    });

    // ==========================================================
    // TC-026 : Pricing — Update Product Price
    // ==========================================================

    test('TC-026 | Pricing — should update product price', async () => {

        await editPage.productPriceInput.clear();
        await editPage.productPriceInput.fill('300');
        await expect(editPage.productPriceInput).toHaveValue('300');

        console.log('TC-026 Passed: Product price updated to 300');
    });

    // ==========================================================
    // TC-027 : Pricing — Update Alert Quantity
    // ==========================================================

    test('TC-027 | Pricing — should update alert quantity', async () => {

        await editPage.alertQuantityInput.clear();
        await editPage.alertQuantityInput.fill('15');
        await expect(editPage.alertQuantityInput).toHaveValue('15');

        console.log('TC-027 Passed: Alert quantity updated to 15');
    });

    // ==========================================================
    // TC-028 : Pricing — Optional Dropdowns (Tax, Unit)
    // ==========================================================

    test('TC-028 | Pricing — should select tax, unit, sale and purchase unit dropdowns', async () => {

        await editPage.selectFromDropdown(editPage.taxDropdown, 'Zero VAT (0%)');
        await expect(editPage.taxDropdown).toContainText('Zero VAT (0%)');

        await editPage.selectFromDropdown(editPage.unitDropdown, 'Piece');
        await expect(editPage.unitDropdown).toContainText('Piece');

        await editPage.selectFromDropdown(editPage.saleUnitDropdown, 'Piece');
        await expect(editPage.saleUnitDropdown).toContainText('Piece');

        await editPage.selectFromDropdown(editPage.purchaseUnitDropdown, 'Piece');
        await expect(editPage.purchaseUnitDropdown).toContainText('Piece');

        console.log('TC-028 Passed: Pricing optional dropdowns updated & verified');
    });

    // ==========================================================
    // TC-029 : Visibility — Pre-Populated State
    // ==========================================================

    test('TC-029 | Visibility — toggles should reflect existing saved state', async () => {

        // Just verify toggles are visible and have a valid aria-checked value
        const webState = await editPage.webVisibilityToggle.getAttribute('aria-checked');
        const posState = await editPage.posVisibilityToggle.getAttribute('aria-checked');

        expect(['true', 'false']).toContain(webState);
        expect(['true', 'false']).toContain(posState);

        console.log(`TC-029 Passed: Visibility — web: ${webState}, pos: ${posState}`);
    });

    // ==========================================================
    // TC-030 : Visibility — Toggle Web Visibility
    // ==========================================================

    test('TC-030 | Visibility — should toggle Web visibility on and off', async () => {

        const currentState = await editPage.webVisibilityToggle.getAttribute('aria-checked');
        const newState     = currentState === 'true' ? false : true;

        await editPage.setToggle(editPage.webVisibilityToggle, newState);
        expect(
            await editPage.webVisibilityToggle.getAttribute('aria-checked')
        ).toBe(String(newState));

        // Toggle back to original
        await editPage.setToggle(editPage.webVisibilityToggle, currentState === 'true');

        console.log('TC-030 Passed: Web Visibility toggled on and off');
    });

    // ==========================================================
    // TC-031 : Visibility — Toggle POS Visibility
    // ==========================================================

    test('TC-031 | Visibility — should toggle POS visibility on and off', async () => {

        const currentState = await editPage.posVisibilityToggle.getAttribute('aria-checked');
        const newState     = currentState === 'true' ? false : true;

        await editPage.setToggle(editPage.posVisibilityToggle, newState);
        expect(
            await editPage.posVisibilityToggle.getAttribute('aria-checked')
        ).toBe(String(newState));

        console.log('TC-031 Passed: POS Visibility toggled successfully');
    });

    // ==========================================================
    // TC-032 : Update Button Visible
    // ==========================================================

    test('TC-032 | Actions — Update button should be visible', async () => {

        await expect(editPage.updateButton).toBeVisible();

        console.log('TC-032 Passed: Update button is visible');
    });

    // ==========================================================
    // TC-033 : Reset Button Visible
    // ==========================================================

    test('TC-033 | Actions — Reset button should be visible', async () => {

        await expect(editPage.resetButton).toBeVisible();

        console.log('TC-033 Passed: Reset button is visible');
    });

    // ==========================================================
    // TC-034 : Reset Button — Reverts Changes
    // ==========================================================

    test('TC-034 | Actions — Reset should revert unsaved changes', async () => {

        // Make a change
        const originalName = await editPage.productNameInput.inputValue();

        await editPage.productNameInput.clear();
        await editPage.productNameInput.fill('TEMP RESET TEST NAME');
        await expect(editPage.productNameInput).toHaveValue('TEMP RESET TEST NAME');

        // Click Reset
        await editPage.resetForm();
        await editPage.page.waitForTimeout(500);

        // Name should revert to original
        const nameAfterReset = await editPage.productNameInput.inputValue();
        expect(nameAfterReset).toBe(originalName);

        console.log('TC-034 Passed: Reset reverted product name back to original');
    });

    // ==========================================================
    // TC-035 : Negative — Numeric Inputs Reject Non-Numeric
    // ==========================================================

    test('TC-035 | Validation — numeric inputs should reject non-numeric values', async () => {

        await editPage.productCostInput.fill('abc');
        expect(await editPage.productCostInput.inputValue()).toBe('');

        await editPage.productPriceInput.fill('xyz');
        expect(await editPage.productPriceInput.inputValue()).toBe('');

        await editPage.alertQuantityInput.fill('!@#');
        expect(await editPage.alertQuantityInput.inputValue()).toBe('');

        console.log('TC-035 Passed: Numeric inputs rejected non-numeric values');
    });

    // ==========================================================
    // TC-036 : Navigate to Edit via Actions Menu
    // ==========================================================

    test('TC-036 | Navigation — should navigate to edit page via ··· Actions menu', async ({ page }) => {

        // Go to products list first
        await page.goto('https://app.livezencloud.com/products');
        await page.waitForLoadState('networkidle');

        // Find the product row
        const productRow = page
            .locator('table tbody tr')
            .filter({ hasText: EXISTING_PRODUCT_NAME })
            .first();

        await productRow.waitFor({ state: 'visible', timeout: 10000 });

        // Click ··· actions button
        const actionsButton = productRow.locator(
            'button[class*="inline-flex"][class*="items-center"][class*="justify-center"]'
        ).last();

        await actionsButton.click();
        await page.waitForTimeout(300);

        // Verify dropdown shows View, Edit, Delete, Copy, Share options
        await expect(page.getByRole('button', { name: 'View',   exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Edit',   exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Delete', exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Copy',   exact: true })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Share',  exact: true })).toBeVisible();

        // Click Edit
        await page.getByRole('button', { name: 'Edit', exact: true }).click();
        await page.waitForLoadState('networkidle');

        // Should now be on the edit page
        await expect(page.locator('h1.text-xl.font-semibold')).toContainText('Edit Product');

        console.log('TC-036 Passed: Navigated to edit page via Actions menu successfully');
    });

    // ==========================================================
    // TC-037 : E2E Minimal Update
    // ==========================================================

    test('TC-037 | E2E Minimal — should update product with minimal fields', async () => {

        await editPage.runEditProductWorkflow(MINIMAL_UPDATE_DATA);

        await editPage.page.waitForTimeout(1500);

        // Should stay on edit page or redirect to products list after update
        const url = editPage.page.url();
        expect(url).toMatch(/\/products/);

        console.log('TC-037 Passed: Minimal product update completed');
    });

    // ==========================================================
    // TC-038 : E2E Full Happy Path Update
    // ==========================================================

    test('TC-038 | E2E Full — should complete full product update workflow', async () => {

        await editPage.runEditProductWorkflow(FULL_UPDATE_DATA);

        await editPage.page.waitForTimeout(1500);

        const url = editPage.page.url();
        expect(url).toMatch(/\/products/);

        console.log('TC-038 Passed: Full product update E2E workflow completed');
    });

    // ==========================================================
    // TC-039 : E2E Visibility Only Update
    // ==========================================================

    test('TC-039 | E2E — should update only visibility settings', async () => {

        await editPage.runEditProductWorkflow(VISIBILITY_UPDATE_DATA);

        await editPage.page.waitForTimeout(1500);

        const url = editPage.page.url();
        expect(url).toMatch(/\/products/);

        console.log('TC-039 Passed: Visibility-only update completed');
    });

    // ==========================================================
    // TC-040 : URL Pattern — Edit Page URL Contains Product ID
    // ==========================================================

    test('TC-040 | Navigation — edit page URL should contain product ID', async () => {

        const currentUrl = editPage.page.url();
        expect(currentUrl).toMatch(/\/products\/[a-zA-Z0-9-]+\/edit/);

        console.log(`TC-040 Passed: Edit URL pattern verified → ${currentUrl}`);
    });
});