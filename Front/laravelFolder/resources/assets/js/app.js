/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import axios from 'axios'
import aboutPage from './components/aboutPage.vue'
import itemView from './components/itemView.vue'
import itemDetail from './components/itemDetail.vue'
import liveDemo from './components/liveDemo.vue'

require('./isotope.pkgd');
require('./imagesloaded.pkgd');

const app = new Vue({
    el: '#mainBody',
    components: {
        aboutPage,
        itemDetail,
        itemView,
        liveDemo,
    },
    data: {},
    methods: {},
    mounted() {
        this.$nextTick(() => {
            // 这里写jquery代码
            setTimeout(function() {
                console.log("ready!");
                //REMOVE INLINE-BLOCK NODE
                $('.removeTextNodes').contents().filter(function() {
                    return this.nodeType === 3;
                }).remove();
                //條件篩選
                var $MixItUpAdap = $('#MixItUpAdap').isotope({
                    itemSelector: '.page-items',
                    masonry: {
                        gutter: 0
                    }
                });
                $MixItUpAdap.imagesLoaded(function() {
                    $MixItUpAdap.isotope('layout');
                });
                $('#adaptiveCont .nav-main').on('click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $MixItUpAdap.isotope({
                        filter: filterValue
                    });
                });

                var $MixItUpRwd = $('#MixItUpRwd').isotope({
                    itemSelector: '.page-items',
                    masonry: {
                        gutter: 0
                    }
                });
                $MixItUpRwd.imagesLoaded(function() {
                    $MixItUpRwd.isotope('layout');
                });
                $('#rwdCont .nav-main').on('click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $MixItUpRwd.isotope({
                        filter: filterValue
                    });
                });


                //篩選按鈕的選取狀態
                $('.nav-main').each(function(i, navfilter) {
                    var $navfilter = $(navfilter);
                    $navfilter.on('click', 'button', function() {
                        $navfilter.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });


                //雙版型頁籤-檢視模式切換
                $(".nav-view").click(function() {
                    if ($(".nav-view").hasClass("nav-view-list")) {
                        $(".nav-view").addClass("nav-view-grid").removeClass("nav-view-list");
                        $(".page-view-list").removeClass("page-view-list").addClass("page-view-grid");
                    } else if ($(".nav-view").hasClass("nav-view-grid")) {
                        $(".nav-view").addClass("nav-view-list").removeClass("nav-view-grid");
                        $(".page-view-grid").removeClass("page-view-grid").addClass("page-view-list");
                    }
                    $MixItUpAdap.isotope('layout'); //重新執行瀑布流排序
                    $MixItUpRwd.isotope('layout'); //重新執行瀑布流排序
                });


                //條件篩選統計-ADAPTIVE
                var $adapLa = $("#MixItUpAdap dd.L-a").length;
                var $adapLb = $("#MixItUpAdap dd.L-b").length;
                var $adapLc = $("#MixItUpAdap dd.L-c").length;
                var $adapLd = $("#MixItUpAdap dd.L-d").length;
                var $adapLe = $("#MixItUpAdap dd.L-e").length;

                $("#adapNumLa").append("<b>(" + $adapLa + ")</b>");
                $("#adapNumLb").append("<b>(" + $adapLb + ")</b>");
                $("#adapNumLc").append("<b>(" + $adapLc + ")</b>");
                $("#adapNumLd").append("<b>(" + $adapLd + ")</b>");
                $("#adapNumLe").append("<b>(" + $adapLe + ")</b>");

                var $adapFashion = $("#MixItUpAdap dd.S-fashion").length;
                var $adapClassical = $("#MixItUpAdap dd.S-classical").length;
                var $adapGorgeous = $("#MixItUpAdap dd.S-gorgeous").length;
                var $adapSimple = $("#MixItUpAdap dd.S-simple").length;

                $("#adapNumF").append("<b>(" + $adapFashion + ")</b>");
                $("#adapNumC").append("<b>(" + $adapClassical + ")</b>");
                $("#adapNumG").append("<b>(" + $adapGorgeous + ")</b>");
                $("#adapNumS").append("<b>(" + $adapSimple + ")</b>");

                //條件篩選統計-RWD
                var $rwdLa = $("#MixItUpRwd dd.L-a").length;
                var $rwdLb = $("#MixItUpRwd dd.L-b").length;
                var $rwdLc = $("#MixItUpRwd dd.L-c").length;
                var $rwdLd = $("#MixItUpRwd dd.L-d").length;
                var $rwdLe = $("#MixItUpRwd dd.L-e").length;

                $("#rwdNumLa").append("<b>(" + $rwdLa + ")</b>");
                $("#rwdNumLb").append("<b>(" + $rwdLb + ")</b>");
                $("#rwdNumLc").append("<b>(" + $rwdLc + ")</b>");
                $("#rwdNumLd").append("<b>(" + $rwdLd + ")</b>");
                $("#rwdNumLe").append("<b>(" + $rwdLe + ")</b>");

                var $rwdFashion = $("#MixItUpRwd dd.S-fashion").length;
                var $rwdClassical = $("#MixItUpRwd dd.S-classical").length;
                var $rwdGorgeous = $("#MixItUpRwd dd.S-gorgeous").length;
                var $rwdSimple = $("#MixItUpRwd dd.S-simple").length;

                $("#rwdNumF").append("<b>(" + $rwdFashion + ")</b>");
                $("#rwdNumC").append("<b>(" + $rwdClassical + ")</b>");
                $("#rwdNumG").append("<b>(" + $rwdGorgeous + ")</b>");
                $("#rwdNumS").append("<b>(" + $rwdSimple + ")</b>");
            }, 500)
        })
    },
});