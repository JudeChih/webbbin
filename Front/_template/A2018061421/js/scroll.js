//視差捲動
$('.first-banner').each(function(){
    $(".first-banner .scroll-banner").css({
        "-webkit-filter": "grayscale(1)",
        "filter": "grayscale(1)"
    });

    $(window).resize(function() {
        resize_banner($(this).width());
    });

    function resize_banner(width) {
        var img_width = $(".first-banner img").width(),
            img_position = ($("body").width() - img_width) / 2;

        $(".first-banner").css({
            "position": "relative",
            "height": "280px",
            "overflow": "hidden"
        });

        $(".first-banner .scroll-banner").css({
            "position": "absolute",
            "width": "100%",
            "height": "380px"
        });

        $(".first-banner .scroll-banner .img").css({
            "height": "100%",
            "background-position": "center",
            "background-repeat": "no-repeat"
        });
    }

    resize_banner($("body").width());

    $(window).scroll(function() {
        parallax();
    });

    function parallax() {
        var scroll_y = $(window).scrollTop();
        //  首頁 - 我們的產品廣告圖
        if(scroll_y >= 500) {
            $(".banner-product").css({
                "top": -(scroll_y * 0.05) + "px",
                "-webkit-filter": "grayscale(0)",
                "filter": "grayscale(0)",
                "transition": "all .3s ease"
            });
        } else {
            $(".banner-product").css({
                "top": 0 + "px",
                "-webkit-filter": "grayscale(1)",
                "filter": "grayscale(1)",
                "transition": "all .3s ease"
            });
        }

        //  首頁 - 我們的服務廣告圖
        if (scroll_y >= 1200) {
            $(".banner-service").css({
                "top": -(scroll_y * 0.05) + "px",
                "-webkit-filter": "grayscale(0)",
                "filter": "grayscale(0)",
                "transition": "all .3s ease"
            });
        } else {
            $(".banner-service").css({
                "top": 0 + "px",
                "-webkit-filter": "grayscale(1)",
                "filter": "grayscale(1)",
                "transition": "all .3s ease"
            });
        }
    }
});
