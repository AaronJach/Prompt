/* Prompt Script */
$.fn.prompt = function(options) { 
	var defaultVars = { 
		url:	'https://www.foremostmedia.com',
		className:	'promptWrapper',
		height:	500,
		scroll: 0,
		width:	800
	};  
	var defaults = $.extend({}, defaultVars, options); 
	var launched = false;
	var scrollTop = 0;
	var winScroll = 0;
	var screen = {
		width: $(window).width(),
		height: $(window).height()
	};
	var prompt='<div id="prompt" class="'+defaults.className+'" style="height:'+screen.height+'px; width:'+screen.width+'px;"><div class="promptInnerWrapper" style="left:'+(screen.width-defaults.width)/2+'px; top:'+(screen.height-defaults.height)/2+'px;height:'+(defaults.height)+'px; width:'+(defaults.width)+'px;"><div class="promptExit">X</div><iframe style="visibility:hidden;" onload="this.style.visibility = \'visible\';"  src="'+defaults.url+'" height="'+defaults.height+'" width="'+defaults.width+'" /></div></div>';
	
	$(document).mouseleave(function() {
		checkCookies();
		if(!launched && scrollTop>=defaults.scroll){promptWindow();}
	});
	
	$(window).load(function() {
		$('body').prepend(prompt);
		$('#prompt').hide();
		winScroll=$(window).scrollTop();
		if(winScroll>scrollTop){scrollTop=winScroll;};
	});
	
	$(window).scroll(function() {
		winScroll=$(window).scrollTop();
		if(winScroll>scrollTop){scrollTop=winScroll;};
	});
	
	function checkCookies() {
		//if cookie exists, set launched to true
	}
	
	function promptWindow() {
		launched=true;	
		$('#prompt').fadeIn(250);
		$('.promptExit').click(function(){
			$('#prompt').fadeOut(250);
		});
	}
}