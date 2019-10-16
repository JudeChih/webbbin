$(function() {

    var $html = $("html, body");
    var $overlay = $(".overlay-bg");
    var $wrap = $(".mainnav-wrap, .login-wrap, .meminfo-wrap");

    //HEADER NAV
    $(".mainnav-btn .btn-nav").click(function(){
        $(this).toggleClass("active");
        $html.toggleClass("no-scroll"); //addClass -> toggleClass
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



$(".memberexclusiveii-content").fadeIn("slow");

//滑入滑出opacity效果
$('.memExclusive').on({
    mouseenter: function(){
        if (window.innerWidth <= 768) {
            return;
        }
        $(this).find('.js-exclusive-dialog-default').stop().animate({'opacity': 0}, 300);
    },
    mouseleave: function(){
        if (window.innerWidth <= 768) {
            return;
        }
        $(this).find('.js-exclusive-dialog-default').stop().animate({'opacity': 1}, 300);
    }
});

$(window).resize(function(){
    if (window.innerWidth <= 768) {
        $('.js-exclusive-dialog-default').stop().animate({'opacity': 0}, 300);
    } else {
        $('.js-exclusive-dialog-default').stop().animate({'opacity': 1}, 300);
    }
    
});


var h = $('.ele-firstgame > a').width() * 0.935;
$('.ele-firstgame > a').height(h);

$(window).resize(function(){
    setTimeout(function(){
        var h = $('.ele-firstgame > a').width() * 0.935;
        $('.ele-firstgame > a').height(h);
     }, 300);
});