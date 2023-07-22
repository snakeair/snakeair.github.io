function submitFn() {
  if ($(".layer-msg").is(":visible")) {
    return false;
  }
  console.log(form.name.value);
  errFn("密码错误");
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
  }, 3000);
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
});
