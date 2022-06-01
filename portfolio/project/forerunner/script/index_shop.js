$(function(){


    var shopslide=setInterval(shop,2000);

    $(".shop_view ul li").fadeOut(1000);
    $(".shop_view ul li").first().fadeIn(1000);
    $(".shop_btn_group a").eq(0).addClass("on");
    var n=0;
    function shop(){
        $(".shop_view ul li").eq(n).fadeOut(1000);
        $(".shop_btn_group a").eq(n).removeClass("on");
        if(n<2){
            n++
        }else{
            n=0;
        }
        $(".shop_view ul li").eq(n).fadeIn(1000);
        $(".shop_btn_group a").eq(n).addClass("on");
    } //shop

    $(".shop_btn_group a").hover(function(){
        clearInterval(shopslide);
    },function(){
        shopslide=setInterval(shop,2000);
    }) //hover
    
    $(".shop_btn_group a").click(function(){
        $(".shop_btn_group a").removeClass("on");
        $(this).addClass("on");
        n=$(this).index();
        $(".shop_view ul li").fadeOut(1000);
        $(".shop_view ul li").eq(n).fadeIn(1000);
    })//



})//