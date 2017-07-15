$(document).ready(() => {
	$('.mobile-menu').click(() => {
		$('.menu').toggleClass("open");
	});

	$('.nav-home').click(() => {
		$('html, body').animate({
			scrollTop: $('.home-section').position().top
		},'slow');
	});

	$('.nav-about').click(() => {
		$('html, body').animate({
			scrollTop: $('.about-section').position().top
		},'slow');
	});

	$('.nav-portfolio').click(() => {
		$('html, body').animate({
			scrollTop: $('.portfolio-section').position().top
		},'slow');
	});

	$('.nav-contact').click(() => {
		$('html, body').animate({
			scrollTop: $('.contact-section').position().top
		},'slow');
	});
});
