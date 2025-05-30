// This script fixes all layout references in service files
// Run with: node fix_layouts.js

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .njk files in services directories
const serviceFiles = glob.sync('src/services/**/*.njk');

let updatedCount = 0;

serviceFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Check if file contains the incorrect layout reference
  if (content.includes('layout: service-page.njk')) {
    // Replace with the correct path
    content = content.replace('layout: service-page.njk', 'layout: layouts/service-page.njk');
    
    // Write the updated content back
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
    updatedCount++;
  }
});

console.log(`\nTotal files updated: ${updatedCount}`);
