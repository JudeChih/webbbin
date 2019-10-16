$(function() {

    var $html = $("html, body");
    var $overlay = $(".overlay-bg");
    var $wrap = $(".mainnav-wrap, .login-wrap, .ele-popup-account-fixed");

    //HEADER NAV
    $(".btn-nav").click(function(){
        $(this).toggleClass("active");
        $html.toggleClass("no-scroll"); //addClass -> toggleClass
        $overlay.toggleClass("active");
        $(".mainnav-wrap").toggleClass("active");
    });
    $(".btn-member").click(function(){
        $(this).toggleClass("active");
        $html.addClass("no-scroll");
        $overlay.toggleClass("active");
        $(".login-wrap, .ele-popup-account-fixed").toggleClass("active");
    });
    $(".close-btn, .ele-popup-account-close").click(function(){
        $html.removeClass("no-scroll");
        $wrap.removeClass("active");
    	$overlay.removeClass("active");
    });
    $overlay.click(function(){
        $html.removeClass("no-scroll");
        $(this).removeClass("active");
    	$wrap.removeClass("active");
    });


    //HEADER NAV 子選單
    $(".subClick").on("click", function(e){
        if($(this).parent().has(".subList")) {
            e.preventDefault();
        }
        if(!$(this).hasClass("current")) {
            $(".subList").removeClass("slidedown");
            $(".subClick").removeClass("current");
            $(this).next(".subList").addClass("slidedown");
            $(this).addClass("current");
        }
        else if($(this).hasClass("current")) {
            $(this).removeClass("current");
            $(this).next(".subList").removeClass("slidedown");
        }
    });


    //文案頁選單
    $(".sidemenu-title").click(function(){
        $(".sidemenu").slideToggle();
    });

    function sidemenuOpen(){ 
       if( $(window).width() > 768){
            $(".sidemenu").css("display", "").css("overflow", "");
       } else {}
    }
    $(window).resize(function(){
        sidemenuOpen()
    });
    

    //返回頂部的 TOP 鈕
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240) {
            $(".btn-top").fadeIn();
        } else {
            $(".btn-top").fadeOut();
        }
    });
    $(".btn-top").click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

});