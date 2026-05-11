# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Sales\salesOrder.spec.ts >> Create a Sales Order
- Location: tests\Sales\salesOrder.spec.ts:58:5

# Error details

```
Error: locator.press: Target page, context or browser has been closed
```

# Test source

```ts
  39  |     readonly salesStatusSearchInput: Locator;
  40  |     readonly paymentStatusDropdown: Locator;
  41  |     readonly paymentStatusSearchInput: Locator;
  42  |     readonly salesNoteInput: Locator;
  43  |     readonly staffNoteinput: Locator;
  44  |     readonly nextButton: Locator;
  45  |     readonly resetButton: Locator;
  46  | 
  47  | 
  48  | 
  49  |     constructor(page: Page) {
  50  |         this.page = page;
  51  | 
  52  |         // selectors
  53  |         this.salesMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
  54  |         this.salesOrdersSubMenu = page.locator("body div a:nth-child(2)");
  55  |         this.paidFilter = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
  56  |         this.partialPaidFilter = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
  57  |         this.unpaidFilter = page.locator("div[class='grid overflow-y-auto min-h-screen bg-slate-100 dark:bg-zink-800 '] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(3)");
  58  |         this.cancelledFilter = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(5)");
  59  |         this.searchInput = page.locator("//input[contains(@placeholder,'Search sales orders...')]");
  60  | 
  61  |         this.newAddButton = page.locator("button[class='w-full sm:w-auto appearance-none rounded-md bg-blue-500 pl-3.5 pr-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer text-left flex items-center']");
  62  |         this.addSalesOrderButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");
  63  |         this.addReferenceInput = page.locator("//input[@id='referenceNo']");
  64  |         this.billerInput = page.locator("//button[@id='biller']");
  65  |         this.billerSearchInput = page.locator("//input[@placeholder='Search options...']");
  66  |         this.customerInput = page.locator("//button[@id='customer']");
  67  |         this.customerSearchInput = page.locator("//input[@placeholder='Search options...']");
  68  |         this.warehouseInput = page.locator("//button[@id='warehouse']");
  69  |         this.warehouseSearchInput = page.locator("//input[@placeholder='Search options...']");
  70  |         this.orderTypeDropdown = page.locator("//button[@id='orderType']");
  71  |         this.orderTypeInput = page.locator("//input[@placeholder='Search options...']");
  72  |         this.customerTaxInput = page.locator("//button[@id='customerTax']");
  73  |         this.customerTaxSearchInput = page.locator("//input[@placeholder='Search options...']");
  74  |         this.productionSearchInput = page.locator("//input[@placeholder='Search product']");
  75  |         this.salesStatusDropdown = page.locator("//button[@id='salesStatus']");
  76  |         this.salesStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
  77  |         this.paymentStatusDropdown = page.locator("//button[@id='paymentStatus']");
  78  |         this.paymentStatusSearchInput = page.locator("//input[@placeholder='Search options...']");
  79  |         this.salesNoteInput = page.locator("//textarea[@id='saleNote']");
  80  |         this.staffNoteinput = page.locator("//textarea[@id='staffNote']");
  81  |         this.nextButton = page.locator("div[class='flex flex-col sm:flex-row gap-3 sm:order-2'] button[type='button']");
  82  |         this.resetButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)");
  83  | 
  84  | 
  85  |         this.settingsButton = page.locator("//button[contains(@title,'Settings')]");
  86  |         this.showDeletedButton = page.locator("//button[normalize-space()='Show Deleted']");
  87  |         this.showNonDeletedButton = page.locator("//button[normalize-space()='Show Non Deleted']");
  88  |         //this order id can be changed based on the data in the system.
  89  |         this.orderCodeIDDeleted = page.locator("//span[normalize-space()='SO00005']");
  90  |         this.orderCodeIDNonDeleted = page.locator("//span[normalize-space()='SO00020']");
  91  |         this.exportButton = page.locator("//button[@title='Export sales-order-SO00020']");
  92  |         this.downloadPDFButton = page.locator("//button[normalize-space()='Download PDF']");
  93  |         this.profileButton = page.locator("//button[normalize-space()='Profile']");
  94  |         this.ordersButton = page.locator("//button[normalize-space()='Orders']");
  95  |         this.orderInformation = page.locator("div:nth-child(2) div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(1)");
  96  |         this.paymentInformation = page.locator("//div[contains(@class,'w-full')]//button[2]");
  97  |         this.notesInformation = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)");
  98  | 
  99  |     }
  100 | 
  101 |     async navigateToSalesOrders() {
  102 |         await this.salesMenu.click();
  103 |         await this.salesOrdersSubMenu.click();
  104 |     }
  105 | 
  106 |     async addProduct(productName: string) {
  107 |         await this.productionSearchInput.fill(productName);
  108 |         await this.page.getByText(productName, { exact: true }).click();
  109 |     }
  110 | 
  111 |     async createNewSalesOrder(data:{
  112 |         reference: string;
  113 |         biller: string;
  114 |         customer: string;
  115 |         warehouse: string;
  116 |         orderType: string;
  117 |         customerTax: string;
  118 |         discountType: string;        
  119 |         product: string;
  120 |         salesStatus: string;
  121 |         paymentStatus: string;
  122 |         salesNote: string;
  123 |         staffNote: string;  
  124 |     }){
  125 |         await this.newAddButton.click();
  126 |         await this.addSalesOrderButton.click();
  127 |         await this.addReferenceInput.fill(data.reference);
  128 |         await this.billerInput.click();
  129 |         await this.billerSearchInput.fill(data.biller);
  130 |         await this.billerSearchInput.press('Enter');
  131 |         await this.customerInput.click();
  132 |         await this.customerSearchInput.fill(data.customer);
  133 |         await this.customerSearchInput.press('Enter');
  134 |         await this.warehouseInput.click();
  135 |         await this.warehouseSearchInput.fill(data.warehouse);
  136 |         await this.warehouseSearchInput.press('Enter');
  137 |         await this.orderTypeDropdown.click();
  138 |         await this.orderTypeInput.fill(data.orderType);
> 139 |         await this.orderTypeInput.press('Enter');
      |                                   ^ Error: locator.press: Target page, context or browser has been closed
  140 |         await this.customerTaxInput.click();
  141 |         await this.customerTaxSearchInput.fill(data.customerTax);
  142 |         await this.customerTaxSearchInput.press('Enter');
  143 |         await this.addProduct(data.product);
  144 |         await this.salesStatusDropdown.click();
  145 |         await this.salesStatusSearchInput.fill(data.salesStatus);
  146 |         await this.salesStatusSearchInput.press('Enter');
  147 |         await this.paymentStatusDropdown.click();
  148 |         await this.paymentStatusSearchInput.fill(data.paymentStatus);
  149 |         await this.paymentStatusSearchInput.press('Enter');
  150 |         await this.salesNoteInput.fill(data.salesNote);
  151 |         await this.staffNoteinput.fill(data.staffNote);
  152 |         await this.nextButton.click();
  153 |    }
  154 | 
  155 | }
  156 | 
  157 | 
  158 |     
```