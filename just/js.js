$(function(){
    // submenu
    $("nav>*").mouseover(function(){
        $(".submenu").stop().slideDown(500);
    });
    $("nav>*").mouseout(function(){
        $(".submenu").stop().slideUp(500);
    });

    // 슬라이드
    let imgs = $(".img"); //슬라이드 이미지 div를 저장
    let idx = 0; //현재 보고있는 슬라이드를 저장

    imgs.eq(idx).css("left",0);
    
    setInterval(function(){
        let next = (idx+1) % imgs.length;
        imgs.eq(next).css("left","100%").animate({"left":0},1000);
        imgs.eq(idx).animate({"left":"-100%"},1000);
        idx = next;
    },3000);

    // 탭 메뉴
    $("#notice").click(function(){
        $("#contents *").removeClass("on");
        $("#notice").addClass("on");
        $(".notice").addClass("on");
    });
    $("#gall").click(function(){
        $("#contents *").removeClass("on");
        $("#gall").addClass("on");
        $(".gall").addClass("on");
    });

    // 팝업창
    $(".notice> ul> li").eq(0).click(function(){
        $(".popup").css("display","block");
    });
    $(".popup> button").click(function(){
        $(".popup").css("display","none");
    });
})