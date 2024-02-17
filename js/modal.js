$(".form").submit(e=> {
    e.preventDefault();

    $.Fancybox.open({
        src: "#modal",
        type: "inline"
    });
    
});