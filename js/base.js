function submitFn() {
  if ($(".layer-msg").is(":visible")) {
    return false;
  }
  // if (form.name.value.trim() == "") {
  //   errFn("请输入您的姓名");
  //   return false;
  // }
  // if (!phoneFn(form.mobile.value.trim())) {
  //   errFn("请输入正确的手机号码");
  //   return false;
  // }
  // if (form.code.value.trim() == "") {
  //   errFn("请输入验证码");
  //   return false;
  // }
  if (!form.money.value || form.money.value == "") {
    errFn("请选择资金需求");
    return false;
  }
  let moneySize = [];
  form.moneySize.forEach(function (el) {
    if (el.checked) {
      moneySize.push(el.value);
    }
  });
  if (!moneySize || moneySize.length == 0) {
    errFn("请选择资质");
    return false;
  }

  return false;
}

function errFn(msg) {
  $(".layer-msg .msg").text(msg);
  $(".layer-msg").show();
  let timer = setTimeout(function () {
    $(".layer-msg").addClass("animate__fadeOutDown ");
  }, 2000);
  timer = setTimeout(function () {
    $(".layer-msg").removeClass("animate__fadeOutDown ").hide();
  }, 2500);
}

$(function () {
  // $("#form").submit(function (res) {
  //   console.log(res, "form");
  // });

  $(".form-main .pact .pact-btn").click(function () {
    console.log("pactbtn");
    $(".cloud, .layer-pact").slideDown();
  });
  $(".layer-pact .layer-btn").click(function () {
    $(".cloud, .layer-pact").slideUp();
  });

  $(".form-main .get-code").click(function () {
    if (!phoneFn($(".form-main .mobile").val())) {
      errFn("请输入正确的手机号码");
      return false;
    }
    $(".form-main .get-code").hide();
    $(".form-main .wait-code").show();
    var timer = setInterval(function () {
      let size = $(".form-main .wait-code .num").text();
      if (size > 1) {
        size--;
      } else {
        size = 60;
        $(".form-main .get-code").show();
        $(".form-main .wait-code").hide();
      }
      $(".form-main .wait-code .num").text(size);
    }, 1000);
  });
});

function phoneFn(val) {
  const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
  return reg.test(val);
}
