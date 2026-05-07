# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.ts >> Remember Me Functionality Test
- Location: tests\login.spec.ts:19:5

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
    5 × locator resolved to <input value="" id="email" type="text" name="email" placeholder="Enter username or email" class="w-full border rounded-md px-3 py-2 text-[13.5px] placeholder:text-[13.5px] ↵                  bg-white dark:bg-slate-700 text-black dark:text-white↵                  disabled:bg-slate-100 dark:disabled:bg-slate-600 disabled:border-slate-300 dark:disabled:border-slate-500 disabled:text-slate-500 dark:disabled:text-slate-400↵                  placeholder:text-slate-400 dark:placeholder:text-slate-500↵      …/>
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
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginPage from '../pages/LoginPage';
  3  | import Topbar from '../pages/Topbar';
  4  | import userData from '../testdata/user.json';
  5  | 
  6  | // Test Positive Login functionality
  7  | test('Valid Login Test', async ({ page }) => {
  8  |     const login = new LoginPage(page);
  9  |     const topbar = new Topbar(page);
  10 | 
  11 |     await login.goto();
  12 |     await login.login(userData.validUser.username, userData.validUser.password);
  13 |     await expect(page).toHaveURL(/dashboard/);    
  14 |     await topbar.clickProfileButton();
  15 |     await topbar.clickLogoutButton();  
  16 | 
  17 | });
  18 | 
  19 | test('Remember Me Functionality Test', async ({ page }) => {
  20 |     const login = new LoginPage(page);
  21 |     const topbar = new Topbar(page);
  22 |     await login.goto();
  23 |     await login.usernameInput.fill(userData.validUser.username);
  24 |     await login.passwordInput.fill(userData.validUser.password);
  25 |     await login.rememberMeCheckbox.check();
  26 |     await login.loginButton.click();
  27 |     await expect(page).toHaveURL(/dashboard/);
  28 |     await topbar.clickProfileButton();
  29 |     await topbar.clickLogoutButton();
  30 |     await expect(page).toHaveURL(/login/);
  31 |     await login.goto();
> 32 |     await expect(page.locator('#email')).toHaveValue(userData.validUser.username);
     |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  33 |     await expect(page.locator('#password')).toHaveValue(userData.validUser.password);
  34 | });
  35 | 
  36 | test('Forgot Password Link Test', async ({ page }) => {
  37 |     const login = new LoginPage(page);
  38 |     await login.goto();
  39 |     await login.forgotPassword();
  40 |     await expect(page).toHaveURL(/reset-password/);
  41 | });
  42 | 
  43 | test('Password Mask Toggle Test', async ({ page }) => {
  44 |     const login = new LoginPage(page);
  45 |     await login.goto();
  46 |     await login.usernameInput.fill(userData.validUser.username);
  47 |     await login.passwordInput.fill(userData.validUser.password);
  48 |     await login.passwordMaskCheck();
  49 | });
  50 | 
  51 | 
  52 | 
  53 | 
  54 | // Test Negative Login functionality
  55 | // Invalid username and password test
  56 | test('Invalid Login Test', async ({ page }) => {
  57 |     const login = new LoginPage(page);
  58 | 
  59 |     await login.goto();
  60 |     await login.login(userData.invalidUser.username, userData.invalidUser.password);
  61 |     await expect(page.locator('text=Invalid email or password')).toBeVisible();
  62 | 
  63 | });
  64 | 
  65 | // Empty credentials test
  66 | test('Empty Credentials Test', async ({ page }) => {
  67 |     const login = new LoginPage(page);
  68 | 
  69 |     await login.goto();
  70 |     await login.login(userData.emptyCredentials.username, userData.emptyCredentials.password);
  71 |     
  72 |     // Check if still on login page (not logged in)
  73 |     await expect(page.locator('text=Both username/email and password are required')).toBeVisible();
  74 | });
  75 | 
  76 | // Empty username test
  77 | test('Empty Username Test', async ({ page }) => {
  78 |     const login = new LoginPage(page);
  79 | 
  80 |     await login.goto();
  81 |     await login.login(userData.emptyUsername.username, userData.emptyUsername.password);
  82 |     
  83 |     await expect(page.locator('text=Username/email is required')).toBeVisible();
  84 | });
  85 | 
  86 | // Empty password test
  87 | test('Empty Password Test', async ({ page }) => {
  88 |     const login = new LoginPage(page);
  89 | 
  90 |     await login.goto();
  91 |     await login.login(userData.emptyPassword.username, userData.emptyPassword.password);
  92 |     
  93 |     await expect(page.locator('text=Password is required')).toBeVisible();
  94 | });
  95 | 
  96 | 
```