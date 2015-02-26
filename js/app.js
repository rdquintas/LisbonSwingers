$(document).ready(function() {
    var _template = Handlebars.compile($("#the-guys-template").html());
    var _iv_normal = 7; // random percent for NORMAL squares
    var _iv_small = 90; // random percent for SMALL squares
    var _iv_big = 3; // random percent for BIG squares

    /*=============================================================================
     * SCROLL-TOS
     *=============================================================================*/
    $("#module-header .guys").on("click", function(e) {
        e.preventDefault();
        $('#module-guys').ScrollTo({
            duration: 500,
            easing: 'linear'
        });
    });

    $("#module-header .music").on("click", function(e) {
        e.preventDefault();
        $('#module-music').ScrollTo({
            duration: 500,
            easing: 'linear',
        });
    });

    $("#module-header .contacts").on("click", function(e) {
        e.preventDefault();
        $('#module-contacts').ScrollTo({
            duration: 500,
            easing: 'linear',
        });
    });

    $("#module-header").addClass('show');
    $("#module-hero").addClass('fadeInUp');

    // Load The Guys Section
    theGuysSection();


    /*=============================================================================
     * WAYPOINTS
     *=============================================================================*/
    var wp_img1 = new Waypoint({
        element: $("#module-photos-1 .img1"),
        offset: '85%',
        handler: function(direction) {
            $("#module-photos-1 .img1").addClass('fadeInUp')
        }
    });

    var wp_img2 = new Waypoint({
        element: $("#module-photos-1 .img2"),
        offset: '95%',
        handler: function(direction) {
            $("#module-photos-1 .img2").addClass('fadeInUp')
        }
    });

    var wp_img3 = new Waypoint({
        element: $("#module-photos-2 .img1"),
        offset: '90%',
        handler: function(direction) {
            $("#module-photos-2 .img1").addClass('fadeInUp');
            $("#module-photos-2 .img2").addClass('fadeInUp');
        }
    });

    var wp_contacts = new Waypoint({
        element: $("#module-contacts .img1"),
        offset: '90%',
        handler: function(direction) {
            $("#module-contacts .img1").addClass('fadeInUp');
        }
    });

    $(window).resize(function() {
        // location.reload(true);
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

    /*=============================================================================
     * CHECK IMAGES ARE LOADED
     *=============================================================================*/
    var cnt = $("#module-guys img").length;
    // console.log("cnt: " + cnt);

    $("#module-guys img").load(function() {
        cnt--;
        // console.log("img src: " + this.src);
        // If all images are loaded, init Packery
        if (cnt === 0) {
            // console.log("All images loaded. Start the party");
            randomizeDIVs();
            doReflow();
        }
    });

    $("#module-guys img").each(function() {
        if (this.complete) {
            $(this).load()
        }
    });


    /*=============================================================================
     * CREATE HANDLEBAR OBJECT
     *=============================================================================*/
    function createGuy(name, desc, www, img) {
        var obj = {};

        obj.name = name;
        obj.desc = desc;
        obj.www = www;
        obj.img = img;

        if (www) {
            obj.show_www = true;
        } else {
            obj.show_www = false;
        }

        if (desc) {
            obj.show_desc = true;
        } else {
            obj.show_desc = false;
        }

        return obj;
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
        // $container.imagesLoaded(function() {
        //     $container.packery();
        // });

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


    /*=============================================================================
     * BUILD DATA
     *=============================================================================*/
    function theGuysSection() {
        var myData = [];

        //Claus Nymark 
        myData.push(createGuy("Claus Nymark (director)", "Claus Nymark was born on the outskirts of Copenhagen, Denmark in 1966 and began to play trombone at age 15. He holds a MA degree in music and another in musical education. Since moving to Portugal in 1986 he has maintained a busy schedule playing and teaching in several Jazz Schools around the country. At present he is teaching at The University of Évora and conducts several big bands, among them Lisbon Swingers which he has been conducting for over 15 years.", "http://www.clausnymark.com", "img/thumbs_pb/thumb_claus.jpg"));

        //Antonio Barbosa
        myData.push(createGuy("Antonio Barbosa (alto sax and piano)", "He is a University Professor.", "", "img/thumbs_pb/thumb_antoniobarbosa.jpg"));

        //Daniel Hewson
        myData.push(createGuy("Daniel Hewson (trombone)", "", "", "img/thumbs_pb/thumb_danielhewson.jpg"));

        //Ivo Rodrigues
        myData.push(createGuy("Ivo Rodrigues (trumpet)", "", "", "img/thumbs_pb/thumb_ivorodrigues.jpg"));

        //João Capinha
        myData.push(createGuy("João Capinha (alto sax)", "", "", "img/thumbs_pb/thumb_joaocapinha.jpg"));

        //João Viana
        myData.push(createGuy("João Viana (trumpet)", "João Viana is a doctor in medicine and a self-taught amateur trumpet player. The “Dixie Gang”, the oldest traditional jazz band in Portugal that he co-founded 23 years ago, is his main musical activity. For him, the pleasure of playing with the Lisbon Swingers comes not only from its repertoire, but also from the challenging technical and musical reading skills it demands.", "", "img/thumbs_pb/thumb_joaoviana.jpg"));

        //José Mata
        myData.push(createGuy("José Mata (guitar)", "Plays the guitar in the band. He is a University Professor in the Area of Business.", "", "img/thumbs_pb/thumb_josemata.jpg"));

        //Lino Lisboa
        myData.push(createGuy("Lino Lisboa (trumpet)", "Born in 1981 Lino is a Trumpet player from Lisbon. He started learning music when he was 10 years old at the Lisbon Music School, EMCN with teacher José Augusto Carneiro, also did some graduate studies at Évora University. Plays professionally in the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_linolisboa.jpg"));

        //Luciano Amaral
        myData.push(createGuy("Luciano Amaral (singer)", "He has studied for a few years, in the mid 1990s, at the Jazz School of HCP (Hot Club de Portugal) where he was a member of the students big band as a singer. His profession has nothing to do with music; he teaches in a University.", "", "img/thumbs_pb/thumb_luciano.jpg"));

        //Luis Martins
        myData.push(createGuy("Luis Martins (sax baritone)", "Started to play saxophone in a local wind Band. His first musical school was the Escola Profissional de Música de Almada, where he took lessons with Mário Marques, Hugo Gaito, Armindo Luis and finally Pedro Silva. Luis has a degree in Music performance: Saxophone, from University of Évora. He teaches classical saxophone at some music schools, and is a member of the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_luismartins.jpg"));

        //Manuel Barbosa
        myData.push(createGuy("Manuel Barbosa (tenor sax)", "A retired professor of Economics", "", "img/thumbs_pb/thumb_manuelbarbosa.jpg"));

        //Miguel Gonçalves
        myData.push(createGuy("Miguel Gonçalves (trumpet)", "", "", "img/thumbs_pb/thumb_miguelgoncalves.jpg"));

        //Miguel Viana
        myData.push(createGuy("Miguel Viana (tenor and alto sax)", "He is a self-taught Jazz Musician. He works as an HR Director.", "", "img/thumbs_pb/thumb_miguelviana.jpg"));

        //Pedro Madeira
        myData.push(createGuy("Pedro Madeira (drums)", "Music studies: Jazz School Luiz Villas-Boas / Hot Club de Portugal and Escola Superior de Música de Lisboa (Jazz Bachelor) 'When I was 18 years old, I had my first experience with drums. Since then, I knew that music would fulfill my personal and professional life till the end of my days.'", "", "img/thumbs_pb/thumb_pedromadeira.jpg"));

        //Ricardo Quintas
        myData.push(createGuy("Ricardo Quintas (clarinet)", "Plays the Clarinet. He learned music at the Jazz School of HCP (Hot Club de Portugal). Works as a frelance IT consultant around the world.", "http://www.ricardoquintas.com", "img/thumbs_pb/thumb_ricardoquintas.jpg"));

        //Rui Caetano
        myData.push(createGuy("Rui Caetano (piano)", "Rui Caetano started his musical studies at the age of ten, by having private classical piano lessons, in Portugal. After graduating from the Jazz and Contemporary Music Program at the New School, in New York, in the year 2000, he returned to Portugal where has been teaching and playing in several projects and events of the Portuguese Jazz scene, including the Lisbon Swingers Orchestra.", "http://ruicaetanotrio.com/", "img/thumbs_pb/thumb_ruicaeatno.jpg"));

        //Rui Gonçalves
        myData.push(createGuy("Rui Gonçalves (trombone)", "", "", "img/thumbs_pb/thumb_ruigoncalves.jpg"));

        //Santi Cianci
        myData.push(createGuy("Santi Cianci (double bass)", "Santi joined the band in 2012 . He is Italian (1954) and a self-taught electric bass player since he was a teenager. He began to study acoustic double bass in 2011 with the Portuguese musician Rui Silva. He is the CEO of an insurance company.", "", "img/thumbs_pb/thumb_santicianci.jpg"));

        //Gonçalo Marques
        myData.push(createGuy("Gonçalo Marques (trombone)", "He is an euphonium player/teacher. He graduated from the Escola Superior de Música de Lisboa, but has always had some curiosity about trombone and jazz music. Gonçalo plays the euphonium in the Portuguese Air Force Band and the trombone in the Lisbon Swingers Big Band. At the same time, he teaches euphonium in the Escola Professional Metropolitana and the Academia de Música de Óbidos.", "", "img/thumbs_pb/thumb_goncalomarques.jpg"));

        // >>>>>>>>>>>> REPEAT SECTION 

        //Claus Nymark 
        myData.push(createGuy("Claus Nymark (director)", "Claus Nymark was born on the outskirts of Copenhagen, Denmark in 1966 and began to play trombone at age 15. He holds a MA degree in music and another in musical education. Since moving to Portugal in 1986 he has maintained a busy schedule playing and teaching in several Jazz Schools around the country. At present he is teaching at The University of Évora and conducts several big bands, among them Lisbon Swingers which he has been conducting for over 15 years.", "http://www.clausnymark.com", "img/thumbs_pb/thumb_claus.jpg"));

        //Antonio Barbosa
        myData.push(createGuy("Antonio Barbosa (alto sax and piano)", "He is a University Professor.", "", "img/thumbs_pb/thumb_antoniobarbosa.jpg"));

        //Daniel Hewson
        myData.push(createGuy("Daniel Hewson (trombone)", "", "", "img/thumbs_pb/thumb_danielhewson.jpg"));

        //Ivo Rodrigues
        myData.push(createGuy("Ivo Rodrigues (trumpet)", "", "", "img/thumbs_pb/thumb_ivorodrigues.jpg"));

        //João Capinha
        myData.push(createGuy("João Capinha (alto sax)", "", "", "img/thumbs_pb/thumb_joaocapinha.jpg"));

        //João Viana
        myData.push(createGuy("João Viana (trumpet)", "João Viana is a doctor in medicine and a self-taught amateur trumpet player. The “Dixie Gang”, the oldest traditional jazz band in Portugal that he co-founded 23 years ago, is his main musical activity. For him, the pleasure of playing with the Lisbon Swingers comes not only from its repertoire, but also from the challenging technical and musical reading skills it demands.", "", "img/thumbs_pb/thumb_joaoviana.jpg"));

        //José Mata
        myData.push(createGuy("José Mata (guitar)", "Plays the guitar in the band. He is a University Professor in the Area of Business.", "", "img/thumbs_pb/thumb_josemata.jpg"));

        //Lino Lisboa
        myData.push(createGuy("Lino Lisboa (trumpet)", "Born in 1981 Lino is a Trumpet player from Lisbon. He started learning music when he was 10 years old at the Lisbon Music School, EMCN with teacher José Augusto Carneiro, also did some graduate studies at Évora University. Plays professionally in the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_linolisboa.jpg"));

        //Luciano Amaral
        myData.push(createGuy("Luciano Amaral (singer)", "He has studied for a few years, in the mid 1990s, at the Jazz School of HCP (Hot Club de Portugal) where he was a member of the students big band as a singer. His profession has nothing to do with music; he teaches in a University.", "", "img/thumbs_pb/thumb_luciano.jpg"));

        //Luis Martins
        myData.push(createGuy("Luis Martins (sax baritone)", "Started to play saxophone in a local wind Band. His first musical school was the Escola Profissional de Música de Almada, where he took lessons with Mário Marques, Hugo Gaito, Armindo Luis and finally Pedro Silva. Luis has a degree in Music performance: Saxophone, from University of Évora. He teaches classical saxophone at some music schools, and is a member of the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_luismartins.jpg"));

        //Manuel Barbosa
        myData.push(createGuy("Manuel Barbosa (tenor sax)", "A retired professor of Economics", "", "img/thumbs_pb/thumb_manuelbarbosa.jpg"));

        //Miguel Gonçalves
        myData.push(createGuy("Miguel Gonçalves (trumpet)", "", "", "img/thumbs_pb/thumb_miguelgoncalves.jpg"));

        //Miguel Viana
        myData.push(createGuy("Miguel Viana (tenor and alto sax)", "He is a self-taught Jazz Musician. He works as an HR Director.", "", "img/thumbs_pb/thumb_miguelviana.jpg"));

        //Pedro Madeira
        myData.push(createGuy("Pedro Madeira (drums)", "Music studies: Jazz School Luiz Villas-Boas / Hot Club de Portugal and Escola Superior de Música de Lisboa (Jazz Bachelor) 'When I was 18 years old, I had my first experience with drums. Since then, I knew that music would fulfill my personal and professional life till the end of my days.'", "", "img/thumbs_pb/thumb_pedromadeira.jpg"));

        //Ricardo Quintas
        myData.push(createGuy("Ricardo Quintas (clarinet)", "Plays the Clarinet. He learned music at the Jazz School of HCP (Hot Club de Portugal). Works as a frelance IT consultant around the world.", "http://www.ricardoquintas.com", "img/thumbs_pb/thumb_ricardoquintas.jpg"));

        //Rui Caetano
        myData.push(createGuy("Rui Caetano (piano)", "Rui Caetano started his musical studies at the age of ten, by having private classical piano lessons, in Portugal. After graduating from the Jazz and Contemporary Music Program at the New School, in New York, in the year 2000, he returned to Portugal where has been teaching and playing in several projects and events of the Portuguese Jazz scene, including the Lisbon Swingers Orchestra.", "http://ruicaetanotrio.com/", "img/thumbs_pb/thumb_ruicaeatno.jpg"));

        //Rui Gonçalves
        myData.push(createGuy("Rui Gonçalves (trombone)", "", "", "img/thumbs_pb/thumb_ruigoncalves.jpg"));

        //Santi Cianci
        myData.push(createGuy("Santi Cianci (double bass)", "Santi joined the band in 2012 . He is Italian (1954) and a self-taught electric bass player since he was a teenager. He began to study acoustic double bass in 2011 with the Portuguese musician Rui Silva. He is the CEO of an insurance company.", "", "img/thumbs_pb/thumb_santicianci.jpg"));

        //Gonçalo Marques
        myData.push(createGuy("Gonçalo Marques (trombone)", "He is an euphonium player/teacher. He graduated from the Escola Superior de Música de Lisboa, but has always had some curiosity about trombone and jazz music. Gonçalo plays the euphonium in the Portuguese Air Force Band and the trombone in the Lisbon Swingers Big Band. At the same time, he teaches euphonium in the Escola Professional Metropolitana and the Academia de Música de Óbidos.", "", "img/thumbs_pb/thumb_goncalomarques.jpg"));


        //Claus Nymark 
        myData.push(createGuy("Claus Nymark (director)", "Claus Nymark was born on the outskirts of Copenhagen, Denmark in 1966 and began to play trombone at age 15. He holds a MA degree in music and another in musical education. Since moving to Portugal in 1986 he has maintained a busy schedule playing and teaching in several Jazz Schools around the country. At present he is teaching at The University of Évora and conducts several big bands, among them Lisbon Swingers which he has been conducting for over 15 years.", "http://www.clausnymark.com", "img/thumbs_pb/thumb_claus.jpg"));

        //Antonio Barbosa
        myData.push(createGuy("Antonio Barbosa (alto sax and piano)", "He is a University Professor.", "", "img/thumbs_pb/thumb_antoniobarbosa.jpg"));

        //Daniel Hewson
        myData.push(createGuy("Daniel Hewson (trombone)", "", "", "img/thumbs_pb/thumb_danielhewson.jpg"));

        //Ivo Rodrigues
        myData.push(createGuy("Ivo Rodrigues (trumpet)", "", "", "img/thumbs_pb/thumb_ivorodrigues.jpg"));

        //João Capinha
        myData.push(createGuy("João Capinha (alto sax)", "", "", "img/thumbs_pb/thumb_joaocapinha.jpg"));

        //João Viana
        myData.push(createGuy("João Viana (trumpet)", "João Viana is a doctor in medicine and a self-taught amateur trumpet player. The “Dixie Gang”, the oldest traditional jazz band in Portugal that he co-founded 23 years ago, is his main musical activity. For him, the pleasure of playing with the Lisbon Swingers comes not only from its repertoire, but also from the challenging technical and musical reading skills it demands.", "", "img/thumbs_pb/thumb_joaoviana.jpg"));

        //José Mata
        myData.push(createGuy("José Mata (guitar)", "Plays the guitar in the band. He is a University Professor in the Area of Business.", "", "img/thumbs_pb/thumb_josemata.jpg"));

        //Lino Lisboa
        myData.push(createGuy("Lino Lisboa (trumpet)", "Born in 1981 Lino is a Trumpet player from Lisbon. He started learning music when he was 10 years old at the Lisbon Music School, EMCN with teacher José Augusto Carneiro, also did some graduate studies at Évora University. Plays professionally in the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_linolisboa.jpg"));

        //Luciano Amaral
        myData.push(createGuy("Luciano Amaral (singer)", "He has studied for a few years, in the mid 1990s, at the Jazz School of HCP (Hot Club de Portugal) where he was a member of the students big band as a singer. His profession has nothing to do with music; he teaches in a University.", "", "img/thumbs_pb/thumb_luciano.jpg"));

        //Luis Martins
        myData.push(createGuy("Luis Martins (sax baritone)", "Started to play saxophone in a local wind Band. His first musical school was the Escola Profissional de Música de Almada, where he took lessons with Mário Marques, Hugo Gaito, Armindo Luis and finally Pedro Silva. Luis has a degree in Music performance: Saxophone, from University of Évora. He teaches classical saxophone at some music schools, and is a member of the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_luismartins.jpg"));

        //Manuel Barbosa
        myData.push(createGuy("Manuel Barbosa (tenor sax)", "A retired professor of Economics", "", "img/thumbs_pb/thumb_manuelbarbosa.jpg"));

        //Miguel Gonçalves
        myData.push(createGuy("Miguel Gonçalves (trumpet)", "", "", "img/thumbs_pb/thumb_miguelgoncalves.jpg"));

        //Miguel Viana
        myData.push(createGuy("Miguel Viana (tenor and alto sax)", "He is a self-taught Jazz Musician. He works as an HR Director.", "", "img/thumbs_pb/thumb_miguelviana.jpg"));

        //Pedro Madeira
        myData.push(createGuy("Pedro Madeira (drums)", "Music studies: Jazz School Luiz Villas-Boas / Hot Club de Portugal and Escola Superior de Música de Lisboa (Jazz Bachelor) 'When I was 18 years old, I had my first experience with drums. Since then, I knew that music would fulfill my personal and professional life till the end of my days.'", "", "img/thumbs_pb/thumb_pedromadeira.jpg"));

        //Ricardo Quintas
        myData.push(createGuy("Ricardo Quintas (clarinet)", "Plays the Clarinet. He learned music at the Jazz School of HCP (Hot Club de Portugal). Works as a frelance IT consultant around the world.", "http://www.ricardoquintas.com", "img/thumbs_pb/thumb_ricardoquintas.jpg"));

        //Rui Caetano
        myData.push(createGuy("Rui Caetano (piano)", "Rui Caetano started his musical studies at the age of ten, by having private classical piano lessons, in Portugal. After graduating from the Jazz and Contemporary Music Program at the New School, in New York, in the year 2000, he returned to Portugal where has been teaching and playing in several projects and events of the Portuguese Jazz scene, including the Lisbon Swingers Orchestra.", "http://ruicaetanotrio.com/", "img/thumbs_pb/thumb_ruicaeatno.jpg"));

        //Rui Gonçalves
        myData.push(createGuy("Rui Gonçalves (trombone)", "", "", "img/thumbs_pb/thumb_ruigoncalves.jpg"));

        //Santi Cianci
        myData.push(createGuy("Santi Cianci (double bass)", "Santi joined the band in 2012 . He is Italian (1954) and a self-taught electric bass player since he was a teenager. He began to study acoustic double bass in 2011 with the Portuguese musician Rui Silva. He is the CEO of an insurance company.", "", "img/thumbs_pb/thumb_santicianci.jpg"));

        //Gonçalo Marques
        myData.push(createGuy("Gonçalo Marques (trombone)", "He is an euphonium player/teacher. He graduated from the Escola Superior de Música de Lisboa, but has always had some curiosity about trombone and jazz music. Gonçalo plays the euphonium in the Portuguese Air Force Band and the trombone in the Lisbon Swingers Big Band. At the same time, he teaches euphonium in the Escola Professional Metropolitana and the Academia de Música de Óbidos.", "", "img/thumbs_pb/thumb_goncalomarques.jpg"));

        //Claus Nymark 
        myData.push(createGuy("Claus Nymark (director)", "Claus Nymark was born on the outskirts of Copenhagen, Denmark in 1966 and began to play trombone at age 15. He holds a MA degree in music and another in musical education. Since moving to Portugal in 1986 he has maintained a busy schedule playing and teaching in several Jazz Schools around the country. At present he is teaching at The University of Évora and conducts several big bands, among them Lisbon Swingers which he has been conducting for over 15 years.", "http://www.clausnymark.com", "img/thumbs_pb/thumb_claus.jpg"));

        //Antonio Barbosa
        myData.push(createGuy("Antonio Barbosa (alto sax and piano)", "He is a University Professor.", "", "img/thumbs_pb/thumb_antoniobarbosa.jpg"));

        //Daniel Hewson
        myData.push(createGuy("Daniel Hewson (trombone)", "", "", "img/thumbs_pb/thumb_danielhewson.jpg"));

        //Ivo Rodrigues
        myData.push(createGuy("Ivo Rodrigues (trumpet)", "", "", "img/thumbs_pb/thumb_ivorodrigues.jpg"));

        //João Capinha
        myData.push(createGuy("João Capinha (alto sax)", "", "", "img/thumbs_pb/thumb_joaocapinha.jpg"));

        //João Viana
        myData.push(createGuy("João Viana (trumpet)", "João Viana is a doctor in medicine and a self-taught amateur trumpet player. The “Dixie Gang”, the oldest traditional jazz band in Portugal that he co-founded 23 years ago, is his main musical activity. For him, the pleasure of playing with the Lisbon Swingers comes not only from its repertoire, but also from the challenging technical and musical reading skills it demands.", "", "img/thumbs_pb/thumb_joaoviana.jpg"));

        //José Mata
        myData.push(createGuy("José Mata (guitar)", "Plays the guitar in the band. He is a University Professor in the Area of Business.", "", "img/thumbs_pb/thumb_josemata.jpg"));

        //Lino Lisboa
        myData.push(createGuy("Lino Lisboa (trumpet)", "Born in 1981 Lino is a Trumpet player from Lisbon. He started learning music when he was 10 years old at the Lisbon Music School, EMCN with teacher José Augusto Carneiro, also did some graduate studies at Évora University. Plays professionally in the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_linolisboa.jpg"));

        //Luciano Amaral
        myData.push(createGuy("Luciano Amaral (singer)", "He has studied for a few years, in the mid 1990s, at the Jazz School of HCP (Hot Club de Portugal) where he was a member of the students big band as a singer. His profession has nothing to do with music; he teaches in a University.", "", "img/thumbs_pb/thumb_luciano.jpg"));

        //Luis Martins
        myData.push(createGuy("Luis Martins (sax baritone)", "Started to play saxophone in a local wind Band. His first musical school was the Escola Profissional de Música de Almada, where he took lessons with Mário Marques, Hugo Gaito, Armindo Luis and finally Pedro Silva. Luis has a degree in Music performance: Saxophone, from University of Évora. He teaches classical saxophone at some music schools, and is a member of the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_luismartins.jpg"));

        //Manuel Barbosa
        myData.push(createGuy("Manuel Barbosa (tenor sax)", "A retired professor of Economics", "", "img/thumbs_pb/thumb_manuelbarbosa.jpg"));

        //Miguel Gonçalves
        myData.push(createGuy("Miguel Gonçalves (trumpet)", "", "", "img/thumbs_pb/thumb_miguelgoncalves.jpg"));

        //Miguel Viana
        myData.push(createGuy("Miguel Viana (tenor and alto sax)", "He is a self-taught Jazz Musician. He works as an HR Director.", "", "img/thumbs_pb/thumb_miguelviana.jpg"));

        //Pedro Madeira
        myData.push(createGuy("Pedro Madeira (drums)", "Music studies: Jazz School Luiz Villas-Boas / Hot Club de Portugal and Escola Superior de Música de Lisboa (Jazz Bachelor) 'When I was 18 years old, I had my first experience with drums. Since then, I knew that music would fulfill my personal and professional life till the end of my days.'", "", "img/thumbs_pb/thumb_pedromadeira.jpg"));

        //Ricardo Quintas
        myData.push(createGuy("Ricardo Quintas (clarinet)", "Plays the Clarinet. He learned music at the Jazz School of HCP (Hot Club de Portugal). Works as a frelance IT consultant around the world.", "http://www.ricardoquintas.com", "img/thumbs_pb/thumb_ricardoquintas.jpg"));

        //Rui Caetano
        myData.push(createGuy("Rui Caetano (piano)", "Rui Caetano started his musical studies at the age of ten, by having private classical piano lessons, in Portugal. After graduating from the Jazz and Contemporary Music Program at the New School, in New York, in the year 2000, he returned to Portugal where has been teaching and playing in several projects and events of the Portuguese Jazz scene, including the Lisbon Swingers Orchestra.", "http://ruicaetanotrio.com/", "img/thumbs_pb/thumb_ruicaeatno.jpg"));

        //Rui Gonçalves
        myData.push(createGuy("Rui Gonçalves (trombone)", "", "", "img/thumbs_pb/thumb_ruigoncalves.jpg"));

        //Santi Cianci
        myData.push(createGuy("Santi Cianci (double bass)", "Santi joined the band in 2012 . He is Italian (1954) and a self-taught electric bass player since he was a teenager. He began to study acoustic double bass in 2011 with the Portuguese musician Rui Silva. He is the CEO of an insurance company.", "", "img/thumbs_pb/thumb_santicianci.jpg"));

        //Gonçalo Marques
        myData.push(createGuy("Gonçalo Marques (trombone)", "He is an euphonium player/teacher. He graduated from the Escola Superior de Música de Lisboa, but has always had some curiosity about trombone and jazz music. Gonçalo plays the euphonium in the Portuguese Air Force Band and the trombone in the Lisbon Swingers Big Band. At the same time, he teaches euphonium in the Escola Professional Metropolitana and the Academia de Música de Óbidos.", "", "img/thumbs_pb/thumb_goncalomarques.jpg"));

        //Claus Nymark 
        myData.push(createGuy("Claus Nymark (director)", "Claus Nymark was born on the outskirts of Copenhagen, Denmark in 1966 and began to play trombone at age 15. He holds a MA degree in music and another in musical education. Since moving to Portugal in 1986 he has maintained a busy schedule playing and teaching in several Jazz Schools around the country. At present he is teaching at The University of Évora and conducts several big bands, among them Lisbon Swingers which he has been conducting for over 15 years.", "http://www.clausnymark.com", "img/thumbs_pb/thumb_claus.jpg"));

        //Antonio Barbosa
        myData.push(createGuy("Antonio Barbosa (alto sax and piano)", "He is a University Professor.", "", "img/thumbs_pb/thumb_antoniobarbosa.jpg"));

        //Daniel Hewson
        myData.push(createGuy("Daniel Hewson (trombone)", "", "", "img/thumbs_pb/thumb_danielhewson.jpg"));

        //Ivo Rodrigues
        myData.push(createGuy("Ivo Rodrigues (trumpet)", "", "", "img/thumbs_pb/thumb_ivorodrigues.jpg"));

        //João Capinha
        myData.push(createGuy("João Capinha (alto sax)", "", "", "img/thumbs_pb/thumb_joaocapinha.jpg"));

        //João Viana
        myData.push(createGuy("João Viana (trumpet)", "João Viana is a doctor in medicine and a self-taught amateur trumpet player. The “Dixie Gang”, the oldest traditional jazz band in Portugal that he co-founded 23 years ago, is his main musical activity. For him, the pleasure of playing with the Lisbon Swingers comes not only from its repertoire, but also from the challenging technical and musical reading skills it demands.", "", "img/thumbs_pb/thumb_joaoviana.jpg"));

        //José Mata
        myData.push(createGuy("José Mata (guitar)", "Plays the guitar in the band. He is a University Professor in the Area of Business.", "", "img/thumbs_pb/thumb_josemata.jpg"));

        //Lino Lisboa
        myData.push(createGuy("Lino Lisboa (trumpet)", "Born in 1981 Lino is a Trumpet player from Lisbon. He started learning music when he was 10 years old at the Lisbon Music School, EMCN with teacher José Augusto Carneiro, also did some graduate studies at Évora University. Plays professionally in the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_linolisboa.jpg"));

        //Luciano Amaral
        myData.push(createGuy("Luciano Amaral (singer)", "He has studied for a few years, in the mid 1990s, at the Jazz School of HCP (Hot Club de Portugal) where he was a member of the students big band as a singer. His profession has nothing to do with music; he teaches in a University.", "", "img/thumbs_pb/thumb_luciano.jpg"));

        //Luis Martins
        myData.push(createGuy("Luis Martins (sax baritone)", "Started to play saxophone in a local wind Band. His first musical school was the Escola Profissional de Música de Almada, where he took lessons with Mário Marques, Hugo Gaito, Armindo Luis and finally Pedro Silva. Luis has a degree in Music performance: Saxophone, from University of Évora. He teaches classical saxophone at some music schools, and is a member of the Portuguese Air Force Band.", "", "img/thumbs_pb/thumb_luismartins.jpg"));

        //Manuel Barbosa
        myData.push(createGuy("Manuel Barbosa (tenor sax)", "A retired professor of Economics", "", "img/thumbs_pb/thumb_manuelbarbosa.jpg"));

        //Miguel Gonçalves
        myData.push(createGuy("Miguel Gonçalves (trumpet)", "", "", "img/thumbs_pb/thumb_miguelgoncalves.jpg"));

        //Miguel Viana
        myData.push(createGuy("Miguel Viana (tenor and alto sax)", "He is a self-taught Jazz Musician. He works as an HR Director.", "", "img/thumbs_pb/thumb_miguelviana.jpg"));

        //Pedro Madeira
        myData.push(createGuy("Pedro Madeira (drums)", "Music studies: Jazz School Luiz Villas-Boas / Hot Club de Portugal and Escola Superior de Música de Lisboa (Jazz Bachelor) 'When I was 18 years old, I had my first experience with drums. Since then, I knew that music would fulfill my personal and professional life till the end of my days.'", "", "img/thumbs_pb/thumb_pedromadeira.jpg"));

        //Ricardo Quintas
        myData.push(createGuy("Ricardo Quintas (clarinet)", "Plays the Clarinet. He learned music at the Jazz School of HCP (Hot Club de Portugal). Works as a frelance IT consultant around the world.", "http://www.ricardoquintas.com", "img/thumbs_pb/thumb_ricardoquintas.jpg"));

        //Rui Caetano
        myData.push(createGuy("Rui Caetano (piano)", "Rui Caetano started his musical studies at the age of ten, by having private classical piano lessons, in Portugal. After graduating from the Jazz and Contemporary Music Program at the New School, in New York, in the year 2000, he returned to Portugal where has been teaching and playing in several projects and events of the Portuguese Jazz scene, including the Lisbon Swingers Orchestra.", "http://ruicaetanotrio.com/", "img/thumbs_pb/thumb_ruicaeatno.jpg"));

        //Rui Gonçalves
        myData.push(createGuy("Rui Gonçalves (trombone)", "", "", "img/thumbs_pb/thumb_ruigoncalves.jpg"));

        //Santi Cianci
        myData.push(createGuy("Santi Cianci (double bass)", "Santi joined the band in 2012 . He is Italian (1954) and a self-taught electric bass player since he was a teenager. He began to study acoustic double bass in 2011 with the Portuguese musician Rui Silva. He is the CEO of an insurance company.", "", "img/thumbs_pb/thumb_santicianci.jpg"));

        //Gonçalo Marques
        myData.push(createGuy("Gonçalo Marques (trombone)", "He is an euphonium player/teacher. He graduated from the Escola Superior de Música de Lisboa, but has always had some curiosity about trombone and jazz music. Gonçalo plays the euphonium in the Portuguese Air Force Band and the trombone in the Lisbon Swingers Big Band. At the same time, he teaches euphonium in the Escola Professional Metropolitana and the Academia de Música de Óbidos.", "", "img/thumbs_pb/thumb_goncalomarques.jpg"));

        // <<<<<<<<<<<< REPEAT SECTION 

        var data = {
            guy: myData
        };

        $('#module-guys .container').append(_template(data));
    }
});
