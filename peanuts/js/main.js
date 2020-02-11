$(function () {

    $('#slider1').owlCarousel({
        nav: true,
        navText: ["<img src='images/prev.svg'>","<img src='images/next.svg'>"],
        dots: true,
        loop: true,
        autoplay: 3000,
        responsiveClass: true,
        responsive:{
            320:{
                items: 1,
                nav: false,
                dots: false
            },
            576:{
                items:2,
                nav: false,
                dots: false
            },
            768:{
                items:2,
                nav: false,
                dots: false
            },
            968:{
                items:3,
                nav: false,
                dots: false
            },
            1024:{
                items:4,
                nav: false,
                dots: false
            },
            1366:{
                items:4,
                dots: true
            }
        }
    });

    $(".main-menu__btn").on("click", function () {
        $(".main-menu__list").slideToggle();
    });

    $('#review-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: 3000,
        responsiveClass: true,
        responsive:{
            320:{
                dots: false
            },
            576:{
                dots: false
            },
            768:{
                dots: false
            },
            968:{
                dots: false
            },
            1024:{
                dots: false
            },
            1366: {
                dots: true
            }
        }
    })
    
});