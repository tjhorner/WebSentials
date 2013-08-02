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
			$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
		}
	}else{
		$(elem).slideUp();
		$(elem).css('opacity', '0');
		$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
	}
}

function hideErrorFade(elem){
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
			$(elem).css('opacity', '0');
			$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
			setTimeout(function(){
				$(elem).css('display', 'none');
			}, 400);
		}
	}else{
		$(elem).css('opacity', '0');
		$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
		setTimeout(function(){
			$(elem).css('display', 'none');
		}, 400);
	}
}

function restoreError(elem){
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
			$(elem).css('display', 'block');
			$(elem).css('opacity', '1');
			document.body.innerHTML = document.body.innerHTML.replace('(hidden) ', '(restored) ');
		}
	}else{
		$(elem).css('display', 'block');
		$(elem).css('opacity', '1');
		document.body.innerHTML = document.body.innerHTML.replace('(hidden) ', '(restored) ');
	}
}

function listErrors(){
	return $('.error').attr('desc');
}

function listSuccess(){
	return $('.success').attr('desc');
}

function createDialog(title, content, quitButton, actionButton){
	$('body').append('<div class="window"><div class="window-title">' && title && '</div><div class="window-content">' && content && '</div><div class="window-footer"><button>' && quitButton && '</button><button class="btn-green"></div></div>');
}

function onload(){
	$('body').append('<center><div id="websentials">Built with <a href="http://github.com/geekygamer14/websentials">WebSentials</a></div></center>');
}

setTimeout(onload(), 5000);
