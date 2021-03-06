
 /**
 * @api {post} /logAction/action login
 * @apiName login
 * @apiGroup 登录注册
 * @apiDescription 进行微信登录
 *
 * @apiParam {String} cmd login
 * @apiParam {String} code 微信小程序内部获取到的jscode码，去微信服务器查询openId,unionId,session_key，然后进行登录校验，详见https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,//是否登录成功
        "msg": "登录成功"
      }
 */

 /**
 * @api {post} /logAction/action loginByOpenId
 * @apiName login
 * @apiGroup 登录注册
 * @apiDescription 进行微信登录
 *
 * @apiParam {String} cmd loginByOpenId
 * @apiParam {String} openId 
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,//是否登录成功
        "msg": "登录成功"
      }
 */

 /**
 * @api {get} /logAction/action reg
 * @apiName reg
 * @apiGroup 登录注册
 * @apiDescription 进行微信注册
 *
 * @apiParam {String} cmd reg
 * @apiParam {String} code 微信小程序内部获取到的jscode码，去微信服务器查询openId,unionId,session_key，然后进行注册校验，详见https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
 * @apiParam {String} nickName 名称
 * @apiParam {String} avatarPhoto 手机号
 * @apiParam {String} iv 
 * @apiParam {String} encryptedData 
 * 
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "注册成功"
      }
 */

 /**
 * @api {post} /logAction/action memberUpToVipA
 * @apiName memberUpToVipA
 * @apiGroup 登录注册
 * @apiDescription 平台会员升级成某个一级商家vip会员
 *
 * @apiParam {String} cmd memberUpToVipA
 * @apiParam {Number} vipCustomerInvitationID 被邀请
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "升级成功"
      }
 */

 /**
 * @api {post} /logAction/action memberUpToStaff
 * @apiName memberUpToStaff
 * @apiGroup 登录注册
 * @apiDescription 会员升级成员工
 *
 * @apiParam {String} cmd memberUpToStaff
 * @apiParam {Number} staffID 商家提前生成好的员工ID
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "升级成功"
      }
 */



 /**
 * @api {get} /logAction/action getMemberInfo
 * @apiName getMemberInfo
 * @apiGroup 登录注册
 * @apiDescription 获取平台会员信息
 * 
 * @apiParam {String} cmd getMemberInfo
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "获取成功",
        "data":{
          memberInfo: {
            id:11,//会员id(这个必须输出，不然有些页面拿不到数据)
            name:"名称",
            wxAcct: "微信号",
            companyId:111,//所属企业id
            companySubTypeId: 1,//代表一级商家还是二级商家(这个必须输出，不然有些页面拿不到数据)
            subTypeId:1,//是普通会员还是某个企业的员工
            staffId:666,//所属企业员工id
          }
        }
      }
 */

 /**
 * @api {get} /logAction/action getMemberInfoById
 * @apiName getMemberInfoById
 * @apiGroup 登录注册
 * @apiDescription 根据传入的会员id获取会员信息
 * 
 * @apiParam {String} cmd getMemberInfoById
 * @apiParam {Number} cmd id
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "获取成功",
        "data":{
          memberInfo: {
            id:11,//会员id(这个必须输出，不然有些页面拿不到数据)
            name:"名称",
            wxAcct: "微信号",
            companyId:111,//所属企业id
            companySubTypeId: 1,//代表一级商家还是二级商家(这个必须输出，不然有些页面拿不到数据)
            subTypeId:1,//是普通会员还是某个企业的员工
            staffId:666,//所属企业员工id
          }
        }
      }
 */


 

 /**
 * @api {post} /logAction/action checkUserExist
 * @apiName checkUserExist
 * @apiGroup 登录注册
 * @apiDescription 检查用户是否存在，通过openId查询用户是否已经存在，多个openId对应一个unionId
 *
 * @apiParam {String} cmd checkUserExist
 * @apiParam {String} openId 
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,//强制为true
        "data": {
          exist:true,//存在与否
        },
        "msg": "登录成功"
      }
 */

 /**
 * @api {get} /logAction/action checkLogin
 * @apiName checkLogin
 * @apiGroup 登录注册
 * @apiDescription 检查是否处于登录状态
 *
 * @apiParam {String} cmd checkLogin
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,//强制为true
        "data": {
          isLogin:true,//是否已经登录
        },
        "msg": "已经登录"
      }
 */
 
 /**
 * @api {post} /logAction/action loginWithAutoReg 
 * @apiName loginWithAutoReg
 * @apiGroup 登录注册
 * @apiDescription 自动登录注册：进行登录，如果登录，如果用户不存在则进行注册
 *
 * @apiParam {String} cmd loginWithAutoReg
 * @apiParam {String} code 微信小程序内部获取到的jscode码，去微信服务器查询openId,unionId,session_key，然后进行注册校验，详见https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
 * @apiParam {String} nickName 名称
 * @apiParam {String} avatarPhoto 微信头像
 * @apiParam {String} iv 
 * @apiParam {String} encryptedData 
 * 
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "注册成功"
      }
 */