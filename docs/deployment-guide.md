# Deployment Guide

## Overview
The ICA website is deployed automatically to Netlify when changes are pushed to the main branch. This guide covers the deployment process, common issues, and troubleshooting.

## Deployment Process

### Automatic Deployment
1. **Push to GitHub:** Changes pushed to `main` branch trigger deployment
2. **Netlify Build:** Netlify runs `npm run build` command
3. **Eleventy Build:** Generates static files in `_site/` directory
4. **Deploy:** Static files are deployed to Netlify CDN
5. **Live Site:** Changes appear on live website

### Build Command
```bash
npm run build
# Runs: eleventy
```

### Build Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "_site"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-lighthouse"
```

## Local Development

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Runs: eleventy --serve --watch
```

### Development URLs
- **Local:** http://localhost:8080
- **Network:** Available on local network for mobile testing

### Development Features
- **Hot reload:** Changes automatically refresh browser
- **Watch mode:** Monitors file changes
- **Local server:** Serves files with proper MIME types

## Pre-Deployment Checklist

### Required Checks
- [ ] **Layout references:** Use `layouts/service-page.njk` format
- [ ] **Template dependencies:** All included sections/components exist
- [ ] **Frontmatter validation:** Required fields present
- [ ] **Image paths:** All images exist and load
- [ ] **Internal links:** No broken links
- [ ] **No duplicate permalinks:** Unique URLs for all pages

### Testing Commands
```bash
# Build locally to test
npm run build

# Check for build errors
npm run dev
```

### Browser Testing
- [ ] No console errors
- [ ] All sections render correctly
- [ ] Responsive design works
- [ ] Forms function properly
- [ ] Navigation works

## Common Deployment Errors

### 1. Layout Reference Errors
**Error:** `You're trying to use a layout that does not exist: service-page.njk`

**Cause:** Missing `layouts/` path in layout reference

**Fix:**
```yaml
# ❌ INCORRECT
layout: service-page.njk

# ✅ CORRECT
layout: layouts/service-page.njk
```

**Quick Fix:** Run `node fix-layouts.js`

### 2. Missing Template Files
**Error:** `template not found: sections/[filename].njk`

**Cause:** Including non-existent section or component

**Fix:**
1. Check if file exists in `src/_includes/sections/`
2. Create missing file or update include reference
3. Verify file name spelling and path

### 3. Duplicate Permalink Conflicts
**Error:** `Output conflict: multiple input files are writing to '_site/[path]/index.html'`

**Cause:** Multiple files generating same URL

**Fix:**
1. Identify conflicting files in error message
2. Remove duplicate file or change permalink
3. Ensure unique URLs for all pages

### 4. Build Timeout
**Error:** Build exceeds time limit

**Cause:** Large files, infinite loops, or performance issues

**Fix:**
1. Optimize images (compress, use WebP)
2. Check for template loops
3. Review build performance

### 5. Node.js Version Issues
**Error:** Node version compatibility problems

**Fix:**
- Ensure Node.js 18+ is specified in `netlify.toml`
- Update package dependencies if needed

## Troubleshooting Steps

### Step 1: Check Build Logs
1. Go to Netlify dashboard
2. Click on failed deployment
3. Review build logs for specific errors
4. Note the exact error message and file

### Step 2: Reproduce Locally
```bash
# Clean build
rm -rf _site node_modules
npm install
npm run build
```

### Step 3: Identify Root Cause
- **Layout errors:** Check layout references
- **Template errors:** Verify includes exist
- **Permalink errors:** Check for duplicates
- **Syntax errors:** Review frontmatter and templates

### Step 4: Apply Fix
- Use appropriate fix from common errors above
- Test locally before pushing
- Commit and push fix

### Step 5: Monitor Deployment
- Watch Netlify build process
- Verify successful deployment
- Test live site functionality

## Emergency Fixes

### Quick Layout Fix
```bash
# Run the layout fix script
node fix-layouts.js

# Commit and push
git add .
git commit -m "Fix layout references"
git push
```

### Rollback Deployment
1. Go to Netlify dashboard
2. Find previous successful deployment
3. Click "Publish deploy" to rollback
4. Fix issues in code
5. Redeploy when ready

### Disable Auto-Deploy
1. Go to Netlify site settings
2. Build & deploy → Continuous deployment
3. Stop auto-publishing
4. Fix issues locally
5. Re-enable when ready

## Performance Optimization

### Build Performance
- **Image optimization:** Use WebP format, compress images
- **Template efficiency:** Avoid complex loops in templates
- **Dependency management:** Keep dependencies minimal

### Site Performance
- **CSS optimization:** Minimize and combine stylesheets
- **Image lazy loading:** Implement for better loading
- **CDN benefits:** Netlify provides global CDN

## Monitoring and Maintenance

### Regular Checks
- **Weekly:** Review deployment status
- **Monthly:** Check site performance metrics
- **Quarterly:** Update dependencies and review logs

### Performance Monitoring
- **Lighthouse scores:** Automated via Netlify plugin
- **Core Web Vitals:** Monitor loading performance
- **Error tracking:** Watch for 404s and broken links

### Security Updates
- **Dependencies:** Regular npm audit and updates
- **Netlify features:** Enable security headers
- **SSL certificates:** Automatic via Netlify

## Deployment Best Practices

### Code Management
1. **Test locally first:** Always verify changes work
2. **Small commits:** Make incremental changes
3. **Clear commit messages:** Describe what was changed
4. **Branch protection:** Use pull requests for major changes

### Content Updates
1. **Backup before changes:** Keep copies of working content
2. **Staged rollouts:** Test on staging environment if available
3. **Content validation:** Check all required fields
4. **SEO preservation:** Maintain URL structure when possible

### Error Prevention
1. **Use templates:** Follow established patterns
2. **Validate includes:** Check dependencies before using
3. **Test thoroughly:** Multiple devices and browsers
4. **Document changes:** Update relevant documentation

## Support Resources

### Documentation
- **Eleventy docs:** https://www.11ty.dev/docs/
- **Netlify docs:** https://docs.netlify.com/
- **Nunjucks docs:** https://mozilla.github.io/nunjucks/

### Project-Specific
- **Common issues:** `docs/common-issues.md`
- **Layout system:** `docs/layout-system.md`
- **File structure:** `docs/file-structure-guide.md`
- **Content creation:** `docs/content-creation-guide.md`

### Emergency Contacts
- **Repository:** GitHub repository issues
- **Hosting:** Netlify support
- **Domain:** Domain registrar support

## Deployment Checklist

### Pre-Push
- [ ] Local build successful
- [ ] No console errors
- [ ] All links work
- [ ] Images load properly
- [ ] Responsive design tested

### Post-Deploy
- [ ] Build completed successfully
- [ ] Live site loads correctly
- [ ] New content appears
- [ ] No broken functionality
- [ ] Performance acceptable

### Rollback Plan
- [ ] Previous deployment identified
- [ ] Rollback procedure understood
- [ ] Fix strategy planned
- [ ] Timeline for resolution set
