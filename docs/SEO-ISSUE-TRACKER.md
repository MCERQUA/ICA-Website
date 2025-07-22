# SEO Issue Tracker & Prevention Rules

## CURRENT ISSUES (2025-07-22)

### ✅ FIXED - BBB Torch Awards Article Internal Links
**Status:** RESOLVED
**Date Fixed:** 2025-07-22
**Issue:** 8 broken internal blog links in BBB Torch Awards article
**Root Cause:** Article created with incorrect URL patterns (missing date prefixes)
**Solution:** Updated all internal links to match actual blog URL structure

**Fixed Links:**
- `/blog/arizona-desert-proof-insulation-strategies/` → `/blog/2025-01-12-arizona-desert-proof-insulation-strategies/`
- `/blog/energy-cost-savings-arizona-insulation/` → `/blog/2025-01-06-energy-cost-savings-arizona-insulation/`
- `/blog/summer-heat-protection-arizona-premium-insulation/` → `/blog/2025-01-11-summer-heat-protection-arizona-premium-insulation/`
- `/blog/choosing-right-contractor/` → `/blog/2024-01-15-choosing-right-contractor/`
- `/blog/diy-vs-professional-insulation-arizona/` → `/blog/2025-01-04-diy-vs-professional-insulation-arizona/`
- `/blog/arizona-homeowner-insulation-timeline-guide/` → `/blog/2025-01-09-arizona-homeowner-insulation-timeline-guide/`
- `/blog/beat-arizona-heat-guide/` → `/blog/2025-05-01-ica-beat-arizona-heat-guide/`
- `/blog/spray-foam-vs-fiberglass-arizona-comparison/` → `/blog/2025-01-10-spray-foam-vs-fiberglass-arizona-comparison/`

### ✅ FIXED - External Link Issues
**Status:** RESOLVED
**Date Fixed:** 2025-07-22
**Issue:** 3 broken external links replaced with working alternatives
**Priority:** Medium

**Fixed External Links:**
1. `www.sec.gov/divisions/corpfin/guidance/regs-kinterpreting-guidance.htm` → `www.sec.gov/newsroom/press-releases/2024-31` (SEC climate disclosure rules)
2. `www.azcommerce.com/building-codes/` → `up.codes/codes/arizona` (Arizona building codes reference)
3. `www.azcentral.com/story/money/real-estate/2024/population-growth-arizona/` → `www.census.gov/quickfacts/fact/table/AZ/PST045223` (Arizona population data)

**Working External Links Verified:**
- `www.shiningstarprod.com` ✅
- `www.air-zona.com` ✅ 
- `www.forrestair.com` ✅

### ✅ FIXED - Meta Description Duplicates
**Status:** RESOLVED
**Date Fixed:** 2025-07-22
**Issue:** Added unique meta descriptions to prevent duplicates
**Priority:** Medium

**Fixed Pages:**
- BBB Torch Awards article: Added unique 159-character description with keywords
- Open-cell spray foam product page: Added unique 137-character description with product details

**Meta Descriptions Added:**
- BBB Article: "ICA named 2025 BBB Torch Awards for Ethics finalist. Arizona's premier insulation contractor recognized for marketplace integrity, customer service excellence, and community commitment."
- Product Page: "Cost-effective open-cell spray foam insulation for Arizona homes. R-3.7 per inch, 50% sound reduction, professional installation. Perfect for attics and interior walls."

### ✅ FIXED - Orphaned Sitemap Page Issue
**Status:** RESOLVED
**Date Fixed:** 2025-07-22
**Issue:** Home & Garden Show 2025 event page was in sitemap but not linked from navigation
**Priority:** Low

**Root Cause:** Event page existed at `/events/home-garden-show-2025/` but link in events page pointed to `/contact/` instead

**Solution:** Updated link in `/about/events.njk` to point to actual event page
- Changed: `<a href="/contact/">Get Show Discounts & Details →</a>`
- To: `<a href="/events/home-garden-show-2025/">Get Show Discounts & Details →</a>`

**Result:** Event page now properly accessible via About > Events menu navigation

---

## PREVENTION RULES & CHECKLIST

### Blog URL Structure Rules
**CRITICAL:** All blog URLs must follow the exact pattern used by existing posts

