
var onYouTubeIframeAPIReady;

;(function(){
  "use strict";

  // read youtube API
  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var
    UA = navigator.userAgent,
    macOs = UA.match(/Mac|PPC/), //Mac OS
    safari = (UA.indexOf("Safari") > 0 && UA.indexOf("Chrome") < 0),
    $window,
    width = 0,
    height = 0,
    maxHeight = 450,
    maxWidth = 1200,
    ratioWidth = maxWidth/675,
    ratioHeight = 675/maxWidth,
    videoID = "kE5fS7zXfBM",

    sourceCode ='<div id="meiko_pc_contain">' +
                  '<div id="meiko_player">' +
                   '<div id="meiko_video"></div>' +
                   '<div class="video_overlay">' +
                     '<div class="controler">' +
                       '<span class="skip_movie"><img src="/img/index/btn-skip_movie.png" alt="映像をスキップする" /></a></span>' +
                       '<span class="open_large_movie"><a href="http://www.youtube.com/embed/vOmJLNSKK0c?rel=0&amp;modestbranding=1&amp;autoplay=1" class="btn_movie watch_movie"><img class="swap_btn" src="/img/index/btn-show_large_movie_off.png" alt="" /></a></span>' +
                     '<!-- /.controler --></div>' +
                   '<!-- /.video_overlay --></div>' +
                   '<div class="meiko_static"><a href="/summer_cp2015/"><img class="sbg" src="/img/index/img-meiko_summer.jpg" alt="夏得キャンペーン" width="1200" height="450" /></a></div>' +
                 '<!-- /#meiko_player --></div>' +
                '<!-- /#meiko_pc_contain --></div>',
    useragents = [
      "iPhone",         //  Apple iPhone
      "iPod",           //  Apple iPod touch
      "Android",        //  1.5+ Android
      "dream",          //  Pre 1.5 Android
      "CUPCAKE",        //  1.5+ Android
      "blackberry9500", //  Storm
      "blackberry9530", //  Storm
      "blackberry9520", //  Storm v2
      "blackberry9550", //  Storm v2
      "blackberry9800", //  Torch
      "webOS",          //  Palm Pre Experimental
      "incognito",      //  Other iPhone browser
      "webmate"         //  Other iPhone browser
    ],
    pattern = new RegExp(useragents.join("|"), "i"),
    currentURL = location.href,
    videoOutTime = 15,
    interval = 200,
    player,
    initHeight,
    initWidth,
    init,
    onPlayerReady,
    onPlayerStateChange,
    onPlayerError,
    onMovieEnd,
    checkFlash,
    $meikoPlayer,
    $meikoVideo,
    $controler,
    $staticImage,
    image,
    imageHeight = 0,
    checkTimer,
    checkCurrentTime,
    moviePlayButton,
    hoverImgOf,
    normalImgOf;


  // pre-load image
  image = new Image();
  image.onload = function(event){
    // imageHeight = image.
    // console.log( image.height );
  };
  image.src = "/img/index/img-meiko_summer.jpg";

  init = function(){
    $(function(){
      $window = $(window);
      width = $window.width();
      height = $window.height();
      initHeight = Math.ceil( width / ratioWidth);

      $('#main').before(sourceCode);

      player = new YT.Player("meiko_video", {
        "width": maxWidth,
        "height": "450px",
        "videoId": videoID,
        "events": {
          "onReady": onPlayerReady,
          "onStateChange": onPlayerStateChange,
          "onError": function(event){
            onMovieEnd();
          }
        },
        playerVars: {
          "wmode": "transparent",
          "autoplay": 1,
          "controls": 0,
          "rel": 0,
          "showinfo": 0,
          "loop": 1,
          "enablejsapi": 1,
          "origin": currentURL,
          "html5": (macOs && safari)? 1 : 0
        }
      });
      // player.setLoop(true);

      $meikoPlayer = $("#meiko_player")
        .css({
          "max-height": maxHeight + "px",
          "max-width": maxWidth + "px",
          "text-align": "center",
          "position": "relative"
        });

      $meikoPlayer
        .children(".video_overlay")
          .css({
            "position": "absolute",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%"
          })
          .children(".controler")
            .css({
              "position": "relative",
              "width": "960px",
              "height": "100%",
              "margin": "0 auto"
            })
            .children(".skip_movie")
              .css({
                "position": "absolute",
                "top": "20px",
                "right": 0,
                "cursor": "pointer"
              })
              .on("click tap", function(event){
                event.preventDefault();
                if( !$meikoPlayer.is(":animated") ){
                  onMovieEnd();
                }
              })
            .end()
            .children(".open_large_movie")
              .css({
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "margin": "-100px 0 0 -100px",
                "cursor": "pointer"
              });

      $meikoVideo = $("#meiko_video");
      $controler = $meikoPlayer.find(".skip_movie, .open_large_movie");

      $staticImage = $meikoPlayer.find(".meiko_static");

      if(checkFlash()==false)
      {
        onMovieEnd();
      }

      //init fixed video size
      width = $window.width();
      height = $window.height();
      initHeight = width > maxWidth? Math.ceil( maxWidth / ratioWidth) : Math.ceil( width / ratioWidth);
      initHeight = 675;
      initWidth = width > maxWidth? maxWidth : width
        $meikoVideo
        .css({
          "width": maxWidth,
          "height": initHeight + "px",
          "margin-top": initHeight > maxHeight? (-(initHeight - maxHeight) / 2 + "px") : 0,
          "margin-left": initWidth > maxWidth? (-(initWidth - maxWidth) / 2 + "px") : 0
        });
     
     
      if( !pattern.test( navigator.userAgent ) ){
        window.TVCM.init();
      }
      moviePlayButton();
      

    });
  };

  onPlayerReady = function(event) {
    videoOutTime = player.getDuration() - 1.1;
    checkTimer = setTimeout( checkCurrentTime, interval );
    player.mute();
    player.playVideo();
  };

  checkCurrentTime = function(){
    clearTimeout(checkTimer);
    if( player.getCurrentTime() >= videoOutTime ){
      onMovieEnd();
    } else {
      checkTimer = setTimeout( checkCurrentTime, interval );
    }
  };

  onPlayerStateChange = function(event){
    switch( event.data ){
      case -1 :
        break;
      case 0 :
        // onMovieEnd();
        break;
      case 1 :
        break;
      case 2 :
        break;
      case 3 :
        break;
      case 5 :
        break;
    }
  };
  checkFlash = function(){
    var hasFlash = false;
    try {
      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (fo) {
        hasFlash = true;
      }
    } catch (e) {
      if (navigator.mimeTypes
            && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        hasFlash = true;
      }
    }
    return hasFlash;
  };

  onMovieEnd = function(){
    // player.playVideo();
    // var $staticImage = $('<div class="meiko_static"><a href="/ydk/"><img class="slink" src="/img/index/btn-static_view.png" width="150" height="30" alt="詳しくはこちら" /></a></div>');

    $staticImage.fadeIn(200, function(){
      player.destroy();
      $meikoPlayer.find("#meiko_video, .video_overlay").remove();
    });
  };

  onYouTubeIframeAPIReady = function(){
    init();
  };

  /* Hover play button */
  moviePlayButton = function(){
    $(".btn_movie").hover( function(){
    var hoverImg = hoverImgOf($(this).find("img.swap_btn").attr("src"));
    $(this).find("img.swap_btn").attr("src", hoverImg);
      }, function() {
         var normalImg = normalImgOf($(this).find("img.swap_btn").attr("src"));
         $(this).find("img.swap_btn").attr("src", normalImg);
      }
    );
  }
  hoverImgOf = function(filename){
   var re = new RegExp("(.+)_off\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_on.$2");
  }
  normalImgOf = function(filename){
   var re = new RegExp("(.+)_on\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_off.$2");
  }

})(jQuery);