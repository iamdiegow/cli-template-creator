const fs = require('fs');
const to = require('await-to-js').default;
const { Input } = require('enquirer');
const handleError = require('cli-handle-error');
const shouldCancel = require('cli-should-cancel')

module.exports = async ({
	name,
	message, 
	hint,
	initial
}) => {
  const [err, response] = await to(
    new Input({
			name,
      message,
      hint,
			initial,
			validate(value, state) {
				if (state && state.name === 'name') {
					if(fs.existsSync(value)) {
						return `Directory already exists: ./${value}`
					} else {
						return true
					}
				}
				
				return !value ? 'Please add a value' : true
			}
    })
			.on('cancel', () => shouldCancel())
			.run()

  );
  handleError('INPUT', err);
	return response
}
