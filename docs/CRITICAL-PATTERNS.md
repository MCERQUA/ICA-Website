# CRITICAL PATTERNS & COMMON PITFALLS

## ⚠️ STOP! Read This Before Making Changes

This document contains critical patterns that MUST be followed to avoid repeated build failures and styling issues.

---

## 🔴 Layout & Front Matter Rules

### ✅ CORRECT Layout Declaration
```yaml
---
layout: base.njk  # ✅ CORRECT - Eleventy knows to look in _includes/layouts/
---
```

### ❌ WRONG Layout Declaration
```yaml
---
layout: layouts/base.njk  # ❌ WRONG - Will cause build failure
---
```

### ✅ CORRECT Schema Implementation
```njk
<!-- Put schema at the BOTTOM of the page as JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  ...
}
</script>
```

### ❌ WRONG Schema Implementation
```yaml
---
schema:  # ❌ WRONG - YAML can't handle complex objects
  "@context": "https://schema.org"
  "@type": "Service"
---
```

---

## 🎨 CSS & Styling Rules

### Dark Background Pattern
When creating pages with dark themes, you MUST:

1. **Set pageClass in front matter:**
```yaml
---
pageClass: commercial-page  # This class will be applied to <body>
additionalCss:
  - /css/commercial.css     # This CSS file will be loaded
---
```

2. **Ensure base.njk applies the class:**
```html
<body class="{{ pageClass }}">  <!-- Critical! Must be in base.njk -->
```

3. **Force dark backgrounds in CSS:**
```css
.commercial-page {
  background: #0A0A0A !important;
  color: #ffffff !important;
}

.commercial-page main,
.commercial-page section {
  background: #0A0A0A !important;
  color: #ffffff !important;
}
```

---

## 🧩 Component Architecture Rules

### ✅ CORRECT: Use Existing Components
```njk
<!-- Use standard hero component -->
{% include "sections/hero.njk" %}

<!-- Use existing showcase component -->
{% include "sections/commercial-showcase.njk" %}

<!-- Keep pages small and modular -->
```

### ❌ WRONG: Inline Everything
```njk
<!-- DON'T create 17KB+ single-file pages -->
<!-- DON'T duplicate component functionality -->
<!-- DON'T write inline styles when components exist -->
```

---

## 🚀 Hero Component Rules

### ALWAYS Use Standard Hero
```yaml
---
heroTitle: Your Page Title
heroSubtitle: Your Page Subtitle
ctaPrimary: Get Free Quote
ctaPrimaryLink: /contact/
---

{% include "sections/hero.njk" %}
```

**NEVER** create custom hero sections like:
- page-hero.njk
- service-hero-custom.njk
- [category]-hero.njk

---

## 📁 File Structure Rules

### Service Pages Pattern
```
src/services/
├── commercial/
│   ├── index.njk      (< 5KB - uses components)
│   ├── office.njk     (< 3KB - uses components)
│   └── warehouse.njk  (< 3KB - uses components)
```

### Component Location
```
src/_includes/sections/
├── hero.njk                    # Standard hero for ALL pages
├── commercial-showcase.njk     # Reusable showcase
├── commercial-calculator.njk   # Reusable calculator
└── [category]-specific.njk     # Category-specific components
```

---

## 🔍 Debugging Checklist

Before committing, verify:

- [ ] Layout is `base.njk` not `layouts/base.njk`
- [ ] No complex objects in YAML front matter
- [ ] Schema markup is in `<script>` tags at page bottom
- [ ] `pageClass` is set for custom styling
- [ ] `additionalCss` array includes required CSS files
- [ ] Page uses existing components (not inline HTML)
- [ ] File size is < 5KB (components handle the rest)
- [ ] CSS forces backgrounds with `!important` where needed
- [ ] Text contrast is proper (white on dark, dark on light)

---

## 💡 Quick Reference

### Standard Page Template
```njk
---
layout: base.njk
title: Page Title
description: SEO description here
pageClass: page-specific-class
additionalCss:
  - /css/page-specific.css
heroTitle: Hero Title
heroSubtitle: Hero Subtitle
ctaPrimary: CTA Text
ctaPrimaryLink: /contact/
---

{% include "sections/hero.njk" %}

<section class="content-section">
  <div class="container">
    <!-- Minimal page-specific content -->
  </div>
</section>

{% include "sections/existing-component.njk" %}
{% include "sections/another-component.njk" %}
{% include "sections/cta.njk" %}
```

---

## 🚨 Common Build Errors & Fixes

### Error: "Cannot find template"
**Fix**: Change `layout: layouts/base.njk` to `layout: base.njk`

### Error: "YAML parsing error"
**Fix**: Move complex objects from front matter to `<script>` tags

### Error: "White text on white background"
**Fix**: Ensure pageClass is applied to body and CSS forces dark backgrounds

### Error: "File too large"
**Fix**: Break into components, use includes instead of inline HTML

---

## 📝 Memory Update Protocol

When making changes:
1. Update this file with new patterns discovered
2. Update memory.json with specific examples
3. Document in PR what pattern was added
4. Test the pattern before committing

Remember: **Every repeated mistake should become a documented pattern!**
