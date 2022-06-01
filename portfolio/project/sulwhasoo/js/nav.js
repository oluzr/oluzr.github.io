$(function () {
    $(".select_language").click(function () {
        $(this).toggleClass("show")
    }) //언어변경

    $(".h_open_search").click(function () {
        $(".search_container").slideToggle(500)
    })

    $(".sch_close").click(function () {

        $(".search_container").removeClass("show")
    }) //close


    $(".gnb_menu>li").hover(function () {
        $(this).find(".sub").stop().slideDown();
        $(".gnb_bg").stop().slideDown();
    }, function () {
        $(".sub").stop().slideUp()
        $(".gnb_bg").stop().slideUp();
    }) //메뉴슬라이드



    //1. 첫번째 슬라이드 나오게하기 
    //2. 첫번째 슬라이드가 나오는 함수 만들기
    //3.함수 실행하기

    firstAct();


    function firstAct() {
        $(".visual_wrap li").eq(0).addClass("active");
        $(".visu_btn_wrap li").eq(0).addClass("act")
        active();
    } //firstAct


    function active() {
        $(".visual_wrap li.active").children(".visu_bg").animate({
            "width": "40%"
        }, 1000)
        $(".visual_wrap li.active").children(".visu_text").delay(1000).animate({
            "opacity": "1"
        }, 1000)

    } //active()

    function reset() {
        $(".visual_wrap li").removeClass("active");
        $(".visu_btn_wrap li").removeClass("act")
        $(".visual_wrap li").children(".visu_bg").animate({
            "width": "0%"
        }, 1000)
        $(".visual_wrap li").children(".visu_text").animate({
            "opacity": "0"
        }, 1000)
    } //reset()


    function play() {
        var idx = $(".visual_wrap li.active").index();
        reset();
        if (idx < 2) {
            $(".visual_wrap li").eq(idx + 1).addClass("active");
            $(".visu_btn_wrap li").eq(idx + 1).addClass("act")
        } else if (idx == 2) {
            $(".visual_wrap li").eq(0).addClass("active");
            $(".visu_btn_wrap li").eq(0).addClass("act")
        }
        active()
    } //play()

    
    var time = setInterval(play, 6000)

    $(".visu_btn_wrap li,.left,.right").hover(function () {
        clearInterval(time)
    }, function () {
        time = setInterval(play, 6000)
    })

    $(".visu_btn_wrap li").not(".controls").click(function (e) {
        e.preventDefault();
        reset();
        idx = $(this).index();
        $(this).addClass("act");
        $(".visual_wrap li").eq(idx).addClass("active");
        active()
    }) //dots click


    $(".controls_stop").click(function (e) {
        e.preventDefault();
        $(this).fadeOut();
        $(".controls_start").fadeIn()
        clearInterval(time)

    }) //stop
    $(".controls_start").click(function (e) {
        e.preventDefault();
        $(this).fadeOut(0);
        $(".controls_stop").fadeIn()
        time = setInterval(play, 6000)

    }) //start



    $(".visu_arrow.left").click(function () {
        idx = $(".visual_wrap li.active").index();
        reset();
        if (idx > 0) {
            $(".visual_wrap li").eq(idx - 1).addClass("active");
            $(".visu_btn_wrap li").eq(idx - 1).addClass("act")
        } else if (idx == 0) {
            $(".visual_wrap li").eq(2).addClass("active");
            $(".visu_btn_wrap li").eq(2).addClass("act");
        }

    }) //left
    $(".visu_arrow.right").click(function () {

        play();
    }) //right














}) //jQuey