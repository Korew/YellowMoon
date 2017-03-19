$(function () {
	$('.arrow-down img').click(function() {
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="about"]').addClass('active');
		$('body').animate({
			scrollTop: $("#navigation").offset().top + 1
		}, 800);
	})
	$('.button-explore').click(function() {
		$('.navbar-item').removeClass('active');
		$('.navbar-item[target="about"]').addClass('active');
		$('body').animate({
			scrollTop: $("#navigation").offset().top + 1
		}, 800);
	})

	var navbarHeight = $('.navbar').outerHeight();
	console.log(navbarHeight);


	$('.navbar-item[target="home"]').click(function() {
		$('body').animate({
			scrollTop: $('#home').offset().top
		}, 800);
	})

	$('.navbar-item[target="about"]').click(function() {
		$('body').animate({
			scrollTop: $('#about').offset().top + 1 - navbarHeight
		}, 800);
	})

	$('.navbar-item[target="portfolio"]').click(function() {
		$('body').animate({
			scrollTop: $('#portfolio').offset().top + 1 - navbarHeight
		}, 800);
	})

	$('.navbar-item[target="clients"]').click(function() {
		$('body').animate({
			scrollTop: $('#clients').offset().top + 1 - navbarHeight
		}, 800);
	})

	$('.navbar-item[target="contact"]').click(function() {
		$('body').animate({
			scrollTop: $('#contact').offset().top + 1 - navbarHeight
		}, 800);
	})

	/* Fixed navigation */
	var stickyOffset = $('#navigation').offset().top + 1;
	$(window).scroll(function() {

		if ($(window).scrollTop() >= stickyOffset) {
			$('#navigation').addClass('fixed');
			$('#about').css('margin-top', navbarHeight);
		} else {
			$('#navigation').removeClass('fixed');
			$('#about').css('margin-top', 0);
		}
	});
	/* END fixed navigation */

	/* Add active class on scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() < ($('#about').offset().top - navbarHeight - 20)) {
			$('.navbar-item').removeClass('active');
			$('.navbar-item[target="home	"]').addClass('active');
		}
		if ($(window).scrollTop() > ($('#about').offset().top - navbarHeight - 20)) {
			$('.navbar-item').removeClass('active');
			$('.navbar-item[target="about"]').addClass('active');
		}
		if ($(window).scrollTop() > ($('#portfolio').offset().top - navbarHeight - 20)) {
			$('.navbar-item').removeClass('active');
			$('.navbar-item[target="portfolio"]').addClass('active');
		}
		if ($(window).scrollTop() > ($('#clients').offset().top - navbarHeight - 20)) {
			$('.navbar-item').removeClass('active');
			$('.navbar-item[target="clients"]').addClass('active');
		}
		if ($(window).scrollTop() > ($('#contact').offset().top - navbarHeight - 20)) {
			$('.navbar-item').removeClass('active');
			$('.navbar-item[target="contact"]').addClass('active');
		}
	});
	/* END Add active class on scroll */
});