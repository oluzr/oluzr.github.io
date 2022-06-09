$(function () {
    var n = 0; //현재 보여지는 .page의 인덱스 번호 
    var moving = false; // toggle 


    main()

    function main() {

        if (n == 0) {
            $("#main .left_p").animate({
                "left": "12%"
            }, 1000)
            $("#main .right_p").animate({
                "right": "48%"
            }, 1300)

        } else {
            $("#main .left_p").animate({
                "left": "-100%"
            }, 100)
            $("#main .right_p").animate({
                "right": "-100%"
            }, 100)

        } //else if
    } //f(main)




    function race(){
        
        if(n==3){
            $("#race h4,#race h3,#race .logo").addClass("on",1000);
        } else{
            $("#race h4,#race h3,#race .logo").removeClass("on");
        }


        $(".box_inner").hover(function () {
            $("#race").css({
                "background-image": "url(./etc/race-bg2.png)"

            }) //배경변화
            $("#race h4,#race h3,#race .logo").removeClass("on"); //로고
            console.log( $("#race").css("background"))
            $("#race .circle,#race p").addClass("on");
            $("#race .text").text("2021");
            
        }, function () {
            $("#race").css({
                "background-image": "url(./etc/race-bg3.png)"
            }) //배경변화
            $("#race h4,#race h3,#race .logo").addClass("on"); //로고
            $("#race .circle,#race p").removeClass("on");
            
            $("#race .text").text("대회일정");
            
            
        })
    

    } //f(race)
    race();






    function loading() {
        var top = (window.innerHeight) * n * (-1);
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        $(".page").css({
            "width": winWidth,
            "height": winHeight
        }) //contents css
        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");

    } //f(loading)







/////////////////////////////////////////////////////////////////////////////////////////////////스크롤
    //mouseWheel
    $("html,body").on("mousewheel DOMMouseScroll", function (e) {

        main();
        race();
        // console.log("e:",e)
        var delta = e.originalEvent.wheelDelta; //120 -120
        var detail = e.originalEvent.detail; //3 -3
        // console.log("delta:",delta)
        if (moving == false) {
            moving = true;
            var h = window.innerHeight;
            var top = $(".contents").offset().top;
            console.log("h:", h);
            console.log("top:", top);


            if (delta < 0 || detail > 0) { //아래로스크롤 (contents 위로)
                if (n < 3) { //마지막 인덱스 제외한 섹션
                    n++;
                    top -= h;
                } //if(n<4)

            } // if(delta<0||detail>0) 
            else if (delta > 0 || detail < 0) { //위로 스크롤 (contents아래로)
                if (n > 0) { //맨 위 섹션 제외한 섹션
                    n--;
                    top += h;
                } //if(n>0)
            } //else if(delta>0||detail<0)

        } //if (moving==false)

        $(".contents").animate({
            top: top
        }, 500, function () {
            moving = false;

            if (n != 0) {
                $(".nav").addClass("on");
                $(".f_nav").hide()
            } //  if(n!=0)
            else {
                $(".nav").removeClass("on")
                $(".f_nav").show()
            } //else

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");


        }) //animate

    }) //on
/////////////////////////////////////////////////////////////////////////////////////////////////스크롤




////////////////////////////////////////////////////////////////////////////////////////////리사이즈
    function resize() {
        var top = (window.innerHeight) * n * (-1);
        $(".contents").css({
            top: top
        });
        $(".contents .page").css({
            width: window.innerWidth,
            height: window.innerHeight
        })
    } //f(resize)
    $(window).resize(function () {
        resize()
    }) //$(window).resize
////////////////////////////////////////////////////////////////////////////////////////////리사이즈

/////////////////////////////////////////////////////////////////////////////////////////////////메뉴클릭
    $(".nav ul li a, .f_nav ul li a , .btn_group  a").click(function () {
        // e.preventDefault();
        n = $(this).parent().index();
        $(".btn_group li").removeClass("on");
        $(".btn_group li").eq(n).addClass("on");
        var top = (-1) * n * (window.innerHeight);
        $(".contents").animate({
            top: top
        }, 500, function () {
            if (n != 0) {
                $(".nav").addClass("on")
                $(".f_nav").hide()

            } else {
                $(".nav").removeClass("on")
                $(".f_nav").show()
            } //if,else
        }) //animate
        main();
        race();
    }) //click
    /////////////////////////////////////////////////////////////////////////////////////////////////메뉴클릭








    //keydown
    $(window).keydown(function (e) {
        if (moving == false) {
            moving = true;
            var h = window.innerHeight;
            var top = $(".contents").offset().top;


            if (e.keyCode == 40) { //아래로스크롤 (contents 위로)
                if (n < 3) { //마지막 인덱스 제외한 섹션
                    n++;
                    top -= h;
                } //if(n<4)

            } // if(e.keyCode==40)
            else if (e.keyCode == 38) { //위로 스크롤 (contents아래로)
                if (n > 0) { //맨 위 섹션 제외한 섹션
                    n--;
                    top += h;
                } //if(n>0)
            } //else if(e.keyCode==38)
        } //if (moving==false)

        $(".contents").animate({
            top: top
        }, 500, function () {
            moving = false;

            if (n != 0) {
                $(".nav").addClass("on");
                $(".f_nav").hide()
            } //  if(n!=0)
            else {
                $(".nav").removeClass("on")
                $(".f_nav").show()
            } //else

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");
        }) //animate
        main();
        race();


    }) //keyboard on

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



}) //jQuery closed