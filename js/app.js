$(function() {

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
    var wpImg1 = new Waypoint({
        element: $('#img1'),
        handler: function(direction) {
            $('#img1').addClass("ls-animated fadeInRight");
        },
        offset: "85%"
    });

    var wpImg2 = new Waypoint({
        element: $('#img2'),
        handler: function(direction) {
            $('#img2').addClass("ls-animated fadeInLeft");
        },
        offset: "85%"
    });

    var wpImg3 = new Waypoint({
        element: $('#img3'),
        handler: function(direction) {
            $('#img3').addClass("ls-animated fadeInUp");
        },
        offset: "85%"
    });
});
