
//1. 引入express组件
const express = require('express');
const path = require('path');
//创建路由对象
const indexRouter = express.Router();


//2. 处理请求并响应
indexRouter.get('/index.html',(req,res)=>{
    //读取数据返回给浏览器
    res.sendFile(path.join(__dirname,'../static/html/index.html'));
});

//3. 导出模块
module.exports = indexRouter;