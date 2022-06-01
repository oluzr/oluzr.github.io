$(function () {

    $("a").click(function(e){
        e.preventDefault();
    })
    $(".util_myca").hover(function () {
        $(this).css({
            "background": "url(./img/ico_up01.gif) no-repeat right"
        });
        $(".my").css({
            "display": "block"
        });
    }, function () {
        $(this).css({
            "background": "url(./img/ico_down01.gif) no-repeat right"

        })
        $(".my").css({
            "display": "none"
        });
    }) //메뉴

    $(".gnb_p").hover(function () {
        $(".d_wrap").stop().slideDown();
    }, function () {
        $(".d_wrap").stop().slideUp();
    }) //메뉴슬라이드

    $(".main_visual").slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 1000,
        swipe: false,
        arrows: false,
    }) //slick

    var sw = 0;
    $(".stop").click(function () {
        if (sw == 0) {
            $(".stop").addClass("on");
            $(".main_visual").slick("slickPause")
            sw = 1
        } else {
            $(".stop").removeClass("on");
            $(".main_visual").slick("slickPlay")
            sw = 0
        }
    }) // click

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@포토랩

    $(".photo_wrap").slick({
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
    }) //photowrap


    $(".pause").click(function () {



        if (sw == 0) {
            $(".pause").addClass("on");
            $(".photo_wrap").slick("slickPlay");
            sw = 1;
        } else {
            
            $(".pause").removeClass("on");
            $(".photo_wrap").slick("slickPause")
            sw = 0;
        }

    }) // pause click

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@배너1

    $(".banner1").slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
    }) //banner slick

    $(".banner button.stop1").click(function () {

        if (sw == 0) {
            $(this).addClass("on");
            $(".banner1").slick("slickPlay");
            sw = 1;
        } else {
            
            $(this).removeClass("on");
            $(".banner1").slick("slickPause")
            sw = 0;
        }

    }) // stop1 click




//@@@@@@@@@@@@@@@@@@@@@@@@@@@리뷰

$(".review1").slick({
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
}) //review1 slick

    $(".review .stop1").click(function () {
        if (sw == 0) {
            $(this).addClass("on");
            $(".review1").slick("slickPlay");
            sw = 1;
        } else {
            
            $(this).removeClass("on");
            $(".review1").slick("slickPause")
            sw = 0;
        }

    }) // stop1 click

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ e스토어

    $(".product_slick").slick({
        autoplay:false,
        autoplaySpeed:1000,
        slideToScroll:2,
        slidesToShow:2,
        arrows:false,
        dots:true,
    
    }) //slick


    $(".e_store .stop1").click(function(){
        
        

        if (sw == 0) {
            $(this).addClass("on");
            $(".product_slick").slick("slickPlay");
            sw = 1;
        } else {
            
            $(this).removeClass("on");
            $(".product_slick").slick("slickPause")
            sw = 0;
        }
    })//

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@노티스
    $(".notice").slick({
        autoplay:false,
        autoplaySpeed:1000,
        arrows:true,
        dots:false,
        vertical:true,
    })

    
    $(".l_stop").click(function(){
        if(sw==0){
            $(this).addClass("on");
            $(".notice").slick("slickPlay");
            sw=1;
        } else{
            $(this).removeClass("on");
            $(".notice").slick("slickPause");
            sw = 0;
        }

    })

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 푸트네비등장
    var f_nav=0;

    $(".sitemap").click(function(){

        if(f_nav==0){
            $(".f_sub_menu").slideDown();
            f_nav=1;
            
        }else{
            
            $(".f_sub_menu").slideUp();
            f_nav=0;
        }
    })


    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@맨위로
    
    
    
}) //jQuery

$(window).scroll(function(){
    var sct=$(this).scrollTop;
    console.log(sct);

    if(sct>=10){
        $(".tothetop").addClass("act")
    }


})//scroll


