# ICA Website Complete Implementation Plan & Checklist
## For Echo AI to Execute Autonomously Across Multiple Sessions

---

## 🎯 PROJECT OVERVIEW

**Project:** Complete recreation of Insulation Contractors of Arizona website
**Source Repo:** https://github.com/MCERQUA/ECHO2/tree/main/clients/Josh/Insulation_Contractors_Of_Arizona/
**Target Repo:** https://github.com/MCERQUA/ICA-Website
**Technology:** 11ty (Eleventy) Static Site Generator
**Deployment:** Netlify

### ⚠️ CRITICAL CONSTRAINTS
- **MAX 1500 LINES per file** (message length limit)
- Files exceeding 1500 lines MUST be split into components
- Track completion status after EVERY task
- Update this checklist in GitHub after each session

---

## 📁 RESOURCE LOCATIONS

### Source Content (ECHO2 Repository)
```
https://github.com/MCERQUA/ECHO2/tree/main/clients/Josh/Insulation_Contractors_Of_Arizona/
├── website-recreation/         # Website analysis and content
│   ├── page-content/           # All page content files
│   ├── assets/                 # Images, logos, documents
│   ├── seo-elements/           # Meta descriptions, keywords
│   └── sitemap-analysis/       # Current site structure
├── website_analysis/           # Original site analysis
├── blog_content/               # 10+ completed blog articles
├── additional-website-pages/   # New page development
└── homepage-improvement/       # Homepage enhancements
```

### Target Website (ICA-Website Repository)
```
https://github.com/MCERQUA/ICA-Website
├── src/
│   ├── _data/                  # Global data files
│   ├── _includes/              # Templates and partials
│   ├── assets/                 # CSS, JS, images
│   ├── blog/                   # Blog posts
│   └── [page files]            # Individual pages
├── .eleventy.js                # 11ty configuration
└── package.json                # Dependencies
```

---

## 🏗️ PHASE 1: SETUP & STRUCTURE
**Status: NOT STARTED**

### [ ] 1.1 Repository Setup
- [ ] Clone ICA-Website repository
- [ ] Review current template structure
- [ ] Document existing files and their purposes
- [ ] Create backup branch for safety

### [ ] 1.2 Global Configuration
**File:** `src/_data/site.json`
```json
{
  "name": "Insulation Contractors of Arizona",
  "url": "https://insulationcontractorsofarizona.com",
  "phone": "623-241-1939",
  "email": "insulationcontractorsofaz@gmail.com",
  "address": {
    "street": "Glendale, AZ",
    "city": "Glendale",
    "state": "AZ",
    "zip": "85301"
  }
}
```

### [ ] 1.3 Navigation Structure
**File:** `src/_data/navigation.json`
- [ ] Create navigation data file
- [ ] Map all menu items from original site
- [ ] Include dropdown structures

---

## 🎨 PHASE 2: TEMPLATES & LAYOUTS
**Status: NOT STARTED**

### [ ] 2.1 Base Layout
**File:** `src/_includes/layouts/base.njk`
- [ ] Header with logo and navigation
- [ ] Footer with contact info and links
- [ ] SEO meta tags structure
- [ ] Schema markup integration

### [ ] 2.2 Page Templates
- [ ] **Home Page Template** - `src/_includes/layouts/home.njk`
- [ ] **Service Page Template** - `src/_includes/layouts/service.njk`
- [ ] **Blog Post Template** - `src/_includes/layouts/post.njk`
- [ ] **Contact Page Template** - `src/_includes/layouts/contact.njk`

### [ ] 2.3 Component Partials
**Location:** `src/_includes/components/`
- [ ] Hero section - `hero.njk`
- [ ] Service cards - `service-card.njk`
- [ ] Testimonials - `testimonials.njk`
- [ ] CTA sections - `cta.njk`
- [ ] Blog preview - `blog-preview.njk`

---

## 📄 PHASE 3: CORE PAGES
**Status: NOT STARTED**

### [ ] 3.1 Home Page
**Files:**
- Content: `ECHO2/.../website-recreation/page-content/home.md`
- Target: `src/index.njk`
- [ ] Hero section with main value proposition
- [ ] Service overview cards
- [ ] Why choose us section
- [ ] Testimonials
- [ ] Blog preview section
- [ ] Contact CTA

### [ ] 3.2 About Page
**Files:**
- Content: `ECHO2/.../website-recreation/page-content/about-us.md`
- Target: `src/about.njk`
- [ ] Company history
- [ ] Christopher Kuhn profile
- [ ] Certifications and credentials
- [ ] Service area map

### [ ] 3.3 Contact Page
**Files:**
- Content: `ECHO2/.../website-recreation/page-content/contact.md`
- Target: `src/contact.njk`
- [ ] Contact form
- [ ] Phone and email
- [ ] Service area information
- [ ] Business hours

---

## 🔧 PHASE 4: SERVICE PAGES
**Status: NOT STARTED**

### Core Services (Priority 1)
- [ ] **Spray Foam Insulation** 
  - Source: `ECHO2/.../additional-website-pages/spray-foam-page/`
  - Target: `src/services/spray-foam-insulation.njk`
- [ ] **Attic Insulation**
  - Source: `ECHO2/.../website-recreation/page-content/services/attic-insulation.md`
  - Target: `src/services/attic-insulation.njk`
