class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('//*[@id="root"]/div/div[1]/div/form/button');
    }

    async goto() {
        await this.page.goto('https://app.livezencloud.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}

module.exports = LoginPage;