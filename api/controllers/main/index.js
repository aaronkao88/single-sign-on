const pkg = require('../../../package.json');

module.exports = {
  friendlyName: 'Index',
  description: 'Index main.',

  inputs: {

  },

  exits: {
    success: {
      responseType: 'ok'
    },
  },

  fn: async function (inputs, exits) {
    return exits.success({
      projectName: pkg.name,
      description: pkg.description,
      version: pkg.version
    })

  }


};
