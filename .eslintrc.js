module.exports = {
	root: true,
	env: {
		browser: true,
    es2021: true,
		node: true,
	},
	extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debug": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/component-definition-name-casing": "off",
    "no-undef": "off",
	},
};
