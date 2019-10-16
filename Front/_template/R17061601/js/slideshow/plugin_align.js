(function () {
    'use strict';
    pluginEffect.align = {
        initial: function () {
            var i, x,
                main = this,
                param = main.settings,
                $li = main.param.slideUl.find('li'),
                slice = [],
                row = param.animationOption.row;

            if(main.param.fullScreen === 1){
                main.param.mainWidth = $('#js-ele-slideshow1').width();
                main.param.mainHeight = $('#js-ele-slideshow1').height();
            }

            var sliceWidth = main.param.mainWidth / row;

            if(main.param.fullScreen === 1){
                sliceWidth = Math.round(sliceWidth);
            }

            $li
                .css('opacity', 0)
                .eq(0)
                .css('opacity', 1);

            for (i = 0; i <= row - 1; i++) {
                x = sliceWidth * i;

                if(main.param.fullScreen === 1){
                    slice.push(
                        '<div class="ele-slideshow-clip" data-row="' + i + '" style="position:absolute;left:' + x + 'px;top:0;' + 'width:' + sliceWidth + 'px;height:' + main.param.mainHeight + 'px;' + 'background-position:-' + x + 'px 0">' + '</div>'
                    );
                }else{
                    slice.push(
                        '<div class="ele-slideshow-clip" style="position:absolute;left:' + x + 'px;top:0;' + 'width:' + sliceWidth + 'px;height:' + main.param.mainHeight + 'px;' + 'background-position:-' + x + 'px 0">' + '</div>'
                    );
                }
            }

            main.param.slide.append(slice.join(''));

            if(main.param.fullScreen === 1){
                var $clip = $('.ele-slideshow-clip');

                $clip.css({'backgroundSize': $('#js-ele-slideshow1').width()});
                $(window).resize(function(){
                    pluginEffect.align.reSize(param.animationOption);
                });
            }
        },
        move: function (index) {
            var main = this,
                param = main.settings,
                src = main.param.slideUl.find('li').find('img').eq(index).attr('src'),
                $clip = main.param.slide.find('.ele-slideshow-clip').css('background-image', 'url(' + src + ')'),
                $wrap = $('#js-ele-slideshow1');

            if(main.param.fullScreen === 1){
                main.param.mainWidth = $wrap.width();
                main.param.mainHeight = $wrap.height();
                $clip.show();
            }

            main.moveTl.staggerFrom(
                $clip, param.animationTime, {
                    left: main.param.mainWidth,
                    top : (main.param.mainHeight - (main.param.mainHeight / 2)) / 2,
                    height : main.param.mainHeight / 2,
                    delay: .02,
                    ease: Expo.easeInOut
                },.1
            );
        },
        reSize: function (param) {

            var $wrap = $('#js-ele-slideshow1'),
                sliceWidth = Math.round($wrap.width() / param.row),
                sliceHeight = $wrap.height();

            $('.ele-slideshow-clip')
                .hide()
                .css({
                    'width': sliceWidth,
                    'height': sliceHeight
                })
                .each(function(){
                    $(this).css({
                        'top': 0,
                        'left': sliceWidth * $(this).data('row'),
                        'backgroundSize': $wrap.width(),
                        'background-position': (-$(this).data('row') * sliceWidth)+'px '+ 0
                    });
                });
        },
        reSet: function (main) {
            main.param.slideUl.find('li').eq(main.param.nowAt - 1).css('opacity', 1).siblings().css('opacity', 0);
            if(main.param.fullScreen === 1){
                var param = main.settings;
                pluginEffect.align.reSize(param.animationOption);
                $('.ele-slideshow-clip').hide();
            }
            main.clickLock = false;
        }
    };
}());