const colorsName = document.querySelectorAll('.colors__name');
const colorsList = document.querySelector('.colors__list');

colorsList.addEventListener('click', (e) => {

	for (tab of colorsName) {
		if (e.target === tab || e.target === tab.childNodes[1] || tab.parentNode.classList.contains('active')) {
			tab.parentNode.classList.toggle('active');
		}
	}
});


