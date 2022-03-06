const fs = require('fs');
const path = require('path');
const os = require('os');
const to = require('await-to-js').default;
const { Input } = require('enquirer');
const handleError = require('cli-handle-error');
const shouldCancel = require('cli-should-cancel');
const Store = require('data-store');

module.exports = async ({ name, message, hint, initial }) => {
  let history = false;
  if (!initial && name !== 'name' && name !== 'description') {
    history = {
      autosave: true,
      store: new Store({
        path: path.join(
          os.homedir(),
          `.history/cli-template-creator/${name}.json`
        ),
      }),
    };
  }

  const [err, response] = await to(
    new Input({
      name,
      message,
      hint,
      initial,
			history,
      validate(value, state) {
        if (state && state.name === 'name') {
          if (fs.existsSync(value)) {
            return `Directory already exists: ./${value}`;
          } else {
            return true;
          }
        }

        return !value ? 'Please add a value' : true;
      },
    })
      .on('cancel', () => shouldCancel())
      .run()
  );
  handleError('INPUT', err);
  return response;
};
