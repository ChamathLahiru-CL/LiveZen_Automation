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
        this.productionSearchInput = page.locator("//input[@placeholder='Search product']");
        this.salesStatusDropdown = page.locator("//button[@id='salesStatus']");
        this.salesStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.paymentStatusDropdown = page.locator("//button[@id='paymentStatus']");
        this.paymentStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
        this.salesNoteInput = page.locator("//textarea[@id='saleNote']");
        this.staffNoteinput = page.locator("//textarea[@id='staffNote']");
        this.nextButton = page.locator("div[class='flex flex-col sm:flex-row gap-3 sm:order-2'] button[type='button']");
        this.resetButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");


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

    async addProduct(productName: string) {
        await this.productionSearchInput.fill(productName);
        const optionByRole = this.page.getByRole('option', { name: productName }).first();
        if (await optionByRole.isVisible()) {
            await optionByRole.click();
            return;
        }

        const optionByText = this.page.getByText(productName, { exact: true }).first();
        await optionByText.waitFor({ state: 'visible' });
        await optionByText.click();
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
        await this.billerInput.click();
        await this.billerSearchInput.fill(data.biller);
        await this.billerSearchInput.press('Enter');
        await this.customerInput.click();
        await this.customerSearchInput.fill(data.customer);
        await this.customerSearchInput.press('Enter');
        await this.warehouseInput.click();
        await this.warehouseSearchInput.fill(data.warehouse);
        await this.warehouseSearchInput.press('Enter');
        await this.orderTypeDropdown.click();
        await this.orderTypeInput.fill(data.orderType);
        await this.orderTypeInput.press('Enter');
        await this.customerTaxInput.click();
        await this.customerTaxSearchInput.fill(data.customerTax);
        await this.customerTaxSearchInput.press('Enter');
        await this.addProduct(data.product);
        await this.salesStatusDropdown.click();
        await this.salesStatusSearchInput.fill(data.salesStatus);
        await this.salesStatusSearchInput.press('Enter');
        await this.paymentStatusDropdown.click();
        await this.paymentStatusSearchInput.fill(data.paymentStatus);
        await this.paymentStatusSearchInput.press('Enter');
        await this.salesNoteInput.fill(data.salesNote);
        await this.staffNoteinput.fill(data.staffNote);
        await this.nextButton.click();
   }

}


    