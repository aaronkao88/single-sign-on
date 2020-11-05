module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    username: {type: "string", required: true, unique: true}, // 帳號
    password: {type: "string", required: true, encrypt: true}, // 密碼
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
    // 取得使用者資料 
    const _findUser = await User.findOne({
      where:{ username: inputs.username }
    }).decrypt()

    // 登入失敗：找不到該使用者
    if(!_findUser){
      return exits.err(101)
    }

    // 登入失敗：密碼錯誤
    if(!inputs.password === _findUser.password){
      return exits.err(102);
    }

    // 驗證成功，簽發 JWT Token
    let token = await sails.helpers.issueJwt(inputs.mail);

    // All done.
    return exits.success({
      token,
    });

  }


};
