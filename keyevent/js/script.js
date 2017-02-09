/**
 * 作者：李富
 * 邮箱：lifuzz@163.com
 * 时间：2017/2/9 10:18
 */
var data = ['Phone7',"Ipad pro","小米5s","华为Meta8",'谢谢参与','50积分','1000积分'],
    timer = null,
    title = document.getElementById("title"),
    play = document.getElementById("play"),
    stop = document.getElementById("stop");

window.onload = function () {


    //开始抽奖
    play.onclick = playFun;
    stop.onclick = stopFun;

    var flag = true;

    document.onkeyup = function (event) {

        // console.log(event.keyCode);

        event = event|| window.event;

        if(event.keyCode == 13) {
            if(flag) {
                playFun();
                flag = false;
            } else {
                stopFun();
                flag = true;
            }
        }
    }
}

function stopFun() {
    clearInterval(timer);
    play.style.background = '#036';
}

function playFun() {

    clearInterval(timer);
    timer = setInterval(function () {
        var random  = Math.floor(Math.random() * data.length);
        // console.log(random);
        title.innerHTML = data[random];
    },50)

    play.style.background = '#999';
}