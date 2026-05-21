import { Page, Locator, expect } from '@playwright/test';

export class ViewProductPage {
  readonly page: Page;

  // ── Action button and Edit options
  readonly searchInput:       Locator;
  readonly viewActionsButton: Locator;

  // Modal container
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly closeButton: Locator;
  readonly editButton: Locator;
  readonly subTitle: Locator;

  // Tabs
  readonly generalTab: Locator;
  readonly metaDataTab: Locator;
  readonly typeDataTab: Locator;

  // Product Image Section
  readonly productImage: Locator;
  readonly productImageName: Locator;

  // Product Information Fields
  readonly productIdLabel: Locator;
  readonly productIdValue: Locator;

  readonly productTypeLabel: Locator;
  readonly productTypeValue: Locator;

  readonly nameLabel: Locator;
  readonly nameValue: Locator;

  readonly secondaryNameLabel: Locator;
  readonly secondaryNameValue: Locator;

  readonly slugLabel: Locator;
  readonly slugValue: Locator;

  readonly barcodeSymbologyLabel: Locator;
  readonly barcodeSymbologyValue: Locator;

  readonly brandLabel: Locator;
  readonly brandValue: Locator;

  readonly categoryLabel: Locator;
  readonly categoryValue: Locator;

  readonly productTaxLabel: Locator;
  readonly productTaxValue: Locator;

  readonly productCostLabel: Locator;
  readonly productCostValue: Locator;

  readonly productPriceLabel: Locator;
  readonly productPriceValue: Locator;

  readonly productUnitLabel: Locator;
  readonly productUnitValue: Locator;

  readonly defaultSaleUnitLabel: Locator;
  readonly defaultSaleUnitValue: Locator;

  readonly defaultPurchaseUnitLabel: Locator;
  readonly defaultPurchaseUnitValue: Locator;

  readonly alertQuantityLabel: Locator;
  readonly alertQuantityValue: Locator;

  readonly statusLabel: Locator;
  readonly statusValue: Locator;

  readonly webVisibilityLabel: Locator;
  readonly webVisibilityValue: Locator;

  readonly posVisibilityLabel: Locator;
  readonly posVisibilityValue: Locator;

  readonly tagsLabel: Locator;
  readonly tagsValue: Locator;

  readonly productDescriptionInvoiceLabel: Locator;
  readonly productDescriptionInvoiceValue: Locator;

  readonly productDescriptionLabel: Locator;
  readonly productDescriptionValue: Locator;

  readonly createdDateLabel: Locator;
  readonly createdDateValue: Locator;

  readonly updatedDateLabel: Locator;
  readonly updatedDateValue: Locator;

