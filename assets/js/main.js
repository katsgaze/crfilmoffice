var $ = jQuery.noConflict();

(function($) {
"use strict";

/*-------------------------------------------------*/
/* =  loader
/*-------------------------------------------------*/
Pace.on("done", function(){
    $("#myloader").fadeOut(500);
});

/*-------------------------------------------------*/
/* =  Sticky menu
/*-------------------------------------------------*/
$(window).on('scroll', function (){

    var scroll  = $(window).scrollTop();
    var height  = $(window).height();

    if( scroll >= 80 ) {
        $('header').addClass("fixed-top animated fadeInDown").delay(2000).fadeIn();
        $('header nav').removeClass("animated fadeInDown");
    } else if ( scroll <= height ) {
        $('header').removeClass("fixed-top animated fadeInDown");
    } else {
        $('header').removeClass("fixed-top animated fadeInDown");
    }

    if (scroll <= 80) {
        $('header nav').addClass("animated fadeInDown").delay(2000).fadeIn();
    } 
});

/*-------------------------------------------------*/
/* =  Menu
/*-------------------------------------------------*/
try {
    $('.menu-button').on("click",function() {
        $('#menu').toggleClass('open');
        $('#menu').addClass('animated slideInRight');
    });

    $('button.close-menu').on("click",function() {
        $('#menu').removeClass('animated slideInRight');
        $('#menu').addClass('animated fadeOutRight');

        setTimeout(function(){ 
            $('#menu').toggleClass('open');
            $('#menu').removeClass('animated fadeOutRight');
        },1000);
    });

    $('.menu-holder ul > li:not(.submenu) > a').on("click",function() {
        $('#menu').toggleClass('open');
        $('#menu').removeClass('animated slideInRight');
    });

} catch(err) {

}

/*-------------------------------------------------*/
/* =  Slider
/*-------------------------------------------------*/
try {
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            useCSS: false,
            start: function(){
                $('.slides').show();
            }
        });
    });
} catch(err) {

}

/*-------------------------------------------------*/
/* =  Isotope
/*-------------------------------------------------*/
try {
    var $mainContainer=$('.localizaciones-items');

    $mainContainer.imagesLoaded( function(){

        var $container=$('.localizaciones-items').isotope({
            itemSelector:'.one-item'
        });

        $('#localizaciones .filters').on('click','li',function(){
            var filterValue=$(this).attr('data-filter');

            $container.isotope({
                filter:filterValue
            });
        });

        $('#localizaciones .filters').each(function(i,buttonGroup){

            var $buttonGroup=$(buttonGroup);

            $buttonGroup.on('click','li',function(){

                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');

            });

        });
        
    });

} catch(err) {

}

/*-------------------------------------------------*/
/* =  Portfolio with border
/*-------------------------------------------------*/
try {
    var $mainContainerBorder=$('.localizaciones-items.border');

    $mainContainerBorder.imagesLoaded( function(){

        var $container=$('.localizaciones-items.border').isotope({
            itemSelector:'.one-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.one-item',
                gutter: 30
            },
            percentPosition: true
        });

        $('#localizaciones .filters').on('click','li',function(){

            var filterValue=$(this).attr('data-filter');

            $container.isotope({
                filter:filterValue
            });

        });

        $('#localizaciones .filters').each(function(i,buttonGroup){

            var $buttonGroup=$(buttonGroup);

            $buttonGroup.on('click','li',function(){

                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');

            });

        });
        
    });

} catch(err) {

}

/*-------------------------------------------------*/
/* =  blog masonry
/*-------------------------------------------------*/
try {
    var $blogContainer = $('.masonry-grid');

    $blogContainer.imagesLoaded( function(){

        $blogContainer.isotope({
            itemSelector: '.masonry-item',
            layoutMode: 'masonry'
        });

    });

} catch(err) {

}

/*-------------------------------------------------*/
/* =  Magnific popup
/*-------------------------------------------------*/
try {
    $('.localizaciones-items').each(function() { // the containers for all your galleries

        $(this).magnificPopup({

            delegate: '.lightbox',

            type: 'image',

            gallery: {
                enabled:true
            },

            callbacks:{

                beforeOpen:function(){
                    $("body").css({"margin-right":"-17px"})
                },

                beforeClose:function() {
                    $("body").css({"margin-right":"0"});
                }

            },		
        });

    });
			
    $('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video').magnificPopup({

        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false

    });

} catch(err) {

}

})(jQuery);

$(document).ready(function($) {
"use strict";

/*-------------------------------------------------*/
/* =  Carousel
/*-------------------------------------------------*/
try {

    $(".carousel-news").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        autoplay:true,
        autoplayHoverPause:true
    });

    $(".testimonials-carousel").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items:1,
        autoplay:true,
        autoplayHoverPause:true
    });

    $(".image-carousel").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        autoplay:true,
        autoplayHoverPause:true,
        dots:false
    });

    $(".team-carousel").owlCarousel({
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3,
                loop:false
            }
        }
    });

    $(".sponsor-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4,
                loop:true
            }
        }
    });

} catch(err) {

}

/*-------------------------------------------------*/
/* =  Parallax
/*-------------------------------------------------*/
try {
    $('.parallax').scrolly({bgParallax: true});
} catch(err) {

}

/*-------------------------------------------------*/
/* =  Scroll between sections
/*-------------------------------------------------*/
$('nav ul li a[href*=#]').on("click",function(event) {

    var $this = $(this);
    var offset = -70;

    $.scrollTo(
        $this.attr('href'),
        850,
        {
            easing: 'swing',
            offset: offset,
            'axis':'y'
        }
    );

    event.preventDefault();

});

$('footer a[href*=#]').on("click",function(event) {

    var $this = $(this);
    var offset = -70;

    $.scrollTo(
        $this.attr('href'),
        1000,
        {
            easing: 'swing',
            offset: offset,
            'axis':'y'
        }
    );

    event.preventDefault();

});

});