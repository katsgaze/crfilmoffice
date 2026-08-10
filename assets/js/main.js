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
    $("#menu")
        .removeClass("animated fadeOutRight")
        .toggleClass("open");

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
/* = Isotope
/*-------------------------------------------------*/
try {
    $('.localizaciones-items').each(function() {

        var $mainContainer = $(this);

        $mainContainer.imagesLoaded(function() {

            var $container = $mainContainer.isotope({
                itemSelector: '.one-item'
            });

            $mainContainer.closest('#localizaciones').find('.filters').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');

                $container.isotope({
                    filter: filterValue
                });
            });

            $mainContainer.closest('#localizaciones').find('.filters').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);

                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    });
} catch(err) {

}

/*-------------------------------------------------*/
/* = Portfolio with border
/*-------------------------------------------------*/
try {
    $('.localizaciones-items.border').each(function() {

        var $mainContainerBorder = $(this);

        $mainContainerBorder.imagesLoaded(function() {

            var $container = $mainContainerBorder.isotope({
                itemSelector: '.one-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.one-item',
                    gutter: 30
                },
                percentPosition: true
            });

            $mainContainerBorder.closest('#localizaciones').find('.filters').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');

                $container.isotope({
                    filter: filterValue
                });
            });

            $mainContainerBorder.closest('#localizaciones').find('.filters').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);

                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    });
} catch(err) {

}

/*-------------------------------------------------*/
/* = Blog masonry
/*-------------------------------------------------*/
try {

    var $blogContainer = $(".masonry-grid");

    $blogContainer.imagesLoaded(function () {

        $blogContainer.isotope({
            itemSelector: ".masonry-item",
            layoutMode: "masonry"
        });

    });

} catch (err) {

}

/*-------------------------------------------------*/
/* = Magnific Popup
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

    $(".popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video").magnificPopup({

        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false

    });

}

/*-------------------------------------------------*/
/* = YouTube lazy load
/*-------------------------------------------------*/
$(".youtube-lazy-play").on("click", function () {

    var $button = $(this);
    var $video = $button.closest(".youtube-lazy");
    var videoId = $video.attr("data-youtube-id");

    if (!videoId || $video.find("iframe").length) {
        return;
    }

    var $iframe = $("<iframe>", {

        class: "youtube-lazy-frame",

        src:
            "https://www.youtube-nocookie.com/embed/" +
            encodeURIComponent(videoId) +
            "?autoplay=1&rel=0",

        title: "Vídeo de YouTube",

        allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",

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