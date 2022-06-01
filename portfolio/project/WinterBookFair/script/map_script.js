$(function () {

    $(".map a").click(function () {
        $(".more_info_bg,.more_info").fadeIn();
    }) //등장~

    $(".info_close").click(function () {
        $(".more_info_bg,.more_info").fadeOut();
    }) // 퇴장~

    setInterval(illu, 1000)
    var startLeft = true;

    function illu() {
        const chaLeft = parseInt($(".illu_cha").offset().left);
        console.log(chaLeft)



            if (chaLeft <= 950) {
                $(".illu_cha").animate({
                    "left": "+=20px"
                }, 10)
            } else if (chaLeft > 950) {
                $(".illu_cha").css({
                    "transform": "rotateY(0deg)"
                })
            }

    } /* function illu()  */


    $(".park a").click(function (e) {
        e.preventDefault();
        $(".service_popup").stop().fadeIn().delay(1000).fadeOut()
    })



}) // jQuery