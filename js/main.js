$(function () {
	$('.arrow-down img').click(function() {
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="about"]').addClass('active');
		$('body').animate({
			scrollTop: $("#about").offset().top + 1
		}, 800);
	})
	$('.button-explore').click(function() {
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="about"]').addClass('active');
		$('body').animate({
			scrollTop: $("#about").offset().top + 1
		}, 800);
	})

	var navbarHeight = $('.navbar').outerHeight();
	console.log(navbarHeight);


	$('.navbar-item[target="home"]').click(function() {
		$('body').animate({
			scrollTop: $('#home').offset().top + 1
		}, 800);
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="home"]').addClass('active');
	})

	$('.navbar-item[target="about"]').click(function() {
		$('.navbar').removeClass('fixed');
		$('body').animate({
			scrollTop: $('#about').offset().top + 1
		}, 800);
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="about"]').addClass('active');
	})

	$('.navbar-item[target="portfolio"]').click(function() {
		$('body').animate({
			scrollTop: $('#portfolio').offset().top + 1 - navbarHeight
		}, 800);
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="portfolio"]').addClass('active');
	})

	$('.navbar-item[target="clients"]').click(function() {
		$('body').animate({
			scrollTop: $('#clients').offset().top + 1 - navbarHeight
		}, 800);
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="clients"]').addClass('active');
	})

	$('.navbar-item[target="contact"]').click(function() {
		$('body').animate({
			scrollTop: $('#contact').offset().top + 1 - navbarHeight
		}, 800);
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="contact"]').addClass('active');
	})

	var stickyOffset = $('#about').offset().top;

	$(window).scroll(function(){
		var sticky = $('.navbar'),
		scroll = $(window).scrollTop();

		if (scroll >= stickyOffset) {
			sticky.addClass('fixed');
			$('#about .block-heading').css('margin-top', navbarHeight + 120);
		} else {
			sticky.removeClass('fixed');
			$('#about .block-heading').css('margin-top', 0);
		}
	});

	$('body').scroll(function() {
		console.log($('body').offset());
	});
});