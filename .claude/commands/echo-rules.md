# Echo-AZ Operational Rules

## 🚨 CRITICAL RULE #1: STYLING SAFETY

**BEFORE ANY CSS/STYLING WORK: READ `docs/MANDATORY_STYLING_RULES.md`**

### Quick Reference:
- ✅ **ALWAYS**: Dark backgrounds + white text  
- ✅ **ALWAYS**: Cyan accents ONLY on dark backgrounds
- ❌ **NEVER**: White/light backgrounds with ANY text
- ❌ **NEVER**: Cyan text on white backgrounds  
- ❌ **NEVER**: White text on white backgrounds

### Emergency Pattern:
```css
/* Apply immediately if content is unreadable */
.emergency-readable {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
    color: white !important;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
```

## Core Operating Rules

### Documentation Priority Order
1. **First**: `docs/MANDATORY_STYLING_RULES.md` (if any styling)
2. **Second**: `docs/ai-coding-guidelines.md` 
3. **Third**: `docs/CRITICAL-PATTERNS.md`
4. **Fourth**: Project-specific requirements

### GitHub Direct Editing Protocol
- **ALWAYS edit files directly on GitHub** 
- **NEVER use artifacts unless specifically requested for demonstration**
- Artifacts are temporary and not saved to the project
- Use GitHub MCP tools for all file operations

### Task Execution Standards
- Read all relevant documentation before starting
- Follow established component patterns
- Test readability of all content visually
- Validate contrast ratios for accessibility
- Document any new patterns or solutions

### ICA Website Specific Rules

#### ROC License Standard
- **ONLY use ROC# 335896** (stored in site.json)
- Use `{{ site.roc_license }}` in templates
- Never hardcode license numbers

#### Component Architecture
- Always use existing hero.njk component for page headers
- Keep pages under 5KB by using modular components  
- Load page-specific CSS via additionalCss array
- Use established section components from src/_includes/sections/

#### URL Structure Compliance
- Blog URLs: `/blog/YYYY-MM-DD-article-slug/`
- Service URLs: `/services/category/service-name/`
- Verify exact paths before creating internal links

#### SEO Requirements
- Unique meta descriptions (150-160 characters)
- Arizona-specific keywords and locations
- Proper heading hierarchy (H1, H2, H3)
- Schema markup in script tags, not YAML front matter

### Quality Assurance Checklist

#### Before Any File Creation/Modification:
- [ ] Read relevant documentation completely
- [ ] Check for existing similar content
- [ ] Verify all template dependencies exist
- [ ] Plan component-based structure
- [ ] **Review styling safety rules if CSS involved**

#### During Content Development:
- [ ] Follow established patterns and conventions
- [ ] Apply only approved color combinations
- [ ] Test readability against backgrounds
- [ ] Include Arizona climate context where relevant
- [ ] Use modular components vs inline content

#### Before Deployment:
- [ ] Local build test successful (`npm run build`)
- [ ] Visual inspection for readability issues
- [ ] Validate all internal/external links
- [ ] Check responsive design functionality  
- [ ] Confirm SEO elements present and unique

### Error Prevention Patterns

#### Layout References
```yaml
# ✅ CORRECT (full path required)
layout: layouts/service-page.njk

# ❌ WRONG (causes build failure)  
layout: service-page.njk
```

#### Color Combinations
```css
/* ✅ SAFE - Always readable */
.content {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* ❌ DANGEROUS - Creates unreadable content */
.content {
    background: white;
    color: #00ffff; /* Cyan on white = unreadable */
}
```

#### Template Includes
```nunjucks
<!-- ✅ CORRECT (verify file exists first) -->
{% include "sections/service-hero.njk" %}

<!-- ❌ WRONG (non-existent file) -->
{% include "sections/non-existent.njk" %}
```

### Communication Standards

#### Slack Updates Required
- Post task start/completion to echoai-updates-feed
- Include progress updates for complex work
- Document any new patterns or solutions
- Report and resolve readability issues immediately

#### Documentation Updates
- Add new components to component library docs
- Update troubleshooting guides with solutions
- Document any deviation from standard patterns
- Include examples for future reference

### Business Context Awareness

#### ICA Company Profile
- **Established**: 2004 (Serving the Valley Since 2004)
- **Owner**: Christopher Kuhn
- **Service Area**: 14 cities in Phoenix metro area
- **Specialties**: Extreme heat insulation, agricultural tanks
- **Credentials**: BBB A+ rating, 2025 Torch Awards Finalist

#### Arizona Market Focus
- Extreme climate: 160°F+ attic temperatures
- Monsoon moisture challenges
- Energy efficiency emphasis (40-60% savings potential)
- Local competition and market positioning
- Service area coverage and response times

#### Current Priority Services
- Air Duct Cleaning (NEW 2025 service)
- Spray Foam Insulation (closed/open cell)
- Agricultural Tank Insulation (specialty)
- Shed Insulation (market opportunity)

### Emergency Procedures

#### Unreadable Content Crisis
1. **Immediate**: Apply emergency dark background CSS
2. **Document**: Report issue location and cause
3. **Fix**: Validate readability visually  
4. **Prevent**: Review why guidelines weren't followed
5. **Update**: Strengthen prevention measures

#### Build Failures
1. Check layout path format (full path required)
2. Verify all template dependencies exist
3. Validate YAML front matter syntax
4. Test locally before pushing fixes
5. Monitor deployment logs for success

#### SEO Issues
1. Check for duplicate meta descriptions
2. Verify internal link URL patterns
3. Test external link accessibility
4. Validate schema markup placement
5. Confirm unique permalinks

Remember: These rules exist to prevent recurring issues and maintain professional quality. When in doubt, err on the side of caution and ask for clarification rather than guessing.