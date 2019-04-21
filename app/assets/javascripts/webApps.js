jQuery(document).ready(function() {
  $(".invert").click(function() {
    var $this = $(this);
    $("html").toggleClass("inversed");
    $this.toggleClass("invert");
    if ($this.hasClass("invert")) {
      $this.text("go dark");
    } else {
      $this.text("go light").css({
        all: "unset",
        cursor: "pointer",
        color: "#15ad9e",
        "font-size": "18px",
        top: "21px",
        right: "23px"
      });
    }
  });
});

jQuery(document).ready(function() {
  jQuery(document).on("scroll", function() {
    if (jQuery("html,body").scrollTop() > jQuery(".container").height()) {
      jQuery(".progress-bar").each(function() {
        jQuery(this)
          .find(".progress-content")
          .animate(
            {
              width: jQuery(this).attr("data-percentage")
            },
            2000
          );

        jQuery(this)
          .find(".progress-number-mark")
          .animate(
            {
              left: jQuery(this).attr("data-percentage")
            },
            {
              duration: 2000,
              step: function(now, fx) {
                var data = Math.round(now);
                jQuery(this)
                  .find(".percent")
                  .html(data + "%");
              }
            }
          );
      });
    }
  });
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  if (sT >= 800 && sT <= 4500) {
    $(".circle").css({ opacity: "1" });
  } else {
    $(".circle").css({ opacity: "0" });
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".outer-box-l-1");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".outer-box-r-1");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".outer-box-l-2");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".outer-box-r-2");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});

$(window).scroll(function() {
  var sT = $(this).scrollTop();
  var sB = sT + $(window).height();
  var tag = $(".container");

  if ($(tag).position().top < sB) {
    $(tag).addClass("visible");
  } else {
    $(tag).removeClass("visible");
  }
});
