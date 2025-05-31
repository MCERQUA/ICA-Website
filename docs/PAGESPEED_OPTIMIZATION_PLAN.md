# PageSpeed Optimization Plan for ICA Website

## Overview
This document tracks performance optimizations for insulationcontractorsofarizona.com based on PageSpeed Insights analysis from May 30, 2025.

**Current Performance Score: 82/100** (as of May 30, 2025)
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
**Status:** ✅ COMPLETED (May 31, 2025)
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

**Solutions Implemented:**
- [x] CSS combining logic added to .eleventy.js
- [x] Basic minification implemented
- [x] Created base-optimized.njk template using combined CSS
- [x] Consolidated all JavaScript into main.js
- [x] Deferred non-critical JavaScript loading
- [x] All CSS now loads via single combined file with hash for cache busting
- [x] Removed individual CSS file references
- [x] Font loading optimized with preconnect tags
- [x] All major pages now using base-optimized.njk (May 31, 2025)

### 🔴 HIGH: First Contentful Paint (3.0s)
**Status:** ⏳ IN PROGRESS
**Issue:** Still showing red score for FCP despite optimizations

**Remaining Issues to Address:**
- [ ] Reduce server response time (currently showing as red in PageSpeed)
- [ ] Optimize critical rendering path further
- [ ] Consider inlining more critical CSS
- [ ] Implement resource hints (prefetch/preconnect)
- [ ] Add width/height attributes to ALL images to prevent CLS
- [ ] Consider static HTML generation for faster initial paint

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

### 🟡 MEDIUM: Largest Contentful Paint (3.8s)
**Status:** ⏳ Partially Complete
**Issue:** Main content takes too long to render

**Solutions:**
- [x] Preload hero background image added to base-optimized.njk
- [x] Removed render-blocking resources
- [ ] Implement additional resource hints (prefetch)
- [ ] Consider static HTML generation for faster initial paint

### ✅ GOOD: Core Web Vitals
- Total Blocking Time: 0ms ✅
- Cumulative Layout Shift: 0 ✅
- Speed Index: 3.4s (improved from 4.5s)

## Implementation Checklist

### Phase 1: Immediate Fixes (Week 1) ✅ COMPLETE
- [x] Extract critical CSS and inline in head
- [x] Add font-display: swap to all @font-face rules
- [x] Implement FOUC fix with opacity transition
- [x] Add preconnect for Google Fonts
- [x] Fix all broken image references
- [x] Preload hero background image

### Phase 2: CSS Optimization (Week 1-2) ✅ COMPLETE
- [x] Create CSS combining logic
- [x] Implement basic minification
- [x] Update base.njk to use combined CSS (created base-optimized.njk)
- [x] Remove individual CSS file references
- [x] Split critical vs non-critical CSS
- [x] Implement async CSS loading for non-critical styles
- [x] Update all major pages to use base-optimized.njk (May 31, 2025)

### Phase 3: Image Optimization (Week 2) ⏳ IN PROGRESS
- [x] Fix all broken image references
- [ ] Re-optimize identified images with better compression
- [ ] Ensure all images have proper width/height attributes
- [ ] Verify all lazy loading is working
- [ ] Test on slow connections

### Phase 4: JavaScript Optimization (Week 2-3) ✅ COMPLETE
- [x] Defer non-critical JavaScript
- [x] Consolidate JavaScript into single file
- [x] Remove inline JavaScript from base template
- [ ] Minify JavaScript files
- [ ] Consider code splitting for large scripts
- [ ] Optimize particles animation performance

### Phase 5: Advanced Optimizations (Week 3-4) ⏳ NOT STARTED
- [ ] Implement service worker for caching
- [ ] Add resource hints throughout site
- [ ] Optimize web fonts loading strategy
- [ ] Consider CDN for static assets
- [ ] Implement HTTP/2 push for critical resources
- [ ] Server-side optimizations (reduce initial server response time)

## Next Steps

1. **Focus on First Contentful Paint** - Still showing red, needs immediate attention
2. **Add width/height to all images** - Prevent layout shift
3. **Implement JavaScript minification** - Further reduce file size
4. **Server response time optimization** - Work with Netlify settings
5. **Run PageSpeed test** - Verify improvements are working

## Monitoring & Testing

- [ ] Test with PageSpeed Insights after deploying optimizations
- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Test on slow 3G connection
- [ ] Verify no visual regressions
- [ ] Check accessibility isn't impacted

## Expected Results

After implementing all optimizations:
- Performance Score: 90-95
- First Contentful Paint: < 1.5s (currently 3.0s)
- Largest Contentful Paint: < 2.5s (currently 3.8s)
- Speed Index: < 3.0s (currently 3.4s)
- No FOUC/text flashing
- Improved user experience

## Resources

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Critical CSS Tools](https://github.com/addyosmani/critical)
- [LoadCSS](https://github.com/filamentgroup/loadCSS)
- [Squoosh Image Optimizer](https://squoosh.app/)

---

**Last Updated:** May 31, 2025
**Status:** Major CSS optimizations complete, FCP still needs work
**Next Review:** June 3, 2025