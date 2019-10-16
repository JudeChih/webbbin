$(() => {
    const slider = () => {
        $('#js-ele-slideshow').slideshow({
            uni: 1,
            animationType: 'fade', // 動畫效果 fade=漸變, overlay=疊加, slideh=區塊左右, slidev=區塊上下
            isNav: 1, // 是否需要 dots 是=1, 否=0
            isNumber: 1, // 是否需要 數值 是=1, 否=0
            navPosition: 'center', // 繼承上一問題__dots 位置
            isArrow: 1, // 是否需要 箭頭 是=1, 否=0
            isRunLine: 0, // 是否需要 runline 是=1, 否=0
            isText: true,
            textX: 0,
            textY: 210,
            textTime: 1,
            random: true,
            isAutoPlay: 0,
        });
    };

    const firstRWD = () => {
        let windowW = $(window).width();
        let $textBox = $(".js-ele-slideshow-text-wrap");
        let $arrowButton = $(".ele-slideshow-arrow-wrap a");
        let ml = $(".ele-slideshow-scroll").width() / 2 - $(".ele-slideshow-text").width() / 2;
        let at = $(".ele-slideshow-scroll").height() / 2 - $arrowButton.height() / 2;
        let textImg = $(".js-ele-slideshow-text-wrap img");
        let firstBtnMB = $(".first-sports .first-game-col").outerHeight() - $(".first-sports").outerHeight();



        // 算first game斷行後需要的style
        if (windowW > 768) {
            $textBox.css("top", 210);
            $(".first-sports,.first-casino").removeAttr("style");
        } else {
            $textBox.css("top", 120);
            $(".first-sports,.first-casino").css("marginBottom", 192 + firstBtnMB);
        }

        // 算slider的文字style、按鈕style
        $textBox.css('marginLeft', ml);
        $arrowButton.css('top', at);
        // // 換slider字的圖片
        // for (let index = 0; index < textImg.length; index++) {
        //     let num = index + 1
        //     if (windowW > 768) {
        //         $('.ele-text-position' + index).attr("src", "image/slider0" + num + "t.png")
        //     } else {
        //         $('.ele-text-position' + index).attr("src", "image/slider0" + num + "t_m.png")
        //     }
        // }
    };

    slider();
    setTimeout(() => { firstRWD() }, 100)
    window.addEventListener("resize", firstRWD);
});