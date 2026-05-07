import type { Locator, Page } from '@playwright/test';

export default class QuotationsPage {
    readonly page: Page;
    readonly salesMenu: Locator;
    readonly quotationsSubMenu: Locator;
    readonly sentQuotationsTab: Locator;
    readonly completeQuotationsTab: Locator;
    readonly cancelQuotationsTab: Locator;
    readonly addNewQuotationButton: Locator;
    readonly addreferenceInput: Locator;
    readonly addbillerInput: Locator
    readonly searchBillerInput: Locator;
    readonly addcustomerInput: Locator;
    readonly addwarehouseInput: Locator
    readonly addcustomerTaxInput: Locator;
    readonly addDiscountTypeDropdown: Locator
    readonly addQuotationStatusDropdown: Locator;
    readonly addproductInput: Locator;
    readonly addquotationNoteInput: Locator;
    readonly addstaffNoteInput: Locator;
    readonly submitQuotation: Locator;
    


    constructor(page: Page) {
        this.page = page;

        // selectors
        this.salesMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
        this.quotationsSubMenu = page.locator("//body//div//nav//div//div//div//a[1]");
        this.sentQuotationsTab = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
        this.completeQuotationsTab = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)");
        this.cancelQuotationsTab = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)");
        
        this.addNewQuotationButton = page.locator("//button[normalize-space()='Add Quotation']");
        
        this.addreferenceInput = page.locator("//input[@id='referenceNo']");

        this.addbillerInput = page.locator("//button[@id='biller']");
        this.searchBillerInput = page.locator("//input[@placeholder='Search options...']");

        this.addcustomerInput = page.locator("//button[@id='customer']");
        this.addwarehouseInput = page.locator("//button[@id='warehouse']");
        this.addcustomerTaxInput = page.locator("//button[@id='customerTax']");
        this.addDiscountTypeDropdown = page.locator("//button[@id='discountType']");
        this.addQuotationStatusDropdown = page.locator("//button[@id='quotationStatus']");
        this.addproductInput = page.locator("//input[contains(@placeholder,'Search product')]");
        this.addquotationNoteInput = page.locator("//textarea[@id='quotationNote']");
        this.addstaffNoteInput = page.locator("//textarea[@id='staffNote']");
        this.submitQuotation = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(2)");
    }

    async navigateToQuotations() {
        await this.salesMenu.click();
        await this.quotationsSubMenu.click();
    }

    async checkSentQuotations() {
        await this.sentQuotationsTab.click();
    }

    async completeQuotation() {
        await this.completeQuotationsTab.click();
    }

    async cancelQuotation() {
        await this.cancelQuotationsTab.click();
    }

    // Generic Dropdown Handler (Reusable)
    async selectFromDropdown(dropdown: Locator, optionText: string) {
        await dropdown.click();

    // Wait for dropdown panel
        const dropdownOption = this.page.getByText(optionText, { exact: true });

    // If searchable input exists
        const searchInput = this.page.locator("input[placeholder='Search options...']");
        if (await searchInput.isVisible()) {
            await searchInput.fill(optionText);
        }

        await dropdownOption.scrollIntoViewIfNeeded();
        await dropdownOption.click();
    }

    // Product Selection
    async addProduct(productName: string) {
        await this.addproductInput.fill(productName);
        await this.page.getByText(productName, { exact: true }).click();
    }


    async addNewQuotation(data: {
        reference: string;
        biller: string;
        customer: string;
        warehouse: string;
        customerTax: string;
        discountType: string;
        quotationStatus: string;
        product: string;
        quotationNote: string;
        staffNote: string;
    }) {
        await this.addNewQuotationButton.click();

        await this.addreferenceInput.fill(data.reference);
        // await this.addbillerInput.click();
        await this.selectFromDropdown(this.addbillerInput, data.biller);
        await this.selectFromDropdown(this.addcustomerInput, data.customer);
        await this.selectFromDropdown(this.addwarehouseInput, data.warehouse);
        await this.selectFromDropdown(this.addcustomerTaxInput, data.customerTax);
        await this.selectFromDropdown(this.addDiscountTypeDropdown, data.discountType);
        await this.selectFromDropdown(this.addQuotationStatusDropdown, data.quotationStatus);
        await this.addProduct(data.product);

        await this.addquotationNoteInput.fill(data.quotationNote);
        await this.addstaffNoteInput.fill(data.staffNote);
        await this.submitQuotation.click();
    }
}
