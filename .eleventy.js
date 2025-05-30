const { DateTime } = require("luxon");
const imageDimensions = require("./src/_data/imageDimensions.js");

module.exports = function(eleventyConfig) {
  // Copy CSS files
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
