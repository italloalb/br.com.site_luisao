$(document).ready(function(){

    var i = 1+0.5;

    $(".btnAumentar").click(function(){
        $(".body").css({"font-size": i+"em"});
        i = i + 0.1;
    });

    $(".btnDiminuir").click(function(){
        i = i-0.1;
        $(".body").css({"font-size": i+"em"})

    });

    $("#postlink").click(function(){
        $("#menu").css({"opacity":"0.1"})
        $("#mainContent").css({"opacity":"0.1"})
    });


    $("#mainContent").click(function(){
        $("#menu").css({"opacity":"1"})
        $("#mainContent").css({"opacity":"1"})
    });

    $("#menu").click(function(){
        $("#menu").css({"opacity":"1"})
        $("#mainContent").css({"opacity":"1"})
    });
});