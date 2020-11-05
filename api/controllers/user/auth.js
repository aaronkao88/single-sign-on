module.exports = {


  friendlyName: 'Auth',


  description: 'Auth app.',


  inputs: {
    token: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'ok'
    },
    err: {
      responseType: 'err'
    }
  },


  fn: async function (inputs, exits) {
    // app 有效，開始驗證 JWT
    const jwt = await sails.helpers.verifyJwt(inputs.token);

    if (jwt.hasOwnProperty('name') && jwt.name === 'JsonWebTokenError') {
      return exits.err(996);
    }

    // All done.
    return exits.success(jwt);

  }


};
