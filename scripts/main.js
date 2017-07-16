$(document).ready(() => {
	const navbarHeight = $('.navbar').height();

	$('.mobile-menu').click(() => {
		$('.menu').toggleClass("open");
	});

	$('.nav-a').click(() => {
		$('.menu').toggleClass("open");
	});

	$('.nav-home').click(() => {
		$('html, body').animate({
			scrollTop: $('.home-section').position().top
		},'slow');
	});

	$('.nav-about').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about-section').position().top - navbarHeight)
		},'slow');
	});

	$('.nav-portfolio').click(() => {
		$('html, body').animate({
			scrollTop: ($('.portfolio-section').position().top - navbarHeight)
		},'slow');
	});

	$('.nav-contact').click(() => {
		$('html, body').animate({
			scrollTop: ($('.contact-section').position().top - navbarHeight)
		},'slow');
	});
});
