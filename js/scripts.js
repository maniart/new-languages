$(document).ready(function(){
	$('#welcome').fadeIn(300);
	var welcomeSlideUp = function(){
		$('#welcome').animate({marginTop:-900},500,'linear');
		$('#welcome').fadeOut(500,function(){
			$('#container').fadeIn(300);
			$('#rightCol').fadeIn(400);
		});
	}
	setTimeout(welcomeSlideUp,2500);
	$('.minimize').toggle(function(){
			$('#content').slideUp();
			$(this).css('background-position','-20px 0');
		},function(){
			$('#content').slideDown();
			$(this).css('background-position','0 0');
	});

	$('.close').click(function(){
		$('#contentWrapper').fadeOut(300);
	});
	$('div#socialTrigger').mouseenter(function(){
		$('article#social>ul').fadeIn(200);
		$('.triggerTxt').css({
			'background-color':'rgba(69,255,144,1)'
		});
		$('.triggerIcon').css({
			'background-position':'4px center'
		});
	});
	$('article#social>ul').mouseleave(function(){
		$(this).fadeOut(200);
		$('.triggerIcon').css('background-position','-16px center');
		$('.triggerTxt').css({
			'background-color':'rgba(255,255,255,1)'
		});
	});
	
});