
//1. 引入express组件
const express = require('express');
const path = require('path');
const app = express();

//2. 使用express的静态资源处理
app.use(express.static(path.join(__dirname,"static")));


//3. 集成处理请求的组件
const indexRouter = require(path.join(__dirname,'./router/indexRouter'));
//使用路由模块
app.use('/',indexRouter);


//4. 开启服务
app.listen(5000,"127.0.0.1",err => {
    if(err) {
        console.log(err);
    }else {
        console.log('web start!!!');
    }
})