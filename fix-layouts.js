const fs = require('fs');
const path = require('path');

// List of files that need the layout reference fixed
const filesToFix = [
  'src/services/residential/blown-in.njk',
  'src/services/residential/crawl-space.njk',
  'src/services/residential/wall.njk',
  'src/services/residential/removal.njk',
  'src/services/commercial/office.njk',
  'src/services/commercial/new-construction.njk',
  'src/services/industrial/cold-storage.njk',
  'src/services/industrial/manufacturing.njk',
  'src/services/industrial/equipment.njk',
  'src/services/agricultural/tank.njk',
  'src/services/agricultural/barn.njk',
  'src/services/agricultural/storage.njk'
];

let fixedCount = 0;
let errorCount = 0;

console.log('Fixing layout references in service files...\n');

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file contains the incorrect layout reference
      if (content.includes('layout: service-page.njk')) {
        // Replace with the correct path
        content = content.replace('layout: service-page.njk', 'layout: layouts/service-page.njk');
        
        // Write the updated content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
        fixedCount++;
      } else {
        console.log(`⏭️  Skipped: ${filePath} (already correct or different layout)`);
      }
    } else {
      console.log(`❌ Not found: ${filePath}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
    errorCount++;
  }
});

console.log(`\n✨ Complete! Fixed ${fixedCount} files.`);
if (errorCount > 0) {
  console.log(`⚠️  ${errorCount} files had errors.`);
}

console.log('\nThe layout references have been updated to use the correct path.');
console.log('Now your Netlify deployment should work correctly!');
