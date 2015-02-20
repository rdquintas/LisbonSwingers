$(function() {

    // Side-Bar


    $('#toggle-icon').on("click", function(e) {
        e.preventDefault();
        $('.ui.sidebar').sidebar('toggle');
    });

    // Scroll-tos
    $('.ls-link-menu-1').on("click", function(e) {
        e.preventDefault();
        $('#ls-link-menu-1').ScrollTo({
            duration: 750,
            easing: 'linear'
        });
    });

    $('.ls-link-menu-2').on("click", function(e) {
        e.preventDefault();
        $('#ls-link-menu-2').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    });

    // Poppups
    $('.ls-item-guy').popup();

    // Animations (waypoints)
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height <= 0) {
            $('#img1').removeClass("ls-animated fadeInRight");
            $('#img2').removeClass("ls-animated fadeInLeft");
            $('#img3').removeClass("ls-animated fadeInUp");
        }

        if (height > 100) {
            $('#img1').addClass("ls-animated fadeInRight");
        }

        if (height > 220) {
            $('#img2').addClass("ls-animated fadeInLeft");
        }

        if (height > 600) {
            $('#img3').addClass("ls-animated fadeInUp");
        }

    });

});
