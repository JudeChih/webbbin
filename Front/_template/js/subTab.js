(function($) {
    function subTabs(target, options) {
        /*Settings
         **inDelay: 顯示前延遲
         **outDelay: 隱藏前延遲
         **showTime: 動畫時間
         **sub: 子選單區塊
         **clearTab: 隱藏所有子選單區塊
         **inTab: 顯示
         **outTab: 隱藏
         **clickTab: 點擊顯示
         */
        var settings = {
            "showWay": "",
            "inDelay": 400,
            "outDelay": 600,
            "showTime": 300,
            "sub": subList,
            "left": "",
            "notOver": 1, //防止超出版面
            "clearTab": function() { subList.parent().find("div").hide(); },
            "inTab": function() { subList.stop(true, true).fadeIn(this.showTime); },
            "outTab": function() { subList.stop(true, true).fadeOut(this.showTime); },
            "clickTab": function() {
                this.clearTab();
                subList.stop(true, true).fadeIn(this.showTime);
            },
            "position": function() {
                var m = parseInt(this.left) - parseInt(subList.width() / 2);
                subList.css("left", m + "px");
            }
        }
        $.extend(settings, options);

        var tin, tout;
        var tClass = $(target).attr("class").split(' ')[0];
        var subList = $("div." + tClass);
        var targetWid = $(target).width();
        var posX = $(target).position().left - 50;
        var moveVal = (posX - (subList.width() - targetWid) / 2) - $(target).parent().position().left;
        if (settings.left == "") {
            if (moveVal < 0 && settings.notOver == 1) {
                moveVal = 0;
            }

            moveVal += "px";
            subList.css("left", moveVal);
        } else {
            settings.position();
        }

        subList.hide();
        $("." + tClass).hover(function() {
            clearTimeout(tout);
            tin = setTimeout(function() { settings.inTab(); }, "400");
        }, function() {
            clearTimeout(tin);
            tout = setTimeout(function() { settings.outTab(); }, "400");
        });
        $(target).bind("click", function() {
            if (subList.is(":visible")) {
                return false;
            } else {
                settings.clickTab();
            }
        });
    }

    $.fn.extend({
        subTabs: function(options) {
            return this.each(function() {
                subTabs(this, options);
            });
        }
    });
})(jQuery);

//- 餘額"+"號
$("a.MemberDate").subTabs();
//- 選單命名
$("li.LS-ball, li.LS-live, li.LS-game, li.LS-lottery").subTabs();
