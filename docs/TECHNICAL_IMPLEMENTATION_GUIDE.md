# ICA Website Technical Implementation Guide
## Detailed Instructions for Echo AI Autonomous Execution

---

## 🛠️ TECHNICAL SETUP DETAILS

### Eleventy (11ty) Project Structure
```
ICA-Website/
├── .eleventy.js          # Main configuration file
├── src/                  # Source directory
│   ├── _data/           # Global data (site.json, navigation.json)
│   ├── _includes/       # Templates and partials
│   │   ├── layouts/     # Page layouts
│   │   └── components/  # Reusable components
│   ├── assets/          # Static assets
│   │   ├── css/         # Stylesheets
│   │   ├── js/          # JavaScript
│   │   └── images/      # Images
│   ├── blog/            # Blog posts (markdown)
│   └── *.njk            # Page files (Nunjucks)
└── _site/               # Generated output (git ignored)
```

---

## 📋 DETAILED TASK INSTRUCTIONS

### TASK 1: Global Site Configuration

**1.1 Create Site Data File**
```javascript
// File: src/_data/site.json
{
  "name": "Insulation Contractors of Arizona",
  "tagline": "Arizona's Trusted Insulation Experts Since 2005",
  "url": "https://insulationcontractorsofarizona.com",
  "contact": {
    "phone": "623-241-1939",
    "email": "insulationcontractorsofaz@gmail.com",
    "hours": "Mon-Fri 7:00 AM - 5:00 PM"
  },
  "location": {
    "primary": "Glendale, AZ",
    "secondary": "Wittmann, AZ",
    "serviceArea": "Phoenix Metropolitan Area"
  },
  "social": {
    "facebook": "https://facebook.com/insulationcontractorsaz",
    "instagram": "@insulation_contractors_of_az"
  },
  "owner": {
    "name": "Christopher Kuhn",
    "credentials": ["Icynene Certified", "SPFA Member", "20+ Years Experience"]
  }
}
```

**1.2 Navigation Configuration**
```javascript
// File: src/_data/navigation.json
{
  "main": [
    {"text": "Home", "url": "/"},
    {
      "text": "Services",
      "url": "/services/",
      "children": [
        {"text": "Spray Foam Insulation", "url": "/services/spray-foam-insulation/"},
        {"text": "Attic Insulation", "url": "/services/attic-insulation/"},
        {"text": "Fiberglass Insulation", "url": "/services/fiberglass-insulation/"},
        {"text": "Commercial Insulation", "url": "/services/commercial-insulation/"},
        {"text": "Insulation Removal", "url": "/services/insulation-removal/"}
      ]
    },
    {"text": "About Us", "url": "/about/"},
    {"text": "Blog", "url": "/blog/"},
    {"text": "Events", "url": "/events/"},
    {"text": "Contact", "url": "/contact/"}
  ]
}
```

---

### TASK 2: Base Layout Template

**File:** `src/_includes/layouts/base.njk`
```nunjucks
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }} | {{ site.name }}</title>
    <meta name="description" content="{{ description or site.tagline }}">
    
    <!-- SEO Meta Tags -->
    <meta property="og:title" content="{{ title }} | {{ site.name }}">
    <meta property="og:description" content="{{ description or site.tagline }}">
    <meta property="og:image" content="{{ site.url }}/assets/images/og-image.jpg">
    <meta property="og:url" content="{{ site.url }}{{ page.url }}">
    
    <!-- Schema.org markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "{{ site.name }}",
      "telephone": "{{ site.contact.phone }}",
      "email": "{{ site.contact.email }}",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "{{ site.location.primary }}"
      }
    }
    </script>
    
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
    {% include "components/header.njk" %}
    
    <main>
        {{ content | safe }}
    </main>
    
    {% include "components/footer.njk" %}
    
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

---

### TASK 3: Component Creation Guidelines

**3.1 Header Component**
```nunjucks
<!-- File: src/_includes/components/header.njk -->
<header class="site-header">
    <div class="container">
        <div class="header-top">
            <a href="tel:{{ site.contact.phone }}" class="phone-cta">
                Call Now: {{ site.contact.phone }}
            </a>
        </div>
        
        <nav class="main-nav">
            <a href="/" class="logo">
                <img src="/assets/images/ica-logo.png" alt="{{ site.name }}">
            </a>
            
            <ul class="nav-menu">
            {% for item in navigation.main %}
                <li class="nav-item{% if item.children %} has-dropdown{% endif %}">
                    <a href="{{ item.url }}">{{ item.text }}</a>
                    {% if item.children %}
                    <ul class="dropdown">
                        {% for child in item.children %}
                        <li><a href="{{ child.url }}">{{ child.text }}</a></li>
                        {% endfor %}
                    </ul>
                    {% endif %}
                </li>
            {% endfor %}
            </ul>
            
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </div>
</header>
```

---

### TASK 4: Home Page Implementation

**4.1 Home Page Structure**
```nunjucks
<!-- File: src/index.njk -->
---
layout: layouts/base.njk
title: Professional Insulation Services in Phoenix & Arizona
description: Expert spray foam, attic, and fiberglass insulation. 20+ years experience. Free estimates. Call 623-241-1939
---

<!-- Hero Section -->
{% include "components/home/hero.njk" %}

