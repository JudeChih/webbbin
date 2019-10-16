$(function() {

    //REMOVE INLINE-BLOCK NODE
    $('.removeTextNodes').contents().filter(function() {
    	return this.nodeType === 3;
    }).remove();
    

    var $html = $("html, body");
    var $overlay = $(".overlay-bg");
    var $wrap = $(".mainnav-wrap, .login-wrap, .meminfo-wrap");

    //HEADER NAV
    $(".mainnav-btn .btn-nav").click(function(){
        $(this).toggleClass("active");
        $html.addClass("no-scroll");
        $overlay.toggleClass("active");
        $(".mainnav-wrap").toggleClass("active");
    });
    $(".mainnav-btn .btn-member").click(function(){
        $(this).toggleClass("active");
        $html.addClass("no-scroll");
        $overlay.toggleClass("active");
        $(".login-wrap, .meminfo-wrap").toggleClass("active");
    });
    $(".close-btn").click(function(){
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
        if ($(window).width() < 768) {
            if($(this).parent().has(".subList")) {
                e.preventDefault();
            }
            if(!$(this).hasClass("current")) {
                $(".subList").slideUp();
                $(".subClick").removeClass("current");
                $(this).next(".subList").slideDown();
                $(this).addClass("current");
            }
            else if($(this).hasClass("current")) {
                $(this).removeClass("current");
                $(this).next(".subList").slideUp();
            }
        }
    });


    //餘額展開
    $("#js-ele-obalance-wrap").click(function(){
        $("#js-ele-obalance-item-wrap").slideToggle();
    });


    //畫面大於 768px，移除 jq 產生的 CSS 屬性
    if ($(window).width() > 768) {
        $(".subList").css("display", "");
        $(".js-ele-obalance-item-wrap").css("display", "");
    }
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $(".subList").css("display", "");
            $(".js-ele-obalance-item-wrap").css("display", "");
        }
        else {
            $(".subClick.current").next(".subList").css("display", "block");
        }
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