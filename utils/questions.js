const ask = require('./ask');

module.exports = async () => {
  const name = await ask({
    name: 'name',
    message: 'CLI name?',
    hint: '(kebab-base only)',
  });

  const description = await ask({
    name: 'description',
    message: 'CLI description',
  });

  const version = await ask({
    name: 'version',
    message: 'CLI version?',
    initial: '0.0.1',
  });

  const authorName = await ask({
    name: 'authorName',
    message: 'CLI author name?',
  });

  const authorEmail = await ask({
    name: 'authorEmail',
    message: 'CLI author email?',
  });

  const authorUrl = await ask({
    name: 'authorUrl',
    message: 'CLI author url?',
  });

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
};
