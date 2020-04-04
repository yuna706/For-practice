$(function(){
//    메뉴촤르륵
    $(".nav").mouseover(function(){
        $(".sub").stop().slideDown(500);
    })
    $(".nav").mouseout(function(){
        $(".sub").stop().slideUp(500);
    })
    
//    이미지 슬라이드
    let imgs = $("#slide> a");
    let idx = 0;
    
    setInterval(function(){
        let next = (idx+1) % 3;
        
        imgs.eq(next).css("left", "100%").animate({"left":"0"},1000);
        imgs.eq(idx).animate({"left":"-100%"},1000);
        
        idx = next;
    }, 3000);
    
//    탭메뉴
    let note = $(".notice");
    let gall = $(".gall");
    $("#notice").click(function(){
        note.addClass("on");
        gall.removeClass("on");
    });
    $("#gall").click(function(){
        gall.addClass("on");
        note.removeClass("on");
    });
    
//    팝업메뉴
    $(".notice> li").eq(0).click(function(){
        $(".popup").css("display","block");
    })
    $(".popup> button").click(function(){
        $(".popup").css("display","none");
    })
})