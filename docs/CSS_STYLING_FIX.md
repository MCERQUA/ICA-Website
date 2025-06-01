# CSS Styling Fix Documentation
**Date:** May 31, 2025
**Issue:** Service pages displaying with light theme instead of dark theme

## Problem Summary

Several service pages (particularly in `/services/industrial/manufacturing/`) were displaying with a light theme (white backgrounds, light gray colors) instead of following the established dark theme with cyan/aqua accents defined in the style guide.

## Root Cause

1. **Inline Style Overrides**: Service pages contained extensive `<style>` blocks with inline CSS that overrode the global dark theme
2. **Wrong CSS Classes**: Pages were using custom classes instead of the established component classes
3. **Light Theme Colors**: Inline styles defined white backgrounds and light colors

## Solution Implemented

### 1. Created Service-Specific CSS Module
- Added `src/css/services.css` with dark theme styles for service pages
- Follows the established design system from `ICA_WEBSITE_STYLE_GUIDE.md`
- Includes proper glass panel effects, cyan borders, and dark backgrounds

### 2. Updated Main CSS Import
- Modified `src/css/style.css` to import the new `services.css` module
- Ensures service-specific styles are loaded globally

### 3. Created Fixed Manufacturing Page
- Created `manufacturing-fixed.njk` as an example of proper implementation
- Removed all inline styles
- Used established CSS classes from the component library

### 4. Added Automated Fix Script
- Created `fix-service-styles.js` to automatically fix all service pages
- Removes inline style blocks
- Replaces light theme patterns with dark theme equivalents
- Adds missing `data-text` attributes for heading animations

## CSS Classes to Use

### Instead of Custom Classes, Use:
- `.glass-panel` - For any card or container with glass morphism effect
- `.card` - For standard content cards
- `.services-grid` - For service card grids
- `.cta-section` - For call-to-action sections
- `.accordion-item` - For FAQ or collapsible content
- `.warning-box`, `.danger-box`, `.success-box` - For alert/info boxes
- `.stats-grid` - For statistics displays
- `.feature-grid` - For feature lists

## To Fix Remaining Pages

1. Run the fix script:
```bash
node fix-service-styles.js
```

2. Test locally:
```bash
npm run dev
```

3. Verify each page displays with:
   - Dark background (#0a1a1a)
   - Cyan/aqua accents (#00ffff)
   - Glass panel effects on cards
   - Proper text contrast

## Style Guide Requirements

All pages must follow these requirements from the style guide:

- **Never use white backgrounds**
- **Always use dark theme colors**
- **Cyan accent colors for highlights**
- **Glass panel effects on all cards**
- **Proper hover states with glow effects**
- **Consistent spacing using CSS variables**

## Files Modified

1. `src/css/services.css` - New service-specific styles
2. `src/css/style.css` - Updated to import services.css
3. `src/services/industrial/manufacturing-fixed.njk` - Example of fixed page
4. `fix-service-styles.js` - Automated fix script

## Next Steps

1. Review and merge the fixed manufacturing page
2. Run the fix script on all service pages
3. Test each page for proper dark theme display
4. Update any remaining pages manually if needed
5. Add to CI/CD pipeline to prevent future inline styles
