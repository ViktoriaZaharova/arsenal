$(document).ready(function() {
    $('.gifts-box').click(function () {
       $('.gifts-box').removeClass('gifts-box__check');
       $(this).addClass('gifts-box__check');
    });
});
