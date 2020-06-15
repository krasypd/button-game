// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function() {
// 	console.log('mouse over me ');
// 	const hight = Math.floor(Math.random() * window.innerHeight);
// 	const width = Math.floor(Math.random() * window.innerWidth);
// 	btn.style.left = `${hight}px`;
// 	btn.style.top = `${width}px`;
// 	console.log(width, hight);
// });

// btn.addEventListener('click', function() {
// 	btn.innerText('ах ти :(');
// 	document.body.style.background = 'green';
// });

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	const h = Math.floor(Math.random() * window.innerHeight);
	const w = Math.floor(Math.random() * window.innerWidth);
	btn.style.top = `${h}px`;
	btn.style.left = `${w}px`;

	console.log('bravo bro');
});
