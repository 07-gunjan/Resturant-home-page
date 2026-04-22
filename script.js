$(document).ready(function () {

    // MENU FILTER
    $(".filters button").click(function () {
        let filter = $(this).attr("data-filter");

        $(".filters button").removeClass("active");
        $(this).addClass("active");

        if (filter === "all") {
            $(".item").fadeIn();
        } else {
            $(".item").hide();
            $('.item[data-category="' + filter + '"]').fadeIn();
        }
    });

    // SMOOTH SCROLL FIXED
    $(".nav-links a").click(function (e) {
        let target = $(this).attr("href");

        if ($(target).length) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top - 60
            }, 600);
        }
    });

    // ORDER BUTTON
    $(".btn").click(function () {
        alert("Order feature coming soon!");
    });

});