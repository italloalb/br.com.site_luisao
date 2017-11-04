$(function(){
    $('#header-menor').hide();

    $(window).scroll(function () {
        if($(this).scrollTop() > 150){
            $('#header-menor').fadeIn();
        }else{
            $('#header-menor').fadeOut();
        }
    });
});