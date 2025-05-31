# ICA Website Complete Cleanup Plan
**Start Date:** May 31, 2025  
**Repository:** https://github.com/MCERQUA/ICA-Website

## 🎯 Objective
Complete overhaul of all website pages to match the established dark theme design system with proper glass morphism effects, cyan accents, and consistent styling.

## 📋 Pages Requiring Complete Rebuild

### PHASE 1: Critical Service Pages (Week 1)
Priority: Fix the most visited and important service pages first

#### 1. Attic Insulation Page ⚠️ CRITICAL
**Status:** Poorly styled with white elements  
**Issues:**
- White/light backgrounds breaking dark theme
- Missing glass-panel effects on cards
- Poor contrast and readability
- Inconsistent button styling
- No hover effects

**Required Fixes:**
- Apply dark theme throughout
- Implement glass-panel cards for all content boxes
- Fix button styling to match design system
- Add proper hover effects
- Ensure mobile responsiveness

#### 2. Spray Foam Insulation Page
**Status:** Needs style consistency check
**Required Fixes:**
- Verify hero section matches homepage
- Check all cards use glass-panel styling
- Ensure CTA buttons are properly styled
- Add missing hover effects

#### 3. Blown-In Insulation Page
**Status:** Recently updated but needs verification
**Required Fixes:**
- Verify dark theme consistency
- Check component styling matches guide

### PHASE 2: Remaining Residential Pages (Week 1-2)
#### 4. Dense Pack Insulation
#### 5. Wall Insulation  
#### 6. Insulation Removal
**Required for all:**
- Consistent hero sections
- Glass-panel service cards
- Proper button hierarchy
- Mobile responsiveness

### PHASE 3: Commercial/Industrial Pages (Week 2)
#### 7. Office Buildings
#### 8. Retail Spaces
#### 9. Warehouses
#### 10. Manufacturing
#### 11. Cold Storage
#### 12. Equipment Insulation
**Focus:** Professional B2B styling while maintaining design system

### PHASE 4: Agricultural & Product Pages (Week 2-3)
#### 13. Tank Insulation
#### 14. Barn Insulation
#### 15. Storage Facilities
#### 16. Open-Cell Spray Foam
#### 17. Closed-Cell Spray Foam
#### 18. Other Product Pages

## 🧩 Component Library Development

### Reusable Components to Create:
1. **service-card-glass.njk** - Standardized service card
2. **pricing-table-dark.njk** - Dark themed pricing tables
3. **faq-section-glass.njk** - Glass morphism FAQ
4. **process-steps-dark.njk** - Dark themed process steps
5. **cta-section-hero.njk** - Consistent CTA sections
6. **testimonial-glass.njk** - Glass panel testimonials

### Component Structure:
```
src/_includes/components/
├── cards/
│   ├── service-card-glass.njk
│   ├── feature-card-glass.njk
│   └── pricing-card-glass.njk
├── sections/
│   ├── hero-service.njk (updated)
│   ├── process-steps-dark.njk
│   └── cta-section-dark.njk
└── ui/
    ├── button-primary.njk
    ├── button-cta.njk
    └── glass-panel.njk
```

## 📝 Page Template Structure

### Standard Service Page Layout:
```njk
---
layout: layouts/service-page.njk
---

{% include "sections/hero-service.njk" %}

<section class="content-section">
  <div class="container">
    <!-- Main content with proper dark theme -->
  </div>
</section>

<section class="content-section" style="background: var(--primary-medium);">
  <div class="container">
    {% include "components/cards/service-features-grid.njk" %}
  </div>
</section>

<section class="content-section">
  <div class="container">
    {% include "components/sections/process-steps-dark.njk" %}
  </div>
</section>

{% include "sections/cta-section-dark.njk" %}
```

## ✅ Quality Checklist for Each Page

Before marking a page complete:
- [ ] All backgrounds are dark (#0a1a1a or #0d2020)
- [ ] All text has proper contrast (white/light gray on dark)
- [ ] All cards use glass-panel effect with backdrop-filter
- [ ] All buttons follow the design system (dark with cyan borders)
- [ ] Hero section has sunset background with proper overlay
- [ ] Interactive elements have hover effects
- [ ] Mobile responsive design verified
- [ ] No white or light colored sections
- [ ] Consistent spacing using CSS variables
- [ ] Images have proper dark theme treatment

## 🚀 Implementation Priority

### Week 1 Focus:
1. Create reusable component library
2. Fix Attic page (worst offender)
3. Update all residential service pages
4. Ensure mobile responsiveness

### Week 2 Focus:
1. Commercial/Industrial pages
2. Agricultural pages
3. Product pages
4. Cross-browser testing

### Week 3 Focus:
1. Final review and consistency check
2. Performance optimization
3. SEO meta tags update
4. Launch preparation

## 🛠️ Technical Implementation

### CSS Updates Needed:
1. Create `service-pages.css` for service-specific styles
2. Update component styles in `components.css`
3. Add dark theme utilities to `style.css`
4. Ensure all custom page styles follow design system

### File Organization:
```
src/css/
├── style.css (main styles)
├── components.css (component library)
├── service-pages.css (NEW - service page specific)
├── dark-theme.css (NEW - dark theme utilities)
└── glass-effects.css (NEW - glass morphism effects)
```

## 📊 Success Metrics

- All pages pass dark theme consistency check
- No white/light backgrounds anywhere
- All interactive elements have proper hover states
- Mobile experience is flawless
- Page load times remain under 3 seconds
- Accessibility standards maintained

## 🔄 Continuous Improvement

After initial cleanup:
1. Add subtle animations to enhance UX
2. Implement lazy loading for images
3. Add micro-interactions to buttons/cards
4. Create style regression tests
5. Document all patterns for future development

---

**Remember:** Every page should feel premium, professional, and part of a cohesive high-tech brand. The dark theme with cyan accents is our signature - maintain it consistently across all pages.