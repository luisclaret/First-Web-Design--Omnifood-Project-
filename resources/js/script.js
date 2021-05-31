$(document).ready(function() {

    // For the sticky navigation

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '85%'
    });

    // Scroll of buttons

    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    // Navigation scroll
    

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        // Does a scroll target exist?
            if (target.length) {
                
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Animations on scroll
    $('.section-features').waypoint(function() {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '25%'
    });

    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.section-cities').waypoint(function() {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '25%'
    });

    $('.section-plans').waypoint(function() {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '25%'
    });

    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('js--wp-5');
    });


    // Mobile Navegation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200);
        
        // if (icon.hasClass('menu-outline')) {
        //     icon.addClass('close-outline');
        //     icon.removeClass('menu-outline');
        // } else {
        //     icon.addClass('menu-outline');
        //     icon.removeClass('close-outline');
        // }

        if (icon.attr('name') == 'menu-outline') {
            icon.attr('name', 'close-outline');
        } else {
            icon.attr('name', 'menu-outline');
        }

    });

    $(function(){
        var lastScrollTop = 0, delta = 5;
        $(window).scroll(function(){
            var nowScrollTop = $(this).scrollTop();
            if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
                if ($('.js--main-nav').is(':visible')) {
                    $('.js--main-nav').slideToggle(0);
                }
                
                if ($('.js--nav-icon ion-icon').attr('name') == 'close-outline') {
                    $('.js--nav-icon ion-icon').attr('name', 'menu-outline');
                }


                if (nowScrollTop > lastScrollTop){
                    
                    // ACTION ON
                    // SCROLLING DOWN 
                } else {
                    // ACTION ON
                    // SCROLLING UP 
               }
            lastScrollTop = nowScrollTop;
            }
        });
    });



});
// close-outline