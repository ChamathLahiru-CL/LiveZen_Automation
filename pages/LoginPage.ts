import type { Locator, Page } from '@playwright/test';

export default class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly forgotPasswordLink: Locator;
    readonly passwordMaskToggle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('//*[@id="root"]/div/div[1]/div/form/button');
        this.rememberMeCheckbox = page.locator("//input[@id='remember-me']");
        this.forgotPasswordLink = page.locator("//a[normalize-space()='Forgot password?']");
        this.passwordMaskToggle = page.locator("//button[@aria-label='Toggle password visibility']//*[name()='svg']");
    }

    async goto() {
        await this.page.goto('https://app.livezencloud.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginWithRememberMe(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.rememberMeCheckbox.check();
        await this.loginButton.click();
    }

    async forgotPassword() {
        await this.forgotPasswordLink.click();
    }
    
    async passwordMaskCheck() {
        await this.passwordMaskToggle.click();
    }


}