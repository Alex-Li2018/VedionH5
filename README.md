

# README

## 这是一个视频播放器,现在完善的功能如下(version1.0.0):



### 1. 暂停/播放功能
### 2. 全屏功能(浏览器优化)
### 3. 显示视频总时长以及播放进度时间
### 4. 动态显示播放时长进度条
### 5. 动态显示视频缓存进度条
### 6. 显示音乐控件

----------

# 注意事项:

## 1. 整个项目是搭建在nodeJS服务器上的,所以打开的时候用node app.js 命令打开

## 2. vedio元素只能由原生的元素来调用事件
### 比如 
### document.getElementById('vedio').ontimeupdate 
### 但是如果你用jquery来获取必须转成原生DOM来操作事件$('#videoBody')[0].msRequestFullscreen();

------------
