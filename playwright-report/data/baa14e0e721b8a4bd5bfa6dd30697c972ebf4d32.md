# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\products\addVariantProductForm.spec.ts >> Add Product - E2E Workflow Tests Variant Products >> TC_10 | Variant Product | All 5 Variant Options checked & Save
- Location: tests\products\addVariantProductForm.spec.ts:374:9

# Error details

```
Error: locator.check: Error: strict mode violation: locator('input#stock_tracking') resolved to 2 elements:
    1) <input type="checkbox" id="stock_tracking" name="stock_tracking" class="↵            h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500↵            dark:border-zink-500 dark:bg-zink-600 dark:text-blue-500 dark:focus:ring-blue-500↵            border-gray-300 dark:border-zink-500↵            cursor-pointer↵          "/> aka getByRole('checkbox', { name: 'Stock Tracking Stock Tracking' })
    2) <input type="checkbox" id="stock_tracking" name="stock_tracking" class="↵            h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500↵            dark:border-zink-500 dark:bg-zink-600 dark:text-blue-500 dark:focus:ring-blue-500↵            border-gray-300 dark:border-zink-500↵            cursor-pointer↵          "/> aka locator('section').filter({ hasText: 'Variant DetailsLow Stock' }).locator('#stock_tracking')

Call log:
  - waiting for locator('input#stock_tracking')

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
        - button "76" [ref=e145] [cursor=pointer]:
          - img [ref=e146]
          - generic [ref=e149]: "76"
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
                      - text: PROD00033
                    - button "Generate new code" [ref=e197] [cursor=pointer]:
                      - img [ref=e198]
              - generic [ref=e203]:
                - generic [ref=e204]:
                  - generic [ref=e205]: Product Name*
                  - textbox "Product Name*" [ref=e206]:
                    - /placeholder: Enter product name
                    - text: All Variants Product - 1778663315176
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
                    - text: all-variants-product-1778663315176
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
                      - generic [ref=e232]: Test 1
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
                      - generic [ref=e243]: Active
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
                  - spinbutton "Product Cost*" [ref=e375]: "100"
                - generic [ref=e376]:
                  - generic [ref=e377]: Product Price*
                  - spinbutton "Product Price*" [ref=e378]: "200"
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
                - spinbutton "Alert Quantity*" [ref=e403]: "10"
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
            - generic [ref=e435]:
              - generic [ref=e436]:
                - heading "Variant Options" [level=2] [ref=e437]
                - paragraph [ref=e438]: Check necessary Variant Options from following options.
                - group [ref=e441]:
                  - group "variant_options" [ref=e442]:
                    - generic [ref=e443] [cursor=pointer]:
                      - checkbox "Color" [checked] [ref=e444]
                      - generic [ref=e446]: Color
                    - generic [ref=e447] [cursor=pointer]:
                      - checkbox "Material" [checked] [ref=e448]
                      - generic [ref=e450]: Material
                    - generic [ref=e451] [cursor=pointer]:
                      - checkbox "Pattern" [checked] [ref=e452]
                      - generic [ref=e454]: Pattern
                    - generic [ref=e455] [cursor=pointer]:
                      - checkbox "Size" [checked] [ref=e456]
                      - generic [ref=e458]: Size
                    - generic [ref=e459] [cursor=pointer]:
                      - checkbox "Style" [checked] [ref=e460]
                      - generic [ref=e462]: Style
              - generic [ref=e463]:
                - generic [ref=e464]:
                  - generic [ref=e465]:
                    - heading "Variants" [level=4] [ref=e466]
                    - paragraph [ref=e467]: Fill the values under each variant column.
                  - button "Add Variant" [ref=e468] [cursor=pointer]
                - table [ref=e471]:
                  - rowgroup [ref=e483]:
                    - row "# Color Material Pattern Size Style SKU * Unit Price Product Cost Variant Image" [ref=e484]:
                      - columnheader "#" [ref=e485]
                      - columnheader "Color" [ref=e486]
                      - columnheader "Material" [ref=e487]
                      - columnheader "Pattern" [ref=e488]
                      - columnheader "Size" [ref=e489]
                      - columnheader "Style" [ref=e490]
                      - columnheader "SKU *" [ref=e491]:
                        - text: SKU
                        - generic [ref=e492]: "*"
                      - columnheader "Unit Price" [ref=e493]
                      - columnheader "Product Cost" [ref=e494]
                      - columnheader "Variant Image" [ref=e495]
                      - columnheader
                  - rowgroup [ref=e496]:
                    - 'row "1 Click to open color picker #FF0000 ALL-VAR-1778663315176 Upload placeholder" [ref=e497]':
                      - cell "1" [ref=e498]
                      - 'cell "Click to open color picker #FF0000" [ref=e499]':
                        - generic [ref=e503]:
                          - generic "Click to open color picker" [ref=e504] [cursor=pointer]
                          - textbox "#FF0000" [ref=e505]
                      - cell [ref=e506]:
                        - generic [ref=e510]:
                          - button [ref=e511] [cursor=pointer]:
                            - generic [ref=e512]: Select Material
                          - generic:
                            - img
                      - cell [ref=e513]:
                        - generic [ref=e517]:
                          - button [ref=e518] [cursor=pointer]:
                            - generic [ref=e519]: Select Pattern
                          - generic:
                            - img
                      - cell [ref=e520]:
                        - generic [ref=e524]:
                          - button [ref=e525] [cursor=pointer]:
                            - generic [ref=e526]: Select Size
                          - generic:
                            - img
                      - cell [ref=e527]:
                        - generic [ref=e531]:
                          - button [ref=e532] [cursor=pointer]:
                            - generic [ref=e533]: Select Style
                          - generic:
                            - img
                      - cell "ALL-VAR-1778663315176" [ref=e534]:
                        - textbox "Enter SKU" [ref=e535]: ALL-VAR-1778663315176
                      - cell [ref=e536]:
                        - spinbutton [ref=e537]
                      - cell [ref=e538]:
                        - spinbutton [ref=e539]
                      - cell "Upload placeholder" [ref=e540]:
                        - img "Upload placeholder" [ref=e545] [cursor=pointer]
                      - cell:
                        - button "Delete" [ref=e546] [cursor=pointer]:
                          - img [ref=e547]
            - generic [ref=e550]:
              - generic [ref=e551]:
                - heading "Inventory" [level=2] [ref=e552]
                - generic [ref=e553]:
                  - generic [ref=e554]:
                    - generic [ref=e555]:
                      - generic [ref=e556]: SKU*
                      - textbox "SKU*" [ref=e557]:
                        - /placeholder: Enter SKU
                        - text: ALL-VAR-1778663315176
                    - generic [ref=e558]:
                      - generic [ref=e559]: Barcode
                      - textbox "Barcode" [ref=e560]:
                        - /placeholder: Enter barcode
                    - generic [ref=e561]:
                      - generic [ref=e562]: Quantity
                      - spinbutton "Quantity" [ref=e563]: "500.00"
                  - generic [ref=e564]:
                    - generic [ref=e566]:
                      - checkbox "Manage Inventory" [checked] [active] [ref=e567] [cursor=pointer]
                      - generic [ref=e568] [cursor=pointer]: Manage Inventory
                    - generic [ref=e570]:
                      - checkbox "Allow Backorder" [ref=e571] [cursor=pointer]
                      - generic [ref=e572] [cursor=pointer]: Allow Backorder
                    - generic [ref=e574]:
                      - checkbox "Stock Tracking Stock Tracking" [ref=e575] [cursor=pointer]
                      - generic [ref=e576] [cursor=pointer]: Stock Tracking
              - generic [ref=e577]:
                - heading "Shipping" [level=2] [ref=e578]
                - generic [ref=e579]:
                  - generic [ref=e580]:
                    - generic [ref=e581]:
                      - generic [ref=e582]: Length
                      - spinbutton "Length" [ref=e583]
                    - generic [ref=e584]:
                      - generic [ref=e585]: Height
                      - spinbutton "Height" [ref=e586]
                    - generic [ref=e587]:
                      - generic [ref=e588]: Width
                      - spinbutton "Width" [ref=e589]
                  - generic [ref=e590]:
                    - generic [ref=e591]:
                      - generic [ref=e592]: Weight
                      - spinbutton "Weight" [ref=e593]
                    - generic [ref=e594]:
                      - generic [ref=e595]: Shipping Class
                      - generic [ref=e596]:
                        - button "Shipping Class" [ref=e597] [cursor=pointer]:
                          - generic [ref=e598]: Select Shipping Class
                        - generic:
                          - img
                    - generic [ref=e599]:
                      - generic [ref=e600]: Fulfillment Location
                      - generic [ref=e601]:
                        - button "Fulfillment Location" [ref=e602] [cursor=pointer]:
                          - generic [ref=e603]: Select fulfillment location
                        - generic:
                          - img
              - generic [ref=e604]:
                - heading "Tax Pricing" [level=2] [ref=e605]
                - generic [ref=e606]:
                  - generic [ref=e607]:
                    - generic [ref=e608]:
                      - generic [ref=e609]: Cost Price
                      - spinbutton "Cost Price" [ref=e610]
                    - generic [ref=e611]:
                      - generic [ref=e612]: Sale Price
                      - spinbutton "Sale Price" [ref=e613]
                    - generic [ref=e614]:
                      - generic [ref=e615]: Compare Price
                      - spinbutton "Compare Price" [ref=e616]
                  - generic [ref=e618]:
                    - generic [ref=e619]: Discount Rules
                    - textbox "Discount Rules" [ref=e620]:
                      - /placeholder: Enter Discount Rules as JSON
              - generic [ref=e621]:
                - heading "Variant Details" [level=2] [ref=e622]
                - generic [ref=e623]:
                  - generic [ref=e625]:
                    - generic [ref=e626]: Low Stock Alert
                    - spinbutton "Low Stock Alert" [ref=e627]
                  - generic [ref=e630]:
                    - checkbox [ref=e631] [cursor=pointer]
                    - generic [ref=e632] [cursor=pointer]: Stock Tracking
        - generic [ref=e634]:
          - button "Reset" [ref=e635] [cursor=pointer]:
            - img [ref=e636]
            - generic [ref=e639]: Reset
          - button "Save and Edit" [ref=e640] [cursor=pointer]:
            - img [ref=e641]
            - generic [ref=e643]: Save and Edit
          - button "Save" [ref=e644] [cursor=pointer]:
            - img [ref=e645]
            - generic [ref=e647]: Save
    - contentinfo [ref=e648]:
      - generic [ref=e649]:
        - generic [ref=e650]:
          - text: © 2026 Shopbox. All rights reserved.
          - generic [ref=e651]: "| v2.0.7"
        - link "Developed and enhanced by Livezen Technologies" [ref=e653] [cursor=pointer]:
          - /url: "#"
```

