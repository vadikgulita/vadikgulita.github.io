$(document).ready (function(){
  
  $('.button_next').click(function(){
    var currentImage = $('.slider-team__item.active');
    var currentImageIndex = $('.slider-team__item.active').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.slider-team__item').eq(nextImageIndex);
    currentImage.fadeOut('slow');
    currentImage.removeClass('active');

    if(nextImageIndex == ($('.slider-team__item:last').index()+1)){
      $('.slider-team__item').eq(0).fadeIn(1000);
      $('.slider-team__item').eq(0).addClass('active');
    } else {
      nextImage.fadeIn('slow');
      nextImage.addClass('active');
    }
  });

  $('.button_prev').click(function(){
    var currentImage = $('.slider-team__item.active');
    var currentImageIndex = $('.slider-team__item.active').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.slider-team__item').eq(prevImageIndex);

    currentImage.fadeOut('slow');
    currentImage.removeClass('active');
    prevImage.fadeIn('slow');
    prevImage.addClass('active');

  });
});