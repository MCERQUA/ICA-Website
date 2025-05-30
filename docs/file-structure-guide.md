# File Structure Guide

## Root Directory Structure

```
ICA-Website/
├── .eleventy.js              # Eleventy configuration
├── package.json              # Dependencies and scripts
├── netlify.toml              # Netlify deployment config
├── fix-layouts.js            # Layout reference fix script
├── docs/                     # Developer documentation
├── src/                      # Source files (main content)
└── _site/                    # Generated output (ignored in git)
```

## Source Directory (`src/`)

### Main Pages
```
src/
├── index.njk                 # Homepage
├── about.njk                 # About page
├── contact.njk               # Contact page
├── services.njk              # Services overview (REMOVED - was duplicate)
├── projects.njk              # Projects/portfolio page
├── blog.njk                  # Blog listing page
├── 404.njk                   # Error page
├── robots.njk                # Robots.txt
└── sitemap.njk               # XML sitemap
```

### Data Files (`src/_data/`)
```
_data/
├── site.json                 # Global site configuration
└── navigation.json           # Main navigation structure
```

### Templates (`src/_includes/`)
```
_includes/
├── base.njk                  # Base HTML template
├── page.njk                  # Standard page template
├── post.njk                  # Blog post template
├── layouts/                  # Page layouts
├── components/               # Reusable components
└── sections/                 # Page sections
```

#### Layouts (`src/_includes/layouts/`)
```
layouts/
├── page.njk                  # Standard page layout
├── service-page.njk          # Individual service page layout
└── service-category.njk      # Service category layout
```

#### Components (`src/_includes/components/`)
```
components/
├── navigation.njk            # Main site navigation
├── breadcrumbs.njk           # Breadcrumb navigation
├── service-card.njk          # Service preview cards
├── service-menu.njk          # Service navigation menu
├── benefits-grid.njk         # Benefits display grid
├── pricing-table.njk         # Pricing comparison table
├── process-steps.njk         # Process step display
├── quick-quote.njk           # Quote request form
├── faq.njk                   # FAQ section
└── credentials-mini.njk      # Compact credentials display
```

#### Sections (`src/_includes/sections/`)
```
sections/
├── hero.njk                  # Main hero sections
├── service-hero.njk          # Service-specific hero
├── hero-image.njk            # Image-based hero
├── cta.njk                   # Call-to-action sections
├── additional-cta.njk        # Secondary CTAs
├── testimonials.njk          # Customer testimonials
├── why-choose-ica.njk        # Company advantages
├── service-areas.njk         # Geographic coverage
├── service-faq.njk           # Service-specific FAQs
├── related-services.njk      # Service cross-promotion
├── contact-form.njk          # Contact forms
├── credentials-banner.njk    # Certification display
├── accreditations-banner.njk # Professional accreditations
├── licensing-credentials.njk # License information
├── safety-excellence.njk     # Safety standards
├── services-preview.njk      # Service overview
├── recent-posts.njk          # Blog post previews
├── arizona-climate-challenge.njk # Local climate content
├── air-duct-cleaning.njk     # Specialized service content
├── insulation-applications.njk # Application types
├── dense-pack-comparison.njk # Dense pack vs alternatives
├── foam-types-comparison.njk # Spray foam comparisons
├── retrofit-benefits.njk     # Retrofit advantages
└── material-options.njk      # Material selection guide
```

### Content Directories

#### Services (`src/services/`)
```
services/
├── index.njk                 # Main services page
├── spray-foam-insulation.njk # Spray foam overview
├── residential/              # Residential services
├── commercial/               # Commercial services
├── industrial/               # Industrial services
└── agricultural/             # Agricultural services
```

##### Service Subdirectories
```
residential/
├── index.njk                 # Residential services overview
├── attic.njk                 # Attic insulation
├── blown-in.njk              # Blown-in insulation
├── crawl-space.njk           # Crawl space insulation
├── dense-pack.njk            # Dense pack insulation
├── removal.njk               # Insulation removal
├── spray-foam.njk            # Residential spray foam
└── wall.njk                  # Wall insulation

commercial/
├── index.njk                 # Commercial services overview
├── office.njk                # Office buildings
├── retail.njk                # Retail spaces
├── warehouse.njk             # Warehouses
└── new-construction.njk      # New construction

industrial/
├── index.njk                 # Industrial services overview
├── manufacturing.njk         # Manufacturing facilities
├── cold-storage.njk          # Cold storage facilities
└── equipment.njk             # Equipment insulation

agricultural/
├── index.njk                 # Agricultural services overview
├── tank.njk                  # Tank insulation
├── barn.njk                  # Barn insulation
└── storage.njk               # Storage facilities
```

#### Products (`src/products/`)
```
products/
├── index.njk                 # Products overview
├── closed-cell-spray-foam.njk
├── open-cell-spray-foam.njk
├── cellulose.njk
├── fiberglass-batts.njk
├── mineral-wool.njk
└── air-sealing.njk
```

#### Blog (`src/blog/`)
```
blog/
├── 2024-01-15-choosing-right-contractor.md
├── 2024-02-01-home-renovation-trends.md
├── 2024-02-15-construction-safety-tips.md
├── 2025-05-01-ica-beat-arizona-heat-guide.md
├── 2025-05-08-ica-arizona-insulation-timeline.md
└── testarticle.md
```

#### About (`src/about/`)
```
about/
├── community.njk             # Community involvement
└── events.njk                # Company events
```

### Assets

#### Styles (`src/css/`)
```
css/
├── style.css                 # Main stylesheet
├── layout.css                # Layout and grid systems
├── components.css            # Component-specific styles
├── forms.css                 # Form styling
├── animations.css            # Animation definitions
└── performance.css           # Performance optimizations
```

#### Images (`src/images/`)
```
images/
├── icaa-Logo.webp            # Company logo
├── Insulation_Contractors_of_arizona_logo.webp
├── insulation_contractors_of_arizona_spray_foam_Arizona_Sunset.webp
├── [service-specific images] # Various service images
├── [certification badges]    # Professional certifications
└── Readme.md                 # Image documentation
```

## File Naming Conventions

### Pages and Templates
- Use lowercase with hyphens: `dense-pack.njk`
- Be descriptive: `service-page.njk` not `sp.njk`
- Match URL structure: `crawl-space.njk` → `/crawl-space/`

### Images
- Use descriptive names: `Attic_insulation_removal.webp`
- Include location when relevant: `arizona_spray_foam.webp`
- Use underscores for spaces in existing files
- Prefer WebP format for optimization

### CSS Files
- Organize by purpose: `components.css`, `layout.css`
- Use lowercase with hyphens for new files

## Critical Path Dependencies

### Layout Dependencies
- All service pages MUST use: `layout: layouts/service-page.njk`
- Standard pages use: `layout: page.njk` or `layout: base.njk`
- Never use: `layout: service-page.njk` (missing path)

### Template Dependencies
- Service pages depend on sections existing in `src/_includes/sections/`
- Components must exist before being included
- Check `src/_includes/sections/` before referencing sections

### URL Structure
- Avoid duplicate permalinks (multiple files → same URL)
- Index files automatically create directory URLs
- Service categories use index files for overview pages

## Build Output (`_site/`)
Generated by Eleventy during build process:
- Contains processed HTML, CSS, and assets
- Mirrors source structure with compiled templates
- Deployed to Netlify
- Never edit directly (regenerated on each build)
