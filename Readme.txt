http://stackoverflow.com/questions/26335347/packery-and-imagesloaded-plugin-not-working

$(document).ready(function(){

    var cnt = $("img").length;
    $("img").one("load", function() {
        cnt--;

        // If all images are loaded, init Packery
        if (cnt === 0)
        {
            $(".js-packery").packery({
               itemSelector: "packery-item"
            });
        }

    }).each(function() {
      if(this.complete) $(this).load();
    });

});