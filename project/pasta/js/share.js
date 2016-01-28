(function($) {
	var Share = $.share = (function() {

	// コンストラクタ
	function init() {
    // SPバージョンへリダイレクト
    var ua = navigator.userAgent;
    if ((ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1) || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
      location.href = '/2015italian_sp/';
    }
    
    // 外部リンクを新しいウィンドウで開く
    $('a[href^="http"]').not("#sp_link").attr("target", "_blank");
  
		//ロールオーバー関数
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
		
		// スムーススクロール
		$('a[href^="#"]').not('a[class*="special"]').on("click", function() {
			var h = $(this).attr("href");
			var t = $(h == "#" || h == "" ? 'body' : h);
			var p = t.offset().top;
			$('html,body').animate({
				scrollTop: p
			}, 500);
			return false;
		});
		
	}

	// アクセス制御
	return {
		init : init
	}

	})();
/* document.ready
----------------------------------------*/
$(Share.init);

})(jQuery);

