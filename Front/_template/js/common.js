/**
 * 導覽列次選單
 */
$(function() {
    $(".mainnav li>.ele-lsub-group").each(function() { //每個匹配的元素都要運行
        $(this).prev("a").lSubTab() // 找目標前一個a執行lSubTab
    })
});


(function() {
    /* 次選單*/

    $.fn.lSubTab = function() {

        var //a = $(".mainnav"),
            tSub = $(this).next(".ele-lsub-group"), // 找目標前一個.ele-lsub-group
            subStyle = "fade", // 空白 = 下拉式 ; fade = 淡入式
            subAlign = "", // 空白 = 置中 ; left = 靠左 ; right = 靠右
            enterShowT = 500, // 滑入速度
            exitShowT = 200, // 滑出速度
            outDelay = 500, // 滑出後延遲消失時間
            posY = 0, // 離目標Y軸距離
            posX = 0, // 離目標X軸距離
            self = $(this);


        $("body").prepend($("<div>").append(tSub).html()); //將目標移動至body內最上層

        var tSubID = $("#" + tSub.attr("id")); // 取得tSub的id前加# 設定成為目標
        tInner = tSubID.find(".lsub-inner-wrap"); //找名稱為lsub-inner-wrap的後代
        tInner.prepend("<span class='lsub-front-bg'></span>"); //開頭插入<span class='lsub-front-bg'></span>
        tInner.append("<span class='lsub-back-bg'></span>"); //結尾插入<span class='lsub-back-bg'></span>
        var tSubW = tSubID.width(),
            tSubH = tSubID.height(); //取得tSubID的寬和高

        var k = 0,
            s, z = self.offset().top + self.outerHeight(), // 目標離上的高度＋目標的外部高度
            l, f, n, t = !1,
            inTab = function(Target) { //進入區域
                if (1 == k) clearTimeout(s);
                else {
                    k = 1;
                    self.hasClass("current") && (t = !0);
                    l = self.offset();
                    var W = self.outerWidth(),
                        n = "left" == subAlign ? l.left + posX : "right" == subAlign ? l.left + posX - tSubW + W : l.left + posX + W / 2 - tSubW / 2;
                    //運用條件運算式來設定 假使 subAlign == left 置左 ; == right 靠右 , 都沒有時置中。 有加入posX可設定X軸偏移。
                    f = l.top + self.outerHeight() + posY; // 總高度加上 可設定的Y軸偏移
                    //$(document).width() < n + tSubW && (n = $(document).width() - tSubW);
                    tSubID.css({ //設定給目標CSS
                        top: f,
                        position: "absolute",
                        left: n,
                        "z-index": 1E3
                    });
                    "fade" == subStyle ? tSubID.fadeIn(enterShowT) : tSubID.slideDown(enterShowT);
                    //運用條件運算式來設定 假使 subStyle == "fade" 使用fadeIn 淡入; 否則使用slideDown 往下滑動
                    Target.parent().attr("id") && (Target.addClass("current"), Target.parent().addClass("current"))
                        //將選中目標與選中目標的父層都 addClass "current"
                }
            },
            outTab = function(a) { //離開區域
                1 === k && (tSubID.css({
                        "z-index": 999
                    }), s = setTimeout(function() {
                        k = 0;
                        "fade" == subStyle ? tSubID.fadeOut(exitShowT) : tSubID.slideUp(exitShowT);
                        //運用條件運算式來設定 假使 subStyle == "fade" 使用fadeOut 淡出; 否則使用slideUp 往上滑動
                        $("#LS-" + a + " a") && !t && $("#LS-" + a + " a, #LS-" + a).removeClass("current")
                    }, outDelay)) //#LS- 加上選中目標 removeClass "current"
            };

        $(document).resize(function() { //当调整浏览器窗口大小时，发生 resize 事件。
            tSubID.hide(); //隱藏目標
            k = 0
        });

        var u = 0;
        $(document).scroll(function() { // 捲動觸發navFix時所做的對應
            f = self.offset().top + self.outerHeight(); // 目標離上的高度＋目標的外部高度
            $("#navfixed").hasClass("fixed") ? tSubID.css({ // 條件運算式 假使#navfixed 有了.fixed
                top: f + posY // 取得目前的總高度
            }) : tSubID.css({
                top: z + posY // 取得隨捲軸改變的總高度
            });
            setTimeout(function() { // 指定的毫秒數後運行  設定一個開關來改變 取得的總高度
                1 == u ? $("#navfixed").hasClass("fixed") || (f = self.offset().top + self.outerHeight() + posY, u = 0, tSubID.css({
                    top: z + posY
                })) : $("#navfixed").hasClass("fixed") && (f = self.offset().top + self.outerHeight(), u = 1, tSubID.css({
                    top: f + posY
                }))
            }, 1)
        });

        var p = "";
        self.on("mouseenter", function() {
            inTab($(this))
        }).on("click", function() {
            inTab($(this));
            tSubID.stop(!0, !0).show()
        }).on("mouseleave", function() {
            "" !== $(this).parent().prop("id") && (p = $(this).parent().attr("id"));
            outTab(p.substr(3))
        });
        tSubID.on("mouseenter", function() {
            clearTimeout(s)
        }).on("mouseleave", function() {
            p = $(this).attr("id");
            outTab(p.substr(4))
        })
    };

    /* 導覽列滑動固定*/
    $.fn.navFixed = function(setting) {
        var _o = this,
            conf = {
                fixedClass: 'fixed',
                fixedTop: 0
            };

        $.extend(conf, setting);

        return this.each(function() {
            var $target = $(_o),
                targetTop = $target[0].offsetTop,
                fixedTop = parseInt(conf.fixedTop, 10) || 0,
                criticalTop = targetTop - fixedTop;
            $(window).scroll(function() {
                var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
                    scrollLeft = (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft;
                if (scrollTop > criticalTop) {
                    if (!$target.hasClass(conf.fixedClass)) {
                        $target.addClass(conf.fixedClass);
                    }
                    $target.children().css({ left: -scrollLeft });
                } else if ($target.hasClass(conf.fixedClass)) {
                    $target.removeClass(conf.fixedClass);
                }
            });
        });
    };



})();

/**
 * 文字閃爍
 * @param id   jquery selecor
 * @param arr  ['#FFFFFF','#FF0000']
 * @param s    milliseconds
 */
function toggleColor(id, arr, s) {
    var self = this;
    self._i = 0;
    self._timer = null;

    self.run = function() {
        if (arr[self._i]) {
            $(id).css('color', arr[self._i]);
        }
        self._i == 0 ? self._i++ : self._i = 0;
        self._timer = setTimeout(function() {
            self.run(id, arr, s);
        }, s);
    }
    self.run();
}

// our products mouseover
var sourceSwap = function() {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
$('img[data-alt-src]').each(function() {
    new Image().src = $(this).data('alt-src');
}).hover(sourceSwap, sourceSwap);

// remove inline-block none
$('.removeNodes').contents().filter(function() {
    return this.nodeType === 3;
}).remove();

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

//語系滑動
$('.lang-wrap').click(function() {
    $('.lang-option').stop().slideToggle('fast');
});
$('#lang-wrap').click(function() {
    $('#langOption').stop().slideToggle('fast');
});