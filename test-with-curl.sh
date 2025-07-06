#!/bin/bash

echo "🚀 Checking website status and downloading HTML for analysis..."
echo "=================================================="

BASE_URL="https://odoo-experten-deutschland-ilsoe.ondigitalocean.app"
mkdir -p downloaded-pages

# Download key pages for analysis
pages=(
    "index.html|homepage"
    "odoo/index.html|odoo-index"
    "odoo-hosting-rechner.html|hosting-calculator"
    "odoo/odoo-warehouse.html|article-example"
)

for page_info in "${pages[@]}"; do
    IFS='|' read -r page name <<< "$page_info"
    echo "Downloading $name..."
    curl -s "${BASE_URL}/${page}" > "downloaded-pages/${name}.html"
    echo "✅ Downloaded to downloaded-pages/${name}.html"
done

echo -e "\n📊 Quick Analysis:"
echo "=================="

# Check homepage for modern styles
echo -n "Homepage has modern-styles.css: "
if grep -q "modern-styles.css" downloaded-pages/homepage.html; then
    echo "✅ Yes"
else
    echo "❌ No"
fi

# Check for logo
echo -n "Homepage has Supabase logo: "
if grep -q "https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png" downloaded-pages/homepage.html; then
    echo "✅ Yes"
else
    echo "❌ No"
fi

# Check hosting calculator
echo -n "Hosting calculator has JavaScript: "
if grep -q "hostingProviders" downloaded-pages/hosting-calculator.html && grep -q "calculateCosts" downloaded-pages/hosting-calculator.html; then
    echo "✅ Yes"
else
    echo "❌ No"
fi

echo -e "\n✅ HTML files downloaded for analysis!"