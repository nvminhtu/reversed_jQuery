$(document).ready(function(){
  $('.carousel').bxSlider({
    //mode: 'vertical',
    //or make it fade:
    mode: 'fade',
    auto: true,
    pause: 6000,
    slideMargin: 0,
    easing: 'ease-in-out',
    speed: 2000,
    pagerCustom: '.carousel__pager'
  });
});