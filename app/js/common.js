$(document).ready(function() {
    $('.gifts-box').click(function () {
       $('.gifts-box').removeClass('gifts-box__check');
       $(this).addClass('gifts-box__check');
    });

    $('.mobile-menu .menu-item__dropdown').click(function () {
        $(this).find('.dropdown-menu').slideToggle();
    });

    $('.btn-mobile-menu').click(function () {
        $('.mobile-menu').toggleClass('open');
    });

    $('.btn-close').click(function () {
        $('.mobile-menu').removeClass('open');
    });
});
