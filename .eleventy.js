const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy CSS files
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Add date filters
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  });
  
  // Add limit filter
  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
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