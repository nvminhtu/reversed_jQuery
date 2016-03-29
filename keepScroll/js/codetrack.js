[10:48:25] Shinya Katayama: 

var $body = $('body');
var $content = $('#product_step');

var prevScrollTop = sessionStorage.getItem('prevScroll');
var prevContentHeight = sessionStorage.getItem('prevHeight');

var contentTop = $content.offset().top;
var contentHeight = $content.outerHeight();

var to = contentTop + ((prevScrollTop - contentTop) / prevContentHeight) * contentHeight;
$body.scrollTop(to);
[10:49:50] Shinya Katayama: This code calculates the scroll position by using  #product_step's height in the current page.