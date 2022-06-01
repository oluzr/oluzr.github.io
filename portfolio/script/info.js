$(function(){

    $(".head_aside").click(function(e){
        e.preventDefault();
        $("aside").addClass("show")
    }) //aside 등장~
    
    $(".aside_close").click(function(e){
        e.preventDefault();
        $("aside").removeClass("show")
    })//aisde 퇴장~
    
    $(".illu_flower").hover(function(){
        $(this).find("a").addClass("show")
        $(this).css({
            "animation":"none"
        })
    },function(){
        
        $(this).find("a").removeClass("show")
        $(this).css({
            "animation": "flower 2s infinite alternate"
        })
    })






    }) //jQuery