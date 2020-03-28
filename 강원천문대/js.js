$(function(){
    // 메뉴
    $("header> ul> li").mouseover(function(){
        let dd = $(this).children(".sub");
        $(dd).stop().slideDown(500);
    });
    $("header> ul").mouseout(function(){
        $(".sub").stop().slideUp(500);
    });

    // 슬라이드
    let img = $(".img")
    let idx = 0;

    setInterval(function(){
        let next = (idx + 1) % 3;
        
        $(img).eq(idx).fadeOut(500);
        $(img).eq(next).fadeIn(500);

        idx = next;
    }, 3000);

    // tab 메뉴
    $(".tab_b> #note").click(function(){
        $(".tab_c> *, .tab_b> *").removeClass("on");
        $(".notice, #note").addClass("on");
    })
    $(".tab_b> #gall").click(function(){
        $(".tab_c> *, .tab_b> *").removeClass("on");
        $(".gall, #gall").addClass("on");
    })

    // popup
    $(".notice> li").eq(0).click(function(){
        $(".popup").fadeIn(100);
    })
    $(".popup> button").click(function(){
        $(".popup").fadeOut(100);
    })
})