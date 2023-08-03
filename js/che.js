function submitFn() {
  if ($(".layer-msg").is(":visible")) {
    return false;
  }
  if (form.name.value.trim() == "") {
    errFn("请输入姓名");
    return false;
  }
  if (!phoneFn(form.mobile.value.trim())) {
    errFn("请输入正确的手机号码");
    return false;
  }
  if (form.code.value.trim() == "") {
    errFn("请输入验证码");
    return false;
  }

  if (form.money.value == "0") {
    errFn("请选择贷款金额");
    return false;
  }
  if (form.address.value == "0") {
    errFn("请选择所在城市");
    return false;
  }
  console.log(form.moneySize.value);
  if (form.che.value == "") {
    errFn("请输入车辆型号");
    return false;
  }
  if (!form.moneySize.value || form.moneySize.value == "") {
    errFn("请选择车辆购买方式");
    return false;
  }
  if (!form.cheOld.value || form.cheOld.value == "") {
    errFn("请选择车辆年限");
    return false;
  }

  let pact = $("#pact-check");
  console.log(pact.is(":checked"));
  if (!pact.is(":checked")) {
    errFn("请阅读并同意用户协议");
    return false;
  }
  //
  $(".layer-ok, .cloud").show();
  return false;
}

function showFormFn() {
  if ($(".form-main .hide-box").is(":hidden")) {
    console.log("show");
    $(".form-main .hide-box").show();
  }
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

  $(".layer-ok .layer-btn").click(function () {
    $(".layer , .cloud").hide();
  });
});

function phoneFn(val) {
  const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
  return reg.test(val);
}
