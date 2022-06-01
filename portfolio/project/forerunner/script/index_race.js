$(function () {





    $(".box_inner").hover(function () {
        $("#race").css({
            "background-image": "url(../etc/race-bg2.png)"
        }) //배경변화
        $("#race h4,#race h3,#race .logo").removeClass("on"); //로고

        $("#race .circle,#race p").addClass("on")
        $("#race .text").text("2021")
        
    }, function () {
        $("#race").css({
            "background-image": "url(../etc/race-bg3.png)"
        }) //배경변화
        $("#race h4,#race h3,#race .logo").addClass("on", 1000); //로고
        $("#race .circle,#race p").removeClass("on")
        
        $("#race .text").text("대회일정")
        
        
    })







}) // jQuery