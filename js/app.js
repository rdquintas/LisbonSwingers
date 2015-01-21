$(function() {
    var _img1 = true;

    //adjust the header background image
    // $("#ls-header").backstretch("http://placehold.it/3500x1500", {
    $("#ls-header").backstretch("img/header-large.jpg", {
        speed: 150
    });


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        console.log(height);
        if (height > 150) {
            $('#img1').addClass("ls-animated fadeInRight");
        }
        if (height > 350) {
            $('#img2').addClass("ls-animated fadeInLeft");
        }
        if (height > 550) {
            $('#img3').addClass("ls-animated fadeInUp");
        }
    });
});
