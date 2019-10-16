(function () {
    'use strict';
    pluginEffect.slideh = {
        initial: function () {
            var main = this;

            main.param.slideUl
                .find('li')
                .eq(0)
                .css({
                    'z-index': 1,
                    opacity : 1
                })
                .siblings()
                .css({
                    'z-index': 0,
                    opacity : 0
                });
        },
        move: function (index) {
            var main = this,
                param = main.settings;

            if(main.param.fullScreen === 1){
                main.param.mainWidth = main.param.slide.width();
            }

            main.param.slideUl
                .find('li')
                .eq(index)
                .css({
                    'left': main.param.mainWidth,
                    opacity : 1
                });

            main.moveTl.to(
                main.param.slideUl, param.animationTime, {
                    left: -main.param.mainWidth,
                    ease: Expo.easeInOut
                }
            );
        },
        reSet: function (main, index) {
            main.param.slideUl
                .css('left', 0)
                .find('li')
                .css('left', 0)
                .eq(main.param.nowAt - 1)
                .css({
                    'z-index': 1,
                    opacity : 1
                })
                .siblings()
                .css({
                    'z-index': 0,
                    opacity : 0
                });

            main.clickLock = false;
        }
    };
}());