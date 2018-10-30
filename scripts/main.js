$(document).ready(() => {
	$('.loader').css('display', 'none');
	setTimeout(() => {
		$('.container, .transition-arrow').css('opacity', '1');
	}, 500);

	const navbarHeight = $('.navbar').height();

	//NAVBAR
	$('.mobile-menu').click(() => {
		$('.menu').toggleClass("open");
	});

	$('.nav-a').click(() => {
		$('.menu').toggleClass("open");
	});

	$('.logo img').click(() => {
		$('html, body').animate({
			scrollTop: 0
		},'medium');
	});

	$('.nav-home').click(() => {
		$('html, body').animate({
			scrollTop: ($('.home-section').offset().top - navbarHeight)
		},'slow');
	});

	$('.nav-about').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about-section').offset().top - navbarHeight)
		},'slow');
	});

	$('.nav-portfolio').click(() => {
		$('html, body').animate({
			scrollTop: ($('.portfolio-section').offset().top - navbarHeight)
		},'slow');
	});

	$('.nav-contact').click(() => {
		$('html, body').animate({
			scrollTop: ($('.contact-section').offset().top - navbarHeight)
		},'slow');
	});

	//HOME PAGE
	$('.transition-arrow').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about-section').offset().top - navbarHeight)
		}, 'slow');
	});

	//RESUME
	$('.resume-btn').click(() => {
		$('.resume').css('transform', 'none');
		$('body').addClass('resume-open')
	})

	$('.resume-close').click(() => {
		$('.resume').css('transform', 'translateX(100%)');
		$('body').removeClass('resume-open');
	});
});
