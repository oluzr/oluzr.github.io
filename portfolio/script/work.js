$(function () {


    $(".title h2").animate({
        "opacity":1,
        "letter-spacing":".7vw"
    },1000);
    $(".main_m>li").eq(0).siblings().find(".sub_m").hide();
    


    let n = 0 // 현재  보여지는 인덱스 넘버
    $("section").eq(0).fadeIn().siblings().hide();
    $(".sub_m>li").eq(0).addClass("show")
    $(".main_m>li").eq(0).siblings().find("a").addClass("hide")



    $(".sub_m a.a_info").click(function () {
        if (!$(this).parent().hasClass("show")&&!($(this).parent().hasClass("quick"))) {
            $("section").fadeOut();
            $(".sub_m>li").removeClass("show") //reset

            n = $(".sub_m a.a_info").index(this);
            console.log(n)

            $(this).parent().addClass("show")
            $("section").eq(n).fadeIn();
        }



    }) // a click

    $(".main_m>li>a").click(function(){
        $(this).next(".sub_m").slideToggle();
        $(this).toggleClass("hide")

    })

    let foreFade = setInterval(fade01, 4000)
    let fore = 0;
    $(".fade_01 li").eq(0).show().siblings().hide();
    $(".btn_01 li").eq(0).addClass("on")

    function fade01() {
        $(".fade_01 li").eq(fore).fadeOut(1000);
        $(".btn_01 li").eq(fore).removeClass("on")
        if (fore == 0) {
            fore = 1
        } else {
            fore = 0
        }
        $(".fade_01 li").eq(fore).fadeIn(1000);
        $(".btn_01 li").eq(fore).addClass("on")

    }
    $(".btn_01 li a").hover(function () {
        clearInterval(foreFade);

    }, function () {
        foreFade = setInterval(fade01, 5000)
    })
    $(".btn_01 li a").click(function () {

        if (!$(this).parent().hasClass("on")) {
            $(".btn_01 li").removeClass("on")
            $(this).parent().addClass("on")
            fore = $(this).parent().index();
            $(".fade_01 li").fadeOut();
            $(".fade_01 li").eq(fore).fadeIn();
        }
    }) //fade btn click 
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    let winterFade = setInterval(fade02, 4000)
    let wint = 0;
    $(".fade_02 li").eq(0).show().siblings().hide();
    $(".btn_02 li").eq(0).addClass("on")

    function fade02() {
        $(".fade_02 li").eq(wint).fadeOut(1000);
        $(".btn_02 li").eq(wint).removeClass("on")
        if (wint == 0) {
            wint = 1
        } else {
            wint = 0
        }
        $(".fade_02 li").eq(wint).fadeIn(1000);
        $(".btn_02 li").eq(wint).addClass("on")

    }
    $(".btn_02 li a").hover(function () {
        clearInterval(winterFade);

    }, function () {
        winterFade = setInterval(fade02, 5000)
    })
    $(".btn_02 li a").click(function () {

        if (!$(this).parent().hasClass("on")) {
            $(".btn_02 li").removeClass("on")
            $(this).parent().addClass("on")
            fore = $(this).parent().index();
            $(".fade_02 li").fadeOut();
            $(".fade_02 li").eq(fore).fadeIn();
        }
    }) //fade btn click 

    $(".sec03_list .img_list li").eq(0).show().siblings().hide();
    let wn=0;

    $(".sec03_list .next_arrows").click(function(e){
        $(".sec03_list .img_list li").fadeOut();

        if (wn < 2) {
            wn++;
        } else {
            wn = 0;
        }
        $(".sec03_list .img_list li").eq(wn).fadeIn();

    }) //next click

    $(".sec03_list .back_arrows").click(function(){
        $(".sec03_list .img_list li").fadeOut();
        if(wn==0){
            wn=2;
        }else{
            wn--;
        }
        $(".sec03_list .img_list li").eq(wn).fadeIn();


    })//prev







// @@@@@@@@@@@@@@@@@@@@@@@@@이미지 슬라이드@@@@@@@@@@@@@@@@@@@
    
    $("a.moreinfo").click(function () {
        let i=$("a.moreinfo").index(this);
        console.log(`i=${i}`)
        $(".info_cont").animate({
            "right": "0"
        }, 10,function(){
            $(".info_cont>ul>li").eq(i).delay(500).fadeIn(1000);
            $(".blackbg").fadeIn();
            $(".pageshot").eq(i).delay(600).fadeIn(1000);
            
        }) //info animate + 콜백함수
    })//moreinfo click (인포창 등장)
    $(".info_cont .info_close,aside").click(function () {
        $(".info_cont").animate({
            "right": "-35vw"
        }, 10,function(){
            $(".info_cont>ul>li").fadeOut(1000)
            $(".blackbg").fadeOut();
            $(".pageshot").fadeOut();
        })
    }) //close click (인포창 퇴장)




















}) //jQuery