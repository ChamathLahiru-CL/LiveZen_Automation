# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\products\addProduct.spec.ts >> Add Product - Full Form Fill E2E
- Location: tests\products\addProduct.spec.ts:7:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: getByText('Piece', { exact: true }) resolved to 2 elements:
    1) <span class="block truncate">Piece</span> aka getByRole('button', { name: 'Product Unit' })
    2) <button type="button" role="option" aria-selected="false" class="w-full px-3 py-2 text-left text-[14px] hover:bg-blue-50 dark:hover:bg-zink-500 ↵                      focus:bg-blue-50 dark:focus:bg-zink-500 focus:outline-none transition-colors duration-150↵                      text-gray-700 dark:text-zink-100">Piece</button> aka getByRole('option', { name: 'Piece' })

Call log:
  - waiting for getByText('Piece', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - button "61" [ref=e145] [cursor=pointer]:
            - img [ref=e146]
            - generic [ref=e149]: "61"
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
                        - generic [ref=e192]: Single Product
                      - generic:
                        - img
                  - generic [ref=e193]:
                    - generic [ref=e194]: Product Code*
                    - generic [ref=e195]:
                      - textbox "Product Code*" [ref=e196]:
                        - /placeholder: Auto-generated
                        - text: PROD00019
                      - button "Generate new code" [ref=e197] [cursor=pointer]:
                        - img [ref=e198]
                - generic [ref=e203]:
                  - generic [ref=e204]:
                    - generic [ref=e205]: Product Name*
                    - textbox "Product Name*" [ref=e206]:
                      - /placeholder: Enter product name
                      - text: ABCD Air Max 2024
                  - generic [ref=e207]:
                    - generic [ref=e208]: Secondary Name
                    - textbox "Secondary Name" [ref=e209]:
                      - /placeholder: Enter secondary name
                      - text: Air Max
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]:
                      - generic [ref=e213]: Slug*
                      - button "Generate from Name" [ref=e214] [cursor=pointer]
                    - textbox "Slug*" [ref=e215]:
                      - /placeholder: Enter slug
                      - text: abcd-air-max-2024
                    - paragraph [ref=e216]: Lowercase letters, numbers, and hyphens allowed
                  - generic [ref=e217]:
                    - generic [ref=e218]: Barcode Symbology
                    - generic [ref=e219]:
                      - button "Barcode Symbology" [ref=e220] [cursor=pointer]:
                        - generic [ref=e221]: CODE128
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
                    - generic [ref=e236]:
                      - generic [ref=e237]:
                        - text: nike
                        - button [ref=e238] [cursor=pointer]:
                          - img [ref=e239]
                      - generic [ref=e241]:
                        - text: shoes
                        - button [ref=e242] [cursor=pointer]:
                          - img [ref=e243]
                      - generic [ref=e245]:
                        - text: sports
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
                        - paragraph [ref=e311]: Premium ABCD Air Max sneakers.
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
                        - paragraph [ref=e367]: ABCD Air Max 2024 - Premium Edition
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
                    - list
              - generic [ref=e382]:
                - heading "Pricing & Inventory" [level=2] [ref=e383]
                - generic [ref=e384]:
                  - generic [ref=e385]:
                    - generic [ref=e386]: Product Cost*
                    - spinbutton "Product Cost*" [ref=e387]: "80"
                  - generic [ref=e388]:
                    - generic [ref=e389]: Product Price*
                    - spinbutton "Product Price*" [ref=e390]: "150"
                  - generic [ref=e391]:
                    - generic [ref=e392]: Product Tax
                    - generic [ref=e393]:
                      - button "Product Tax" [ref=e394] [cursor=pointer]:
                        - generic [ref=e395]: Standard VAT (19%)
                      - generic:
                        - img
                - generic [ref=e396]:
                  - generic [ref=e397]:
                    - generic [ref=e398]: Product Unit
                    - generic [ref=e399]:
                      - button "Product Unit" [ref=e400] [cursor=pointer]:
                        - generic [ref=e401]: Piece
                      - generic:
                        - img
                  - generic [ref=e402]:
                    - generic [ref=e403]: Default Sale Unit
                    - generic [ref=e404]:
                      - button "Default Sale Unit" [expanded] [ref=e405] [cursor=pointer]:
                        - generic [ref=e406]: Select sale unit
                      - generic:
                        - img
                      - generic [ref=e407]:
                        - textbox "Search options..." [active] [ref=e409]: Piece
                        - option "Piece" [ref=e411] [cursor=pointer]
                  - generic [ref=e412]:
                    - generic [ref=e413]: Default Purchase Unit
                    - generic [ref=e414]:
                      - button "Default Purchase Unit" [ref=e415] [cursor=pointer]:
                        - generic [ref=e416]: Select purchase unit
                      - generic:
                        - img
                - generic [ref=e418]:
                  - generic [ref=e419]: Alert Quantity*
                  - spinbutton "Alert Quantity*" [ref=e420]
              - generic [ref=e421]:
                - heading "Visibility" [level=2] [ref=e422]
                - generic [ref=e423]:
                  - generic [ref=e425]:
                    - switch "Web Visibility" [checked] [ref=e426] [cursor=pointer]:
                      - generic [ref=e427]: Web Visibility
                    - generic [ref=e429]: Web Visibility
                  - generic [ref=e431]:
                    - switch "POS Visibility" [checked] [ref=e432] [cursor=pointer]:
                      - generic [ref=e433]: POS Visibility
                    - generic [ref=e435]: POS Visibility
            - generic [ref=e436]:
              - heading "Search Engine Optimization (SEO)" [level=2] [ref=e437]
              - generic [ref=e438]:
                - generic [ref=e439]:
                  - generic [ref=e440]: Product Meta Title
                  - textbox "Product Meta Title" [ref=e441]:
                    - /placeholder: Enter product meta title
                - generic [ref=e442]:
                  - generic [ref=e443]: Meta Description
                  - textbox "Meta Description" [ref=e444]:
                    - /placeholder: Enter meta description
              - generic [ref=e446]:
                - generic [ref=e447]: Meta Keywords
                - textbox "Meta Keywords" [ref=e449]:
                  - /placeholder: Enter meta keywords
                - generic [ref=e450]: Press Enter or comma to add tags
            - generic [ref=e452]:
              - generic [ref=e453]:
                - heading "Inventory" [level=2] [ref=e454]
                - generic [ref=e455]:
                  - generic [ref=e456]:
                    - generic [ref=e457]:
                      - generic [ref=e458]: SKU*
                      - textbox "SKU*" [ref=e459]:
                        - /placeholder: Enter SKU
                    - generic [ref=e460]:
                      - generic [ref=e461]: Barcode
                      - textbox "Barcode" [ref=e462]:
                        - /placeholder: Enter barcode
                    - generic [ref=e463]:
                      - generic [ref=e464]: Quantity
                      - spinbutton "Quantity" [ref=e465]
                  - generic [ref=e466]:
                    - generic [ref=e468]:
                      - checkbox "Manage Inventory" [ref=e469] [cursor=pointer]
                      - generic [ref=e470] [cursor=pointer]: Manage Inventory
                    - generic [ref=e472]:
                      - checkbox "Allow Backorder" [ref=e473] [cursor=pointer]
                      - generic [ref=e474] [cursor=pointer]: Allow Backorder
                    - generic [ref=e476]:
                      - checkbox "Stock Tracking" [ref=e477] [cursor=pointer]
                      - generic [ref=e478] [cursor=pointer]: Stock Tracking
              - generic [ref=e479]:
                - heading "Shipping" [level=2] [ref=e480]
                - generic [ref=e481]:
                  - generic [ref=e482]:
                    - generic [ref=e483]:
                      - generic [ref=e484]: Length
                      - spinbutton "Length" [ref=e485]
                    - generic [ref=e486]:
                      - generic [ref=e487]: Height
                      - spinbutton "Height" [ref=e488]
                    - generic [ref=e489]:
                      - generic [ref=e490]: Width
                      - spinbutton "Width" [ref=e491]
                  - generic [ref=e492]:
                    - generic [ref=e493]:
                      - generic [ref=e494]: Weight
                      - spinbutton "Weight" [ref=e495]
                    - generic [ref=e496]:
                      - generic [ref=e497]: Shipping Class
                      - generic [ref=e498]:
                        - button "Shipping Class" [ref=e499] [cursor=pointer]:
                          - generic [ref=e500]: Select Shipping Class
                        - generic:
                          - img
                    - generic [ref=e501]:
                      - generic [ref=e502]: Fulfillment Location
                      - generic [ref=e503]:
                        - button "Fulfillment Location" [ref=e504] [cursor=pointer]:
                          - generic [ref=e505]: Select fulfillment location
                        - generic:
                          - img
              - generic [ref=e506]:
                - heading "Tax Pricing" [level=2] [ref=e507]
                - generic [ref=e508]:
                  - generic [ref=e509]:
                    - generic [ref=e510]:
                      - generic [ref=e511]: Cost Price
                      - spinbutton "Cost Price" [ref=e512]
                    - generic [ref=e513]:
                      - generic [ref=e514]: Sale Price
                      - spinbutton "Sale Price" [ref=e515]
                    - generic [ref=e516]:
                      - generic [ref=e517]: Compare Price
                      - spinbutton "Compare Price" [ref=e518]
                  - generic [ref=e520]:
                    - generic [ref=e521]: Discount Rules
                    - textbox "Discount Rules" [ref=e522]:
                      - /placeholder: Enter Discount Rules as JSON
          - generic [ref=e524]:
            - button "Reset" [ref=e525] [cursor=pointer]:
              - img [ref=e526]
              - generic [ref=e529]: Reset
            - button "Save and Edit" [ref=e530] [cursor=pointer]:
              - img [ref=e531]
              - generic [ref=e533]: Save and Edit
            - button "Save" [ref=e534] [cursor=pointer]:
              - img [ref=e535]
              - generic [ref=e537]: Save
      - contentinfo [ref=e538]:
        - generic [ref=e539]:
          - generic [ref=e540]:
            - text: © 2026 Shopbox. All rights reserved.
            - generic [ref=e541]: "| v2.0.7"
          - link "Developed and enhanced by Livezen Technologies" [ref=e543] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e544]: $ 0.00
