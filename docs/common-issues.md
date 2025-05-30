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

## Future Issue Template

**Issue:** [Brief description]

**Root Cause:** [Technical explanation]

**Solution:** [Step-by-step fix]

**Prevention:** [How to avoid in future]

**Status:** [Resolved/Ongoing/Monitoring]
