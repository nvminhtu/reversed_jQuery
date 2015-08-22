;(function($, window){
  "use strict";

  var $content,
      loadContent;

  loadContent = function() {
    $('#navigation li a').click(function(){
      $(".content").load($(this).attr('href'));
      return false;
    });
  }
  // document.ready
  $(function(){
    loadContent();
  });
  
})(jQuery, window);