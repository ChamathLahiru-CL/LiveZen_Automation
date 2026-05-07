import type { Locator, Page } from '@playwright/test';

export default class QuotationsPage {
    readonly page: Page;
    readonly salesMenu: Locator;
    readonly quotationsSubMenu: Locator;
    readonly sentQuotationsTab: Locator;
    readonly completeQuotationsTab: Locator;
    readonly cancelQuotationsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.salesMenu = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
        this.quotationsSubMenu = page.locator("//body//div//nav//div//div//div//a[1]");
        this.sentQuotationsTab = page.locator("div[class='flex flex-col flex-1 min-w-0 '] div div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) button:nth-child(2)");
        this.completeQuotationsTab = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)");
        this.cancelQuotationsTab = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)");
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
}
