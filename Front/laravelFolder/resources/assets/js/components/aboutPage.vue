<template>
    <div id="about" class="about-wrap">
        <div class="about-main clearfix">
            <div class="about-content">
                <span class="about-logo">
                    <img src="image/bbin-logo-orange.svg">
                </span>
                <button class="about-back-btn">
                    <i class="fa fa-angle-left"></i><b></b>
                </button>
                <section class="about-txt">
                    <h2>A CREATIVE AGENCY IN BBIN</h2>
                    <h3><img src="image/about_title.png"></h3>
                    <h4><img src="image/about_words.png"></h4>
                    <article>
                        <p>BBIN</p>
                        <p>成立于1999年，BBIN宝盈集团成功地由亚洲首屈的博彩系统供应商，逐步发展为娱乐集团。除了博彩产业，近年来更积极拓展其他娱乐事业体。</p>
                        <p>全球拥有超过1000位专业人才，不断创新、研发逾百款博彩相关产品并获得多项国际认证，提供多元化服务包括有娱乐平台建构、视讯直播客制化及娱乐平台API介接等。</p>
                        <p>BBIN始终以顾客为中心，及满足顾客需求为最高宗旨。</p>
                    </article>
                    <article>
                        <p>添加色彩<br>让顶尖娱乐平台魅力四射</p>
                        <p>一个网站，给使用者留下的第一印象不是网站丰富的内容，也不是网站合理的版面布局，而是网站的丰富色彩。</p>
                        <p>BBIN专为尊贵的顾客，打造完美的视觉空间，吸引所有使用者的目光。</p>
                    </article>
                </section>
            </div>
            <div class="about-bg">
                <div class="about-bg-line pelm top"></div>
                <div class="about-bg-screen">
                    <figure>
                        <img src="image/about_img.png" class="screen pelm">
                    </figure>
                    <span class="pelm top poker01">
                        <img src="image/about_poker01.png">
                    </span>
                    <span class="pelm left poker02">
                        <img src="image/about_poker02.png">
                    </span>
                    <span class="pelm poker03">
                        <img src="image/about_poker03.png">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log("ready first!");
            var $html = $("html, body");
            var $wrap = $(".index-wrap");
            var $aboutOpen = $("#aboutOpen");
            var $adaptiveActive = $("#adaptiveCont, .nav-back, .mask-bg");
            var $rwdActive = $("#rwdCont, .nav-back, .mask-bg");
            var $pageMain = $(".page-main");
            var $pageItems = $(".page-view-grid .page-items, .page-view-list .page-items");


            //ABOUT-展開
            $aboutOpen.click(function() {
                $(this).addClass("active");
                $("#about").addClass("active");
                $html.addClass("no-scroll");
            });
            $(".about-back-btn").click(function() {
                $aboutOpen.removeClass("active");
                $("#about").removeClass("active");
                $html.removeClass("no-scroll");
            });


            //ABOUT螢幕+撲克牌視差移動
            $(window).parallaxmouse({
                invert: true,
                range: 200,
                elms: [{
                    el: $('.about-bg-line'),
                    rate: 0.2
                }, {
                    el: $('.about-bg-screen .screen'),
                    rate: 0.1
                }, {
                    el: $('.about-bg-screen .poker01'),
                    rate: 0.2
                }, {
                    el: $('.about-bg-screen .poker02'),
                    rate: 0.2
                }, {
                    el: $('.about-bg-screen .poker03'),
                    rate: 0.2
                }]
            });


            //ADAPTIVE頁籤-展開
            $(".btnAdaptive").click(function() {
                $adaptiveActive.addClass("active");
                $wrap.addClass("move-adaptive");
                $aboutOpen.addClass("move");
                $html.addClass("no-scroll");
                $pageMain.animate({
                    scrollTop: 0
                }, 0);
                $pageMain.removeClass("no-scroll"); //解除卷軸鎖定
            });


            //RWD頁籤-展開
            $(".btnRwd").click(function() {
                $rwdActive.addClass("active");
                $(".mask-bg").addClass("rwd-bgcolor");
                $wrap.addClass("move-rwd");
                $aboutOpen.addClass("move");
                $html.addClass("no-scroll");
                $pageMain.animate({
                    scrollTop: 0
                }, 0);
                $pageMain.removeClass("no-scroll"); //解除卷軸鎖定
            });


            //雙版型頁籤-切換
            $("#navSwitchRWD").click(function() {
                $("#adaptiveCont").removeClass("active");
                $wrap.removeClass("move-adaptive");
                $aboutOpen.removeClass("move");
                $("#rwdCont").addClass("active");
            });
            $("#navSwitchAdaptive").click(function() {
                $("#rwdCont").removeClass("active");
                $wrap.removeClass("move-rwd");
                $aboutOpen.removeClass("move");
                $("#adaptiveCont").addClass("active");
            });


            //版型頁MOBILE版本-回頂部
            $(".btn-top").click(function() {
                $(".page-main").animate({
                    scrollTop: 0
                }, 1000);
            });
            $("#adaptiveCont .page-main").scroll(function() {
                if ($(this).scrollTop() > 240) {
                    $(".btn-top-adaptive").fadeIn("fast");
                } else {
                    $(".btn-top-adaptive").stop().fadeOut("fast");
                }
            });
            $("#rwdCont .page-main").scroll(function() {
                if ($(this).scrollTop() > 240) {
                    $(".btn-top-rwd").fadeIn("fast");
                } else {
                    $(".btn-top-rwd").stop().fadeOut("fast");
                }
            });


            //雙版型頁籤-返回上一頁
            $(".nav-back").click(function() {
                $adaptiveActive.removeClass("active");
                $rwdActive.removeClass("active");
                $wrap.removeClass("move-adaptive move-rwd");
                $aboutOpen.removeClass("move");
                $html.removeClass("no-scroll");
                $pageMain.addClass("no-scroll").animate({
                    scrollTop: 0
                }, 0);; //防止瞬間出現雙卷軸 + 返回頂部以消除TOP鈕
            });


            //遮罩移除
            $(".mask-bg").click(function() {
                $(this).removeClass("active rwd-bgcolor");
                $html.removeClass("no-scroll");
                $("#adaptiveCont, #rwdCont, .nav-back").removeClass("active");
                $wrap.removeClass("move-adaptive").removeClass("move-rwd");
                $aboutOpen.removeClass("move");
                $pageMain.addClass("no-scroll"); //防止瞬間出現雙卷軸
            });


            //雙版型頁籤-篩選列的子選單
            $(".subtouch").on("click", function(e) {
                if ($(this).parent().has(".submenu")) {
                    e.preventDefault();
                }
                if (!$(this).hasClass("active")) {
                    $(".submenu").slideUp();
                    $(".subtouch").removeClass("active");
                    $(this).next(".submenu").slideDown();
                    $(this).addClass("active");
                    $(".nav-filter").addClass("active");
                } else if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this).next(".submenu").slideUp();
                    $(".nav-filter").removeClass("active");
                }
            });


            //雙版型頁籤-選取篩選項目後關閉篩選列
            $(document).on("click", function(e) {
                if ($(e.target).is(".submenu, .submenu li button, .subtouch") === false) {
                    $(".submenu").slideUp();
                    $(".subtouch").removeClass("active");
                    $(".nav-filter").removeClass("active");
                }
            });
            $(".submenu").click(function() {
                $(".submenu").slideUp();
                $(".subtouch").removeClass("active");
                $(".nav-filter").removeClass("active");
            });


            //讓區域回到頂部
            $(".submenu li button, .nav-filter-hot, .nav-switch, .nav-view").click(function() {
                $pageMain.animate({
                    scrollTop: 0
                }, 0);
            });
        },
    }
</script>