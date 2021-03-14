// jshint esversion:6
$(".first").click(() => {
    animation(".first");
})
$(".second").click(() => {
    animation(".second");
})
$(".third").click(() => {
    animation(".third");
})
$(".fourth").click(() => {
    animation(".fourth");
})
$(".fifth").click(() => {
    animation(".fifth");
})

const animation = (className) => {

    removeClass();
    $(".cards").not(`${className}`).removeClass("col-2 div-circular").addClass("col-1 div-capsule");
    $(`${className}`).removeClass("col-1 div-capsule").addClass("col-6 div-circular")
}

const removeClass = () => {
    if($('.first').hasClass("col-6")) {
        $(".first").removeClass("col-6").addClass("col-1")
    }
    if($('.second').hasClass("col-6")) {
        $(".second").removeClass("col-6").addClass("col-1")
    }
    if($('.third').hasClass("col-6")) {
        $(".third").removeClass("col-6").addClass("col-1")
    }
    if($('.fourth').hasClass("col-6")) {
        $(".fourth").removeClass("col-6").addClass("col-1")
    }
    if($('.fifth').hasClass("col-6")) {
        $(".fifth").removeClass("col-6").addClass("col-1")
    }
}