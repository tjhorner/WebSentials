// WebSentials
// By GeekyGamer14 (https://github.com/GeekyGamer14/WebSentials) - Open source web essentials.
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js


//hide error/success
function hideError(elem, method){
	if($(elem).attr('class') != 'error'){
		if($(elem).attr('class') != 'success'){
			console.error(elem && ' is not an error or a success message, ignoring command.');
		}else{
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
	}else{
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
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		setTimeout(function(){
			$(label).text(Math.random() * (100 - 0.0) + 0);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		setTimeout(function(){
			$(label).text(percentage);
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

/* built-in function creator!*/
function functionCreator(str){
	var s1 = str.replace(/create a variable/gi, 'var');
	var s2 = s1.replace(/that is equal to/gi, '=');
	var s3 = s2.replace(/then/gi, ';');
	var final = s3.replace(/that is an array/gi, '= new Array()');
	console.log('Your function: ');
	return final;
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

/*dialogs*/
function createDialog(content){
	$('body').prepend('<div class="dialog">' + content + '</div><span class="overlay"></span>');
	setTimeout(function(){
		$('.dialog').css('opacity' ,'1');
	}, 1);
}
