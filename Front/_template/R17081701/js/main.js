$(function() {
    var $html = $("html, body");
    var $overlay = $(".overlay-bg");
    var $wrap = $(".mainnav-wrap, .login-wrap, .meminfo-wrap");

    // 關閉按鈕
    $(".close-btn").click(function(){
        $html.removeClass("no-scroll");
        $overlay.removeClass("active");
        $wrap.removeClass("active");
        $(".mainnav-btn .btn-nav").removeClass("active");
        $(".mainnav-btn .btn-member").removeClass("active");
    });
    
    // 首頁遊戲圖高度
    var h = $('.ele-firstgame > a').width() * 0.935;
    $('.ele-firstgame > a').height(h);
    
    $(window).resize(function(){
        setTimeout(function(){
            var h = $('.ele-firstgame > a').width() * 0.935;
            $('.ele-firstgame > a').height(h);
         }, 300);
    });
})

