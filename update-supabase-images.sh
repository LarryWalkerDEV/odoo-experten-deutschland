#!/bin/bash

# Update logo in all HTML files
echo "Updating logo across all HTML files..."
find out -name "*.html" -type f -exec sed -i 's|<a href="\(.*\)" class="logo">Odoo Experten Deutschland</a>|<a href="\1" class="logo"><img src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png" alt="Odoo Experten Deutschland" class="logo-img" style="height: 40px;">Odoo Experten Deutschland</a>|g' {} \;

# Update Michael Schneider author images
echo "Updating Michael Schneider images..."
find out -name "*.html" -type f -exec sed -i 's|<div class="author-avatar">MS</div>|<img src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Michael Schneider.png" alt="Michael Schneider" class="author-avatar">|g' {} \;

# Update Klaus Weber author images
echo "Updating Klaus Weber images..."
find out -name "*.html" -type f -exec sed -i 's|<div class="author-avatar">KW</div>|<img src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/klaus-weber.jpg.png" alt="Klaus Weber" class="author-avatar">|g' {} \;

# Update Sandra Weber author images
echo "Updating Sandra Weber images..."
find out -name "*.html" -type f -exec sed -i 's|<div class="author-avatar">SW</div>|<img src="https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/sandra-weber.jpg.png" alt="Sandra Weber" class="author-avatar">|g' {} \;

# Count updated files
echo "Logo updates:"
grep -r "https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/Logo.png" out --include="*.html" | wc -l

echo "Author image updates:"
grep -r "https://tbppogohivsxgiavbnvp.supabase.co/storage/v1/object/public/odoo/" out --include="*.html" | grep -E "(Michael Schneider|klaus-weber|sandra-weber)" | wc -l

echo "Update complete!"