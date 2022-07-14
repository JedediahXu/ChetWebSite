const express = require('express');
const apiRoute = require('./apiRouter')

const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({
  extended: false
}));

//在路由之前，进行配资cors中间件，进行解决跨域的问题
/* 
1、按照 npm install cors
2、使用 const cors = require('cors')导入
3、在路由之前进行注册使用 app.use(cors())
*/
const cors = require('cors')
app.use(cors())

app.use('/api', apiRoute)

app.listen('2022', (req, res) => {
  console.log('server running at  http://127.0.0.1:2023');
})
