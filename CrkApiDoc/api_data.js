define({ "api": [
  {
    "type": "get",
    "url": "/product/product",
    "title": "getProductCenterPageData",
    "name": "getProductCenterPageData",
    "description": "<p>获取产品中心数据，最多返回10个分类，每个分类最多20个产品，产品按上架时间排序，取前10个</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProductCenterPageData</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    productGroupList: [\n      {\n        id:1,//分类id\n        name:\"产品分类1\",//分类名称\n        productList: [\n          {\n            id:1,//产品id，\n            companyId: 6,\n            name: \"产品1\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          {\n            id:2,//产品id\n            companyId: 6,\n            name: \"产品2\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          ...\n        ]\n      },\n      {\n        id:2,//分类id\n        name:\"产品分类2\",\n        productList: [\n          {\n            id:1,//产品id\n            companyId: 6,\n            name: \"产品3\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          {\n            id:2,//产品id\n            companyId: 6,\n            name: \"产品4\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          ...\n        ]\n      },\n      ...\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "get",
    "url": "/product/productCollection",
    "title": "getProductCollectionList",
    "name": "getProductCollectionList",
    "description": "<p>获取收藏的产品列表，一页6条</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProductCollectionList</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页加载多少个(默认6个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    productList: [\n      {\n        id:111,//产品id\n        companyId:6,//企业id\n        name:\"产品名称\",\n        imgSrc:\"https://staticDomain.com/image/aaa.jpg\",\n      },\n      ...\n    ],\n    totalSize: 100//总共收藏了多少产品\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "get",
    "url": "/product/product",
    "title": "getProductDetailPageData",
    "name": "getProductDetailPageData",
    "description": "<p>获取产品详情页数据</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProductDetailPageData</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyId",
            "description": "<p>企业Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    companyInfo:{\n      id: 1,//企业id,\n      name: \"企业名称\",\n    },\n    productInfo:{\n      id:2,//产品id,\n      companyId: 6,\n      name: \"产品名称\",\n      normalPrice: 10.5,//普通价\n      vipPrice: 5.5,//普通价\n      intro:\"这里时产品介绍的数据这里时产品介绍的数据\",//详细介绍(富文本)\n      imgSrc: \"https://staticDomain.com/image/aaaa.jpg\"  \n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "get",
    "url": "/product/product",
    "title": "getProductListByGroup",
    "name": "getProductListByGroup",
    "description": "<p>通过分类id获取产品</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProductListByGroup</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyId",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupId",
            "description": "<p>产品分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页码，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>一页多少个产品，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n        productList: [\n          {\n            id:1,//产品id\n            name: \"产品1\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          {\n            id:2,//产品id\n            name: \"产品2\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\"\n          },\n          ...\n        ],\n        totalPdSize: 100//该分类下有多少个产品\n      },\n      ...\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "get",
    "url": "/product/product",
    "title": "getProductListByName",
    "name": "getProductListByName",
    "description": "<p>通过关键词搜索产品</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProductListByName</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>搜索关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页码，默认为0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>一页多少个产品，默认为10</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n        productList: [\n          {\n            id:1,//产品id\n            name: \"产品1\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\",\n            normalPrice: 10.5,\n            vipPrice: 5.5\n          },\n          {\n            id:2,//产品id\n            name: \"产品2\",//产品名称\n            imgSrc: \"https://staticDomain.com/image/aaa.jpg\",\n            normalPrice: 10.5,\n            vipPrice: 5.5\n          },\n          ...\n        ],\n        totalPdSize: 100//该分类下有多少个产品\n      },\n      ...\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "post",
    "url": "/product/productCollection",
    "title": "setProductCollect",
    "name": "setProductCollect",
    "description": "<p>收藏产品</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setProductCollect</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"收藏成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "post",
    "url": "/product/productCollection",
    "title": "setProductCollectCancel",
    "name": "setProductCollectCancel",
    "description": "<p>取消对该产品的收藏</p>",
    "group": "产品",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setProductCollectCancel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyId",
            "description": "<p>企业id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"取消成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/product.js",
    "groupTitle": "产品"
  },
  {
    "type": "post",
    "url": "/company/company",
    "title": "createCompany",
    "name": "createCompany",
    "group": "企业",
    "description": "<p>创建企业</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>createCompany</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerTel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1,2",
            "optional": false,
            "field": "companyTypeID",
            "description": "<p>商铺名称(1：品牌直销。2：综合批发)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>&quot;{&quot;provinceCode&quot;:1,&quot;cityCode&quot;:2,&quot;countryCode&quot;:3}&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"创建成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/company",
    "title": "getCompanyAIndexPageData",
    "name": "getCompanyAIndexPageData",
    "group": "企业",
    "description": "<p>获取一级商家的企业首页数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCompanyAIndexPageData</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"获取成功\",\n  data: {\n    pageData: {\n      carouselList: [\n        {\n          imgSrc: \"https://staticDomain.com/image/aaaa.jpg\"\n        },\n        ...\n      ],\n      companyInfo: {\n        id: 1,//企业id\n        phone: \"13690000000\",//企业联系电话\n        aboutMe: \"富文本内容\",//【关于我们】的富文本内容介绍\n        name:\"企业名称\",\n        addrInfo:{\n          provinceName: \"广东省\",\n          cityName: \"佛山市\",\n          coutryName: \"南海区\",\n          address:\"广东省佛山市南海区xxx镇工业区aaa\",\n        },\n        position: {//企业经纬度\n          latitude: 20.000000 \n          longitude: 20.000000\n        },\n        themeColor: \"rgba(255,255,255, 0)\"//尝试用这种格式转给我，实在不行的话才给16进制，因为给我16进制，我也需要在客户端转成rgba格式\n      },\n      productGroupList: {\n        {\n          id: 11,//分类id\n          groupName: \"分类名称\",\n          productList: [\n            {\n              id: 111,//产品id\n              name: \"产品名称\",\n              normalPrice: 10.5,//普通价格\n              vipPrice: 5.5,//vip价格\n            }\n          ]\n        }\n      },\n\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/company",
    "title": "getCompanyBIndexPageData",
    "name": "getCompanyBIndexPageData",
    "group": "企业",
    "description": "<p>获取二级商家的企业首页数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCompanyBIndexPageData</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>企业id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"获取成功\",\n  data: {\n    pageData: {\n      carouselList: [\n        {\n          imgSrc: \"https://staticDomain.com/image/aaaa.jpg\"\n        },\n        ...\n      ],\n      companyInfo: {\n        id: 1,//企业id\n        phone: \"13690000000\",//企业联系电话\n        aboutMe: \"富文本内容\",//【关于我们】的富文本内容介绍\n        name:\"企业名称\",\n        addrInfo:{\n          provinceName: \"广东省\",\n          cityName: \"佛山市\",\n          coutryName: \"南海区\",\n          address:\"广东省佛山市南海区xxx镇工业区aaa\",\n        },\n        position: {//企业经纬度\n          latitude: 20.000000 \n          longitude: 20.000000\n        },\n        themeColor: \"rgba(255,255,255, 0)\"//尝试用这种格式转给我，实在不行的话才给16进制，因为给我16进制，我也需要在客户端转成rgba格式\n      },\n      productGroupList: {\n        {\n          id: 11,//分类id\n          groupName: \"分类名称\",\n          productList: [\n            {\n              id: 111,//产品id\n              name: \"产品名称\",\n              normalPrice: 10.5,//普通价格\n              vipPrice: 5.5,//vip价格\n            }\n          ]\n        }\n      },\n\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/companyCollect",
    "title": "getCompanyCollectionList",
    "name": "getCompanyCollectionList",
    "description": "<p>获取收藏的企业列表，一页6条</p>",
    "group": "企业",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCompanyCollectionList</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页加载多少个(默认6个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    companyList: [\n      {\n        id:111,\n        name:\"店铺名称\",\n        imgSrc:\"https://staticDomain.com/image/aaa.jpg\",\n      },\n      ...\n    ],\n    totalSize: 100//总共收藏了多少企业\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/companyInfo",
    "title": "getInfo4CompanyA",
    "name": "getInfo4CompanyA",
    "description": "<p>获取一级商家的信息</p>",
    "group": "企业",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getInfo4CompanyA</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商家id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    id:111,\n    name:\"名称\",\n    //...其他字段\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/companyInfo",
    "title": "getInfo4CompanyB",
    "name": "getInfo4CompanyB",
    "description": "<p>获取二级商家的信息</p>",
    "group": "企业",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getInfo4CompanyB</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商家id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    id:111,\n    name:\"名称\",\n    //...其他字段\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/company/company",
    "title": "getRecentCompanyList",
    "name": "getRecentCompanyList",
    "group": "企业",
    "description": "<p>获取附近的企业</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getRecentCompanyList</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>设备当前所在位置-经度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>设备当前所在位置-纬度</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"获取成功\",\n  data: {\n    companyList: [\n      {\n        id: 1,\n        name: \"company name\",\n        imgSrc: \"https://staticDomain.com/image/aaaa.jpg\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/company/companyCollect",
    "title": "setCompanyCollect",
    "name": "setCompanyCollect",
    "description": "<p>收藏企业</p>",
    "group": "企业",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setCompanyCollect</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>店铺id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"收藏成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "post",
    "url": "/company/companyCollect",
    "title": "setCompanyCollectCancel",
    "name": "setCompanyCollectCancel",
    "description": "<p>取消对该企业的收藏</p>",
    "group": "企业",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setCompanyCollectCancel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>店铺id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"取消成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/company.js",
    "groupTitle": "企业"
  },
  {
    "type": "get",
    "url": "/common/getCommData",
    "title": "getCityList",
    "name": "getCityList",
    "description": "<p>获取城市列表</p>",
    "group": "公共接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCityList</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "provinceCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    cityList: [\n        {\n            id:1,\n            name: \"佛山市\"\n        },\n        ...\n    ]\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/common.js",
    "groupTitle": "公共接口"
  },
  {
    "type": "get",
    "url": "/common/getCommData",
    "title": "getCountryList",
    "name": "getCountryList",
    "description": "<p>获取区域列表</p>",
    "group": "公共接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCountryList</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cityCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    countryList: [\n        {\n            id:1,\n            name: \"南海区\"\n        },\n        ...\n    ]\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/common.js",
    "groupTitle": "公共接口"
  },
  {
    "type": "get",
    "url": "/common/getCommData",
    "title": "getGlobalData",
    "name": "getGlobalData",
    "description": "<p>获取全局数据，后续可以在这边迭代</p>",
    "group": "公共接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getGlobalData</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    sysPhone: 15800000000\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/common.js",
    "groupTitle": "公共接口"
  },
  {
    "type": "get",
    "url": "/common/getCommData",
    "title": "getProvinceList",
    "name": "getProvinceList",
    "description": "<p>获取省份列表</p>",
    "group": "公共接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getProvinceList</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    provinceList: [\n        {\n            id:1,\n            name: \"广东省\"\n        },\n        ...\n    ]\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/common.js",
    "groupTitle": "公共接口"
  },
  {
    "type": "get",
    "url": "/common/getCommData",
    "title": "getQrCode",
    "name": "getQrCode",
    "description": "<p>获取小程序内部路径对应的小程序码</p>",
    "group": "公共接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getQrCode</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/jpeg</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>bytes</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "myapp/common.js",
    "groupTitle": "公共接口"
  },
  {
    "type": "get",
    "url": "/user/userCollection",
    "title": "getCollectionList",
    "name": "getCollectionList",
    "description": "<p>获取收藏的名片列表，一页6条</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getCollectionList</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页加载多少个(默认6个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    companyList: [\n      {\n        id:111,\n        name:\"名片名称\",\n        imgSrc:\"https://staticDomain.com/image/aaa.jpg\",\n        companyId:666,//如果是员工，输出所属企业的信息\n\n      },\n      ...\n    ],\n    totalSize: 100//总共收藏了多少名片\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "get",
    "url": "/user/userInfo",
    "title": "getInfo4Staff",
    "name": "getInfo4Staff",
    "description": "<p>获取员工信息</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getInfo4Staff</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>员工id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyId",
            "description": "<p>企业id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    id:111,\n    name:\"名称\",\n    //...其他字段\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "get",
    "url": "/user/userCollection",
    "title": "getUserCollectInfo",
    "name": "getUserCollectInfo",
    "description": "<p>获取个人名片信息</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getUserCollectInfo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    userInfo: {\n      id:111,//用户id\n      name:\"用户名称\",\n      imgSrc:\"https://staticDomain.com/image/aaa.jpg\",//用户头像\n      phone:\"13690000000\",//用户手机号\n      wechatAcct:\"jser\",//用户微信号\n      addrInfo:{\n        provinceName:\"广东省\",\n        cityName:\"广州市\",\n        countryName:\"天河区\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "post",
    "url": "/user/userCollection",
    "title": "setUserCollect",
    "name": "setUserCollect",
    "description": "<p>收藏名片</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setUserCollect</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>名片id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"收藏成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "post",
    "url": "/user/userCollection",
    "title": "setUserCollectCancel",
    "name": "setUserCollectCancel",
    "description": "<p>取消对该名片的收藏</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setUserCollectCancel</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>名片id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"取消成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "post",
    "url": "/user/userCollection",
    "title": "setUserCollectCancel4Staff",
    "name": "setUserCollectCancel4Staff",
    "description": "<p>取消对该员工名片的收藏</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setUserCollectCancel4Staff</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>名片id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staffId",
            "description": "<p>员工id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"取消成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "post",
    "url": "/user/userCollection",
    "title": "setUserCollectInfo",
    "name": "setUserCollectInfo",
    "description": "<p>个人名片设置</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setUserCollectInfo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "blob",
            "optional": false,
            "field": "headImg",
            "description": "<p>头像（图片数据，修改图片时会带上这个字段）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addrInfo",
            "description": "<p>所在地区，上传参数为地区代码 eg:&quot;{&quot;provinceCode&quot;:1,&quot;cityCode&quot;:2,&quot;countryCode&quot;:3}&quot;（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wecharAcct",
            "description": "<p>微信号（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qqAcct",
            "description": "<p>qq号（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱（可选）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>简要描述（可选）</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"设置个人资料成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "post",
    "url": "/user/userCollection",
    "title": "setUserCollect4Staff",
    "name": "setUserCollectStaff",
    "description": "<p>收藏员工名片</p>",
    "group": "名片",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>setUserCollect4Staff</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>名片id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "staffId",
            "description": "<p>员工id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"收藏成功\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/userCollection.js",
    "groupTitle": "名片"
  },
  {
    "type": "get",
    "url": "/articel/article",
    "title": "getArticle",
    "name": "getArticle",
    "description": "<p>获取文章详情页的数据</p>",
    "group": "文章",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getArticle</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    id:111,\n    title:\"文章标题\",\n    description:\"文章描述\",\n    imgSrc:\"https://staticDomain.com/image/aaa.jpg\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/article.js",
    "groupTitle": "文章"
  },
  {
    "type": "get",
    "url": "/articel/article",
    "title": "getArticleList",
    "name": "getArticleList",
    "description": "<p>获取文章列表的数据，需要分页，一页加载十个</p>",
    "group": "文章",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>getArticleList</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNo",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页加载多少个(默认10个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"请求成功\",\n  \"data\": {\n    articleList:[\n      {\n        id:111,\n        title:\"文章标题\",\n        description:\"文章描述\",\n        imgSrc:\"https://staticDomain.com/image/aaa.jpg\",\n      },\n      ...\n    ],\n    totalSize:100//文章总数\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/article.js",
    "groupTitle": "文章"
  },
  {
    "type": "get",
    "url": "/logAction/action",
    "title": "getMemberInfo",
    "name": "getMemberInfo",
    "group": "登录注册",
    "description": "<p>获取平台会员信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"获取成功\",\n  \"data\":{\n    memberInfo: {\n      id:11,//会员id\n      name:\"名称\",\n      wxAcct: \"微信号\",\n      companyId:111,//所属企业id\n      staffId:666,//所属企业员工id\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/login.js",
    "groupTitle": "登录注册"
  },
  {
    "type": "get",
    "url": "/logAction/action",
    "title": "login",
    "name": "login",
    "group": "登录注册",
    "description": "<p>进行微信登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信小程序内部获取到的jscode码，去微信服务器查询openId,unionId,session_key，然后进行登录校验，详见https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/login.js",
    "groupTitle": "登录注册"
  },
  {
    "type": "get",
    "url": "/logAction/action",
    "title": "memberUpToVipA",
    "name": "memberUpToVipA",
    "group": "登录注册",
    "description": "<p>平台会员升级成某个一级商家vip会员</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>memberUpToVipA</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "companyAId",
            "description": "<p>一级商家的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"升级成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/login.js",
    "groupTitle": "登录注册"
  },
  {
    "type": "get",
    "url": "/logAction/action",
    "title": "reg",
    "name": "reg",
    "group": "登录注册",
    "description": "<p>进行微信注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>reg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信小程序内部获取到的jscode码，去微信服务器查询openId,unionId,session_key，然后进行注册校验，详见https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/login.js",
    "groupTitle": "登录注册"
  },
  {
    "type": "post",
    "url": "/apply/applyForm",
    "title": "applyAdvise",
    "name": "applyAdvise",
    "description": "<p>提交【投诉建议】的表单数据</p>",
    "group": "表单提交",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>applyAdvise</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerTel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leaveMessage",
            "description": "<p>投诉建议</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"我们已收到您的建议/投诉，稍后将回复您\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/applyForm.js",
    "groupTitle": "表单提交"
  },
  {
    "type": "post",
    "url": "/apply/applyForm",
    "title": "applyBuy",
    "name": "applyBuy",
    "group": "表单提交",
    "description": "<p>提交【我要购买】的表单数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>applyBuy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerTel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leaveMessage",
            "description": "<p>需求说明</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"提交成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/applyForm.js",
    "groupTitle": "表单提交"
  },
  {
    "type": "post",
    "url": "/apply/applyForm",
    "title": "applyRepair",
    "name": "applyRepair",
    "description": "<p>提交【我要维修】的表单数据</p>",
    "group": "表单提交",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>applyRepair</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerTel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leaveMessage",
            "description": "<p>维修内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"提交成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/applyForm.js",
    "groupTitle": "表单提交"
  },
  {
    "type": "post",
    "url": "/apply/applyForm",
    "title": "applyService",
    "name": "applyService",
    "description": "<p>提交【咨询客服】的表单数据</p>",
    "group": "表单提交",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>applyService</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>维修内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功与否</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rt",
            "description": "<p>服务器内部错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"rt\": 0,\n  \"success\": true,\n  \"msg\": \"我们已收到您的咨询\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/applyForm.js",
    "groupTitle": "表单提交"
  }
] });
