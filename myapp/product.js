 /**
 * @api {get} /product/product getProductCenterPageData
 * @apiName getProductCenterPageData
 * @apiDescription 获取产品中心数据，最多返回10个分类，每个分类最多20个产品，产品按上架时间排序，取前10个
 * @apiGroup 产品
 *
 * @apiParam {String} cmd getProductCenterPageData
 * @apiParam {Number} id 企业id
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
 *         productGroupList: [
 *           {
 *             id:1,//分类id
 *             name:"产品分类1",//分类名称
 *             productList: [
 *               {
 *                 id:1,//产品id，
 *                 companyId: 6,
 *                 name: "产品1",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               {
 *                 id:2,//产品id
 *                 companyId: 6,
 *                 name: "产品2",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               ...
 *             ]
 *           },
 *           {
 *             id:2,//分类id
 *             name:"产品分类2",
 *             productList: [
 *               {
 *                 id:1,//产品id
 *                 companyId: 6,
 *                 name: "产品3",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               {
 *                 id:2,//产品id
 *                 companyId: 6,
 *                 name: "产品4",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               ...
 *             ]
 *           },
 *           ...
 *         ]
 *       }
 *     }
 */

  /**
 * @api {get} /product/product getProductDetailPageData
 * @apiName getProductDetailPageData
 * @apiDescription 获取产品详情页数据
 * @apiGroup 产品
 *
 * @apiParam {String} cmd getProductDetailPageData
 * @apiParam {Number} companyId 企业Id
 * @apiParam {Number} productId 产品id
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
 *         companyInfo:{
 *           id: 1,//企业id,
 *           name: "企业名称",
 *         },
 *         productInfo:{
 *           id:2,//产品id,
 *           companyId: 6,
 *           name: "产品名称",
 *           normalPrice: 10.5,//普通价
 *           vipPrice: 5.5,//普通价
 *           intro:"这里时产品介绍的数据这里时产品介绍的数据",//详细介绍(富文本)
 *           imgSrc: "https://staticDomain.com/image/aaaa.jpg"  
 *         }
 *       }
 *     }
 */

 /**
 * @api {get} /product/product getProductListByGroup
 * @apiName getProductListByGroup
 * @apiDescription 通过分类id获取产品
 * @apiGroup 产品
 *
 * @apiParam {String} cmd getProductListByGroup
 * @apiParam {Number} companyId 企业id
 * @apiParam {Number} groupId 产品分类id
 * @apiParam {Number} pageNo 页码，默认为0
 * @apiParam {Number} pageSize 一页多少个产品，默认为10
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
 *             productList: [
 *               {
 *                 id:1,//产品id
 *                 name: "产品1",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               {
 *                 id:2,//产品id
 *                 name: "产品2",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg"
 *               },
 *               ...
 *             ],
 *             totalPdSize: 100//该分类下有多少个产品
 *           },
 *           ...
 *         ]
 *       }
 *     }
 */

 
 /**
 * @api {get} /product/product getProductListByName
 * @apiName getProductListByName
 * @apiDescription 通过关键词搜索产品
 * @apiGroup 产品
 *
 * @apiParam {String} cmd getProductListByName
 * @apiParam {Number} id 企业id
 * @apiParam {String} word 搜索关键词
 * @apiParam {Number} pageNo 页码，默认为0
 * @apiParam {Number} pageSize 一页多少个产品，默认为10
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
 *             productList: [
 *               {
 *                 id:1,//产品id
 *                 name: "产品1",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg",
 *                 normalPrice: 10.5,
 *                 vipPrice: 5.5
 *               },
 *               {
 *                 id:2,//产品id
 *                 name: "产品2",//产品名称
 *                 imgSrc: "https://staticDomain.com/image/aaa.jpg",
 *                 normalPrice: 10.5,
 *                 vipPrice: 5.5
 *               },
 *               ...
 *             ],
 *             totalPdSize: 100//该分类下有多少个产品
 *           },
 *           ...
 *         ]
 *       }
 *     }
 */

 /**
 * @api {get} /product/productCollection getProductCollectionList
 * @apiName getProductCollectionList
 * @apiDescription 获取收藏的产品列表，一页6条
 * @apiGroup 产品
 *
 * @apiParam {String} cmd getProductCollectionList
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
 *         productList: [
 *           {
 *             id:111,//产品id
 *             companyId:6,//企业id
 *             name:"产品名称",
 *             imgSrc:"https://staticDomain.com/image/aaa.jpg",
 *           },
 *           ...
 *         ],
 *         totalSize: 100//总共收藏了多少产品
 *       }
 *     }
 */

 /**
 * @api {post} /product/productCollection setProductCollectCancel
 * @apiName setProductCollectCancel
 * @apiDescription 取消对该产品的收藏
 * @apiGroup 产品
 *
 * @apiParam {String} cmd setProductCollectCancel
 * @apiParam {Number} productId 产品id
 * @apiParam {Number} companyId 企业id
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
 * @api {post} /product/productCollection setProductCollect
 * @apiName setProductCollect
 * @apiDescription 收藏产品
 * @apiGroup 产品
 *
 * @apiParam {String} cmd setProductCollect
 * @apiParam {Number} productId 产品id
 * @apiParam {Number} merchantForLevelAID 一级商家id
 * @apiParam {Number} merchantForLevelBID 二级商家id
 * @apiParam {Number} staffID 员工id
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