# Test source

```ts
  192 | 
  193 |         // Media
  194 |         this.productImageDropzone  = page.locator('div.dropzone');
  195 |         this.productImageFileInput = page.locator("input[type='file'][accept*='image']");
  196 | 
  197 |         // Pricing & Inventory
  198 |         this.productCostInput     = page.locator('input#costPrice');
  199 |         this.productPriceInput    = page.locator('input#salePrice');
  200 |         this.taxDropdown          = page.locator('button#taxId');
  201 |         this.unitDropdown         = page.locator('button#unitId');
  202 |         this.saleUnitDropdown     = page.locator('button#saleUnitId');
  203 |         this.purchaseUnitDropdown = page.locator('button#purchaseUnitId');
  204 |         this.alertQuantityInput   = page.locator('input#alertQuantity');
  205 | 
  206 |         // Visibility
  207 |         this.webVisibilityToggle = page.getByRole('switch', { name: 'Web Visibility' });
  208 |         this.posVisibilityToggle = page.getByRole('switch', { name: 'POS Visibility' });
  209 | 
  210 |         // SEO
  211 |         this.metaTitleInput       = page.locator('input#meta_title');
  212 |         this.metaDescriptionInput = page.locator('input#meta_description');
  213 |         this.metaKeywordsInput    = page.locator('input#meta_keywords');
  214 | 
  215 |         // Variant Options
  216 |         this.variantColorCheckbox    = page.getByLabel('Color');
  217 |         this.variantMaterialCheckbox = page.getByLabel('Material');
  218 |         this.variantPatternCheckbox  = page.getByLabel('Pattern');
  219 |         this.variantSizeCheckbox     = page.getByLabel('Size');
  220 |         this.variantStyleCheckbox    = page.getByLabel('Style');
  221 | 
  222 |         // SKU input inside the Variants table row
  223 |         // (only visible in DOM after at least one variant checkbox is checked)
  224 |         this.variantSKUInput = page.locator('input[placeholder="Enter SKU"]').first();
  225 | 
  226 |         // Inventory
  227 |         this.skuInput                = page.locator('input#sku');
  228 |         this.barcodeInput            = page.locator('input#barcode');
  229 |         this.quantityInput           = page.locator('input#quantity');
  230 |         this.manageInventoryCheckbox = page.locator('input#manage_inventory');
  231 |         this.allowBackorderCheckbox  = page.locator('input#allow_backorder');
  232 |         this.stockTrackingCheckbox   = page.locator('input#stock_tracking');
  233 | 
  234 |         // Shipping
  235 |         this.lengthInput                 = page.locator('input#length');
  236 |         this.heightInput                 = page.locator('input#height');
  237 |         this.widthInput                  = page.locator('input#width');
  238 |         this.weightInput                 = page.locator('input#weight');
  239 |         this.shippingClassDropdown       = page.locator('button#shipping_class_id');
  240 |         this.fulfillmentLocationDropdown = page.locator('button#fulfillment_location');
  241 | 
  242 |         // Tax Pricing
  243 |         this.taxCostPriceInput    = page.locator('input#cost_price');
  244 |         this.taxSalePriceInput    = page.locator('input#sale_price');
  245 |         this.comparePriceInput    = page.locator('input#compare_price');
  246 |         this.discountRulesTextarea = page.locator('textarea#discount_rules');
  247 | 
  248 |         // Variant Details
  249 |         this.lowStockAlertInput = page.locator('input#low_stock_alert');
  250 | 
  251 |         // Breadcrumb & Page Header
  252 |         this.pageTitle              = page.locator('h1.text-xl.font-semibold');
  253 |         this.breadcrumbProductsLink = page.locator("nav[aria-label='Breadcrumb'] a[href='/products']");
  254 |         this.breadcrumbCurrentPage  = page.locator("nav[aria-label='Breadcrumb'] span.font-medium");
  255 | 
  256 |         // Actions
  257 |         this.resetButton       = page.locator("//button[.//span[text()='Reset']]");
  258 |         this.saveAndEditButton = page.locator("//button[.//span[text()='Save and Edit']]");
  259 |         this.saveButton        = page.locator("//button[.//span[text()='Save']]");
  260 |     }
  261 | 
  262 |     // ============================================================
  263 |     // NAVIGATION
  264 |     // ============================================================
  265 | 
  266 |     async goto() {
  267 |         await this.page.goto('https://app.livezencloud.com/products/create');
  268 |         await this.page.waitForLoadState('networkidle');
  269 |     }
  270 | 
  271 |     // ============================================================
  272 |     // CORE HELPERS
  273 |     // ============================================================
  274 | 
  275 |     async selectFromDropdown(dropdown: Locator, optionText: string) {
  276 |         await dropdown.click();
  277 |         const dropdownOption = this.page.getByRole('option', { name: optionText, exact: true });
  278 |         const searchInput    = this.page.locator("input[placeholder='Search options...']");
  279 |         if (await searchInput.isVisible()) {
  280 |             await searchInput.fill(optionText);
  281 |         }
  282 |         await dropdownOption.scrollIntoViewIfNeeded();
  283 |         await dropdownOption.click();
  284 |     }
  285 | 
  286 |     async setToggle(toggle: Locator, enable: boolean) {
  287 |         const current = await toggle.getAttribute('aria-checked') === 'true';
  288 |         if (current !== enable) await toggle.click();
  289 |     }
  290 | 
  291 |     async setCheckbox(checkbox: Locator, check: boolean) {
> 292 |         check ? await checkbox.check() : await checkbox.uncheck();
      |                                ^ Error: locator.check: Error: strict mode violation: locator('input#stock_tracking') resolved to 2 elements:
  293 |     }
  294 | 
  295 |     // ============================================================
  296 |     // ✅ SECTION FILL METHODS
  297 |     // ============================================================
  298 | 
  299 |     // ── Step 1 : General Information ─────────────────────────
  300 | 
  301 |     private async fillGeneralInformation(data: AddProductFormData) {
  302 | 
  303 |         if (data.productType) {
  304 |             await this.selectFromDropdown(this.productTypeDropdown, data.productType);
  305 |             await expect(this.productTypeDropdown).toContainText(data.productType);
  306 |         }
  307 | 
  308 |         if (data.generateAutoCode) {
  309 |             await this.generateCodeButton.click();
  310 |             await this.page.waitForTimeout(300);
  311 |         }
  312 | 
  313 |         if (data.productCode) {
  314 |             await this.productCodeInput.clear();
  315 |             await this.productCodeInput.fill(data.productCode);
  316 |             await expect(this.productCodeInput).toHaveValue(data.productCode);
  317 |         }
  318 | 
  319 |         if (data.productName) {
  320 |             await this.productNameInput.fill(data.productName);
  321 |             await expect(this.productNameInput).toHaveValue(data.productName);
  322 |         }
  323 | 
  324 |         if (data.secondaryName) {
  325 |             await this.secondaryNameInput.fill(data.secondaryName);
  326 |             await expect(this.secondaryNameInput).toHaveValue(data.secondaryName);
  327 |         }
  328 | 
  329 |         if (data.slug) {
  330 |             await this.slugInput.fill(data.slug);
  331 |             await expect(this.slugInput).toHaveValue(data.slug);
  332 |         }
  333 | 
  334 |         if (data.barcodeSymbology) {
  335 |             await this.selectFromDropdown(this.barcodeSymbologyDropdown, data.barcodeSymbology);
  336 |             await expect(this.barcodeSymbologyDropdown).toContainText(data.barcodeSymbology);
  337 |         }
  338 | 
  339 |         if (data.brand) {
  340 |             await this.selectFromDropdown(this.brandDropdown, data.brand);
  341 |             await expect(this.brandDropdown).toContainText(data.brand);
  342 |         }
  343 | 
  344 |         if (data.category) {
  345 |             await this.selectFromDropdown(this.categoryDropdown, data.category);
  346 |             await expect(this.categoryDropdown).toContainText(data.category);
  347 |             await this.categoryDropdown.click(); // Close dropdown
  348 |         }
  349 | 
  350 |         if (data.tags && data.tags.length > 0) {
  351 |             for (const tag of data.tags) {
  352 |                 await this.tagsInput.fill(tag);
  353 |                 await this.tagsInput.press('Enter');
  354 |             }
  355 |         }
  356 | 
  357 |         if (data.status) {
  358 |             await this.selectFromDropdown(this.statusDropdown, data.status);
  359 |             await expect(this.statusDropdown).toContainText(data.status);
  360 |         }
  361 | 
  362 |         console.log('   ✅ General Information filled & verified');
  363 |     }
  364 | 
  365 |     // ── Step 2 : Descriptions ─────────────────────────────────
  366 | 
  367 |     private async fillDescriptions(data: AddProductFormData) {
  368 | 
  369 |         if (data.productDescription) {
  370 |             await this.productDescriptionEditor.click();
  371 |             await this.productDescriptionEditor.fill(data.productDescription);
  372 |             await expect(this.productDescriptionEditor).toContainText(data.productDescription);
  373 |         }
  374 | 
  375 |         if (data.invoiceDescription) {
  376 |             await this.invoiceDescriptionEditor.click();
  377 |             await this.invoiceDescriptionEditor.fill(data.invoiceDescription);
  378 |             await expect(this.invoiceDescriptionEditor).toContainText(data.invoiceDescription);
  379 |         }
  380 | 
  381 |         console.log('   ✅ Descriptions filled & verified');
  382 |     }
  383 | 
  384 |     // ── Step 3 : Media ────────────────────────────────────────
  385 | 
  386 |     private async fillMedia(data: AddProductFormData) {
  387 | 
  388 |         await expect(this.productImageDropzone).toBeVisible();
  389 | 
  390 |         if (data.productImagePath) {
  391 |             await this.productImageFileInput.setInputFiles(data.productImagePath);
  392 |             await this.page.waitForTimeout(500);
```