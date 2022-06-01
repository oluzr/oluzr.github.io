$(function(){
    $(".set_area ul li").on("click",function(){
        const color=$(this).css("background-color")
        console.log(color)
        painting(color)
        localStorage.setItem("bg",color)
        if($(this).hasClass("dark")){
            localStorage.setItem("mode","dark")
        }else{
            localStorage.setItem("mode","none")
        }
        const ver=localStorage.getItem("mode")
        mode_paint(ver)
    })



    function mode_paint(mode){
        if(mode=="dark"){
            $("body").addClass("whiteTxt")
        }else{
            $("body").removeClass("whiteTxt")
        }
    }
    const savedmode=localStorage.getItem("mode")
    if(savedmode!==null){
        mode_paint(savedmode)
    }





    function painting(color){
        $("body").css({"background-color":color})
    }

    const savedcolor=localStorage.getItem("bg")
    if(savedcolor!==null){
        painting(savedcolor)
    }
    



})//jQ