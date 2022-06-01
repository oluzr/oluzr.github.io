$(function(){

$(".head_aside").click(function(e){
    e.preventDefault();
    $("aside").animate({
        "left":"0px"
    },400)
}) //aside in

$(".aside_close").click(function(e){
    e.preventDefault();
    $("aside").animate({
        "left":"-20vw"
    },400)
})//aside out

}) //jQuery