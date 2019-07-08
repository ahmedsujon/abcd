(function ($) {
    "use strict";

    // Preloader 
    $('body').addClass('preloader-active');
    $(window).on('load', function() { 
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(550).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });


    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
            if (scroll < 100) {
            $(".header").removeClass("scroll-menu");
            }else{
                $(".header").addClass("scroll-menu");
            }
    });

    // for menu scroll 
    $('.main-menu nav ul li a').click(function(){
        var hash = this.hash;
        var position = $ (hash) .offset().top;
        $('html').animate({
            scrollTop : position
        },900)
    });
    // for menu scroll 
    $('.footer-menu li a').click(function(){
        var hash = this.hash;
        var position = $ (hash) .offset().top;
        $('html').animate({
            scrollTop : position
        },900)
    });

// menu active class
$('.header-menu ul li:first-child > a').addClass('active');

//for menu active class
$('.header-menu ul li > a').on('click',function () {
    $('.basic-menu li a').removeClass("active");
    $(this).addClass("active");
});

    // magnific popup
    $('.video-btn').magnificPopup({
        type:'iframe',
    });

    // features slider active
    $('.features').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        speed: 1000,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-caret-left"></i>',
        nextArrow: '<i class="fas fa-caret-right"></i>',
        responsive: [
            {
                breakpoint: 991, 
                settings: { 
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: { 
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    // counterUp
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // app screenshot area
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4000,
        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows : false,
        },
        navigation: {
            nextEl: '.fa-caret-right',
            prevEl: '.fa-caret-left',
        },
    });

    // testimonial slider
    $('.slider-for').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-caret-left"></i>',
        nextArrow: '<i class="fas fa-caret-right"></i>',
        fade: false,
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    // WOW active
    new WOW().init();

    //Scroll top 
    $(".scroll-top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });
    $(window).scroll(function (){
        if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn();}
        else{
            $(".scroll-top").fadeOut();
        }
    });

})(jQuery);