<!-- Service Cards -->
<section class="services-overview">
    <div class="container">
        <h2>Our Insulation Services</h2>
        <div class="service-grid">
            {% for service in collections.services | limit(6) %}
                {% include "components/service-card.njk" %}
            {% endfor %}
        </div>
    </div>
</section>

<!-- Why Choose Us -->
{% include "components/home/why-choose-us.njk" %}

<!-- Testimonials -->
{% include "components/testimonials.njk" %}

<!-- Blog Preview -->
<section class="blog-preview">
    <div class="container">
        <h2>Latest Insights</h2>
        <div class="blog-grid">
            {% for post in collections.blog | reverse | limit(3) %}
                {% include "components/blog-preview-card.njk" %}
            {% endfor %}
        </div>
    </div>
</section>

<!-- CTA Section -->
{% include "components/cta-section.njk" %}
```

---

### TASK 5: Blog Post Migration Process

**5.1 Blog Post Template**
```nunjucks
<!-- File: src/_includes/layouts/post.njk -->
---
layout: layouts/base.njk
---
<article class="blog-post">
    <div class="container">
        <header class="post-header">
            <h1>{{ title }}</h1>
            <div class="post-meta">
                <time datetime="{{ date | dateIso }}">{{ date | dateReadable }}</time>
                <span class="reading-time">{{ content | readingTime }} min read</span>
            </div>
        </header>
        
        <div class="post-content">
            {{ content | safe }}
        </div>
        
        <aside class="post-sidebar">
            {% include "components/blog/recent-posts.njk" %}
            {% include "components/blog/cta-sidebar.njk" %}
        </aside>
    </div>
</article>
```

**5.2 Blog Post Frontmatter Example**
```markdown
---
title: "Beat the Arizona Heat: Complete Insulation Guide"
date: 2025-05-14
excerpt: "Discover how proper insulation can slash your cooling costs..."
image: /assets/images/blog/arizona-heat-guide.jpg
tags: 
  - energy-savings
  - spray-foam
  - arizona
---

[Blog content here - remember 1500 line limit!]
```

---

### TASK 6: CSS Organization

**File Structure:**
```
src/assets/css/
├── main.css           # Main entry point
├── base/              # Reset, typography, variables
│   ├── _reset.css
│   ├── _typography.css
│   └── _variables.css
├── components/        # Component styles
│   ├── _header.css
│   ├── _footer.css
│   ├── _buttons.css
│   └── _cards.css
├── layouts/           # Page layout styles
│   ├── _home.css
│   ├── _blog.css
│   └── _services.css
└── utilities/         # Helper classes
    ├── _spacing.css
    └── _responsive.css
```

**CSS Variables Example:**
```css
/* File: src/assets/css/base/_variables.css */
:root {
    /* Brand Colors */
    --color-primary: #1e3c72;
    --color-secondary: #2a5298;
    --color-accent: #ff6b35;
    --color-success: #28a745;
    
    /* Neutrals */
    --color-white: #ffffff;
    --color-light: #f8f9fa;
    --color-gray: #6c757d;
    --color-dark: #333333;
    
    /* Typography */
    --font-primary: 'Arial', sans-serif;
    --font-heading: 'Georgia', serif;
    
    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 2rem;
    --space-lg: 3rem;
    --space-xl: 4rem;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}
```

---

### TASK 7: Build Configuration

**Update .eleventy.js:**
```javascript
module.exports = function(eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Add date filter
    eleventyConfig.addFilter("dateReadable", dateObj => {
        return new Date(dateObj).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });
    
    // Add reading time filter
    eleventyConfig.addFilter("readingTime", text => {
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    });
    
    // Collections
    eleventyConfig.addCollection("services", collection => {
        return collection.getFilteredByGlob("src/services/*.njk");
    });
    
    eleventyConfig.addCollection("blog", collection => {
        return collection.getFilteredByGlob("src/blog/*.md");
    });
    
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};
```

---

## 🚨 CRITICAL REMINDERS

1. **File Size Limit**: Always check line count before saving
   - If > 1500 lines, split into parts
   - Use includes to combine parts

2. **Content Sources**: Always pull from ECHO2 repository
   - Page content: `/website-recreation/page-content/`
   - Blog content: `/blog_content/`
   - SEO data: `/website-recreation/seo-elements/`

3. **Image Handling**:
   - Copy all images from ECHO2 to `src/assets/images/`
   - Optimize for web (max 1920px width)
   - Use descriptive filenames

4. **Testing Protocol**:
   - Run `npm start` after each major change
   - Test all links
   - Check responsive design
   - Validate HTML output

5. **Git Workflow**:
   ```bash
   git add .
   git commit -m "Descriptive message about changes"
   git push origin main
   ```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
/* Default: Mobile (< 576px) */

/* Small devices (≥ 576px) */
@media (min-width: 576px) { }

/* Medium devices (≥ 768px) */
@media (min-width: 768px) { }

/* Large devices (≥ 992px) */
@media (min-width: 992px) { }

/* Extra large devices (≥ 1200px) */
@media (min-width: 1200px) { }
```

---

**Remember**: This guide works with DEVELOPER_IMPLEMENTATION_PLAN.md. Update both documents as you progress!