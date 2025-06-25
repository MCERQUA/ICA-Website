# Insulation Contractors of Arizona - Website

Professional website for Arizona's premier insulation contractor, serving the Phoenix metro area with 20+ years of experience.

## 🏢 Business Information

**IMPORTANT: ROC License Number is 335896**
- Always use ROC# **335896** in all content, documentation, and code
- This is the official Arizona Registrar of Contractors license number
- Found in: `src/_data/site.json` as `roc_license: "335896"`
- Displays in footer as: `ROC# {{ site.roc_license }}`

### Company Details
- **Name:** Insulation Contractors of Arizona
- **Owner:** Christopher Kuhn
- **ROC License:** 335896 (Licensed, Bonded & Insured)
- **Phone:** 623-241-1939
- **Email:** insulationcontractorsofaz@gmail.com
- **Address:** 10616 N 50th Ave, Glendale, AZ 85304
- **Website:** https://insulationcontractorsofarizona.com
- **BBB Rating:** A+
- **Experience:** 20+ years

### Service Areas
Phoenix, Glendale, Gilbert, Chandler, Scottsdale, Tempe, Mesa, Peoria, Sun Lakes, Ahwatukee

## 🛠️ Technical Stack

- **Site Generator:** Eleventy (11ty)
- **Template Engine:** Nunjucks
- **CSS:** Modern CSS with custom properties, zero framework dependencies
- **Performance:** Optimized images, lazy loading, critical CSS inlined
- **SEO:** Comprehensive schema markup, meta tags, sitemap
- **Hosting:** Netlify with custom domain

## 📁 Project Structure

```
src/
├── _data/
│   ├── site.json          # Core site configuration (includes ROC# 335896)
│   └── navigation.json    # Navigation structure
├── _includes/
│   ├── base.njk          # Main template (uses {{ site.roc_license }})
│   ├── components/       # Reusable components
│   └── sections/         # Page sections
├── services/             # Service pages
├── blog/                # Blog posts
├── css/                 # Stylesheets
├── images-optimized/    # Optimized images
└── robots.njk           # SEO robots.txt
```

## 🚀 Development

### Prerequisites
- Node.js 16+
- npm

### Setup
```bash
npm install
npm start        # Development server
npm run build    # Production build
```

### Key Files to Remember
- **`src/_data/site.json`** - Contains ROC license 335896 and all business info
- **`src/_includes/base.njk`** - Main template using site variables
- **Footer displays:** `ROC# {{ site.roc_license }}` (renders as ROC# 335896)

## 📋 Content Guidelines

### ROC License Usage
- **Always use:** ROC# 335896
- **Variable:** `{{ site.roc_license }}`
- **Never hardcode** the ROC number - use the site.json variable
- **Consistent format:** "ROC# 335896" (with space after #)

### Brand Guidelines
- Company name: "Insulation Contractors of Arizona"
- Tagline: "Arizona's Extreme Heat Specialists | Licensed, Bonded & Insured | 20+ Years Experience"
- Focus areas: Spray foam insulation, Arizona climate solutions, energy efficiency

## 🔧 SEO Features

- ✅ Schema.org LocalBusiness markup
- ✅ Complete meta tag implementation
- ✅ XML sitemap generation
- ✅ Robots.txt optimization
- ✅ Local SEO optimization for Arizona
- ✅ Image optimization with proper dimensions
- ✅ Core Web Vitals optimization

## 📞 Support

For technical issues or content updates, ensure all business information remains consistent with the values in `src/_data/site.json`.

**⚠️ CRITICAL:** Always verify ROC license number is 335896 before publishing any content or making site updates.