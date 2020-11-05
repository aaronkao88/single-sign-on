/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {type: "string", required: true, unique: true}, // 帳號
    password: {type: "string", required: true, encrypt: true}, // 密碼
    nickname: {type: "string", required: true}, // 暱稱
    gender: {type: "string", required: true}, // 值: male, female, other, unknown
    mail: {type: "string", defaultsTo: ""}, // 信箱
    phone: {type: "string", defaultsTo: ""}, // 電話
    role: {type: "string",  defaultsTo: "User"} //權限設定 User:一般使用者 Admin:管理員
  },

};

