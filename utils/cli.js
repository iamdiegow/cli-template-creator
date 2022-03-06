const meow = require('meow');
const meowHelp = require('cli-meow-help');
const pkg = require('../package.json');

const flags = {
	clear: {
		type: 'boolean',
		default: true,
		alias: 'c',
		desc: 'Clear the console'
	},
	debug: {
		type: 'boolean',
		default: false,
		alias: 'd',
		desc: 'Print debug info'
	},
	version: {
		type: 'boolean',
		alias: 'v'
	}
};

const commands = {
	help: {
		description: 'Print help info'
	}
}

const helpText = meowHelp({
	name: pkg.name,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
