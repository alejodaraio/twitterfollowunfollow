setInterval(function() {
    t = $(".following").find(".follow-button");
    if (!t[0]) {
        window.scrollTo(0, $(document).height());
    } else {
        console.log(t.attr("class"));
        t.trigger("click");
    }
}, 100)
