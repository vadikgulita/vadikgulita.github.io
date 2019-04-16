$(document).ready(function(){
  $('.btn').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
  }),
  $('.btn').on('click', function (){
    var value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.con').show('1000');
    }
    else {
      $('.con').not('.'+value).hide('1000');
      $('.con').filter('.'+value).show('1000');
    }
  });
})