  constructor(page: Page) {
    this.page = page;

    // Action button and Edit options
    this.searchInput = page.getByRole('textbox', { name: 'Search products...' });
    // The actions button contains an ellipsis SVG with class "lucide-ellipsis" and no text,
    // so locate the button by the contained SVG for a reliable selector.
    this.viewActionsButton = page.locator('button:has(svg.lucide-ellipsis)');

    // Modal container
    this.modal = page.locator('[role="dialog"]');
    this.modalTitle = this.modal.locator('h3', { hasText: 'Product Overview' });
    this.closeButton = this.modal.locator('button[aria-label="Close modal"]');
    this.editButton = this.modal.locator('button[title="Edit Product"]');
    this.subTitle = this.modal.locator('div.text-sm.text-gray-600', {
      hasText: 'Please review the details below.',
    });

    // Tabs
    this.generalTab = this.modal.locator('button', { hasText: 'General' });
    this.metaDataTab = this.modal.locator('button', { hasText: 'Meta Data' });
    this.typeDataTab = this.modal.locator('button', { hasText: 'Type Data' });

    // Product Image Section
    this.productImage = this.modal.locator('img[alt*="image"]');
    this.productImageName = this.modal.locator(
      'div.font-medium.text-gray-900.dark\\:text-gray-100.text-xl'
    );

    // Product Information Fields
    // Product ID
    this.productIdLabel = this.modal.locator('h4', { hasText: 'Product ID' });
    this.productIdValue = this.modal
      .locator('h4', { hasText: 'Product ID' })
      .locator('xpath=following-sibling::p[1]');

    // Product Type
    this.productTypeLabel = this.modal.locator('h4', { hasText: 'Product Type' });
    this.productTypeValue = this.modal
      .locator('h4', { hasText: 'Product Type' })
      .locator('xpath=following-sibling::p[1]');

    // Name
    this.nameLabel = this.modal.locator('h4', { hasText: 'Name' }).first();
    this.nameValue = this.modal
      .locator('h4', { hasText: 'Name' })
      .first()
      .locator('xpath=following-sibling::p[1]');

    // Secondary Name
    this.secondaryNameLabel = this.modal.locator('h4', { hasText: 'Secondary Name' });
    this.secondaryNameValue = this.modal
      .locator('h4', { hasText: 'Secondary Name' })
      .locator('xpath=following-sibling::p[1]');

    // Slug
    this.slugLabel = this.modal.locator('h4', { hasText: 'Slug' });
    this.slugValue = this.modal
      .locator('h4', { hasText: 'Slug' })
      .locator('xpath=following-sibling::p[1]');

    // Barcode Symbology
    this.barcodeSymbologyLabel = this.modal.locator('h4', { hasText: 'Barcode Symbology' });
    this.barcodeSymbologyValue = this.modal
      .locator('h4', { hasText: 'Barcode Symbology' })
      .locator('xpath=following-sibling::p[1]');

    // Brand
    this.brandLabel = this.modal.locator('h4', { hasText: 'Brand' });
    this.brandValue = this.modal
      .locator('h4', { hasText: 'Brand' })
      .locator('xpath=following-sibling::p[1]');

    // Category
    this.categoryLabel = this.modal.locator('h4', { hasText: 'Category' });
    this.categoryValue = this.modal
      .locator('h4', { hasText: 'Category' })
      .locator('xpath=following-sibling::p[1]');

    // Product Tax
    this.productTaxLabel = this.modal.locator('h4', { hasText: 'Product Tax' });
    this.productTaxValue = this.modal
      .locator('h4', { hasText: 'Product Tax' })
      .locator('xpath=following-sibling::p[1]');

    // Product Cost
    this.productCostLabel = this.modal.locator('h4', { hasText: 'Product Cost' });
    this.productCostValue = this.modal
      .locator('h4', { hasText: 'Product Cost' })
      .locator('xpath=following-sibling::p[1]');

    // Product Price
    this.productPriceLabel = this.modal.locator('h4', { hasText: 'Product Price' });
    this.productPriceValue = this.modal
      .locator('h4', { hasText: 'Product Price' })
      .locator('xpath=following-sibling::p[1]');

    // Product Unit
    this.productUnitLabel = this.modal.locator('h4', { hasText: 'Product Unit' });
    this.productUnitValue = this.modal
      .locator('h4', { hasText: 'Product Unit' })
      .locator('xpath=following-sibling::p[1]');

    // Default Sale Unit
    this.defaultSaleUnitLabel = this.modal.locator('h4', { hasText: 'Default Sale Unit' });
    this.defaultSaleUnitValue = this.modal
      .locator('h4', { hasText: 'Default Sale Unit' })
      .locator('xpath=following-sibling::p[1]');

    // Default Purchase Unit
    this.defaultPurchaseUnitLabel = this.modal.locator('h4', {
      hasText: 'Default Purchase Unit',
    });
    this.defaultPurchaseUnitValue = this.modal
      .locator('h4', { hasText: 'Default Purchase Unit' })
      .locator('xpath=following-sibling::p[1]');

    // Alert Quantity
    this.alertQuantityLabel = this.modal.locator('h4', { hasText: 'Alert Quantity' });
    this.alertQuantityValue = this.modal
      .locator('h4', { hasText: 'Alert Quantity' })
      .locator('xpath=following-sibling::p[1]');

    // Status
    this.statusLabel = this.modal.locator('h4', { hasText: 'Status' });
    this.statusValue = this.modal
      .locator('h4', { hasText: 'Status' })
      .locator('xpath=following-sibling::div[1]//span');

    // Web Visibility
    this.webVisibilityLabel = this.modal.locator('h4', { hasText: 'Web Visibility' });
    this.webVisibilityValue = this.modal
      .locator('h4', { hasText: 'Web Visibility' })
      .locator('xpath=following-sibling::p[1]');

    // POS Visibility
    this.posVisibilityLabel = this.modal.locator('h4', { hasText: 'POS Visibility' });
    this.posVisibilityValue = this.modal
      .locator('h4', { hasText: 'POS Visibility' })
      .locator('xpath=following-sibling::p[1]');

    // Tags
    this.tagsLabel = this.modal.locator('h4', { hasText: 'Tags' });
    this.tagsValue = this.modal
      .locator('h4', { hasText: 'Tags' })
      .locator('xpath=following-sibling::p[1]');

    // Product Description for Invoice
    this.productDescriptionInvoiceLabel = this.modal.locator('h4', {
      hasText: 'Product Description for Invoice',
    });
    this.productDescriptionInvoiceValue = this.modal
      .locator('h4', { hasText: 'Product Description for Invoice' })
      .locator('xpath=following-sibling::div[1]');

    // Product Description
    this.productDescriptionLabel = this.modal.locator('h4', {
      hasText: 'Product Description',
    }).last();
    this.productDescriptionValue = this.modal
      .locator('h4', { hasText: 'Product Description' })
      .last()
      .locator('xpath=following-sibling::div[1]');

    // Created Date
    this.createdDateLabel = this.modal.locator('h4', { hasText: 'Created Date' });
    this.createdDateValue = this.modal
      .locator('h4', { hasText: 'Created Date' })
      .locator('xpath=following-sibling::p[1]');

    // Updated Date
    this.updatedDateLabel = this.modal.locator('h4', { hasText: 'Updated Date' });
    this.updatedDateValue = this.modal
      .locator('h4', { hasText: 'Updated Date' })
      .locator('xpath=following-sibling::p[1]');
  }

