const copy = require('copy-template-dir');
const alert = require('cli-alerts');
const { green: g, dim: d } = require('chalk');
const path = require('path');

module.exports = ({ inDir, outDir, vars }) => {
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
};
