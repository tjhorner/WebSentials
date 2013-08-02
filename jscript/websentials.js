// WebSentials
// By GeekyGamer14 (https://github.com/GeekyGamer14/WebSentials) - Open source web essentials.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js

//button click
function buttonCheck(element){
	if($(element).attr('class') == 'btn-confirm'){
		$(element).css('background-color', 'blue');
	}else if($(element).attr('class') == 'btn-good'){
		$(element).css('background-color', 'green');
	}else{
		$(element).css('background-color', '#969696');
	}
	$(element).mouseup($(element).css('color', undefined));
}
$('button').click(function(){
	return this;
});
