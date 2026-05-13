import type { Locator, Page } from '@playwright/test';

export default class SalesOrdersPage {
    readonly page: Page;
    readonly salesMenu: Locator;
    readonly salesOrdersSubMenu: Locator;
    readonly paidFilter: Locator;
    readonly partialPaidFilter: Locator;
    readonly unpaidFilter: Locator  ;
    readonly cancelledFilter: Locator;
    readonly searchInput: Locator;
    readonly newAddButton: Locator;
    readonly addSalesOrderButton: Locator;
    readonly settingsButton: Locator;
    readonly showDeletedButton: Locator;
    readonly showNonDeletedButton: Locator;
    readonly orderCodeIDDeleted: Locator;
    readonly orderCodeIDNonDeleted: Locator;
    readonly exportButton: Locator;
    readonly downloadPDFButton: Locator;
    readonly profileButton: Locator;
    readonly ordersButton: Locator;
    readonly orderInformation: Locator;
    readonly paymentInformation: Locator;
    readonly notesInformation: Locator; 
    readonly addReferenceInput: Locator;
    readonly billerInput: Locator;
    readonly billerSearchInput: Locator;
    readonly customerInput: Locator;
    readonly customerSearchInput: Locator;
    readonly warehouseInput: Locator;
    readonly warehouseSearchInput: Locator;
    readonly orderTypeDropdown: Locator;
    readonly orderTypeInput: Locator;
    readonly customerTaxInput: Locator;
    readonly customerTaxSearchInput: Locator;
    readonly productionSearchInput: Locator;
    readonly salesStatusDropdown: Locator;
    readonly salesStatusSearchInput: Locator;
    readonly paymentStatusDropdown: Locator;
    readonly paymentStatusSearchInput: Locator;
    readonly salesNoteInput: Locator;
    readonly staffNoteinput: Locator;
    readonly nextButton: Locator;
    readonly resetButton: Locator;
    readonly discountTypeDropdown: Locator;
    readonly discountTypeSearchInput: Locator;
    readonly totalAmountCell: Locator;
    readonly amount: Locator;
    readonly paymentmode: Locator;
    readonly paymentModeSearchInput: Locator;
    readonly transactionID: Locator;
    readonly notePad: Locator;
    readonly savebutton: Locator;



