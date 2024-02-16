const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team-card__value");
    const textBlock = contentBlock.find(".team-card__content");
    const regHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(regHeight);  
}

const closeEveryItem = container => {
    const items = container.find(".team-card__value");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.team-card__name').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__list");
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("active")) {
    closeEveryItem(container);     
    } else {
    closeEveryItem(container);
    openItem($this);
    }
});
