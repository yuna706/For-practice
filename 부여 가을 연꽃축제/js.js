$(function(){
//    메뉴
    $("header> ul> li").mouseover(function(){
        $(this).children(".sub").stop().slideDown(500);
    });
    $("header> ul> li").mouseout(function(){
        $(".sub").stop().slideUp(500);
    });
    
//    슬라이드
    let imgs = $(".img");
    let idx = 0;
    
    setInterval(function(){
        let next = (idx+1) % imgs.length;
        
        imgs.eq(idx).fadeOut(500);
        imgs.eq(next).fadeIn(500);
        
        idx = next;
    }, 3000);
    
//    팝업창 띄우기
    $(".notice> ul> li> a").eq(0).click(function(){
        $("#popup").css("display", "block");
    });
    $(".popup> button").click(function(){
        $("#popup").css("display", "none");
    })
})