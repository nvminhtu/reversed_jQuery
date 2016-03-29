;(function($){
  $.fn.scrollPosReaload = function(){
    if (localStorage) {
        var posReader = localStorage["posStorage"];
        
        if (posReader) {
          var scrollNew = $(this).offset();
          var scrollHeight = scrollNew.top;
        
          $(window).scrollTop(scrollHeight);
          localStorage.removeItem("posStorage");
        }


        $(this).click(function(e) {
          localStorage["posStorage"] = $(window).scrollTop();
        });

        return true;
    }

    return false;
};

/* ================================================== */

$(document).ready(function() {
 // $('.change').scrollPosReaload();
  //$('.oke').scrollPosReaload();
  // $('.oke2').scrollPosReaload();
  
  // if (localStorage) {
  //   var posReader = localStorage["posStorage"];
    
  //   if (posReader) {
  //     var scrollNew = $('.oke').offset();
  //     var scrollHeight = scrollNew.top;
    
  //     $(window).scrollTop(scrollHeight);
  //     localStorage.removeItem("posStorage");
  //   }

    
  //   $('.oke').click(function(e) {
  //     localStorage["posStorage"] = $(window).scrollTop();
  //   });

  // }


  if (localStorage) {
    var posSecondRead = localStorage["posSecond"];
    
    if (posSecondRead) {
      var scrollNew = $('.change').offset();
      var scrollHeight = scrollNew.top;
    
      $(window).scrollTop(scrollHeight);
      localStorage.removeItem("posSecond");
    }

    
    $('.change').click(function(e) {
      localStorage["posSecond"] = $(window).scrollTop();
    });

  }

});
  
}(jQuery));