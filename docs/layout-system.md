# Layout System Guide

## Overview
The ICA website uses a hierarchical template system built on Eleventy's Nunjucks templating engine. Understanding this system is crucial for maintaining consistency and avoiding deployment errors.

## Template Hierarchy

```
base.njk (HTML foundation)
├── page.njk (standard pages)
├── post.njk (blog posts)
└── layouts/
    ├── page.njk (enhanced page layout)
    ├── service-page.njk (service pages)
    └── service-category.njk (service categories)
```

## Base Templates

### `src/_includes/base.njk`
- **Purpose:** Core HTML structure, head, navigation, footer
- **Used by:** All other layouts extend this
- **Contains:** 
  - HTML doctype and meta tags
  - CSS and JavaScript includes
  - Main navigation
  - Footer
  - Basic page structure

### `src/_includes/page.njk`
- **Purpose:** Standard page wrapper
- **Extends:** `base.njk`
- **Used by:** Simple content pages
- **Contains:** Basic content wrapper

### `src/_includes/post.njk`
- **Purpose:** Blog post layout
- **Extends:** `base.njk`
- **Used by:** Blog posts (`.md` files)
- **Contains:** Article structure, metadata, sharing

## Layout Directory (`src/_includes/layouts/`)

### `layouts/page.njk`
- **Purpose:** Enhanced page layout with more features
- **Extends:** `base.njk`
- **Used by:** Complex content pages
- **Features:** 
  - Hero sections
  - Breadcrumbs
  - Enhanced SEO
  - Structured content areas

### `layouts/service-page.njk` ⚠️ CRITICAL
- **Purpose:** Individual service page layout
- **Extends:** `base.njk`
- **Used by:** All service detail pages
- **Features:**
  - Service-specific hero
  - Benefits grid
  - Process steps
  - Pricing tables
  - FAQ sections
  - Related services
  - Call-to-action sections

**IMPORTANT:** Always reference as `layout: layouts/service-page.njk` (include the `layouts/` path)

### `layouts/service-category.njk`
- **Purpose:** Service category overview pages
- **Extends:** `base.njk`
- **Used by:** Service category index pages
- **Features:**
  - Category overview
  - Service listings
  - Category-specific content

## Layout Usage Rules

### ⚠️ CRITICAL: Layout Reference Format
```yaml
# ✅ CORRECT
layout: layouts/service-page.njk

# ❌ INCORRECT (causes deployment failure)
layout: service-page.njk
```

### Layout Selection Guide

| Page Type | Layout | Example |
|-----------|--------|---------|
| Homepage | `base.njk` | `src/index.njk` |
| About/Contact | `page.njk` | `src/about.njk` |
| Service Detail | `layouts/service-page.njk` | `src/services/residential/attic.njk` |
| Service Category | `layouts/service-category.njk` | `src/services/residential/index.njk` |
| Blog Post | `post.njk` | `src/blog/*.md` |
| Services Overview | `page.njk` | `src/services/index.njk` |

## Component System

### Components (`src/_includes/components/`)
Reusable UI elements that can be included in any template:

```nunjucks
{% include "components/benefits-grid.njk" %}
{% include "components/pricing-table.njk" %}
{% include "components/process-steps.njk" %}
```

#### Available Components:
- `benefits-grid.njk` - Display service benefits
- `pricing-table.njk` - Pricing comparison tables
- `process-steps.njk` - Step-by-step processes
- `service-card.njk` - Service preview cards
- `navigation.njk` - Site navigation
- `breadcrumbs.njk` - Breadcrumb navigation
- `faq.njk` - FAQ sections
- `quick-quote.njk` - Quote request forms

### Sections (`src/_includes/sections/`)
Larger content blocks for specific purposes:

```nunjucks
{% include "sections/service-hero.njk" %}
{% include "sections/why-choose-ica.njk" %}
{% include "sections/testimonials.njk" %}
```

#### Available Sections:
- `service-hero.njk` - Service page headers
- `cta.njk` - Call-to-action blocks
- `testimonials.njk` - Customer testimonials
- `why-choose-ica.njk` - Company advantages
- `contact-form.njk` - Contact forms
- `credentials-banner.njk` - Certifications
- `arizona-climate-challenge.njk` - Local content
- `retrofit-benefits.njk` - Retrofit advantages
- `material-options.njk` - Material comparisons

## Data Flow

### Frontmatter → Template Variables
```yaml
---
title: "Attic Insulation Services"
benefits:
  - title: "Energy Savings"
    description: "Reduce cooling costs"
---
```

Templates access this data:
```nunjucks
<h1>{{ title }}</h1>
{% for benefit in benefits %}
  <div>{{ benefit.title }}: {{ benefit.description }}</div>
{% endfor %}
```

### Global Data (`src/_data/`)
- `site.json` - Site-wide configuration
- `navigation.json` - Menu structure

Access in templates:
```nunjucks
{{ site.phone }}
{{ site.company_name }}
```

## Template Inclusion Patterns

### Standard Service Page Structure
```nunjucks
---
layout: layouts/service-page.njk
title: "Service Name"
---

{% include "sections/service-hero.njk" %}
{% include "components/benefits-grid.njk" %}
{% include "components/process-steps.njk" %}
{% include "components/pricing-table.njk" %}
{% include "sections/why-choose-ica.njk" %}
{% include "sections/testimonials.njk" %}
{% include "sections/cta.njk" %}
```

### Variable Passing to Components
```nunjucks
{% set pricing = pricingOptions %}
{% include "components/pricing-table.njk" %}

{% set process = processSteps %}
{% include "components/process-steps.njk" %}
```

## CSS Integration

### Layout-Specific Styles
Each layout can include specific CSS:
```nunjucks
<style>
.service-hero {
  background: linear-gradient(...);
}
</style>
```

### Global Styles
Included in `base.njk`:
- `src/css/style.css` - Main styles
- `src/css/layout.css` - Layout systems
- `src/css/components.css` - Component styles

## Common Patterns

### Hero Section Pattern
```nunjucks
{% set title = "Page Title" %}
{% set subtitle = "Page Subtitle" %}
{% include "sections/service-hero.njk" %}
```

### Benefits Display Pattern
```yaml
benefits:
  - title: "Benefit Name"
    description: "Benefit description"
    icon: "💰"
```

### Process Steps Pattern
```yaml
processSteps:
  - title: "Step Name"
    description: "Step description"
```

## Error Prevention

### Template Dependencies
Before including any template, verify it exists:
1. Check `src/_includes/sections/` directory
2. Check `src/_includes/components/` directory
3. Create missing templates if needed

### Layout Reference Validation
Always use full paths for layouts in subdirectories:
- ✅ `layouts/service-page.njk`
- ❌ `service-page.njk`

### Variable Validation
Ensure frontmatter variables exist before using in templates:
```nunjucks
{% if benefits %}
  {% include "components/benefits-grid.njk" %}
{% endif %}
```

## Debugging Templates

### Common Issues
1. **Layout not found:** Check path format
2. **Template not found:** Verify file exists
3. **Variable undefined:** Check frontmatter
4. **Styling issues:** Check CSS includes

### Testing Changes
1. Run `npm run dev` locally
2. Check browser console for errors
3. Verify all includes resolve
4. Test responsive design
