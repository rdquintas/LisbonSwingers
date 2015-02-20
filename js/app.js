$(document).ready(function() {
    $("#module-header").addClass('show');
    $("#module-hero").addClass('fadeInUp');
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
