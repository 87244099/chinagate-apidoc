
 /**
 * @api {get} /ajax/Test/DeleteMyMember
 * @apiName DeleteMyMember
 * @apiGroup 测试接口
 * @apiDescription 清除已经注册会员（测试使用）
 *
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
        "msg": "清除成功"
      }
 */
 
 /**
 * @api {get} /ajax/Test/CancelStaff
 * @apiName CancelStaff
 * @apiGroup 测试接口
 * @apiDescription 清除员工（测试使用）
 *
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
        "msg": "清除成功"
      }
 */