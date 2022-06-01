$(function(){
    $(".wrap>ul").slick({
        slidesToShow:3,// 화면에 보여지는 목록 개수
        slidesToScroll:1, //몇개씩 스크롤 할 것인지
        centerMode:true,
        autoplay: true, //자동스크롤여부
        // speed:100, //다음 버튼을 누르고 화면 뜨는데까지 걸리는 시간
        // arrows:true, //옆으로 이동하는 버튼 표시여부
        dots:true, //스크롤 바 아래 점으로 페이지네이션 여부
        // slide:"li", //슬라이드 되어야할 태그
        // autoplaySpeed:1000, //자동 스크롤 시 다음으로 넘어가는데 걸리는 시간
        // infinite:true,
    })


})//