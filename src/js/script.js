// HAMBURGER MENU
const menuBtn = document.querySelector('.navbar-toggle');
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav-items a');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
		sideBar.classList.add('active');
		overlay.classList.add('active');
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
		sideBar.classList.remove('active');
		overlay.classList.remove('active');
	}
});

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		menuBtn.classList.remove('open');
		menuOpen = false;
		sideBar.classList.remove('active');
		overlay.classList.remove('active');
	});
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('overlay')) {
		if (menuOpen) {
			menuBtn.classList.remove('open');
			menuOpen = false;
			sideBar.classList.remove('active');
			overlay.classList.remove('active');
		}
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		if (menuOpen) {
			menuBtn.classList.remove('open');
			menuOpen = false;
			sideBar.classList.remove('active');
			overlay.classList.remove('active');
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
