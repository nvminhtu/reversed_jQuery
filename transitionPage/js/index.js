;(function($){
  "use strict";
    var $window = $(window);
    var linkLocation;
    var Index = (function(){


      var init = function(){
        var $body = $("body");
        $body.css("display","none");
        $body.fadeIn(2000);

        $("a.transition").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            console.log(this.href);
            $body.fadeOut(1000, redirectPage);
        });
      };

      var redirectPage = function() {
        window.location = linkLocation;
      };

      return {
        "init" : init
      };
    })();

  $(function(){
    Index.init();
  });

})(jQuery);