/**
 * @param  ele_lsub: 子選單
 * @param  lsub_style: slide(default),fade
 * @param  lsub_align: center(default),left
 * @param  time_in: 200
 * @param  time_out: 300
 * @param  time_delay: 500
 * @param  pos_y: 0
 * @param  pos_x: 0
 * @return none
 */

//下拉子選單
$(function(){
    $(".mainnav li>.ele-drop-group").each(function(){
        $(this).prev('a').lSubTab();
    });
    $(".drop-menu").click(function(e){        
        if ($(window).width() > 768) {
            return;
        }

        var $target = $(event.target);
        if (!$(this).parent().hasClass("dropdown-active")) {
            if ($(".dropdown-active").length != '0') {
                $(".dropdown-active").removeClass("dropdown-active");
                $(".ele-sidemenu-group").stop(true,true).delay(200).slideUp();
            }

            $(this).parent().addClass("dropdown-active")
                .find(".ele-sidemenu-group")
                .stop(true,true).delay(200).slideDown();
        }else {
            $(this).parent().removeClass("dropdown-active")
                .find(".ele-sidemenu-group")
                .stop(true,true).delay(200).slideUp();
        }
    });

    $(window).resize(function(){
        $(".ele-sidemenu-group").css({display: "none"});
        $(".drop-down").removeClass("dropdown-active");
    });
});

