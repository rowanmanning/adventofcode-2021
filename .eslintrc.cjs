
module.exports = {
	extends: [
		'@rowanmanning/eslint-config'
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		requireConfigFile: false
	},
	rules: {
		'no-loop-func': 'off'
	}
};
