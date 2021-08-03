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
        jQuery( ".cart-icon" ).click(function() {
            jQuery( ".modal-cart" ).show();
        });

        //cart-edit-info-button
        //jQuery('.cart-edit-info-container').hide();
        jQuery( ".cart-edit-info-btn" ).click(function() {
            jQuery( ".cart-edit-info-container" ).show();
        });

        // //cart radio
        // $('.radio-group .radio').click(function(){
        //     $(this).parent().find('.radio').removeClass('selected');
        //     $(this).addClass('selected');
        //     var val = $(this).attr('data-value');
        //     //alert(val);
        //     $(this).parent().find('input').val(val);
        // });

        // otjer address field
        jQuery(".other-address-field").hide();
        // jQuery(".other-btn-note").prop('checked', false);
        //  jQuery( ".other-btn-note" ).click(function() {
        //     jQuery( ".other-address-field" ).show();
        // });
        // $(".other-btn-note input:checkbox").change(function() {
        //     var ischecked= $(this).is(':checked');
        //     if(!ischecked)
        //       alert('uncheckd ' + $(this).val());
        // }); 
        jQuery('.check-btn-note').on('change', function() {
            if(jQuery(this).is(":checked")) {
                jQuery( ".other-address-field" ).show();
                jQuery(".other-input").addClass('select-other');
            }
            else{
                jQuery( ".other-address-field" ).hide();
                jQuery(".other-input").removeClass('select-other');
            }
        });
        

        //shop page
        jQuery('#shoptab2').hide();
        jQuery('.new-product-btn').addClass("active");


        jQuery('.new-product-btn').click(function(){
            jQuery('#shoptab1').show();
            jQuery('#shoptab2').hide();
            jQuery('.popular-product-btn').removeClass("active");
            jQuery('.new-product-btn').addClass("active");
        });

        jQuery('.popular-product-btn').click(function(){
            jQuery('#shoptab2').show();
            jQuery('#shoptab1').hide();
            jQuery('.popular-product-btn').addClass("active");
            jQuery('.new-product-btn').removeClass("active");
        });

        //nav active
        var selector = '.main-nav ul li';

        jQuery(selector).on('click', function(){
            jQuery(selector).removeClass('active');
            jQuery(this).addClass('active');
        });


        // account information side tab
        jQuery('.tab-account-info').addClass("active");
        jQuery('.account-info-wrapper').show();
        jQuery('.my-order-wrapper').hide();
        jQuery('.delivary-wrapper').hide();
        jQuery('.payment-wrapper').hide();
        jQuery('.logout-wrapper').hide();
        jQuery('.tab-account-info').click(function(){
            jQuery('.account-info-wrapper').show();
            jQuery('.tab-account-info').addClass("active");
            jQuery('.tab-my-order').removeClass("active");
            jQuery('.tab-delivery').removeClass("active");
            jQuery('.tab-payment').removeClass("active");
            jQuery('.tab-logout').removeClass("active");
            jQuery('.my-order-wrapper').hide();
            jQuery('.delivary-wrapper').hide();
            jQuery('.payment-wrapper').hide();
            jQuery('.logout-wrapper').hide();
        });
        jQuery('.tab-my-order').click(function(){
            jQuery('.my-order-wrapper').show();
            jQuery('.tab-my-order').addClass("active");
            jQuery('.tab-account-info').removeClass("active");
            jQuery('.tab-delivery').removeClass("active");
            jQuery('.tab-payment').removeClass("active");
            jQuery('.tab-logout').removeClass("active");
            jQuery('.account-info-wrapper').hide();
            jQuery('.delivary-wrapper').hide();
            jQuery('.payment-wrapper').hide();
            jQuery('.logout-wrapper').hide();
        });
        jQuery('.tab-delivery').click(function(){
            jQuery('.delivary-wrapper').show();
            jQuery('.tab-delivery').addClass("active");
            jQuery('.tab-account-info').removeClass("active");
            jQuery('.tab-my-order').removeClass("active");
            jQuery('.tab-payment').removeClass("active");
            jQuery('.tab-logout').removeClass("active");
            jQuery('.account-info-wrapper').hide();
            jQuery('.my-order-wrapper').hide();
            jQuery('.payment-wrapper').hide();
            jQuery('.logout-wrapper').hide();
        });
        jQuery('.tab-payment').click(function(){
            jQuery('.payment-wrapper').show();
            jQuery('.tab-payment').addClass("active");
            jQuery('.tab-account-info').removeClass("active");
            jQuery('.tab-my-order').removeClass("active");
            jQuery('.tab-delivery').removeClass("active");
            jQuery('.tab-logout').removeClass("active");
            jQuery('.account-info-wrapper').hide();
            jQuery('.my-order-wrapper').hide();
            jQuery('.delivary-wrapper').hide();
            jQuery('.logout-wrapper').hide();
        });
        jQuery('.tab-logout').click(function(){
            jQuery('.logout-wrapper').show();
            jQuery('.tab-logout').addClass("active");
            jQuery('.tab-account-info').removeClass("active");
            jQuery('.tab-my-order').removeClass("active");
            jQuery('.tab-delivery').removeClass("active");
            jQuery('.tab-payment').removeClass("active");
            jQuery('.account-info-wrapper').hide();
            jQuery('.my-order-wrapper').hide();
            jQuery('.delivary-wrapper').hide();
            jQuery('.payment-wrapper').hide();
        });
        


        //account information form
        jQuery('.edit-account-info').hide();
        jQuery('.account-edit-btn').click(function(){
            jQuery('.edit-account-info').show();
            jQuery('.show-account-info').hide();
        });

        jQuery('.edit-account-cancel-btn').click(function(){
            jQuery('.edit-account-info').hide();
            jQuery('.show-account-info').show();
        });
        
        // order ongoing and complete tab
        jQuery('.completed-order-container').hide();
        jQuery('.ongoing-order-btn').addClass("active");


        jQuery('.ongoing-order-btn').click(function(){
            jQuery('.ongoing-order-container').show();
            jQuery('.completed-order-container').hide();
            jQuery('.complete-order-btn').removeClass("active");
            jQuery('.ongoing-order-btn').addClass("active");
        });

        jQuery('.complete-order-btn').click(function(){
            jQuery('.completed-order-container').show();
            jQuery('.ongoing-order-container').hide();
            jQuery('.complete-order-btn').addClass("active");
            jQuery('.ongoing-order-btn').removeClass("active");
        });


        //login modal
        jQuery('.login-logout-modal').hide();
        jQuery('.header-login-btn').click(function(){
            jQuery('.login-logout-modal').show();
        });
        jQuery('.logout-back-btn').click(function(){
            jQuery('.login-logout-modal').hide();
        });
        jQuery('.header-logout-btn').click(function(){
            jQuery('.login-logout-modal').show();
        });
        
        jQuery('.contact-us-login-btn').click(function(){
            jQuery('.login-logout-modal').show();
        });

        //shop side bar
        var selector = '.shop-side-bar ul li';

        jQuery(selector).on('click', function(){
            jQuery(selector).removeClass('cat-active');
            jQuery(this).addClass('cat-active');
        });

        //payment selected
        var selector = '.payment-btns li';

        jQuery(selector).on('click', function(){
            jQuery(selector).removeClass('select-payment');
            jQuery(this).addClass('select-payment');
        });

        //delivery selected
        var deliveryselector = '.delivery-details-btns li';

        jQuery(deliveryselector).on('click', function(){
            jQuery(deliveryselector).removeClass('select-delivery');
            jQuery(this).addClass('select-delivery');
        });    
          

    });

    //preloader
    jQuery(window).on('load', function () {
        jQuery('#preloader').hide();
    });


})(jQuery);