;
(function( $ ) {



    $('.brands-slider__items').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $(window).scroll(function() {

        var header = $('.header');

        if($( window ).scrollTop() > 0 ) {
            header.addClass( 'header-on-scroll' );
        } else {
            header.removeClass( 'header-on-scroll' );
        }

    });

    $(document).ready(function(){
        var lastScrollTop = 0;
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                // Downscroll code
                $('header').removeClass('scrolled-up').addClass('scrolled-down');
            } else {
                // Upscroll code
                $('header').removeClass('scrolled-down').addClass('scrolled-up');
            }
            if (st === 0) {
                // If scrolled to the top
                $('header').removeClass('scrolled-down scrolled-up');
            }
            lastScrollTop = st;
        });
    });



    $(document).ready(function(){
        // Slick slider configuration
        var slickSettings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };

        // Initialize the first tab and its slider
        $('.tab-content').first().addClass('active');
        $('.tab-content.active .slider').slick(slickSettings);

        // Handle tab switching
        $('.tab-links a').on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');

            // Hide all tab contents and remove active class from links
            $('.tab-content').removeClass('active');
            $('.tab-links li').removeClass('active');

            // Show the target tab content and add active class to the clicked link
            $(target).addClass('active');
            $(this).parent().addClass('active');

            // Reinitialize Slick slider for the active tab if not already initialized
            if (!$(target).find('.slick-initialized').length) {
                $(target).find('.slider').slick(slickSettings);
            }
        });
    });

    $('.banners-slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    });


    $('.slider-products').slick({
        dots: true,
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(document).ready(function() {
        $('.footer__toggler').click(function() {
            $(this).closest('.footer__menu-title').next('.footer__menu-expand').toggle('fast');
            $(this).toggleClass('footer__toggler-open');
        });
    });

    $(document).ready(function() {
        $('#burgerMenuOpen').click(function() {
            $(this).toggleClass('footer__toggler-open');
        });
    });

    $(document).ready(function() {
        $('#burgerMenuOpen, #closeMobileMenu').click(function() {
            $('.header-mobile-menu').toggleClass('header-mobile-menu-open');
            $('body').toggleClass('no-scroll');
        });
    });

    $('#closeMobileMenu').click(function() {

    });



    $(document).ready(function() {
        // Handle click on openSubMenu
        $('.openSubMenu').on('click', function() {
            var $subMenu = $(this).closest('.mobile-menu-item').find('.sub-menu');
            $subMenu.toggle('fast');

            // Get the text of the active mobile-menu-link
            var activeText = $(this).siblings('.mobile-menu-link').text().trim();

            // Update the #activeMenuItem span with the active menu item text
            $('#activeMenuItem').text(activeText).data('activeSubMenu', $subMenu);

            // Toggle the header-logo-mobile-text class on .header-logo-mobile
            $('.header-logo-mobile').toggleClass('header-logo-mobile-text');

            // Toggle the #activeMenuItem-active class on #activeMenuItem
            $('#activeMenuItem').toggleClass('activeMenuItem-active');
        });

        // Handle click on #activeMenuItem
        $('#activeMenuItem').on('click', function() {
            var $this = $(this);
            var $subMenu = $this.data('activeSubMenu');

            if ($subMenu) {
                $subMenu.toggle('fast');
            }

            // Remove text from #activeMenuItem
            $this.text('');

            // Toggle the header-logo-mobile-text class on .header-logo-mobile
            $('.header-logo-mobile').toggleClass('header-logo-mobile-text');

            // Toggle the #activeMenuItem-active class on #activeMenuItem
            $this.toggleClass('activeMenuItem-active');
        });
    });


    $(document).ready(function() {
        $('.career__block-btn').click(function() {
            $(this).next('.career__block-hidden').toggle('fast');
        });
    });

    $(document).ready(function() {
        $('#openPopUp1, #closePopupContactUs').click(function() {
            $('#contactUsPopUp').toggle('fast');
        });
    });

    $(document).ready(function() {
        $('#openPopUp2, #closePopupCareer').click(function() {
            $('#careerUsPopUp').toggle('fast');
        });
    });

    $(document).ready(function() {
        $('#avatar').change(function() {
            $('label[for="avatar"]').addClass('file-uploaded');
        });
    });

}( jQuery ));

