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

//*** DISABLE ANIMATIONS WHILE RESIZING SCREEN ***//
let resizeTimer;
window.addEventListener('resize', () => {
	document.body.classList.add('resize-animation-stopper');
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		document.body.classList.remove('resize-animation-stopper');
	}, 400);
});

//*** SHOW ACTIVE ON NAV LINKS ***//
// const activePage = window.location.pathname;
// navItems.forEach((link) => {
// 	if (link.href.includes(`${activePage}`)) {
// 		link.classList.add('active');
// 	}
// });

function loadDestinations(destination) {
	return `
		<div class="card">
			<span>${destination.name}</span>
			<button class="arrow arrow-left">
				&larr;
			</button>
			<p class="destination-description">
				${destination.description}
			</p>
			<div class="distance-time-container">
				<div class="avg-distance">
					<p>avg. distance</p>
					<p>${destination.distance}</p>
				</div>
				<div class="travel-time">
					<p>est. travel time</p>
					<p>${destination.travel}</p>
				</div>
			</div>
			<button class="arrow arrow-right">
				&rarr;
			</button>
		</div>
	`;
}

// FETCH DATA FROM API
async function fetchData() {
	await fetch('data.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			data.destinations.map(loadDestinations);
		})
		.catch((error) => {
			console.error(
				'There has been a problem with your fetch operation:',
				error
			);
		});
}

fetchData();
