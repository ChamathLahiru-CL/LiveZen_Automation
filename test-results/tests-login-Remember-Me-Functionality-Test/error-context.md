# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.js >> Remember Me Functionality Test
- Location: tests\login.spec.js:21:1

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#email')
Expected: "superadmin@shopbox.com"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('#email')
    4 × locator resolved to <input value="" id="email" type="text" name="email" placeholder="Enter username or email" class="w-full border rounded-md px-3 py-2 text-[13.5px] placeholder:text-[13.5px] ↵                  bg-white dark:bg-slate-700 text-black dark:text-white↵                  disabled:bg-slate-100 dark:disabled:bg-slate-600 disabled:border-slate-300 dark:disabled:border-slate-500 disabled:text-slate-500 dark:disabled:text-slate-400↵                  placeholder:text-slate-400 dark:placeholder:text-slate-500↵      …/>
      - unexpected value ""

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Welcome Back" [level=2] [ref=e6]
    - paragraph [ref=e7]: Sign in to continue to ShopBox.
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]: Username/Email ID
        - textbox "Username/Email ID" [ref=e11]:
          - /placeholder: Enter username or email
      - generic [ref=e12]:
        - generic [ref=e13]: Password
        - generic [ref=e14]:
          - textbox "Password" [ref=e15]:
            - /placeholder: Enter password
          - button "Toggle password visibility" [ref=e16] [cursor=pointer]:
            - img [ref=e17]
      - generic [ref=e19]:
        - generic [ref=e21]:
          - checkbox "Remember me" [ref=e22]
          - generic [ref=e23] [cursor=pointer]: Remember me
        - link "Forgot password?" [ref=e25] [cursor=pointer]:
          - /url: /reset-password
      - button "Sign In" [ref=e26] [cursor=pointer]
    - paragraph [ref=e27]:
      - text: © 2026 Shopbox. Crafted with ❤ by
      - link "Livezen Technologies" [ref=e28] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e30]:
    - img "ShopBox Logo" [ref=e31]
    - img "Login Preview" [ref=e32]
    - heading "Complete Retail Business Management Solution With Everything In One Place" [level=3] [ref=e33]
    - paragraph [ref=e34]: Introducing ShopBox - an innovative eCommerce application and business management solution designed to enhance the performance of retail businesses. Elevate your business to the next level with ShopBox's full suite of tools, including inventory management, a dynamic Point of Sale (POS) system, and intuitive applications for users.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const LoginPage = require('../pages/LoginPage');
  3  | const SideBar = require('../pages/SideBar');
  4  | const TopBar = require('../pages/TopBar');
  5  | const userData = require('../testdata/user.json');
  6  | 
  7  | // Test Positive Login functionality
  8  | test('Valid Login Test', async ({ page }) => {
  9  |     const login = new LoginPage(page);
  10 |     const sidebar = new SideBar(page);
  11 |     const topbar = new TopBar(page);
  12 | 
  13 |     await login.goto();
  14 |     await login.login(userData.validUser.username, userData.validUser.password);
  15 |     await expect(page).toHaveURL(/dashboard/);    
  16 |     await topbar.clickProfileButton();
  17 |     await topbar.clickLogoutButton();  
  18 | 
  19 | });
  20 | 
  21 | test('Remember Me Functionality Test', async ({ page }) => {
  22 |     const login = new LoginPage(page);
  23 |     const topbar = new TopBar(page);
  24 |     await login.goto();
  25 |     await login.usernameInput.fill(userData.validUser.username);
  26 |     await login.passwordInput.fill(userData.validUser.password);
  27 |     await login.rememberMeCheckbox.check();
  28 |     await login.loginButton.click();
  29 |     await expect(page).toHaveURL(/dashboard/);
  30 |     await topbar.clickProfileButton();
  31 |     await topbar.clickLogoutButton();
  32 |     await expect(page).toHaveURL(/login/);
  33 |     await login.goto();
> 34 |     await expect(page.locator('#email')).toHaveValue(userData.validUser.username);
     |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  35 |     await expect(page.locator('#password')).toHaveValue(userData.validUser.password);
  36 | });
  37 | 
  38 | // Test Negative Login functionality
  39 | // Invalid username and password test
  40 | test('Invalid Login Test', async ({ page }) => {
  41 |     const login = new LoginPage(page);
  42 | 
  43 |     await login.goto();
  44 |     await login.login(userData.invalidUser.username, userData.invalidUser.password);
  45 |     await expect(page.locator('text=Invalid email or password')).toBeVisible();
  46 | 
  47 | });
  48 | 
  49 | // Empty credentials test
  50 | test('Empty Credentials Test', async ({ page }) => {
  51 |     const login = new LoginPage(page);
  52 | 
  53 |     await login.goto();
  54 |     await login.login(userData.emptyCredentials.username, userData.emptyCredentials.password);
  55 |     
  56 |     // Check if still on login page (not logged in)
  57 |     await expect(page.locator('text=Both username/email and password are required')).toBeVisible();
  58 | });
  59 | 
  60 | // Empty username test
  61 | test('Empty Username Test', async ({ page }) => {
  62 |     const login = new LoginPage(page);
  63 | 
  64 |     await login.goto();
  65 |     await login.login(userData.emptyUsername.username, userData.emptyUsername.password);
  66 |     
  67 |     await expect(page.locator('text=Username/email is required')).toBeVisible();
  68 | });
  69 | 
  70 | // Empty password test
  71 | test('Empty Password Test', async ({ page }) => {
  72 |     const login = new LoginPage(page);
  73 | 
  74 |     await login.goto();
  75 |     await login.login(userData.emptyPassword.username, userData.emptyPassword.password);
  76 |     
  77 |     await expect(page.locator('text=Password is required')).toBeVisible();
  78 | });
  79 | 
  80 | 
```