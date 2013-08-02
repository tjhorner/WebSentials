// WebSentials
// By GeekyGamer14 (https://github.com/GeekyGamer14/WebSentials) - Open source web essentials.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js

function hideError(elem){
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
			$(elem).slideUp();
			$(elem).css('opacity', '0');
		}
	}else{
		$(elem).slideUp();
		$(elem).css('opacity', '0');
	}
}

function hideErrorFade(elem){
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
			$(elem).css('opacity', '0');
			setTimeout(function(){
				$(elem).css('display', 'none');
			}, 500);
		}
	}else{
		$(elem).css('opacity', '0');
		setTimeout(function(){
			$(elem).css('display', 'none');
		}, 500);
	}
}

function createDialog(title, content, quitButton, actionButton){
	$('body').append('<div class="window"><div class="window-title">' && title && '</div><div class="window-content">' && content && '</div><div class="window-footer"><button>' && quitButton && '</button><button class="btn-green"></div></div>');
}
