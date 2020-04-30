module.exports = function(eleventyConfig) {

  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/images": "assets" });


  // Update Markdown with Plugins
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "heading-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLib);


  // Year Diff
  // Usage: {% yearDiff 2010 %}
  eleventyConfig.addLiquidTag("yearDiff", function(liquidEngine) {
    return {
      parse: function(tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: function(scope, hash) {
        // Resolve variables
        var str = liquidEngine.evalValue(this.str, scope);
        var dateAsString = '01 June ' + str + ' 00:00:00 GMT';
        var startDate = Date.parse(dateAsString)
        var ageDifMs = Date.now() - startDate;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    };
  });

  return {
    dir: {
      data: "data",
      input: "src/",
      includes: "_includes",
      output: "build"
    },

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true,

    // Defult Template Engine
    templateFormats: [
      "md",
      "html",
      "liquid"
    ],
    jsDataFileSuffix: ".data"
  };
};
