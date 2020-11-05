const jwt = require('jsonwebtoken')

module.exports = {


  friendlyName: 'Verify jwt',


  description: '',


  inputs: {
    token: {type: "string", required: true}, 
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {
    try {
      let decoded = await jwt.verify(inputs.token, sails.config.custom.jwtSecret);
      return exits.success(decoded);
    } catch (err) {
      return exits.success(err);
    }
  }


};

