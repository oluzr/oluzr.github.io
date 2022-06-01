$(function () {
    setTimeout(function(){

        $("#sec01 .into_text h2").animate({
            "opacity": "1"
        }, 500)
        $("#sec01 .into_text h2").delay(200).animate({
            "font-size": "2.3vw",
            // "opacity":".6",
        }, 500)
        $("#sec01 .into_text h3").delay(700).animate({
            "top": "48%",
            "opacity": "1"
        }, 500)
        $("#sec01 .down").delay(1500).animate({
            "opacity":"1"
        },1000)
        
        
        $("#sec01 .illu").animate({
            "opacity": "1"
        }, 1000)
    },100)



    $("html, body").on("mousewheel DOMMouseScroll", function (e) {
        let top = $(window).scrollTop();
        var delta = e.originalEvent.wheelDelta; // -120  120
        var detail = e.originalEvent.detail; //   3   -3
        // const scrollT = $("body").offset().top;
        // console.log(top)
        if (top <= 400) {

            $(".fix_nav").slideUp();
        } else if (top >= 200) {

            if (delta < 0 || detail > 0) {
                $(".fix_nav").slideUp();


            } else if (delta > 0 || detail < 0) {

                $(".fix_nav").slideDown();

            }
        }



    }) //mousewheel DOMMouseScroll
    //스킬@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    setInterval(function () {
        $(".circleChart#html").circleChart({
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,
            speed: 2000,
            animate: true,
            value: 90,
            text: true,
            size: 130,
            color: "rgb(0, 132, 255)",
            startAngle: 180,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            }
        })
    }, 4000)

    setInterval(function () {
        $(".circleChart#css").circleChart({
            color: "rgb(0, 132, 255)",
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,
            speed: 2000,
            animate: true,
            value: 85,
            size: 130,
            startAngle: 180,
            text: true,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            },
        })
    }, 4000)

    setInterval(function () {
        $(".circleChart#javascript").circleChart({
            color: "rgb(0, 132, 255)",
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,
            speed: 2000,
            animate: true,
            text: true,
            value: 70,
            size: 130,
            startAngle: 180,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            },
        })
    }, 4000)
    setInterval(function () {

        $(".circleChart#jquery").circleChart({
            color: "rgb(0, 132, 255)",
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,
            speed: 2000,
            animate: true,
            value: 80,
            text: true,
            size: 130,
            startAngle: 180,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            },
        })
    }, 4000)
    setInterval(function () {
        $(".circleChart#photoshop").circleChart({
            color: "rgb(0, 132, 255)",
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,
            speed: 2000,
            animate: true,
            value: 99,
            text: true,
            size: 130,
            startAngle: 180,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            },
        })
    }, 4000)
    setInterval(function () {
        $(".circleChart#illust").circleChart({
            color: "rgb(0, 132, 255)",
            backgroundColor: "rgb(243, 243, 243)",
            autoCss: true,
            background: true,

            text: true,

            speed: 2000,
            animate: true,
            value: 85,
            size: 130,
            startAngle: 180,
            redraw: true,
            onDraw: function (el, circle) {
                circle.text(Math.round(circle.value) + "%");
            },
        })
    }, 4000)
    //스킬@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@









}) // jQuery

$(window).scroll(function (e) {
    const wintop = parseInt($(this).scrollTop());
    console.log(`wintop=${wintop}`)
    if (wintop >= 2300) {
        $(".chart").addClass("show")
        $(".sec03_inner h3").addClass("show")
        $(".chart p").addClass("show")
    } else {
        $(".chart").removeClass("show")
        $(".sec03_inner h3").removeClass("show")
        $(".chart p").removeClass("show")
    }
    if (wintop >= 250) {
        $("#sec01 .into_text h2").fadeOut();
    } else {

        $("#sec01 .into_text h2").fadeIn();
    }


    if (wintop>=1150) {
        $(".adjective p").addClass("show")
        $(".adjective p").each(function (i) {
            $(this).animate({
                "left": "12vw"
            }, 800 * i).delay(1000)
        }) //each
    }

    if(wintop>=3830){
        $(".hand").addClass("move",1000)
        $(".twink").addClass("move",1000)
        $(".twink2").fadeIn(2000)
        $(".comment").addClass("show",1000);
        $(".location, .left_arrows").delay(600).fadeIn(700)
    }else{
        
        $(".location, .left_arrows").hide()
        $(".hand").removeClass("move",1000)
        $(".twink").removeClass("move",1000)
        $(".twink2").fadeOut(1000)
        $(".comment").removeClass("show",1000)
    }
    






}) //window scoll




window.onload = function () {
    flower = document.querySelector(".illu_flower")
    cactus = document.querySelector(".illu_cactus")
    fig = document.querySelector(".illu_fig")
    rainbow = document.querySelector(".illu_rainbow")
    canvas = document.querySelector("#canvas")
    title = document.querySelector(".into_text h2")
    title2 = document.querySelector(".into_text h3")
    window.addEventListener("scroll", scrollFun, false)

} // window.onload

function scrollFun() {
    scrolltop = document.documentElement.scrollTop;
    // console.log(scrolltop);

    flower.style.transform = "translate3d(0px," + scrolltop * 0.4 + "px,0px)"

    cactus.style.transform = "translate3d(0px," + scrolltop * 0.6 + "px,0px)"
    fig.style.transform = "translate3d(0px," + scrolltop * 0.5 + "px,0px)"
    rainbow.style.transform = "translate3d(0px," + scrolltop * 0.6 + "px,0px)"
    canvas.style.transform = "translate3d(0px," + scrolltop * 0.2 + "px,0px)"
    // title.style.transform = "translate3d(0px," + scrolltop * 0.7 + "px,0px)"



} // scrollfun