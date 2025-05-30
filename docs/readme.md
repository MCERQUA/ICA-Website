# ICA Website Documentation

## Overview
This directory contains comprehensive developer documentation for the Insulation Contractors of Arizona (ICA) website. These documents are designed to help developers and AI assistants work effectively with the codebase while avoiding common pitfalls.

## Core Documentation

### 📋 [Project Overview](project-overview.md)
High-level project information, technology stack, business context, and development priorities.

### 🗂️ [File Structure Guide](file-structure-guide.md)
Complete breakdown of the project's directory organization, file naming conventions, and dependencies.

### 🏗️ [Layout System](layout-system.md)
Detailed guide to the template hierarchy, component system, and layout usage rules. **Critical for avoiding deployment errors.**

### ✍️ [Content Creation Guide](content-creation-guide.md)
Step-by-step instructions for creating new service pages, blog posts, and standard content with proper SEO and structure.

### 🚀 [Deployment Guide](deployment-guide.md)
Deployment process, common errors, troubleshooting steps, and emergency procedures for Netlify deployments.

### 🤖 [AI Coding Guidelines](ai-coding-guidelines.md)
Specific rules and templates for AI assistants to prevent common errors and maintain code quality.

## Quick Reference

### ⚠️ Critical Rules
1. **Layout References:** Always use `layout: layouts/service-page.njk` (include `layouts/` path)
2. **Template Dependencies:** Verify all included sections/components exist before using
3. **Duplicate Permalinks:** Ensure unique URLs for all pages
4. **Frontmatter:** Include all required fields for each page type

### 🛠️ Emergency Fixes
- **Layout errors:** Run `node fix-layouts.js`
- **Build failures:** Check `docs/common-issues.md`
- **Deployment rollback:** Use Netlify dashboard

### 📁 Key Directories
- `src/services/` - Service pages organized by category
- `src/_includes/layouts/` - Page layout templates
- `src/_includes/sections/` - Reusable page sections
- `src/_includes/components/` - UI components
- `src/images/` - Website images and assets

## Getting Started

### For New Developers
1. Read [Project Overview](project-overview.md) for context
2. Study [File Structure Guide](file-structure-guide.md) to understand organization
3. Review [Layout System](layout-system.md) to understand templates
4. Follow [Content Creation Guide](content-creation-guide.md) for new content

### For AI Assistants
1. **Start with [AI Coding Guidelines](ai-coding-guidelines.md)** - Contains critical rules
2. Reference [Layout System](layout-system.md) for template usage
3. Use [Content Creation Guide](content-creation-guide.md) for content templates
4. Check [Common Issues](common-issues.md) when encountering errors

### For Content Creators
1. Review [Content Creation Guide](content-creation-guide.md)
2. Understand Arizona-specific content requirements
3. Follow SEO best practices outlined in guides
4. Use provided templates for consistency

## Common Tasks

### Creating a New Service Page
1. Choose correct location in `src/services/[category]/`
2. Use template from [Content Creation Guide](content-creation-guide.md)
3. Ensure layout reference: `layout: layouts/service-page.njk`
4. Verify all included sections exist
5. Test locally before deployment

### Troubleshooting Deployment Errors
1. Check [Common Issues](common-issues.md) for known problems
2. Review [Deployment Guide](deployment-guide.md) for troubleshooting steps
3. Use emergency fixes if needed
4. Document new issues for future reference

### Adding New Components
1. Create in `src/_includes/components/` or `src/_includes/sections/`
2. Follow existing naming conventions
3. Update documentation with new component
4. Test thoroughly before deployment

## Project-Specific Information

### Business Context
- **Company:** Insulation Contractors of Arizona (ICA)
- **Focus:** Arizona climate-specific insulation solutions
- **Services:** Residential, commercial, industrial, agricultural
- **Key Differentiator:** 20+ years experience, agricultural tank insulation specialty

### Technical Stack
- **Framework:** Eleventy (11ty) v2.0.1
- **Templates:** Nunjucks (.njk files)
- **Styling:** Custom CSS with CSS variables
- **Deployment:** Netlify with automatic builds
- **Repository:** GitHub with main branch auto-deploy

### Content Strategy
- **Arizona-focused:** All content addresses local climate challenges
- **Educational:** Explain insulation benefits and processes
- **SEO-optimized:** Local search optimization for Phoenix area
- **Professional:** Showcase credentials and experience

## Maintenance

### Regular Updates
- Review and update service pricing annually
- Refresh testimonials and case studies
- Update certifications and credentials
- Monitor and improve SEO performance

### Documentation Maintenance
- Update guides when new patterns emerge
- Document solutions to new problems
- Keep examples current with codebase
- Review and improve clarity regularly

## Support Resources

### Internal Documentation
- [Common Issues](common-issues.md) - Known problems and solutions
- [.clinerules](.clinerules) - Project-specific coding rules

### External Resources
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Netlify Documentation](https://docs.netlify.com/)

### Emergency Contacts
- **Repository Issues:** GitHub repository
- **Hosting Support:** Netlify support
- **Domain Issues:** Domain registrar

## Contributing

### Documentation Updates
- Keep documentation current with code changes
- Add examples for new patterns
- Document solutions to new problems
- Maintain clear, actionable instructions

### Code Quality
- Follow established patterns
- Test thoroughly before deployment
- Document significant changes
- Maintain consistency across codebase

---

**Last Updated:** 2025-05-30  
**Version:** 1.0  
**Maintainer:** Development Team
