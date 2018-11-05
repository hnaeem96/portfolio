var mobileMenuLink = document.querySelector('.navbar__menu__mobile-link');
var mobileMenuList = document.querySelector('.navbar__menu__list');
var menuHome = document.querySelector('.navbar__menu__list__link--home');
var menuAbout = document.querySelector('.navbar__menu__list__link--about');
var menuPortfolio = document.querySelector('.navbar__menu__list__link--portfolio');
var menuContact = document.querySelector('.navbar__menu__list__link--contact');
var homeSection = document.querySelector('.home');
var aboutSection = document.querySelector('.about');
var portfolioSection = document.querySelector('.portfolio');
var contactSection = document.querySelector('.contact');
var navbar = document.querySelector('.navbar');
var navbarLogo = document.querySelector('.navbar__logo');
var expandArrow = document.querySelector('.home__expand-arrow');
var resume = document.querySelector('.resume');
var resumeOpenButton = document.querySelector('.footer__container__btn--resume');
var resumeCloseButton = document.querySelector('.resume__close');
var loadingScreen = document.querySelector('.loading');

function removeLoadingScreen() {
  loadingScreen.style.display = 'none';
}

function scroll(destination) {
	var startingPosition = window.pageYOffset;
	var endingPosition = destination.offsetTop - navbar.offsetHeight;
	var difference = endingPosition - startingPosition;

	window.scrollTo({
		left: 0,
		top: startingPosition + difference,
		behavior: 'smooth',
	});
}

if (
	document.readyState === 'complete' ||
	(document.readyState !== 'loading' && !document.documentElement.doScroll)) {
	removeLoadingScreen();
} else {
	document.addEventListener('DOMContentLoaded', removeLoadingScreen);
}

navbarLogo.onclick = function() {
	scroll(homeSection);
}

mobileMenuLink.onclick = function() {
	mobileMenuList.classList.toggle('navbar__menu__list--open');
}

menuHome.onclick = function() {
	scroll(homeSection)
	mobileMenuList.classList.toggle('navbar__menu__list--open');
}

menuAbout.onclick = function () {
	scroll(aboutSection)
	mobileMenuList.classList.toggle('navbar__menu__list--open');
}

menuPortfolio.onclick = function () {
	scroll(portfolioSection)
	mobileMenuList.classList.toggle('navbar__menu__list--open');
}

menuContact.onclick = function () {
	scroll(contactSection)
	mobileMenuList.classList.toggle('navbar__menu__list--open');
}

expandArrow.onclick = function() {
	scroll(aboutSection);
}

resumeOpenButton.onclick = function() {
	resume.style.transform = 'none';
	document.body.classList.add('resume__open');
}

resumeCloseButton.onclick = function() {
	resume.style.transform = 'translateX(100%)';
	document.body.classList.remove('resume__open');
}
