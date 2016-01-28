// JavaScript Document
(function($){
		 $(function(){
			 var model_top =0;
			 var model_width= $("#province").width();
			 var model_height= $("#province .inner").outerHeight() + $("#shopList").outerHeight();
			 
			 
			 $("#shopList a").off().on("click",function(){
				 
				 
				 
				   if( $("#province .inner").css("display")==="none"){
								  $("#province .inner").stop().slideDown(function(){
											if($(window).height()< model_height) {
												 $("#province").css({"position":"absolute","top":$(window).scrollTop(),"bottom":"auto"});
											 }
											 else {
												 $("#province").css({"position":"fixed","top":"auto","bottom":"0"});
											 } 
										
										
											$("#province").mouseleave(function(){
											 $("#province .inner").slideUp();
											 $("#province").css({"position":"fixed","top":"auto","bottom":"0"});
											});
									 });
					 }
					 else{
						  
						  $("#province .inner").stop().slideUp(function(){
								$("#province").mouseleave(function(){
								 $("#province .inner").slideUp();
								});
						  });
						  $("#province").css({"position":"fixed","top":"auto","bottom":"0"});
					 }
				
					 return false;
				})
				
			 $("#pageTop a").off().on("click",function(){
				  $("html,body").animate({scrollTop:$("#wrapper").offset().top});
				  return false;
			 })
			 
				
			});
	})(jQuery);