$.fn.lSubTab = function() {
    var mainNav = $(".mainnav");
    var conf = {
        "ele_lsub": $(this).next(".ele-drop-group"),
        "lsub_style": mainNav.data('lsub-style')? mainNav.data('lsub-style'): "",        //style(slide,fade)
        "lsub_align": mainNav.data('lsub-align')? mainNav.data('lsub-align'): "",        //align(center,left)
        "time_in" : typeof mainNav.data('lsub-in') != 'undefined'? mainNav.data('lsub-in'): 200,        //in animate duration
        "time_out" : typeof mainNav.data('lsub-out') != 'undefined'? mainNav.data('lsub-out'): 300,       //out animate duration
        "time_delay": typeof mainNav.data('lsub-delay') != 'undefined'? mainNav.data('lsub-delay'): 500,       //delay duration
        "pos_y": mainNav.data('lsub-y')? mainNav.data('lsub-y'): 0,
        "pos_x": mainNav.data('lsub-x')? mainNav.data('lsub-x'): 0
    };

    var msub = $(this),
        ele_lsub_group = $('<div>').append(conf.ele_lsub).html(),//取得ele_lsub HTML內容
        $miBody = top.mem_index?$('body', top.mem_index.document):$('body'),
        $miDoc = top.mem_index?$(top.mem_index.document):$(document),
        lsub_group;

    $miBody.prepend(ele_lsub_group);
    lsub_group = top.mem_index?$('#' + conf.ele_lsub.attr('id'), top.mem_index.document):$('#' + conf.ele_lsub.attr('id'));

    //add bg
    var lsub_inner = lsub_group.find(".lsub-inner-wrap");
    lsub_inner.prepend("<span class='lsub-front-bg'></span>");
    lsub_inner.append("<span class='lsub-back-bg'></span>");

    //加入兩側背景後再計算寬度
    var lsub_Width = lsub_group.width();
    var lsub_Height = lsub_group.height();

    //選項置底需改絕對定位，因此寬高需設定值(解簡體系統BUG:width + 1)
    lsub_group.css({"width":lsub_Width + 1,"height":lsub_Height});
    lsub_inner.css({"position":"absolute","bottom":0});

    //子選單狀態
    var lsub_status = 0;
    var autoCloseTimer;
    var obj_Top_ini = msub.offset().top + msub.outerHeight();

    var offset;
    var obj_Top;
    var obj_Left

    var current_default = false;//滑鼠移至子選單保留current效果
    //顯示
    var show_box = function(t){
        if(lsub_status == 1){
            clearTimeout(autoCloseTimer);
            return;
        }
        lsub_status = 1;
        if(msub.hasClass("current")) {
            current_default = true;
        }
        offset = msub.offset();
        var obj_Width = msub.outerWidth();
        //子選單定位
        var center_set = $miBody.width() - $('body').width();
        var test = 0;

        if ($miBody.width() % 2 != 0) {
            center_set = center_set - 1;
        };
        center_set = (center_set > 0) ? center_set/2 : 0;

        if(conf.lsub_align == "left") {
            obj_Left = offset.left + center_set + conf.pos_x;
        }else if(conf.lsub_align == "right"){
            obj_Left = offset.left + center_set + conf.pos_x - lsub_Width + obj_Width;
        }else{
            obj_Left = offset.left + center_set + conf.pos_x + obj_Width/2 - lsub_Width/2;
        }
        obj_Top = offset.top + msub.outerHeight() + conf.pos_y;

        //長度若超過視窗右側，則靠視窗右邊對齊
        if($miDoc.width() < obj_Left + lsub_Width){
            obj_Left = $miDoc.width() - lsub_Width;
        }

        lsub_group.css({'top': obj_Top, 'position': 'absolute', 'left': obj_Left, 'z-index': 1000});
        if(conf.lsub_style == "fade") {
            lsub_group.fadeIn(conf.time_in);
        }else{
            lsub_group.slideDown(conf.time_in);
        }
        if(t.parent().attr('id') && !current_default){
            t.addClass("current");
            t.parent().addClass("current");
        }
    };

    //視窗縮放立即隱藏
    $miDoc.resize(function(){
        lsub_group.hide();
        lsub_status = 0;
    });

    //滾動重新定位
    var fixedStatus = 0;
    $miDoc.scroll(function(){
        obj_Top = msub.offset().top + msub.outerHeight();
        if($("#navfixed").hasClass("fixed")){
            lsub_group.css({'top':obj_Top + conf.pos_y});
        }else{
            lsub_group.css({'top':obj_Top_ini + conf.pos_y});
        }

        setTimeout(function(){//延遲判斷fixed
        if(fixedStatus == 1){
            if(!$("#navfixed").hasClass("fixed")){
                obj_Top = msub.offset().top + msub.outerHeight() + conf.pos_y;
                fixedStatus = 0;
                lsub_group.css({'top':obj_Top_ini + conf.pos_y});
            }
            return;
        }
        if($("#navfixed").hasClass("fixed")){
            obj_Top = msub.offset().top + msub.outerHeight();
            fixedStatus = 1;
            lsub_group.css({'top':obj_Top + conf.pos_y});
        }
        },1);
    });

    //關閉計時
    var autoClose = function(str) {
        if(lsub_status !== 1) { return; }
        lsub_group.css({'z-index': 999})
        autoCloseTimer = setTimeout(function() {
            lsub_status = 0;
            if(conf.lsub_style == "fade"){
                lsub_group.fadeOut(conf.time_out);
            }else{
                lsub_group.slideUp(conf.time_out);
            }
            //li有加id才具有此功能(子選單hover時主選單有current效果)
            if ($("#LS-"+str +" a") && !current_default) {
                $("#LS-"+str +" a, #LS-"+str).removeClass("current");
            };
        },conf.time_delay);
    };

    //主選單event
    var str_id = '';//子選單hover時主選單有current效果
    msub.on("mouseenter", function(){
            if ($(window).width() <= 768) {
                return;
            }
            show_box($(this));
        })
        .on("click", function(){
            if ($(window).width() <= 768) {
                return;
            }
            show_box($(this));
            lsub_group.stop(true,true).show();
        })
        .on("mouseleave", function(){
            //li有加id才具有此功能(子選單hover時主選單有current效果)
            if($(this).parent().prop('id') !== ''){
                str_id = $(this).parent().attr('id');
            }
            autoClose(str_id.substr(3));
        });
    //子選單event

    lsub_group
        .on("mouseenter",function(){
            clearTimeout(autoCloseTimer);
        })
        .on('mouseleave', function(){
            str_id = $(this).attr('id');
            autoClose(str_id.substr(4));
        });
};