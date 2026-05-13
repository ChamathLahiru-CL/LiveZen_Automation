# LiveZen_Automation

Playwright + TypeScript UI automation project for LiveZen.

## 1) Clone this repository

```bash
git clone https://github.com/ChamathLahiru-CL/LiveZen_Automation.git
cd LiveZen_Automation
```

## 2) Install dependencies

```bash
npm install
```

## 3) Initialize Playwright

This repo is already configured for Playwright.  
After install, initialize browser binaries with:

```bash
npx playwright install
```

If you need OS-level dependencies (Linux CI/containers), run:

```bash
npx playwright install-deps
```

## 4) Project folder structure

```text
LiveZen_Automation/
├── pages/
│   ├── LoginPage.ts                # Login page object (locators + actions)
│   ├── SideBar.ts                  # Sidebar page object helpers
│   ├── Topbar.ts                   # Topbar/profile/logout helpers
│   ├── Sales/
│   │   ├── QuotationsPage.ts       # Sales quotation page actions
│   │   └── SalesOrdersPage.ts      # Sales order page actions
│   └── product/
│       ├── AllProductsPage.ts      # Product listing page actions
│       └── AddProductFormPage.ts   # Add product form actions
├── tests/
│   ├── fixtures.ts                 # Shared Playwright fixtures and reusable setup
│   ├── login.spec.ts               # Login positive/negative tests
│   ├── dashboard.spec.ts           # Dashboard-related tests
│   ├── happyPath.spec.ts           # End-to-end happy path scenario(s)
│   ├── Sales/
│   │   ├── quotation.spec.ts       # Quotation flow tests
│   │   └── salesOrder.spec.ts      # Sales order flow tests
│   └── products/
│       └── addProduct.spec.ts      # Add product flow tests
├── testdata/
│   └── user.json                   # Test data (users, sales/product payloads)
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Node scripts and dependencies
├── playwright-report/              # Generated HTML report output
└── test-results/                   # Generated run artifacts (screenshots/videos/logs)
```

## 5) How to run test cases

Run all tests:

```bash
npx playwright test
```

Run one specific spec file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open last HTML report:

```bash
npx playwright show-report
```

## Notes

- `testdata/user.json` contains test credentials/data. Update values as needed for your environment.
- `playwright-report/` and `test-results/` are generated after test execution.
