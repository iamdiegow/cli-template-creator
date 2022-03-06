const welcome = require('cli-welcome');
const pkg = require('../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
	unhandled();
	welcome({
		title: 'cli-template-generator',
		tagLine: 'by @diegow',
		description: pkg.description,
		bgColor: '#6cc24a',
		color: '#000000',
		bold: true,
		clear: true,
		version: pkg.version
	});
}
