$(document).ready(function () {

    $('#features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    target = target.offset().top;
                    if (window.innerWidth < 767) {
                        target = target - 32;

                        if (document.getElementById('main-nav').contains(this)) {
                            $('#navicon').click();
                        };
                    }
                    
                    $('html,body').animate({
                        scrollTop: target
                    }, 1000);

                    return false;
                }
            }
        });
    });

    $('.animation1').waypoint(function (direction) {
        $('.animation1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.animation2').waypoint(function (direction) {
        $('.animation2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


    $('.animation3').waypoint(function (direction) {
        $('.animation3').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('#navicon').click(function () {
        $('.main-nav').slideToggle(500);

        var icon = $('#navicon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});
