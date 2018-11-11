import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 100,
  callback: function () {
                $(".typed-cursor").hide();
            }
            onComplete: function(self) {  
  		$('a[href="#web-apps"]').click(scrollToHash) 
		}

}


var typed = new Typed(".element", options);

