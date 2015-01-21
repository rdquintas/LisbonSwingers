$(function() {
    var _img1 = true;
    //adjust the header background image
    $("#ls-header").backstretch("http://placehold.it/3500x1500", {
        speed: 150
    });


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        console.log(height);
        if (height > 150) {
            if (_img1) {
            	_img1 = false;
                $('.ls-img').transition({
                    animation: 'fade up',
                    duration: '2000ms'
                });
            };
        }
    });

});
