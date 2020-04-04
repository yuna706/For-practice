$(function(){
//    메뉴 슬라이드
    $(".nav> li").mouseover(function(){
        $(this).children(".sub").stop().slideDown(500);
    });
    $(".nav> li").mouseout(function(){
        $(".sub").stop().slideUp(500);
    });
    
//    이미지 슬라이드
    let imgs = $(".img");
    let idx = 1;
    
    setInterval(function(){
        let next = (idx+1) % 3;

        imgs.eq(next).fadeIn(500);
        imgs.eq(idx).fadeOut(500);
        idx = next;
        
    }, 3000)
    
//    탭메뉴
    $("#notice").click(function(){
        $(".gall").removeClass("on");
        $(".notice").addClass("on");
    });
    $("#gall").click(function(){
        $(".notice").removeClass("on");
        $(".gall").addClass("on");
    });
    
//    팝업창
    $("ul.notice> li").eq(0).click(function(){
        $(".popup").css("display", "block");
    });
    $(".popup> button").click(function(){
        $(".popup").css("display", "none");
    });
})