# Content Creation Guide

## Overview
This guide provides step-by-step instructions for creating new content on the ICA website. Follow these procedures to ensure consistency and avoid deployment errors.

## Creating New Service Pages

### Step 1: Choose the Correct Location
```
src/services/
├── residential/     # Home insulation services
├── commercial/      # Business/office services  
├── industrial/      # Manufacturing/processing
└── agricultural/    # Farm/ranch services
```

### Step 2: Create the Service File
**File naming:** Use lowercase with hyphens: `new-service.njk`

### Step 3: Required Frontmatter Structure
```yaml
---
layout: layouts/service-page.njk  # ⚠️ CRITICAL: Include "layouts/"
title: "Service Name"
subtitle: "Brief service description"
meta_description: "SEO description for search engines"
tags: 
  - category_name  # residential, commercial, industrial, agricultural
  - services
benefits:
  - title: "Benefit Name"
    description: "Benefit description"
    icon: "💰"  # Emoji or icon
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
    description: "Brief description"
faqs:
  - question: "Common question?"
    answer: "Detailed answer"
---
```

### Step 4: Content Structure Template
```nunjucks
---
[frontmatter above]
---

{% set title = "Service Name" %}
{% set subtitle = "Service Description" %}
{% include "sections/service-hero.njk" %}

{% include "components/benefits-grid.njk" %}

{% set process = process %}
{% include "components/process-steps.njk" %}

{% set pricing = pricing %}
{% include "components/pricing-table.njk" %}

{% include "sections/why-choose-ica.njk" %}

{% include "sections/testimonials.njk" %}

{% set sectionTitle = "Service FAQs" %}
{% include "sections/service-faq.njk" %}

{% include "sections/cta.njk" %}

{% include "sections/related-services.njk" %}
```

### Step 5: Verify Template Dependencies
Before saving, ensure these sections exist in `src/_includes/sections/`:
- `service-hero.njk` ✅
- `why-choose-ica.njk` ✅
- `testimonials.njk` ✅
- `service-faq.njk` ✅
- `cta.njk` ✅
- `related-services.njk` ✅

And these components exist in `src/_includes/components/`:
- `benefits-grid.njk` ✅
- `process-steps.njk` ✅
- `pricing-table.njk` ✅

## Creating Service Category Pages

### Purpose
Category pages provide overviews of service groups (e.g., all residential services).

### Location
Create `index.njk` files in category directories:
```
src/services/residential/index.njk
src/services/commercial/index.njk
src/services/industrial/index.njk
src/services/agricultural/index.njk
```

### Template Structure
```yaml
---
layout: layouts/service-category.njk
title: "Residential Insulation Services"
meta_description: "Complete residential insulation solutions"
category: "residential"
---

[Category overview content]
```

## Creating Blog Posts

### Location
`src/blog/YYYY-MM-DD-post-title.md`

### Frontmatter Structure
```yaml
---
layout: post.njk
title: "Blog Post Title"
date: 2025-05-30
author: "Author Name"
description: "Post description for SEO"
tags:
  - insulation
  - arizona
  - tips
---

# Blog Post Content

Write your blog post content here using Markdown.
```

## Creating Standard Pages

### Location
`src/page-name.njk`

### Template Structure
```yaml
---
layout: page.njk
title: "Page Title"
meta_description: "Page description"
---

<section class="page-content">
  <div class="container">
    <h1>{{ title }}</h1>
    <!-- Page content -->
  </div>
</section>
```

## Content Guidelines

### Arizona-Specific Content
Always include Arizona context:
- **Climate challenges:** 160°F attics, monsoon moisture
- **Local areas:** Phoenix, Scottsdale, Mesa, Tempe, etc.
- **Regional benefits:** Energy savings in extreme heat
- **Local regulations:** Building codes, permits

### SEO Best Practices
- **Title tags:** Include location and service
- **Meta descriptions:** 150-160 characters
- **Headers:** Use H1, H2, H3 hierarchy
- **Keywords:** Natural integration, avoid stuffing
- **Local SEO:** Include city names and "Arizona"

### Content Tone
- **Professional:** Expert knowledge and experience
- **Educational:** Explain benefits and processes
- **Local:** Arizona-focused solutions
- **Trustworthy:** Credentials and certifications
- **Action-oriented:** Clear next steps

### Required Elements for Service Pages
1. **Hero section** with service name and benefits
2. **Benefits grid** with 4-6 key advantages
3. **Process steps** showing how service works
4. **Pricing information** (ranges or "contact for quote")
5. **Why choose ICA** section
6. **Customer testimonials**
7. **FAQ section** with common questions
8. **Call-to-action** with contact information
9. **Related services** for cross-promotion

## Image Guidelines

### Image Locations
- Service images: `src/images/service-name.webp`
- General images: `src/images/descriptive-name.webp`
- Logos/badges: `src/images/logo-name.webp`

### Image Naming
- Use descriptive names: `attic-insulation-arizona.webp`
- Include location when relevant
- Use WebP format for optimization
- Keep file sizes under 500KB

### Image Usage in Templates
```nunjucks
heroImage: "/images/service-hero.webp"
```

## Data Management

### Global Site Data (`src/_data/site.json`)
```json
{
  "company_name": "Insulation Contractors of Arizona",
  "phone": "623-241-1939",
  "license": "ROC 341983",
  "service_areas": ["Phoenix", "Scottsdale", "Mesa", "Tempe"]
}
```

### Navigation Data (`src/_data/navigation.json`)
```json
{
  "main": [
    {
      "text": "Services",
      "url": "/services/",
      "submenu": [...]
    }
  ]
}
```

## URL Structure

### Service URLs
- Category: `/services/residential/`
- Service: `/services/residential/attic/`
- Product: `/products/spray-foam/`

### Blog URLs
- Post: `/blog/post-title/`
- Category: `/blog/category/`

### Standard Pages
- About: `/about/`
- Contact: `/contact/`

## Testing New Content

### Local Testing
1. Run `npm run dev`
2. Navigate to new page URL
3. Check for console errors
4. Verify all sections load
5. Test responsive design
6. Check internal links

### Pre-Deployment Checklist
- [ ] Layout reference includes `layouts/` path
- [ ] All included sections exist
- [ ] Frontmatter is complete and valid
- [ ] Images exist and load properly
- [ ] Internal links work
- [ ] SEO elements are present
- [ ] Content follows brand guidelines
- [ ] No console errors in browser

## Common Mistakes to Avoid

### Layout References
❌ `layout: service-page.njk`
✅ `layout: layouts/service-page.njk`

### Missing Templates
❌ Including non-existent sections
✅ Verify all includes exist before using

### Duplicate URLs
❌ Multiple files creating same URL
✅ Unique permalinks for each page

### Incomplete Frontmatter
❌ Missing required fields
✅ Complete all necessary metadata

### Poor SEO
❌ Generic titles and descriptions
✅ Specific, location-focused content

## Content Maintenance

### Regular Updates
- Review and update pricing annually
- Update service areas as business expands
- Refresh testimonials and case studies
- Update certifications and credentials
- Review and improve SEO performance

### Content Audits
- Check for broken internal links
- Verify image optimization
- Review page load speeds
- Update outdated information
- Ensure consistent messaging
