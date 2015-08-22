$(function(){
	
	var note = $('#note'),
		ts = new Date(2015, 1, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		var expectedDate = new Date('September 05, 2015').getTime();
		// If setup in number we set month + 1 for setup month in number
		var curDate = new Date($.now());
		var minusTime = expectedDate-curDate;
		ts = (new Date()).getTime() + minusTime;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "Còn lại ";
			
			message += days + " ngày" + ", ";
			message += hours + " giờ" + ", ";
			message += minutes + " phút" + " và ";
			message += seconds + " giây" + " <br />";
			
			if(newYear){
				message += "còn cho đến năm mới!";
			}
			note.html(message);
		}
	});
	
});
