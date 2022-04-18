function scrollTo(element) {
    window.scroll ({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

var zakaz_a = document.querySelector("#zakaz_a");
var menu = document.querySelector("#menu");


zakaz_a.addEventListener("click", () => {
    scrollTo(menu);
})

