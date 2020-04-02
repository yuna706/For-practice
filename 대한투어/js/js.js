$(function(){
//    메뉴
    $("header> ul").mouseover(function(){
        $("header> .bg, header .sub").stop().slideDown(500);
    })
    $("header> ul").mouseout(function(){
        $("header> .bg, header .sub").stop().slideUp(500);
    })
    
//    슬라이드
    let imgs = $(".img");
    let idx = 0;
    
    imgs.eq(idx).css("top", 0);
    setInterval(function(){
        let next = (idx+1)%3;
        
        imgs.eq(idx).animate({"top":"100%"}, 500);
        imgs.eq(next).css("top", "-100%").animate({"top":0}, 500);
        
        idx = next;
    }, 3000);
    
//    popup
    $(".notice> ul> li> a").eq(0).click(function(){
        $(".popup").css("display","block");
    });
    $(".popup_m> button").click(function(){
        $(".popup").css("display","none");
    })
})