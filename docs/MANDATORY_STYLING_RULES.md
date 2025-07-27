# 🚨 MANDATORY STYLING RULES - NO EXCEPTIONS ALLOWED

## ⚠️ CRITICAL: READ THIS BEFORE ANY CSS/STYLING WORK

These rules are **MANDATORY** and **NON-NEGOTIABLE**. Violation of these rules creates unreadable content and must be prevented at all costs.

---

## 🔴 ABSOLUTE FORBIDDEN PATTERNS

### ❌ NEVER ALLOWED - These combinations are ALWAYS unreadable:

```css
/* ❌ FORBIDDEN: Cyan/bright colors on white/light backgrounds */
.section {
    background: white;
    color: #00ffff; /* UNREADABLE */
}

/* ❌ FORBIDDEN: White text on white/light backgrounds */
.section {
    background: #f5f7fa;
    color: white; /* INVISIBLE */
}

/* ❌ FORBIDDEN: Light gray text on white backgrounds */
.section {
    background: white;
    color: #cccccc; /* UNREADABLE */
}

/* ❌ FORBIDDEN: Any light background with light text */
.section {
    background: #f8f9fa;
    color: #e0e0e0; /* UNREADABLE */
}
```

---

## ✅ MANDATORY PATTERNS - ALWAYS USE THESE

### 🎯 Rule #1: Dark Backgrounds + Light Text ONLY
```css
/* ✅ ALWAYS REQUIRED for content sections */
.content-section {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
    color: white !important;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
```

### 🎯 Rule #2: Stats/Cards Must Use Dark Theme
```css
/* ✅ REQUIRED pattern for any stats or cards */
.stat-card, .info-card, .feature-card {
    background: linear-gradient(135deg, #0a1a1a 0%, #1a2a2a 100%) !important;
    color: white !important;
    border: 1px solid #00d4ff;
    box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
}

.stat-number {
    color: #00d4ff !important; /* Cyan ONLY on dark backgrounds */
}
```

### 🎯 Rule #3: Headings Must Have Proper Contrast
```css
/* ✅ REQUIRED for all headings */
h1, h2, h3, h4, h5, h6 {
    color: white !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

/* ✅ Accent headings ONLY on dark backgrounds */
.accent-heading {
    color: #00d4ff !important;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}
```

### 🎯 Rule #4: Contributing Factors / List Items
```css
/* ✅ REQUIRED pattern for expandable lists */
.contributing-factor, .list-item {
    background: linear-gradient(135deg, #1a2a2a 0%, #2a3a3a 100%) !important;
    color: white !important;
    border-left: 4px solid #00d4ff;
}

.factor-title {
    color: #00d4ff !important;
    font-weight: bold;
}

.factor-description {
    color: white !important;
    opacity: 0.9;
}
```

---

## 🛡️ VALIDATION CHECKLIST - TEST EVERY ELEMENT

Before creating any styled content, validate each element:

