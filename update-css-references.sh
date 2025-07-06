#!/bin/bash

# Update all HTML files to use modern-styles.css instead of styles.css
echo "Updating CSS references in all HTML files..."

# Find all HTML files and update the CSS reference
find out -name "*.html" -type f | while read -r file; do
    # Skip if the file already uses modern-styles.css
    if grep -q "modern-styles.css" "$file"; then
        echo "✓ Already updated: $file"
    else
        # Replace styles.css with modern-styles.css
        sed -i 's|href="../css/styles.css"|href="../css/modern-styles.css"|g' "$file"
        sed -i 's|href="css/styles.css"|href="css/modern-styles.css"|g' "$file"
        sed -i 's|href="../../css/styles.css"|href="../../css/modern-styles.css"|g' "$file"
        echo "✓ Updated: $file"
    fi
done

echo "CSS references update complete!"