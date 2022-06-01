$(function(){



    $(".btn_tap").click(function(e){
        e.preventDefault();
        $(".btn_tap").removeClass("on");
        $(this).addClass("on")
        let n=$(this).index();
        $(".recom_list").removeClass("act");
        $(".recom_list").eq(n).addClass("act")
    })


    $(".with_list").slick({
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:5,
        dots:false,
        arrows:true,
        responsive:[{
            breakpoint:999,
            settings:{
                slidesToShow:3,
                slideToScroll:3
            }
        },{
            breakpoint:599,
            settings:{
                slidesToShow:2,
                slideToScroll:2
            }
        }]
    })// 위드스라이드

    $(".flag_list").slick({
            autoplay:true,
            arrows:true,
            dots:true,
    })//

    $(".mob_nav_btn").click(function(e){
        e.preventDefault();
        $(".mob_nav").addClass("left_move")
    })

    $(".m_nav_bg").click(function(e){
        e.preventDefault();
        $(".mob_nav").removeClass("left_move")
    })

    $(".m_nav_list>li>a").click(function(){
        $(this).toggleClass("on");
        $(this).next("dl").slideToggle();
    })



})//jQuery