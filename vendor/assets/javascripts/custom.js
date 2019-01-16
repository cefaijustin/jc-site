jQuery(function() {
    "use strict";
    $(document).ready(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).appear(function() {
                jQuery(this).find('.count-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
                var percent = jQuery(this).attr('data-percent');
                jQuery(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
        $('.btnNext').click(function() {
            $('.nav-tabs > .active').next('li').find('a').trigger('click');
        });
        $('.btnPrev').click(function() {
            $('.nav-tabs > .active').prev('li').find('a').trigger('click');
        });
    });
    var $window = $(window)
      , $docWidth = $window.width()
      , HeadNav = $('#navigation')
      , $pos = HeadNav.offset().top
      , navFixed = $('.navFixed')
    $(document).on('load scroll', function() {
        var docHeight = $window.height();
        if ($docWidth > 100 && docHeight > 200) {
            if ($window.scrollTop() >= $pos) {
                HeadNav.addClass('fixed')
                navFixed.show()
            } else {
                HeadNav.removeClass('fixed')
                navFixed.hide()
            }
        }
    });
}());