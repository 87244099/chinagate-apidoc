/**
 * @api {post} /company/company createCompany
 * @apiName createCompany
 * @apiGroup 企业
 * @apiDescription 创建企业
 *
 * @apiParam {String} cmd createCompany
 * @apiParam {String} customerName 姓名
 * @apiParam {String} position 职位
 * @apiParam {String} customerTel 手机号
 * @apiParam {String} companyName 企业名称
 * @apiParam {Number{1,2}} companyTypeID 商铺名称(1：品牌直销。2：综合批发)
 * @apiParam {String} region "{\"provinceCode\":1,\"cityCode\":2,\"countryCode\":3}"
 *
 * @apiSuccess {Boolean} success 请求成功与否
 * @apiSuccess {String} msg 错误原因
 * @apiSuccess {Number} rt 服务器内部错误码
 * @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
      {
        "rt": 0,
        "success": true,
        "msg": "创建成功"
      }
 */

 
 /**
 * @api {get} /company/company getRecentCompanyList
 * @apiName getRecentCompanyList
 * @apiGroup 企业
 * @apiDescription 获取附近的企业
 *
 * @apiParam {String} cmd getRecentCompanyList
 * @apiParam {Number} latitude 设备当前所在位置-经度
 * @apiParam {Number} longitude 设备当前所在位置-纬度
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
        data: {
          companyList: [
            {
              id: 1,
              name: "company name",
              imgSrc: "https://staticDomain.com/image/aaaa.jpg"
            }
          ]
        }
      }
 */

 
 /**
 * @api {get} /company/company getBrandCompanyList
 * @apiName getBrandCompanyList
 * @apiGroup 企业
 * @apiDescription 获取品牌厂商
 *
 * @apiParam {String} cmd getBrandCompanyList
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
        data: {
          companyList: [
            {
              id: 1,
              name: "company name",
              imgSrc: "https://staticDomain.com/image/aaaa.jpg"
            }
          ]
        }
      }
 */

 /**
 * @api {get} /company/company getBrandCompanyListByName
 * @apiName getBrandCompanyListByName
 * @apiGroup 企业
 * @apiDescription 搜索品牌厂商
 *
 * @apiParam {String} cmd getBrandCompanyListByName
 * @apiParam {String} word 搜索关键词
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
        data: {
          companyList: [
            {
              id: 1,
              name: "company name",
              imgSrc: "https://staticDomain.com/image/aaaa.jpg"
            }
          ]
        }
      }
 */

 
 
 /**
 * @api {get} /company/company getCompanyAIndexPageData
 * @apiName getCompanyAIndexPageData
 * @apiGroup 企业
 * @apiDescription 获取一级商家的企业首页数据
 *
 * @apiParam {String} cmd getCompanyAIndexPageData
 * @apiParam {Number} id 企业id
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
        data: {
          pageData: {
            carouselList: [
              {
                imgSrc: "https://staticDomain.com/image/aaaa.jpg"
              },
              ...
            ],
            companyInfo: {
              id: 1,//企业id
              phone: "13690000000",//企业联系电话
              aboutMe: "富文本内容",//【关于我们】的富文本内容介绍
              name:"企业名称",
              addrInfo:{
                provinceName: "广东省",
                cityName: "佛山市",
                coutryName: "南海区",
                address:"广东省佛山市南海区xxx镇工业区aaa",
              },
              position: {//企业经纬度
                latitude: 20.000000 
                longitude: 20.000000
              },
              themeColor: "rgba(255,255,255, 0)"//尝试用这种格式转给我，实在不行的话才给16进制，因为给我16进制，我也需要在客户端转成rgba格式
            },
            productGroupList: {
              {
                id: 11,//分类id
                groupName: "分类名称",
                productList: [
                  {
                    id: 111,//产品id
                    name: "产品名称",
                    normalPrice: 10.5,//普通价格
                    vipPrice: 5.5,//vip价格
                  }
                ]
              }
            },

          }
        }
      }
 */

  /**
 * @api {get} /company/company getCompanyBIndexPageData
 * @apiName getCompanyBIndexPageData
 * @apiGroup 企业
 * @apiDescription 获取二级商家的企业首页数据
 *
 * @apiParam {String} cmd getCompanyBIndexPageData
 * @apiParam {Number} id 企业id
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
        data: {
          pageData: {
            carouselList: [
              {
                imgSrc: "https://staticDomain.com/image/aaaa.jpg"
              },
              ...
            ],
            companyInfo: {
              id: 1,//企业id
              phone: "13690000000",//企业联系电话
              aboutMe: "富文本内容",//【关于我们】的富文本内容介绍
              name:"企业名称",
              addrInfo:{
                provinceName: "广东省",
                cityName: "佛山市",
                coutryName: "南海区",
                address:"广东省佛山市南海区xxx镇工业区aaa",
              },
              position: {//企业经纬度
                latitude: 20.000000 
                longitude: 20.000000
              },
              themeColor: "rgba(255,255,255, 0)"//尝试用这种格式转给我，实在不行的话才给16进制，因为给我16进制，我也需要在客户端转成rgba格式
            },
            productGroupList: {
              {
                id: 11,//分类id
                groupName: "分类名称",
                productList: [
                  {
                    id: 111,//产品id
                    name: "产品名称",
                    normalPrice: 10.5,//普通价格
                    vipPrice: 5.5,//vip价格
                  }
                ]
              }
            },

          }
        }
      }
 */
 
 
 /**
 * @api {get} /company/companyCollect getCompanyCollectionList
 * @apiName getCompanyCollectionList
 * @apiDescription 获取收藏的企业列表，一页6条
 * @apiGroup 企业
 *
 * @apiParam {String} cmd getCompanyCollectionList
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
 *             name:"店铺名称",
 *             imgSrc:"https://staticDomain.com/image/aaa.jpg",
 *           },
 *           ...
 *         ],
 *         totalSize: 100//总共收藏了多少企业
 *       }
 *     }
 */

 /**
 * @api {post} /company/companyCollect setCompanyCollectCancel
 * @apiName setCompanyCollectCancel
 * @apiDescription 取消对该企业的收藏
 * @apiGroup 企业
 *
 * @apiParam {String} cmd setCompanyCollectCancel
 * @apiParam {Number} merchantForLevelAID 一级商家id
 * @apiParam {Number} merchantForLevelBID 二级商家id
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
 * @api {post} /company/companyCollect setCompanyCollect
 * @apiName setCompanyCollect
 * @apiDescription 收藏企业
 * @apiGroup 企业
 *
 * @apiParam {String} cmd setCompanyCollect
 * @apiParam {Number} merchantForLevelAID 一级商家id
 * @apiParam {Number} merchantForLevelBID 二级商家id
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
 * @api {get} /company/companyInfo getInfo4CompanyA
 * @apiName getInfo4CompanyA
 * @apiDescription 获取一级商家的信息
 * @apiGroup 企业
 *
 * @apiParam {String} cmd getInfo4CompanyA
 * @apiParam {Number} id 商家id
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

  /**
 * @api {get} /company/companyInfo getInfo4CompanyB
 * @apiName getInfo4CompanyB
 * @apiDescription 获取二级商家的信息
 * @apiGroup 企业
 *
 * @apiParam {String} cmd getInfo4CompanyB
 * @apiParam {Number} id 商家id
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


  /**
 * @api {get} /company/companyInfo getInvitationVipPageData
 * @apiName getInvitationVipPageData
 * @apiDescription 获取会员邀请页面数据
 * @apiGroup 企业
 *
 * @apiParam {String} cmd getInvitationVipPageData
 * @apiParam {Number} vipCustomerInvitationID vip的id
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
 *         companyInfo: {}//公司实体 
 *       }
 *     }
 */

  /**
 * @api {get} /company/companyInfo getInvitationStaffPageData
 * @apiName getInvitationStaffPageData
 * @apiDescription 获取员工邀请页面数据
 * @apiGroup 企业
 *
 * @apiParam {String} cmd getInvitationStaffPageData
 * @apiParam {Number} staffID 员工id
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
 *         staffInfo: {},//员工实体
 *         companyInfo: {}//公司实体 
 *       }
 *     }
 */

 