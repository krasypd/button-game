
const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	const h = Math.floor(Math.random() * window.innerHeight);
	const w = Math.floor(Math.random() * window.innerWidth);
	btn.style.top = `${h}px`;
	btn.style.left = `${w}px`;

	console.log('bravo bro');
});
