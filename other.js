(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        return;
      } else {
        if (clientWidth > 750) clientWidth = 750;
        docEl.style.fontSize = clientWidth / 7.5 + "px"; // 设计稿设计宽度计算 加入640px 则 640/100=6.4 然后设计稿中的css标注都除以100来用rem height:210px= heigth:2.1rem
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);

  // 添加统计
  console.log("other js");
  var url = window.location.href.split("?")[1];
  if (url.indexOf("&") !== -1) {
    var channel = url.split("&").filter(function (el) {
      let arr = el.split("=");
      if (arr[0] == "channel") {
        return arr[1];
      }
    });
  } else {
    var channel = [url.split("=")[1]];
  }

  console.log(channel[0]);

  var script = document.createElement("script");
  script.src =
    "https://storebase.hnyiye.com/Register/channelStatistics?puser=" +
    channel[0].split("=")[1];
  document.body.appendChild(script);
})(document, window);
