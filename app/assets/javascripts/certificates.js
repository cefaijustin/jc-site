document.addEventListener("turbolinks:load", function() {
  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".cert-container-1");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".cert-container-2");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".title-box-certs");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });
});
