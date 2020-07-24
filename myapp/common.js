/**
 * @api {get} /common/getCommData getProvinceList
 * @apiName getProvinceList
 * @apiDescription 获取省份列表
 * @apiGroup 公共接口
 *
 * @apiParam {String} cmd getProvinceList
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "请求成功",
        "data": {
          provinceList: [
              {
                  id:1,
                  name: "广东省"
              },
              ...
          ]
        },
      }
 */

 /**
 * @api {get} /common/getCommData getCityList
 * @apiName getCityList
 * @apiDescription 获取城市列表
 * @apiGroup 公共接口
 *
 * @apiParam {String} cmd getCityList
 * @apiParam {Number} provinceCode 
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "请求成功",
        "data": {
          cityList: [
              {
                  id:1,
                  name: "佛山市"
              },
              ...
          ]
        },
      }
 */

 /**
 * @api {get} /common/getCommData getCountryList
 * @apiName getCountryList
 * @apiDescription 获取区域列表
 * @apiGroup 公共接口
 *
 * @apiParam {String} cmd getCountryList
 * @apiParam {Number} cityCode 
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "请求成功",
        "data": {
          countryList: [
              {
                  id:1,
                  name: "南海区"
              },
              ...
          ]
        },
      }
 */

 /**
 * @api {get} /common/getCommData getQrCode
 * @apiName getQrCode
 * @apiDescription 获取小程序内部路径对应的小程序码
 * @apiGroup 公共接口
 *
 * @apiParam {String} cmd getQrCode
 * @apiParam {String} cmd path  小程序内部路径
 * 
 * @apiHeader {String} Content-Type image/jpeg
 * @apiHeader {String} Accept bytes
 */

 

 /**
 * @api {get} /common/getCommData getGlobalData
 * @apiName getGlobalData
 * @apiDescription 获取全局数据，后续可以在这边迭代
 * @apiGroup 公共接口
 *
 * @apiParam {String} cmd getGlobalData
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "请求成功",
        "data": {
          sysPhone: 15800000000
        },
      }
 */