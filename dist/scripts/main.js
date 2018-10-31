$(document).ready(() => {
	$('.loading').css('display', 'none');

	const navbarHeight = $('.navbar').height();

	//NAVBAR
	$('.navbar__menu__mobile-link').click(() => {
		$('.navbar__menu__list').toggleClass("navbar__menu__list--open");
	});

	$('.navbar__menu__list__link').click(() => {
		$('.navbar__menu__list').toggleClass("navbar__menu__list--open");
	});

	$('.navbar__logo__img').click(() => {
		$('html, body').animate({
			scrollTop: 0
		},'medium');
	});

	$('.navbar__menu__list__link--home').click(() => {
		$('html, body').animate({
			scrollTop: ($('.home').offset().top - navbarHeight)
		},'slow');
	});

	$('.navbar__menu__list__link--about').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about').offset().top - navbarHeight)
		},'slow');
	});

	$('.navbar__menu__list__link--portfolio').click(() => {
		$('html, body').animate({
			scrollTop: ($('.portfolio').offset().top - navbarHeight)
		},'slow');
	});

	$('.navbar__menu__list__link--contact').click(() => {
		$('html, body').animate({
			scrollTop: ($('.contact').offset().top - navbarHeight)
		},'slow');
	});

	//HOME PAGE
	$('.home__expand-arrow').click(() => {
		$('html, body').animate({
			scrollTop: ($('.about').offset().top - navbarHeight)
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
