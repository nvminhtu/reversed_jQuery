;(function($) {

  var 
    centerDiv;
  "use strict";
  $(function(){
    centerDiv();
    $(window).resize();
  })

  centerDiv = function() {
    $('.centerjs').css({
      position:'absolute',
      left: ($('.box').width() - $('.centerjs').outerWidth())/2,
      top: ($('.box').height() - $('.centerjs').outerHeight())/2
    });
  }

})(jQuery);