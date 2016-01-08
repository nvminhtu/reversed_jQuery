$(function(){
            $("#marquee1").marquee({
               loop: -1
               , init: function ($marquee, options){
                  if( $marquee.is("#marquee2") ) options.yScroll = "bottom";
               }
               , beforeshow: function ($marquee, $li){
                  var $author = $li.find(".author");
                  if( $author.length ){
                     $("#marquee-author").html("<span style='display:none;'>" + $author.html() + "</span>").find("> span").fadeIn(850);
                  }
               }
               , show: function (){
               }
               , aftershow: function ($marquee, $li){
                  var $author = $li.find(".author");
                  if( $author.length ) $("#marquee-author").find("> span").fadeOut(250);
               }
            });
         });
         var iNewMessageCount = 0;
         function addMessage(selector){
            iNewMessageCount++;
            var $ul = $(selector).append("<li>New message #" + iNewMessageCount + "</li>");
            $ul.marquee("update");
         }
