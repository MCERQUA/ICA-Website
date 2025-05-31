# ICA Website Cleanup & Optimization Task Plan

**Created:** May 31, 2025  
**Status:** Ready for Implementation  
**Total Tasks:** 16 prioritized tasks  
**Estimated Completion:** 2-3 weeks  

## 🎯 Project Overview

This comprehensive task plan addresses critical styling, formatting, and functionality issues across the ICA website. The plan uses a systematic approach with trackable progress and resumable sessions.

## 📊 Task Summary

### **High Priority Issues (9 tasks)**
- Service page formatting problems
- Pricing transparency issues  
- FAQ overlapping problems
- Full page rebuilds needed

### **Medium Priority Issues (4 tasks)**
- Content styling improvements
- Component standardization
- Layout optimizations

### **Low Priority Issues (3 tasks)**
- Quick fixes and minor adjustments

---

## 📋 Detailed Task List

### **T001 - Spray Foam Service Page** ⭐ HIGH PRIORITY
**URL:** `/services/residential/spray-foam/`  
**Issues:**
- FAQ article title overlaying animated green titles
- Call to action not centered on desktop
**Estimated Time:** 30 minutes  
**Category:** Styling Fix

### **T002 - Blown-In Insulation Page** ⭐ HIGH PRIORITY
**URL:** `/services/residential/blown-in/`  
**Issues:**
- Big block of unformatted text at top of page
- Pricing containers - price not visible (transparent, only shows when highlighted) 
- Our process section has poor formatting on desktop with numbered items beside big column
**Estimated Time:** 45 minutes  
**Category:** Layout & Content

### **T003 - Dense Pack Insulation Page** ⭐ HIGH PRIORITY
**URL:** `/services/residential/dense-pack/`  
**Issues:**
- Hero not formatted well
- Our process section poor formatting
- Second pricing section poor formatting with transparent price
- Dense pack FAQs have overlaying article over animated text title
- Call to action formatting to center on desktop
**Estimated Time:** 60 minutes  
**Category:** Layout & Content

### **T004 - Attic Insulation Page** 🔶 MEDIUM PRIORITY
**URL:** `/services/residential/attic/`  
**Issues:**
- Top section has no styling and formatting
- FAQ style inconsistency (good FAQ exists but also bad overlapping one)
- Our process bad formatting
- Double FAQ sections causing confusion
**Estimated Time:** 45 minutes  
**Category:** Layout & Content  
**Notes:** Good FAQ style should be standardized across all pages

### **T005 - Wall Insulation Page** 🔶 MEDIUM PRIORITY
**URL:** `/services/residential/wall/`  
**Issues:**
- Content below heat transfer component needs better formatting/layout/styling
- Our process section same problems
- Pricing sections have transparent price
**Estimated Time:** 40 minutes  
**Category:** Layout & Content  
**Notes:** Heat transfer component is excellent - replicate this style elsewhere

### **T006 - Crawl Space Page** 🔹 LOW PRIORITY
**URL:** `/services/residential/crawl-space/`  
**Issues:**
- Our installation process section bad formatting
- Our processes same problems
- Pricing has transparent text issues
**Estimated Time:** 30 minutes  
**Category:** Styling Fix  
**Notes:** First 3/4 components are EXCELLENT - best examples on site

### **T007 - Insulation Removal Page** 🔶 MEDIUM PRIORITY
**URL:** `/services/residential/removal/`  
**Issues:**
- Transformation Through Professional Removal has overlapping text/title
- Professional Equipment section needs better styling/layout
- Why DIY Removal is Dangerous needs better layout
- Our process same problem
- Pricing same problem
**Estimated Time:** 45 minutes  
**Category:** Layout & Content

### **T008 - Manufacturing Page** ⭐ HIGH PRIORITY
**URL:** `/services/industrial/manufacturing/`  
**Issues:**
- Full page review needed
- Only key benefits, related services, and reviews work well
- Most other components need complete overhaul
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T009 - Cold Storage Page** ⭐ HIGH PRIORITY
**URL:** `/services/industrial/cold-storage/`  
**Issues:**
- Full page review needed
- Only key benefits, related services, reviews working well
- All other sections need styling/layout improvements
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T010 - Equipment Insulation Page** ⭐ HIGH PRIORITY
**URL:** `/services/industrial/equipment/`  
**Issues:**
- Full page review needed
- Only site-wide working sections are acceptable
- All other sections need complete rebuild
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T011 - Commercial Office Page** 🔶 MEDIUM PRIORITY
**URL:** `/services/commercial/office/`  
**Issues:**
- Hero formatting needed - use sunset image from homepage instead of blue background
- Our Commercial Installation Approach could be improved
- Pricing options have transparency problems
- FAQ has overlapping problems
- CTA alignment and styling ugly compared to other CTAs
**Estimated Time:** 60 minutes  
**Category:** Layout & Content

### **T012 - Commercial Retail Page** ⭐ HIGH PRIORITY
**URL:** `/services/commercial/retail/`  
**Issues:**
- Hero layout needed
- Full page review - nothing looks good for format/style/layout
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T013 - Commercial Warehouse Page** ⭐ HIGH PRIORITY
**URL:** `/services/commercial/warehouse/`  
**Issues:**
- Full page review needed like retail
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T014 - Commercial New Construction Page** ⭐ HIGH PRIORITY
**URL:** `/services/commercial/new-construction/`  
**Issues:**
- Full page review needed like retail and warehouse
**Estimated Time:** 90 minutes  
**Category:** Full Page Rebuild

