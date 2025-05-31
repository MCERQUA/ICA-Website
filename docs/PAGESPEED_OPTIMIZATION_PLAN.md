# PageSpeed Optimization Plan for ICA Website

## Overview
This document tracks performance optimizations for insulationcontractorsofarizona.com based on PageSpeed Insights analysis from May 30, 2025.

**Current Performance Score: 74/100**
**Target Performance Score: 90+/100**

## Priority Issues & Solutions

### 🔴 CRITICAL: Text Flashing (FOUC) Issue
**Status:** ⏳ In Progress
**Issue:** Menu and text content flashing on page load
**Root Cause:** CSS loading after HTML renders, causing Flash of Unstyled Content

**Solutions:**
- [ ] Inline critical CSS in `<head>` section
- [ ] Add font-display: swap to @font-face declarations
- [ ] Preload critical fonts
- [ ] Add opacity: 0 to body, then fade in after CSS loads
- [ ] Extract and inline above-the-fold CSS

### 🔴 HIGH: Render-Blocking Resources (3.6s delay)
**Status:** ⏳ Not Started
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
- [ ] Inline critical CSS for above-the-fold content
- [ ] Defer non-critical CSS with media="print" onload="this.media='all'"
- [ ] Combine CSS files into single minified file
- [ ] Use font-display: swap for Google Fonts
- [ ] Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`

### 🟡 MEDIUM: Image Optimization (52 KiB potential savings)
**Status:** ⏳ Partially Complete
**Issue:** Images larger than needed for display

**Problem images:**
- /images-optimized/Insulatio...webp (30.9 KiB actual, 13.4 KiB potential)
- /images/Spray_Foam_Insurance_logo.webp (32.1 KiB actual, 21.1 KiB potential)

**Solutions:**
- [ ] Implement responsive images with proper srcset
- [ ] Use correct image dimensions (400x269 for first image, 344x281 for logo)
- [ ] Increase compression for WebP images
- [ ] Add width and height attributes to prevent layout shift
- [ ] Lazy load below-the-fold images

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

### Phase 1: Immediate Fixes (Week 1)
- [ ] Extract critical CSS and inline in head
- [ ] Add font-display: swap to all @font-face rules
- [ ] Implement FOUC fix with opacity transition
- [ ] Add preconnect for Google Fonts
- [ ] Preload hero background image

### Phase 2: CSS Optimization (Week 1-2)
- [ ] Combine all CSS files into single file
- [ ] Minify combined CSS
- [ ] Split critical vs non-critical CSS
- [ ] Implement loadCSS for non-critical styles
- [ ] Remove unused CSS rules

### Phase 3: Image Optimization (Week 2)
- [ ] Re-optimize all images with proper dimensions
- [ ] Implement responsive images with srcset
- [ ] Add lazy loading to below-fold images
- [ ] Convert remaining JPG/PNG to WebP
- [ ] Add width/height attributes to all images

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

## Quick Wins (Can do immediately)

1. **Add to base.njk head section:**
```html
<!-- Preconnect to external origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical resources -->
<link rel="preload" href="/images/hero-bg.webp" as="image">
<link rel="preload" href="/css/critical.css" as="style">

<!-- Fix FOUC -->
<style>
  body { opacity: 0; transition: opacity 0.3s; }
  body.loaded { opacity: 1; }
</style>
<script>
  window.addEventListener('load', () => document.body.classList.add('loaded'));
</script>
```

2. **Update font loading:**
```css
@font-face {
  font-family: 'YourFont';
  src: url('...') format('woff2');
  font-display: swap; /* Add this line */
}
```

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