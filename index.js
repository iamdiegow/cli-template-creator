#!/usr/bin/env node

/**
 * CLI TEMPLATE CREATOR
 */

const copy = require('copy-template-dir');
const path = require('path');
const { green: g, dim: d } = require('chalk');
const alert = require('cli-alerts');

const init = require('./utils/init');
const ask = require('./utils/ask');

(async () => {
  init();

  const name = await ask({ message: 'CLI name?', hint: '(kebab-base only)' });
  const description = await ask({ message: 'CLI description' });
  const version = await ask({ message: 'CLI version?', initial: '0.0.1' });
  const author = await ask({ message: 'CLI author name?' });
  const authorEmail = await ask({ message: 'CLI author email?' });
  const authorUrl = await ask({ message: 'CLI author url?' });

  const vars = {
    name,
    description,
    version,
    author,
    authorEmail,
    authorUrl,
    license: 'MIT',
  };

  const inDir = path.join(__dirname, 'template');
  const outDir = path.join(process.cwd(), vars.name);

  /** Copy template dir and repace placeholders */
  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err;

    console.log();
    console.log(`${d(`Creating files in ${g(`.${path.sep}${vars.name}`)}`)}\n`);

    createdFiles.forEach((createdFile) => {
      const filename = path.basename(createdFile);
      console.log(`${g(`CREATED:`)} ${filename}`);
    });

    alert({
      type: 'success',
      name: 'Done!',
      msg: `\n\n${createdFiles.length} files created in ${g(
        `.${path.sep}${vars.name}`
      )}`,
    });
  });
})();
