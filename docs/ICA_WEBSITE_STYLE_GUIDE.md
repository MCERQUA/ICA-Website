# ICA Website Style Guide & Component Standards
**CRITICAL: This is the definitive style guide for all website development**

## 🎨 Core Design System

### Color Palette
```css
/* Primary Colors - Dark Theme Foundation */
--primary-dark: #0a1a1a;      /* Main background */
--primary-medium: #0d2020;    /* Card backgrounds */  
--primary-light: #0f2424;     /* Hover states */
--section-separator: #1a3030; /* Section dividers */

/* Accent Colors - Cyan/Aqua Theme */
--accent-primary: #00ffff;    /* Main accent - bright cyan */
--accent-secondary: #00d4ff;  /* Secondary - slightly darker */
--accent-tertiary: #00a8cc;   /* Tertiary - darker cyan */
--accent-glow: rgba(0, 255, 255, 0.6);
--accent-dim: rgba(0, 212, 255, 0.2);

/* Text Colors */
--text-primary: #ffffff;      /* Main text */
--text-secondary: #e9ecef;    /* Secondary text */
--text-muted: #adb5bd;        /* Muted text */

/* Semantic Colors */
--success: #00ff88;
--danger: #ff3333;
```

### Typography
```css
/* Font Families */
--font-primary: 'Inter', -apple-system, sans-serif;
--font-heading: 'Orbitron', 'Inter', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;

/* Heading Styles */
h1 { 
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-primary);
}

h2 { 
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent-primary);
}
```

## 🧩 Component Standards

### 1. Glass Panel Cards
**Used for: Service cards, feature boxes, testimonials**
```css
.glass-panel {
  background: rgba(0, 255, 255, 0.03);
  backdrop-filter: blur(30px) saturate(200%);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(0, 255, 255, 0.1),
    0 0 80px rgba(0, 255, 255, 0.2);
}
```

### 2. Service Cards
**Structure:**
```html
<div class="service-card">
  <div class="service-image">
    <img src="..." alt="...">
  </div>
  <h3>Service Title</h3>
  <p>Description text...</p>
  <a href="#" class="btn btn-primary">Learn More</a>
</div>
```

**Styling:**
- Dark glass background
- Cyan border on hover
- Image with scale effect on hover
- Consistent padding: 2rem

### 3. Hero Sections
**Service Page Hero:**
```css
.service-hero {
  background: linear-gradient(
    135deg, 
    rgba(30, 60, 114, 0.95), 
    rgba(42, 82, 152, 0.95)
  ), 
  url('/images/sunset-hero.jpg') center/cover;
  padding: 80px 0;
  color: white;
  text-align: center;
}
```

**Key Elements:**
- Sunset background image with dark overlay
- Trust badges (BBB, SPFA, License)
- Hero title with glow effect
- CTA buttons with proper styling

### 4. Content Sections
**Standard Section:**
```css
.content-section {
  background: var(--primary-dark);
  padding: 60px 0;
}

.content-section:nth-child(even) {
  background: var(--primary-medium);
}
```

### 5. Buttons
**Primary Button:**
```css
.btn-primary {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #00ffff;
  border: 2px solid #00ffff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}
```

**CTA Button:**
```css
.cta-button {
  background: linear-gradient(135deg, #00ffff 0%, #00cccc 100%);
  color: #0a1a1a;
  font-weight: 700;
  /* Rest same as primary button */
}
```

## 📐 Layout Patterns

### Grid Systems
```css
/* Service Grid - 3 columns desktop, responsive */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
```

### Container Widths
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

## ❌ Common Mistakes to Avoid

1. **White Backgrounds** - NEVER use white backgrounds
2. **Light Text on Light** - Always ensure proper contrast
3. **Missing Glass Effects** - All cards need backdrop-filter
4. **Wrong Button Colors** - Follow button hierarchy
5. **Inconsistent Spacing** - Use CSS variables for spacing
6. **Plain Borders** - Use cyan accent borders
7. **No Hover Effects** - All interactive elements need hover states

## ✅ Implementation Checklist

Before deploying any page:
- [ ] Dark theme consistently applied
- [ ] All cards use glass-panel styling
- [ ] Buttons follow design system
- [ ] Proper typography hierarchy
- [ ] Cyan accent colors used appropriately
- [ ] Hover effects on all interactive elements
- [ ] Mobile responsive design
- [ ] Proper contrast ratios maintained
- [ ] Consistent spacing using variables
- [ ] Hero sections have proper backgrounds

## 📋 Component Templates

### Feature Card Template
```html
<div class="feature-card glass-panel">
  <div class="feature-icon">🔥</div>
  <h3>Feature Title</h3>
  <p>Feature description with proper contrast...</p>
</div>
```

### Pricing Table Template
```html
<div class="pricing-table">
  <div class="pricing-option glass-panel">
    <h3>Basic Package</h3>
    <div class="price">$2.00-3.50/sq ft</div>
    <ul class="features">
      <li>✓ Feature one</li>
      <li>✓ Feature two</li>
    </ul>
    <a href="#" class="btn btn-primary">Get Started</a>
  </div>
</div>
```

### FAQ Section Template
```html
<div class="faq-section">
  <div class="faq-item glass-panel">
    <h3 class="faq-question">Question here?</h3>
    <div class="faq-answer">
      <p>Answer with proper styling...</p>
    </div>
  </div>
</div>
```

## 🔧 CSS Class Reference

### Utility Classes
- `.glass-panel` - Standard glass morphism effect
- `.glow-text` - Text with cyan glow
- `.hero-title` - Large hero text with gradient
- `.content-section` - Standard content wrapper
- `.services-grid` - Service card grid
- `.btn-primary` - Primary button style
- `.cta-button` - Call-to-action button
- `.badge-item` - Trust badge styling

### Animation Classes
- `.fade-in` - Fade in animation
- `.slide-up` - Slide up on scroll
- `.glow-pulse` - Pulsing glow effect
- `.hover-scale` - Scale on hover

## 📱 Responsive Breakpoints

```css
/* Desktop First Approach */
@media (max-width: 1200px) { /* Large tablets */ }
@media (max-width: 992px) { /* Tablets */ }
@media (max-width: 768px) { /* Mobile landscape */ }
@media (max-width: 576px) { /* Mobile portrait */ }
```

---

**Remember:** The goal is a cohesive, professional, high-tech appearance with consistent dark theme and cyan accents throughout. Every page should feel like part of the same premium website.