  // ─── Actions ─────────────────────────────────────────────────────────────────
  async selectProductToView(productId: string): Promise<void> {
    await this.searchInput.fill(productId);
    await this.viewActionsButton.click();
    const productRow = this.page.locator('tr', { hasText: productId }).first();
    const rowActionBtn = productRow.locator('button:has(svg.lucide-ellipsis)').first();
    await rowActionBtn.click();

    const viewOption = this.page.getByRole('button', { name: 'View', exact: true });
    await viewOption.waitFor({ state: 'visible', timeout: 5000 });
    await viewOption.click();
  }

  /**
   * Wait for the Product Overview modal to be visible
   */
  async waitForModalToBeVisible(): Promise<void> {
    // await expect(this.modal).toBeVisible();
    await expect(this.modalTitle).toBeVisible();
  }

  /**
   * Close the modal using the X button
   */
  async closeModal(): Promise<void> {
    await this.closeButton.click();
    await expect(this.modal).toBeHidden();
  }

  /**
   * Click the Edit Product button inside the modal
   */
  async clickEditProduct(): Promise<void> {
    await this.editButton.click();
  }

  /**
   * Click the General tab
   */
  async clickGeneralTab(): Promise<void> {
    await this.generalTab.click();
  }

  /**
   * Click the Meta Data tab
   */
  async clickMetaDataTab(): Promise<void> {
    await this.metaDataTab.click();
  }

  /**
   * Click the Type Data tab
   */
  async clickTypeDataTab(): Promise<void> {
    await this.typeDataTab.click();
  }

  // ─── Assertions ───────────────────────────────────────────────────────────────

  /**
   * Assert the modal title is "Product Overview"
   */
  async assertModalTitle(): Promise<void> {
    await expect(this.modalTitle).toHaveText('Product Overview');
  }

  /**
   * Assert the modal subtitle text
   */
  async assertSubTitle(): Promise<void> {
    await expect(this.subTitle).toHaveText('Please review the details below.');
  }

  /**
   * Assert that the General tab is active (highlighted)
   */
  async assertGeneralTabIsActive(): Promise<void> {
    await expect(this.generalTab).toHaveClass(/bg-blue-500/);
  }

  /**
   * Assert Product ID value
   */
  async assertProductId(expectedId: string): Promise<void> {
    await expect(this.productIdValue).toHaveText(expectedId);
  }

  /**
   * Assert Product Type value
   */
  async assertProductType(expectedType: string): Promise<void> {
    await expect(this.productTypeValue).toHaveText(expectedType);
  }

  /**
   * Assert Product Name value
   */
  async assertProductName(expectedName: string): Promise<void> {
    await expect(this.nameValue).toHaveText(expectedName);
  }

