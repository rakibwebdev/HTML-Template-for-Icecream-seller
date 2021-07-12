(function ($) {
    "use strict";

    jQuery(document).ready(function () {
        jQuery('.home-slider').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                    loop:false,
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
                    nav:false,
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

        // show hide cart modal
        jQuery('.modal-cart').hide();
        jQuery( ".header-cart-btn" ).click(function() {
            jQuery( ".modal-cart" ).show();
        });
        jQuery( ".modal-cart-close" ).click(function() {
            jQuery( ".modal-cart" ).hide();
        });

    });


})(jQuery);