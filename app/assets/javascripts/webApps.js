document.addEventListener("turbolinks:load", function() {
  $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($("html,body").scrollTop() > $(".progress-bar-container").height()) {
        $(".progress-bar").each(function() {
          $(this)
            .find(".progress-content")
            .animate(
              {
                width: $(this).attr("data-percentage")
              },
              2000
            );

          $(this)
            .find(".progress-number-mark")
            .animate(
              {
                left: $(this).attr("data-percentage")
              },
              {
                duration: 1500,
                step: function(now, fx) {
                  var data = Math.round(now);
                  $(this)
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
    var sB = sT + $(window).height();
    var tag = $(".progress-bar-container");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  // about contact slide down

  $(document).ready(function() {
    var button = document.getElementById("jclogo");

    function cover() {
      $(".see-more").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg");

    function uncover() {
      $(".see-more").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });

  // all web apps button

  $(document).ready(function() {
    var button = document.getElementById("see-more-btn");

    function cover() {
      $(".web_apps_all_bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg-web");

    function uncover() {
      $(".web_apps_all_bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".outer-box-video");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".title-box-skills");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  $(window).scroll(function() {
    var sT = $(this).scrollTop();
    var sB = sT + $(window).height();
    var tag = $(".title-box-web");

    if ($(tag).position().top < sB) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  });

  function progress(percent, $element) {
    var progressBarWidth = (percent * $element.width()) / 100;
    $element
      .find("div")
      .animate({ width: progressBarWidth }, 500)
      .html(percent + "% ");
  }
  progress(80, $("#progressBar"));
});
