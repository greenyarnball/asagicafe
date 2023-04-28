$(function(){
	$('.toggle_title').on('click',function() {
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
		$('.toggle_title').not($(this)).next().slideUp();
		$('.toggle_title').not($(this)).removeClass('selected');
	});
});