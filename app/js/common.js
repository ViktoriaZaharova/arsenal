$(document).ready(function () {


    $('.gifts-box').click(function () {
        $('.gifts-box').removeClass('gifts-box__check');
        $(this).addClass('gifts-box__check');
    });

    $('.mobile-menu .menu-item__dropdown .menu-item').click(function (e) {
        e.preventDefault();
        $(this).siblings('.dropdown-menu').slideToggle();
    });

    $('.btn-mobile-menu').click(function () {
        $('.mobile-menu').toggleClass('open');
    });

    $('.btn-close').click(function () {
        $('.mobile-menu').removeClass('open');
    });

    var activeStep = 1;

    $('.calc-test__total .btn-next').click(function (e) {
        e.preventDefault();
        $('.calc-test__body-box').hide().eq(activeStep++).show();

        if(activeStep == $('.calc-test__body-box').length) {
            $(this).hide();
            $('.calc-test__total button').show();
        }

        $('.readiness-scale__line .bg-line').css("width", "+=25%");

        $('.readiness-scale').find('.color-blue').text(parseFloat($('.readiness-scale .color-blue').text()) + 25);

    });

    $('.calc-test__total .btn-back').click(function (e) {
        e.preventDefault();
        $('.calc-test__body-box').hide().eq(activeStep--).show();
        $('.readiness-scale__line .bg-line').css("width", "-=25%");
        $('.readiness-scale').find('.color-blue').text(parseFloat($('.readiness-scale .color-blue').text()) - 25);

    });

    $('[data-fancybox="images"]').fancybox();
    $('[data-fancybox="gallery"]').fancybox();

});
