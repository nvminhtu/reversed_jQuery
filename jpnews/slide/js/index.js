(function($) {
  var Slider = $.slider = (function() {
    
    var $mainArea, $thumbArea, $thumbFrame, timer, dist = 252;
                    
    function init() {
      $mainArea = $('#main_area');
      $mainArea.find('li:first').addClass('current').fadeIn();
      $thumbArea = $('#thumb_area');
      $thumbArea.append('<div id="thumb_frame"><img src="https://www.aeondewine.com/img/shop/A106/img/index/bg-on_frame.gif" width="242" height="81" /></div>');
      $thumbFrame = $('#thumb_frame');
      setTimerHandler();
      
      $thumbArea.find('li').on('click', function(){       
              clearTimeout(timer);
        if( $thumbFrame.is(':animated') || $(this).hasClass('current') ) return false;
        var index = $(this).index();
        $thumbFrame.stop().animate({ 'left' : ( index * dist ) },
          function(){
            $mainArea.find('li').removeClass('current').fadeOut();
            $mainArea.find('li').eq(index).addClass('current').fadeIn();
          });
        setTimerHandler();
      });
    } //init 
    
    function setTimerHandler() {
            clearTimeout(timer);
            timer = setTimeout(slideMain, 6000);
        } //setTimerHandler
    
    function slideMain() {
            clearTimeout(timer);
      var frameLeft = parseInt( $thumbFrame.css('left') ) / dist;
      if( frameLeft ==  3) {
        $thumbFrame.stop().animate({ 'left' : 0 },
        function(){
          $mainArea.find('li').eq(frameLeft).removeClass('current').fadeOut();
          $mainArea.find('li').eq(0).addClass('current').fadeIn();
        });
      } else {
        $thumbFrame.stop().animate({ 'left' : dist + ( frameLeft * dist ) },
        function(){
          $mainArea.find('li').eq(frameLeft).removeClass('current').fadeOut();
          $mainArea.find('li').eq(frameLeft + 1).addClass('current').fadeIn();
        });
      }     
      setTimerHandler();
    } //slideMain
    
    return {
      init : init
    }
  })();
  $(Slider.init);
})(jQuery);
