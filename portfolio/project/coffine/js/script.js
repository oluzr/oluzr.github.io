$(function () {



    $(".top_banner .close").click(function () {
        $(".top_banner").slideUp()
    }) // top banner click



    $(".gnb>ul>li, .bg").hover(function () {
        $(".bg, .sub_menu").stop().slideDown();
    }, function () {
        $(".bg, .sub_menu").stop().slideUp();

    }) //menu hover 

    $(".main_visual").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        // vertical:true,
        slidesToShow: 1,
        // centerMode:true,
    }) //main_visual


    $(".sec5_inner>div").click(function () {
        $(".sec5_inner>div").removeClass("on");
        $(this).addClass("on");

    }) // div click




    $("a").click(function (e) {
        e.preventDefault()
        console.log(e);
    })

}) //jQuery