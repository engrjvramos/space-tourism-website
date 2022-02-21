//*** MOBILE NAV TOGGLE ***//
const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItems = document.querySelectorAll('.nav-items a');
const overlay = document.querySelector('.nav-overlay');

const openMobileNav = () => {
	primaryNav.setAttribute('data-visible', true);
	overlay.setAttribute('data-visible', true);
	navToggle.setAttribute('aria-expanded', true);
};

const closeMobileNav = () => {
	primaryNav.setAttribute('data-visible', false);
	overlay.setAttribute('data-visible', false);
	navToggle.setAttribute('aria-expanded', false);
};

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');

	if (visibility === 'false') {
		openMobileNav();
	} else if (visibility === 'true') {
		closeMobileNav();
	}
});

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		closeMobileNav();
	});
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav-overlay')) {
		closeMobileNav();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const visibility = primaryNav.getAttribute('data-visible');
		if (visibility === 'true') {
			closeMobileNav();
		}
	}
});

// ACTIVE CLASS NAV-ITEMS
const activePage = window.location.pathname;
navItems.forEach((link) => {
	if (link.href.includes(`${activePage}`)) {
		link.classList.add('active');
	}
});
