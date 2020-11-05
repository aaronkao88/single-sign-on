module.exports.errcode = {
    code: {
      //- 100: 帳號相關
      100: {
        msg: '登入失敗：已有相同的使用者',
        status: 400
      },
      101: {
        msg: '登入失敗：找不到該使用者',
        status: 400
      },
      102: {
        msg: '登入失敗：密碼錯誤',
        status: 400
      },
      103: {
        msg: '登入失敗：帳號尚未啟用',
        status: 400
      },
      104: {
        msg: '讀取失敗：資料讀取錯誤',
        status: 400
      },
      //- 900: 操作相關
      900: {
        msg: '操作失敗：尚未登入',
        status: 401
      },
      994: {
        msg: '資料庫寫入失敗',
        status: 500
      },
      995: {
        msg: '登入階段已過期(Session Expired)',
        status: 440
      },
      996: {
        msg: '找不到有效的 Token 或是 Token 錯誤',
        status: 401
      },
      997: {
        msg: '拒絕存取,沒有足夠的權限存取該API',
        status: 403
      },
      998: {
        msg: '無效請求 (Bad Request)',
        status: 400
      },
      999:{
        msg: '其他伺服器錯誤',
        status: 500
      },
      1000: {
        msg: '權限不足：無法執行此指令',
        status: 400
      },
    }
  };
