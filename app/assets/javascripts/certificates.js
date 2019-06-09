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

  // firehose certificate below

  $(document).ready(function() {
    var button = document.getElementById("cert-fh-bg");

    function cover() {
      $(".cert-fh-bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg-cert");

    function uncover() {
      $(".cert-fh-bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });

  // javascript certificate below

  $(document).ready(function() {
    var button = document.getElementById("cert-js-bg");

    function cover() {
      $(".cert-js-bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg-cert1");

    function uncover() {
      $(".cert-js-bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });

  // algorithms certificate below

  $(document).ready(function() {
    var button = document.getElementById("cert-al-bg");

    function cover() {
      $(".cert-al-bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg-cert2");

    function uncover() {
      $(".cert-al-bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });

  // shopify certificate below

  $(document).ready(function() {
    var button = document.getElementById("cert-sh-bg");

    function cover() {
      $(".cert-sh-bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg-cert3");

    function uncover() {
      $(".cert-sh-bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });
});
