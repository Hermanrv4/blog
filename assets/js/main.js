;
(function($) {
    "use strict";

    $(document).ready(function() {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function(e) {
            e.preventDefault();
        })

        /*--------------------
           wow js init
       ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

        /*------------------
           back to top
       ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*------------------------------
           counter section activation
       -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

        /*-------------------------------
            case study filter 
        ---------------------------------*/
        var $caseStudyThreeContainer = $('.case-studies-masonry');
        if ($caseStudyThreeContainer.length > 0) {
            $('.case-studies-masonry').imagesLoaded(function() {
                var caseMasonry = $caseStudyThreeContainer.isotope({
                    itemSelector: '.masonry-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.case-studies-menu li', function() {
                    var filterValue = $(this).attr('data-filter');
                    caseMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click', '.case-studies-menu li', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*---------------------------
            Testimonial carousel
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: false,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
        /*---------------------------
            Testimonial carousel Two
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-02');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: false,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1920: {
                        items: 2
                    }
                }
            });
        }
        /*---------------------------
            BLog Grid carousel
        ---------------------------*/
        var $TestimonialCarousel = $('.blog-grid-carousel');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                }
            });
        }
        /*---------------------------
             case studies carousel 
        ---------------------------*/
        $('.case-studies-slider-active').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            margin: 30,
            center: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    nav: false,
                },
                600: {
                    items: 1,
                    margin: 10,
                    nav: false,
                },
                768: {
                    items: 1,
                    margin: 10,
                },
                992: {
                    items: 1,
                    center: false
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 3
                },
                1440: {
                    items: 3
                }
            }
        })

        // Clinet - active
        $('.client-active-area').owlCarousel({
                loop: true,
                items: 5,
                nav: true,
                margin: 100,
                dots: false,
                navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            })
            /*---------------------------
                header carousel
            ---------------------------*/
        var $headerCarousel = $('.header-slider-one');
        if ($headerCarousel.length > 0) {
            $headerCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    460: {
                        items: 1,
                        nav: false,
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.border-none', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });


    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;

    });


    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function(e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });


})(jQuery);