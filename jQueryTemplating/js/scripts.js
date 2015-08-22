/* 
  coding: jQuery template
  Coder: Tu Nguyen
  Version: 0.1
  Date: 08/22/2015
*/
;(function($) {
  
  "use strict";
  var renderTemplate;

  var Tours = [
    { code: "CG2015S", location:"Cần Giờ", length: "2 days 1 nights", cost: "600.000VND" },
    { code: "BB2015F", location:"Bình Ba", length: "2 days 1 nights", cost: "1.000.000VND" },
    { code: "DN2015S", location:"Đà Nẵng", length: "3 days 2 nights", cost: "2.800.000VND" }
  ];

  var renderTemplate = function() {
    //Prepare custom Template
    //We also can format array list item before render to DOM
    $.template("shortInfo","<li class='item'><p>${location}</p></li>");
    $.template("fullInfo","<li class='item'><p>Location: ${location}</p><p>Tour code: ${code}</p><p>Cost: ${cost}</p></li>");
    //Render custom template to DOM
    $.tmpl("shortInfo",Tours).appendTo("#short_info .content ul");
    $.tmpl("fullInfo",Tours).appendTo("#full_info .content ul");
  }

  var formatTemplate = function() {
    var $curFormat = $(".content");
    $curFormat.contents().find(".item:odd").addClass("odd");
    //format more here
  }

  $(function(){
    renderTemplate();
    formatTemplate();
  })
  
})(jQuery);