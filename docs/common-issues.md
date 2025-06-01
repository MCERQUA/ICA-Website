# Common Issues and Solutions

## Netlify Deployment Failures

### Layout Reference Errors

**Issue:** Netlify deployment fails with error: "You're trying to use a layout that does not exist: service-page.njk (undefined)"

**Root Cause:** Service files are referencing `layout: service-page.njk` but the actual layout file is located at `src/_includes/layouts/service-page.njk`. In Eleventy, when referencing layouts from subdirectories within the `_includes` folder, you need to include the full path.

**Solution:** Update layout references from `service-page.njk` to `layouts/service-page.njk`

**Quick Fix Script:** Run `node fix-layouts.js` to automatically fix all affected files.

**Files Commonly Affected:**
- All service files in `src/services/` subdirectories
- Any new service pages created

**Prevention:** When creating new service pages, always use the full layout path: `layout: layouts/service-page.njk`

**Status:** ✅ Resolved - Fixed 4 files on 2025-05-30

---

### Missing Template Files

**Issue:** Netlify deployment fails with error: "template not found: sections/[filename].njk"

**Root Cause:** Service files are trying to include section templates that don't exist in the `src/_includes/sections/` directory.

**Solution:** Create the missing section files or update the service files to use existing sections.

**Files Created:**
- `src/_includes/sections/retrofit-benefits.njk` - Benefits of retrofit insulation
- `src/_includes/sections/material-options.njk` - Material comparison sections

**Prevention:** Before creating new service pages, verify all included sections exist or create them as needed.

**Status:** ✅ Resolved - Created missing section files on 2025-05-30

---

### Duplicate Permalink Conflicts

**Issue:** Netlify deployment fails with error: "Output conflict: multiple input files are writing to `_site/[path]/index.html`"

**Root Cause:** Multiple files are trying to generate the same output URL path, which Eleventy doesn't allow.

**Example:** Both `src/services.njk` and `src/services/index.njk` were trying to output to `/services/index.html`

**Solution:** Remove duplicate files or assign different permalink values to resolve conflicts.

**Files Removed:**
- `src/services.njk` - Redundant services page (kept `src/services/index.njk` as the primary services page)

**Prevention:** Before creating new pages, check if similar pages already exist. Use unique permalinks for different content.

**Status:** ✅ Resolved - Removed duplicate services.njk file on 2025-05-30

---

## CSS and Styling Issues

### Service Pages Displaying Light Theme Instead of Dark Theme

**Issue:** Service pages (e.g., `/services/industrial/manufacturing/`) display with light backgrounds and colors instead of the established dark theme with cyan accents

**Root Cause:** Service pages contain inline `<style>` blocks that override the global CSS with light theme styles (white backgrounds, light gray colors). These inline styles take precedence over the external stylesheets that define the dark theme.

**Solution:** 
1. Remove all inline `<style>` blocks from service pages
2. Use established CSS classes from the component library
3. Add service-specific styles to `src/css/services.css` if needed

**Quick Fix Script:** Run `node fix-service-styles.js` to automatically fix all service pages

**Files Created/Modified:**
- `src/css/services.css` - Service-specific dark theme styles
- `src/css/style.css` - Updated to import services.css
- `fix-service-styles.js` - Automated fix script

**CSS Classes to Use:**
- `.glass-panel` - Glass morphism effect containers
- `.card` - Standard content cards
- `.services-grid` - Service card grids
- `.cta-section` - Call-to-action sections
- `.accordion-item` - FAQ/collapsible content
- `.warning-box`, `.danger-box`, `.success-box` - Alert boxes

**Prevention:** 
- Never add inline styles to pages
- Always use established CSS classes
- Follow the style guide: dark backgrounds (#0a1a1a), cyan accents (#00ffff)
- Test pages locally before committing

**Status:** ✅ Resolved - Created fix script and CSS module on 2025-05-31

---

## Future Issue Template

**Issue:** [Brief description]

**Root Cause:** [Technical explanation]

**Solution:** [Step-by-step fix]

**Prevention:** [How to avoid in future]

**Status:** [Resolved/Ongoing/Monitoring]
