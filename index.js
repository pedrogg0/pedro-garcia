$("#simon-game").click(function(){
    open("https://pedrogg0.github.io/simon-game/");
});

$("#simon-game").mouseover(function () { 
    $("#simon-game").addClass("mouse-over");
});

$("#simon-game").mouseout(function () { 
    $("#simon-game").removeClass("mouse-over");
});