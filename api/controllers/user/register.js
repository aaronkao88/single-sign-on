module.exports = {
  friendlyName: 'Register',
  description: 'Register user.',

  inputs: {
    username: {type: "string", required: true, unique: true}, // 帳號
    password: {type: "string", required: true, encrypt: true}, // 密碼    nickname: {type: "string", required: true}, // 暱稱
    nickname: {type: "string", required: true}, // 暱稱
    gender: {type: "string", required: true}, // 值: male, female, other, unknown
    mail: {type: "string", defaultsTo: ""}, // 信箱
    phone: {type: "string", defaultsTo: ""}, // 電話
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
    //註冊新帳號 
    const _regUser = await User.create({
      username: inputs.username,
      password: inputs.password,
      nickname: inputs.nickname,
      gender: inputs.gender,
      mail: inputs.mail,
      phone: inputs.phone
    });

    // 帳號是否存在
    const _findUser = await User.findOne({
      mail: inputs.mail
    }).decrypt()

    if (!_findUser) {
      return exits.err(100);
    }


    // 回應exits
    return exits.success({
      username: inputs.username,
      nickname: inputs.nickname,
      gender: inputs.gender,
      mail: inputs.mail,
      phone: inputs.phone
    })

  }

};
