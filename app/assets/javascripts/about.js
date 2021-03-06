document.addEventListener("turbolinks:load", function() {
  $(document).ready(function() {
    var $horizontal = $(".about-left");

    $(window).scroll(function() {
      var s = $(this).scrollTop(),
        d = $(document).height(),
        c = $(this).height();

      scrollPercent = (s / (d - c)) * 3;

      var position =
        scrollPercent * ($(document).width() - $horizontal.width());

      $horizontal.css({
        right: "calc(25% - 150px + " + position + "px)"
      });
    });
  });

  $(document).ready(function() {
    var button = document.getElementById("jclogo");

    function cover() {
      $(".logo-bg").addClass("visible");
    }
    button.addEventListener("click", cover);
  });

  $(document).ready(function() {
    var button = document.getElementById("close-bg");

    function uncover() {
      $(".logo-bg").removeClass("visible");
    }
    button.addEventListener("click", uncover);
  });
});
