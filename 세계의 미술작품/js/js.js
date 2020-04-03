$(function(){
//    메뉴
    $(".nav> li").mouseover(function(){
        $(this).children(".sub").stop().slideDown(500);
    });
    $(".nav").mouseout(function(){
        $(".sub").stop().slideUp(500);
    });
    
//    슬라이드
    let imgs = $(".img");
    let idx = 0;
    
    setInterval(function(){
        let next = (idx+1) % imgs.length;
        imgs.eq(next).css("top","-100%").animate({"top":"0"}, 500);
        imgs.eq(idx).animate({"top":"100%"}, 500);
        
        idx = next;
    }, 3000)
    
//    팝업화면
    $(".notice> ul> li").eq(0).click(function(){
        $(".popup").css("display", "block");
    })
    $(".popup> button").click(function(){
        $(".popup").css("display", "none");
    })
})