# 🚨 CRITICAL: ROC LICENSE NUMBER DOCUMENTATION

## **ROC# 335896** - OFFICIAL LICENSE NUMBER

**This is the ONLY ROC license number for Insulation Contractors of Arizona.**

### ⚠️ CRITICAL NOTICE
- **ALWAYS use ROC# 335896**
- **NEVER use any other ROC number**
- **This number is stored in `src/_data/site.json` as the single source of truth**

---

## 📁 File Locations Where ROC Number Appears

### 1. **Primary Source (Single Source of Truth)**
- **File:** `src/_data/site.json`
- **Field:** `"roc_license": "335896"`
- **Usage:** `{{ site.roc_license }}` in templates

### 2. **Template Implementation**
- **File:** `src/_includes/base.njk`
- **Location:** Footer section
- **Code:** `ROC# {{ site.roc_license }}`
- **Renders as:** "ROC# 335896"

### 3. **Documentation Files**
- `README.md` - Business information section
- `docs/BUSINESS_INFO.md` - Comprehensive business documentation
- `AI/memory/memory.json` - AI assistant memory file
- `docs/ROC_LICENSE.md` - This file

---

## 🛠️ Implementation Guidelines

### For Developers
```nunjucks
<!-- CORRECT: Use the variable -->
ROC# {{ site.roc_license }}

<!-- WRONG: Never hardcode -->
ROC# 335896
```

### For Content Writers
- **Always reference:** "ROC# 335896"
- **Format:** Include space after the hash symbol
- **Source:** Get number from `site.json` when writing templates

### For Marketers/Designers
- **Print materials:** ROC# 335896
- **Business cards:** ROC# 335896  
- **Website content:** Use the template variable
- **Advertising:** ROC# 335896

---

## 🔍 Verification Sources

### Arizona Registrar of Contractors
- **Website:** [roc.az.gov](https://roc.az.gov)
- **License Search:** Search "Insulation Contractors of Arizona"
- **Direct Lookup:** ROC# 335896
- **Status:** Licensed, Bonded & Insured

### Business Information
- **Company:** Insulation Contractors of Arizona LLC
- **Owner:** Christopher Kuhn
- **License Type:** Insulation contractor
- **Status:** Active and in good standing

---

## 📋 Checklist for All Content

Before publishing ANY content that includes the ROC number:

- [ ] ✅ Verify you're using ROC# 335896
- [ ] ✅ Check that the format includes space after #
- [ ] ✅ If using templates, use `{{ site.roc_license }}`
- [ ] ✅ Never hardcode the number in templates
- [ ] ✅ Ensure consistency across all materials

---

## 🚫 Common Mistakes to Avoid

### ❌ WRONG
- Using any other ROC number
- Hardcoding "335896" in template files
- Omitting the space after #: "ROC#335896"
- Using inconsistent formatting

### ✅ CORRECT
- ROC# 335896 (in content and print materials)
- `{{ site.roc_license }}` (in Nunjucks templates)
- Consistent formatting across all materials
- Single source of truth in site.json

---

## 📞 Questions or Updates

If you need to verify or update the ROC license number:

1. **Check with Christopher Kuhn** (business owner)
2. **Verify on Arizona ROC website** (roc.az.gov)
3. **Update ONLY in `src/_data/site.json`**
4. **Test that templates render correctly**
5. **Update this documentation if needed**

---

**Last Verified:** June 25, 2025  
**Current ROC License:** 335896 ✅  
**Source File:** `src/_data/site.json` ✅  
**Template Variable:** `{{ site.roc_license }}` ✅

---

## 🔄 File Update History

- **2025-06-25:** ROC license standardized to 335896 across all files
- **2025-06-25:** Created single source of truth in site.json
- **2025-06-25:** Updated footer template to use variable
- **2025-06-25:** Created comprehensive documentation