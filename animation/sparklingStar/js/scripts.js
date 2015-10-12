/* 
  coding: jQuery Sparkling
  Coder: Tu Nguyen
  Version: 0.1
  Date: 08/24/2015
*/
;(function($) {
  
  "use strict";
  var starSparkling;

  starSparkling = function() {
    setInterval(function () {
      //$('.star_1').fadeOut(150).delay(150).fadeIn(300).fadeOut(150).delay(1254);
      $('.star_1').css('width', '125').delay(150);
    }, 50);
  }

  $(function(){
    starSparkling();
  })
  
})(jQuery);