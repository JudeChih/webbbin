var is_rwd = 0;

if($(".ele-slideshow-full-img").length > 0){
    is_rwd = 1;
}

$('.ele-slideshow-wrap img').each(function () {
    var img = $(this).prop('src');
    if (img.indexOf('.png') != -1 && navigator.userAgent.indexOf("MSIE") != -1) {
        $(this).attr('style', 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + img + '",sizingMethod="scale")');
    }
});

$('#js-ele-slideshow'+1).slideshow({
    uni            : 1,
    animationType  : 'slideh',
    animationTime  : 1.5,
    animationOption: {
        row : 10,
        col : 6
    },
    isNav          : !!1,
    isControl      : !!1,
    navPosition    : 'center',
    isNumber       : !!0,
    isArrow        : !!1,
    isText         : !!1,
    textTime       : 2,
    random         : !!1,
    //自動撥放
    isAutoPlay     : !!1,
    hoverPause      : !!1,
    isLink         : !!1,
    isRunLine      : !!0,
    runLinePos     : 'bottom',
    fullScreen     : 0,
    fullScreenIEType     : 'slideh'
});
