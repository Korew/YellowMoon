$(function () {
	$('.arrow-down img').click(function () {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 800);
	})
	$('.button-explore').click(function () {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 800);
	})
});