### ✅ Background + Text Combinations Check
- [ ] **Dark background (#0a1a1a, #1e3c72, #2a5298)** ✅
- [ ] **Light text (white, #ffffff)** ✅  
- [ ] **Cyan accents ONLY on dark backgrounds** ✅
- [ ] **NO white/light backgrounds with any text** ❌

### ✅ Contrast Ratio Requirements
- [ ] **Body text**: Minimum 7:1 contrast ratio
- [ ] **Headings**: Minimum 4.5:1 contrast ratio  
- [ ] **Interactive elements**: Minimum 3:1 contrast ratio
- [ ] **Text shadows added for readability**

### ✅ Element-Specific Validation
- [ ] **Stats cards**: Dark background + white text + cyan numbers
- [ ] **Info sections**: Dark gradient + white text
- [ ] **Lists/factors**: Dark background + cyan titles + white descriptions
- [ ] **CTAs**: High contrast with clear visibility

---

## 🎨 APPROVED COLOR PALETTE - ONLY USE THESE

### Background Colors (ALWAYS dark)
```css
/* Primary dark backgrounds */
--bg-primary: #0a1a1a;
--bg-secondary: #1a2a2a;
--bg-gradient: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
--bg-card: linear-gradient(135deg, #0a1a1a 0%, #1a2a2a 100%);
```

### Text Colors (ALWAYS light on dark backgrounds)
```css
/* Text colors - ONLY use on dark backgrounds */
--text-primary: #ffffff;
--text-secondary: rgba(255, 255, 255, 0.9);
--text-accent: #00d4ff; /* Cyan ONLY on dark backgrounds */
--text-muted: rgba(255, 255, 255, 0.7);
```

### Border/Accent Colors
```css
/* Accent colors for borders and highlights */
--accent-cyan: #00d4ff;
--accent-blue: #00a8cc;
--accent-glow: rgba(0, 212, 255, 0.3);
```

---

## 📋 MANDATORY CSS TEMPLATES

### Template 1: Content Section
```css
.content-section {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
    color: white !important;
    padding: 40px;
    border-radius: 12px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.content-section h2 {
    color: white !important;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.content-section .accent-text {
    color: #00d4ff !important;
    font-weight: bold;
}
```

### Template 2: Stats Grid
```css
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin: 40px 0;
}

.stat-card {
    background: linear-gradient(135deg, #0a1a1a 0%, #1a2a2a 100%) !important;
    color: white !important;
    padding: 32px 24px;
    border-radius: 12px;
    border: 1px solid #00d4ff;
    box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
    text-align: center;
}

.stat-number {
    color: #00d4ff !important;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 8px;
}

.stat-label {
    color: white !important;
    opacity: 0.9;
}
```

### Template 3: Contributing Factors List
```css
.contributing-factors {
    margin: 40px 0;
}

.factor-item {
    background: linear-gradient(135deg, #1a2a2a 0%, #2a3a3a 100%) !important;
    color: white !important;
    padding: 20px;
    margin-bottom: 16px;
    border-radius: 8px;
    border-left: 4px solid #00d4ff;
}

.factor-title {
    color: #00d4ff !important;
    font-weight: bold;
    margin-bottom: 8px;
}

.factor-description {
    color: white !important;
    opacity: 0.9;
    line-height: 1.6;
}
```

---

## 🚫 ENFORCEMENT RULES

### Before ANY Styling Work:
1. **Read this document completely**
2. **Copy the mandatory templates above**
3. **Test each color combination visually**
4. **Validate contrast ratios**
5. **Get approval before deploying**

### During Development:
1. **Use ONLY the approved color palette**
2. **Apply mandatory CSS templates**  
3. **Test readability on actual devices**
4. **Check browser inspector for contrast**
5. **Screenshot test before committing**

### Before Deployment:
1. **Visual inspection of ALL content**
2. **Readability test in bright lighting**
3. **Mobile device testing**
4. **Accessibility contrast checking**
5. **Approval from content team**

---

## 🔧 QUICK FIX COMMANDS

### If you see unreadable content, apply these fixes immediately:

```css
/* Emergency fix for white text on light backgrounds */
.problematic-section {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
    color: white !important;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* Emergency fix for cyan text on light backgrounds */
.cyan-text-fix {
    background: #0a1a1a !important;
    color: white !important;
}

.cyan-text-fix .accent {
    color: #00d4ff !important;
}

/* Emergency fix for unreadable stats */
.stat-card-fix {
    background: linear-gradient(135deg, #0a1a1a 0%, #1a2a2a 100%) !important;
    color: white !important;
    border: 1px solid #00d4ff;
}
```

---

## ❗ FINAL WARNING

**ANY violation of these rules creates unreadable content that frustrates users and reflects poorly on the business.**

**When in doubt, use the darkest background possible with white text. NEVER use light backgrounds with any colored text.**

**Test readability by squinting at the screen - if you can't read it easily, users definitely can't.**

These rules are not suggestions - they are requirements for professional, accessible web content.