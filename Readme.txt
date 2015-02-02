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

--------------------------------------------------------------------------
http://rdquintas.github.io/LisbonSwingers/grids.html
http://rdquintas.github.io/LisbonSwingers/grids_pb.html

http://rdquintas.github.io/LisbonSwingers/grids_fixed.html
http://rdquintas.github.io/LisbonSwingers/grids_fixed_pb.html

http://rdquintas.github.io/LisbonSwingers/grids_fixed_moldura.html
http://rdquintas.github.io/LisbonSwingers/grids_fixed_moldura_pb.html
**************************************************************************

Imagens responsivas
    <picture>
        <source media="print" srcset="landscape_print.jpg">
            <source media="(max-width: 480px)" srcset="landscape_small.jpg">
                <source media="(max-width: 640px)" srcset="landscape_medium.jpg">
                    <source media="(max-width: 1024px)" srcset="landscape_large.jpg">
                        <img src="landscape_large.jpg" alt="Nymphenburg Castle in Munich during sunset">
    </picture>