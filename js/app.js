$(document).ready(function() {
    $("#module-header").addClass('show');
    $("#module-hero").addClass('fadeInUp');

    var _iv_normal = 7; // random percent for NORMAL squares
    var _iv_small = 90; // random percent for SMALL squares
    var _iv_big = 3; // random percent for BIG squares

    //Check images loaded
    var cnt = $("img").length;
    $("img").one("load", function() {
        cnt--;

        // If all images are loaded, init Packery
        if (cnt === 0) {
            // randomizeDIVs();
            // doReflow();
        }

    }).each(function() {
        if (this.complete) $(this).load();
    });

    // randomizeDIVs();
    // doReflow();


    $(window).resize(function() {
        // location.reload(true);
    });


    function randomizeDIVs() {
        var cards = $(".item");
        $.each(cards, function(key, value) {
            $(this).addClass(randomizeDivSize());

            var aaa = $(this).css("height");
            var arr = aaa.split("px");
            aaa = arr[0] - 5;
            aaa = aaa + "px";
            // $(this).css("height", aaa);

            var target = Math.floor(Math.random() * cards.length - 1) + 1;
            var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
            cards.eq(target).before(cards.eq(target2));
        });
    }

    function doReflow() {
        var $container = $('.container').packery({
            itemSelector: '.item'
        });

        // $container.imagesLoaded(function() {
        //     $container.packery();
        // });

    }

    function randomizeDivSize() {
        var rnd = Math.floor((Math.random() * 100) + 1);
        var boxSize = "item";

        if (rnd >= 0 && rnd < _iv_normal) {
            boxSize = "item";
        }

        if (rnd >= _iv_normal && rnd < _iv_normal + _iv_small) {
            boxSize = "item small";
        }

        if (rnd >= _iv_normal + _iv_small && rnd <= _iv_normal + _iv_small + _iv_big) {
            boxSize = "item big";
        }

 boxSize = "item small";
        return boxSize;
    }

});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 550) {
        $("#module-photos-1 .img1").addClass('fadeInUp');
    }
    if (y > 850) {
        $("#module-photos-1 .img2").addClass('fadeInUp');
    }
    if (y > 1550) {
        $("#module-photos-2 .img1").addClass('fadeInUp');
        $("#module-photos-2 .img2").addClass('fadeInUp');
    }
});
