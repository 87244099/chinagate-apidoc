/**
 * @api {get} /user/userCollection getCollectionList
 * @apiName getCollectionList
 * @apiDescription 获取收藏的名片列表，一页6条
 * @apiGroup 名片
 *
 * @apiParam {String} cmd getCollectionList
 * @apiParam {String} pageNo 页数
 * @apiParam {String} pageSize 每页加载多少个(默认6个)
 * 
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "请求成功",
 *       "data": {
 *         companyList: [
 *           {
 *             id:111,
 *             name:"名片名称",
 *             imgSrc:"https://staticDomain.com/image/aaa.jpg",
 *             companyId:666,//如果是员工，输出所属企业的信息
 * 
 *           },
 *           ...
 *         ],
 *         totalSize: 100//总共收藏了多少名片
 *       }
 *     }
 */

 /**
 * @api {post} /user/userCollection setUserCollectCancel
 * @apiName setUserCollectCancel
 * @apiDescription 取消对该名片的收藏
 * @apiGroup 名片
 *
 * @apiParam {String} cmd setUserCollectCancel
 * @apiParam {Number} id 名片id
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "取消成功",
 *     }
 */

 /**
 * @api {post} /user/userCollection setUserCollectCancel4Staff
 * @apiName setUserCollectCancel4Staff
 * @apiDescription 取消对该员工名片的收藏
 * @apiGroup 名片
 *
 * @apiParam {String} cmd setUserCollectCancel4Staff
 * @apiParam {Number} id 名片id
 * @apiParam {Number} staffId 员工id
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "取消成功",
 *     }
 */

 /**
 * @api {post} /user/userCollection setUserCollect
 * @apiName setUserCollect
 * @apiDescription 收藏名片
 * @apiGroup 名片
 *
 * @apiParam {String} cmd setUserCollect
 * @apiParam {Number} id 名片id
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "收藏成功",
 *     }
 */

 /**
 * @api {post} /user/userCollection setUserCollect4Staff
 * @apiName setUserCollectStaff
 * @apiDescription 收藏员工名片
 * @apiGroup 名片
 *
 * @apiParam {String} cmd setUserCollect4Staff
 * @apiParam {Number} id 名片id
 * @apiParam {Number} staffId 员工id
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "收藏成功",
 *     }
 */

 /**
 * @api {get} /user/userCollection getUserCollectInfo
 * @apiName getUserCollectInfo
 * @apiDescription 获取个人名片信息
 * @apiGroup 名片
 *
 * @apiParam {String} cmd getUserCollectInfo
 * @apiParam {Number} id 用户id
 * 
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "请求成功",
 *       "data": {
 *         userInfo: {
 *           id:111,//用户id
 *           name:"用户名称",
 *           imgSrc:"https://staticDomain.com/image/aaa.jpg",//用户头像
 *           phone:"13690000000",//用户手机号
 *           wechatAcct:"jser",//用户微信号
 *           addrInfo:{
 *             provinceName:"广东省",
 *             cityName:"广州市",
 *             countryName:"天河区"
 *           }
 *         }
 *       }
 *     }
 */

 
 /**
 * @api {post} /user/userCollection setUserCollectInfo
 * @apiName setUserCollectInfo
 * @apiDescription 个人名片设置
 * @apiGroup 名片
 *
 * @apiParam {String} cmd setUserCollectInfo
 * @apiParam {Number} id 用户id
 * @apiParam {String} name 姓名
 * @apiParam {String} phone 手机号
 * @apiParam {blob} headImg 头像（图片数据，修改图片时会带上这个字段）
 * @apiHeader {String} Content-Type multipart/form-data 
 * @apiHeader {String} Accept application/json 
 * 
 * 
 * @apiParam {String} addrInfo 所在地区，上传参数为地区代码 eg:"{\"provinceCode\":1,\"cityCode\":2,\"countryCode\":3}"（可选）
 * @apiParam {String} wecharAcct 微信号（可选）
 * @apiParam {String} qqAcct qq号（可选）
 * @apiParam {String} email 邮箱（可选）
 * @apiParam {String} description 简要描述（可选）
 * 
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "设置个人资料成功"
 *     }
 */


 

  /**
 * @api {get} /user/userInfo getInfo4Staff
 * @apiName getInfo4Staff
 * @apiDescription 获取员工信息
 * @apiGroup 名片
 *
 * @apiParam {String} cmd getInfo4Staff
 * @apiParam {Number} id 员工id
 * @apiParam {Number} companyId 企业id
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccess {Object} data 请求数据
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "rt": 0,
 *       "success": true,
 *       "msg": "请求成功",
 *       "data": {
 *         id:111,
 *         name:"名称",
 *         //...其他字段
 *       }
 *     }
 */