/*=============================================================================
 * GLOBAL VARS
 *=============================================================================*/
var _iv_normal = 7; // random percent for NORMAL squares
var _iv_small = 90; // random percent for SMALL squares
var _iv_big = 3; // random percent for BIG squares

// Hide the pre-loader and start doing stuff
window.onload = function() {
    $("#module-preloader").hide();
    $("#module-header").fadeIn(2500);
    $("#module-hero").addClass('fadeInUp');
}();

// Check guys images are loaded
var imgGuysCounter = $("#module-guys img").length;
// console.log("imgGuysCounter: " + imgGuysCounter);
$("#module-guys img").on("load", function() {
    imgGuysCounter--;
    // console.log("img src: " + this.src);
    // If all images are loaded, init Packery
    if (imgGuysCounter === 0) {
        // console.log("All images loaded. Start the party");
        alert("ok 1628");
        randomizeDIVs();
        doReflow();
    }
});

$("#module-guys img").each(function() {
    if (this.complete) {
        $(this).load();
    }
});


// $(window).load(function() {
//     randomizeDIVs();
//     doReflow();
// });


$(document).ready(function() {

    //Check on scroll to display images
    $(document).on("scroll", function() {
        if (isScrolledIntoView("#module-photos-1 .img1")) {
            $("#module-photos-1 .img1").addClass('fadeInUp');
        }

        if (isScrolledIntoView("#module-photos-1 .img2")) {
            $("#module-photos-1 .img2").addClass('fadeInUp');
        }

        if (isScrolledIntoView("#module-photos-2 .img1")) {
            $("#module-photos-2 .img1").addClass('fadeInUp');
        }

        if (isScrolledIntoView("#module-photos-2 .img2")) {
            $("#module-photos-2 .img2").addClass('fadeInUp');
        }

        if (isScrolledIntoView("#module-contacts .img1")) {
            $("#module-contacts .img1").addClass('fadeInUp');
        }

    });

    /*=============================================================================
     * EVENT HANDLING
     *=============================================================================*/

    $("#module-header .guys").on("click", function(e) {
        e.preventDefault();
        if ($("#module-header .toggle").is(":visible")) {
            $("#module-header .toggle .open").toggleClass('hide-me');
            $("#module-header .toggle .close").toggleClass('hide-me');
            $("#module-header nav").toggle();
        }

        $('#module-guys').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    });

    $("#module-header .music").on("click", function(e) {
        e.preventDefault();
        if ($("#module-header .toggle").is(":visible")) {
            $("#module-header .toggle .open").toggleClass('hide-me');
            $("#module-header .toggle .close").toggleClass('hide-me');
            $("#module-header nav").toggle();
        }

        $('#module-music').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    });

    $("#module-header .contacts").on("click", function(e) {
        e.preventDefault();
        if ($("#module-header .toggle").is(":visible")) {
            $("#module-header .toggle .open").toggleClass('hide-me');
            $("#module-header .toggle .close").toggleClass('hide-me');
            $("#module-header nav").toggle();
        }

        $('#module-contacts').ScrollTo({
            duration: 1000,
            easing: 'linear'
        });
    });

    $("#module-header .toggle .open").on("click", function(e) {
        e.preventDefault();
        $("#module-header .toggle .open").toggleClass('hide-me');
        $("#module-header .toggle .close").toggleClass('hide-me');
        $("#module-header nav").fadeIn(200);
        $("#module-header nav a.guys").addClass("fadeInUp");
        $("#module-header nav a.music").addClass("fadeInUp");
        $("#module-header nav a.contacts").addClass("fadeInUp");
    });

    $("#module-header .toggle .close").on("click", function(e) {
        e.preventDefault();
        $("#module-header .toggle .open").toggleClass('hide-me');
        $("#module-header .toggle .close").toggleClass('hide-me');
        $("#module-header nav").fadeOut(200);
    });

    $(window).resize(function() {
        var width = $(window).width();
        if (width < 768) {
            $("#module-header .toggle .open").removeClass('hide-me');
            $("#module-header .toggle .close").addClass('hide-me');
            $("#module-header nav").removeClass("mobile");
        }

    });

    /*=============================================================================
     * TOOLTIPS - HANDLE CLICK EVENTS
     *=============================================================================*/
    $(".item").on("click", function(e) {

        if ($(this).children(".tooltip").is(":visible")) {
            $(this).children(".tooltip").hide(200);
            return;
        }

        $(".tooltip").each(function() {
            $(this).hide(200);
        });

        $(this).css("overflow", "visible");

        $(this).children(".tooltip").show(200, function() {
            var tt_left = $(this).offset().left;
            var tt_top = $(this).offset().top;
            var tt_width = $(this).width();

            if (tt_left + tt_width > window.innerWidth) {
                $(this).offset({
                    top: tt_top,
                    left: tt_left - tt_width
                });
            }
        });
    });


    $(".tooltip").on("mouseleave", function(e) {
        $(this).hide(200);
    });
}); // end .ready()


/*=============================================================================
 * WAYPOINTS
 *=============================================================================*/
function isScrolledIntoView(elem) {
    var el = $(elem)[0];
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    var isVisible = (elemTop <= window.innerHeight);
    return isVisible;
}


/*=============================================================================
 * RANDOMIZE DIV LOCATION AND SIZE
 *=============================================================================*/
function randomizeDIVs() {
    var cards = $(".item");
    $.each(cards, function(key, value) {
        $(this).addClass(randomizeDivSize());

        var imgDivHeight = $(this).children("img").css("height").split("px")[0];

        $(this).css("height", imgDivHeight);

        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    });

}

function doReflow() {
    var $container = $('.container').packery({
        itemSelector: '.item'
    });
}

function randomizeDivSize() {
    var rnd = Math.floor((Math.random() * 100) + 1);
    var boxSize = "size-normal";

    if (rnd >= 0 && rnd < _iv_normal) {
        boxSize = "size-normal";
    }

    if (rnd >= _iv_normal && rnd < _iv_normal + _iv_small) {
        boxSize = "size-small";
    }

    if (rnd >= _iv_normal + _iv_small && rnd <= _iv_normal + _iv_small + _iv_big) {
        boxSize = "size-big";
    }

    return boxSize;
}
