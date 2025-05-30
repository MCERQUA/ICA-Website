#!/bin/bash

# Script to fix all layout references in service files
# This fixes the Netlify deployment error: "You're trying to use a layout that does not exist: service-page.njk"

echo "Fixing layout references in all service files..."

# Define the files that need updating
declare -a files=(
  "src/services/residential/blown-in.njk"
  "src/services/residential/crawl-space.njk"
  "src/services/residential/wall.njk"
  "src/services/residential/removal.njk"
  "src/services/commercial/office.njk"
  "src/services/commercial/retail.njk"
  "src/services/commercial/new-construction.njk"
  "src/services/industrial/cold-storage.njk"
  "src/services/industrial/manufacturing.njk"
  "src/services/industrial/equipment.njk"
  "src/services/agricultural/tank.njk"
  "src/services/agricultural/barn.njk"
  "src/services/agricultural/storage.njk"
)

# Counter for processed files
processed=0

# Process each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    # Replace 'layout: service-page.njk' with 'layout: layouts/service-page.njk'
    sed -i 's/^layout: service-page\.njk$/layout: layouts\/service-page.njk/' "$file"
    ((processed++))
  else
    echo "Warning: File not found - $file"
  fi
done

echo "\nCompleted! Processed $processed files."
echo "The layout references have been updated to use the correct path."
