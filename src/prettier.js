const prettier = require("eslint-config-prettier");

module.exports = {
	plugins: ["prettier"],
	extends: ["plugin:prettier/recommended"],
	rules: {
		...prettier.rules,
		"arrow-body-style": 0,
		"line-comment-position": 0,
		"no-inline-comments": 0,
	},
};
