/**
 * Session.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const uuid = require('uuidv4')

module.exports = {

  attributes: {
    token: {type: "string", required: true}, // 預設產生一組 uuid/v4 作為 token
    expiredAt: {type: "string", required: true}, // 為 Timestamp，Session 到期時間為登入（Session 資料寫入）後三小時
    user: {model: "User"}
  },

  beforeCreate: (data, proceed) => {
    data.token = uuid().replace(/\-/g, '').substr(0, 8).toString();
    return proceed();
  }


};

