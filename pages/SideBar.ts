import type { Locator, Page } from '@playwright/test';

export default class SideBar {
    readonly page: Page;
    readonly dashboardLink: Locator;
    readonly SalesLink: Locator;
    readonly productsLink: Locator;
    readonly purchasesLink: Locator;
    readonly customerLink: Locator;
    readonly usersLink: Locator;
    readonly reportsLink: Locator;
    readonly settingLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dashboardLink = page.locator(".flex.items-center.justify-between.cursor-pointer.transition-all.duration-200[href='/dashboard']");
        this.SalesLink = page.locator("//body/div[@id='root']/div[@class='bg-slate-100 dark:bg-zink-800 ']/div[@class='grid overflow-y-auto min-h-screen bg-slate-100 dark:bg-zink-800 ']/div[@class='min-h-screen overflow-y-auto']/div[1]/nav[1]/div[1]/div[2]/div[1]");
        this.productsLink = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)");
        this.purchasesLink = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)");
        this.customerLink = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)");

        this.usersLink = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1)");
        this.reportsLink = page.locator("//a[contains(@href,'/reports')]");
        this.settingLink = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1)");
    }

    async clickDashboard() {
        await this.dashboardLink.click();
    }
    async clickSales() {
        await this.SalesLink.click();
    }
    async clickProducts() {
        await this.productsLink.click();
    }
    async clickPurchases() {
        await this.purchasesLink.click();
    }
    async clickCustomer() {
        await this.customerLink.click();
    }
    async clickUsers() {
        await this.usersLink.click();
    }
    async clickReports() {
        await this.reportsLink.click();
    }
    async clickSettings() {
        await this.settingLink.click();
    }

}