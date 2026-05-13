# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\products\addVariantProductForm.spec.ts >> E2E - Create new product successfully
- Location: tests\products\addVariantProductForm.spec.ts:5:5

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Sports Shoes', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - button "64" [ref=e145] [cursor=pointer]:
            - img [ref=e146]
            - generic [ref=e149]: "64"
          - button [ref=e150] [cursor=pointer]:
            - img [ref=e151]
          - button "John Doe Super Admin" [ref=e155] [cursor=pointer]:
            - img [ref=e157]
            - generic [ref=e160]:
              - generic [ref=e161]: John Doe
              - generic [ref=e163]: Super Admin
            - img [ref=e164]
      - main [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]:
              - heading "Add Product" [level=1] [ref=e170]
              - navigation "Breadcrumb" [ref=e172]:
                - list [ref=e173]:
                  - listitem [ref=e174]:
                    - link "Products" [ref=e175] [cursor=pointer]:
                      - /url: /products
                  - listitem [ref=e176]:
                    - img [ref=e177]
                  - listitem [ref=e179]: Add Product
            - generic [ref=e181]: Please fill in the information below. * marked fields are required.
          - generic [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185]:
                - heading "General Information" [level=2] [ref=e186]
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - generic [ref=e189]: Product Type*
                    - generic [ref=e190]:
                      - button "Product Type*" [ref=e191] [cursor=pointer]:
                        - generic [ref=e192]: Variant Product
                      - generic:
                        - img
                  - generic [ref=e193]:
                    - generic [ref=e194]: Product Code*
                    - generic [ref=e195]:
                      - textbox "Product Code*" [ref=e196]:
                        - /placeholder: Auto-generated
                        - text: PROD00022
                      - button "Generate new code" [ref=e197] [cursor=pointer]:
                        - img [ref=e198]
                - generic [ref=e203]:
                  - generic [ref=e204]:
                    - generic [ref=e205]: Product Name*
                    - textbox "Product Name*" [ref=e206]:
                      - /placeholder: Enter product name
                      - text: Nike Air Max 2025
                  - generic [ref=e207]:
                    - generic [ref=e208]: Secondary Name
                    - textbox "Secondary Name" [ref=e209]:
                      - /placeholder: Enter secondary name
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]:
                      - generic [ref=e213]: Slug*
                      - button "Generate from Name" [ref=e214] [cursor=pointer]
                    - textbox "Slug*" [ref=e215]:
                      - /placeholder: Enter slug
                      - text: nike-air-max-2025
                    - paragraph [ref=e216]: Lowercase letters, numbers, and hyphens allowed
                  - generic [ref=e217]:
                    - generic [ref=e218]: Barcode Symbology
                    - generic [ref=e219]:
                      - button "Barcode Symbology" [ref=e220] [cursor=pointer]:
                        - generic [ref=e221]: Select barcode type
                      - generic:
                        - img
                - generic [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e224]: Brand*
                    - generic [ref=e225]:
                      - button "Brand*" [ref=e226] [cursor=pointer]:
                        - generic [ref=e227]: ABCD
                      - generic:
                        - img
                  - generic [ref=e228]:
                    - generic [ref=e229]: Category*
                    - generic [ref=e230]:
                      - button "Category*" [ref=e231] [cursor=pointer]:
                        - generic [ref=e232]: Select category
                      - generic:
                        - img
                - generic [ref=e233]:
                  - generic [ref=e234]:
                    - generic [ref=e235]: Tags
                    - textbox "Tags" [ref=e237]:
                      - /placeholder: Enter tags
                    - generic [ref=e238]: Press Enter or comma to add tags
                  - generic [ref=e239]:
                    - generic [ref=e240]: Status*
                    - generic [ref=e241]:
                      - button "Status*" [ref=e242] [cursor=pointer]:
                        - generic [ref=e243]: Select status
                      - generic:
                        - img
              - generic [ref=e244]:
                - heading "Descriptions" [level=2] [ref=e245]
                - generic [ref=e247]:
                  - generic [ref=e248]: Product Description
                  - generic [ref=e249]:
                    - generic [ref=e250]:
                      - button "Write" [ref=e251] [cursor=pointer]
                      - button "Preview" [ref=e252] [cursor=pointer]
                    - generic [ref=e253]:
                      - generic [ref=e254]:
                        - button "Bold" [ref=e255] [cursor=pointer]:
                          - img [ref=e256]
                        - button "Italic" [ref=e258] [cursor=pointer]:
                          - img [ref=e259]
                        - button "Strikethrough" [ref=e261] [cursor=pointer]:
                          - img [ref=e262]
                        - button "Heading 1" [ref=e266] [cursor=pointer]:
                          - img [ref=e267]
                        - button "Heading 2" [ref=e269] [cursor=pointer]:
                          - img [ref=e270]
                        - button "Heading 3" [ref=e272] [cursor=pointer]:
                          - img [ref=e273]
                        - button "Bullet List" [ref=e277] [cursor=pointer]:
                          - img [ref=e278]
                        - button "Numbered List" [ref=e279] [cursor=pointer]:
                          - img [ref=e280]
                        - button "Quote" [ref=e284] [cursor=pointer]:
                          - img [ref=e285]
                        - button "Code Block" [ref=e288] [cursor=pointer]:
                          - img [ref=e289]
                        - button "Link" [ref=e293] [cursor=pointer]:
                          - img [ref=e294]
                      - textbox [ref=e298]:
                        - paragraph [ref=e299]: Enter product description
                    - generic [ref=e301]: Rich text formatting supported
                - generic [ref=e303]:
                  - generic [ref=e304]: Product Description for Invoice
                  - generic [ref=e305]:
                    - generic [ref=e306]:
                      - button "Write" [ref=e307] [cursor=pointer]
                      - button "Preview" [ref=e308] [cursor=pointer]
                    - generic [ref=e309]:
                      - generic [ref=e310]:
                        - button "Bold" [ref=e311] [cursor=pointer]:
                          - img [ref=e312]
                        - button "Italic" [ref=e314] [cursor=pointer]:
                          - img [ref=e315]
                        - button "Strikethrough" [ref=e317] [cursor=pointer]:
                          - img [ref=e318]
                        - button "Heading 1" [ref=e322] [cursor=pointer]:
                          - img [ref=e323]
                        - button "Heading 2" [ref=e325] [cursor=pointer]:
                          - img [ref=e326]
                        - button "Heading 3" [ref=e328] [cursor=pointer]:
                          - img [ref=e329]
                        - button "Bullet List" [ref=e333] [cursor=pointer]:
                          - img [ref=e334]
                        - button "Numbered List" [ref=e335] [cursor=pointer]:
                          - img [ref=e336]
                        - button "Quote" [ref=e340] [cursor=pointer]:
                          - img [ref=e341]
                        - button "Code Block" [ref=e344] [cursor=pointer]:
                          - img [ref=e345]
                        - button "Link" [ref=e349] [cursor=pointer]:
                          - img [ref=e350]
                      - textbox [ref=e354]:
                        - paragraph [ref=e355]: Enter product description for invoice
                    - generic [ref=e357]: Rich text formatting supported
              - generic [ref=e358]:
                - heading "Media" [level=2] [ref=e359]
                - generic [ref=e361]:
                  - generic [ref=e362]: Product Image
                  - generic [ref=e364]:
                    - generic [ref=e365] [cursor=pointer]:
                      - button "Choose File" [ref=e366]
                      - generic [ref=e367]:
                        - img "Upload Icon" [ref=e368]
                        - heading "Drag and drop an image here, or click to upload" [level=5] [ref=e369]
                    - list
              - generic [ref=e370]:
                - heading "Pricing & Inventory" [level=2] [ref=e371]
                - generic [ref=e372]:
                  - generic [ref=e373]:
                    - generic [ref=e374]: Product Cost*
                    - spinbutton "Product Cost*" [ref=e375]
                  - generic [ref=e376]:
                    - generic [ref=e377]: Product Price*
                    - spinbutton "Product Price*" [ref=e378]
                  - generic [ref=e379]:
                    - generic [ref=e380]: Product Tax
                    - generic [ref=e381]:
                      - button "Product Tax" [ref=e382] [cursor=pointer]:
                        - generic [ref=e383]: Select tax
                      - generic:
                        - img
                - generic [ref=e384]:
                  - generic [ref=e385]:
                    - generic [ref=e386]: Product Unit
                    - generic [ref=e387]:
                      - button "Product Unit" [ref=e388] [cursor=pointer]:
                        - generic [ref=e389]: Select unit
                      - generic:
                        - img
                  - generic [ref=e390]:
                    - generic [ref=e391]: Default Sale Unit
                    - generic [ref=e392]:
                      - button "Default Sale Unit" [ref=e393] [cursor=pointer]:
                        - generic [ref=e394]: Select sale unit
                      - generic:
                        - img
                  - generic [ref=e395]:
                    - generic [ref=e396]: Default Purchase Unit
                    - generic [ref=e397]:
                      - button "Default Purchase Unit" [ref=e398] [cursor=pointer]:
                        - generic [ref=e399]: Select purchase unit
                      - generic:
                        - img
                - generic [ref=e401]:
                  - generic [ref=e402]: Alert Quantity*
                  - spinbutton "Alert Quantity*" [ref=e403]
              - generic [ref=e404]:
                - heading "Visibility" [level=2] [ref=e405]
                - generic [ref=e406]:
                  - generic [ref=e408]:
                    - switch "Web Visibility" [checked] [ref=e409] [cursor=pointer]:
                      - generic [ref=e410]: Web Visibility
                    - generic [ref=e412]: Web Visibility
                  - generic [ref=e414]:
                    - switch "POS Visibility" [checked] [ref=e415] [cursor=pointer]:
                      - generic [ref=e416]: POS Visibility
                    - generic [ref=e418]: POS Visibility
            - generic [ref=e419]:
              - heading "Search Engine Optimization (SEO)" [level=2] [ref=e420]
              - generic [ref=e421]:
                - generic [ref=e422]:
                  - generic [ref=e423]: Product Meta Title
                  - textbox "Product Meta Title" [ref=e424]:
                    - /placeholder: Enter product meta title
                - generic [ref=e425]:
                  - generic [ref=e426]: Meta Description
                  - textbox "Meta Description" [ref=e427]:
                    - /placeholder: Enter meta description
              - generic [ref=e429]:
                - generic [ref=e430]: Meta Keywords
                - textbox "Meta Keywords" [ref=e432]:
                  - /placeholder: Enter meta keywords
                - generic [ref=e433]: Press Enter or comma to add tags
            - generic [ref=e434]:
              - generic [ref=e436]:
                - heading "Variant Options" [level=2] [ref=e437]
                - paragraph [ref=e438]: Check necessary Variant Options from following options.
                - group [ref=e441]:
                  - group "variant_options" [ref=e442]:
                    - generic [ref=e443] [cursor=pointer]:
                      - checkbox "Color" [ref=e444]
                      - generic [ref=e446]: Color
                    - generic [ref=e447] [cursor=pointer]:
                      - checkbox "Material" [ref=e448]
                      - generic [ref=e450]: Material
                    - generic [ref=e451] [cursor=pointer]:
                      - checkbox "Pattern" [ref=e452]
                      - generic [ref=e454]: Pattern
                    - generic [ref=e455] [cursor=pointer]:
                      - checkbox "Size" [ref=e456]
                      - generic [ref=e458]: Size
                    - generic [ref=e459] [cursor=pointer]:
                      - checkbox "Style" [ref=e460]
                      - generic [ref=e462]: Style
              - generic [ref=e463]:
                - generic [ref=e464]:
                  - heading "Inventory" [level=2] [ref=e465]
                  - generic [ref=e466]:
                    - generic [ref=e467]:
                      - generic [ref=e468]:
                        - generic [ref=e469]: SKU*
                        - textbox "SKU*" [ref=e470]:
                          - /placeholder: Enter SKU
                      - generic [ref=e471]:
                        - generic [ref=e472]: Barcode
                        - textbox "Barcode" [ref=e473]:
                          - /placeholder: Enter barcode
                      - generic [ref=e474]:
                        - generic [ref=e475]: Quantity
                        - spinbutton "Quantity" [ref=e476]
                    - generic [ref=e477]:
                      - generic [ref=e479]:
                        - checkbox "Manage Inventory" [ref=e480] [cursor=pointer]
                        - generic [ref=e481] [cursor=pointer]: Manage Inventory
                      - generic [ref=e483]:
                        - checkbox "Allow Backorder" [ref=e484] [cursor=pointer]
                        - generic [ref=e485] [cursor=pointer]: Allow Backorder
                      - generic [ref=e487]:
                        - checkbox "Stock Tracking Stock Tracking" [ref=e488] [cursor=pointer]
                        - generic [ref=e489] [cursor=pointer]: Stock Tracking
                - generic [ref=e490]:
                  - heading "Shipping" [level=2] [ref=e491]
                  - generic [ref=e492]:
                    - generic [ref=e493]:
                      - generic [ref=e494]:
                        - generic [ref=e495]: Length
                        - spinbutton "Length" [ref=e496]
                      - generic [ref=e497]:
                        - generic [ref=e498]: Height
                        - spinbutton "Height" [ref=e499]
                      - generic [ref=e500]:
                        - generic [ref=e501]: Width
                        - spinbutton "Width" [ref=e502]
                    - generic [ref=e503]:
                      - generic [ref=e504]:
                        - generic [ref=e505]: Weight
                        - spinbutton "Weight" [ref=e506]
                      - generic [ref=e507]:
                        - generic [ref=e508]: Shipping Class
                        - generic [ref=e509]:
                          - button "Shipping Class" [ref=e510] [cursor=pointer]:
                            - generic [ref=e511]: Select Shipping Class
                          - generic:
                            - img
                      - generic [ref=e512]:
                        - generic [ref=e513]: Fulfillment Location
                        - generic [ref=e514]:
                          - button "Fulfillment Location" [ref=e515] [cursor=pointer]:
                            - generic [ref=e516]: Select fulfillment location
                          - generic:
                            - img
                - generic [ref=e517]:
                  - heading "Tax Pricing" [level=2] [ref=e518]
                  - generic [ref=e519]:
                    - generic [ref=e520]:
                      - generic [ref=e521]:
                        - generic [ref=e522]: Cost Price
                        - spinbutton "Cost Price" [ref=e523]
                      - generic [ref=e524]:
                        - generic [ref=e525]: Sale Price
                        - spinbutton "Sale Price" [ref=e526]
                      - generic [ref=e527]:
                        - generic [ref=e528]: Compare Price
                        - spinbutton "Compare Price" [ref=e529]
                    - generic [ref=e531]:
                      - generic [ref=e532]: Discount Rules
                      - textbox "Discount Rules" [ref=e533]:
                        - /placeholder: Enter Discount Rules as JSON
                - generic [ref=e534]:
                  - heading "Variant Details" [level=2] [ref=e535]
                  - generic [ref=e536]:
                    - generic [ref=e538]:
                      - generic [ref=e539]: Low Stock Alert
                      - spinbutton "Low Stock Alert" [ref=e540]
                    - generic [ref=e543]:
                      - checkbox [ref=e544] [cursor=pointer]
                      - generic [ref=e545] [cursor=pointer]: Stock Tracking
          - generic [ref=e547]:
            - button "Reset" [ref=e548] [cursor=pointer]:
              - img [ref=e549]
              - generic [ref=e552]: Reset
            - button "Save and Edit" [ref=e553] [cursor=pointer]:
              - img [ref=e554]
              - generic [ref=e556]: Save and Edit
            - button "Save" [ref=e557] [cursor=pointer]:
              - img [ref=e558]
              - generic [ref=e560]: Save
      - contentinfo [ref=e561]:
        - generic [ref=e562]:
          - generic [ref=e563]:
            - text: © 2026 Shopbox. All rights reserved.
            - generic [ref=e564]: "| v2.0.7"
          - link "Developed and enhanced by Livezen Technologies" [ref=e566] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e567]: 680.000,00
