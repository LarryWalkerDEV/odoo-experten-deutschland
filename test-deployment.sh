#!/bin/bash

echo "🚀 Testing Odoo Experten Deutschland deployment..."
echo "=============================================="

BASE_URL="https://odoo-experten-deutschland-ilsoe.ondigitalocean.app"

# Array of pages to test
declare -a pages=(
    "/"
    "/odoo/index.html"
    "/odoo/odoo-warehouse.html"
    "/odoo-19/index.html"
    "/odoo-hosting/index.html"
    "/odoo-hosting-rechner.html"
    "/impressum.html"
    "/cookie-richtlinien.html"
    "/datenschutz.html"
    "/agb.html"
)

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

success_count=0
fail_count=0

echo -e "\n📍 Testing ${#pages[@]} pages...\n"

for page in "${pages[@]}"; do
    url="${BASE_URL}${page}"
    echo -n "Testing: $url ... "
    
    # Get HTTP status code
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status_code" = "200" ]; then
        # Check for specific content
        content=$(curl -s "$url")
        
        issues=""
        
        # Check for logo
        if ! echo "$content" | grep -q "https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png"; then
            issues="Logo not found"
        fi
        
        # Check for modern-styles.css
        if ! echo "$content" | grep -q "modern-styles.css"; then
            if [ -z "$issues" ]; then
                issues="modern-styles.css not found"
            else
                issues="$issues, modern-styles.css not found"
            fi
        fi
        
        # Check for author images on article pages
        if [[ "$page" == *"odoo-warehouse"* ]]; then
            if ! echo "$content" | grep -q "klaus-weber.jpg.png"; then
                if [ -z "$issues" ]; then
                    issues="Author image not found"
                else
                    issues="$issues, Author image not found"
                fi
            fi
        fi
        
        if [ -z "$issues" ]; then
            echo -e "${GREEN}✅ OK${NC}"
            ((success_count++))
        else
            echo -e "${YELLOW}⚠️  OK but issues: $issues${NC}"
            ((success_count++))
        fi
    else
        echo -e "${RED}❌ Failed (HTTP $status_code)${NC}"
        ((fail_count++))
    fi
done

echo -e "\n=============================================="
echo "📊 SUMMARY"
echo "=============================================="
echo -e "Total pages tested: ${#pages[@]}"
echo -e "${GREEN}✅ Successful: $success_count${NC}"
echo -e "${RED}❌ Failed: $fail_count${NC}"

# Check specific features
echo -e "\n🔍 Checking specific features..."

# Check hosting calculator
echo -n "Hosting calculator functionality: "
calc_content=$(curl -s "${BASE_URL}/odoo-hosting-rechner.html")
if echo "$calc_content" | grep -q "hostingProviders" && echo "$calc_content" | grep -q "calculateCosts"; then
    echo -e "${GREEN}✅ JavaScript found${NC}"
else
    echo -e "${RED}❌ JavaScript missing${NC}"
fi

# Check impressum for company details
echo -n "Impressum company details: "
impressum_content=$(curl -s "${BASE_URL}/impressum.html")
if echo "$impressum_content" | grep -q "Apex AI Research Labs LLC" && echo "$impressum_content" | grep -q "Olga Goertz"; then
    echo -e "${GREEN}✅ Correct company info${NC}"
else
    echo -e "${RED}❌ Company info missing${NC}"
fi

echo -e "\n✅ Deployment test completed!"