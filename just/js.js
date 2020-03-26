$(function(){
    // submenu
    $("nav>*").mouseover(function(){
        $(".submenu").stop().slideDown(500);
    });
    $("nav>*").mouseout(function(){
        $(".submenu").stop().slideUp(500);
    });

    let imgs = $("#slide> ul> li"); //슬라이드 이미지 div를 저장
    let idx = 0; //현재 보고있는 슬라이드를 저장

    imgs.eq(idx).css("margin-left",0);
    
    setInterval(function(){
        let next = (idx+1) % imgs.length;
        imgs.eq(next).css("margin-left","1200px").animate({"margin-left":0},1000);
        imgs.eq(idx).animate({"margin-left":"-1200px"},1000);

        idx = next;
    },3000);
})