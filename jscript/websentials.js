// WebSentials
// By GeekyGamer14 (https://github.com/GeekyGamer14/WebSentials) - So terrible, I made this like a year ago.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js


//hide error/success
function hideError(elem, method){
		if(method == 'slide'){
			$(elem).slideUp();
			$(elem).css('opacity', '0');
			$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
			console.log('hid error with method slide');
		}else{
			if(method == 'fade'){
				$(elem).css('opacity', '0');
				$(elem).attr('desc', '(hidden) '.concat($(elem).attr('desc')));
				setTimeout(function(){
					$(elem).css('display', 'none');
				}, 400);
				console.log('hid error with method fade');
			}else{
				console.error('websentials.hideError: invalid hide method. valid methods are slide or fade.');
		}
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

/*progress bars*/

function progressBar(progressBarId, percentage, label){
	$(progressBarId).css('width', percentage);
	if(label == 'none'){
		console.log('no label selected, ignoring');
	}else{
		var randInterval = setInterval(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		}, 100);
		setTimeout(function(){
			$(label).text(percentage);
			clearInterval(randInterval);
		}, 1000);
	}
}

/*accept button*/
if($('#accept') != []){
	$("body").keyup(function(event){
		if(event.keyCode == 13){
			$("#accept").click();
		}
	});
}

/*tooltips*/
function createTooltip(elem, tooltipText){
	$(elem).attr('onmouseout', 'deleteTooltips()');
	$(elem).after('<p class="tooltip">' + tooltipText + '</p>');
	setTimeout(function(){
		$('.tooltip').css('opacity', '1');
	});
}

function deleteTooltips(){
	$('.tooltip').css('opacity', '0');
	var tooltipsRemoved = $('.tooltip').size();
	setTimeout(function(){
		$('.tooltip').remove();
	}, 200);
	if(tooltipsRemoved > 1){
		console.log(tooltipsRemoved + ' tooltips removed, sir.');
	}else{
		console.log(tooltipsRemoved + ' tooltip removed, sir.');
	}
}

/* dialogs, terrible. */
function createDialog(header, content, accept, acceptAction, deny){
	var thescript = "hideError('.dialog','slide')";
	$('body').prepend('<div class="dialog"><div class="dialog-header">' + header + '</div><div class="dialog-content">' + content +'</div><div class="dialog-footer"><button class="btn-green" onClick="' + acceptAction +'">' + accept + '</button><button onClick='+ thescript +'>' + deny + '</button></div>');
	setTimeout(function(){
		$('.dialog').css('opacity' ,'1');
	}, 1);
}

