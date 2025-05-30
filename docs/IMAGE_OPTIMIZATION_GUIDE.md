# Image Optimization Troubleshooting Guide

## Issue Overview (May 30, 2025)
The website had several image display issues after running an optimization script that created responsive image sizes with specific naming conventions.

## Root Causes & Solutions

### 1. Incorrect Logo References
**Issue**: The base.njk file was referencing `icaa-Logo` files which are for the Insulation Contractors Association of America (ICAA) membership, not the company logo.

**Solution**: Updated all logo references to use `Insulation_Contractors_of_arizona_logo` files:
- Favicon: `/images-optimized/Insulation_Contractors_of_arizona_logo-100w.webp`
- Header logo: Uses responsive srcset with 100w, 150w, 200w, and 400w versions
- Open Graph/social media: Uses the -original.webp version

### 2. Non-existent Image Size References
**Issue**: Components were referencing image sizes that didn't exist (e.g., -400w.webp, -600w.webp when only -original.webp existed).

**Solution**: Updated all image references to use the -original.webp versions that actually exist:
- Open Cell Spray Foam: `Open_Cell_Spray_Foam_insulation_Arizona-original.webp`
- Closed Cell Spray Foam: `Closed_Cell_Spray_Foam_insulation_Arizona-original.webp`
- Fiberglass: `Fibreglass_Home_insulation-original.webp`
- Blown-In: `Fibereglass_cellulose_Blown_in_Attic_insulation-original.webp`
- Drill & Fill: `Drill_And_Fill_Blown_Dense_packed_wall_insulation-original.webp`
- Removal: `Attic_insulation_removal-original.webp`

### 3. Accreditations Banner Logos
**Issue**: The accreditations banner was missing proper certification logos and using non-existent file references.

**Solution**: Fixed to include all 5 certification/membership logos with proper srcset:
1. **SFWW Ambassador Badge** - 2025 certification
2. **BBB** - Better Business Bureau accreditation
3. **ICAA** - Insulation Contractors Association of America membership
4. **ROC Seal** - Registrar of Contractors license
5. **SPFA** - Spray Polyurethane Foam Alliance membership

## Available Optimized Images

The optimization script created these size variants:
- **-100w.webp**: 100px width (for small displays/thumbnails)
- **-150w.webp**: 150px width (for medium displays)
- **-200w.webp**: 200px width (for standard displays)
- **-400w.webp**: 400px width (for larger displays) - only some images
- **-original.webp**: Full size original

Some images have additional sizes:
- Hero background: 640w, 768w, 1024w, 1440w, 1920w
- Tank/farming images: 300w, 400w, 600w, 800w

## Best Practices for Future Image Updates

### 1. Always Check Available Sizes
Before referencing an image, check what sizes actually exist in `/images-optimized/`:
```bash
ls -la src/images-optimized/ | grep "imagename"
```

### 2. Use Responsive Images Properly
For images with multiple sizes, use srcset:
```html
<img src="/images-optimized/image-200w.webp" 
     srcset="/images-optimized/image-100w.webp 100w,
             /images-optimized/image-150w.webp 150w,
             /images-optimized/image-200w.webp 200w"
     sizes="(max-width: 768px) 100px, 150px"
     alt="Description"
     width="200" 
     height="100"
     loading="lazy">
```

### 3. Fallback to -original.webp
When specific sizes don't exist, use the -original.webp version:
```html
<img src="/images-optimized/image-original.webp" 
     alt="Description"
     width="400"
     height="300"
     loading="lazy">
```

### 4. Logo Usage Guide
- **Company Logo**: Use `Insulation_Contractors_of_arizona_logo-[size].webp`
- **ICAA Membership Logo**: Use `icaa-Logo-[size].webp` (only in accreditations)
- Never confuse the two - ICAA is a membership organization, not the company

## Website Loading Flash Issue

### Problem
The website shows black screen for a few seconds before content appears.

### Likely Causes
1. Large CSS file loading
2. Background animations initializing
3. Web fonts loading

### Solutions Implemented
1. Added preload for critical resources in base.njk:
   ```html
   <link rel="preload" href="/images-optimized/Insulation_Contractors_of_arizona_logo-200w.webp" as="image">
   <link rel="preload" href="/css/style.css" as="style">
   ```

2. Used `loading="eager"` for header logo to ensure it loads immediately

### Additional Recommendations
1. Consider splitting CSS into critical and non-critical
2. Inline critical CSS in the head
3. Add a simple loading indicator
4. Optimize animation performance with `will-change` property

## File Organization

All optimized images are stored in `/src/images-optimized/` with this naming convention:
- `[original-filename]-[width]w.webp` for responsive sizes
- `[original-filename]-original.webp` for full size

## Testing Checklist

After any image updates:
- [ ] Check all images display on homepage
- [ ] Verify logo appears in header and favicon
- [ ] Test accreditations banner animation
- [ ] Check service page images
- [ ] Test on mobile devices
- [ ] Verify no 404 errors in console
- [ ] Check page load performance

## Common Errors to Avoid

1. **Don't reference non-existent sizes** - Always check what's actually in the directory
2. **Don't use wrong logo** - Company logo vs. association logos
3. **Don't forget responsive images** - Use srcset when multiple sizes exist
4. **Don't skip alt text** - Important for SEO and accessibility
5. **Don't use wrong paths** - All optimized images are in `/images-optimized/`

---

Last Updated: May 30, 2025
Issue Resolved By: Echo (AI SEO Specialist)
