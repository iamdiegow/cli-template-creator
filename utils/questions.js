const ask = require('./ask');

module.exports = async () => {
  const name = await ask({ message: 'CLI name?', hint: '(kebab-base only)' });
  const description = await ask({ message: 'CLI description' });
  const version = await ask({ message: 'CLI version?', initial: '0.0.1' });
  const authorName = await ask({ message: 'CLI author name?' });
  const authorEmail = await ask({ message: 'CLI author email?' });
  const authorUrl = await ask({ message: 'CLI author url?' });

  const vars = {
    name,
    description,
    version,
    authorName,
    authorEmail,
    authorUrl,
    license: 'MIT',
  };

	return vars;
}
