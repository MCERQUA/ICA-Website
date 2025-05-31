const { DateTime } = require("luxon");
const imageDimensions = require("./src/_data/imageDimensions.js");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

module.exports = function(eleventyConfig) {
  // Store CSS hash globally for use in templates
  let cssHash = 'default';
  
  // CSS Optimization - Combine CSS files for production
  eleventyConfig.on('eleventy.before', async () => {
    const cssFiles = [
      'src/css/style.css',
      'src/css/components.css',
      'src/css/animations.css',
      'src/css/performance.css',
      'src/css/forms.css',
      'src/css/layout.css'
    ];
    
    let combinedCSS = '';
    
    // Read and combine CSS files
    for (const file of cssFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        // Remove @import statements as we're combining files
        const cleanContent = content.replace(/@import\s+url\([^)]+\);/g, '');
        combinedCSS += `\n/* === ${path.basename(file)} === */\n${cleanContent}\n`;
      }
    }
    
    // Minify CSS (basic minification)
    const minifiedCSS = combinedCSS
      .replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*{\s*/g, '{') // Remove spaces around {
      .replace(/\s*}\s*/g, '}') // Remove spaces around }
      .replace(/\s*:\s*/g, ':') // Remove spaces around :
      .replace(/\s*;\s*/g, ';') // Remove spaces around ;
      .replace(/;\}/g, '}') // Remove last semicolon
      .trim();
    
    // Generate hash for cache busting
    cssHash = crypto.createHash('md5').update(minifiedCSS).digest('hex').substring(0, 8);
    
    // Write combined and minified CSS
    const outputDir = '_site/css';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputFile = path.join(outputDir, `combined.${cssHash}.css`);
    fs.writeFileSync(outputFile, minifiedCSS);
    
    console.log(`Combined CSS created: combined.${cssHash}.css`);
  });
  
  // Make CSS hash available to templates
  eleventyConfig.addGlobalData('cssHash', () => cssHash);
  
  // Copy CSS files (for development)
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy images folder - use lowercase standard
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy optimized images folder
  eleventyConfig.addPassthroughCopy("src/images-optimized");
  
  // Add date filters
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  });
  
  // Add ISO date filter for sitemap
  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    if (!dateObj) {
      dateObj = new Date();
    }
    return DateTime.fromJSDate(dateObj).toISO();
  });
  
  // Add limit filter
  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });
  
  // Add absoluteUrl filter for SEO
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    try {
      return new URL(url, base).toString();
    } catch(e) {
      console.error("Error creating absolute URL:", e);
      return url;
    }
  });
  
  // Add split filter
  eleventyConfig.addFilter("split", (str, separator) => {
    return str ? str.split(separator) : [];
  });
  
  // Add image dimensions filter for CLS optimization
  eleventyConfig.addFilter("addImageDimensions", (imagePath) => {
    // Extract filename from path
    const filename = imagePath.split('/').pop();
    const dimensions = imageDimensions[filename];
    
    if (dimensions) {
      return `width="${dimensions.width}" height="${dimensions.height}"`;
    }
    
    // Return empty string if dimensions not found
    console.warn(`No dimensions found for image: ${filename}`);
    return '';
  });
  
  // Transform to automatically add width/height to img tags
  eleventyConfig.addTransform("addImageDimensions", function(content, outputPath) {
    // Only process HTML files
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }
    
    // Regular expression to find img tags without width/height
    const imgRegex = /<img\s+(?![^>]*(?:width|height))[^>]*src="\/images\/([^"]+)"[^>]*>/gi;
    
    return content.replace(imgRegex, (match, filename) => {
      const dimensions = imageDimensions[filename];
      if (dimensions) {
        // Add width and height attributes before the closing >
        return match.replace(/>$/, ` width="${dimensions.width}" height="${dimensions.height}">`);
      }
      return match;
    });
  });
  
  // Create blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
