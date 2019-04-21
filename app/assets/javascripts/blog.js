$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".blog-box-left");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".blog-box-right");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".blog-box-left-2");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".blog-box-right-2");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});
