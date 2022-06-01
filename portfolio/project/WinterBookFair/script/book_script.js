$(function(){


    $(".book_slide").slick({
        autoplay:true,
        autoplaySpeed:1400,
        slidesToShow:3, 
        slidesToScroll:1,
        centerMode:true,
        slidesPerRow: 1, 
        variableWidth: true, 
        draggable: true,  
        pauseOnFocus: true,
        pauseOnHover: true,
        dots:true,
        // centerPadding: '150px',
    }) //slide
    

    $(".book_slide li a.info_a").click(function(){
        var i=parseInt($(this).attr("data-"))
        console.log(i)
        $(".more_info_bg,.more_info").fadeIn();
        $(".more_info ul li").removeClass("show");
        $(".more_info ul li").eq(i).addClass("show")
    }) //등장~






    $(".info_close").click(function(){
        $(".more_info_bg,.more_info").fadeOut();
    })// 퇴장~

    $(".book_slide li").hover(function(){
        $(this).find(".info_a").addClass("on");
        $(this).find(".book").stop().animate({
            "opacity":"0.5"
        },300)
    },function(){
        $(this).find(".info_a").removeClass("on");
        $(this).find(".book").stop().animate({
            "opacity":"1"
        },300)
    }) //book hover


})//jQuery