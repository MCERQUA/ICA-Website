# Image Optimization Instructions for ICA Website

## Overview
This document explains how to run the image optimization script and implement responsive images on the ICA website to improve Lighthouse performance scores.

## Prerequisites
1. Node.js installed on your local machine
2. Git repository cloned locally
3. Terminal/Command line access

## Step 1: Install Dependencies
```bash
npm install
```
This will install the `sharp` package needed for image optimization.

## Step 2: Run the Optimization Script
```bash
npm run optimize-images
```
Or directly:
```bash
node optimize-images.js
```

This script will:
- Create an `images-optimized` directory in `src/`
- Generate multiple sizes for each image based on its type (hero, service, logo, etc.)
- Convert all images to WebP format for better compression
- Show progress and file size reductions

## Step 3: Deploy Optimized Images
After running the script locally:
1. Commit the new `src/images-optimized` directory to Git
2. Push to GitHub
3. The site will automatically rebuild on Netlify

## Step 4: Update Components to Use Responsive Images

### Example 1: Hero Background Image
Use the `hero-responsive.njk` component instead of `hero.njk`:
```njk
{% include "sections/hero-responsive.njk" %}
```

### Example 2: Service Images
```html
<img src="/images-optimized/residential_spray_foam_insulation_arizona-400w.webp"
     srcset="/images-optimized/residential_spray_foam_insulation_arizona-300w.webp 300w,
             /images-optimized/residential_spray_foam_insulation_arizona-400w.webp 400w,
             /images-optimized/residential_spray_foam_insulation_arizona-600w.webp 600w,
             /images-optimized/residential_spray_foam_insulation_arizona-800w.webp 800w"
     sizes="(max-width: 768px) 100vw, 
            (max-width: 1024px) 50vw, 
            400px"
     alt="Residential Spray Foam Insulation"
     loading="lazy">
```

### Example 3: Logo/Badge Images
```html
<img src="/images-optimized/BBB-100w.webp"
     srcset="/images-optimized/BBB-100w.webp 100w,
             /images-optimized/BBB-150w.webp 150w,
             /images-optimized/BBB-200w.webp 200w"
     sizes="100px"
     alt="BBB A+ Rating"
     loading="lazy">
```

## Image Size Guidelines
The script creates these size variants:

### Hero/Banner Images
- 1920w (Desktop HD)
- 1440w (Desktop)
- 1024w (Tablet Landscape)
- 768w (Tablet Portrait)
- 640w (Mobile)

### Service Images
- 800w (Large)
- 600w (Medium)
- 400w (Small)
- 300w (Thumbnail)

### Logo/Badge Images
- 400w (Large display)
- 200w (Medium)
- 150w (Small)
- 100w (Thumbnail)

## Performance Benefits
- **File Size Reduction**: 70-85% smaller files with WebP
- **Responsive Loading**: Devices only download the size they need
- **Faster Page Load**: Improved Lighthouse performance scores
- **Better UX**: Faster loading especially on mobile devices

## Maintenance
When adding new images:
1. Add the original to `src/images/`
2. Run `npm run optimize-images`
3. Update components to use the optimized versions
4. Commit and push all changes

## Troubleshooting
If images don't appear after optimization:
1. Check that the `images-optimized` directory was created
2. Verify file names match in your components
3. Ensure `.eleventy.js` includes the passthrough copy
4. Clear browser cache and reload

## Original Images
The original images in `src/images/` are never modified or deleted. They serve as the source for all optimizations.