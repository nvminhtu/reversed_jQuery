(function($) {
  var Share = $.share = (function() {
  function init() {
    
    //01- Check & redirect to SP page if detect device is SP 
    var ua = navigator.userAgent;
    if ((ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1) || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
      location.href = '/yoursite_sp/';
    }
    
    //02 - Check if not a SP link, so leave it as target _blank
    $('a[href^="http"]').not("#sp_link").attr("target", "_blank");
    
    //03 - Mouse hover and Mouse out for opacity
    $('[class!=current] > a').on({
      'mouseenter': function() {
        if ($(this).find("img[src*='_off.']").size() > 0) $(this).find("img:not(.current)").attr("src", $(this).find("img").attr("src").replace("_off.", "_on."));
        else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "0.7");
      },
      'mouseleave': function() {
        if ($(this).find("img[src*='_on.']").size() > 0) $(this).find("img:not(.current)").attr("src", $(this).find("img").attr("src").replace("_on.", "_off."));
        else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "1");
      }
    });
    
    //04 - Smooth Scroll when click and go to Top
    $('a[href^="#"]').not('a[class*="special"]').on("click", function() {
      var h = $(this).attr("href");
      var t = $(h == "#" || h === "" ? 'body' : h);
      var p = t.offset().top;
      $('html,body').animate({
        scrollTop: p
      }, 500);
      return false;
    });
    
  }


  return {
    init : init
  };

  })();

  /* document.ready
    ----------------------------------------*/
  $(Share.init);

})(jQuery);
