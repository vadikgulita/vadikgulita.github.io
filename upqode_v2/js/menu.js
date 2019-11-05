$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menu").on("click","li", function () {
        $("#menu li.active").removeClass("active");
        $(this).addClass("active");
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('#menu li.active').removeClass('active');
                    $('#menu li').eq(i).addClass('active');
            }
    });
}).scroll();

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header nav").addClass("active-head");
    } else {
       $("header nav").removeClass("active-head");
    }
});
