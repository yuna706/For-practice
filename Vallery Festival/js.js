$(function(){
//  메뉴
  $("header> ul> li").mouseover(function(){
                                $(this).children(".sub").stop().slideDown(500);
                                });
    $("header> ul> li").mouseout(function(){
                                $(".sub").stop().slideUp(300);
                                });
    
//    슬라이드
    let imgs = $(".img");
    let idx = 0;
    
    imgs.eq(idx).css("top", 0);
    
    setInterval(function(){
        let next = (idx+1) % 3;
        
        imgs.eq(next).css("top", "-350px").animate({"top":0}, 1000);

        imgs.eq(idx).animate({"top":"350px"}, 1000);
        
        idx = next;
    }, 3000);
    
//    탭메뉴
    $("#notice").click(function(){
        $("#notice, .notice").removeClass("down");
        $("#gall, .gall").addClass("down");
    })
    $("#gall").click(function(){
        $("#gall, .gall").removeClass("down");
        $("#notice, .notice").addClass("down");
    });
    
//    팝업화면
    $(".notice> li> a").eq(0).click(function(){
        $(".popup").css("display", "block");
    })
    $(".popup_m> button").click(function(){
        $(".popup").css("display", "none");
    })
    
  })