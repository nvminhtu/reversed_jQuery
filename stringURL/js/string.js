;(function($) {

  var 
    encodeURL,
    decodeURL;

  "use strict";
  $(function(){
    encodeURL();
    decodeURL();
  })

  encodeURL = function() {
    var url = $(location).attr('href'); //get current url
    //OR
    var url = 'folder/index.html?param=#23dd&noob=yes'; //or specify one
    var encodedUrl = encodeURIComponent(url);
    $(".encode").append(encodedUrl);
  }

  decodeURL = function() {
    var url = $(location).attr('href'); //get current url
    //OR
    var url = 'folder%2Findex.html%3Fparam%3D%2323dd%26noob%3Dyes'; //or specify one

    var decodedUrl = decodeURIComponent(url);
    $(".decode").append(decodedUrl);
    //outputs  folder/index.html?param=#23dd&noob=yes
  }

})(jQuery);