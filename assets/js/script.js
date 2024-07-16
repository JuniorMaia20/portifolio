// scripts.js
$(document).ready(function() {
    // Animação das barras de progresso
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var skillsOffset = $('#skills').offset().top - window.innerHeight;
        if (scroll > skillsOffset) {
            $('.progress-bar').each(function() {
                var width = $(this).attr('aria-valuenow');
                $(this).css('width', width + '%');
            });
        }
    });
});