### **T015_ABC - All Agricultural Pages** ⭐ HIGH PRIORITY
**URLs:** 
- `/services/agricultural/tank/`
- `/services/agricultural/barn/`
- `/services/agricultural/storage/`
**Issues:**
- All three pages need full review - no layout or styling
**Estimated Time:** 120 minutes  
**Category:** Full Page Rebuild

### **T016 - Open Cell Product Page** 🔹 LOW PRIORITY
**URL:** `/products/open-cell-spray-foam/`  
**Issues:**
- Only hero background image needed
- Reduce height of hero area - too large and empty
**Estimated Time:** 15 minutes  
**Category:** Quick Fix

---

## 🚨 Critical Common Issues

### **1. "Our Process" Section Formatting**
**Affects:** 7 pages (T001, T002, T003, T004, T005, T006, T007)  
**Priority:** CRITICAL  
**Solution:** Create/fix shared component file  
**Impact:** Fixing once resolves issues across multiple pages

### **2. Pricing Transparency Problem**
**Affects:** 5 pages (T002, T003, T005, T006, T007)  
**Priority:** HIGH  
**Problem:** Price text transparent unless highlighted with cursor  
**Solution:** Fix CSS opacity/color values in pricing components

### **3. FAQ Overlapping Issues**
**Affects:** 3 pages (T001, T003, T007)  
**Priority:** HIGH  
**Problem:** Article titles overlaying animated text  
**Solution:** Fix z-index and positioning in FAQ components

### **4. Hero Standardization**
**Affects:** 6+ pages (T003, T011, T012, T013, T014, T015_ABC)  
**Priority:** MEDIUM  
**Solution:** Standardize hero component with sunset background image  
**Goal:** Consistent branding across all service pages

### **5. CTA Alignment**
**Affects:** 3 pages (T001, T003, T011)  
**Priority:** LOW  
**Problem:** Call-to-action buttons not centered on desktop  
**Solution:** Fix CSS centering classes

---

## ✅ Success Examples to Replicate

### **Excellent Components (Use as Templates):**
1. **Crawl Space Page Components:**
   - Science of Crawl Space Encapsulation
   - Crawl Space Solutions Comparison
   - Why Your Crawl Space Needs Attention
   
2. **Wall Page Component:**
   - Understanding Heat Transfer (excellent visual design)
   
3. **Attic Page:**
   - Good FAQ style (not the overlapping version)

### **Site-Wide Working Components:**
- Key Benefits sections
- Related Services sections
- Customer Reviews/Testimonials sections

---

## 🔄 Task Management System

### **Progress Tracking:**
- Main task list stored in: `/TaskManagement/Website_Cleanup_Tasks.json`
- Completion markers in: `/TaskManagement/Completed/`
- Small completion files prevent large file updates
- Resumable across multiple sessions

### **Completion Workflow:**
1. Complete task
2. Create `TXXX_COMPLETE.json` file with timestamp
3. Update session notes
4. Move to next priority task

### **Status Check Command:**
- Read main task list
- Scan completion directory
- Display remaining tasks and progress

---

## 📈 Implementation Strategy

### **Phase 1: High-Impact Quick Wins** (Week 1)
- Fix "Our Process" component (affects 7 pages)
- Resolve pricing transparency issues (affects 5 pages)
- Address FAQ overlapping problems (affects 3 pages)

### **Phase 2: Service Page Optimization** (Week 2)
- Complete residential service pages (T001-T007)
- Standardize hero components
- Improve content formatting

### **Phase 3: Full Page Rebuilds** (Week 2-3)
- Industrial pages (T008-T010)
- Commercial pages (T011-T014)
- Agricultural pages (T015_ABC)

### **Phase 4: Final Polish** (Week 3)
- Product pages (T016)
- Cross-page consistency check
- Mobile responsiveness verification

---

## 🎯 Success Metrics

### **Technical Goals:**
- [ ] All pricing text visible and properly styled
- [ ] Consistent "Our Process" formatting across pages
- [ ] FAQ sections properly aligned without overlapping
- [ ] Hero sections use standard sunset background
- [ ] All CTAs properly centered and styled

### **User Experience Goals:**
- [ ] Improved visual consistency across service pages
- [ ] Better content readability and formatting
- [ ] Enhanced mobile responsiveness
- [ ] Professional appearance matching homepage quality

### **Business Goals:**
- [ ] Reduced bounce rate from poorly formatted pages
- [ ] Improved conversion rates with better CTAs
- [ ] Enhanced professional credibility
- [ ] Better SEO performance with improved page structure

---

## 🚀 Ready to Begin

The task management system is now ready for implementation. Each task is prioritized, estimated, and categorized for efficient completion. The system supports:

- **Resumable sessions** - Always know where you left off
- **Priority-based workflow** - Tackle high-impact issues first  
- **Pattern recognition** - Fix root causes affecting multiple pages
- **Progress tracking** - Small completion files for easy monitoring

**Next Step:** Begin with high-priority common issues for maximum impact across the website.

---

*This document is part of the ICA Website optimization project. For related documentation, see: TECHNICAL_IMPLEMENTATION_GUIDE.md, STYLING_SYSTEM_DOCUMENTATION.md, and PERFORMANCE_OPTIMIZATION_PLAN.md*