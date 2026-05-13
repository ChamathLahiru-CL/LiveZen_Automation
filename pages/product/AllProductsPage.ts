import type { Locator, Page } from '@playwright/test';

export default class AllProductsPage {
    readonly page: Page;
    readonly productsMenu: Locator;
    readonly allProductsMenu: Locator;
    //add product buttons
    readonly addProductButtonMain: Locator;
    readonly addProductButton: Locator;
    readonly addSingleProductButton: Locator;
    readonly variantProductButton: Locator;
    readonly digitalProductButton: Locator;
    readonly serviceProductButton: Locator; 
    //form
    readonly productType: Locator;
    readonly productTypeSearchOption: Locator;
    readonly productName: Locator;
    readonly secondaryName: Locator;
    readonly slug: Locator;
    readonly barcode: Locator;
    readonly barcodeSearchOption: Locator;
    readonly brand: Locator;
    readonly brandSearchOption: Locator;
    readonly category: Locator;
    readonly categorySearchOption: Locator;
    readonly tags: Locator;
    readonly status: Locator;
    readonly statusSearchOption: Locator;
    readonly descriptionProduct: Locator;
    readonly descriptionInvoice: Locator;
    readonly media: Locator;
    readonly productCost: Locator;
    readonly productPrice: Locator;
    readonly productTax: Locator;
    readonly taxSearchOption: Locator;
    readonly productUnit: Locator;
    readonly unitSearchOption: Locator;
    readonly alertQuantity: Locator;
    readonly sku: Locator;

    readonly saveButton: Locator;   



    constructor(page: Page) {
        this.page = page;
        this.productsMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)");
        this.allProductsMenu = page.locator("body div nav div div div a:nth-child(1)");

        //add product buttons
        this.addProductButtonMain = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)");
        this.addProductButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");
        this.addSingleProductButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2)");
        this.variantProductButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(3)");
        this.digitalProductButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(4)");
        this.serviceProductButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(5)");

        //form
        this.productType = page.locator("//button[@id='productTypeId']");
        this.productTypeSearchOption = page.locator("");
        this.productName = page.locator("");
        this.secondaryName = page.locator("");
        this.slug = page.locator("");
        this.barcode = page.locator("");
        this.barcodeSearchOption = page.locator("");
        this.brand = page.locator("");
        this.brandSearchOption = page.locator("");
        this.category = page.locator("");
        this.categorySearchOption = page.locator("");
        this.tags = page.locator("");
        this.status = page.locator("");
        this.statusSearchOption = page.locator("");
        this.descriptionProduct = page.locator("");
        this.descriptionInvoice = page.locator("");
        this.media = page.locator("");
        this.productCost = page.locator("");
        this.productPrice = page.locator("");
        this.productTax = page.locator("");
        this.taxSearchOption = page.locator("");
        this.productUnit = page.locator("");
        this.unitSearchOption = page.locator("");
        this.alertQuantity = page.locator("");
        this.sku = page.locator("");

        this.saveButton = page.locator("");

    }

    async navigateToAllProducts() {
        await this.productsMenu.click();
        await this.allProductsMenu.click();
    }

    async clickAddProduct() {
        await this.addProductButtonMain.click();
        await this.addProductButton.click();
        // await this.addSingleProductButton.click();
    }
}