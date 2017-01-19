/**
 * 作者：李富
 * 邮箱：lifuzz@163.com
 * 时间：2017/1/19 11:04
 */

function showMsg(name,event) {

    alert("hello " + name);

    event.stopPropagation();
}

function showMsg2() {
    alert("hello Js");
}

function showBox() {
    alert("this is box");
}

function stopGoTo(event) {
    event.stopPropagation();
    event.preventDefault();
    showMsg2();
}

var btn2 = document.getElementById("btn2");

btn2.onclick = function () {
    showMsg('dom0级');
};

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    showMsg('DOM2级');
}, false);

var btn4 = document.getElementById("btn4");
//    btn4.attachEvent("onclick",function () {
//        showMsg("IE")
//    });



var btn5 = document.getElementById("btn5");

//    eventUtil.addHandler(btn5,"click",showMsg2);
//    eventUtil.removeHandler(btn5,"click",showMsg2);
eventUtil.addHandler(btn5, "click", function (event) {
    console.log(event)
    showMsg("跨浏览器 事件程序处理",event);
});



var box = document.getElementById("box");
eventUtil.addHandler(box,"click",showBox);

var go = document.getElementById("go");

eventUtil.addHandler(go,"click",stopGoTo);