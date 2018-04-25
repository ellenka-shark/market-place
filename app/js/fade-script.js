// обработчик для кубиков
$(document).ready(function(){
    $("button").mouseenter(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn(100);
        $("#div3").fadeIn(1000);
    });

    $("button").mouseleave(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut(100);
        $("#div3").fadeOut(1000);
    });

});

// обработчик для меню
// событие: mouseenter - можно заменить на: hover или сlick
$(document).ready(function(){
    $(".dropdown").mouseenter(function(){
        //$(".dropdown-menu").fadeIn(); // в паре с fadeOut();
        //$(".dropdown-menu").fadeIn(1000);
       	//$(".dropdown-menu").fadeToggle("slow"); // в паре с любым из: fadeOut, slideUp, hide;
        $(".dropdown-menu").slideDown("slow"); // в паре с slideUp("slow");
        //$(".dropdown-menu").show(1000); // в паре с hide(1000);
    });

    $(".dropdown").mouseleave(function(){
        //$(".dropdown-menu").fadeOut();
        //$(".dropdown-menu").fadeOut(1000);
        //$(".dropdown-menu").fadeToggle(1000);        
        $(".dropdown-menu").slideUp("slow");
        //$(".dropdown-menu").hide(1000);
    });

});