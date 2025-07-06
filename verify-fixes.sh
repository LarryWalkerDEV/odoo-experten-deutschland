#!/bin/bash

echo "========================================="
echo "Verifying All Fixes"
echo "========================================="

echo -e "\n1. Checking Homepage..."
if grep -q "Ihr unabhängiges Wissensportal für Odoo ERP" out/index.html && grep -q "css/styles.css" out/index.html; then
    echo "✓ Homepage uses original simple design"
else
    echo "✗ Homepage issue"
fi

echo -e "\n2. Checking Index Pages..."
for page in "odoo-hosting" "odoo-19"; do
    if grep -q "article-layout" out/$page/index.html && grep -q "css/styles.css" out/$page/index.html; then
        echo "✓ $page/index.html uses simple layout"
    else
        echo "✗ $page/index.html issue"
    fi
done

echo -e "\n3. Checking Article Pages..."
article_page="out/odoo/odoo-warehouse.html"
if grep -q "<h1>" $article_page; then
    echo "✓ H1 tag present in article"
else
    echo "✗ H1 tag missing in article"
fi

if grep -q "css/styles.css" $article_page; then
    echo "✓ Article uses simple styles.css"
else
    echo "✗ Article still uses modern-styles.css"
fi

echo -e "\n4. Checking CSS..."
if grep -q "article-layout .article-meta.*display: none !important" out/css/modern-styles.css; then
    echo "✓ Article-meta hidden on article pages"
else
    echo "✗ Article-meta CSS issue"
fi

echo -e "\n5. Checking Logos..."
for page in "index.html" "odoo/index.html" "odoo-hosting/index.html" "odoo-19/index.html"; do
    if grep -q "tbppogohivsxgiavbnvp.supabase.co" out/$page; then
        echo "✓ Logo present in $page"
    else
        echo "✗ Logo missing in $page"
    fi
done

echo -e "\n========================================="
echo "Verification Complete!"
echo "========================================="