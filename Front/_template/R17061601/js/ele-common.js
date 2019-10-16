$(function() {

    var $html = $("html, body");
    var $overlay = $(".overlay-bg");
    var $wrap = $(".mainnav-wrap, .login-wrap, .meminfo-wrap");

    //HEADER NAV
    //選單
    $(".mainnav-btn .btn-nav").click(function(){
        $(this).toggleClass("active");
        $(".mainnav-btn .btn-member").removeClass("active");
        $(".mainnav-wrap").toggleClass("active");   
        //定住頁面不滑動
        // $html.toggleClass("no-scroll");
        $(".login-wrap, .meminfo-wrap, .ele-popup-group").removeClass("active");
        if(!$html.hasClass("no-scroll")) {
            $html.addClass("no-scroll");
        }
        else if($html.hasClass("no-scroll") && !$(".mainnav-wrap").hasClass("active")) {
            $html.removeClass("no-scroll");
        }
        //增加遮罩
        // $overlay.toggleClass("active");
        if(!$overlay.hasClass("active")) {
            $overlay.addClass("active");
        }
        else if($overlay.hasClass("active") && !$(".mainnav-wrap").hasClass("active")) {
            $overlay.removeClass("active");
        }
    });
    
    //會員登入
    $(".mainnav-btn .btn-member").click(function(){
        $(this).toggleClass("active");
        $(".mainnav-btn .btn-nav").removeClass("active");
        $(".mainnav-wrap, .ele-popup-group").removeClass("active");
        //定住頁面不滑動
        // $html.toggleClass("no-scroll");
        $(".login-wrap, .meminfo-wrap").toggleClass("active");
        if(!$html.hasClass("no-scroll")) {
            $html.addClass("no-scroll");
        }
        else if($html.hasClass("no-scroll") && !$(".login-wrap, .meminfo-wrap").hasClass("active")) {
            $html.removeClass("no-scroll");
        }
        //增加遮罩
        // $overlay.removeClass("active");
        if(!$overlay.hasClass("active")) {
            $overlay.addClass("active");
        }
        else if($overlay.hasClass("active") && !$(".login-wrap, .meminfo-wrap").hasClass("active")) {
            $overlay.removeClass("active");
        }
    });

    //語系
    $(".mainnav-btn .btn-lang").click(function(){
        $(this).toggleClass("active");
        $(".mainnav-btn .btn-nav, .mainnav-btn .btn-member").removeClass("active");
        $(".mainnav-wrap, .login-wrap, .meminfo-wrap").removeClass("active");
        //定住頁面不滑動
        // $html.toggleClass("no-scroll");
        $(".ele-popup-group").toggleClass("active");
        if(!$html.hasClass("no-scroll")) {
            $html.addClass("no-scroll");
        }
        else if($html.hasClass("no-scroll") && !$(".ele-popup-group").hasClass("active")) {
            $html.removeClass("no-scroll");
        }
        //增加遮罩
        // $overlay.removeClass("active");
        if(!$overlay.hasClass("active")) {
            $overlay.addClass("active");
        }
        else if($overlay.hasClass("active") && !$(".ele-popup-group").hasClass("active")) {
            $overlay.removeClass("active");
        }
    });


    //遮罩關閉
    $overlay.click(function(){
        $html.removeClass("no-scroll");
        $(this).removeClass("active");
    	$wrap.removeClass("active");
        $(".mainnav-btn .btn-nav").removeClass("active");
        $(".mainnav-btn .btn-member").removeClass("active");
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


    //餘額展開
    $("#js-ele-obalance-wrap").click(function(){
        $("#js-ele-obalance-item-wrap").toggleClass("active");
    });


    //文案頁選單
    $(".page-sidebar-title").click(function(){
        $(".page-sidebar-content").slideToggle();
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


    // form placeholder
    $('input[type="text"] , input[type="password"] , textarea').each(function(){
        $(this).focus(function(){
            $(this).addClass('placeholder');
        });
        $(this).blur(function(){
            $(this).removeClass('placeholder');
        });
    });

    // 語系展開
    $('#ele-lang-wrap').click(function() {
        $('#ele-lang-group').stop().slideToggle('fast');
    });

});