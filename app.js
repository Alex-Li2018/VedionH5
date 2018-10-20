
//引入http组件
const http = require('http');
//引入path组件
const path = require('path');
//引入url组件
const url = require('url');
//引入fs组件
const fs = require('fs');


//开启web服务
http.createServer((req,res)=>{
    //判断过来的路径是否是index.html
    if(req.url.includes('index.html')) {
        //读取首页的页面返回给浏览器
        var indexPath = path.join(__dirname,'static/html/index.html');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
            }
        });    
    }else if(req.url.includes('font-awesome.min.css')) {
        //读取字体图标的样式返回给浏览器
        var indexPath = path.join(__dirname,'static/css/fontAwesome/css/font-awesome.min.css');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'text/css; charset=utf-8');
                res.end(data);
            }
        });   
    }else if(req.url.includes('index.css')) {
        //读取字体index的样式返回给浏览器
        var indexPath = path.join(__dirname,'static/css/index.css');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'text/css; charset=utf-8');
                res.end(data);
            }
        });   
    }else if(req.url.includes('jquery.min.js')) {
        //读取jquery的代码返回给浏览器
        var indexPath = path.join(__dirname,'static/jquery/jquery.min.js');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
                res.end(data);
            }
        });   
    }else if(req.url.includes('index.js')) {
        //读取index.js的代码返回给浏览器
        var indexPath = path.join(__dirname,'static/JS/index.js');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
                res.end(data);
            }
        });   
    }else if(req.url.includes('movie01.mp4')) {
        //读取jquery的代码返回给浏览器
        var indexPath = path.join(__dirname,'static/video/movie01.mp4');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'vedio/mp4; charset=utf-8');
                res.end(data);
            }
        });   
    }else if(req.url.includes('fonts/fontawesome-webfont.woff2?v=4.5.0')){
        //读取jquery的代码返回给浏览器
        var indexPath = path.join(__dirname,'static/css/fontAwesome/fonts/fontawesome-webfont.woff');
        fs.readFile(indexPath,(err,data)=>{
            if(err) {
                console.log(err);
            }else {
                res.setHeader('Content-Type', 'vedio/mp4; charset=utf-8');
                res.end(data);
            }
        });   
    }else {
        res.end("");
    } 
}).listen(3700,'127.0.0.1',err=>{
    if(err) {
        console.log(err);
    }else {
        console.log('web server start!');
    }
});