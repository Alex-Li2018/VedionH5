
$(function(){

    var vedioFN = {

        //鼠标移入或则全屏的时候隐藏视频的控制栏
        vedioControlStatus(){
            $('.video-box').on('mouseenter',function(){
                $('#videoControl').show();
            });
            $('.video-box').on('mouseleave',function(){
                $('#videoControl').hide();
            });
        },

        //播放与暂停功能
        playPause(){
            $('#playPausebtn').on('click',()=>{
                playPause();
            });
            //播放暂停功能函数
            function playPause() {
                if($('#videoBody')[0].paused) {
                    //改变播放图标与暂停图标
                    $('#playPausebtn').removeClass('fa-play').addClass('fa-pause');
                    //开始播放视频
                    $('#videoBody')[0].play();  
                }else {
                    //改变播放图标与暂停图标
                    $('#playPausebtn').removeClass('fa-pause').addClass('fa-play');
                    //暂停视频
                    $('#videoBody')[0].pause();
                }
            }
        },

        //刷新视频功能
        refresh(){
            $('#loadBtn').on('click',()=>{
                //刷新视频
                $('#videoBody')[0].load();
                //将进度条,缓存条全部归零
                $('#currentBar').css({width : 0+'px'});
                $('#drawBar').css({left : 0+'px'});
                //刷新之后,图标改变为播放图标
                $('#playPausebtn').removeClass('fa-pause').addClass('fa-play');
            });
        },
        
        //全屏显示功能
        fullScreen(){
            // 全屏按钮点击事件，这里兼容不是很全，有兴趣深入的朋友可以自己百度查查
            $('#fullScreenBar').on('click',function(){
                //能力检测的时候不要加括号
                if($('#videoBody')[0].webkitEnterFullScreen){

                    $('#videoBody')[0].webkitRequestFullScreen();
                }else if ($('#videoBody')[0].mozRequestFullScreen ){

                    $('#videoBody')[0].mozRequestFullScreen();
                }else{

                    $('#videoBody')[0].msRequestFullscreen();
                }
            });
        },

        //显示视频时间以及播放时进度条的显示功能
        playTime(){
            //loadedmetadata是视频加载完成后才执行 总时长功能
            $('#videoBody').on('loadedmetadata',function(){
                //显示总的播放时长
                $('#durationTime').text(initTimeLength($('#videoBody')[0].duration));
            });
            // ontimeupdate 当前视频播放位置反生改变触发的事件 当前进度时长
            $('#videoBody').on('timeupdate',function(){
                //获取视频的总时长
                let durationTime = $('#videoBody')[0].duration;
                //获取当前播放的时间
                let vedioCurrentTime = $('#videoBody')[0].currentTime;  
                //显示当前的播放时间
                $('#currentTime').text(initTimeLength(vedioCurrentTime));
                // 求当前播放时长的进度，从而显示出来进度条
                let currentWidth = 100 * (vedioCurrentTime / durationTime); //计算当前时间占总时长的多少
                // console.log(vedioCurrentTime,durationTime,currentWidth); 测试
                //计算播放进度条前面那个白色点应该在的位置
                let currentLeft = currentWidth - ( ($('#drawBar').width()/2) / $('#durationBar').width() * 100); 
                //进度条前面的drawBar的处理
                currentLeft = (currentLeft >= 0) ? currentLeft : 0;
                //利用动画移动进度条
                $('#currentBar').css({width : currentWidth+'%'});
                $('#drawBar').css({left : currentLeft+'%'});
            });
            //获取视频时长的函数
            function initTimeLength(vedioTime) {
                //将字符串转换为num类型整数类型
                vedioTime = parseInt(vedioTime);
                //获取分秒
                let sec = vedioTime % 60;
                let min = (vedioTime - sec) / 60;
                //返回的格式是: 12:02 / 01:10
                return (min<10?'0'+min:min)+':'+(sec<10?'0'+sec:sec);
            }
        },

        //缓存进度条的实现
        buffer(){
            //当播放时长发生改变的时候就要显示缓冲进度条
            $('#videoBody').on('progress',function(){
                buffer();
            });
            //缓存进度条的实现
            function buffer(){
                //视频时长
                let maxduration = $('#videoBody')[0].duration;
                //当前缓冲进度时长结束位置
                let currentBuffer = $('#videoBody')[0].buffered.end(0); 
                // 求取百分比
                let percentage = 100 * currentBuffer / maxduration;

                $('#bufferBar').animate({'width': percentage+'%'},'fast');
                // 在范围内每500毫秒进行一次递归，也就是调用一下自己;
                if(currentBuffer<maxduration){
                    setTimeout(buffer,500);
                }
            }
        },

        // 音量键的开启关闭
        muted(){
            //显示音量控制键
            $('#mutedBtn').on('click',function(){
                //点击音量之后,显示音量控制界面
                if($('#range').css('display') == 'none') {
                    $('#range').show();
                }else {
                    $('#range').hide();
                }
            });
            //当滑动音量键的时候,改变视频的音量
            $('#range').on('change',function(){
                $('#videoBody')[0].volume = $('#range')[0].value / 100;
                console.log($('#range')[0].value / 100);
            });
        }
    } 

    //调用方法控制视频控件的显示
    //vedioFN.vedioControlStatus();
    //调用暂停播放方法
    vedioFN.playPause();
    //调用方法刷新视频
    vedioFN.refresh();
    //调用方法全屏显示
    vedioFN.fullScreen();
    //调用方法显示视频时间以及播放时进度条
    vedioFN.playTime();
    //调用方法显示缓存进度条
    //vedioFN.buffer();
    //调用方法开启关闭音乐
    vedioFN.muted();
})

























