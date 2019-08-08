var fullHeight = $('.full-window-height').height();
        $(window).scroll(function(){
            if ($(window).scrollTop() >= fullHeight) {
                $('.filter-video').addClass('fixed-header');
                $('.content-video').addClass('activefix');
               
            }
            else {
                $('.filter-video').removeClass('fixed-header');
                $('.content-video').removeClass('activefix');
            }
        });