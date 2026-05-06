class Topbar {
    constructor(page) {
        this.page = page;

        this.collapseButton = page.locator("//body/div[@id='root']/div[@class='bg-slate-100 dark:bg-zink-800 ']/div[@class='grid overflow-y-auto min-h-screen bg-slate-100 dark:bg-zink-800 ']/div[@class='flex flex-col flex-1 min-w-0 ']/div[1]/div[1]/button[1]");
        this.searchButton = page.locator("//input[@placeholder='Search']");

        this.languageChangeButton = page.locator("//div[@class='flex flex-col flex-1 min-w-0 ']//div[2]//div[1]//button[1]");
        // this.languageOptionEnglish = page.locator("//button[normalize-space()='English']");
        // this.languageOptionArabic = page.locator("//button[normalize-space()='Arabic']");
        // this.languageOptionFrench = page.locator("//button[normalize-space()='French']");
        // this.languageOptionSpanish = page.locator("//button[normalize-space()='Spanish']");
        // this.languageOptionGerman = page.locator("//button[normalize-space()='German']");
        // this.languageOptionSinhalese = page.locator("button[class='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-zink-700 w-full text-left bg-blue-50 dark:bg-blue-900']");
        // this.languageOptionHindi = page.locator("//button[normalize-space()='Hindi']");
        // this.languageOptionTamil = page.locator("//button[normalize-space()='Tamil']");


        this.notificationButton = page.locator(".lucide.lucide-bell.w-5.h-5");
        this.seeAllNotificationsButton = page.locator("//button[normalize-space()='See All']");

        this.searchButton = page.locator("//div[2]//button[2]//*[name()='svg']");
        
        this.profileButton = page.locator("//div[contains(@class,'text-base font-medium')]");
        this.logoutButton = page.locator("(//span[normalize-space()='Sign Out'])[1]");

        this.settingButton = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)");
        this.closeSettingButton = page.locator("//button[normalize-space()='Close Settings']");
        this.darkModeToggle = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)");
        this.directionToggle = page.locator("//div[contains(@class,'p-6 space-y-6')]//div[2]//div[1]//div[1]//button[1]");
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

    // language change functionality (not working because of the always elements locators are changing after change the language)
    async selectLanguage(language) {
        switch (language.toLowerCase()) {
            case 'english':
                await this.languageOptionEnglish.click();
                break;
            case 'arabic':
                await this.languageOptionArabic.click();
                break;
            case 'french':
                await this.languageOptionFrench.click();
                break;
            case 'spanish':
                await this.languageOptionSpanish.click();
                break;
            case 'german':
                await this.languageOptionGerman.click();
                break;
            case 'sinhalese':
                await this.languageOptionSinhalese.click();
                break;
            case 'hindi':
                await this.languageOptionHindi.click();
                break;
            case 'tamil':
                await this.languageOptionTamil.click();
                break;
        }
    }

    // Notification functionality
    async seeAllNotifications() {
        await this.seeAllNotificationsButton.click();
    }

    // Setting functionality

    async openSettings() {
        await this.settingButton.click();
        await this.darkModeToggle.click();
        await this.closeSettingButton.click();
        await this.settingButton.click();
        await this.darkModeToggle.click();
        await this.closeSettingButton.click();
    }

    async clickDirectionToggle() {
        await this.settingButton.click();
        await this.directionToggle.click();
        await this.closeSettingButton.click();

        await this.settingButton.click();
        await this.directionToggle.click();
        await this.closeSettingButton.click();
    }    
}

module.exports = Topbar;