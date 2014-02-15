// JavaScript Document
$(document).ready(function(e) {
    $('.carousel').carousel({
  interval: 4000
	});
		$('#myCarousel').carousel({
		interval: false
	})
	$('.thumbnail img').click(function(){
		console.log($(this));
		$('#mainImg img').attr('src', $(this).attr('src'));
	});
});