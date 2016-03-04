    var joypad; 

//Lets add the keyboard controls now
	$(document).keydown(function(e){
		var key = e.which;
		if(key == "37" && joypad != "right") joypad = "left";
		else if(key == "39" && joypad != "left") joypad = "right";
	})