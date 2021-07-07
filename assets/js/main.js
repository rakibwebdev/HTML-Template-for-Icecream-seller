(function ($) {
    "use strict";

    jQuery(document).ready(function () {
        jQuery('.home-slider').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            dots: true,
            dotClass: 'owl-dot',
            dotsClass: 'owl-dots',
            nav: false,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
        jQuery('.testimonial-slider').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false,
                    dots: true,
                    dotsEach: true,
                    navText : ['<img src="./assets/img/Arrow - Left.svg" alt="">','<img src="./assets/img/Arrow - Right.svg" alt="">']
                }
            }
        });
    });


})(jQuery);