- [ ] **Fiberglass Insulation**
  - Target: `src/services/fiberglass-insulation.njk`

### Additional Services (Priority 2)
- [ ] Commercial Insulation - `src/services/commercial-insulation.njk`
- [ ] Insulation Removal - `src/services/insulation-removal.njk`
- [ ] Closed Cell Spray Foam - `src/services/closed-cell-spray-foam.njk`
- [ ] Open Cell Spray Foam - `src/services/open-cell-spray-foam.njk`

### Specialty Services (Priority 3)
- [ ] Agricultural Tank Insulation
- [ ] Duct Cleaning
- [ ] Air Sealing

---

## 📝 PHASE 5: BLOG IMPLEMENTATION
**Status: NOT STARTED**

### [ ] 5.1 Blog Structure Setup
- [ ] Create blog collection in `.eleventy.js`
- [ ] Set up blog listing page - `src/blog/index.njk`
- [ ] Configure pagination (10 posts per page)

### [ ] 5.2 Blog Migration (10 Published Articles)
**Source:** `ECHO2/.../blog_content/`

1. [ ] Beat the Arizona Heat Guide
2. [ ] Summer Heat Protection
3. [ ] Common Insulation Problems
4. [ ] Arizona Homeowner's Insulation Timeline
5. [ ] Spray Foam vs Fiberglass
6. [ ] Complete Attic Insulation Guide
7. [ ] Indoor Air Quality Guide
8. [ ] DIY vs Professional Insulation
9. [ ] Desert-Proof Strategies
10. [ ] Commercial Insulation Solutions

**For each blog:**
- [ ] Create markdown file in `src/blog/`
- [ ] Add frontmatter (title, date, excerpt, image)
- [ ] Format content (check 1500 line limit)
- [ ] Add internal/external links
- [ ] Optimize images

---

## 🎯 PHASE 6: SEO & PERFORMANCE
**Status: NOT STARTED**

### [ ] 6.1 Technical SEO
- [ ] XML Sitemap generation
- [ ] Robots.txt file
- [ ] 301 redirects for old URLs
- [ ] Canonical URLs
- [ ] Schema markup for all pages

### [ ] 6.2 Meta Data
**Source:** `ECHO2/.../website-recreation/seo-elements/`
- [ ] Page titles (all pages)
- [ ] Meta descriptions (all pages)
- [ ] Open Graph tags
- [ ] Twitter cards

### [ ] 6.3 Performance
- [ ] Image optimization
- [ ] CSS minification
- [ ] JavaScript bundling
- [ ] Lazy loading
- [ ] Critical CSS

---

## 🎨 PHASE 7: STYLING & RESPONSIVE DESIGN
**Status: NOT STARTED**

### [ ] 7.1 Global Styles
**File:** `src/assets/css/main.css`
- [ ] Typography system
- [ ] Color variables (ICA brand colors)
- [ ] Spacing system
- [ ] Component styles

### [ ] 7.2 Responsive Design
- [ ] Mobile navigation
- [ ] Responsive grid system
- [ ] Touch-friendly CTAs
- [ ] Responsive images

### [ ] 7.3 Interactive Elements
- [ ] Navigation dropdowns
- [ ] Form validation
- [ ] Smooth scrolling
- [ ] Loading states

---

## 🚀 PHASE 8: DEPLOYMENT & TESTING
**Status: NOT STARTED**

### [ ] 8.1 Pre-Deployment
- [ ] Build test locally
- [ ] Check all links
- [ ] Validate HTML
- [ ] Test forms
- [ ] Mobile testing

### [ ] 8.2 Netlify Configuration
- [ ] Environment variables
- [ ] Build settings
- [ ] Form handling
- [ ] SSL certificate
- [ ] Domain configuration

### [ ] 8.3 Post-Launch
- [ ] Submit sitemap to Google
- [ ] Test 301 redirects
- [ ] Monitor Core Web Vitals
- [ ] Set up analytics
- [ ] Configure Search Console

---

## 📊 TRACKING & SESSION MANAGEMENT

### Session Log Template
```markdown
## Session [DATE] - [TIME]
**Completed:**
- [ ] Task description
- [ ] Files created/modified

**Next Priority:**
- Task to start next session

**Notes:**
- Any issues or blockers
```

### File Size Management
When creating files > 1500 lines:
1. Split into logical components
2. Name pattern: `[filename]-part1.njk`, `[filename]-part2.njk`
3. Use includes to combine: `{% include "components/[filename]-part1.njk" %}`

---

## 🔄 CURRENT STATUS SUMMARY

**Last Updated:** May 27, 2025
**Overall Progress:** 0% - NOT STARTED
**Current Phase:** Setup pending
**Next Action:** Begin Phase 1.1 - Repository Setup

### Priority Order:
1. Setup & Global Configuration
2. Base templates and layouts
3. Home page implementation
4. Core service pages
5. Blog migration
6. Additional pages
7. SEO optimization
8. Final testing and deployment

---

## 📌 QUICK REFERENCE COMMANDS

```bash
# Clone repository
git clone https://github.com/MCERQUA/ICA-Website.git

# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build

# Deploy to Netlify
git push origin main
```

---

**Remember:** Update this checklist after EVERY work session. Check off completed items and add session notes to maintain continuity across conversations.