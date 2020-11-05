module.exports = {

  friendlyName: 'User',


  description: 'User user.',


  inputs: {},


  exits: {
    success: {
      responseType: 'ok'
    },
    err: {
      responseType: 'err'
    }

  },


  fn: async function (inputs,exits) {
    // 尋找所有的使用者
    const _findAll = await User.find({
      username: exits.username,
      password: exits.password,
      nickname: exits.nickname,
      gender: exits.gender,
      mail: exits.mail,
      phone: exits.phone
    })

    // All done.
    return exits.success({
      _findAll
    });

  }


};
