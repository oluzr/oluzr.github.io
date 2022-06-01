$(function(){


    let n=0;
    let time=setInterval(fade, 3000)
    $(".img_slide li").first().show().siblings().hide()
    $(".img_slide_btn a").first().addClass("on")

    function fade(){
        $(".img_slide li").eq(n).fadeOut(1000);
        $(".img_slide_btn a").eq(n).removeClass("on")
        
        if(n==0){
            n=1;
        }else{
            n=0;
        }
        $(".img_slide li").eq(n).fadeIn(1000);
        $(".img_slide_btn a").eq(n).addClass("on")
    }

    $(".img_slide_btn a").hover(function(){
        clearInterval(time)
    },function(){
        time=setInterval(fade, 2000)
    })

    $(".img_slide_btn a").click(function(){
        let n=$(this).index()
        fade()

    })// slide a click


    $(".program_list .hover a,.info_go_to p").click(function(e){
        e.preventDefault();
        $(".service_popup").stop().fadeIn().delay(1000).fadeOut()
    })//program a click
    
    



}) //jQuery

$(window).scroll(function(){
    const top= $(this).scrollTop();
    console.log(top)

    if(top>100){
        $("#header").addClass("on")
    } else{
        $("#header").removeClass("on")
    }

    if(top>180){
        $(".info_badge").addClass("show")

    }




    if(top>750){
        $(".program_list").addClass("show",1000)
        
    }else{
        
        $(".program_list").removeClass("show")
    }



})//scroll