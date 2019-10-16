(function () {
    'use strict';
    pluginEffect.clip = {
        initial: function () {
            var i, j, x, y,
                main = this,
                param = main.settings,
                slice = [],
                row = param.animationOption.row,
                col = param.animationOption.col,
                $li = main.param.slideUl.find('li');

                if(main.param.fullScreen === 1){
                    main.param.mainWidth = $('#js-ele-slideshow1').width();
                    main.param.mainHeight = $('#js-ele-slideshow1').height();
                }

                var sliceWidth = main.param.mainWidth / row,
                    sliceHeight = main.param.mainHeight / col;

                if(main.param.fullScreen === 1){
                    sliceWidth = Math.round(sliceWidth);
                    sliceHeight = Math.round(sliceHeight);
                }

            main.param.slideUl
                .find('li')
                .css('opacity', 0)
                .eq(0)
                .css('opacity', 1);

            for (i = 0; i <= col - 1; i++) {
                for (j = 0; j <= row - 1; j++) {

                    x = sliceWidth * j;
                    y = sliceHeight * i;

                    if(main.param.fullScreen === 1){
                        slice.push(
                            '<div class="ele-slideshow-clip" data-row="'+j+'" data-col="'+i+'" style="position:absolute;left:' + x + 'px;top:' + y + 'px;' + 'width:' + sliceWidth + 'px;height:' + sliceHeight + 'px;' + 'background-position:-' + x + 'px -' + y + 'px;overflow:hidden"></div>'
                        );
                    }else{
                        slice.push(
                            '<div class="ele-slideshow-clip" style="position:absolute;left:' + x + 'px;top:' + y + 'px;' + 'width:' + sliceWidth + 'px;height:' + sliceHeight + 'px;' + 'background-position:-' + x + 'px -' + y + 'px;overflow:hidden"></div>'
                        );
                    }
                }
            }

            main.param.slide.append(slice.join(''));

            if(main.param.fullScreen === 1){
                var $clip = $('.ele-slideshow-clip');

                $clip.css({'backgroundSize': $('#js-ele-slideshow1').width()});
                $(window).resize(function(){
                    pluginEffect.clip.reSize(param.animationOption);
                });
            }
        },
        move: function (index) {
            var main = this,
                param = main.settings,
                $li = main.param.slideUl.find('li'),
                $clip = main.param.slide.find('.ele-slideshow-clip').css('background-image', 'url(' + $li.find('img').eq(index).attr('src') + ')'),
                $wrap = $('#js-ele-slideshow1');

            if(main.param.fullScreen === 1){
                main.param.mainWidth = $wrap.width();
                main.param.mainHeight = $wrap.height();
                $clip.show();
            }

            var x = (main.param.mainWidth - $clip.eq(0).width()) / 2,
                y =  (main.param.mainHeight - $clip.eq(0).height()) / 2;

            main.moveTl.staggerFrom(
                $clip, .4, {
                    left : x,
                    top : y,
                    opacity:0,
                    rotationY: 45,
                    rotationX: -10,
                    scale: 0.2,
                    transformOrigin:"0 50% -250px",
                    ease:Linear.ease
                }, 0.02, '-=.09'
            );
        },
        reSize: function (param) {

            var $wrap = $('#js-ele-slideshow1'),
                sliceWidth = Math.round($wrap.width() / param.row),
                sliceHeight = Math.round($wrap.height() / param.col);

            $('.ele-slideshow-clip')
                .hide()
                .css({
                    'width': sliceWidth,
                    'height': sliceHeight
                })
                .each(function(){
                    $(this).css({
                        'top': sliceHeight * $(this).data('col'),
                        'left': sliceWidth * $(this).data('row'),
                        'backgroundSize': $wrap.width(),
                        'background-position': (-$(this).data('row') * sliceWidth)+'px '+ (-$(this).data('col') * sliceHeight)+'px'
                    });
                });
        },
        reSet: function (main) {
            main.param.slideUl
                .find('li')
                .eq(main.param.nowAt - 1)
                .css('opacity', 1)
                .siblings()
                .css('opacity', 0);
            if(main.param.fullScreen === 1){
                var param = main.settings;
                pluginEffect.clip.reSize(param.animationOption);
                $('.ele-slideshow-clip').hide();
            }

            main.clickLock = false;
        }
    };
}());