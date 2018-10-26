import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 100,
  callback: function () {
                $(".typed-cursor").hide();
            }
}

var typed = new Typed(".element", options);