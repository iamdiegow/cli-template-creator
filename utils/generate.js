const copy = require('copy-template-dir');
const alert = require('cli-alerts');
const { green: g, dim: d, yellow: y } = require('chalk');
const ora = require('ora');
const execa = require('execa');
const path = require('path');

const spinner = ora({ 
	text: ''
});

module.exports = ({ inDir, outDir, vars }) => {
  copy(inDir, outDir, vars, async (err, createdFiles) => {
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

		spinner.start('Installing dependencies...');
		const pkgs = [
			"cli-alerts",
			"cli-handle-error",
			"cli-handle-unhandled",
			"cli-welcome",
			"copy-template-dir",
			"meow@9.0.0",
			"cli-meow-help",
		]
		await execa('npm', ['install', ...pkgs], {
			cwd: path.resolve(outDir)
		});
		spinner.succeed('Dependencies installed!')
  });
};
