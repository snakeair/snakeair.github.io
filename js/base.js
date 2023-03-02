function phoneFn(val) {
  const reg = /^1[3456789]\d{9}$/g;
  return reg.test(val);
}

function errorFn(t) {
  $(".layer-msg .text").text(t);
  $(".layer-msg")
    .stop()
    .show(300, function () {
      setTimeout(function () {
        $(".layer-msg").hide(300);
      }, 2000);
    });
}

$(function () {
  FastClick.attach(document.body);
});

// 登陆注册相关js
$(function () {
  $(
    ".close-btn, .common-layer .close, .layer-login .reg-btn, .layer-reg .log-btn"
  ).on("click", function () {
    $(this).parents(".common-layer").hide().find("input").val("");
  });

  // 登陆注册弹窗切换
  $(".common-layer .reg-btn").on("click", function () {
    $(this).parents(".common-layer").hide();
    $(".layer-reg").show();
  });
  $(".common-layer .log-btn").on("click", function () {
    $(".layer-login").show();
    $(this).parents(".common-layer").hide();
  });

  $(".layer-login .reg-box .left").on("click", function () {
    $(".layer-login").hide();
    $(".layer-wx-login").show();
  });
  $(".layer-reg .reg-box .left").on("click", function () {
    $(".layer-reg").hide();
    $(".layer-wx-reg").show();
  });

  $(".layer-wx-login .reg-box .left").on("click", function () {
    $(".layer-wx-login").hide();
    $(".layer-login").show();
  });
  $(".layer-wx-reg .reg-box .left").on("click", function () {
    $(".layer-wx-reg").hide();
    $(".layer-reg").show();
  });

  $(".layer-login .tab-btn").on("click", function () {
    var index = $(this).index();
    $(this).addClass("cur").siblings().removeClass("cur");
    if (index == 0) {
      $(".layer-login .phone-login").show();
      $(".layer-login .pwd-login").hide();
    } else {
      $(".layer-login .phone-login").hide();
      $(".layer-login  .pwd-login").show();
    }
  });

  //  获取验证码
  $(".common-layer .get-code").on("click", function () {
    var phone = $(this).parents(".common-layer").find(".inp-phone").val();
    if (!phoneFn(phone)) {
      errorFn("请输入正确的手机号码");
      return;
    }
    var wait = $(this).siblings(".wait-code");
    $(this).hide();
    wait.show();
    console.log(wait.find(".size").text());
    var timer = setInterval(function () {
      var size = wait.find(".size").text();
      if (size > 0) {
        size--;
        wait.find(".size").text(size);
      } else {
        wait.hide().siblings(".get-code").show();
        wait.find(".size").text("30");
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  });

  // 登陆
  $(".layer-login .submit-btn").on("click", function () {
    var index = $(".layer-login .tab-box .cur").index();
    if (index == 0) {
      var phone = $(".layer-login .inp-phone").val();
      if (!phoneFn(phone)) {
        errorFn("请输入正确的手机号码");
        return;
      }
      if ($(".layer-login .inp-sms").val() == "") {
        errorFn("请输入手机验证码");
        return;
      }
      if ($(".layer-login .inp-code").val() == "") {
        errorFn("请输入图片验证码");
        return;
      }
    } else {
      if ($(".layer-login .inp-name").val() == "") {
        errorFn("请输入用户名");
        return;
      }
      if ($(".layer-login .inp-pwd").val() == "") {
        errorFn("请输入用户密码");
        return;
      }
      if ($(".layer-login .inp-pwd-code").val() == "") {
        errorFn("请输入图片验证码");
        return;
      }
    }
    var phone = $(".layer-login .inp-phone").val();
    var sms = $(".layer-login .inp-sms").val();
    var code = $(".layer-login .inp-code").val();

    var name = $(".layer-login .inp-name").val();
    var pwd = $(".layer-login .inp-pwd").val();
    var pwdCode = $(".layer-login .inp-pwd-code").val();
  });

  // 注册
  $(".layer-reg .submit-btn").on("click", function () {
    var phone = $(".layer-reg .inp-phone").val();
    if (!phoneFn(phone)) {
      errorFn("请输入正确的手机号码");
      return;
    }
    if ($(".layer-reg .inp-sms").val() == "") {
      errorFn("请输入手机验证码");
      return;
    }
    if ($(".layer-reg .inp-check").is(":checked")) {
      console.log(true);
    } else {
      errorFn("请选中并同意协议");
      return;
    }
  });
});

// 首页js
$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="swiper-btn">' + (index + 1) + "</span>";
    },
  });
  $(".menu-btn").on("click", function () {
    $(this).toggleClass("menu-btn-active");
    $(".nav-main .nav-list").toggle(300);
  });
  $(".phone-nav-list .nav-box .show").on("click", function () {
    $(this)
      .parents(".nav-box")
      .siblings(".nav-box")
      .find(".show-list")
      .hide(300);
    $(this).parents(".nav-box").find(".show-list").toggle(300);
  });
});
