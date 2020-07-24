/**
 * @api {post} /apply/applyForm applyAdvise
 * @apiName applyAdvise
 * @apiDescription 提交【投诉建议】的表单数据
 * @apiGroup 表单提交
 *
 * @apiParam {String} cmd applyAdvise
 * @apiParam {String} customerName 姓名
 * @apiParam {String} customerTel 手机号
 * @apiParam {String} email 邮箱地址
 * @apiParam {String} leaveMessage 投诉建议
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "我们已收到您的建议/投诉，稍后将回复您"
      }
 */

 /**
 * @api {post} /apply/applyForm applyBuy
 * @apiName applyBuy
 * @apiGroup 表单提交
 * @apiDescription 提交【我要购买】的表单数据
 *
 * @apiParam {String} cmd applyBuy
 * @apiParam {String} customerName 姓名
 * @apiParam {String} customerTel 手机号
 * @apiParam {String} address 地址
 * @apiParam {String} leaveMessage 需求说明
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "提交成功"
      }
 */

 /**
 * @api {post} /apply/applyForm applyService
 * @apiName applyService
 * @apiDescription 提交【咨询客服】的表单数据
 * @apiGroup 表单提交
 *
 * @apiParam {String} cmd applyService
 * @apiParam {String} name 姓名
 * @apiParam {String} phone 手机号
 * @apiParam {String} description 维修内容
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {String} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "我们已收到您的咨询"
      }
 */

 /**
 * @api {post} /apply/applyForm applyRepair
 * @apiName applyRepair
 * @apiDescription 提交【我要维修】的表单数据
 * @apiGroup 表单提交
 *
 * @apiParam {String} cmd applyRepair
 * @apiParam {String} customerName 姓名
 * @apiParam {String} customerTel 手机号
 * @apiParam {String} address 地址
 * @apiParam {String} leaveMessage 维修内容
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {String} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "提交成功"
      }
 */