const alert = require('cli-alerts');

module.exports = (info) => {
  alert({
    type: 'error',
    name: 'DEBUG LOG',
    msg: '',
  });

  console.log(info);
  console.log();
};
