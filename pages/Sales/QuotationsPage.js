class QuotationsPage {

    constructor(page) {
        this.page = page;
        this.salesMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
        this.quotationsSubMenu = page.locator("//body//div//nav//div//div//div//a[1]");

}