```

# Test source

```ts
  169 |     readonly discountRulesTextarea: Locator;
  170 | 
  171 |     readonly lowStockAlertInput: Locator;
  172 | 
  173 |     readonly resetButton: Locator;
  174 |     readonly saveAndEditButton: Locator;
  175 |     readonly saveButton: Locator;
  176 | 
  177 |     constructor(page: Page) {
  178 |         this.page = page;
  179 | 
  180 |         // General Information
  181 |         this.productTypeDropdown = page.locator('button#productTypeId');
  182 |         this.productCodeInput = page.locator('input#product');
  183 |         this.generateCodeButton = page.locator('button[title="Generate new code"]');
  184 |         this.productNameInput = page.locator('input#name');
  185 |         this.secondaryNameInput = page.locator('input#secondaryName');
  186 |         this.slugInput = page.locator('input#slug');
  187 |         this.barcodeSymbologyDropdown = page.locator('button#barcodeSymbology');
  188 |         this.brandDropdown = page.locator('button#brand');
  189 |         this.categoryDropdown = page.locator('button#categories');
  190 |         this.tagsInput = page.locator('input#tags');
  191 |         this.statusDropdown = page.locator('button#status');
  192 | 
  193 |         // Rich Text Editors
  194 |         this.productDescriptionEditor = page.locator('div.ProseMirror').first();
  195 |         this.invoiceDescriptionEditor = page.locator('div.ProseMirror').last();
  196 | 
  197 |         // Media
  198 |         this.productImageFileInput = page.locator("input[type='file'][accept*='image']");
  199 | 
  200 |         // Pricing
  201 |         this.productCostInput = page.locator('input#costPrice');
  202 |         this.productPriceInput = page.locator('input#salePrice');
  203 |         this.taxDropdown = page.locator('button#taxId');
  204 |         this.unitDropdown = page.locator('button#unitId');
  205 |         this.saleUnitDropdown = page.locator('button#saleUnitId');
  206 |         this.purchaseUnitDropdown = page.locator('button#purchaseUnitId');
  207 |         this.alertQuantityInput = page.locator('input#alertQuantity');
  208 | 
  209 |         // Visibility
  210 |         this.webVisibilityToggle = page.getByRole('switch', { name: 'Web Visibility' });
  211 |         this.posVisibilityToggle = page.getByRole('switch', { name: 'POS Visibility' });
  212 | 
  213 |         // SEO
  214 |         this.metaTitleInput = page.locator('input#meta_title');
  215 |         this.metaDescriptionInput = page.locator('input#meta_description');
  216 |         this.metaKeywordsInput = page.locator('input#meta_keywords');
  217 | 
  218 |         // Variant Options
  219 |         this.variantColorCheckbox = page.getByLabel('Color');
  220 |         this.variantMaterialCheckbox = page.getByLabel('Material');
  221 |         this.variantPatternCheckbox = page.getByLabel('Pattern');
  222 |         this.variantSizeCheckbox = page.getByLabel('Size');
  223 |         this.variantStyleCheckbox = page.getByLabel('Style');
  224 | 
  225 |         // Inventory
  226 |         this.skuInput = page.locator('input#sku');
  227 |         this.barcodeInput = page.locator('input#barcode');
  228 |         this.quantityInput = page.locator('input#quantity');
  229 |         this.manageInventoryCheckbox = page.locator('input#manage_inventory');
  230 |         this.allowBackorderCheckbox = page.locator('input#allow_backorder');
  231 |         this.stockTrackingCheckbox = page.locator('input#stock_tracking');
  232 | 
  233 |         // Shipping
  234 |         this.lengthInput = page.locator('input#length');
  235 |         this.heightInput = page.locator('input#height');
  236 |         this.widthInput = page.locator('input#width');
  237 |         this.weightInput = page.locator('input#weight');
  238 |         this.shippingClassDropdown = page.locator('button#shipping_class_id');
  239 |         this.fulfillmentLocationDropdown = page.locator('button#fulfillment_location');
  240 | 
  241 |         // Tax Pricing
  242 |         this.taxCostPriceInput = page.locator('input#cost_price');
  243 |         this.taxSalePriceInput = page.locator('input#sale_price');
  244 |         this.comparePriceInput = page.locator('input#compare_price');
  245 |         this.discountRulesTextarea = page.locator('textarea#discount_rules');
  246 | 
  247 |         // Variant Details
  248 |         this.lowStockAlertInput = page.locator('input#low_stock_alert');
  249 | 
  250 |         // Action Buttons
  251 |         this.resetButton = page.getByRole('button', { name: 'Reset' });
  252 |         this.saveAndEditButton = page.getByRole('button', { name: 'Save and Edit' });
  253 |         this.saveButton = page.getByRole('button', { name: 'Save' });
  254 |     }
  255 | 
  256 |     // ==================================================
  257 |     // 🎯 YOUR EXACT DROPDOWN METHOD (copied word for word)
  258 |     // ==================================================
  259 |     async selectFromDropdown(dropdown: Locator, optionText: string) {
  260 |         await dropdown.click();
  261 | 
  262 |         const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
  263 |         const searchInput = this.page.locator("input[placeholder='Search options...']");
  264 | 
  265 |         if (await searchInput.isVisible()) {
  266 |             await searchInput.fill(optionText);
  267 |         }
  268 | 
> 269 |         await dropdownOption.scrollIntoViewIfNeeded();
      |                              ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 15000ms exceeded.
  270 |         await dropdownOption.click();
  271 |     }
  272 | 
  273 |     async goto() {
  274 |         await this.page.goto('/products/create');
  275 |     }
  276 | 
  277 |     // Smart helpers
  278 |     async setToggle(toggle: Locator, enable: boolean) {
  279 |         const isChecked = await toggle.getAttribute('aria-checked') === 'true';
  280 |         if (isChecked !== enable) await toggle.click();
  281 |     }
  282 | 
  283 |     async setCheckbox(checkbox: Locator, check: boolean) {
  284 |         check ? await checkbox.check() : await checkbox.uncheck();
  285 |     }
  286 | 
  287 |     // ==================================================
  288 |     // 🚀 LEGENDARY END TO END FULL FORM FILL METHOD
  289 |     // ==================================================
  290 |     /**
  291 |      * Fills every single section of the Add Product form automatically.
  292 |      * You only need to pass the fields you want to set.
  293 |      */
  294 |     async fillFullForm(data: AddProductFormData): Promise<void> {
  295 |         console.log('🚀 [AddProduct] Starting end-to-end product form fill...');
  296 | 
  297 |         console.log('📋 [1/10] Processing General Information...');
  298 |         if (data.productType) await this.selectFromDropdown(this.productTypeDropdown, data.productType);
  299 |         if (data.generateAutoProductCode) await this.generateCodeButton.click();
  300 |         if (data.productCode) await this.productCodeInput.fill(data.productCode);
  301 |         if (data.productName) await this.productNameInput.fill(data.productName);
  302 |         if (data.secondaryName) await this.secondaryNameInput.fill(data.secondaryName);
  303 |         if (data.slug) await this.slugInput.fill(data.slug);
  304 |         if (data.barcodeSymbology) await this.selectFromDropdown(this.barcodeSymbologyDropdown, data.barcodeSymbology);
  305 |         if (data.brand) await this.selectFromDropdown(this.brandDropdown, data.brand);
  306 |         if (data.category) await this.selectFromDropdown(this.categoryDropdown, data.category);
  307 |         if (data.tags) {
  308 |             for (const tag of data.tags) {
  309 |                 await this.tagsInput.fill(tag);
  310 |                 await this.tagsInput.press('Enter');
  311 |             }
  312 |         }
  313 |         if (data.status) await this.selectFromDropdown(this.statusDropdown, data.status);
  314 | 
  315 |         console.log('📝 [2/10] Processing Descriptions...');
  316 |         if (data.productDescription) {
  317 |             await this.productDescriptionEditor.click();
  318 |             await this.productDescriptionEditor.fill(data.productDescription);
  319 |         }
  320 |         if (data.invoiceDescription) {
  321 |             await this.invoiceDescriptionEditor.click();
  322 |             await this.invoiceDescriptionEditor.fill(data.invoiceDescription);
  323 |         }
  324 | 
  325 |         // console.log('🖼️  [3/10] Processing Media...');
  326 |         // if (data.productImagePath) await this.productImageFileInput.setInputFiles(data.productImagePath);
  327 | 
  328 |         console.log('💰 [4/10] Processing Pricing & Inventory...');
  329 |         if (data.productCost) await this.productCostInput.fill(data.productCost);
  330 |         if (data.productPrice) await this.productPriceInput.fill(data.productPrice);
  331 |         if (data.tax) await this.selectFromDropdown(this.taxDropdown, data.tax);
  332 |         if (data.unit) await this.selectFromDropdown(this.unitDropdown, data.unit);
  333 |         if (data.saleUnit) await this.selectFromDropdown(this.saleUnitDropdown, data.saleUnit);
  334 |         if (data.purchaseUnit) await this.selectFromDropdown(this.purchaseUnitDropdown, data.purchaseUnit);
  335 |         if (data.alertQuantity) await this.alertQuantityInput.fill(data.alertQuantity);
  336 | 
  337 |         console.log('👁️  [5/10] Processing Visibility...');
  338 |         if (data.webVisibility !== undefined) await this.setToggle(this.webVisibilityToggle, data.webVisibility);
  339 |         if (data.posVisibility !== undefined) await this.setToggle(this.posVisibilityToggle, data.posVisibility);
  340 | 
  341 |         console.log('🔍 [6/10] Processing SEO...');
  342 |         if (data.metaTitle) await this.metaTitleInput.fill(data.metaTitle);
  343 |         if (data.metaDescription) await this.metaDescriptionInput.fill(data.metaDescription);
  344 |         if (data.metaKeywords) {
  345 |             for (const keyword of data.metaKeywords) {
  346 |                 await this.metaKeywordsInput.fill(keyword);
  347 |                 await this.metaKeywordsInput.press('Enter');
  348 |             }
  349 |         }
  350 | 
  351 |         console.log('🎛️  [7/10] Processing Variant Options...');
  352 |         if (data.variantColor !== undefined) await this.setCheckbox(this.variantColorCheckbox, data.variantColor);
  353 |         if (data.variantMaterial !== undefined) await this.setCheckbox(this.variantMaterialCheckbox, data.variantMaterial);
  354 |         if (data.variantPattern !== undefined) await this.setCheckbox(this.variantPatternCheckbox, data.variantPattern);
  355 |         if (data.variantSize !== undefined) await this.setCheckbox(this.variantSizeCheckbox, data.variantSize);
  356 |         if (data.variantStyle !== undefined) await this.setCheckbox(this.variantStyleCheckbox, data.variantStyle);
  357 | 
  358 |         console.log('📦 [8/10] Processing Inventory...');
  359 |         if (data.sku) await this.skuInput.fill(data.sku);
  360 |         if (data.barcode) await this.barcodeInput.fill(data.barcode);
  361 |         if (data.quantity) await this.quantityInput.fill(data.quantity);
  362 |         if (data.manageInventory !== undefined) await this.setCheckbox(this.manageInventoryCheckbox, data.manageInventory);
  363 |         if (data.allowBackorder !== undefined) await this.setCheckbox(this.allowBackorderCheckbox, data.allowBackorder);
  364 |         if (data.stockTracking !== undefined) await this.setCheckbox(this.stockTrackingCheckbox, data.stockTracking);
  365 | 
  366 |         console.log('🚚 [9/10] Processing Shipping...');
  367 |         if (data.length) await this.lengthInput.fill(data.length);
  368 |         if (data.height) await this.heightInput.fill(data.height);
  369 |         if (data.width) await this.widthInput.fill(data.width);
```