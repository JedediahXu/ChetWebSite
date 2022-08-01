// 文章的处理函数模块
const path = require('path')
const db = require('../db/index')

// 发布文章的处理函数
exports.addArticle = (req, res) => {
  if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数！')

  // TODO：证明数据都是合法的，可以进行后续业务逻辑的处理
  // 处理文章的信息对象
  const articleInfo = {
    // 标题、内容、发布状态、所属分类的Id
    ...req.body,
    // 文章封面的存放路径
    cover_img: path.join('/uploads', req.file.filename),
    // 文章的发布时间
    pub_date: new Date(),
    // 文章作者的Id
    author_id: req.user.username,
  }
  res.cc(articleInfo)
  const sql = `insert into ev_articles set ?`
  db.query(sql, articleInfo, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('发布新文章失败！')
    res.cc('发布文章成功！', 0)
  })
}


// 查找文章的处理函数
exports.queryArticle = (req, res) => {
  const sql = `select * from ev_articles`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      status: 0,
      message: '获取文章数据成功！',
      data: results,
    })
  })
}


// 分类id查找文章
exports.queryIdArticle = (req, res) => {
  const sql = `select * from ev_articles  where cate_id=?`
  db.query(sql, req.params.id, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      status: 0,
      message: '分类获取文章数据成功！',
      data: results,
    })
  })
}


//queryPagination 分页查找文章
exports.queryPagination = (req, res) => {
  const page_num = 1 //当前的num req.query.page_num 
  const page_size = 10  //当前页的数量 req.query.page_size
  const params = [(parseInt(page_num) - 1) * parseInt(page_size), parseInt(page_size)]
  var sql = "select * from ev_articles limit ?,?"

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log('err', err.message)
      res.json({
        code: 1,
        message: '查询失败'
      })
    } else {
      let sqlTotal = 'select count(*) as id from ev_articles'
      db.query(sqlTotal, function (error, among) {
        if (error) {
          console.log(error);
        } else {
          let total = among[0]['id'] //查询表中的数量
          res.json({
            result: 1,
            status: 200,
            message: "success",
            data: result,
            paging: {
              page_num: page_num,
              page_size: page_size,
              total: total
            }
          })
        }
      })
    }
  })
}
