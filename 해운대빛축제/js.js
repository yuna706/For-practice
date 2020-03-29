$(function(){
    // 메뉴 슬라이드
    $("header> ul> li").mouseover(function(){
        $(this).children("ul").stop().slideDown(500);
    });
    $("header> ul").mouseout(function(){
        $(".sub").stop().slideUp(500);
    });

    // 이미지 fade
    let imgs = $("#slide> img");
    let idx = 0;

    setInterval(function(){
        let next = (idx+1) % imgs.length;

        imgs.eq(next).fadeIn(500);
        imgs.eq(idx).fadeOut(500);

        idx = next;
    }, 3000);

    // 탭메뉴
    $("#notice").click(function(){
        $(".gall").removeClass("on");
        $(".notice").addClass("on");
    });
    $("#gall").click(function(){
        $(".notice").removeClass("on");
        $(".gall").addClass("on");
    });

    // popup화면
    $(".notice> li> a").eq(0).click(function(){
        $(".popup").fadeIn(200);
    });
    $(".popup> button").click(function(){
        $(".popup").fadeOut(200);
    })
});