var $ = jQuery.noConflict();

(function ($) {
"use strict";

/*-------------------------------------------------*/
/* = Loader
/*-------------------------------------------------*/
if (typeof Pace !== "undefined") {
    Pace.on("done", function () {
        $("#myloader").fadeOut(500);
    });
} else {
    $("#myloader").fadeOut(500);
}

/*-------------------------------------------------*/
/* = Sticky menu
/*-------------------------------------------------*/
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    if (scroll >= 80) {
        $("header").addClass("fixed-top animated fadeInDown").delay(2000).fadeIn();
        $("header nav").removeClass("animated fadeInDown");
    } else if (scroll <= height) {
        $("header").removeClass("fixed-top animated fadeInDown");
    } else {
        $("header").removeClass("fixed-top animated fadeInDown");
    }

    if (scroll <= 80) {
        $("header nav").addClass("animated fadeInDown").delay(2000).fadeIn();
    }
});

/*-------------------------------------------------*/
/* = Menu
/*-------------------------------------------------*/
$(".menu-button").on("click", function () {
    $("#menu").removeClass("animated fadeOutRight").toggleClass("open");
    $("#menu").addClass("animated slideInRight");
});

$("button.close-menu").on("click", function () {
    $("#menu")
        .removeClass("animated slideInRight")
        .addClass("animated fadeOutRight");

    setTimeout(function () {
        $("#menu").removeClass("open animated fadeOutRight");
    }, 1000);
});

// Close the menu when a normal navigation link is selected.
$(".menu-holder ul > li:not(.submenu) > a").on("click", function () {
    $("#menu").removeClass("open animated slideInRight");
});

/*-------------------------------------------------*/
/* = Home slider
/*-------------------------------------------------*/
if ($.fn.flexslider && $(".flexslider").length) {
    $(window).on("load", function () {
        $(".flexslider").flexslider({
            animation: "fade",
            controlNav: false,
            useCSS: false,
            start: function () {
                $(".slides").show();
            }
        });
    });
}

/*-------------------------------------------------*/
/* = Localizaciones: filter + masonry
/*-------------------------------------------------*/
var $localizaciones = $(".localizaciones-items");

if ($.fn.imagesLoaded && $.fn.isotope && $localizaciones.length) {
    $localizaciones.imagesLoaded(function () {
        var $container = $localizaciones.isotope({
            itemSelector: ".one-item",
            layoutMode: "masonry",
            masonry: {
                columnWidth: ".one-item",
                gutter: 30
            },
            percentPosition: true
        });

        $("#localizaciones .filters").on("click", "li", function () {
            var $filter = $(this);

            $container.isotope({
                filter: $filter.attr("data-filter")
            });

            $filter
                .closest(".filters")
                .find(".is-checked")
                .removeClass("is-checked");

            $filter.addClass("is-checked");
        });
    });
}

/*-------------------------------------------------*/
/* = Lightbox
/*-------------------------------------------------*/
if ($.fn.magnificPopup) {
    $(".localizaciones-items").each(function () {
        $(this).magnificPopup({
            delegate: ".lightbox",
            type: "image",
            gallery: {
                enabled: true
            },
            callbacks: {
                beforeOpen: function () {
                    $("body").css("margin-right", "-17px");
                },
                beforeClose: function () {
                    $("body").css("margin-right", "0");
                }
            }
        });
    });
}

/*-------------------------------------------------*/
/* = YouTube lazy load
/*-------------------------------------------------*/
$(".youtube-lazy-play").on("click", function () {
    var $button = $(this);
    var $video = $button.closest(".youtube-lazy");
    var videoId = $video.data("youtube-id");

    if (!videoId) {
        return;
    }

    var $iframe = $("<iframe>", {
        class: "embed-responsive-item",
        src: "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true,
        referrerpolicy: "strict-origin-when-cross-origin"
    });

    $video.empty().append($iframe);
});

/*-------------------------------------------------*/
/* = Sponsor carousel (home)
/*-------------------------------------------------*/
if ($.fn.owlCarousel && $(".sponsor-carousel").length) {
    $(".sponsor-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                loop: true
            }
        }
    });
}

/*-------------------------------------------------*/
/* = Scroll between sections
/*-------------------------------------------------*/
$("nav ul li a[href^='#'], footer a[href^='#']").on("click", function (event) {
    var target = $(this).attr("href");
    var $target = $(target);

    if (!$target.length) {
        return;
    }

    event.preventDefault();

    $("html, body").stop().animate({
        scrollTop: $target.offset().top - 70
    }, 850);
});

})(jQuery);