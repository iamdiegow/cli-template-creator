const to = require('await-to-js').default;
const { Input } = require('enquirer');
const handleError = require('cli-handle-error');

module.exports = async ({
	message, 
	hint,
	initial
}) => {
  const [err, response] = await to(
    new Input({
      message,
      hint,
			initial
    }).run()
  );
  handleError('INPUT', err);
	return response
}
