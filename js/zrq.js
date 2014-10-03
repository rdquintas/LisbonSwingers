$(document).ready(function() {
    // $('#nav-menu').addClass('animated fadeIn');
    $("#nav-menu").velocity("transition.fadeIn", 1000);
    $(".full-image").velocity("transition.slideUpIn", 1000);

    // $('.full-image').addClass('animated fadeInUp');

    $(window).scroll(function() {
        var var1 = $(window).scrollTop();
        console.log("zrq: " + var1);
        // if (height > some_number) {
        //     // do something
        // }
    });

});
