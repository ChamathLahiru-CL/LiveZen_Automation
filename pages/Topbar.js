class Topbar {
    constructor(page) {
        this.page = page;

        this.collapseButton = page.locator("//body/div[@id='root']/div[@class='bg-slate-100 dark:bg-zink-800 ']/div[@class='grid overflow-y-auto min-h-screen bg-slate-100 dark:bg-zink-800 ']/div[@class='flex flex-col flex-1 min-w-0 ']/div[1]/div[1]/button[1]");
        this.searchButton = page.locator("//input[@placeholder='Search']");
        this.languageChangeButton = page.locator("//div[@class='flex flex-col flex-1 min-w-0 ']//div[2]//div[1]//button[1]");
        this.notificationButton = page.locator(".lucide.lucide-bell.w-5.h-5");
        this.searchButton = page.locator("//div[2]//button[2]//*[name()='svg']");
        
        this.profileButton = page.locator("//div[contains(@class,'text-base font-medium')]");
        this.logoutButton = page.locator("(//span[normalize-space()='Sign Out'])[1]");

        this.settingButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)");
        this.closeSettingButton = page.locator("//button[normalize-space()='Close Settings']");
    }

    async clickCollapseButton() {
        await this.collapseButton.click();
    }
    async clickSearchButton() {
        await this.searchButton.click();
    }
    async clickLanguageChangeButton() {
        await this.languageChangeButton.click();
    }
    async clickNotificationButton() {
        await this.notificationButton.click();
    }
    async clickProfileButton() {
        await this.profileButton.click();
    }
    async clickSettingButton() {
        await this.settingButton.click();
    }
    async clickCloseSettingButton() {
        await this.closeSettingButton.click();
    }
    async clickLogoutButton() {
        await this.logoutButton.click();
    }

}

module.exports = Topbar;