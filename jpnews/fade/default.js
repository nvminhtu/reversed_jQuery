//view-source:http://svn.inet.oro.co.jp/sacr/1puku2012/test_index.html
$(function(){
  
  $("#rotatearea").fadeTransition({
    pauseTime:5000,
    transitionTime:1500
  });
  
  
  //$('#rotatearea').innerfade({ animationtype: 'fade', speed: 1500, timeout: 5000, containerheight: '286px' });
  
  
  $("#main .fl a, #main .fr a").hover(function(){
    if (osiPhone || osiPad) {
    } else {
      //$("img", this).stop(true, true).animate({top:"0"},{queue:false,duration:200});
        $("img.scroll", this).stop(true, true).animate({top:"0"},800,$.easie(0,1,0.883,0.972));
        var thumbId = $(this).attr('id');
        if(thumbId === undefined) {
        } else {
          $("#rotatearea").after('<div id="rotate-hover"><h2 id="rotate-'+thumbId+'-hover" class="Replaced"><span>ã¡ã‚‡ã£ã¨ä¸€æœã‚³ãƒ³ãƒ†ã‚¹ãƒˆ</span></h2></div>');
          $("#rotatearea").css('display','none');
        }
      }
    }
    ,
  function() {
      $("img.scroll", this).stop(true, true).animate({top:"-91px"},400,$.easie(0,1,0.883,0.972));
      $("#rotate-hover").remove();
      $("#rotatearea").css('display','block');
    }
  );
  
  
  if ($.browser.msie && $.browser.version < 8) {
    $("#main .fl a, #main .fr a").click(function(){
      url = $(this).attr("href");
      window.location = url;
    });
  }
  
  window.onunload = function() {
    $("#rotate-hover").remove();
    $("#rotatearea").css('display','block');
  };
      
});