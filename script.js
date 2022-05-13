$(".hidemon").hide();

$(".Option1").click(function() {
    $("h1").text("Charizrd vs Magmar, Double click to see the result");
    $(".big").css("background-color", "#ADD8E6");
    $(".Mon1").attr("src", "https://thumbs.gfycat.com/ThirstyNegativeAmethystgemclam-size_restricted.gif");
    $(".Mon2").hide();
    $(".Option1").hide();
    $(".Option2").hide();
    

});

$(".Option2").click(function() {
    $("h1").text("Oppenent sends out Excadrill, You Lose");
    $(".big").css("background-color", "#d47b4a");
    $(".Mon1").attr("src", "https://archives.bulbagarden.net/media/upload/2/25/Spr_5b_530.png");
    $(".Option1").hide();
    $(".Option2").hide();
    

});

$(".Mon1").dblclick(function(){
   $("h1").text("You double clicked, you win");
    $(".Mon1").hide();
   $(".hidemon").show();
});
