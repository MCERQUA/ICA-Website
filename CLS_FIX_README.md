# Fix for CLS (Cumulative Layout Shift) - Image Dimensions

## What was the issue?
The Lighthouse report showed that images were missing explicit `width` and `height` attributes, causing layout shift as images loaded. This hurts the Core Web Vitals CLS score.

## Solution Implemented

### 1. Created Image Dimensions Configuration
- Added `src/_data/imageDimensions.js` with all image dimensions
- This provides a central source of truth for image sizes

### 2. Updated .eleventy.js with Two Features:

#### A. Filter for Manual Use
```njk
<img src="/images/BBB.webp" 
     alt="BBB A+ Rating" 
     {{ "/images/BBB.webp" | addImageDimensions }}>
```
This outputs: `width="200" height="76"`

#### B. Automatic Transform
The build process now automatically adds width/height to any `<img>` tag that:
- Uses images from `/images/` directory
- Doesn't already have width/height attributes

## How It Works

1. **During Build Time**: The transform scans all HTML output and adds dimensions
2. **No Manual Updates Needed**: Existing components don't need to be changed
3. **Prevents Layout Shift**: Browser knows image size before loading

## Expected Results

- ✅ CLS score improvement
- ✅ No more "missing dimensions" warnings
- ✅ Faster perceived page load
- ✅ Better user experience

## If You Need to Add New Images

1. Add the image to `/images/`
2. Add its dimensions to `src/_data/imageDimensions.js`:
   ```javascript
   'new-image.webp': { width: 800, height: 600 },
   ```
3. Use the image normally - dimensions will be added automatically

## Testing

After deployment, the HTML should show:
```html
<!-- Before -->
<img src="/images/BBB.webp" alt="BBB A+ Rating">

<!-- After (automatically) -->
<img src="/images/BBB.webp" alt="BBB A+ Rating" width="200" height="76">
```