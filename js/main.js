$(document).ready(function(){

    var prev = "#0";
    $("li").click(function(){
        $(this).addClass("active");
        $(prev).removeClass("active");
        prev = "#" + $(this).attr("id");
    });

});