#!/bin/bash

echo "Fixing article pages to use simple styles..."

# Fix all article pages in odoo folder
find out/odoo -name "*.html" -type f ! -name "index.html" -exec sed -i 's/href="..\/css\/modern-styles.css"/href="..\/css\/styles.css"/g' {} \;

# Fix all article pages in odoo-hosting folder
find out/odoo-hosting -name "*.html" -type f ! -name "index.html" -exec sed -i 's/href="..\/css\/modern-styles.css"/href="..\/css\/styles.css"/g' {} \;

# Fix all article pages in odoo-19 folder
find out/odoo-19 -name "*.html" -type f ! -name "index.html" -exec sed -i 's/href="..\/css\/modern-styles.css"/href="..\/css\/styles.css"/g' {} \;

echo "Done! Updated all article pages to use simple styles.css"