    constructor(page: Page) {
        this.page = page;

        // selectors
        this.salesMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
        this.salesOrdersSubMenu = page.locator("body div a:nth-child(2)");
        this.paidFilter = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
        this.partialPaidFilter = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
        this.unpaidFilter = page.locator("div[class='grid overflow-y-auto min-h-screen bg-slate-100 dark:bg-zink-800 '] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(3)");
        this.cancelledFilter = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(5)");
        this.searchInput = page.locator("//input[contains(@placeholder,'Search sales orders...')]");

        this.newAddButton = page.locator("button[class='w-full sm:w-auto appearance-none rounded-md bg-blue-500 pl-3.5 pr-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer text-left flex items-center']");
        this.addSalesOrderButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");
        this.addReferenceInput = page.locator("//input[@id='referenceNo']");
        this.billerInput = page.locator("//button[@id='biller']");
        this.billerSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.customerInput = page.locator("//button[@id='customer']");
        this.customerSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.warehouseInput = page.locator("//button[@id='warehouse']");
        this.warehouseSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.orderTypeDropdown = page.locator("//button[@id='orderType']");
        this.orderTypeInput = page.locator("//input[@placeholder='Search options...']");
        this.customerTaxInput = page.locator("//button[@id='customerTax']");
        this.customerTaxSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.discountTypeDropdown = page.locator("//button[@id='discountType']");
        this.discountTypeSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.totalAmountCell = page.locator("td.font-medium.text-right.text-gray-600.dark\\:text-gray-400.pl-4.pr-2.py-4.whitespace-nowrap");
        this.productionSearchInput = page.locator("//input[@placeholder='Search product']");
        this.salesStatusDropdown = page.locator("//button[@id='saleStatus']");
        this.salesStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.paymentStatusDropdown = page.locator("//button[@id='paymentStatus']");
        this.paymentStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.salesNoteInput = page.locator("//textarea[@id='saleNote']");
        this.staffNoteinput = page.locator("//textarea[@id='staffNote']");
        this.nextButton = page.locator("div[class='flex flex-col sm:flex-row gap-3 sm:order-2'] button[type='button']");
        this.resetButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");
        this.amount = page.locator("//input[@id='amount']");
        this.paymentmode = page.locator("//button[@id='paymentMode']");
        this.paymentModeSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.transactionID = page.locator("//input[@id='transactionId']");
        this.notePad = page.locator("//textarea[@id='note']");
        this.savebutton = page.locator("form[class='space-y-6'] div[class='flex flex-col sm:flex-row gap-3 sm:order-2'] button[type='button']");

        this.settingsButton = page.locator("//button[contains(@title,'Settings')]");
        this.showDeletedButton = page.locator("//button[normalize-space()='Show Deleted']");
        this.showNonDeletedButton = page.locator("//button[normalize-space()='Show Non Deleted']");
        //this order id can be changed based on the data in the system.
        this.orderCodeIDDeleted = page.locator("//span[normalize-space()='SO00005']");
        this.orderCodeIDNonDeleted = page.locator("//span[normalize-space()='SO00020']");
        this.exportButton = page.locator("//button[@title='Export sales-order-SO00020']");
        this.downloadPDFButton = page.locator("//button[normalize-space()='Download PDF']");
        this.profileButton = page.locator("//button[normalize-space()='Profile']");
        this.ordersButton = page.locator("//button[normalize-space()='Orders']");
        this.orderInformation = page.locator("div:nth-child(2) div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(1)");
        this.paymentInformation = page.locator("//div[contains(@class,'w-full')]//button[2]");
        this.notesInformation = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)");

    }

    async navigateToSalesOrders() {
        await this.salesMenu.click();
        await this.salesOrdersSubMenu.click();
    }

    async selectFromDropdown(dropdown: Locator, optionText: string) {
        await dropdown.click();

        const dropdownOption = this.page.getByText(optionText, { exact: true });
        const searchInput = this.page.locator("input[placeholder='Search options...']");

        if (await searchInput.isVisible()) {
            await searchInput.fill(optionText);
        }

        await dropdownOption.scrollIntoViewIfNeeded();
        await dropdownOption.click();
    }

    async addProduct(productName: string) {
        await this.productionSearchInput.fill(productName);
        await this.page.getByText(productName, { exact: true }).click();
    }

    async getTotalAmount() {
        const totalCell = this.totalAmountCell.first();
        await totalCell.waitFor({ state: 'visible' });
        await this.page.waitForFunction(
            (el) => !!el && !!el.textContent && el.textContent.trim().length > 0,
            await totalCell.elementHandle()
        );

        const totalText = (await totalCell.innerText()).trim();
        const cleaned = totalText.replace(/[^\d.,-]/g, '');
        const hasComma = cleaned.includes(',');
        const hasDot = cleaned.includes('.');
        let normalized = cleaned;

        if (hasComma && hasDot) {
            const lastComma = cleaned.lastIndexOf(',');
            const lastDot = cleaned.lastIndexOf('.');
            if (lastComma > lastDot) {
                normalized = cleaned.replace(/\./g, '').replace(',', '.');
            } else {
                normalized = cleaned.replace(/,/g, '');
            }
        } else if (hasComma) {
            normalized = cleaned.replace(',', '.');
        }

        const amount = Number(normalized);
        if (Number.isNaN(amount)) {
            throw new Error(`Unable to parse total amount from: "${totalText}"`);
        }

        return amount;
    }

    async createNewSalesOrder(data:{
        reference: string;
        biller: string;
        customer: string;
        warehouse: string;
        orderType: string;
        customerTax: string;
        discountType: string;        
        product: string;
        salesStatus: string;
        paymentStatus: string;
        salesNote: string;
        staffNote: string;  
    }){
        await this.newAddButton.click();
        await this.addSalesOrderButton.click();
        await this.addReferenceInput.fill(data.reference);
        await this.selectFromDropdown(this.billerInput, data.biller);
        await this.selectFromDropdown(this.customerInput, data.customer);
        await this.selectFromDropdown(this.warehouseInput, data.warehouse);
        await this.selectFromDropdown(this.orderTypeDropdown, data.orderType);
        await this.selectFromDropdown(this.customerTaxInput, data.customerTax);
        await this.selectFromDropdown(this.discountTypeDropdown, data.discountType);
        await this.addProduct(data.product);
        await this.selectFromDropdown(this.salesStatusDropdown, data.salesStatus);
        await this.selectFromDropdown(this.paymentStatusDropdown, data.paymentStatus);
        await this.salesNoteInput.fill(data.salesNote);
        await this.staffNoteinput.fill(data.staffNote);
        const totalAmount = await this.getTotalAmount();
        await this.nextButton.click();
        await this.amount.fill(totalAmount.toString());
        await this.selectFromDropdown(this.paymentmode, 'Cash');
        await this.transactionID.fill(`TXN${Date.now()}`);
        await this.notePad.fill('Payment received in cash.');
        await this.savebutton.click();
        return totalAmount;
   }

}


    