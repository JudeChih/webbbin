new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
//- 按鈕透明度切換
$('.hoverFade a').hover(
    function() {
        $(this).stop().animate({
            'opacity': 0
        }, 650);
    },
    function() {
        $(this).stop().animate({
            'opacity': 1
        }, 650);
    }
);
//- 回到頂端
$(function() {
    $("#top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});