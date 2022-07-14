
const express = require('express')

const apiRoute = express.Router();

apiRoute.get('/historyTime', (req, res) => {
  // 获取到客户端通过查询字符串，发送到服务器的数据
  res.send({
    code: 200,
    message: "请求成功！",
    result: [{
      title: '最古老的事',
      time: '2022-06-25',
      img: 'https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjIzNjEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
      content: '一个人最怕不老实，青年人最可贵的是老实作风。"老实"就是不自欺欺人，做到不欺骗人家容易，不欺骗自己最难。"老实作风"就是脚踏实地，不占便宜。世界上没有便宜的事，谁想占便宜水就会吃亏。如果你问一个善于溜冰的人怎样获得成功时，他会告诉你：“跌倒了，爬起来”，这就是成功。',
      language: '中文',
      type: 'JavaScript'
    },
    {
      title: 'honest',
      time: '2022-06-24',
      img: 'https://i.picsum.photos/id/633/1600/900.jpg?hmac=gwN7sKvA9s1dPEWKVqXVIfMsicxaIqRh-S302_IsWIk',
      content: 'Be honest with yourself Be honest with yourself Be honest with yourself',
      language: 'English',
      type: 'Vue'
    }, {
      title: 'Chinese',
      time: '2022-06-24',
      img: '../../../public/static/img/Header.jpg',
      content: '"Yes, Chinese people do like growing flowers but since (or,but because) many people live in apartments in cities it’s not easy to grow flowers although people who have a balcony, especially retired people, sometimes grow flowers on their balcony."Be honest with yourself',
      language: 'English',
      type: '抒情'
    },
    {
      title: '测试文章三',
      time: '2022-06-24',
      img: 'https://static.likepoems.com/2020/09/19/a2d8121df1a8bc1c3a250ef8fbd11506c.jpg',
      content: '"Well, not really, no, because although (or,even though or,despite the fact that) the apartments are all modern and clean, there are very few places for children to play outside."',
      language: 'English',
      type: '记载'
    },
    {
      title: '测试文章三',
      time: '2022-06-24',
      img: 'https://i.picsum.photos/id/67/1600/900.jpg?hmac=1YLazb8E-NlROlXOdKruZjjIySkxZrwQk2MqrJdW-kM',

      content: 'Three years ago, my father gave me some good advice, which was very useful because it saved me from making a very unsuitable career choice."',
      language: 'English',
      type: '随笔'
    }]
  })
})


apiRoute.post('/post', (req, res) => {
  // 通过req.body 获取请求体中包含的url-encoded格式数据
  const body = req.body;

  //调用send方法 把数据响应给客户端
  res.send({
    status: 0, //状态， 0 成功  1失败
    msg: 'POST请求成功！', //状态描述
    data: body //响应给客户端具体数据
  })
})

module.exports = apiRoute
