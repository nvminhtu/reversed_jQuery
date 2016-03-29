;(function($) {
  
  "use strict";
    
  $(function(){
    // $('.thumb_video').css({
    //   display: 'none'
    // });
    console.log($("body").height());

    $('.introVid a').off().click(function(){
      event.preventDefault();
      autoPlayVideo('o6NstKZMr94','450','283');
      $(this).find('.thumb_video').fadeOut('400');
      $(this).find('#videoContainer').fadeIn('400');
    });
  });
 function autoPlayVideo(vcode, width, height){
  $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
  }

})(jQuery);