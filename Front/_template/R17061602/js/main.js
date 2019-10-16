$(function() {

    //REMOVE INLINE-BLOCK NODE
    $('.removeTextNodes').contents().filter(function() {
        return this.nodeType === 3;
    }).remove();

    //首頁nav fixed
    $(window).scroll(function() {
        //var $navH = $('.first-side-fixed').offset().top; 還是有問題
        if ($(window).scrollTop() > 100) {
            $('.first-side-fixed').addClass('first-side-fixed-active');
        } else {
            $('.first-side-fixed').removeClass('first-side-fixed-active');
        }
    });

    //判斷登入後，是否改用下拉
    //$(window).resize(function() {
    //    if ($(window).width() <= 768) {
    //        $('.MemberDate').addClass('MemberSlid');
    //    } else if ($(window).width() > 768) {
    //        $('.MemberDate').removeClass('MemberSlid');
    //    }
    //});


    //會員滑入下拉部分
    $('#memPlusClick').click(function() {
        $('.mem-info').slideToggle();
    });
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.mem-info').css('overflow', 'visible');
            $('.mem-info').css('display', 'inline-block');
        }
    });

    //手機nav按鈕開關調整
    $('.btn-side-m').click(function() {
        //首頁
        $(this).toggleClass('btn-side-m-active');
        $('#mainBody').toggleClass('body-move');
        $('.mobile-close-btn').toggleClass('show-display');
        $('.mobile-nav-btn').toggleClass('no-display');
        $("html, body, .body-x-hidden").toggleClass("no-scroll");
        //內頁
        $('.game-jp').toggleClass('mainnav-move');
    });

    //側選單上面灰色區塊
    $('.page-nav-height').click(function() {
        //首頁
        $('.btn-side-m').removeClass('btn-side-m-active');
        $('#mainBody').removeClass('body-move');
        $('.mobile-close-btn').removeClass('show-display');
        $('.mobile-nav-btn').removeClass('no-display');
        $("html, body, .body-x-hidden").removeClass("no-scroll");
        //內頁
        $('.game-jp').removeClass('mainnav-move');
    });

    //btn會員登入點擊時收回側選單
    $('.btn-login-m').click(function() {
        //首頁
        $('.btn-side-m').removeClass('btn-side-m-active');
        $('#mainBody').removeClass('body-move');
        $('.mobile-close-btn').removeClass('show-display');
        $('.mobile-nav-btn').removeClass('no-display');
        //內頁
        $('.game-jp').removeClass('mainnav-move');
    });

    //btn會員登入的lightbox
    $(".btn-login-m").click(function() {
        $(".mask-bg").toggleClass("active");
        $(".first-function-wrap").toggleClass("tablet-active"); //首頁 登入前
        $('.btn-box-close').addClass("btn-box-close-active");
        $(".page-login").toggleClass("page-login-active"); //內頁 登入前
        $(".page-logon").toggleClass("page-logon-active"); //內頁 登入後
    });

    //點選lightbox背景，移除效果
    function lightboxCheck() {
        $('.mask-bg').removeClass("active");
        $(".first-function-wrap").removeClass("tablet-active");
        $('.btn-box-close').removeClass("btn-box-close-active");
        $(".page-login").removeClass("page-login-active"); //內頁 登入前
        $(".page-logon").removeClass("page-logon-active"); //內頁 登入後
        $("html, body, .body-x-hidden").removeClass("no-scroll");
    }

    $(".mask-bg").click(function() {
        lightboxCheck();
    });

    //關閉按鈕
    $(".btn-box-close").click(function() {
        lightboxCheck();
    });

    //語系下拉
    $('.lang-title > a').click(function() {
        $('.lang-group').slideToggle();
        $('.lang-title').toggleClass('lang-title-active');
        return false;
    });

    //首頁導覽下拉
    $('.first-nav .subLink').click(function() {
        $(this).next('.subList').slideToggle();
        // $(this).toggleClass('current');
        
        if(!$(this).hasClass("current")) {
            $(this).addClass("current");
        }
        else if($(this).hasClass("current")) {
            $(this).removeClass("current");
        }
        return false;
    });

    //內頁導覽選單
    var clickAllowed = true;
    $('.page-nav .subLink').click(function(){
        if(clickAllowed) {
            $(this).next('.subList').slideToggle();
            if(!$(this).hasClass("current")) {
                $(this).addClass("current");
            }
            else if($(this).hasClass("current")) {
                $(this).removeClass("current");
            }
            return false;
        }
    }); 
    onResize = function() {
        if($(window).width() <= 768){
            clickAllowed = true;
        }
        else{
            clickAllowed = false;
        }
    }
    $(document).ready(onResize);
    var timer;
    $(window).bind('resize', onResize);

    //導覽列resize
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.first-nav .subLink').removeClass('current');
            $('.first-nav .subList').css("display","block");
            $('.page-nav #LS-ball, .page-nav #LS-game').addClass('page-sub-link');
            $('.page-nav .subLink').removeClass('current');
            $('.page-sub-link-active .subList').css("display","");
        }
        else {
            $('.first-nav .subLink').removeClass('current');
            $('.first-nav .subList').css("display","");
            $('.page-nav .subLink').removeClass('current');
            $('.page-nav .subList').css("display","");
            $('.page-sub-link-active .subList').css("display","block");
        }
    });

});

(function($) {
    function subTabs(target, options) {
        var setting = {
            "inDelay": 300, //顯示前延遲
            "outDelay": 800, // 顯示後延遲
            "showTime": 300, // 動畫時間
            //"notOver": 1, //防止超出版面
            "inTab": function() { subList.stop(true, true).fadeIn(this.showTime); },
            "outTab": function() { subList.stop(true, true).fadeOut(this.showTime); },
        }
        $.extend(setting, options); //將setting與options合併

        var tin, tout;
        var tClass = $(target).attr("class").split(' ')[0]; //取得target第一個class
        var subList = $("div." + tClass); // 取得class前是加上div的.
        var targetWid = $(target).width(); // 取得target的寬度
        var posX = $(target).position().left; // 取得target的左定位
        var moveVal = (posX - (subList.width() - targetWid) / 2) - $(target).parent().position().left - 8; // 將定位在目標的正中間再-8
        if (moveVal < 0) { //假使得到的值小於零 讓值成為零
            moveVal = moveVal * 2 + 150;
        }
        moveVal += "px"; // 得到的值後面加上px
        subList.css("left", moveVal); // 加上css左邊定位

        subList.hide(); //隱藏
        $("." + tClass).hover(function() { //.hover 滑入後，滑出後
            clearTimeout(tout);
            tin = setTimeout(function() { setting.inTab(); }, setting.inDelay);
        }, function() {
            clearTimeout(tin);
            tout = setTimeout(function() { setting.outTab(); }, setting.outDelay);
        }).click(function() {
            clearTimeout(tin);
            tout = setTimeout(function() { setting.outTab(); }, 100);
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

$(function() {
    /**
     * 要對應html的輸入框
     */
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


});