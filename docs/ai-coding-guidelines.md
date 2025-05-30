# AI Coding Guidelines

## Overview
This document provides specific guidelines for AI assistants working on the ICA website. Following these rules will prevent common errors and ensure consistent, high-quality code.

## Critical Rules (MUST FOLLOW)

### 1. Layout References ⚠️ CRITICAL
```yaml
# ✅ ALWAYS USE THIS FORMAT
layout: layouts/service-page.njk

# ❌ NEVER USE THIS (causes deployment failure)
layout: service-page.njk
```

**Why:** Eleventy requires full path when layouts are in subdirectories.

### 2. Template Dependencies
Before including any template, verify it exists:

```bash
# Check sections exist
ls src/_includes/sections/

# Check components exist  
ls src/_includes/components/
```

**Common includes that MUST exist:**
- `sections/service-hero.njk`
- `sections/cta.njk`
- `sections/testimonials.njk`
- `components/benefits-grid.njk`
- `components/process-steps.njk`

### 3. Duplicate Permalink Prevention
- Never create multiple files that output to the same URL
- Check existing files before creating new ones
- Use unique permalinks or remove duplicates

### 4. Required Frontmatter Fields
Every service page MUST include:
```yaml
layout: layouts/service-page.njk  # Full path required
title: "Service Name"
subtitle: "Brief description"
meta_description: "SEO description"
```

## File Creation Guidelines

### Service Pages
**Location:** `src/services/[category]/service-name.njk`

**Template:**
```yaml
---
layout: layouts/service-page.njk
title: "Service Name"
subtitle: "Brief service description"
meta_description: "SEO-optimized description under 160 characters"
tags: 
  - residential  # or commercial, industrial, agricultural
  - services
benefits:
  - title: "Benefit Name"
    description: "Benefit description"
    icon: "💰"
process:
  - title: "Step Name"
    description: "Step description"
pricing:
  - type: "Service Type"
    price: "$X.XX-Y.YY/sq ft"
    features:
      - "Feature 1"
      - "Feature 2"
relatedServices:
  - title: "Related Service"
    url: "/services/category/service/"
faqs:
  - question: "Question?"
    answer: "Answer"
---

{% set title = title %}
{% set subtitle = subtitle %}
{% include "sections/service-hero.njk" %}

{% include "components/benefits-grid.njk" %}

{% set process = process %}
{% include "components/process-steps.njk" %}

{% set pricing = pricing %}
{% include "components/pricing-table.njk" %}

{% include "sections/why-choose-ica.njk" %}
{% include "sections/testimonials.njk" %}
{% include "sections/cta.njk" %}
```

### Blog Posts
**Location:** `src/blog/YYYY-MM-DD-title.md`

**Template:**
```yaml
---
layout: post.njk
title: "Blog Post Title"
date: 2025-05-30
description: "SEO description"
tags:
  - insulation
  - arizona
---

# Content here
```

## Content Guidelines

### Arizona-Specific Requirements
Every service page should include:
- **Climate context:** 160°F attics, monsoon moisture
- **Local areas:** Phoenix, Scottsdale, Mesa, Tempe
- **Regional benefits:** Energy savings in extreme heat
- **Local credibility:** Arizona license, local experience

### SEO Requirements
- **Title tags:** Include service + location
- **Meta descriptions:** 150-160 characters
- **Headers:** Proper H1, H2, H3 hierarchy
- **Local keywords:** "Arizona", "Phoenix", city names

### Content Structure
Service pages should follow this order:
1. Hero section
2. Benefits grid
3. Process steps
4. Pricing (if applicable)
5. Why choose ICA
6. Testimonials
7. FAQ section
8. Call-to-action
9. Related services

## Code Quality Standards

### File Naming
- Use lowercase with hyphens: `dense-pack.njk`
- Be descriptive: `attic-insulation.njk`
- Match URL structure: `crawl-space.njk` → `/crawl-space/`

### Image Handling
- Use WebP format when possible
- Descriptive names: `attic-insulation-arizona.webp`
- Keep under 500KB
- Include alt text for accessibility

### CSS Guidelines
- Use existing CSS variables
- Follow component-based structure
- Include responsive design
- Optimize for performance

