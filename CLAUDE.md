# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modular 11ty (Eleventy) website for ICA (Insulation Contractor of Arizona). It uses Liquid templating, Tailwind CSS v3, and follows a component-based architecture with all files intentionally kept under 150 lines for easy AI manipulation.

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

## Architecture & Key Design Decisions

### Tailwind CSS Configuration
- **Important**: This project uses Tailwind CSS v3 (not v4)
- Color classes use numbered variants (e.g., `text-primary-500`, not `text-primary`)
- Custom colors defined: primary (blue) and secondary (orange) with full color scales

### Content Management
- Static content files in `src/` directory using Liquid templating
- Blog posts in `src/blog/` use Markdown with front matter
- Service pages in `src/services/` use Nunjucks (.njk) templates
- Data files in `src/_data/` (JSON format) for global site configuration

### Component Structure
- **Layout Components** (`src/_includes/layouts/`): Base layouts and page templates
- **Section Components** (`src/_includes/sections/`): Hero, CTA, FAQ - reusable page sections
- **Component Includes** (`src/_includes/components/`): Cards, forms, navigation - atomic design components
- **Business Components**: ContactForm, testimonials, service-specific components
- All components use Liquid/Nunjucks templating with JavaScript for interactivity

### Configuration
- Site-wide settings in `src/_data/site.json` (company info, hours, contact)
- Navigation structure in `src/_data/navigation.json`
- These configs centralize all customizable business information

### Styling Approach
- Global styles in `src/css/style.css` with Tailwind directives
- Component-specific CSS files in `src/css/` directory
- CSS custom properties for theming (though not actively used in favor of Tailwind classes)
- Utility classes for responsive design and interactive elements

### Template Safety
- Liquid templating with proper null/undefined checks
- Data validation in templates before rendering
- Fallback content for missing data properties

## Common Customization Points

1. **Business Information**: Update `src/_data/site.json`
2. **Navigation**: Modify `src/_data/navigation.json`
3. **Colors**: Edit primary/secondary color scales in `tailwind.config.js`
4. **Services**: Add .njk files to `src/services/` following the existing format
5. **Blog Posts**: Add .md files to `src/blog/` with proper frontmatter

## Known Issues & Considerations

- Hero background images are referenced but not included (`/src/assets/images/hero-bg.jpg`)
- Contact form is configured for Netlify Forms with proper attributes
- The project uses 11ty with Liquid templating, which may have compatibility issues with some plugins

## Image Optimization

- Uses Sharp for image optimization
- Scripts available for generating blur placeholders:
  - `npm run generate-blur` - Generate blur data for images
  - `npm run create-placeholders` - Create placeholder images

## Critical Development Guidelines
⚠️ **IMPORTANT**: Before making ANY code changes, read this file and understand the project structure

### Mandatory Error Documentation Protocol
When a user provides a failed build log:
1. **IMMEDIATELY** update `docs/AI-ERROR-TRACKER.md` BEFORE fixing the issue
2. This prevents conversation limits from cutting off documentation
3. Use the provided template in the error tracker file

### Two-Step Fix Rule
Always follow this pattern when fixing issues:
1. **Runtime Safety**: Prevent crashes with proper null/undefined checks
2. **Type Safety**: Maintain TypeScript type contracts

### Common Deployment Issues to Avoid

#### CSS Inheritance Issues - Major UX Problem
**CRITICAL**: Button text colors can inherit from parent elements, causing white text on white buttons.
```typescript
// ❌ WRONG - Text color can be overridden by inheritance
<Button className="bg-white text-gray-900">

// ✅ CORRECT - Use Tailwind's !important prefix to force colors
<Button className="bg-white !text-gray-900">
```
Always use `!text-white`, `!text-gray-900`, etc. in button variants to prevent inheritance issues.

#### String Method Errors (.replace(), .trim(), etc.)
```typescript
// ❌ DANGEROUS - Can cause deployment failures
const [opens, closes] = hours.split(' - ')
return opens.replace(' AM', ':00') // Crashes if opens is undefined

// ✅ SAFE - Always validate before string operations
const timeParts = hours.split(' - ')
if (timeParts.length !== 2) return null
const [opens, closes] = timeParts
if (!opens || !closes || typeof opens !== 'string') return null
return opens.replace(' AM', ':00')
```

