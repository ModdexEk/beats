$(".interactive-avatar__link").click (e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const curItem = $this.closest(".interactive-avatar");

    curItem.addClass("interactive-avatar--activ").siblings().removeClass("interactive-avatar--activ");
})