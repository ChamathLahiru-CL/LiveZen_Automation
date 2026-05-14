# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\products\addVariantProductForm.spec.ts >> Add Product - E2E Workflow Tests Variant Products >> TC_04 | Single Product | Fill fields & Reset form
- Location: tests\products\addVariantProductForm.spec.ts:235:9

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input#name')
Expected: ""
Received: "Reset Test Product"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('input#name')
    9 × locator resolved to <input id="name" required="" type="text" name="name" value="Reset Test Product" placeholder="Enter product name" class="w-full border rounded-md px-3 py-2 text-[13.5px] placeholder:text-[13.5px] dark:bg-zink-600 dark:text-zink-100↵        disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500↵        disabled:text-slate-500 dark:disabled:text-zink-200↵        placeholder:text-slate-300 dark:placeholder:text-slate-500↵        focus:outline-none↵        …/>
      - unexpected value "Reset Test Product"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - heading "Shopbox" [level=1] [ref=e8]
    - navigation [ref=e9]:
      - generic [ref=e10]:
        - link "Dashboard" [ref=e12] [cursor=pointer]:
          - /url: /dashboard
          - generic [ref=e13]:
            - img [ref=e14]
            - generic "Dashboard" [ref=e19]
        - generic [ref=e21] [cursor=pointer]:
          - generic [ref=e22]:
            - img [ref=e23]
            - generic "Sales" [ref=e26]
          - img [ref=e28]
        - generic [ref=e30]:
          - generic [ref=e31] [cursor=pointer]:
            - generic [ref=e32]:
              - img [ref=e33]
              - generic "Products" [ref=e37]
            - img [ref=e39]
          - generic [ref=e41]:
            - link "All Products" [ref=e42] [cursor=pointer]:
              - /url: /products
              - generic [ref=e43]:
                - img [ref=e44]
                - generic "All Products" [ref=e46]
            - link "Add Product" [ref=e47] [cursor=pointer]:
              - /url: /products/create
              - generic [ref=e48]:
                - img [ref=e49]
                - generic "Add Product" [ref=e51]
            - link "License Management" [ref=e52] [cursor=pointer]:
              - /url: /digital-product-license-keys
              - generic [ref=e53]:
                - img [ref=e54]
                - generic "License Management" [ref=e56]
            - link "Categories" [ref=e57] [cursor=pointer]:
              - /url: /categories
              - generic [ref=e58]:
                - img [ref=e59]
                - generic "Categories" [ref=e61]
            - link "Brands" [ref=e62] [cursor=pointer]:
              - /url: /brands
              - generic [ref=e63]:
                - img [ref=e64]
                - generic "Brands" [ref=e66]
            - link "Stock Adjustments" [ref=e67] [cursor=pointer]:
              - /url: /stock-adjustments
              - generic [ref=e68]:
                - img [ref=e69]
                - generic "Stock Adjustments" [ref=e71]
        - generic [ref=e73] [cursor=pointer]:
          - generic [ref=e74]:
            - img [ref=e75]
            - generic "Purchases" [ref=e79]
          - img [ref=e81]
        - generic [ref=e84] [cursor=pointer]:
          - generic [ref=e85]:
            - img [ref=e86]
            - generic "Customers" [ref=e91]
          - img [ref=e93]
        - generic [ref=e96]: SYSTEM
        - generic [ref=e98] [cursor=pointer]:
          - generic [ref=e99]:
            - img [ref=e100]
            - generic "Users" [ref=e105]
          - img [ref=e107]
        - link "Reports" [ref=e110] [cursor=pointer]:
          - /url: /reports
          - generic [ref=e111]:
            - img [ref=e112]
            - generic "Reports" [ref=e114]
        - generic [ref=e116] [cursor=pointer]:
          - generic [ref=e117]:
            - img [ref=e118]
            - generic "Settings" [ref=e121]
          - img [ref=e123]
  - generic [ref=e125]:
    - generic [ref=e126]:
      - generic [ref=e127]:
        - button [ref=e128] [cursor=pointer]:
          - img [ref=e129]
        - generic [ref=e134]:
          - img [ref=e135]
          - searchbox "Search" [ref=e138]
      - generic [ref=e139]:
        - button "Language EN" [ref=e141] [cursor=pointer]:
          - img "Language" [ref=e142]
          - generic [ref=e143]: EN
        - button "93" [ref=e145] [cursor=pointer]:
          - img [ref=e146]
          - generic [ref=e149]: "93"
        - button [ref=e150] [cursor=pointer]:
          - img [ref=e151]
        - button [ref=e155] [cursor=pointer]:
          - img [ref=e157]
    - main [ref=e160]:
      - generic [ref=e161]:
        - generic [ref=e162]:
          - generic [ref=e163]:
            - heading "Add Product" [level=1] [ref=e164]
            - navigation "Breadcrumb" [ref=e166]:
              - list [ref=e167]:
                - listitem [ref=e168]:
                  - link "Products" [ref=e169] [cursor=pointer]:
                    - /url: /products
                - listitem [ref=e170]:
                  - img [ref=e171]
                - listitem [ref=e173]: Add Product
          - generic [ref=e175]: Please fill in the information below. * marked fields are required.
        - generic [ref=e177]:
          - generic [ref=e178]:
            - generic [ref=e179]:
              - heading "General Information" [level=2] [ref=e180]
              - generic [ref=e181]:
                - generic [ref=e182]:
                  - generic [ref=e183]: Product Type*
                  - generic [ref=e184]:
                    - button "Product Type*" [ref=e185] [cursor=pointer]:
                      - generic [ref=e186]: Single Product
                    - generic:
                      - img
                - generic [ref=e187]:
                  - generic [ref=e188]: Product Code*
                  - generic [ref=e189]:
                    - textbox "Product Code*" [ref=e190]:
                      - /placeholder: Auto-generated
                      - text: PROD00048
                    - button "Generate new code" [ref=e191] [cursor=pointer]:
                      - img [ref=e192]
              - generic [ref=e197]:
                - generic [ref=e198]:
                  - generic [ref=e199]: Product Name*
                  - textbox "Product Name*" [ref=e200]:
                    - /placeholder: Enter product name
                    - text: Reset Test Product
                - generic [ref=e201]:
                  - generic [ref=e202]: Secondary Name
                  - textbox "Secondary Name" [ref=e203]:
                    - /placeholder: Enter secondary name
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - generic [ref=e206]:
                    - generic [ref=e207]: Slug*
                    - button "Generate from Name" [ref=e208] [cursor=pointer]
                  - textbox "Slug*" [ref=e209]:
                    - /placeholder: Enter slug
                    - text: reset-test-product
                  - paragraph [ref=e210]: Lowercase letters, numbers, and hyphens allowed
                - generic [ref=e211]:
                  - generic [ref=e212]: Barcode Symbology
                  - generic [ref=e213]:
                    - button "Barcode Symbology" [ref=e214] [cursor=pointer]:
                      - generic [ref=e215]: Select barcode type
                    - generic:
                      - img
              - generic [ref=e216]:
                - generic [ref=e217]:
                  - generic [ref=e218]: Brand*
                  - generic [ref=e219]:
                    - button "Brand*" [ref=e220] [cursor=pointer]:
                      - generic [ref=e221]: Select brand
                    - generic:
                      - img
                  - generic [ref=e222]: BrandId is required
                - generic [ref=e223]:
                  - generic [ref=e224]: Category*
                  - generic [ref=e225]:
                    - button "Category*" [ref=e226] [cursor=pointer]:
                      - generic [ref=e227]: Select category
                    - generic:
                      - img
                  - generic [ref=e228]: CategoryIds is required
              - generic [ref=e229]:
                - generic [ref=e230]:
                  - generic [ref=e231]: Tags
                  - textbox "Tags" [ref=e233]:
                    - /placeholder: Enter tags
                  - generic [ref=e234]: Press Enter or comma to add tags
                - generic [ref=e235]:
                  - generic [ref=e236]: Status*
                  - generic [ref=e237]:
                    - button "Status*" [ref=e238] [cursor=pointer]:
                      - generic [ref=e239]: Select status
                    - generic:
                      - img
                  - generic [ref=e240]: Status Product is required
            - generic [ref=e241]:
              - heading "Descriptions" [level=2] [ref=e242]
              - generic [ref=e244]:
                - generic [ref=e245]: Product Description
                - generic [ref=e246]:
                  - generic [ref=e247]:
                    - button "Write" [ref=e248] [cursor=pointer]
                    - button "Preview" [ref=e249] [cursor=pointer]
                  - generic [ref=e250]:
                    - generic [ref=e251]:
                      - button "Bold" [ref=e252] [cursor=pointer]:
                        - img [ref=e253]
                      - button "Italic" [ref=e255] [cursor=pointer]:
                        - img [ref=e256]
                      - button "Strikethrough" [ref=e258] [cursor=pointer]:
                        - img [ref=e259]
                      - button "Heading 1" [ref=e263] [cursor=pointer]:
                        - img [ref=e264]
                      - button "Heading 2" [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button "Heading 3" [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                      - button "Bullet List" [ref=e274] [cursor=pointer]:
                        - img [ref=e275]
                      - button "Numbered List" [ref=e276] [cursor=pointer]:
                        - img [ref=e277]
                      - button "Quote" [ref=e281] [cursor=pointer]:
                        - img [ref=e282]
                      - button "Code Block" [ref=e285] [cursor=pointer]:
                        - img [ref=e286]
                      - button "Link" [ref=e290] [cursor=pointer]:
                        - img [ref=e291]
                    - textbox [ref=e295]:
                      - paragraph [ref=e296]: Enter product description
                  - generic [ref=e298]: Rich text formatting supported
              - generic [ref=e300]:
                - generic [ref=e301]: Product Description for Invoice
                - generic [ref=e302]:
                  - generic [ref=e303]:
                    - button "Write" [ref=e304] [cursor=pointer]
                    - button "Preview" [ref=e305] [cursor=pointer]
                  - generic [ref=e306]:
                    - generic [ref=e307]:
                      - button "Bold" [ref=e308] [cursor=pointer]:
                        - img [ref=e309]
                      - button "Italic" [ref=e311] [cursor=pointer]:
                        - img [ref=e312]
                      - button "Strikethrough" [ref=e314] [cursor=pointer]:
                        - img [ref=e315]
                      - button "Heading 1" [ref=e319] [cursor=pointer]:
                        - img [ref=e320]
                      - button "Heading 2" [ref=e322] [cursor=pointer]:
                        - img [ref=e323]
                      - button "Heading 3" [ref=e325] [cursor=pointer]:
                        - img [ref=e326]
                      - button "Bullet List" [ref=e330] [cursor=pointer]:
                        - img [ref=e331]
                      - button "Numbered List" [ref=e332] [cursor=pointer]:
                        - img [ref=e333]
                      - button "Quote" [ref=e337] [cursor=pointer]:
                        - img [ref=e338]
                      - button "Code Block" [ref=e341] [cursor=pointer]:
                        - img [ref=e342]
                      - button "Link" [ref=e346] [cursor=pointer]:
                        - img [ref=e347]
                    - textbox [ref=e351]:
                      - paragraph [ref=e352]: Enter product description for invoice
                  - generic [ref=e354]: Rich text formatting supported
            - generic [ref=e355]:
              - heading "Media" [level=2] [ref=e356]
              - generic [ref=e358]:
                - generic [ref=e359]: Product Image
                - generic [ref=e361]:
                  - generic [ref=e362] [cursor=pointer]:
                    - button "Choose File" [ref=e363]
                    - generic [ref=e364]:
                      - img "Upload Icon" [ref=e365]
                      - heading "Drag and drop an image here, or click to upload" [level=5] [ref=e366]
                  - list
            - generic [ref=e367]:
              - heading "Pricing & Inventory" [level=2] [ref=e368]
              - generic [ref=e369]:
                - generic [ref=e370]:
                  - generic [ref=e371]: Product Cost*
                  - spinbutton "Product Cost*" [ref=e372]: "50"
                - generic [ref=e373]:
                  - generic [ref=e374]: Product Price*
                  - spinbutton "Product Price*" [ref=e375]: "100"
                - generic [ref=e376]:
                  - generic [ref=e377]: Product Tax
                  - generic [ref=e378]:
                    - button "Product Tax" [ref=e379] [cursor=pointer]:
                      - generic [ref=e380]: Select tax
                    - generic:
                      - img
              - generic [ref=e381]:
                - generic [ref=e382]:
                  - generic [ref=e383]: Product Unit
                  - generic [ref=e384]:
                    - button "Product Unit" [ref=e385] [cursor=pointer]:
                      - generic [ref=e386]: Select unit
                    - generic:
                      - img
                - generic [ref=e387]:
                  - generic [ref=e388]: Default Sale Unit
                  - generic [ref=e389]:
                    - button "Default Sale Unit" [ref=e390] [cursor=pointer]:
                      - generic [ref=e391]: Select sale unit
                    - generic:
                      - img
                - generic [ref=e392]:
                  - generic [ref=e393]: Default Purchase Unit
                  - generic [ref=e394]:
                    - button "Default Purchase Unit" [ref=e395] [cursor=pointer]:
                      - generic [ref=e396]: Select purchase unit
                    - generic:
                      - img
              - generic [ref=e398]:
                - generic [ref=e399]: Alert Quantity*
                - spinbutton "Alert Quantity*" [ref=e400]
                - generic [ref=e401]: AlertQuantity is invalid
            - generic [ref=e402]:
              - heading "Visibility" [level=2] [ref=e403]
              - generic [ref=e404]:
                - generic [ref=e406]:
                  - switch "Web Visibility" [checked] [ref=e407] [cursor=pointer]:
                    - generic [ref=e408]: Web Visibility
                  - generic [ref=e410]: Web Visibility
                - generic [ref=e412]:
                  - switch "POS Visibility" [checked] [ref=e413] [cursor=pointer]:
                    - generic [ref=e414]: POS Visibility
                  - generic [ref=e416]: POS Visibility
          - generic [ref=e417]:
            - heading "Search Engine Optimization (SEO)" [level=2] [ref=e418]
            - generic [ref=e419]:
              - generic [ref=e420]:
                - generic [ref=e421]: Product Meta Title
                - textbox "Product Meta Title" [ref=e422]:
                  - /placeholder: Enter product meta title
              - generic [ref=e423]:
                - generic [ref=e424]: Meta Description
                - textbox "Meta Description" [ref=e425]:
                  - /placeholder: Enter meta description
            - generic [ref=e427]:
              - generic [ref=e428]: Meta Keywords
              - textbox "Meta Keywords" [ref=e430]:
                - /placeholder: Enter meta keywords
              - generic [ref=e431]: Press Enter or comma to add tags
          - generic [ref=e433]:
            - generic [ref=e434]:
              - heading "Inventory" [level=2] [ref=e435]
              - generic [ref=e436]:
                - generic [ref=e437]:
                  - generic [ref=e438]:
                    - generic [ref=e439]: SKU*
                    - textbox "SKU*" [ref=e440]:
                      - /placeholder: Enter SKU
                      - text: RESET-001
                  - generic [ref=e441]:
                    - generic [ref=e442]: Barcode
                    - textbox "Barcode" [ref=e443]:
                      - /placeholder: Enter barcode
                  - generic [ref=e444]:
                    - generic [ref=e445]: Quantity
                    - spinbutton "Quantity" [ref=e446]
                - generic [ref=e447]:
                  - generic [ref=e449]:
                    - checkbox "Manage Inventory" [ref=e450] [cursor=pointer]
                    - generic [ref=e451] [cursor=pointer]: Manage Inventory
                  - generic [ref=e453]:
                    - checkbox "Allow Backorder" [ref=e454] [cursor=pointer]
                    - generic [ref=e455] [cursor=pointer]: Allow Backorder
                  - generic [ref=e457]:
                    - checkbox "Stock Tracking" [ref=e458] [cursor=pointer]
                    - generic [ref=e459] [cursor=pointer]: Stock Tracking
            - generic [ref=e460]:
              - heading "Shipping" [level=2] [ref=e461]
              - generic [ref=e462]:
                - generic [ref=e463]:
                  - generic [ref=e464]:
                    - generic [ref=e465]: Length
                    - spinbutton "Length" [ref=e466]
                  - generic [ref=e467]:
                    - generic [ref=e468]: Height
                    - spinbutton "Height" [ref=e469]
                  - generic [ref=e470]:
                    - generic [ref=e471]: Width
                    - spinbutton "Width" [ref=e472]
                - generic [ref=e473]:
                  - generic [ref=e474]:
                    - generic [ref=e475]: Weight
                    - spinbutton "Weight" [ref=e476]
                  - generic [ref=e477]:
                    - generic [ref=e478]: Shipping Class
                    - generic [ref=e479]:
                      - button "Shipping Class" [ref=e480] [cursor=pointer]:
                        - generic [ref=e481]: Select Shipping Class
                      - generic:
                        - img
                  - generic [ref=e482]:
                    - generic [ref=e483]: Fulfillment Location
                    - generic [ref=e484]:
                      - button "Fulfillment Location" [ref=e485] [cursor=pointer]:
                        - generic [ref=e486]: Select fulfillment location
                      - generic:
                        - img
            - generic [ref=e487]:
              - heading "Tax Pricing" [level=2] [ref=e488]
              - generic [ref=e489]:
                - generic [ref=e490]:
                  - generic [ref=e491]:
                    - generic [ref=e492]: Cost Price
                    - spinbutton "Cost Price" [ref=e493]
                  - generic [ref=e494]:
                    - generic [ref=e495]: Sale Price
                    - spinbutton "Sale Price" [ref=e496]
                  - generic [ref=e497]:
                    - generic [ref=e498]: Compare Price
                    - spinbutton "Compare Price" [ref=e499]
                - generic [ref=e501]:
                  - generic [ref=e502]: Discount Rules
                  - textbox "Discount Rules" [ref=e503]:
                    - /placeholder: Enter Discount Rules as JSON
        - generic [ref=e505]:
          - button "Reset" [ref=e506] [cursor=pointer]:
            - img [ref=e507]
            - generic [ref=e510]: Reset
          - button "Save and Edit" [ref=e511] [cursor=pointer]:
            - img [ref=e512]
            - generic [ref=e514]: Save and Edit
          - button "Save" [active] [ref=e515] [cursor=pointer]:
            - img [ref=e516]
            - generic [ref=e518]: Save
    - contentinfo [ref=e519]:
      - generic [ref=e520]:
        - generic [ref=e521]:
          - text: © 2026 Shopbox. All rights reserved.
          - generic [ref=e522]: "| v2.0.7"
        - link "Developed and enhanced by Livezen Technologies" [ref=e524] [cursor=pointer]:
          - /url: "#"
```

# Test source

```ts
  148 |         width:  '20',
  149 |         weight: '1.2',
  150 | 
  151 |         // Tax Pricing
  152 |         taxCostPrice: '90',
  153 |         taxSalePrice: '180',
  154 |         comparePrice: '210',
  155 | 
  156 |         //low stock alert
  157 |         lowStockAlert: '5',
  158 |         // Action
  159 |         action: 'save',
  160 |     };
  161 | };
  162 | 
  163 | const SAVE_AND_EDIT_PRODUCT: AddProductFormData = {
  164 |     productType:      'Single Product',
  165 |     generateAutoCode: true,
  166 |     productName:      `Save And Edit Product - ${Date.now()}`,
  167 |     slug:             `save-edit-product-${Date.now()}`,
  168 |     brand:            'ABCD',
  169 |     category:         'Test 1',
  170 |     status:           'Active',
  171 |     productCost:      '50',
  172 |     productPrice:     '100',
  173 |     alertQuantity:    '5',
  174 |     sku:              `SAE-${Date.now()}`,
  175 |     action:           'saveAndEdit',
  176 | };
  177 | 
  178 | // ============================================================
  179 | // TEST SUITE
  180 | // ============================================================
  181 | 
  182 | test.describe('Add Product - E2E Workflow Tests Variant Products', () => {
  183 | 
  184 |     let productPage: AddProductPage;
  185 | 
  186 |     test.beforeEach(async ({ loggedIn, page, allProductsPage }) => {
  187 |         productPage = new AddProductPage(page);
  188 |         await productPage.goto();
  189 |        
  190 |     });
  191 | 
  192 |     // ──────────────────────────────────────────────────────────
  193 |     // TEST 1: Full Single Product - All Sections
  194 |     // ──────────────────────────────────────────────────────────
  195 | 
  196 |     test('TC_01 | Single Product | Fill all sections & Save', async ({ page,allProductsPage }) => {
  197 | 
  198 |         await productPage.runAddProductWorkflow(SINGLE_PRODUCT);
  199 | 
  200 |         // Post-submit assertion
  201 |         // await expect(page).not.toHaveURL(/\/products\/create/);
  202 |         console.log('✅ TC_01 Passed: Single Product created and saved');
  203 |     });
  204 | 
  205 |     // ──────────────────────────────────────────────────────────
  206 |     // TEST 2: Full Variant Product - With Variant Options
  207 |     // ──────────────────────────────────────────────────────────
  208 | 
  209 |     test('TC_02 | Variant Product | Fill all sections with Variant Options & Save', async ({ page }) => {
  210 | 
  211 |         await productPage.runAddProductWorkflow(createVariantProduct());
  212 | 
  213 |         //await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
  214 |         await page.pause();
  215 |         console.log('✅ TC_02 Passed: Variant Product created and saved');
  216 |         await page.pause();
  217 |     });
  218 | 
  219 |     // ──────────────────────────────────────────────────────────
  220 |     // TEST 3: Save and Edit Action
  221 |     // ──────────────────────────────────────────────────────────
  222 | 
  223 |     test('TC_03 | Single Product | Fill required fields & Save and Edit', async ({ page }) => {
  224 | 
  225 |         await productPage.runAddProductWorkflow(SAVE_AND_EDIT_PRODUCT);
  226 | 
  227 |         await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
  228 |         console.log('✅ TC_03 Passed: Product saved and redirected to edit page');
  229 |     });
  230 | 
  231 |     // ──────────────────────────────────────────────────────────
  232 |     // TEST 4: Reset Form
  233 |     // ──────────────────────────────────────────────────────────
  234 | 
  235 |     test('TC_04 | Single Product | Fill fields & Reset form', async ({ page }) => {
  236 | 
  237 |         await productPage.runAddProductWorkflow({
  238 |             productType:  'Single Product',
  239 |             productName:  'Reset Test Product',
  240 |             slug:         'reset-test-product',
  241 |             productCost:  '50',
  242 |             productPrice: '100',
  243 |             sku:          'RESET-001',
  244 |             action:       'reset',
  245 |         });
  246 | 
  247 |         // After reset - fields should be empty
> 248 |         await expect(productPage.productNameInput).toHaveValue('');
      |                                                    ^ Error: expect(locator).toHaveValue(expected) failed
  249 |         await expect(productPage.skuInput).toHaveValue('');
  250 |         await expect(productPage.productCostInput).toHaveValue('');
  251 |         console.log('✅ TC_04 Passed: Form reset successfully');
  252 |     });
  253 | 
  254 |     // ──────────────────────────────────────────────────────────
  255 |     // TEST 5: Only Required Fields
  256 |     // ──────────────────────────────────────────────────────────
  257 | 
  258 |     test('TC_05 | Single Product | Fill only required fields & Save', async ({ page }) => {
  259 | 
  260 |         await productPage.runAddProductWorkflow({
  261 |             productType:   'Single Product',
  262 |             generateAutoCode: true,
  263 |             productName:   `Minimal Product - ${Date.now()}`,
  264 |             slug:          `minimal-product-${Date.now()}`,
  265 |             brand:         'ABCD',
  266 |             category:      'Test 1',
  267 |             status:        'Active',
  268 |             productCost:   '30',
  269 |             productPrice:  '60',
  270 |             alertQuantity: '3',
  271 |             sku:           `MIN-${Date.now()}`,
  272 |             action:        'save',
  273 |         });
  274 | 
  275 |         await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
  276 |         console.log('✅ TC_05 Passed: Minimal required fields product created');
  277 |     });
  278 | 
  279 |     // ──────────────────────────────────────────────────────────
  280 |     // TEST 6: Visibility OFF
  281 |     // ──────────────────────────────────────────────────────────
  282 | 
  283 |     test('TC_06 | Single Product | Both visibility OFF & Save', async ({ page }) => {
  284 | 
  285 |         await productPage.runAddProductWorkflow({
  286 |             productType:   'Single Product',
  287 |             generateAutoCode: true,
  288 |             productName:   `Hidden Product - ${Date.now()}`,
  289 |             slug:          `hidden-product-${Date.now()}`,
  290 |             brand:         'ABCD',
  291 |             category:      'Test 1',
  292 |             status:        'Inactive',
  293 |             productCost:   '40',
  294 |             productPrice:  '80',
  295 |             alertQuantity: '2',
  296 |             sku:           `HIDDEN-${Date.now()}`,
  297 |             webVisibility: false,
  298 |             posVisibility: false,
  299 |             action:        'save',
  300 |         });
  301 | 
  302 |         await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
  303 |         console.log('✅ TC_06 Passed: Hidden product with both visibility OFF created');
  304 |     });
  305 | 
  306 |     // ──────────────────────────────────────────────────────────
  307 |     // TEST 7: Full SEO Fields
  308 |     // ──────────────────────────────────────────────────────────
  309 | 
  310 |     test('TC_07 | Single Product | Fill all SEO fields & Save', async ({ page }) => {
  311 | 
  312 |         await productPage.runAddProductWorkflow({
  313 |             productType:     'Single Product',
  314 |             generateAutoCode: true,
  315 |             productName:     `SEO Product - ${Date.now()}`,
  316 |             slug:            `seo-product-${Date.now()}`,
  317 |             brand:           'ABCD',
  318 |             category:        'Test 1',
  319 |             status:          'Active',
  320 |             productCost:     '55',
  321 |             productPrice:    '110',
  322 |             alertQuantity:   '4',
  323 |             sku:             `SEO-${Date.now()}`,
  324 |             metaTitle:       'SEO Product - Best Deals Online',
  325 |             metaDescription: 'Buy this SEO optimized product at the best price.',
  326 |             metaKeywords:    ['seo', 'product', 'test', 'playwright', 'automation'],
  327 |             action:          'save',
  328 |         });
  329 | 
  330 |         await expect(page).not.toHaveURL("https://app.livezencloud.com/products/create");
  331 |         console.log('✅ TC_07 Passed: Product with full SEO information created');
  332 |     });
  333 | 
  334 |     // ──────────────────────────────────────────────────────────
  335 |     // TEST 8: Full Shipping + Tax Pricing
  336 |     // ──────────────────────────────────────────────────────────
  337 | 
  338 |     test('TC_08 | Single Product | Full Shipping & Tax Pricing & Save', async ({ page }) => {
  339 | 
  340 |         await productPage.runAddProductWorkflow({
  341 |             productType:     'Single Product',
  342 |             generateAutoCode: true,
  343 |             productName:     `Shipping Tax Product - ${Date.now()}`,
  344 |             slug:            `shipping-tax-product-${Date.now()}`,
  345 |             brand:           'ABCD',
  346 |             category:        'Test 1',
  347 |             status:          'Active',
  348 |             productCost:     '65',
```