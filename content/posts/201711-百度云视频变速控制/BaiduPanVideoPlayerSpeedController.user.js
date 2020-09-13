// ==UserScript==
// @name         BaiduPanVideoPlayerSpeedController
// @namespace    https://lizhimiao.com/
// @version      0.1
// @description  百度网盘视频播放变速工具
// @author       lizhimiao
// @include          *://pan.baidu.com/play/*
// @grant        none
// ==/UserScript==

var currentRate;
var saveSpeed = Number(localStorage.getItem("playBackSpeed"));


/* 减速部分 */
    $(".video-toolbar-buttonbox").append(`<a class="g-button speedReduce" data-button-id="b1" data-button-index="1" href="">
<span class="g-button-right"><span class="text" style="width: auto;">减速+0.1</span></span></a>`);
    $(".speedReduce").click(function(e){
        e.preventDefault();
        currentRate = videojs.players.html5player.playbackRate();
        if (currentRate !== undefined){
          videojs.players.html5player.playbackRate(currentRate - 0.1);
          updateSpeed();
          console.log("currentRate:"+currentRate);
        }});

/* 显示当前速度 */
    $(".video-toolbar-buttonbox").append(`<span class="g-button setSpeed" data-button-id="b1" data-button-index="1" >
<span class="g-button-right"><span class="text" style="width: auto;">当前速度</span><span class="currentSpeed" style="width: auto;"></span></span></span>`);



/* 加速部分 */
    $(".video-toolbar-buttonbox").append(`<a class="g-button speedup" data-button-id="b1" data-button-index="1" href="">
<span class="g-button-right"><span class="text" style="width: auto;">加速+0.1</span></span></a>`);
    $(".speedup").click(function(e){
        e.preventDefault();
        currentRate = videojs.players.html5player.playbackRate();
        if (currentRate !== undefined){
          videojs.players.html5player.playbackRate(currentRate + 0.1);
          updateSpeed();
          console.log("currentRate:"+currentRate);
        }});

/* 更新速度 */
function updateSpeed() {
    currentRate = videojs.players.html5player.playbackRate();
    localStorage.setItem("playBackSpeed",currentRate);
    if(currentRate !== undefined){
        $(".currentSpeed").html(String(currentRate).substr(0,3));
    } else {
        $(".currentSpeed").html(1);
    }
}

/* 载入上次速度 */
 $(".speedReduce").click(function(e){
 saveSpeed = Number(localStorage.getItem("playBackSpeed"));
 videojs.players.html5player.playbackRate(saveSpeed);
 });
