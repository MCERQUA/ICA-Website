# Page Speed Optimization Plan for ICA Website

## 📊 Current Performance Metrics (May 30, 2025)
- **Performance Score:** 74/100 ⚠️
- **First Contentful Paint:** 2.7s
- **Largest Contentful Paint:** 5.3s 🔴
- **Speed Index:** 4.5s
- **Total Blocking Time:** 0ms ✅
- **Cumulative Layout Shift:** 0 ✅

## 🎯 Target Metrics
- **Performance Score:** 90+/100
- **First Contentful Paint:** < 1.8s
- **Largest Contentful Paint:** < 2.5s
- **Speed Index:** < 3.4s

---

## 🚨 Critical Issues to Fix

### 1. Render-Blocking Resources (High Priority)
**Issue:** Multiple CSS files blocking initial render
- netlify.app (1st Party) - 70.7 KiB, 3,630ms
- /css/style.css - 15.9 KiB, 180ms
- /css/components.css - 16.6 KiB, 930ms
- /css/animations.css - 7.0 KiB, 330ms
- /css/performance.css - 5.0 KiB, 630ms
- /css/forms.css - 8.2 KiB, 630ms
- /css/layout.css - 17.9 KiB, 930ms
- Google Fonts - 17.8 KiB, 1,080ms

**Solutions:**
- [ ] Implement Critical CSS inline in <head>
- [ ] Defer non-critical CSS with `media="print" onload="this.media='all'"`
- [ ] Combine and minify CSS files
- [ ] Self-host Google Fonts with font-display: swap
- [ ] Use CSS containment for complex components

### 2. Largest Contentful Paint (5.3s) - Critical
**Issue:** Hero image taking too long to render
**Solutions:**
- [ ] Optimize hero image (currently 400x269, displayed at 59x40)
- [ ] Implement responsive images with srcset
- [ ] Use WebP format with JPEG fallback
- [ ] Add loading="eager" to hero image
- [ ] Preload hero image in <head>

### 3. Image Optimization (52 KiB savings)
**Issues Identified:**
- Insulation...webp: 30.9 KiB (can save 30.5 KiB)
- Spray_Foam_Insurance_logo.webp: 32.1 KiB (can save 21.1 KiB)

**Solutions:**
- [ ] Resize images to actual display dimensions
- [ ] Increase compression for WebP images
- [ ] Implement responsive images for all viewports
- [ ] Use lazy loading for below-fold images

### 4. DOM Size Optimization
**Issue:** 540 total elements, 24 most children, depth of 13
**Solutions:**
- [ ] Remove unnecessary wrapper divs
- [ ] Simplify nested structures
- [ ] Use CSS Grid/Flexbox instead of nested containers
- [ ] Virtual scrolling for long lists

### 5. Network Dependency Chain
**Issue:** Maximum critical path latency: 599ms
**Solutions:**
- [ ] Reduce request chains
- [ ] Implement resource hints (preconnect, dns-prefetch)
- [ ] Bundle related resources
- [ ] Use HTTP/2 server push for critical resources

---

## 📋 Implementation Phases

### Phase 1: Critical CSS & Resource Loading (Week 1)
- [ ] Extract critical CSS for above-fold content
- [ ] Inline critical CSS in HTML head
- [ ] Defer non-critical CSS loading
- [ ] Implement font-display: swap for web fonts
- [ ] Add preload tags for critical resources

**Files to modify:**
- `src/_includes/base.njk`
- `src/css/critical.css` (new file)
- `.eleventy.js` (build process)

### Phase 2: Image Optimization (Week 1-2)
- [ ] Audit all images for proper sizing
- [ ] Generate multiple sizes for responsive images
- [ ] Convert all images to WebP with fallbacks
- [ ] Implement lazy loading for below-fold images
- [ ] Optimize hero background image

**Tools needed:**
- Sharp (image processing)
- eleventy-img plugin
- WebP conversion script

### Phase 3: CSS Consolidation & Minification (Week 2)
- [ ] Combine related CSS files
- [ ] Remove unused CSS rules
- [ ] Minify all CSS files
- [ ] Implement CSS containment
- [ ] Optimize animation performance

**Target structure:**
```
css/
├── critical.min.css (inline)
├── main.min.css (deferred)
└── components.min.css (lazy loaded)
```

### Phase 4: JavaScript Optimization (Week 2-3)
- [ ] Audit JavaScript usage
- [ ] Remove unused scripts
- [ ] Defer non-critical JavaScript
- [ ] Implement code splitting if needed
- [ ] Optimize event listeners

### Phase 5: Advanced Optimizations (Week 3)
- [ ] Implement service worker for caching
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Optimize web font loading
- [ ] Implement progressive enhancement
- [ ] Add performance monitoring

---

## 🛠️ Technical Implementation Details

### Critical CSS Generation
```javascript
// Add to build process
const critical = require('critical');

critical.generate({
  base: 'dist/',
  src: 'index.html',
  target: {
    css: 'critical.css',
    uncritical: 'non-critical.css'
  },
  width: 1300,
  height: 900
});
```

### Image Optimization Script
```javascript
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ["webp", "jpeg"],
    outputDir: "./dist/images/",
    urlPath: "/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}
```

### Resource Hints
```html
<!-- Add to base.njk -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="/images/hero-background.webp">
<link rel="preload" as="style" href="/css/critical.css">
```

---

## 📊 Progress Tracking

### Week 1 (May 30 - June 5, 2025)
- [ ] Critical CSS extraction and inlining
- [ ] Hero image optimization
- [ ] Resource hint implementation
- [ ] Initial CSS consolidation

### Week 2 (June 6-12, 2025)
- [ ] Complete image optimization
- [ ] CSS minification
- [ ] JavaScript audit and optimization
- [ ] Font optimization

### Week 3 (June 13-19, 2025)
- [ ] Service worker implementation
- [ ] Final optimizations
- [ ] Performance testing
- [ ] Documentation updates

---

## 🎯 Expected Results
- Performance score: 90+ (from 74)
- LCP: < 2.5s (from 5.3s)
- FCP: < 1.8s (from 2.7s)
- Page load time: < 3s on 3G
- Improved user experience and engagement
- Better SEO rankings

---

## 📝 Notes
- All optimizations must maintain visual design integrity
- Mobile performance is priority (60%+ of traffic)
- Test on real devices, not just Chrome DevTools
- Monitor Core Web Vitals in production
- Update this document with actual results

---

## 🔄 Last Updated: May 30, 2025
**Status:** Plan Created - Implementation Starting