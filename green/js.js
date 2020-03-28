$(function(){
    // 서브메뉴
    $("header> ul> li").mouseover(function(){
        $("header> ul> li> ul").stop().slideDown(500);
    });
    $("header> ul> li").mouseout(function(){
        $("header> ul> li> ul").stop().slideUp(500);
    });

    // 이미지 슬라이드
    let img = $(".img");
    let idx = 0;

    img.eq(idx).css("left", 0);
    setInterval(function(){
        let next = (idx+1) % imgs.length;

        img.eq(next).css("left","1200px").animate({"left":0}, 500);
        img.eq(idx).animate({"left":"-1200px"}, 500);
        idx = next;
    }, 3000);

    // popup
    $(".notice> ul> li").eq(0).click(function(){
        $("#popup").css("display","block");
    })
    $(".popup> button").click(function(){
        $("#popup").css("display","none");
    })
});