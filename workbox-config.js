module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{webp,jpeg,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};