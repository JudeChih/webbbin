$(function() {
    //電腦版nav fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.first-nav').addClass('nav-scroll');
        } else {
            $('.first-nav').removeClass('nav-scroll');
        }
    });

});