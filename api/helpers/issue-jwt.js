const jwt = require('jsonwebtoken')
const uuid = require('node-uuid')

module.exports = {


  friendlyName: 'Issue jwt',


  description: '',

  inputs: {
    mail: {type: "string", defaultsTo: ""}, // 信箱
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },



  fn: async function (inputs,exits) {
    // 權限
    const roleName = {
      0:{
        name: "User"
      },  //一般使用者

      999:{
        name: "Admin"
      }  //管理員
    };

    // 查詢mail
    const _user = await User.findOne({
      where:{ mail: inputs.mail }
    }).decrypt()


    let token = await jwt.sign({
      iat: Math.floor(Date.now()/1000),
      role: roleName[_user.role].name
    },sails.config.custom.jwtSecret, {
      issuer: 'SSO System',
      subject: inputs.mail,
      audience: 'SSO System',
      expiresIn: '3h',
      jwtid: uuid(),
    });

    return exits.success({
    })

  }


};

