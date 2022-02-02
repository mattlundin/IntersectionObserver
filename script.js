const section = document.querySelector('section');
const images = document.querySelectorAll('img');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
				entry.target.style.transform = 'scale(1)';
				section.style.backgroundColor = entry.target.getAttribute('data-color');
			} else {
				entry.target.style.opacity = 0;
				entry.target.style.transform = 'scale(0.5)';
			}
		});
	},
	{
		threshold: 0.55,
	},
);

images.forEach((el, i) => {
	observer.observe(el);
});
