// $(window).on('load', () => {
// 	$('.loader').css('display', 'none');
// });

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

	setTimeout(() => {
		$(function(){
	  	$('.typed').typed({
		    contentType: 'html',
		    strings: [
		      'Web Developer',
		      'Software Engineer',
					'PC Gamer',
					'Coffee Lover'
		    ],
		    shuffle: false,
		    typeSpeed: 50,
		    backSpeed: 40,
		    backDelay: 1700,
		    showCursor: true,
				cursorChar: '|',
		  	autoInsertCss: true,
		    loop: true
	  	});
		});
	}, 1000);
});
