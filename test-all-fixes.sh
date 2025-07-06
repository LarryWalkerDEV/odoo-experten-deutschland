#!/bin/bash

echo "========================================="
echo "Testing All Fixes on Deployed Website"
echo "========================================="

BASE_URL="https://odoo-experten-deutschland-ilsoe.ondigitalocean.app"

# Test 1: Check all index pages have modern UI features
echo -e "\n1. Testing Index Pages for Modern UI Features..."
for page in "" "odoo" "odoo-hosting" "odoo-19"; do
    if [ -z "$page" ]; then
        url="$BASE_URL/"
    else
        url="$BASE_URL/$page/"
    fi
    
    echo -e "\nChecking $url..."
    response=$(curl -s "$url")
    
    # Check for modern UI elements
    if echo "$response" | grep -q "scroll-progress"; then
        echo "✓ Scroll progress bar found"
    else
        echo "✗ Scroll progress bar missing"
    fi
    
    if echo "$response" | grep -q "mobile-menu-toggle"; then
        echo "✓ Mobile menu toggle found"
    else
        echo "✗ Mobile menu toggle missing"
    fi
    
    if echo "$response" | grep -q "index-hero"; then
        echo "✓ Index hero section found"
    else
        echo "✗ Index hero section missing"
    fi
    
    if echo "$response" | grep -q "masonry-grid"; then
        echo "✓ Masonry grid layout found"
    else
        echo "✗ Masonry grid layout missing"
    fi
done

# Test 2: Check Supabase images
echo -e "\n\n2. Testing Supabase Images..."
logo_url="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png"
echo "Checking logo at: $logo_url"
logo_status=$(curl -s -o /dev/null -w "%{http_code}" "$logo_url")
if [ "$logo_status" = "200" ]; then
    echo "✓ Logo image accessible (HTTP $logo_status)"
else
    echo "✗ Logo image not accessible (HTTP $logo_status)"
fi

# Test 3: Check hosting calculator
echo -e "\n\n3. Testing Hosting Calculator..."
calc_response=$(curl -s "$BASE_URL/odoo-hosting-rechner.html")
if echo "$calc_response" | grep -q "https://ODOO4projects.com?utm_source=X5Y2I933&utm_medium=lph"; then
    echo "✓ Odoo4Projects tracking URL found"
else
    echo "✗ Odoo4Projects tracking URL missing"
fi

# Test 4: Check article pages for proper styling
echo -e "\n\n4. Testing Article Pages..."
article_url="$BASE_URL/odoo/odoo-warehouse.html"
echo "Checking article at: $article_url"
article_response=$(curl -s "$article_url")

if echo "$article_response" | grep -q "article-meta"; then
    echo "✓ Article meta section found"
    # Check if modern-styles.css is linked
    if echo "$article_response" | grep -q "modern-styles.css"; then
        echo "✓ Modern styles CSS linked"
    else
        echo "✗ Modern styles CSS not linked"
    fi
else
    echo "✗ Article meta section missing"
fi

# Test 5: Check legal pages
echo -e "\n\n5. Testing Legal Pages..."
for page in "impressum" "datenschutz" "agb" "cookie-richtlinien"; do
    url="$BASE_URL/$page.html"
    echo -e "\nChecking $url..."
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
        echo "✓ $page page accessible (HTTP $status)"
    else
        echo "✗ $page page not accessible (HTTP $status)"
    fi
done

echo -e "\n\n========================================="
echo "Test Complete!"
echo "========================================="