```

# Test source

```ts
  286 |         this.invoiceDescriptionH1Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 1']");
  287 |         this.invoiceDescriptionH2Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 2']");
  288 |         this.invoiceDescriptionH3Button = page.locator("div.tiptap-editor-container").last().locator("button[title='Heading 3']");
  289 |         this.invoiceDescriptionBulletListButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Bullet List']");
  290 |         this.invoiceDescriptionNumberedListButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Numbered List']");
  291 |         this.invoiceDescriptionQuoteButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Quote']");
  292 |         this.invoiceDescriptionCodeBlockButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Code Block']");
  293 |         this.invoiceDescriptionLinkButton = page.locator("div.tiptap-editor-container").last().locator("button[title='Link']");
  294 | 
  295 |         // ─── Media Section ────────────────────────────────────────────────────
  296 |         this.mediaSection = page.locator("section:has(h2:text('Media'))");
  297 |         this.productImageDropzone = page.locator("div.dropzone");
  298 |         this.productImageFileInput = page.locator("input[type='file'][accept='image/jpeg,image/jpg,image/png,image/webp']");
  299 | 
  300 |         // ─── Pricing & Inventory Section ──────────────────────────────────────
  301 |         this.pricingInventorySection = page.locator("section:has(h2:text('Pricing & Inventory'))");
  302 |         this.productCostInput = page.locator("input#costPrice[name='costPrice']");
  303 |         this.productPriceInput = page.locator("input#salePrice[name='salePrice']");
  304 |         this.taxDropdown = page.locator("button#taxId");
  305 |         this.taxHiddenInput = page.locator("input[name='taxId']");
  306 |         this.unitDropdown = page.locator("button#unitId");
  307 |         this.unitHiddenInput = page.locator("input[name='unitId']");
  308 |         this.saleUnitDropdown = page.locator("button#saleUnitId");
  309 |         this.saleUnitHiddenInput = page.locator("input[name='saleUnitId']");
  310 |         this.purchaseUnitDropdown = page.locator("button#purchaseUnitId");
  311 |         this.purchaseUnitHiddenInput = page.locator("input[name='purchaseUnitId']");
  312 |         this.alertQuantityInput = page.locator("input#alertQuantity[name='alertQuantity']");
  313 | 
  314 |         // ─── Visibility Section ───────────────────────────────────────────────
  315 |         this.visibilitySection = page.locator("section:has(h2:text('Visibility'))");
  316 |         this.webVisibilityToggle = page.locator("button#headlessui-switch-_r_b_");
  317 |         this.posVisibilityToggle = page.locator("button#headlessui-switch-_r_c_");
  318 | 
  319 |         // ─── SEO Section ──────────────────────────────────────────────────────
  320 |         this.seoSection = page.locator("section:has(h2:text('Search Engine Optimization (SEO)'))");
  321 |         this.metaTitleInput = page.locator("input#meta_title[name='meta_title']");
  322 |         this.metaDescriptionInput = page.locator("input#meta_description[name='meta_description']");
  323 |         this.metaKeywordsInput = page.locator("input#meta_keywords[name='meta_keywords']");
  324 | 
  325 |         // ─── Inventory Section ────────────────────────────────────────────────
  326 |         this.inventorySection = page.locator("section:has(h2:text('Inventory'))");
  327 |         this.skuInput = page.locator("input#sku[name='sku']");
  328 |         this.barcodeInput = page.locator("input#barcode[name='barcode']");
  329 |         this.quantityInput = page.locator("input#quantity[name='quantity']");
  330 |         this.manageInventoryCheckbox = page.locator("input#manage_inventory[name='manage_inventory']");
  331 |         this.allowBackorderCheckbox = page.locator("input#allow_backorder[name='allow_backorder']");
  332 |         this.stockTrackingCheckbox = page.locator("input#stock_tracking[name='stock_tracking']");
  333 | 
  334 |         // ─── Shipping Section ─────────────────────────────────────────────────
  335 |         this.shippingSection = page.locator("section:has(h2:text('Shipping'))");
  336 |         this.lengthInput = page.locator("input#length[name='length']");
  337 |         this.heightInput = page.locator("input#height[name='height']");
  338 |         this.widthInput = page.locator("input#width[name='width']");
  339 |         this.weightInput = page.locator("input#weight[name='weight']");
  340 |         this.shippingClassDropdown = page.locator("button#shipping_class_id");
  341 |         this.shippingClassHiddenInput = page.locator("input[name='shipping_class_id']");
  342 |         this.fulfillmentLocationDropdown = page.locator("button#fulfillment_location");
  343 |         this.fulfillmentLocationHiddenInput = page.locator("input[name='fulfillment_location']");
  344 | 
  345 |         // ─── Tax Pricing Section ──────────────────────────────────────────────
  346 |         this.taxPricingSection = page.locator("section:has(h2:text('Tax Pricing'))");
  347 |         this.taxCostPriceInput = page.locator("input#cost_price[name='cost_price']");
  348 |         this.taxSalePriceInput = page.locator("input#sale_price[name='sale_price']");
  349 |         this.comparePriceInput = page.locator("input#compare_price[name='compare_price']");
  350 |         this.discountRulesTextarea = page.locator("textarea#discount_rules[name='discount_rules']");
  351 | 
  352 |         // ─── Form Action Buttons ──────────────────────────────────────────────
  353 |         this.resetButton = page.locator("//button[.//span[text()='Reset']]");
  354 |         this.saveAndEditButton = page.locator("//button[.//span[text()='Save and Edit']]");
  355 |         this.saveButton = page.locator("//button[.//span[text()='Save']]");
  356 |     }
  357 | 
  358 |     // =========================================================================
  359 |     // ─── GOTO ─────────────────────────────────────────────────────────────────
  360 |     // =========================================================================
  361 | 
  362 |     async goto() {
  363 |         await this.page.goto('/products/create');
  364 |     }
  365 | 
  366 |     // =========================================================================
  367 |     // ─── UPDATED DROPDOWN HELPER ──────────────────────────────────────────────
  368 |     // =========================================================================
  369 | 
  370 |     /**
  371 |      * Universal dropdown selection method.
  372 |      * - Clicks the dropdown button to open it
  373 |      * - If a search input is visible, fills it with the option text
  374 |      * - Scrolls to and clicks the matching option by exact text
  375 |      */
  376 |     async selectFromDropdown(dropdown: Locator, optionText: string) {
  377 |         await dropdown.click();
  378 | 
  379 |         const dropdownOption = this.page.getByText(optionText, { exact: true });
  380 |         const searchInput = this.page.locator("input[placeholder='Search options...']");
  381 | 
  382 |         if (await searchInput.isVisible()) {
  383 |             await searchInput.fill(optionText);
  384 |         }
  385 | 
> 386 |         await dropdownOption.scrollIntoViewIfNeeded();
      |                              ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: getByText('Piece', { exact: true }) resolved to 2 elements:
  387 |         await dropdownOption.click();
  388 |     }
  389 | 
  390 |     // =========================================================================
  391 |     // ─── GENERAL INFORMATION METHODS ──────────────────────────────────────────
  392 |     // =========================================================================
  393 | 
  394 |     async selectProductType(optionText: string) {
  395 |         await this.selectFromDropdown(this.productTypeDropdown, optionText);
  396 |     }
  397 | 
  398 |     async fillProductCode(code: string) {
  399 |         await this.productCodeInput.clear();
  400 |         await this.productCodeInput.fill(code);
  401 |     }
  402 | 
  403 |     async generateNewProductCode() {
  404 |         await this.generateProductCodeButton.click();
  405 |     }
  406 | 
  407 |     async fillProductName(name: string) {
  408 |         await this.productNameInput.fill(name);
  409 |     }
  410 | 
  411 |     async fillSecondaryName(name: string) {
  412 |         await this.secondaryNameInput.fill(name);
  413 |     }
  414 | 
  415 |     async fillSlug(slug: string) {
  416 |         await this.slugInput.fill(slug);
  417 |     }
  418 | 
  419 |     async selectBarcodeSymbology(optionText: string) {
  420 |         await this.selectFromDropdown(this.barcodeSymbologyDropdown, optionText);
  421 |     }
  422 | 
  423 |     async selectBrand(optionText: string) {
  424 |         await this.selectFromDropdown(this.brandDropdown, optionText);
  425 |     }
  426 | 
  427 |     async selectCategory(optionText: string) {
  428 |         await this.selectFromDropdown(this.categoryDropdown, optionText);
  429 |         await this.categoryDropdown.click(); // Click again to close dropdown after selection
  430 |     }
  431 | 
  432 |     async addTag(tag: string) {
  433 |         await this.tagsInput.fill(tag);
  434 |         await this.tagsInput.press('Enter');
  435 |     }
  436 | 
  437 |     async selectStatus(optionText: string) {
  438 |         await this.selectFromDropdown(this.statusDropdown, optionText);
  439 |     }
  440 | 
  441 |     // =========================================================================
  442 |     // ─── DESCRIPTIONS METHODS ─────────────────────────────────────────────────
  443 |     // =========================================================================
  444 | 
  445 |     async fillProductDescription(text: string) {
  446 |         await this.productDescriptionEditor.click();
  447 |         await this.productDescriptionEditor.fill(text);
  448 |     }
  449 | 
  450 |     async fillInvoiceDescription(text: string) {
  451 |         await this.invoiceDescriptionEditor.click();
  452 |         await this.invoiceDescriptionEditor.fill(text);
  453 |     }
  454 | 
  455 |     // =========================================================================
  456 |     // ─── MEDIA METHODS ────────────────────────────────────────────────────────
  457 |     // =========================================================================
  458 | 
  459 |     async uploadProductImage(filePath: string) {
  460 |         await this.productImageFileInput.setInputFiles(filePath);
  461 |     }
  462 | 
  463 |     // =========================================================================
  464 |     // ─── PRICING & INVENTORY METHODS ──────────────────────────────────────────
  465 |     // =========================================================================
  466 | 
  467 |     async fillProductCost(cost: string) {
  468 |         await this.productCostInput.fill(cost);
  469 |     }
  470 | 
  471 |     async fillProductPrice(price: string) {
  472 |         await this.productPriceInput.fill(price);
  473 |     }
  474 | 
  475 |     async selectProductTax(optionText: string) {
  476 |         await this.selectFromDropdown(this.taxDropdown, optionText);
  477 |     }
  478 | 
  479 |     async selectProductUnit(optionText: string) {
  480 |         await this.selectFromDropdown(this.unitDropdown, optionText);
  481 |     }
  482 | 
  483 |     async selectSaleUnit(optionText: string) {
  484 |         await this.selectFromDropdown(this.saleUnitDropdown, optionText);
  485 |     }
  486 | 
```