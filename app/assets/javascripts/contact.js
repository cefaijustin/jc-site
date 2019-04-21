document.addEventListener("turbolinks:load", function() {
  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".say-hi-l");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".say-hi-r");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });
});
