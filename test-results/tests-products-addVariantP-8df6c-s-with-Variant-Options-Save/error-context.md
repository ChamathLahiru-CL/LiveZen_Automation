# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\products\addVariantProductForm.spec.ts >> Add Product - E2E Workflow Tests Variant Products >> TC_02 | Variant Product | Fill all sections with Variant Options & Save
- Location: tests\products\addVariantProductForm.spec.ts:183:9

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
                    - text: test123
                - generic [ref=e207]:
                  - generic [ref=e208]: Secondary Name
                  - textbox "Secondary Name" [ref=e209]:
                    - /placeholder: Enter secondary name
                    - text: test123
              - generic [ref=e210]:
                - generic [ref=e211]:
                  - generic [ref=e212]:
                    - generic [ref=e213]: Slug*
                    - button "Generate from Name" [ref=e214] [cursor=pointer]
                  - textbox "Slug*" [ref=e215]:
                    - /placeholder: Enter slug
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
                      - generic [ref=e232]: Test 1 -> uim2
                    - generic:
                      - img
              - generic [ref=e233]:
                - generic [ref=e234]:
                  - generic [ref=e235]: Tags
                  - generic [ref=e236]:
                    - generic [ref=e237]:
                      - text: adidas
                      - button [ref=e238] [cursor=pointer]:
                        - img [ref=e239]
                    - generic [ref=e241]:
                      - text: variant
                      - button [ref=e242] [cursor=pointer]:
                        - img [ref=e243]
                    - generic [ref=e245]:
                      - text: boost
                      - button [ref=e246] [cursor=pointer]:
                        - img [ref=e247]
                    - textbox "Tags" [ref=e249]:
                      - /placeholder: ""
                  - generic [ref=e250]: Press Enter or comma to add tags
                - generic [ref=e251]:
                  - generic [ref=e252]: Status*
                  - generic [ref=e253]:
                    - button "Status*" [ref=e254] [cursor=pointer]:
                      - generic [ref=e255]: Active
                    - generic:
                      - img
            - generic [ref=e256]:
              - heading "Descriptions" [level=2] [ref=e257]
              - generic [ref=e259]:
                - generic [ref=e260]: Product Description
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - button "Write" [ref=e263] [cursor=pointer]
                    - button "Preview" [ref=e264] [cursor=pointer]
                  - generic [ref=e265]:
                    - generic [ref=e266]:
                      - button "Bold" [ref=e267] [cursor=pointer]:
                        - img [ref=e268]
                      - button "Italic" [ref=e270] [cursor=pointer]:
                        - img [ref=e271]
                      - button "Strikethrough" [ref=e273] [cursor=pointer]:
                        - img [ref=e274]
                      - button "Heading 1" [ref=e278] [cursor=pointer]:
                        - img [ref=e279]
                      - button "Heading 2" [ref=e281] [cursor=pointer]:
                        - img [ref=e282]
                      - button "Heading 3" [ref=e284] [cursor=pointer]:
                        - img [ref=e285]
                      - button "Bullet List" [ref=e289] [cursor=pointer]:
                        - img [ref=e290]
                      - button "Numbered List" [ref=e291] [cursor=pointer]:
                        - img [ref=e292]
                      - button "Quote" [ref=e296] [cursor=pointer]:
                        - img [ref=e297]
                      - button "Code Block" [ref=e300] [cursor=pointer]:
                        - img [ref=e301]
                      - button "Link" [ref=e305] [cursor=pointer]:
                        - img [ref=e306]
                    - textbox [ref=e310]:
                      - paragraph [ref=e311]: Adidas Ultra Boost with multiple variant options.
                  - generic [ref=e313]: Rich text formatting supported
              - generic [ref=e315]:
                - generic [ref=e316]: Product Description for Invoice
                - generic [ref=e317]:
                  - generic [ref=e318]:
                    - button "Write" [ref=e319] [cursor=pointer]
                    - button "Preview" [ref=e320] [cursor=pointer]
                  - generic [ref=e321]:
                    - generic [ref=e322]:
                      - button "Bold" [ref=e323] [cursor=pointer]:
                        - img [ref=e324]
                      - button "Italic" [ref=e326] [cursor=pointer]:
                        - img [ref=e327]
                      - button "Strikethrough" [ref=e329] [cursor=pointer]:
                        - img [ref=e330]
                      - button "Heading 1" [ref=e334] [cursor=pointer]:
                        - img [ref=e335]
                      - button "Heading 2" [ref=e337] [cursor=pointer]:
                        - img [ref=e338]
                      - button "Heading 3" [ref=e340] [cursor=pointer]:
                        - img [ref=e341]
                      - button "Bullet List" [ref=e345] [cursor=pointer]:
                        - img [ref=e346]
                      - button "Numbered List" [ref=e347] [cursor=pointer]:
                        - img [ref=e348]
                      - button "Quote" [ref=e352] [cursor=pointer]:
                        - img [ref=e353]
                      - button "Code Block" [ref=e356] [cursor=pointer]:
                        - img [ref=e357]
                      - button "Link" [ref=e361] [cursor=pointer]:
                        - img [ref=e362]
                    - textbox [ref=e366]:
                      - paragraph [ref=e367]: Adidas Ultra Boost
                  - generic [ref=e369]: Rich text formatting supported
            - generic [ref=e370]:
              - heading "Media" [level=2] [ref=e371]
              - generic [ref=e373]:
                - generic [ref=e374]: Product Image
                - generic [ref=e376]:
                  - generic [ref=e377] [cursor=pointer]:
                    - button "Choose File" [ref=e378]
                    - generic [ref=e379]:
                      - img "Upload Icon" [ref=e380]
                      - heading "Drag and drop an image here, or click to upload" [level=5] [ref=e381]
                  - list [ref=e382]:
                    - listitem [ref=e383]:
                      - generic [ref=e385]:
                        - img "mock-product-image.png" [ref=e388]
                        - generic [ref=e390]:
                          - heading "mock-product-image.png" [level=5] [ref=e391]
                          - paragraph [ref=e392]: 70Bytes
                        - button "Delete" [ref=e394] [cursor=pointer]
            - generic [ref=e395]:
              - heading "Pricing & Inventory" [level=2] [ref=e396]
              - generic [ref=e397]:
                - generic [ref=e398]:
                  - generic [ref=e399]: Product Cost*
                  - spinbutton "Product Cost*" [ref=e400]: "90"
                - generic [ref=e401]:
                  - generic [ref=e402]: Product Price*
                  - spinbutton "Product Price*" [ref=e403]: "180"
                - generic [ref=e404]:
                  - generic [ref=e405]: Product Tax
                  - generic [ref=e406]:
                    - button "Product Tax" [ref=e407] [cursor=pointer]:
                      - generic [ref=e408]: Select tax
                    - generic:
                      - img
              - generic [ref=e409]:
                - generic [ref=e410]:
                  - generic [ref=e411]: Product Unit
                  - generic [ref=e412]:
                    - button "Product Unit" [ref=e413] [cursor=pointer]:
                      - generic [ref=e414]: Select unit
                    - generic:
                      - img
                - generic [ref=e415]:
                  - generic [ref=e416]: Default Sale Unit
                  - generic [ref=e417]:
                    - button "Default Sale Unit" [ref=e418] [cursor=pointer]:
                      - generic [ref=e419]: Select sale unit
                    - generic:
                      - img
                - generic [ref=e420]:
                  - generic [ref=e421]: Default Purchase Unit
                  - generic [ref=e422]:
                    - button "Default Purchase Unit" [ref=e423] [cursor=pointer]:
                      - generic [ref=e424]: Select purchase unit
                    - generic:
                      - img
              - generic [ref=e426]:
                - generic [ref=e427]: Alert Quantity*
                - spinbutton "Alert Quantity*" [ref=e428]: "5"
            - generic [ref=e429]:
              - heading "Visibility" [level=2] [ref=e430]
              - generic [ref=e431]:
                - generic [ref=e433]:
                  - switch "Web Visibility" [checked] [ref=e434] [cursor=pointer]:
                    - generic [ref=e435]: Web Visibility
                  - generic [ref=e437]: Web Visibility
                - generic [ref=e439]:
                  - switch "POS Visibility" [ref=e440] [cursor=pointer]:
                    - generic [ref=e441]: POS Visibility
                  - generic [ref=e443]: POS Visibility
          - generic [ref=e444]:
            - heading "Search Engine Optimization (SEO)" [level=2] [ref=e445]
            - generic [ref=e446]:
              - generic [ref=e447]:
                - generic [ref=e448]: Product Meta Title
                - textbox "Product Meta Title" [ref=e449]:
                  - /placeholder: Enter product meta title
              - generic [ref=e450]:
                - generic [ref=e451]: Meta Description
                - textbox "Meta Description" [ref=e452]:
                  - /placeholder: Enter meta description
            - generic [ref=e454]:
              - generic [ref=e455]: Meta Keywords
              - textbox "Meta Keywords" [ref=e457]:
                - /placeholder: Enter meta keywords
              - generic [ref=e458]: Press Enter or comma to add tags
          - generic [ref=e459]:
            - generic [ref=e460]:
              - generic [ref=e461]:
                - heading "Variant Options" [level=2] [ref=e462]
                - paragraph [ref=e463]: Check necessary Variant Options from following options.
                - group [ref=e466]:
                  - group "variant_options" [ref=e467]:
                    - generic [ref=e468] [cursor=pointer]:
                      - checkbox "Color" [checked] [ref=e469]
                      - generic [ref=e471]: Color
                    - generic [ref=e472] [cursor=pointer]:
                      - checkbox "Material" [ref=e473]
                      - generic [ref=e475]: Material
                    - generic [ref=e476] [cursor=pointer]:
                      - checkbox "Pattern" [ref=e477]
                      - generic [ref=e479]: Pattern
                    - generic [ref=e480] [cursor=pointer]:
                      - checkbox "Size" [checked] [ref=e481]
                      - generic [ref=e483]: Size
                    - generic [ref=e484] [cursor=pointer]:
                      - checkbox "Style" [ref=e485]
                      - generic [ref=e487]: Style
              - generic [ref=e488]:
                - generic [ref=e489]:
                  - generic [ref=e490]:
                    - heading "Variants" [level=4] [ref=e491]
                    - paragraph [ref=e492]: Fill the values under each variant column.
                  - button "Add Variant" [ref=e493] [cursor=pointer]
                - table [ref=e496]:
                  - rowgroup [ref=e505]:
                    - row "# Color Size SKU * Unit Price Product Cost Variant Image" [ref=e506]:
                      - columnheader "#" [ref=e507]
                      - columnheader "Color" [ref=e508]
                      - columnheader "Size" [ref=e509]
                      - columnheader "SKU *" [ref=e510]:
                        - text: SKU
                        - generic [ref=e511]: "*"
                      - columnheader "Unit Price" [ref=e512]
                      - columnheader "Product Cost" [ref=e513]
                      - columnheader "Variant Image" [ref=e514]
                      - columnheader [ref=e515]
                  - rowgroup [ref=e516]:
                    - 'row "1 Click to open color picker #FF0000 AD-UB-1778663265715 Upload placeholder" [ref=e517]':
                      - cell "1" [ref=e518]
                      - 'cell "Click to open color picker #FF0000" [ref=e519]':
                        - generic [ref=e523]:
                          - generic "Click to open color picker" [ref=e524] [cursor=pointer]
                          - textbox "#FF0000" [ref=e525]
                      - cell [ref=e526]:
                        - generic [ref=e530]:
                          - button [ref=e531] [cursor=pointer]:
                            - generic [ref=e532]: Select Size
                          - generic:
                            - img
                      - cell "AD-UB-1778663265715" [ref=e533]:
                        - textbox "Enter SKU" [ref=e534]: AD-UB-1778663265715
                      - cell [ref=e535]:
                        - spinbutton [ref=e536]
                      - cell [ref=e537]:
                        - spinbutton [ref=e538]
                      - cell "Upload placeholder" [ref=e539]:
                        - img "Upload placeholder" [ref=e544] [cursor=pointer]
                      - cell [ref=e545]:
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
                        - text: AD-UB-1778663265715
                    - generic [ref=e558]:
                      - generic [ref=e559]: Barcode
                      - textbox "Barcode" [ref=e560]:
                        - /placeholder: Enter barcode
                        - text: "1234567890123"
                    - generic [ref=e561]:
                      - generic [ref=e562]: Quantity
                      - spinbutton "Quantity" [ref=e563]: "100.00"
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