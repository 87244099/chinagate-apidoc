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
 *           memberID:111,//用户id
 *           memberName:"用户名称",
 *           merchantForLevelAID: 66,//所属企业id,
 *           avatarPhoto:"https://staticDomain.com/image/aaa.jpg",//用户头像
 *           memberPhone:"13690000000",//用户手机号
 *           weChat:"jser",//用户微信号
 *           qq:"872440899",//qq号码
 *           email: "111qq@.com",//邮箱
 *           personalIntroduction: "介绍的内容。。。。",//个人简介
 *           address: "文本地址信息",
 *           addrInfo:{
 *             provinceName:"广东省",//省份中文名称
 *             cityName:"广州市",//城市中文名称
 *             countryName:"天河区",//区域中文名称
 *             provinceCode: 1,//省份代码
 *             cityCode: 2,//城市代码
 *             countryCode:3,//区域代码
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
 * @apiParam {String} avatarPhotoFile 头像图片的文件id(如果为为空或者和原来一样，则代表没有修改过)
 * @apiParam {String} memberName 姓名
 * @apiParam {String} region 所在地区，上传参数为地区代码 eg:"{\"provinceCode\":1,\"cityCode\":2,\"countryCode\":3}"（可选）
 * @apiParam {String} address 地址（可选）
 * @apiParam {String} weChat 微信号（可选）
 * @apiParam {String} qq qq号（可选）
 * @apiParam {String} memberEmail 邮箱（可选）
 * @apiParam {String} personalIntroduction 简要描述（可选）
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
 * @apiDescription 获取员工名片信息
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
 *         job: "主管",//职位信息
 *         phone: "15816000000",//联系电话
 *         chatInfo:{},//页面有个聊天功能，点了没反应，这块应该需要数据才对
 *         
 *       }
 *     }
 */

/**
 * @api {post} /user/userInfo uploadHeadImg
 * @apiName uploadHeadImg
 * @apiDescription 上传个人名片的头像
 * @apiGroup 名片
 *
 * @apiParam {String} cmd uploadHeadImg
 * @apiParam {String} avatarPhotoFile (文件在body对应的key值，读取二进制数据)
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
 *       "msg": "上传成功",
 *       "data": {
 *         headImg: "/Upload/headImg.jpg"//上传成功后文件所在磁盘路径
 *       }
 *     }
 */