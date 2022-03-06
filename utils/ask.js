const to = require('await-to-js').default;
const { Input } = require('enquirer');
const handleError = require('cli-handle-error');
const shouldCancel = require('cli-should-cancel')

module.exports = async ({
	message, 
	hint,
	initial
}) => {
  const [err, response] = await to(
    new Input({
      message,
      hint,
			initial,
			validate(value) {
				return !value ? 'Please add a value' : true
			}
    })
			.on('cancel', () => shouldCancel())
			.run()

  );
  handleError('INPUT', err);
	return response
}
