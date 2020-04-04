$(function(){
//    메뉴슬라이드
    $(".nav").mouseover(function(){
        $(".sub, .subbg").stop().slideDown(500); 
    });
    $(".nav").mouseout(function(){
        $(".sub, .subbg").stop().slideUp(500); 
    });
    
//    이미지 슬라이드
    let imgs = $(".img");
    let idx = 0;
    
    setInterval(function(){
        let next = (idx+1) % imgs.length;
        
        imgs.eq(next).css("top","-100%").animate({"top":0}, 500);
        imgs.eq(idx).animate({"top":"100%"}, 500);
        
        idx = next;
    }, 3000);
    
//    팝업창
    let pop = $(".popup");
    $(".notice> ul> li").eq(0).children("a").click(function(){
        pop.css("display", "block");
    });
    $(".popup_m> button").click(function(){
        pop.css("display", "none");
    });
})