**Correct Pattern:** `/blog/YYYY-MM-DD-article-slug/`
**Examples:**
- `/blog/2025-01-12-arizona-desert-proof-insulation-strategies/`
- `/blog/2024-01-15-choosing-right-contractor/`

**Before Creating Internal Links:**
1. ✅ Verify exact URL structure with `Glob` tool
2. ✅ Check existing blog directory for correct filename pattern
3. ✅ Test link in browser if possible
4. ✅ Use full date-prefixed URLs, not shortened versions

### External Link Verification Rules
**Before Adding External Links:**
1. ✅ Test each external URL during research phase
2. ✅ Prefer `.gov`, `.edu`, and established industry sites
3. ✅ Check publication dates (prefer recent sources)
4. ✅ Have backup sources for critical statistics

**Link Testing Commands:**
```bash
# Test external link accessibility
curl -I [URL] | head -n 1

# Example output should show 200 OK:
# HTTP/2 200
```

### Meta Description Rules
**Requirements:**
- 150-160 characters optimal length
- Unique for every page
- Include target keywords naturally
- Compelling and actionable

**Before Publishing:**
1. ✅ Check meta description length
2. ✅ Search for duplicate descriptions on site
3. ✅ Include relevant Arizona/insulation keywords
4. ✅ Make it compelling for click-through

### Content Creation Checklist

**Pre-Publication Verification:**
- [ ] All internal links tested and working
- [ ] All external links verified and current
- [ ] Meta description is unique and optimized
- [ ] URL follows site structure pattern
- [ ] Content includes Arizona-specific information
- [ ] Local SEO keywords included naturally
- [ ] Proper heading structure (H1, H2, H3)
- [ ] Related internal pages linked appropriately
- [ ] Sources are authoritative and current
- [ ] Page loads correctly

### Claude Code Blog Creation Protocol

**When Creating Blog Content:**
1. **Research Phase:**
   ```
   # First, check existing blog structure
   /glob src/blog/**/*.md
   
   # Verify URL patterns
   /read [existing-blog-file] --limit 10
   ```

2. **Link Verification:**
   ```
   # Before adding internal links, verify they exist
   /grep "permalink\|title" src/blog/[target-file].md
   
   # Test external links during research
   /webfetch [external-url] "verify this page exists and loads properly"
   ```

3. **Content Standards:**
   - Minimum 3,000 words for comprehensive coverage
   - 10+ internal links to relevant site pages
   - 8+ external links to authoritative sources
   - Arizona-specific focus throughout
   - Professional contractor expertise demonstrated

### Emergency Fix Protocol

**If SEMrush Reports Issues:**
1. **Immediate Assessment:**
   - Identify broken link URLs from report
   - Categorize by internal vs external
   - Prioritize by page importance and traffic

2. **Quick Fix Actions:**
   - Fix internal links by updating URLs to correct pattern
   - Replace broken external links with working alternatives
   - Create unique meta descriptions for duplicates

3. **Prevention Updates:**
   - Document root cause in this tracker
   - Update creation checklists with new rules
   - Add verification steps to prevent recurrence

---

## MONITORING & MAINTENANCE

### Weekly SEO Health Checks
- [ ] Run SEMrush site audit
- [ ] Check for new 404 errors
- [ ] Verify recent content link integrity
- [ ] Monitor meta description uniqueness

### Monthly Deep Review
- [ ] Comprehensive external link audit
- [ ] Blog content performance analysis
- [ ] Local SEO keyword ranking review
- [ ] Content gap identification

### Quarterly Strategy Review
- [ ] SEO performance trend analysis
- [ ] Competitor content benchmarking
- [ ] Technical SEO infrastructure review
- [ ] Content calendar optimization

---

## SUCCESS METRICS

**Target Improvements:**
- Reduce 4XX errors from 8 to 0
- Eliminate broken internal links (currently 8)
- Achieve 100% unique meta descriptions
- Maintain <5% broken external links
- Increase average blog session duration
- Improve Arizona local search rankings

**Tracking Tools:**
- SEMrush for technical SEO monitoring
- Google Analytics for user behavior
- Google Search Console for search performance
- Manual link checking during content creation

This tracker will be updated after each significant content creation or site audit to maintain SEO health and prevent issues before they impact search performance.