## Error Prevention Checklist

### Before Creating New Files
- [ ] Check if similar content already exists
- [ ] Verify all template dependencies exist
- [ ] Ensure unique URL/permalink
- [ ] Follow naming conventions
- [ ] Include all required frontmatter

### Before Including Templates
- [ ] Verify section/component exists in filesystem
- [ ] Check spelling of include path
- [ ] Ensure required variables are defined
- [ ] Test locally before deployment

### Before Deployment
- [ ] Run `npm run build` locally
- [ ] Check browser console for errors
- [ ] Verify all links work
- [ ] Test responsive design
- [ ] Validate HTML structure

## Common Mistakes to Avoid

### Layout References
```yaml
# ❌ WRONG - Missing path
layout: service-page.njk

# ❌ WRONG - Incorrect path
layout: service-page/service-page.njk

# ✅ CORRECT
layout: layouts/service-page.njk
```

### Template Includes
```nunjucks
<!-- ❌ WRONG - Non-existent file -->
{% include "sections/non-existent-section.njk" %}

<!-- ❌ WRONG - Incorrect path -->
{% include "section/service-hero.njk" %}

<!-- ✅ CORRECT -->
{% include "sections/service-hero.njk" %}
```

### Frontmatter Errors
```yaml
# ❌ WRONG - Missing required fields
---
title: "Service"
---

# ✅ CORRECT - All required fields
---
layout: layouts/service-page.njk
title: "Service Name"
subtitle: "Description"
meta_description: "SEO description"
---
```

## Testing Procedures

### Local Testing
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Browser Testing
1. Open http://localhost:8080
2. Navigate to new/modified pages
3. Check browser console for errors
4. Test all interactive elements
5. Verify responsive design

### Pre-Deployment Validation
1. All builds complete successfully
2. No console errors in browser
3. All images load properly
4. Internal links work correctly
5. SEO elements are present

## Problem-Solving Approach

### When Encountering Errors
1. **Read the error message carefully**
2. **Check the specific file mentioned**
3. **Verify template dependencies**
4. **Compare with working examples**
5. **Test fixes locally before pushing**

### Common Error Patterns
- Layout not found → Check path format
- Template not found → Verify file exists
- Duplicate permalinks → Remove duplicate files
- Build failures → Check syntax and dependencies

## Documentation Requirements

### When Creating New Features
- Update relevant documentation files
- Add examples to guidelines
- Document any new patterns or components
- Update troubleshooting guides if needed

### When Fixing Issues
- Document the problem in `common-issues.md`
- Include the solution and prevention steps
- Update guidelines to prevent recurrence

## Performance Considerations

### Image Optimization
- Use WebP format
- Compress images appropriately
- Include proper alt text
- Lazy load when possible

### Code Efficiency
- Minimize template complexity
- Avoid unnecessary loops
- Use efficient CSS selectors
- Optimize for build speed

### SEO Optimization
- Include structured data when relevant
- Optimize page load speeds
- Use semantic HTML
- Implement proper heading hierarchy

## Collaboration Guidelines

### Code Reviews
- Check layout references first
- Verify template dependencies
- Test locally before approval
- Review SEO elements

### Communication
- Use clear commit messages
- Document significant changes
- Report issues with context
- Share solutions with team

## Emergency Procedures

### Deployment Failures
1. Check Netlify build logs
2. Identify specific error
3. Apply appropriate fix from common issues
4. Test locally
5. Push fix and monitor deployment

### Quick Fixes
```bash
# Layout reference fix
node fix-layouts.js

# Emergency rollback (if needed)
# Use Netlify dashboard to rollback to previous deployment
```

### Escalation
- Document the issue thoroughly
- Include error messages and context
- Provide steps to reproduce
- Suggest potential solutions

## Success Metrics

### Code Quality
- Zero deployment failures
- Clean browser console
- Fast page load times
- Accessible markup

### Content Quality
- Complete SEO elements
- Arizona-specific context
- Professional presentation
- Clear calls-to-action

### Maintenance
- Up-to-date documentation
- Consistent patterns
- Efficient workflows
- Preventive measures in place
