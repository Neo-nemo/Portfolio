/*==================== MENU SHOW Y HIDDEN ====================*/

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

/*===== MENU SHOW =====*/
if (navToggle && navLinks) {
	navToggle.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('show-menu');
		navToggle.setAttribute('aria-expanded', String(isOpen));
		navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
	});

	navLinks.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('show-menu');
			navToggle.setAttribute('aria-expanded', 'false');
			navToggle.setAttribute('aria-label', 'Open navigation');
		});
	});
}


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
// The current page uses static skill text rather than accordion controls.


/*==================== QUALIFICATION TABS ====================*/
// The education section is a static list, so it has no tabs to initialize.


/*==================== SERVICES MODAL ====================*/
// No services modal is present on this portfolio page.


/*==================== PORTFOLIO SWIPER  ====================*/
const portfolioCarousel = document.querySelector('.portfolio__carousel');

if (portfolioCarousel && typeof Swiper !== 'undefined') {
	new Swiper(portfolioCarousel, {
		loop: true,
		spaceBetween: 24,
		slidesPerView: 1,
		pagination: {
			el: '.portfolio__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.portfolio__next',
			prevEl: '.portfolio__previous',
		},
		breakpoints: {
			768: { slidesPerView: 2 },
			1024: { slidesPerView: 3 },
		},
	});
}


/*==================== TESTIMONIAL ====================*/
// No testimonial carousel is present on this portfolio page.


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const header = document.getElementById('header');
const scrollUp = document.getElementById('scroll-up');
const sectionLinks = [...document.querySelectorAll('.nav__links a[href^="#"]')];
const linkedSections = sectionLinks
	.map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
	.filter(({ section }) => section);

const updateScrollState = () => {
	const scrollPosition = window.scrollY;
	header?.classList.toggle('scroll-header', scrollPosition >= 50);
	scrollUp?.classList.toggle('show-scroll', scrollPosition >= 350);

	let currentSection;
	linkedSections.forEach((item) => {
		if (item.section.getBoundingClientRect().top <= 160) currentSection = item;
	});

	sectionLinks.forEach((link) => link.classList.remove('active-link'));
	currentSection?.link.classList.add('active-link');
};

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('load', updateScrollState);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 

scrollUp?.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*==================== DARK LIGHT THEME ====================*/ 
// No theme toggle or dark-theme styles are defined for this page.