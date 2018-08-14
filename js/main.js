function parallax() {
	let layer_1 = document.getElementById('layer_1');
	let layer_2 = document.getElementById('layer_2');
	let layer_3 = document.getElementById('layer_3');
	let layer_4 = document.getElementById('layer_4');

	layer_1.style.top = -(window.pageYOffset / 3) + 'px';
	layer_2.style.top = -(window.pageYOffset / 6) + 'px';
	layer_3.style.top = -(window.pageYOffset / 7) + 'px';
	layer_4.style.top = -(window.pageYOffset / 7) + 'px';
}

window.addEventListener("scroll", parallax, false);
