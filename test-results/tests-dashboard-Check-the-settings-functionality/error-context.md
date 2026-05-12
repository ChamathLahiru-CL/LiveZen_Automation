# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\dashboard.spec.ts >> Check the settings functionality
- Location: tests\dashboard.spec.ts:46:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.livezencloud.com/", waiting until "load"

```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | 
  3  | export default class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly usernameInput: Locator;
  6  |     readonly passwordInput: Locator;
  7  |     readonly loginButton: Locator;
  8  |     readonly rememberMeCheckbox: Locator;
  9  |     readonly forgotPasswordLink: Locator;
  10 |     readonly passwordMaskToggle: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.usernameInput = page.locator('#email');
  15 |         this.passwordInput = page.locator('#password');
  16 |         this.loginButton = page.locator('//*[@id="root"]/div/div[1]/div/form/button');
  17 |         this.rememberMeCheckbox = page.locator("//input[@id='remember-me']");
  18 |         this.forgotPasswordLink = page.locator("//a[normalize-space()='Forgot password?']");
  19 |         this.passwordMaskToggle = page.locator("//button[@aria-label='Toggle password visibility']//*[name()='svg']");
  20 |     }
  21 | 
  22 |     async goto() {
> 23 |         await this.page.goto('https://app.livezencloud.com/');
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  24 |     }
  25 | 
  26 |     async login(username, password) {
  27 |         await this.usernameInput.fill(username);
  28 |         await this.passwordInput.fill(password);
  29 |         await this.loginButton.click();
  30 |     }
  31 | 
  32 |     async loginWithRememberMe(username, password) {
  33 |         await this.usernameInput.fill(username);
  34 |         await this.passwordInput.fill(password);
  35 |         await this.rememberMeCheckbox.check();
  36 |         await this.loginButton.click();
  37 |     }
  38 | 
  39 |     async forgotPassword() {
  40 |         await this.forgotPasswordLink.click();
  41 |     }
  42 |     
  43 |     async passwordMaskCheck() {
  44 |         await this.passwordMaskToggle.click();
  45 |     }
  46 | 
  47 | 
  48 | }
```