$(function(){
    const mySwiper = new Swiper('.swiper', {
        
        slidesPerView: "auto",
        slidesPerGroup:1,
        speed: 600,
        spaceBetween: 20,
        // Optional parameters
        direction: 'horizontal',
        centeredSlides: true,
        //loop: true,
        on: {
            slideChangeTransitionStart: function () {
                // Slide captions
                var swiper = this;
                setTimeout(function () {
                    var currentTitle = $(swiper.slides[swiper.activeIndex]).attr(
                        "data-title");
                    var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr(
                        "data-subtitle");
                }, 500);
                gsap.to($(".current-title"), 0.4, {
                    autoAlpha: 0,
                    y: -30,
                    ease: Power1.easeIn
                });
                gsap.to($(".current-subtitle"), 0.4, {
                    autoAlpha: 0,
                    y: -30,
                    delay: 0.15,
                    ease: Power1.easeIn
                });

            },
            
            slideChangeTransitionEnd: function () {
                // Slide captions
                var swiper = this;
                var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
                var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr(
                    "data-subtitle");
                $(".slide-captions").html(function () {
                    return "<h2 class='current-title'>" + currentTitle + "</h2>" +
                        "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
                });
                gsap.from($(".current-title"), 0.4, {
                    autoAlpha: 0,
                    y: 30,
                    ease: Power1.easeOut
                });
                gsap.from($(".current-subtitle"), 0.4, {
                    autoAlpha: 0,
                    y: 30,
                    delay: 0.15,
                    ease: Power1.easeOut
                });
            }
        }


    });
    // Slide captions
    var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
    var currentSubtitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
    $(".slide-captions").html(function () {
        return "<h2 class='current-title'>" + currentTitle + "</h2>" +
            "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
    });



    const wrap=document.querySelector("#wrap")
    const p2 = wrap.querySelector("p.time")

    function count() {
        const now = new Date();
        const hour = String(now.getHours()).padStart(2,"0")
        const min = String(now.getMinutes()).padStart(2,"0")
        const sec = String(now.getSeconds()).padStart(2,"0")
        console.log()
        $("p.time span").text(`${hour}:${min}:${sec}`)
    }
    setInterval(count,100)



}) //jq end