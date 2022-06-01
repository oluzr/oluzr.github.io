$(function(){

    var shopslide=setInterval(leftmove,2000);

    function leftmove(){
        $(".view").animate({
            "left":"-=100vw"
        },1000,function(){
            $(".view li").eq(0).appendTo($(".view"));
            $(".view").css({"left":"+=100vw"});
        })

    }// f(leftmove)

$("#img_slide").hover(function(){
    clearInterval(shopslide)
},function(){
    shopslide=setInterval(leftmove,2000);
}) //slide hover 




    $(".main_menu>li, .bg").hover(function(){
        $(".sub_menu, .bg").stop().slideDown();
    },function(){
        $(".sub_menu, .bg").stop().slideUp();
    })

$(".popup button").click(function(){
    $(".modal_popup,.popup").fadeOut();
})//popup click









})// jQuery

$(window).scroll(function(){
    var top=$(this).scrollTop();

    if(top>1500){
        $("#banner>div").each(function(i){
            setTimeout(function(){
                $("#banner>div").eq(i).addClass("scroll")
            },400*i) //set time out
        }) //each
        $("#banner>h3,#banner>h4,#banner>h5,#banner>a").each(function(i){
            setTimeout(function(){
                $("#banner>h3,#banner>h4,#banner>h5,#banner>a").eq(i).addClass("scroll")
            },300*i) //set time out
        }) //each
        
        
        
        
        
        
    } else{
        $("#banner>div").each(function(i){
            setTimeout(function(){
                $("#banner>div").eq(i).removeClass("scroll")
            }) //set time out
        }) //each
        
        $("#banner>h3,#banner>h4,#banner>h5,#banner>a").each(function(i){
            setTimeout(function(){
                $("#banner>h3,#banner>h4,#banner>h5,#banner>a").eq(i).removeClass("scroll")
            }) //set time out
        }) //each
    } //else if

})//