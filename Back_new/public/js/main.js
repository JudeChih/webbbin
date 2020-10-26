/**
 * 登入表單效果
 * @param _o object {
 *     Opacity : 標題透明度
 *     MS      : 標題顯示速度
 *   }
 */
$.fn.InputLabels = function(_o) {
    var o = {
        'Opacity': 0.5,
        'MS': 300,
        'next': false
    };
    $.extend(o, _o);

    return this.each(function() {
        var label = $(this);
        var input = o.next ? $(this).next('input[name=' + $(this).attr('name') + ']') : $('input[name=' + $(this).attr('name') + ']');
        var show = true;

        // 預防瀏覽器記帳密機制
        setTimeout(function() {
            this.opacity = (input.val() == "") ? 1.0 : 0;
            label.css('opacity', this.opacity);
        }, 300);

        if (label.attr('for') == undefined) {
            label.attr('for', $(this).attr('name'));
        }

        input.focus(function() {
            if (input.val() == "") {
                setOpacity(o.Opacity);
            }
        }).blur(function() {
            if (input.val() == "") {
                if (!show) {
                    label.css({ opacity: 0.0 }).show();
                }
                setOpacity(1.0);
            } else {
                setOpacity(0.0);
            }
        }).keydown(function(e) {
            if ((e.keyCode == 16) || (e.keyCode == 9) || (e.keyCode == 13)) return;
            if (show) {
                label.hide();
                show = false;
            }
        });

        var setOpacity = function(opacity) {
            label.stop().animate({ 'opacity': opacity }, o.MS);
            show = (opacity > 0.0);
        };
    });
};
$('#LoginForm,#searchWrap').find('label').InputLabels();


$(function() {
    // form placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });

    //table顯示隱藏按鈕，記得再多加一個alert判斷
    $('.template-btn').on('click', function() {
        if ($(this).hasClass('template-btn-h')) {
            $(this).removeClass('template-btn-h');
            $(this).addClass('template-btn-v');
        } else if ($(this).hasClass('template-btn-v')) {
            $(this).removeClass('template-btn-v');
            $(this).addClass('template-btn-h');
        }
    });


    $('.pagination-wrap a').on('click', function(e) {
        e.preventDefault();
    });
});