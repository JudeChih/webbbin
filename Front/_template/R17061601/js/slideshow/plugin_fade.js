(function () {
    'use strict';
    pluginEffect.fade = {
        initial: function () {
            var main = this;

            main.param.slideUl
                .find('li')
                .css({'opacity': '0', 'position': 'absolute'})
                .eq(0)
                .css({'opacity': '1', 'position': 'relative'});
        },
        move: function (index) {
            var main = this,
                param = main.settings,
                $li = main.param.slideUl.find('li'),
                $liCurrent = $li.eq(index);

            main.moveTl
                .to($li.not($liCurrent), param.animationTime, {opacity: 0 }, 0)
                .to($liCurrent, param.animationTime, {opacity: 1 }, 0);
        },
        reSet: function (main) {
            main.moveTl.clear();
            main.clickLock = false;
        }
    };
}());