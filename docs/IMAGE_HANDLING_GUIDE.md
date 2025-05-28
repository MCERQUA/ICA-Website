# Image Handling Guide for ICA Website

## Important Notes for Adding Images

### 1. Image Storage Location
- All images are stored in `/src/Images/` (note the capital 'I')
- Images are automatically copied during build via `.eleventy.js` configuration

### 2. Correct Image Paths
When referencing images in HTML/CSS, use:
- ✅ CORRECT: `/Images/filename.webp`
- ❌ WRONG: `/images/filename.webp` (lowercase)
- ❌ WRONG: `src/Images/filename.webp` (including src)

### 3. Background Images Best Practices

#### For Inline Styles (Recommended for hero sections):
```html
<section class="hero hero-image" style="background-image: url('/Images/your-image.webp');">
```

#### For CSS Files:
```css
.hero {
    background-image: url('/Images/your-image.webp');
    background-size: cover;
    background-position: center;
}
```

### 4. Available Images in Repository
Current images in `/src/Images/`:
- `insulation_contractors_of_arizona_spray_foam_Arizona_Sunset.webp` - Hero background
- `BBB.webp` - Better Business Bureau logo
- `SPFA.webp` - Spray Foam Alliance logo
- `Insulation_Contractors_of_arizona_logo.webp` - Company logo
- Various service images (spray foam, attic insulation, etc.)

### 5. Common Issues & Solutions

**Issue**: Background image not showing
**Solution**: Check:
1. Case sensitivity (Images not images)
2. Path starts with `/Images/`
3. File extension is correct (.webp)
4. CSS specificity if using stylesheets

**Issue**: Images not copying to build
**Solution**: Verify `.eleventy.js` contains:
```javascript
eleventyConfig.addPassthroughCopy("src/Images");
```

### 6. Adding New Images
1. Add image to `/src/Images/` folder
2. Use WebP format for best performance
3. Reference with `/Images/filename.webp`
4. No additional configuration needed

### 7. External Image URLs
If using GitHub raw URLs:
```
https://raw.githubusercontent.com/MCERQUA/ICA-Website/main/src/Images/filename.webp
```
But local paths are preferred for production.