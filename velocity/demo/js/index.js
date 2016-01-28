;(function($){
  "use strict";
  var SlideIndustry = $.slide_industry = (function() {
    function init() {
      var $main_slide = $('.photo_lists').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.gallery_thumbs',
        prevArrow: '<a class="prev_top slider-prev"></a>',
        nextArrow: '<a class="next_top slider-next"></a>'
      });
      var $thumb_slide = $('.gallery_thumbs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.photo_lists',
        focusOnSelect: true,
        variableWidth: true,
        speed: 200,
        useCSS: false,
        centerMode: true,
        prevArrow: '<a class="prev_bottom slider-prev"></a>',
        nextArrow: '<a class="next_bottom slider-next"></a>'
      });
    }
    
    return {
      init: init
    };
  })();
  $(SlideIndustry.init);
})(jQuery);