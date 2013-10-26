


$(document).ready(function() {
 execute_counter();

});



function execute_counter() {	
	
		jQuery(".contador").jCountdown({
			//timeText:"2013/11/01 00:00:00",
			// Year/Month/Date Hour:Minute:Second
			timeText:"2013/11/9 6:00:00",
			timeZone:5,
			style:"flip",
			color:"transparent",
			width:0,
			textGroupSpace:15,
			textSpace:0,
			reflection:false,
			reflectionOpacity:10,
			reflectionBlur:0,
			dayTextNumber:2,
			displayDay:true,
			displayHour:true,
			displayMinute:true,
			displaySecond:true,
			displayLabel:true/*,
			onFinish:function(){
				alert("finish");
			}*/
		});	
		
		
	
}


