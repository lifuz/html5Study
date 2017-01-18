/**
 * 作者：李富
 * 邮箱：lifuzz@163.com
 * 时间：2017/1/18 15:49
 */
function changeDiv() {

    var tabs = document.getElementById("tabs");
    var lis = document.getElementsByTagName("li");
    var divs = tabs.getElementsByTagName("div");

    for(var i = 0;i < lis.length;i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var n = 0 ; n < divs.length; n ++) {
                lis[n].className = "";
                divs[n].className = "hide";
            }

            this.className = "on";
            divs[this.index].className = "";
        }
    }

}

