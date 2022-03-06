#!/usr/bin/env node

/**
 * CLI TEMPLATE CREATOR
 */

const path = require('path');

const init = require('./utils/init');
const cli = require('./utils/cli');
const questions = require('./utils/questions');
const generate = require('./utils/generate.js');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
  init({ clear });

  input.includes('help') && cli.showHelp(0);

	debug && console.log(flags);

  /** get user input */
  const vars = await questions();

  const inDir = path.join(__dirname, 'template');
  const outDir = path.join(process.cwd(), vars.name);

  /** Copy template dir and repace placeholders */
  generate({
    inDir,
    outDir,
    vars,
  });
})();
