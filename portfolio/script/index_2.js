$(function(){
    $(".circle,.p_box>p span").hover(function(){
        $(".p_box").stop().animate({
            "left":"-100px",
        },200);
        $(".circle_contents ul").stop().fadeIn(1000);
        $(".p_box p span").css({
            color:"#ffffff"
        },300);

    },function(){
        
        $(".p_box").stop().animate({
            "left":0
        },200);
        $(".circle_contents ul").stop().fadeOut(500);
        $(".p_box p span").css({
            color:"#000"
        },300);

        
    })













    



})// jQuery