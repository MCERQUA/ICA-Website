const { DateTime } = require("luxon");

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