  /**
   * Assert Secondary Name value
   */
  async assertSecondaryName(expectedName: string): Promise<void> {
    await expect(this.secondaryNameValue).toHaveText(expectedName);
  }

  /**
   * Assert Slug value
   */
  async assertSlug(expectedSlug: string): Promise<void> {
    await expect(this.slugValue).toHaveText(expectedSlug);
  }

  /**
   * Assert Barcode Symbology value
   */
  async assertBarcodeSymbology(expectedValue: string): Promise<void> {
    await expect(this.barcodeSymbologyValue).toHaveText(expectedValue);
  }

  /**
   * Assert Brand value
   */
  async assertBrand(expectedBrand: string): Promise<void> {
    await expect(this.brandValue).toHaveText(expectedBrand);
  }

  /**
   * Assert Category value
   */
  async assertCategory(expectedCategory: string): Promise<void> {
    await expect(this.categoryValue).toHaveText(expectedCategory);
  }

  /**
   * Assert Product Tax value
   */
  async assertProductTax(expectedTax: string): Promise<void> {
    await expect(this.productTaxValue).toHaveText(expectedTax);
  }

  /**
   * Assert Product Cost value
   */
  async assertProductCost(expectedCost: string): Promise<void> {
    await expect(this.productCostValue).toContainText(expectedCost);
  }

  /**
   * Assert Product Price value
   */
  async assertProductPrice(expectedPrice: string): Promise<void> {
    await expect(this.productPriceValue).toContainText(expectedPrice);
  }

  /**
   * Assert Product Unit value
   */
  async assertProductUnit(expectedUnit: string): Promise<void> {
    await expect(this.productUnitValue).toHaveText(expectedUnit);
  }

  /**
   * Assert Default Sale Unit value
   */
  async assertDefaultSaleUnit(expectedUnit: string): Promise<void> {
    await expect(this.defaultSaleUnitValue).toHaveText(expectedUnit);
  }

  /**
   * Assert Default Purchase Unit value
   */
  async assertDefaultPurchaseUnit(expectedUnit: string): Promise<void> {
    await expect(this.defaultPurchaseUnitValue).toHaveText(expectedUnit);
  }

  /**
   * Assert Alert Quantity value
   */
  async assertAlertQuantity(expectedQty: string): Promise<void> {
    await expect(this.alertQuantityValue).toHaveText(expectedQty);
  }

  /**
   * Assert Status value (e.g., "Active", "Inactive")
   */
  async assertStatus(expectedStatus: string): Promise<void> {
    await expect(this.statusValue).toHaveText(expectedStatus);
  }

  /**
   * Assert Web Visibility value
   */
  async assertWebVisibility(expectedValue: string): Promise<void> {
    await expect(this.webVisibilityValue).toHaveText(expectedValue);
  }

  /**
   * Assert POS Visibility value
   */
  async assertPosVisibility(expectedValue: string): Promise<void> {
    await expect(this.posVisibilityValue).toHaveText(expectedValue);
  }

  /**
   * Assert Tags value
   */
  async assertTags(expectedTags: string): Promise<void> {
    await expect(this.tagsValue).toHaveText(expectedTags);
  }

  /**
   * Assert Product Description for Invoice
   */
  async assertProductDescriptionInvoice(expectedText: string): Promise<void> {
    await expect(this.productDescriptionInvoiceValue).toContainText(expectedText);
  }

  /**
   * Assert Product Description
   */
  async assertProductDescription(expectedText: string): Promise<void> {
    await expect(this.productDescriptionValue).toContainText(expectedText);
  }

  /**
   * Assert Created Date value
   */
  async assertCreatedDate(expectedDate: string): Promise<void> {
    await expect(this.createdDateValue).toHaveText(expectedDate);
  }

  /**
   * Assert Updated Date value
   */
  async assertUpdatedDate(expectedDate: string): Promise<void> {
    await expect(this.updatedDateValue).toHaveText(expectedDate);
  }

  /**
   * Assert product image is visible
   */
  async assertProductImageIsVisible(): Promise<void> {
    await expect(this.productImage).toBeVisible();
  }

  /**
   * Assert product image name below the image
   */
  async assertProductImageName(expectedName: string): Promise<void> {
    await expect(this.productImageName).toHaveText(expectedName);
  }

