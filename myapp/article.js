/**
 * @api {get} /articel/article getArticleList
 * @apiName getArticleList
 * @apiDescription 获取文章列表的数据，需要分页，一页加载十个
 * @apiGroup 文章
 *
 * @apiParam {String} cmd getArticleList
 * @apiParam {String} pageNo 页数
 * @apiParam {String} pageSize 每页加载多少个(默认10个)
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
          articleList:[
            {
              id:111,
              title:"文章标题",
              description:"文章描述",
              imgSrc:"https://staticDomain.com/image/aaa.jpg",
            },
            ...
          ],
          totalSize:100//文章总数
        },
      }
 */

 /**
 * @api {get} /articel/article getArticle
 * @apiName getArticle
 * @apiDescription 获取文章详情页的数据
 * @apiGroup 文章
 *
 * @apiParam {String} cmd getArticle
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
 *         title:"文章标题",
 *         description:"文章描述",
 *         imgSrc:"https://staticDomain.com/image/aaa.jpg",
 *       }
 *     }
 */