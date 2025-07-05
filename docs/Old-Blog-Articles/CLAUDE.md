# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Directory Overview

This subdirectory (`/docs/Old-Blog-Articles/`) contains legacy blog articles in standalone HTML format from the ICA website. These are static HTML files with embedded CSS styling that need to be migrated to the main blog system at `/src/blog/`.

### Current Contents
- 8 HTML blog articles about insulation topics
- Each file is self-contained with inline CSS
- Articles focus on Arizona-specific insulation challenges and solutions

## Project Context

This is part of the ICA (Insulation Contractors of Arizona) 11ty website. The main project uses Liquid templating, Tailwind CSS v3, and follows a component-based architecture.

## Migration Tasks

### Converting HTML to Markdown
When migrating these articles to the main blog system:

1. **Extract Content**: Copy article content from HTML files
2. **Create Markdown**: Convert to `.md` files in `/src/blog/` with proper frontmatter:
   ```yaml
   ---
   title: "Article Title"
   date: 2025-01-03
   description: "Meta description from HTML"
   tags: ["insulation", "arizona", "air-quality"]
   layout: "post.njk"
   ---
   ```
3. **Remove Inline Styles**: Use the project's existing Tailwind classes instead
4. **Preserve SEO**: Maintain meta descriptions and keywords as frontmatter

### Article Files
- `attic-insulation-guide.html` - Indoor air quality guide
- `common-insulation-problems.html` - Common insulation issues
- `desert-proof-strategies.html` - Desert climate strategies
- `diy-vs-professional.html` - DIY vs professional comparison
- `energy-cost-savings.html` - Energy savings guide
- `insulation-timeline.html` - When to upgrade insulation
- `spray-foam-vs-fiberglass.html` - Material comparison
- `summer-heat-protection.html` - Heat protection strategies

## Development Commands

```bash
# Development
npm run dev              # Start development server on http://localhost:8080

# Production
npm run build           # Build for production (outputs to _site/)
npm run serve           # Serve production build locally

# Code Quality
npm run lint            # Run linter (if configured)
```

## HTML Article Structure

Each HTML file in this directory follows a similar pattern:
- Self-contained HTML document with embedded CSS
- ICA branding and styling system
- Hero sections with gradient backgrounds
- Content sections with proper semantic HTML
- Responsive design considerations
- SEO meta tags in the head

### Common CSS Classes Used
- `.ica-article-container` - Main content wrapper
- `.ica-hero` - Hero section with gradient background
- `.ica-content-section` - Content blocks
- `.ica-cta` - Call-to-action sections
- `.ica-highlight` - Highlighted content boxes

## Important Considerations

### When Working with These Files
1. **Preserve Content**: These articles contain valuable SEO-optimized content
2. **Extract Metadata**: Title, description, and keywords should be preserved
3. **Maintain Structure**: Article sections and headings provide good content hierarchy
4. **Update Links**: Internal links may need updating to match new site structure

### Style Preservation
The inline CSS uses a consistent color scheme:
- Primary Blue: `#003366`, `#004080`
- Secondary Orange: `#ff8c00`, `#ffaa00`
- Text Colors: `#333` (dark), `white` (on dark backgrounds)
- Gradients: `linear-gradient(135deg, ...)` patterns

## Working with Legacy HTML Articles

### Key Tasks for This Directory

1. **Content Migration**
   - Extract article content from HTML files
   - Convert to Markdown format for the main blog system
   - Preserve all SEO metadata (title, description, keywords)
   - Maintain internal linking structure

2. **Style Analysis**
   - Review inline CSS for design patterns
   - Map styles to existing Tailwind classes in main project
   - Document any unique styling that needs preservation

3. **Image Extraction**
   - Identify any embedded images or graphics
   - Extract and optimize for the main site's image pipeline
   - Update image references in migrated content

### Migration Checklist
- [ ] Extract article title and metadata
- [ ] Convert HTML content to Markdown
- [ ] Map inline styles to Tailwind classes
- [ ] Update internal links to new URL structure
- [ ] Add appropriate tags and categories
- [ ] Test migrated article in main blog system
- [ ] Redirect old URLs if articles were previously indexed

## Notes for Future Instances

- These HTML files are legacy content, not the active blog system
- The main blog system is at `/src/blog/` using Markdown files
- Preserve all content during migration - these articles have SEO value
- Each article focuses on Arizona-specific insulation challenges
- Follow the main project's blog styling guidelines when migrating