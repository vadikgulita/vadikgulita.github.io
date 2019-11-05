function prevNext(){
    var activeElement = $('.slider-team__item.active');
    var prevImg = activeElement.prev().find('img').attr('src');
    var nextImg = activeElement.next().find('img').attr('src');
    $('.button_prev').children().find('img').attr('src', prevImg);
    $('.button_next').children().find('img').attr('src', nextImg);
}

$(document).ready (function(){
  prevNext();
  
  $('.button_next').click(function(){
    
    var currentImage = $('.slider-team__item.active');

    var currentImageIndex = $('.slider-team__item.active').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.slider-team__item').eq(nextImageIndex);
    currentImage.removeClass('active');
    
    if(nextImageIndex == ($('.slider-team__item:last').index()+1)){
      $('.slider-team__item').eq(0).addClass('active');
    } else {
      nextImage.addClass('active');
    }
    prevNext();
  });

  $('.button_prev').click(function(){
    var currentImage = $('.slider-team__item.active');
    var currentImageIndex = $('.slider-team__item.active').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.slider-team__item').eq(prevImageIndex);

    currentImage.removeClass('active');
    prevImage.addClass('active');
    prevNext();
  });
});