#### Array Processing
```typescript
// ❌ WRONG - Breaks TypeScript contracts
const result = items.map(item => {
  if (!item.name) return null  // Introduces null!
  return item.name.trim()
}).filter(Boolean)

// ✅ CORRECT - Type-safe processing
const result = items
  .filter(item => item.name && typeof item.name === 'string')
  .map(item => item.name.trim())
```

#### Context-Specific Escaping Rules
Different contexts require different escaping approaches:
```liquid
<!-- Liquid Template Context - Use HTML entities or proper escaping -->
<h1>{{ title | escape }}</h1>

<!-- JSON Data Context - Use proper Unicode characters -->
{ "title": "Worker's Compensation" }

<!-- CSS/JavaScript Context - Use proper escaping -->
"Worker's Compensation" // No escaping needed in modern JS
```

#### Dynamic Component Validation
Always validate dynamic data exists before rendering:
```liquid
<!-- ❌ DANGEROUS - Can crash if data doesn't exist -->
<h1>{{ page.title }}</h1>

<!-- ✅ SAFE - Validates data exists -->
{% if page.title %}
<h1>{{ page.title }}</h1>
{% endif %}

<!-- ✅ SAFE - Provides fallback -->
<h1>{{ page.title | default: "Default Title" }}</h1>
```

#### HTML Entity Display Issues
**CRITICAL**: HTML entities can display as literal text instead of being parsed.
```json
// ❌ WRONG - Shows "Worker&apos;s Compensation" in browser
{
  "title": "Worker&apos;s Compensation"
}

// ✅ CORRECT - Shows "Worker's Compensation" in browser
{
  "title": "Worker's Compensation"
}
```
Always test in browser, not just build success!

### Recent Fixes Applied
- **2025-06-27**: Fixed white button CSS inheritance issue - Text colors now use `!important` prefix
- **2025-06-27**: Fixed HTML entity display errors - Use proper Unicode characters in data files
- **2025-06-27**: Fixed TypeScript object context escaping errors (11+ occurrences)
- **2025-06-25**: Fixed LocalBusinessSchema deployment error (`TypeError: Cannot read properties of undefined (reading 'replace')`)
- **Pattern**: Always validate array.split() results before calling string methods on them

### Testing Checklist
Before committing changes:
- [ ] Would `npm run build` succeed?
- [ ] Are Liquid templates syntactically correct?
- [ ] Would this crash with undefined/null inputs?
- [ ] Does data structure match template expectations?
- [ ] Does content render properly in browser (not just build success)?

### Structured Data Implementation
- LocalBusiness schema implemented in root layout
- Schemas available: BreadcrumbList, Service, FAQPage, Article
- Testing tools: Google Rich Results Test, Schema.org Validator
- Key mapping: `street` → `streetAddress`, `city` → `addressLocality`

### Emergency Deployment Protocol
If deployment fails:
1. Check build logs for specific error message
2. Identify error type (template syntax vs data error)
3. Apply two-step fix (template safety + data validation)
4. Test locally with `npm run build`
5. Document fix in `docs/AI-ERROR-TRACKER.md`
6. Consider reverting if urgent

### Echo Slack Update Protocol
**MANDATORY**: Post to echoai-updates-feed (C0943NFUBDF) for ALL significant work:

**Required Update Triggers:**
- Starting any major task or project
- Using tools (especially file operations, research, API calls)
- Creating/modifying files
- Completing phases of work
- Encountering errors or issues
- Making decisions or analysis
- Project completion

**Update Format Template:**
```
🔧 [ECHO-CC-ICA] TOOL_USE: {action}
├─ WHY: {reason/purpose}
├─ PARAMS: {key parameters}
├─ STATUS: {current progress}
└─ NEXT: {next step}
```

**Frequency Guidelines:**
- Major step = Post update
- Every 2-3 tool uses = Post progress
- File operations = Post what/where
- 2+ minutes of work = Post status
- Error/issue = Post immediately
- Success/completion = Post result

**Example Updates:**
- `🚀 [ECHO-CC-ICA] TASK_START: Creating insulation service page`
- `📁 [ECHO-CC-ICA] FILE_OP: Writing templates to src/services/attic-insulation/`
- `🔧 [ECHO-CC-ICA] TOOL_USE: slack_post_message → Updating josh-tasks channel`
- `✅ [ECHO-CC-ICA] COMPLETE: New service page deployed successfully`

This ensures Josh and the team stay informed of all AI work progress in real-time.