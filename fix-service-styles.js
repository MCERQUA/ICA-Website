/**
 * Fix Service Page Styling Script
 * This script removes inline styles from service pages that override the dark theme
 */

const fs = require('fs');
const path = require('path');

// Directories to check for service pages
const serviceDirectories = [
    'src/services',
    'src/services/residential',
    'src/services/commercial',
    'src/services/industrial',
    'src/services/agricultural'
];

// Pattern to find inline style blocks
const styleBlockRegex = /<style>[\s\S]*?<\/style>/gi;

// Pattern to check if file has proper theme classes
const darkThemeClasses = [
    'glass-panel',
    'card',
    'cta-section',
    'accordion-item',
    'services-grid'
];

// Light theme patterns to replace
const lightThemePatterns = [
    {
        find: /background:\s*(?:white|#fff|#ffffff|linear-gradient\([^)]*#f8f9fa[^)]*\))/gi,
        replace: 'background: rgba(0, 255, 255, 0.03)'
    },
    {
        find: /color:\s*(?:#2c3e50|#333|#000)/gi,
        replace: 'color: var(--gray-100)'
    },
    {
        find: /class="service-intro"/g,
        replace: 'class="glass-panel"'
    },
    {
        find: /class="facility-type"/g,
        replace: 'class="card glass-panel"'
    },
    {
        find: /class="facility-types-grid"/g,
        replace: 'class="services-grid"'
    },
    {
        find: /class="solution-card"/g,
        replace: 'class="card glass-panel"'
    },
    {
        find: /class="faq-item"/g,
        replace: 'class="accordion-item glass-panel"'
    },
    {
        find: /class="roi-calculator"/g,
        replace: 'class="cta-section glass-panel"'
    },
    {
        find: /class="cta-box"/g,
        replace: 'class="cta-section glass-panel"'
    },
    {
        find: /class="challenge-section"/g,
        replace: 'class="glass-panel warning-box"'
    },
    {
        find: /class="cost-section"/g,
        replace: 'class="glass-panel danger-box"'
    },
    {
        find: /class="case-study"/g,
        replace: 'class="glass-panel success-box"'
    }
];

function fixServicePage(filePath) {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove inline style blocks
    if (styleBlockRegex.test(content)) {
        console.log(`  - Removing inline styles from ${filePath}`);
        content = content.replace(styleBlockRegex, '');
        modified = true;
    }
    
    // Replace light theme patterns with dark theme equivalents
    lightThemePatterns.forEach(pattern => {
        if (pattern.find.test(content)) {
            console.log(`  - Replacing light theme patterns in ${filePath}`);
            content = content.replace(pattern.find, pattern.replace);
            modified = true;
        }
    });
    
    // Add data-text attributes to headings if missing
    const headingRegex = /<h([1-6])(?![^>]*data-text)([^>]*)>([^<]+)<\/h\1>/gi;
    content = content.replace(headingRegex, (match, level, attrs, text) => {
        console.log(`  - Adding data-text attribute to h${level} in ${filePath}`);
        modified = true;
        return `<h${level}${attrs} data-text="${text.trim()}">${text}</h${level}>`;
    });
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ Fixed ${filePath}`);
        return true;
    }
    
    return false;
}

function processDirectory(dir) {
    if (!fs.existsSync(dir)) {
        console.log(`Directory not found: ${dir}`);
        return;
    }
    
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isFile() && file.endsWith('.njk')) {
            if (fixServicePage(filePath)) {
                fixedCount++;
            }
        } else if (stat.isDirectory() && !file.startsWith('.')) {
            processDirectory(filePath);
        }
    });
    
    return fixedCount;
}

console.log('Starting service page style fixes...\n');

let totalFixed = 0;
serviceDirectories.forEach(dir => {
    console.log(`\nChecking directory: ${dir}`);
    const fixed = processDirectory(dir) || 0;
    totalFixed += fixed;
});

console.log(`\n✓ Complete! Fixed ${totalFixed} service pages.`);
console.log('\nRemember to:');
console.log('1. Test the pages locally with "npm run dev"');
console.log('2. Verify the dark theme is applied correctly');
console.log('3. Commit and push the changes');
console.log('4. Test on Netlify after deployment');
