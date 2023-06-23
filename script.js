var nasaImages = $("#nasa-images");
var input = $("form input");
var prev = $("#prev");
var next = $("#next");
var page = 1;

(function () {
    prev.attr("disabled", "true");
    next.attr("disabled", "true");
})();

$("form button").click(function(e){
    e.preventDefault();
    page = 1;
    showPage(page);
});

prev.click(function (e) {
    showPage(--page);
});

next.click(function (e) {
    showPage(++page);
});


