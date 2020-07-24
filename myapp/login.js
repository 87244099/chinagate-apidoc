
 /**
 * @api {get} /logAction/action login
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
        "success": true,
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
 * @api {get} /logAction/action memberUpToVipA
 * @apiName memberUpToVipA
 * @apiGroup 登录注册
 * @apiDescription 平台会员升级成某个一级商家vip会员
 *
 * @apiParam {String} cmd memberUpToVipA
 * @apiParam {Number} companyAId 一级商家的id
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
 * @api {get} /logAction/action memberUpToVipB
 * @apiName memberUpToVipB
 * @apiGroup 登录注册
 * @apiDescription 平台会员升级成某个二级商家vip会员
 *
 * @apiParam {String} cmd memberUpToVipB
 * @apiParam {Number} companyBId 二级商家的id
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

