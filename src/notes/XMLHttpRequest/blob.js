/* eslint-disable */
// HTML代码：
// <div id="forAppend" class="demo"></div>
// JS代码：
var eleAppend = document.getElementById("forAppend");
window.URL = window.URL || window.webkitURL;
if (typeof history.pushState == "function") {
    var xhr = new XMLHttpRequest();    
    xhr.open("get", "/image/study/s/s256/mm1.jpg", true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        if (this.status == 200) {
            var blob = this.response;
            var img = document.createElement("img");
            img.onload = function(e) {
              window.URL.revokeObjectURL(img.src); // 清除释放
            };
            img.src = window.URL.createObjectURL(blob);
            eleAppend.appendChild(img);    
        }
    }
    xhr.send();
} else {
    eleAppend.innerHTML = '<p style="color:#cd0000;">浏览器不给力，还是早点回去给孩子喂奶吧~</p>';    
}