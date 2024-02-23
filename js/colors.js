/* const mesureWidth = () => {
	return 500;
}

const openItem = item => {
	const hiddenContent = item.find(".colors__desc");
	const reqWidth = mesureWidth();

	hiddenContent.width(reqWidth);
}

$(".colors__name").on("click", e=> {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const item = $this.closest(".colors__item");

	openItem(item);
});
 */












const colorsName = document.querySelectorAll('.colors__name');
const colorsList = document.querySelector('.colors__list');

colorsList.addEventListener('click', (e) => {

	for (tab of colorsName) {
		if (e.target === tab || e.target === tab.childNodes[1] || tab.parentNode.classList.contains('active')) {
			tab.parentNode.classList.toggle('active');
		}
	}
});