  /**
   * Assert all general product details at once
   */
  async assertGeneralProductDetails(details: {
    productId?: string;
    productType?: string;
    name?: string;
    secondaryName?: string;
    slug?: string;
    barcodeSymbology?: string;
    brand?: string;
    category?: string;
    productTax?: string;
    productCost?: string;
    productPrice?: string;
    productUnit?: string;
    defaultSaleUnit?: string;
    defaultPurchaseUnit?: string;
    alertQuantity?: string;
    status?: string;
    webVisibility?: string;
    posVisibility?: string;
    tags?: string;
    productDescriptionInvoice?: string;
    productDescription?: string;
    createdDate?: string;
    updatedDate?: string;
  }): Promise<void> {
    if (details.productId) await this.assertProductId(details.productId);
    if (details.productType) await this.assertProductType(details.productType);
    if (details.name) await this.assertProductName(details.name);
    if (details.secondaryName) await this.assertSecondaryName(details.secondaryName);
    if (details.slug) await this.assertSlug(details.slug);
    if (details.barcodeSymbology) await this.assertBarcodeSymbology(details.barcodeSymbology);
    if (details.brand) await this.assertBrand(details.brand);
    if (details.category) await this.assertCategory(details.category);
    if (details.productTax) await this.assertProductTax(details.productTax);
    if (details.productCost) await this.assertProductCost(details.productCost);
    if (details.productPrice) await this.assertProductPrice(details.productPrice);
    if (details.productUnit) await this.assertProductUnit(details.productUnit);
    if (details.defaultSaleUnit) await this.assertDefaultSaleUnit(details.defaultSaleUnit);
    if (details.defaultPurchaseUnit)
      await this.assertDefaultPurchaseUnit(details.defaultPurchaseUnit);
    if (details.alertQuantity) await this.assertAlertQuantity(details.alertQuantity);
    if (details.status) await this.assertStatus(details.status);
    if (details.webVisibility) await this.assertWebVisibility(details.webVisibility);
    if (details.posVisibility) await this.assertPosVisibility(details.posVisibility);
    if (details.tags) await this.assertTags(details.tags);
    if (details.productDescriptionInvoice)
      await this.assertProductDescriptionInvoice(details.productDescriptionInvoice);
    if (details.productDescription)
      await this.assertProductDescription(details.productDescription);
    if (details.createdDate) await this.assertCreatedDate(details.createdDate);
    if (details.updatedDate) await this.assertUpdatedDate(details.updatedDate);
  }

  /**
   * Assert the edit and close buttons are visible in the modal header
   */
  async assertModalHeaderButtons(): Promise<void> {
    await expect(this.editButton).toBeVisible();
    await expect(this.closeButton).toBeVisible();
  }

  /**
   * Assert all three tabs are visible
   */
  async assertTabsAreVisible(): Promise<void> {
    await expect(this.generalTab).toBeVisible();
    await expect(this.metaDataTab).toBeVisible();
    await expect(this.typeDataTab).toBeVisible();
  }

  // ─── Get All Product Details ──────────────────────────────────────────────────

