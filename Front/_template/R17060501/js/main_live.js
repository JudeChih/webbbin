(function() {
    'use strict';

    var liveTop = {
        init: function() {
            liveTop.LiveOpenLiverule();
            $(window).resize(function() {
                liveTop.LiveCloseLiverule();
            });
        },
        /**
         *
         * 開啟遊戲規則
         **/
        LiveOpenLiverule: function() {
            $("#ele-live-rule-open").on("click", function() {
                if ($(window).width() > 768) {
                    $(".ele-bbin-rule-wrap").css("display", "block").stop(true, true).animate({ opacity: "1" }, 300);
                }
            });

            $("#ele-live-rule-close").on("click", function() {
                liveTop.LiveCloseLiverule();
            });
        },
        /**
         *
         * 關閉遊戲規則
         **/
        LiveCloseLiverule: function() {
            $(".ele-bbin-rule-wrap").css("display", "none").stop(true, true).animate({ opacity: "0" }, 300);
        }
    };

    liveTop.init();
}());
