(function () {
    'use strict';
    pluginEffect.overlay = {
        initial: function () {
            var main = this;

            main.param.slideUl
                .find('li')
                .eq(0)
                .css('z-index', 1);
        },
        move: function (index) {
            var main = this,
                param = main.settings,
                $li = main.param.slideUl.find('li'),
                $liCurrent = $li.eq(index).css('z-index', 2);

            if(main.param.fullScreen === 1){
                main.param.mainWidth = main.param.slide.width();
            }

            main.moveTl.from($liCurrent, param.animationTime, {
                left: main.param.mainWidth,
                ease: Expo.easeInOut
            }, 0);
        },
        reSet: function (main) {
            main.moveTl.clear();
            main.param.slideUl.find('li').eq(main.param.nowAt - 1).css('z-index', 1).siblings().css('z-index', 0);
            main.clickLock = false;
        }
    };
}());