  /**
   * Reads every visible field from the Product Overview modal and returns
   * them as a plain object.
   *
   * Usage:
   *   const details = await viewProductPage.getAllProductDetails();
   *   console.log(details.productId);   // "PROD00162"
   *   console.log(details.status);      // "Active"
   *
   * Notes:
   *  - All values are returned as trimmed strings.
   *  - Fields that are empty or not rendered return an empty string "".
   *  - imageName is the text label displayed below the product image.
   *  - productDescriptionInvoice and productDescription are the inner text
   *    of the rendered HTML description blocks (prose content).
   */
  async getAllProductDetails(): Promise<{
    imageName:                   string;
    productId:                   string;
    productType:                 string;
    name:                        string;
    secondaryName:               string;
    slug:                        string;
    barcodeSymbology:            string;
    brand:                       string;
    category:                    string;
    productTax:                  string;
    productCost:                 string;
    productPrice:                string;
    productUnit:                 string;
    defaultSaleUnit:             string;
    defaultPurchaseUnit:         string;
    alertQuantity:               string;
    status:                      string;
    webVisibility:               string;
    posVisibility:               string;
    tags:                        string;
    productDescriptionInvoice:   string;
    productDescription:          string;
    createdDate:                 string;
    updatedDate:                 string;
  }> {
    // ── Ensure modal is visible before reading ──────────────────
    await this.waitForModalToBeVisible();

    // ── Helper: safely read text, returns "" if locator has no content ──
    const safeText = async (locator: Locator): Promise<string> => {
      try {
        const text = await locator.innerText({ timeout: 3000 });
        return text.trim();
      } catch {
        return '';
      }
    };

    // ── Read all fields in parallel for speed ──────────────────
    const [
      imageName,
      productId,
      productType,
      name,
      secondaryName,
      slug,
      barcodeSymbology,
      brand,
      category,
      productTax,
      productCost,
      productPrice,
      productUnit,
      defaultSaleUnit,
      defaultPurchaseUnit,
      alertQuantity,
      status,
      webVisibility,
      posVisibility,
      tags,
      productDescriptionInvoice,
      productDescription,
      createdDate,
      updatedDate,
    ] = await Promise.all([
      safeText(this.productImageName),
      safeText(this.productIdValue),
      safeText(this.productTypeValue),
      safeText(this.nameValue),
      safeText(this.secondaryNameValue),
      safeText(this.slugValue),
      safeText(this.barcodeSymbologyValue),
      safeText(this.brandValue),
      safeText(this.categoryValue),
      safeText(this.productTaxValue),
      safeText(this.productCostValue),
      safeText(this.productPriceValue),
      safeText(this.productUnitValue),
      safeText(this.defaultSaleUnitValue),
      safeText(this.defaultPurchaseUnitValue),
      safeText(this.alertQuantityValue),
      safeText(this.statusValue),
      safeText(this.webVisibilityValue),
      safeText(this.posVisibilityValue),
      safeText(this.tagsValue),
      safeText(this.productDescriptionInvoiceValue),
      safeText(this.productDescriptionValue),
      safeText(this.createdDateValue),
      safeText(this.updatedDateValue),
    ]);

    const details = {
      imageName,
      productId,
      productType,
      name,
      secondaryName,
      slug,
      barcodeSymbology,
      brand,
      category,
      productTax,
      productCost,
      productPrice,
      productUnit,
      defaultSaleUnit,
      defaultPurchaseUnit,
      alertQuantity,
      status,
      webVisibility,
      posVisibility,
      tags,
      productDescriptionInvoice,
      productDescription,
      createdDate,
      updatedDate,
    };

    // ── Log to console for easy debugging ──────────────────────
    console.log('\n══════════════════════════════════════════════════');
    console.log('📦 Product Overview — All Details');
    console.log('══════════════════════════════════════════════════');
    console.log(`  Image Name                  : ${details.imageName}`);
    console.log(`  Product ID                  : ${details.productId}`);
    console.log(`  Product Type                : ${details.productType}`);
    console.log(`  Name                        : ${details.name}`);
    console.log(`  Secondary Name              : ${details.secondaryName}`);
    console.log(`  Slug                        : ${details.slug}`);
    console.log(`  Barcode Symbology           : ${details.barcodeSymbology}`);
    console.log(`  Brand                       : ${details.brand}`);
    console.log(`  Category                    : ${details.category}`);
    console.log(`  Product Tax                 : ${details.productTax}`);
    console.log(`  Product Cost                : ${details.productCost}`);
    console.log(`  Product Price               : ${details.productPrice}`);
    console.log(`  Product Unit                : ${details.productUnit}`);
    console.log(`  Default Sale Unit           : ${details.defaultSaleUnit}`);
    console.log(`  Default Purchase Unit       : ${details.defaultPurchaseUnit}`);
    console.log(`  Alert Quantity              : ${details.alertQuantity}`);
    console.log(`  Status                      : ${details.status}`);
    console.log(`  Web Visibility              : ${details.webVisibility}`);
    console.log(`  POS Visibility              : ${details.posVisibility}`);
    console.log(`  Tags                        : ${details.tags}`);
    console.log(`  Description (Invoice)       : ${details.productDescriptionInvoice}`);
    console.log(`  Description                 : ${details.productDescription}`);
    console.log(`  Created Date                : ${details.createdDate}`);
    console.log(`  Updated Date                : ${details.updatedDate}`);
    console.log('══════════════════════════════════════════════════\n');

    return details;
  }
}