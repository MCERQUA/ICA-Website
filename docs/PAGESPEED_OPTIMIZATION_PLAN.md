# PageSpeed Optimization Plan for ICA Website

## Overview
This document tracks performance optimizations for insulationcontractorsofarizona.com based on PageSpeed Insights analysis from May 30, 2025.

**Current Performance Score: 74/100**
**Target Performance Score: 90+/100**

## Priority Issues & Solutions

### 🔴 CRITICAL: Text Flashing (FOUC) Issue
**Status:** ✅ FIXED (May 30, 2025)
**Issue:** Menu and text content flashing on page load
**Root Cause:** CSS loading after HTML renders, causing Flash of Unstyled Content

**Solutions Implemented:**
- [x] Inline critical CSS in `<head>` section - includes navigation, header, hero styles
- [x] Add font-display: swap to @font-face declarations
- [x] Preload critical fonts with proper preconnect tags
- [x] Add opacity: 0 to body, then fade in after CSS loads
- [x] Extract and inline above-the-fold CSS
- [x] Improved font loading detection with fallback timer
- [x] Google Fonts now loaded immediately after critical CSS

### 🔴 HIGH: Render-Blocking Resources (3.6s delay)
**Status:** ⏳ In Progress
**Issue:** Multiple CSS and JS files blocking initial render

**Resources blocking render:**
- netlify.app CSS files (70.7 KiB)
- /css/style.css (15.9 KiB)
- /css/components.css (16.6 KiB)
- /css/animations.css (7.0 KiB)
- /css/performance.css (5.0 KiB)
- /css/forms.css (8.2 KiB)
- /css/layout.css (17.9 KiB)
- Google Fonts (17.8 KiB)

**Solutions:**
- [x] CSS combining logic added to .eleventy.js
- [x] Basic minification implemented
- [ ] Update base.njk to use combined CSS file
- [ ] Remove individual CSS file references
- [ ] Test combined CSS functionality
- [ ] Defer non-critical CSS with media="print" onload="this.media='all'"
- [ ] Use font-display: swap for Google Fonts
- [ ] Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`

### ✅ FIXED: Image Issues (May 30, 2025)
**Status:** ✅ COMPLETED
**Issues Found and Fixed:**
1. ✅ Spray Foam Insurance logo - Updated to use optimized version with srcset
2. ✅ Air duct cleaning - Fixed to use -original.webp (specific sizes didn't exist)
3. ✅ Insulation applications - Already using correct optimized versions
4. ✅ Accreditations banner - Confirmed working with all 5 logos scrolling

**Remaining Image Optimization:**
- [ ] Implement better compression for the two PageSpeed-identified images
- [ ] Add proper width/height attributes to all images to prevent CLS

### 🟡 MEDIUM: Large DOM Size (540 elements)
**Status:** ⏳ Not Started
**Issue:** DOM has 540 elements, 24 children in particles div, depth of 13

**Solutions:**
- [ ] Review and simplify DOM structure
- [ ] Remove unnecessary wrapper divs
- [ ] Lazy load sections below the fold
- [ ] Consider virtual scrolling for long lists
- [ ] Reduce particles complexity or lazy load animation

### 🟡 MEDIUM: Largest Contentful Paint (5.3s)
**Status:** ⏳ Not Started
**Issue:** Main content takes too long to render

**Solutions:**
- [ ] Preload hero background image
- [ ] Optimize critical rendering path
- [ ] Remove render-blocking resources
- [ ] Implement resource hints (preload, prefetch)
- [ ] Consider static HTML generation for faster initial paint

### ✅ GOOD: Core Web Vitals
- Total Blocking Time: 0ms ✅
- Cumulative Layout Shift: 0 ✅

## Implementation Checklist

### Phase 1: Immediate Fixes (Week 1) ✅ MOSTLY COMPLETE
- [x] Extract critical CSS and inline in head
- [x] Add font-display: swap to all @font-face rules
- [x] Implement FOUC fix with opacity transition
- [x] Add preconnect for Google Fonts
- [x] Fix all broken image references
- [ ] Preload hero background image

### Phase 2: CSS Optimization (Week 1-2) ⏳ IN PROGRESS
- [x] Create CSS combining logic
- [x] Implement basic minification
- [ ] Update base.njk to use combined CSS
- [ ] Test combined CSS in production
- [ ] Split critical vs non-critical CSS
- [ ] Implement loadCSS for non-critical styles
- [ ] Remove unused CSS rules

### Phase 3: Image Optimization (Week 2)
- [ ] Re-optimize identified images with better compression
- [ ] Ensure all images have proper width/height attributes
- [ ] Verify all lazy loading is working
- [ ] Test on slow connections

### Phase 4: JavaScript Optimization (Week 2-3)
- [ ] Defer non-critical JavaScript
- [ ] Remove unused JavaScript
- [ ] Minify JavaScript files
- [ ] Consider code splitting for large scripts
- [ ] Optimize particles animation performance

### Phase 5: Advanced Optimizations (Week 3-4)
- [ ] Implement service worker for caching
- [ ] Add resource hints throughout site
- [ ] Optimize web fonts loading strategy
- [ ] Consider CDN for static assets
- [ ] Implement HTTP/2 push for critical resources

## Monitoring & Testing

- [ ] Test with PageSpeed Insights after each optimization
- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Test on slow 3G connection
- [ ] Verify no visual regressions
- [ ] Check accessibility isn't impacted

## Expected Results

After implementing all optimizations:
- Performance Score: 90-95
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Speed Index: < 3.0s
- No FOUC/text flashing
- Improved user experience

## Resources

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Critical CSS Tools](https://github.com/addyosmani/critical)
- [LoadCSS](https://github.com/filamentgroup/loadCSS)
- [Squoosh Image Optimizer](https://squoosh.app/)

---

**Last Updated:** May 30, 2025
**Status:** Active Development
**Next Review:** June 6, 2025