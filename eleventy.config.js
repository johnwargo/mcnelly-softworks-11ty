const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginDate = require('eleventy-plugin-date');

module.exports = eleventyConfig => {

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(pluginDate);
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addShortcode("getKeywords", function (categories) {
		let returnString = "";
		for (let category in categories) {
			returnString += categories[category] + ", ";
		}
		// Remove the last comma
		return returnString.slice(0, -2);
	});
	
	eleventyConfig.addPassthroughCopy({ 'src/favicon/*': '/' });
	[
		"src/_data/*",
		"src/assets/",
		"src/images/",		
		"src/downloads/",
	].forEach((path) => {
		eleventyConfig.addPassthroughCopy(path);
	});

	return {
		dir: {
			input: 'src',
			output: "_site",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data"
		}
	}
};