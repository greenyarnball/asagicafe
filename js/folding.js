$(function(){
	$('.title').on('click',function() {
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
		$('.title').not($(this)).next().slideUp();
		$('.title').not($(this)).removeClass('selected');
	});
});