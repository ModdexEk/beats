const slider = $(".sliders__list").bxSlider({
    pager: false,
    controls: false
});

$(".sliders__left").click(e => {
   e.preventDefault();
   slider.goToNextSlide();
})

$(".sliders__right").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();   
})