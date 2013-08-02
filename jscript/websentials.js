// WebSentials
// By GeekyGamer14 (https://github.com/GeekyGamer14/WebSentials) - Open source web essentials.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js


//hide error/success, normal
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

//hide error/success, fade
//TODO add method attribute in hideError function
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

//restore error (or just show one)
function restoreError(elem){
	var elemID = elem.replace('#', '');
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
			$(elem).css('display', 'block');
			setTimeout(function(){
				$(elem).css('opacity', '1');
			}, 50);
		}
	}else{
		$(elem).css('display', 'block');
		setTimeout(function(){
			$(elem).css('opacity', '1');
		}, 50);
	}
}
// list errors
function listErrors(){
	return $('.error').attr('desc');
}
//list success messages
function listSuccess(){
	return $('.success').attr('desc');
}

//this doesnt work yet. dont try it.
//function createDialog(title, content, quitButton, actionButton){
//	$('body').append('<div class="window"><div class="window-title">' && title && '</div><div class="window-content">' && content && '</div><div class="window-footer"><button>' && quitButton && '</button><button class="btn-green"></div></div>');
//}
