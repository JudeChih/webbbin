/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url_show_block: 'index',
      hover_nav: '',
      showTemplateData: false,
      showErrorWord: false,
      intro_show_block: '',
      projects: [],
      list: [],
      logolist: [],
      bbinlogo: [],
      wms_url: 'http://wms.bbinpartner.com/',
      option: {
        getSortData: {
          id: "pd_id"
        },
        getFilterData: {
          is_new: function is_new(itemElem) {
            return itemElem.pd_new == 1;
          },
          all: function all(itemElem) {
            return true;
          },
          l_straight: function l_straight(itemElem) {
            return itemElem.pd_layout == 1;
          },
          l_horizontal: function l_horizontal(itemElem) {
            return itemElem.pd_layout == 2;
          },
          l_multi: function l_multi(itemElem) {
            return itemElem.pd_layout == 3;
          },
          l_diagonal: function l_diagonal(itemElem) {
            return itemElem.pd_layout == 4;
          },
          l_norules: function l_norules(itemElem) {
            return itemElem.pd_layout == 5;
          },
          s_fashion: function s_fashion(itemElem) {
            return itemElem.pd_style == 1;
          },
          s_classical: function s_classical(itemElem) {
            return itemElem.pd_style == 2;
          },
          s_gorgeous: function s_gorgeous(itemElem) {
            return itemElem.pd_style == 3;
          },
          s_simple: function s_simple(itemElem) {
            return itemElem.pd_style == 4;
          },
          c_white: function c_white(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'white') {
                _boolean = true;
                break;
              }
            }

            return _boolean;
          },
          c_gray: function c_gray(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean2 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'gray') {
                _boolean2 = true;
                break;
              }
            }

            return _boolean2;
          },
          c_black: function c_black(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean3 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'black') {
                _boolean3 = true;
                break;
              }
            }

            return _boolean3;
          },
          c_blue: function c_blue(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean4 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'blue') {
                _boolean4 = true;
                break;
              }
            }

            return _boolean4;
          },
          c_green: function c_green(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean5 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'green') {
                _boolean5 = true;
                break;
              }
            }

            return _boolean5;
          },
          c_yellow: function c_yellow(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean6 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'yellow') {
                _boolean6 = true;
                break;
              }
            }

            return _boolean6;
          },
          c_brown: function c_brown(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean7 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'coffee') {
                _boolean7 = true;
                break;
              }
            }

            return _boolean7;
          },
          c_orange: function c_orange(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean8 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'orange') {
                _boolean8 = true;
                break;
              }
            }

            return _boolean8;
          },
          c_red: function c_red(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean9 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'red') {
                _boolean9 = true;
                break;
              }
            }

            return _boolean9;
          },
          c_pink: function c_pink(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean10 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'pink') {
                _boolean10 = true;
                break;
              }
            }

            return _boolean10;
          },
          c_purple: function c_purple(itemElem) {
            var colors = JSON.parse(itemElem.pd_colors);
            var _boolean11 = false;

            for (var j = 0; j < colors.length; j++) {
              if (colors[j] == 'purple') {
                _boolean11 = true;
                break;
              }
            }

            return _boolean11;
          },
          t_casino: function t_casino(itemElem) {
            return itemElem.pd_type == 1;
          },
          t_sports: function t_sports(itemElem) {
            return itemElem.pd_type == 2;
          },
          t_card: function t_card(itemElem) {
            return itemElem.pd_type == 3;
          },
          t_live: function t_live(itemElem) {
            return itemElem.pd_type == 4;
          },
          t_lottery: function t_lottery(itemElem) {
            return itemElem.pd_type == 5;
          },
          t_mahjong: function t_mahjong(itemElem) {
            return itemElem.pd_type == 6;
          },
          t_fishing: function t_fishing(itemElem) {
            return itemElem.pd_type == 7;
          },
          filterByText: function filterByText(itemElem) {
            return itemElem.name.toLowerCase().includes(this.filterText.toLowerCase());
          }
        },
        sortAscending: false
      },
      filterOption: 'all',
      layoutOption: 'grid'
    };
  },
  created: function created() {
    var self = this;

    window.onbeforeunload = function () {
      //刷新后页面自动回到顶部
      document.documentElement.scrollTop = 0; //ie下

      document.body.scrollTop = 0; //非ie
    };

    self.checkUrl();
    self.getProjects();
    self.getLogos();
    self.getBBINLogo();
  },
  mounted: function mounted() {
    var self = this;
    self.init_index();
  },
  computed: {},
  methods: {
    goToTemplate: function goToTemplate() {
      var self = this; // document.location.href = '/webbbin/Front/#/template';

      self.url_show_block = 'index';
      document.documentElement.scrollTop = 0; //ie下

      document.body.scrollTop = 0; //非ie

      self.init_index(); // document.documentElement.scrollTop = topHeight + 100;  //ie下
      // document.body.scrollTop = topHeight + 100;  //非ie

      setTimeout(function () {
        var topHeight = $(".index-top-wrap").outerHeight();
        $('html, body').animate({
          scrollTop: topHeight + 100
        }, 300);
      }, 500);
    },
    //變更列表呈現方式
    changeLayout: function changeLayout(key) {
      var self = this;
      self.layoutOption = key;

      if (key == 'grid') {
        $(".index-list-main").removeClass("is-masonry");
        this.$refs.cpt.sort('id');
      } else {
        $(".index-list-main").addClass("is-masonry");
        this.$refs.cpt.sort('id');
      }
    },
    //變更分頁
    filterItems: function filterItems(key) {
      if (this.filterOption != key) {
        this.$refs.cpt.filter(key);
        this.filterOption = key;
      }

      var self = this;
      setTimeout(function () {
        if ($('.index-list-item:hidden').length == self.projects.length) {
          self.showErrorWord = true;
        } else {
          self.showErrorWord = false;
        }
      }, 500);
    },
    init_index: function init_index() {
      var self = this;
      self.url_show_block = 'index';

      if (self.showTemplateData) {
        var topHeight = $(".index-top-wrap").outerHeight(); // document.documentElement.scrollTop = topHeight + 100;  //ie下
        // document.body.scrollTop = topHeight + 100;  //非ie

        setTimeout(function () {
          $('html, body').animate({
            scrollTop: topHeight + 100
          }, 300);
        }, 500);
        self.showTemplateData = false;
      } else {
        document.documentElement.scrollTop = 0; //ie下

        document.body.scrollTop = 0; //非ie
      } // scroll


      $(function () {
        $(".scroll-pc").click(function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $(".index-list-wrap").offset().top
          }, 300);
        });
        $(".scroll-device").click(function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $(".index-list-wrap").offset().top - 80
          }, 300);
        }); // 首頁滾動至篩選列表時取消 header fixed

        $(document).scroll(function () {
          var topHeight = $(".index-top-wrap").outerHeight();

          if ($(this).scrollTop() >= topHeight + 100) {
            $(".header-wrap").addClass("is-hide");
          } else {
            $(".header-wrap").removeClass("is-hide");
          }
        }); // 篩選按鈕的選取狀態

        $('.index-filter-link').each(function (i, navfilter) {
          var $navfilter = $(navfilter);
          $navfilter.on('click', 'button', function () {
            // $navfilter.find('button.is-active').removeClass('is-active');
            // $(this).addClass('is-active');
            $("html, body").removeClass("no-scroll");
            $(".nav-filter-btn").removeClass("is-active");
            $(".index-filter-wrap").removeClass("is-active");
            $(".overlay").removeClass("is-active");
            $('html, body').animate({
              scrollTop: $(".index-list-wrap").offset().top - 80
            }, 300);
            $(".index-filter-sub").slideUp(); // $(".index-filter-btn").removeClass("is-active");
          });
        });
        $('.index-top-button').on('click', 'button', function () {
          // $('.index-filter-link button').removeClass('is-active');
          $('html, body').animate({
            scrollTop: $(".index-list-wrap").offset().top - 80
          }, 300);
        }); // 取得篩選條件的文字

        $('.index-filter-btn').click(function () {
          var first = $(this).text();
          $(".index-list-top").find("h2").text(first);

          if (first == "所有款式" || first == "最新版型") {
            $(".index-list-top").find("h3").text("");
          }
        });
        $('.index-filter-option').click(function () {
          var second = $(this).text();
          $(".index-list-top").find("h3").text(second);
        });
        $('.index-top-button button').click(function () {
          var second = $(this).text();
          $(".index-list-top").find("h2").text("主题类型");
          $(".index-list-top").find("h3").text(second);
        });
        $(".index-filter-btn").on("click", function (e) {
          if ($(this).parent().has(".index-filter-sub")) {
            e.preventDefault();
          }

          if (!$(this).hasClass("is-active")) {
            $(".index-filter-sub").slideUp();
            $(".index-filter-btn").removeClass("is-active");
            $(this).next(".index-filter-sub").slideDown();
            $(this).addClass("is-active");
          } else if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(this).next(".index-filter-sub").slideUp();
          }
        }); // Remove inline-block node

        $('.removeTextNodes').contents().filter(function () {
          return this.nodeType === 3;
        }).remove(); // vh adjust

        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // Nav

        $(".nav-menu-btn").click(function () {
          // $("html, body").toggleClass("no-scroll");
          $(".nav-wrap, .overlay").toggleClass("is-active");
          $(this).toggleClass("is-active");

          if ($(".nav-filter-btn").hasClass("is-active")) {
            $(".nav-filter-btn").removeClass("is-active");
            $(".index-filter-wrap").removeClass("is-active");
            $(".overlay").addClass("is-active"); // $("html, body").addClass("no-scroll");
          }
        });
        $(".nav-filter-btn").click(function () {
          // $("html, body").toggleClass("no-scroll");
          $(".index-filter-wrap, .overlay").toggleClass("is-active");
          $(this).toggleClass("is-active");

          if ($(".nav-menu-btn").hasClass("is-active")) {
            $(".nav-menu-btn").removeClass("is-active");
            $(".nav-wrap").removeClass("is-active");
            $(".overlay").addClass("is-active"); // $("html, body").addClass("no-scroll");
          }
        });
        $(".nav-wrap a").click(function () {
          $(".nav-menu-btn").removeClass("is-active");
          $(".nav-wrap").removeClass("is-active");
          $(".overlay").removeClass("is-active");
        }); // Go top

        $(window).scroll(function () {
          if ($(this).scrollTop() > 240) {
            $(".btn-top").fadeIn();
          } else {
            $(".btn-top").fadeOut();
          }
        });
        $(".btn-top").click(function () {
          $('body, html').animate({
            scrollTop: 0
          }, 500);
        }); // Overlay

        $(".overlay").click(function () {
          // $("html, body").removeClass("no-scroll");
          $(".nav-wrap, .nav-menu-btn, .index-filter-wrap, .nav-filter-btn").removeClass("is-active");
          $(this).removeClass("is-active");
        }); // Resize

        $(window).resize(function () {
          $(".nav-menu-btn").removeClass("is-active");
          $(".nav-wrap").removeClass("is-active");
          $(".nav-filter-btn").removeClass("is-active");
          $(".index-filter-wrap").removeClass("is-active");
          $(".overlay").removeClass("is-active");
          $(".index-filter-sub").css("display", "");
        });
      });
    },
    init_intro: function init_intro() {
      var self = this;
      self.url_show_block = 'intro'; // scroll

      $(function () {
        // slick 設定
        $(".intro-slider-wrap").slick({
          dots: true,
          arrows: true,
          adaptiveHeight: true
        });
        $(".intro-brand-list").slick({
          dots: false,
          arrows: false,
          slidesToShow: 5,
          responsive: [{
            breakpoint: 991,
            settings: {
              arrows: true,
              slidesToShow: 2
            }
          }, {
            breakpoint: 481,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          }]
        });
        $(".filter-nav").slick({
          dots: false,
          infinite: false,
          arrows: false,
          touchMove: false,
          swipe: false,
          swipeToSlide: false,
          variableWidth: true,
          // slidesToShow: 1,
          responsive: [{
            breakpoint: 991,
            settings: {
              arrows: true,
              swipe: true,
              touchMove: true,
              swipeToSlide: true,
              // centerMode: true,
              infinite: true
            }
          }]
        }); // 合作模式 設定

        $("#js-cm-b1").click(function () {
          $(".intro-cm-popup, .intro-cm-popup .btn-prev, .intro-cm-popup .btn-next").fadeIn();
          $("#js-cm-c1").fadeIn();
        });
        $("#js-cm-b2").click(function () {
          $(".intro-cm-popup, .intro-cm-popup .btn-prev, .intro-cm-popup .btn-next").fadeIn();
          $("#js-cm-c2").fadeIn();
        });
        $(".intro-cm-popup .btn-close").click(function () {
          $(".intro-cm-popup .btn-next, .intro-cm-popup .btn-prev").fadeOut();
          $(".intro-cm-popup").fadeOut();
          $(".intro-cm-popup .popup-text").fadeOut();
        });
        $(".intro-cm-popup .btn-next, .intro-cm-popup .btn-prev").click(function () {
          var display1 = $("#js-cm-c1").css("display");
          var display2 = $("#js-cm-c2").css("display");

          if (display1 == "block") {
            $("#js-cm-c1").fadeOut();
            $("#js-cm-c2").fadeIn();
          } else if (display2 == "block") {
            $("#js-cm-c1").fadeIn();
            $("#js-cm-c2").fadeOut();
          }
        });
        $(".intro-cm-next").click(function () {
          $(".intro-cm-text.is-text-1").removeClass("is-active");
          $(".intro-cm-text.is-text-2").addClass("is-active");
          $(".intro-cm-prev").addClass("is-active");
          $(this).removeClass("is-active");
        });
        $(".intro-cm-prev").click(function () {
          $(".intro-cm-text.is-text-1").addClass("is-active");
          $(".intro-cm-text.is-text-2").removeClass("is-active");
          $(".intro-cm-next").addClass("is-active");
          $(this).removeClass("is-active");
        }); // 品牌優勢 設定

        $(".intro-brand-item.is-style-1 hgroup button").click(function () {
          $("#brand-popup-1").addClass("is-active");
        });
        $(".intro-brand-item.is-style-2 hgroup button").click(function () {
          $("#brand-popup-2").addClass("is-active");
        });
        $(".intro-brand-item.is-style-4 hgroup button").click(function () {
          $("#brand-popup-4").addClass("is-active");
        });
        $(".intro-brand-item.is-style-5 hgroup button").click(function () {
          $("#brand-popup-5").addClass("is-active");
        });
        $(".intro-brand-popup .btn-close").click(function () {
          $(".intro-brand-popup").removeClass("is-active");
        });
        $(".intro-brand-popup .btn-prev").click(function () {
          var bid = $(this).parents(".intro-brand-popup").attr("id");
          $(this).parents(".intro-brand-popup").removeClass("is-active");

          if (bid == "brand-popup-1") {
            $("#brand-popup-5").addClass("is-active");
          } else if (bid == "brand-popup-2") {
            $("#brand-popup-1").addClass("is-active");
          } else if (bid == "brand-popup-4") {
            $("#brand-popup-2").addClass("is-active");
          } else if (bid == "brand-popup-5") {
            $("#brand-popup-4").addClass("is-active");
          }
        });
        $(".intro-brand-popup .btn-next").click(function () {
          var bid = $(this).parents(".intro-brand-popup").attr("id");
          $(this).parents(".intro-brand-popup").removeClass("is-active");

          if (bid == "brand-popup-1") {
            $("#brand-popup-2").addClass("is-active");
          } else if (bid == "brand-popup-2") {
            $("#brand-popup-4").addClass("is-active");
          } else if (bid == "brand-popup-4") {
            $("#brand-popup-5").addClass("is-active");
          } else if (bid == "brand-popup-5") {
            $("#brand-popup-1").addClass("is-active");
          }
        }); // 產品類型 設定

        $(".pd-nav li:first").addClass("is-active");
        $(".pd-content div:first").addClass("is-active");
        $(".pd-nav li").click(function () {
          $(this).addClass("is-active");
          $(this).siblings().removeClass("is-active");
          $(".pd-content div").siblings().removeClass("is-active");
          $(".pd-content div").eq($(this).index()).addClass("is-active");
        }); // 合作夥伴 設定

        var $MixItUp = $('.filter-content').isotope({
          itemSelector: '.filter-content figure',
          masonry: {
            gutter: 0
          }
        });
        $MixItUp.imagesLoaded(function () {
          $MixItUp.isotope('layout');
        });
        $('.intro-partner-filter nav').on('click', 'a', function () {
          var filterValue = $(this).attr('data-filter');
          $MixItUp.isotope({
            filter: filterValue
          });
        }); // 篩選按鈕的選取狀態

        $('.intro-partner-filter nav').each(function (i, navfilter) {
          var $navfilter = $(navfilter);
          $navfilter.on('click', 'a', function () {
            $navfilter.find('.is-active').removeClass('is-active');
            $(this).parent().addClass('is-active');
          });
        }); // 20200730new--- by 壯壯
        // h-scroll

        $(function () {
          $("ul[rel='intro-pd-scroll']").customscroll({
            direction: "horizontal",
            bounce: 0
          });
        });

        jQuery.fn.customscroll = function (d) {
          return this.each(function () {
            var direction = d.direction,
                bounce = typeof d.bounce === "number" ? d.bounce : 20;
            var drag = {
              d: direction,
              t: $(this).attr("rel"),
              id: $(this),
              setdimensions: function setdimensions(orientation) {
                //DD added function
                if (orientation == "horizontal") {
                  var _drag$s$css;

                  drag.b.css({
                    width: drag.id.width(),
                    left: 0,
                    bottom: 0,
                    position: "absolute",
                    "z-index": 10
                  });
                  drag.c.css({
                    display: "block",
                    position: "absolute",
                    height: drag.id.height() - drag.b.height() - 5,
                    "overflow-y": "hidden"
                  });
                  drag.s.css((_drag$s$css = {
                    width: drag.b.width(),
                    top: 0
                  }, _defineProperty(_drag$s$css, "width", 70), _defineProperty(_drag$s$css, "height", drag.b.height()), _defineProperty(_drag$s$css, "position", "absolute"), _defineProperty(_drag$s$css, "z-index", 100), _drag$s$css));
                  drag.tickB = parseFloat(parseInt(drag.c.width() - drag.s.parent().width()) / parseInt(drag.s.parent().width() - drag.s.width())); // ratio between scrollable DIV area and scrollbar area

                  drag.tickC = parseFloat(parseInt(drag.s.parent().width() - drag.s.width()) / parseInt(drag.c.width() - drag.s.parent().width())); // ratio between scrollable scrollbar area and DIV area

                  return [drag.b.width() - drag.s.width() + bounce, drag.id.width() - drag.c.width() - bounce * drag.tickB];
                } else {
                  drag.b.css({
                    height: drag.id.height(),
                    right: 0,
                    top: 0,
                    position: "absolute"
                  });
                  drag.c.css({
                    display: "block",
                    position: "absolute",
                    width: drag.id.width() - drag.b.width() - 5
                  });
                  drag.s.css({
                    width: drag.b.width(),
                    top: 0,
                    height: 70,
                    position: "absolute"
                  });
                  drag.tickB = parseFloat(parseInt(drag.c.height() - drag.s.parent().height()) / parseInt(drag.s.parent().height() - drag.s.height()));
                  drag.tickC = parseFloat(parseInt(drag.s.parent().height() - drag.s.height()) / parseInt(drag.c.height() - drag.s.parent().height()));
                  return [drag.b.height() - drag.s.height() + bounce, drag.id.height() - drag.c.height() - bounce * drag.tickB];
                }
              },
              create: function create() {
                switch (drag.d) {
                  case "horizontal":
                    drag.elements("horizontal");
                    var maxs = drag.setdimensions("horizontal");
                    drag.s.data({
                      click: false
                    });
                    drag.s.mouseover(function () {
                      drag.s.data({
                        click: true
                      });
                    });
                    drag.s.mouseout(function () {
                      drag.s.data({
                        click: false
                      });
                    });
                    drag.id.bind("mousewheel", function (f, delta) {
                      f.preventDefault();
                      clearTimeout(drag.wheeltimer);
                      var initial = drag.s.position().left,
                          moveby;
                      drag.s.css({
                        left: Math.min(Math.max(moveby = -10 * delta + initial, -bounce), maxs[0])
                      });
                      drag.c.css({
                        left: Math.max(Math.min(-drag.tickB * moveby, drag.tickB * bounce), maxs[1])
                      });
                      drag.wheeltimer = setTimeout(drag.redrawH, 100);
                    });
                    drag.s.mousedown(function (f) {
                      f.preventDefault();
                      drag.s.data({
                        hold: false
                      });
                      var initial = drag.s.parent().offset().left - (drag.s.offset().left - f.pageX);
                      $(document).mousemove(function (e) {
                        e.preventDefault();

                        if (drag.s.data("hold") == false) {
                          drag.s.css({
                            left: Math.min(Math.max(e.pageX - initial, -bounce), maxs[0])
                          });
                          drag.c.css({
                            left: Math.max(Math.min(-drag.tickB * (e.pageX - initial), drag.tickB * bounce), maxs[1])
                          });
                        }
                      });
                    });
                    $(document).mouseup(function () {
                      drag.redrawH();
                    });
                    drag.id.bind("touchstart", function (f) {
                      var f = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches[0] : f;
                      var initial = drag.c.position().left;
                      var initialx = f.pageX;
                      $(document).bind("touchmove.slickscroll", function (f) {
                        // cancel scroll action ontouch with single finger
                        var touches = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches.length : 0;
                        var f = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches[0] : f;
                        var moveby = f.pageX - initialx;
                        drag.s.css({
                          left: Math.min(Math.max(-drag.tickC * (initial + moveby), -bounce), maxs[0])
                        });
                        drag.c.css({
                          left: Math.max(Math.min(initial + moveby, drag.tickB * bounce), maxs[1])
                        });
                        if (touches == 1) // cancel scroll action ontouch with single finger
                          return false;
                      });
                    });
                    drag.id.bind("touchend", function (f) {
                      $(document).unbind("touchmove.slickscroll");
                      drag.redrawH();
                    });
                    drag.b.click(function (e) {
                      if (drag.s.data("click") == false) {
                        var initial = drag.s.parent().offset().left + drag.s.width() / 2;
                        drag.s.animate({
                          left: e.pageX - initial
                        });
                        drag.c.animate({
                          left: -drag.tickB * (e.pageX - initial)
                        }, {
                          complete: function complete() {
                            drag.redrawH();
                          }
                        });
                      }
                    });
                    break;

                  case "vertical":
                    drag.elements("vertical");
                    var maxs = drag.setdimensions("vertical");
                    drag.s.data({
                      click: false
                    });
                    drag.s.mouseover(function () {
                      drag.s.data({
                        click: true
                      });
                    });
                    drag.s.mouseout(function () {
                      drag.s.data({
                        click: false
                      });
                    });
                    drag.id.bind("mousewheel", function (f, delta) {
                      f.preventDefault();
                      clearTimeout(drag.wheeltimer);
                      var initial = drag.s.position().top,
                          moveby;
                      drag.s.css({
                        top: Math.min(Math.max(moveby = -10 * delta + initial, -bounce), maxs[0])
                      });
                      drag.c.css({
                        top: Math.max(Math.min(-drag.tickB * moveby, drag.tickB * bounce), maxs[1])
                      });
                      drag.wheeltimer = setTimeout(drag.redrawV, 100);
                    });
                    drag.s.bind("mousedown", function (f) {
                      f.preventDefault();
                      drag.s.data({
                        hold: false
                      });
                      var initial = drag.s.parent().offset().top - (drag.s.offset().top - f.pageY);
                      $(document).bind("mousemove", function (e) {
                        e.preventDefault();

                        if (drag.s.data("hold") == false) {
                          drag.s.css({
                            top: Math.min(Math.max(e.pageY - initial, -bounce), maxs[0])
                          });
                          drag.c.css({
                            top: Math.max(Math.min(-drag.tickB * (e.pageY - initial), drag.tickB * bounce), maxs[1])
                          });
                        }
                      });
                    });
                    $(document).bind("mouseup", function () {
                      drag.redrawV();
                    });
                    drag.id.bind("touchstart", function (f) {
                      var f = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches[0] : f;
                      var initial = drag.c.position().top;
                      var initialy = f.pageY;
                      $(document).bind("touchmove.slickscroll", function (f) {
                        // cancel scroll action ontouch with single finger
                        var touches = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches.length : 0;
                        var f = f.type.indexOf("touch") != "-1" ? f.originalEvent.changedTouches[0] : f;
                        var moveby = f.pageY - initialy;
                        drag.s.css({
                          top: Math.min(Math.max(-drag.tickC * (initial + moveby), -bounce), maxs[0])
                        });
                        drag.c.css({
                          top: Math.max(Math.min(initial + moveby, drag.tickB * bounce), maxs[1])
                        });
                        if (touches == 1) // cancel scroll action ontouch with single finger
                          return false;
                      });
                    });
                    drag.id.bind("touchend", function (f) {
                      $(document).unbind("touchmove.slickscroll");
                      drag.redrawV();
                    });
                    drag.b.click(function (e) {
                      if (drag.s.data("click") == false) {
                        var initial = drag.s.parent().offset().top + drag.s.height() / 2;
                        drag.s.animate({
                          top: e.pageY - initial
                        });
                        drag.c.animate({
                          top: -drag.tickB * (e.pageY - initial)
                        }, {
                          complete: function complete() {
                            drag.redrawV();
                          }
                        });
                      }
                    });
                    break;
                }

                $("a").click(function () {
                  if ($(this).attr("rel")) {
                    drag.move("#" + $(this).attr("rel"), $(this).attr("parent"));
                  }
                });
                $(window).resize(function () {
                  //DD added event
                  drag.setdimensions(drag.d);
                  var resetpos = drag.d == "horizontal" ? {
                    left: 0
                  } : {
                    top: 0
                  };
                  drag.c.css(resetpos);
                }); // $(window).unload(function () {
                //     drag.destroy();
                // });
              },
              redrawV: function redrawV() {
                drag.s.data({
                  hold: true
                });

                if (drag.s.parent().height() < drag.s.position().top + drag.s.height()) {
                  drag.s.animate({
                    top: drag.s.parent().height() - drag.s.height()
                  }, 250);
                  drag.c.animate({
                    top: drag.s.parent().height() - drag.c.height()
                  }, 250);
                } else if (drag.s.position().top < 0) {
                  drag.s.animate({
                    top: 0
                  }, 250);
                  drag.c.animate({
                    top: 0
                  }, 250);
                }
              },
              redrawH: function redrawH() {
                drag.s.data({
                  hold: true
                });

                if (drag.s.parent().width() < drag.s.position().left + drag.s.width()) {
                  drag.s.animate({
                    left: drag.s.parent().width() - drag.s.width()
                  }, 250);
                  drag.c.animate({
                    left: drag.s.parent().width() - drag.c.width()
                  }, 250);
                } else if (drag.s.position().left < 0) {
                  drag.s.animate({
                    left: 0
                  }, 250);
                  drag.c.animate({
                    left: 0
                  }, 250);
                }
              },
              move: function move(where, par) {
                if (drag.d == "vertical" && drag.t == par) {
                  if (drag.tickC * $(where).position().top > drag.s.parent().height() - drag.s.height()) {
                    drag.s.animate({
                      top: drag.s.parent().height() - drag.s.height()
                    }, {
                      duration: 250
                    });
                    drag.c.animate({
                      top: drag.s.parent().height() - drag.c.height()
                    }, {
                      duration: 250
                    });
                  } else {
                    drag.s.animate({
                      top: drag.tickC * $(where).position().top
                    }, {
                      duration: 250
                    });
                    drag.c.animate({
                      top: -$(where).position().top
                    }, {
                      duration: 250
                    });
                  }
                } else if (drag.d == "horizontal" && drag.t == par) {
                  if (drag.tickC * $(where).position().left > drag.s.parent().width() - drag.s.width()) {
                    drag.s.animate({
                      left: drag.s.parent().width() - drag.s.width()
                    }, {
                      duration: 250
                    });
                    drag.c.animate({
                      left: drag.s.parent().width() - drag.c.width()
                    }, {
                      duration: 250
                    });
                  } else {
                    drag.s.animate({
                      left: drag.tickC * $(where).position().left
                    }, {
                      duration: 250
                    });
                    drag.c.animate({
                      left: -$(where).position().left
                    }, {
                      duration: 250
                    });
                  }
                }
              },
              elements: function elements(where) {
                drag.id.css({
                  overflow: "hidden",
                  position: "relative"
                });
                drag.id.wrapInner('<div class="' + drag.t + '-content"></div>');
                drag.c = $("." + drag.t + "-content");
                drag.id.append('<div class="' + drag.t + '-bar"></div>');
                drag.b = $("." + drag.t + "-bar");
                drag.b.append('<div class="' + drag.t + '-drag"></div>');
                drag.s = $("." + drag.t + "-drag");
              },
              destroy: function destroy() {
                // What happens in DOM, stays in DOM. Unless...
                $("*").each(function () {
                  $(this).remove();
                });
              }
            };
            drag.create();
          });
        };

        (function (a) {
          function d(b) {
            var c = b || window.event,
                d = [].slice.call(arguments, 1),
                e = 0,
                f = !0,
                g = 0,
                h = 0;
            return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d);
          }

          var b = ["DOMMouseScroll", "mousewheel"];
          if (a.event.fixHooks) for (var c = b.length; c;) {
            a.event.fixHooks[b[--c]] = a.event.mouseHooks;
          }
          a.event.special.mousewheel = {
            setup: function setup() {
              if (this.addEventListener) for (var a = b.length; a;) {
                this.addEventListener(b[--a], d, !1);
              } else this.onmousewheel = d;
            },
            teardown: function teardown() {
              if (this.removeEventListener) for (var a = b.length; a;) {
                this.removeEventListener(b[--a], d, !1);
              } else this.onmousewheel = null;
            }
          }, a.fn.extend({
            mousewheel: function mousewheel(a) {
              return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
            },
            unmousewheel: function unmousewheel(a) {
              return this.unbind("mousewheel", a);
            }
          });
        })(jQuery); // ---end

      });
    },
    scrollToIntroPage: function scrollToIntroPage(string) {
      var self = this;
      setTimeout(function () {
        var headerHeight = $(".header-wrap").outerHeight();

        if (string == 'js-intro-cm') {
          $('html, body').stop().animate({
            scrollTop: $(".intro-slider-wrap").offset().top - headerHeight
          }, 300);
        } else if (string == 'js-intro-pd') {
          $('html, body').stop().animate({
            scrollTop: $("#js-intro-pd").offset().top - headerHeight
          }, 300);
        } else if (string == 'js-intro-brand') {
          $('html, body').stop().animate({
            scrollTop: $("#js-intro-brand").offset().top - headerHeight
          }, 300);
        } else if (string == 'js-intro-partner') {
          $('html, body').stop().animate({
            scrollTop: $("#js-intro-partner").offset().top - headerHeight
          }, 300);
        }
      }, 200);
    },
    //////////////////////// 檢查各項目 ////////////////////////
    ///
    // 檢查該使用者是否可以瀏覽該頁面
    checkUrl: function checkUrl() {
      var self = this;
      var url = new URL(location.href);
      var array = url.hash.split("#/"); // console.log(array)

      if (array[1] != '') {
        if (array[1] == 'index') {
          // self.init_index();
          this.$router.replace('/index')["catch"](function (err) {});
        } else if (array[1] == 'intro') {
          // self.init_intro();
          this.$router.replace('/intro')["catch"](function (err) {});
        } else if (array[1] == 'template') {
          self.showTemplateData = true;
          this.$router.replace('/index')["catch"](function (err) {});
        } else {
          // self.init_index();
          this.$router.replace('/index')["catch"](function (err) {});
        }
      } else {
        // self.init_index();
        this.$router.replace('/index')["catch"](function (err) {});
      }
    },
    //傳入版型資料傳出相對應的class name
    checkTags: function checkTags(data) {
      var self = this;
      var layout = ['l-straight', 'l-horizontal', 'l-multi', 'l-diagonal', 'l-norules'];
      var style = ['s-fashion', 's-classical', 's-gorgeous', 's-simple'];
      var type = ['t-casino', 't-sports', 't-card', 't-live', 't-lottery', 't-mahjong', 't-fishing'];
      var string = layout[data.pd_layout - 1] + ' ' + style[data.pd_style - 1] + ' ' + type[data.pd_type - 1] + ' ';
      var colors = JSON.parse(data.pd_colors);

      for (var i = 0; i < colors.length; i++) {
        string = string + 'c-' + colors[i] + ' ';
      }

      return string;
    },
    //傳入版型色系傳出css code
    checkColors: function checkColors(data) {
      var self = this;
      var colors = JSON.parse(data);
      var string = '';

      if (colors.length == 1) {
        string = 'background:' + (colors[0] == 'coffee' ? 'brown' : colors[0]);
      } else if (colors.length == 2) {
        string = 'background: linear-gradient(to right,' + (colors[0] == 'coffee' ? 'brown' : colors[0]) + ' 0%,' + (colors[1] == 'coffee' ? 'brown' : colors[1]) + ' 100%);';
      } else if (colors.length == 3) {
        string = 'background: linear-gradient(to right,' + (colors[0] == 'coffee' ? 'brown' : colors[0]) + ' 0%,' + (colors[1] == 'coffee' ? 'brown' : colors[1]) + ' 50%,' + (colors[2] == 'coffee' ? 'brown' : colors[2]) + ' 100%);';
      }

      return string;
    },
    ///
    //////////////////////// 檢查各項目 end /////////////////////
    //////////////////////// 取值專區 ////////////////////////
    ///
    //取得版型資料
    getProjects: function getProjects() {
      var self = this;
      axios.get('../projects').then(function (response) {
        self.projects = response.data;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //單獨取得BBIN資料
    getBBINLogo: function getBBINLogo() {
      var self = this;
      axios.get('../bbinlogo').then(function (response) {
        self.bbinlogo = response.data;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得合作夥伴資料
    getLogos: function getLogos() {
      var self = this;
      axios.get('../logos').then(function (response) {
        self.logolist = response.data;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 取值專區 end ///////////////////////
    //////////////////////// 推播框設定 ////////////////////////
    ///
    // 推撥提示框
    notification: function notification(string, type) {
      if (type == 'success') {
        this.$notify({
          title: '成功',
          message: string,
          position: 'bottom-right',
          type: 'success'
        });
      } else if (type == 'failure') {
        this.$notify({
          title: '失敗',
          message: string,
          position: 'bottom-right',
          type: 'error'
        });
      }
    } ///
    //////////////////////// 推播框設定 end ////////////////////

  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "mainBody" } }, [
    _c(
      "header",
      {
        staticClass: "header-wrap",
        class: _vm.url_show_block == "intro" ? "is-intro" : false
      },
      [
        _c("div", { staticClass: "header-center" }, [
          _c("div", { staticClass: "logo-wrap" }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: {
                  click: function($event) {
                    _vm.url_show_block != "index"
                      ? (_vm.url_show_block = "index")
                      : false
                  }
                }
              },
              [_c("img", { attrs: { src: "image/logo.png" } })]
            )
          ]),
          _vm._v(" "),
          _c("nav", { staticClass: "nav-wrap" }, [
            _c("ul", [
              _c("li", [
                _c(
                  "a",
                  {
                    class: _vm.url_show_block == "index" ? "is-active" : false,
                    attrs: { href: "javascript:void(0)", id: "nav-home" },
                    on: {
                      click: function($event) {
                        _vm.url_show_block != "index" ? _vm.init_index() : false
                      }
                    }
                  },
                  [_vm._v("多元模版")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    class:
                      _vm.url_show_block == "intro" &&
                      _vm.intro_show_block == "js-intro-cm"
                        ? "is-active"
                        : false,
                    attrs: { id: "scroll-cm", href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.url_show_block != "intro"
                          ? _vm.init_intro()
                          : false,
                          (_vm.intro_show_block = "js-intro-cm"),
                          _vm.scrollToIntroPage("js-intro-cm")
                      }
                    }
                  },
                  [_vm._v("合作模式")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    class:
                      _vm.url_show_block == "intro" &&
                      _vm.intro_show_block == "js-intro-pd"
                        ? "is-active"
                        : false,
                    attrs: { id: "scroll-pd", href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.url_show_block != "intro"
                          ? _vm.init_intro()
                          : false,
                          (_vm.intro_show_block = "js-intro-pd"),
                          _vm.scrollToIntroPage("js-intro-pd")
                      }
                    }
                  },
                  [_vm._v("产品类型")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    class:
                      _vm.url_show_block == "intro" &&
                      _vm.intro_show_block == "js-intro-brand"
                        ? "is-active"
                        : false,
                    attrs: { id: "scroll-brand", href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.url_show_block != "intro"
                          ? _vm.init_intro()
                          : false,
                          (_vm.intro_show_block = "js-intro-brand"),
                          _vm.scrollToIntroPage("js-intro-brand")
                      }
                    }
                  },
                  [_vm._v("品牌优势")]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    class:
                      _vm.url_show_block == "intro" &&
                      _vm.intro_show_block == "js-intro-partner"
                        ? "is-active"
                        : false,
                    attrs: { id: "scroll-partner", href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.url_show_block != "intro"
                          ? _vm.init_intro()
                          : false,
                          (_vm.intro_show_block = "js-intro-partner"),
                          _vm.scrollToIntroPage("js-intro-partner")
                      }
                    }
                  },
                  [_vm._v("合作伙伴")]
                )
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "nav-menu-btn" }),
          _vm._v(" "),
          _vm.url_show_block == "index"
            ? _c("button", { staticClass: "nav-filter-btn" })
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _vm.url_show_block == "index"
      ? _c("div", [
          _c("main", { staticClass: "container-wrap" }, [
            _c("section", { staticClass: "index-top-wrap" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "index-top-button removeTextNodes" }, [
                _c(
                  "button",
                  {
                    staticClass: "is-casino",
                    attrs: { "data-filter": ".t-casino" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_casino")
                      }
                    }
                  },
                  [_c("span", [_vm._v("机率")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-sports",
                    attrs: { "data-filter": ".t-sports" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_sports")
                      }
                    }
                  },
                  [_c("span", [_vm._v("体育")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-card",
                    attrs: { "data-filter": ".t-card" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_card")
                      }
                    }
                  },
                  [_c("span", [_vm._v("棋牌")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-live",
                    attrs: { "data-filter": ".t-live" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_live")
                      }
                    }
                  },
                  [_c("span", [_vm._v("视讯")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-lottery",
                    attrs: { "data-filter": ".t-lottery" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_lottery")
                      }
                    }
                  },
                  [_c("span", [_vm._v("彩票")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-mahjong",
                    attrs: { "data-filter": ".t-mahjong" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_mahjong")
                      }
                    }
                  },
                  [_c("span", [_vm._v("麻將")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "is-fishing",
                    attrs: { "data-filter": ".t-fishing" },
                    on: {
                      click: function($event) {
                        return _vm.filterItems("t_fishing")
                      }
                    }
                  },
                  [_c("span", [_vm._v("捕鱼")])]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "index-top-title-1" }),
              _vm._v(" "),
              _c("div", { staticClass: "index-top-title-2" }),
              _vm._v(" "),
              _c("div", { staticClass: "index-top-title-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "index-top-title-4" }),
              _vm._v(" "),
              _c("span", { staticClass: "index-top-line-1" }),
              _vm._v(" "),
              _c("span", { staticClass: "index-top-line-2" })
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "index-filter-wrap" }, [
              _c("nav", { staticClass: "index-filter-nav" }, [
                _c(
                  "div",
                  { staticClass: "index-filter-link removeTextNodes" },
                  [
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "button",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "all" ? "is-active" : false,
                          attrs: { "data-filter": "*" },
                          on: {
                            click: function($event) {
                              return _vm.filterItems("all")
                            }
                          }
                        },
                        [_vm._v("所有款式")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "button",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "is_new" ? "is-active" : false,
                          attrs: { "data-filter": ".is-new" },
                          on: {
                            click: function($event) {
                              return _vm.filterItems("is_new")
                            }
                          }
                        },
                        [_vm._v("最新版型")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "l_straight" ||
                            _vm.filterOption == "l_horizontal" ||
                            _vm.filterOption == "l_multi" ||
                            _vm.filterOption == "l_diagonal" ||
                            _vm.filterOption == "l_norules"
                              ? "is-active"
                              : false
                        },
                        [_vm._v("版型布局"), _c("i")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "index-filter-sub" }, [
                        _c("div", { staticClass: "is-layout" }, [
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-straight",
                              class:
                                _vm.filterOption == "l_straight"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".l-straight" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("l_straight")
                                }
                              }
                            },
                            [
                              _c("i"),
                              _vm._v(" "),
                              _c("span", [_vm._v("直向大小")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-horizontal",
                              class:
                                _vm.filterOption == "l_horizontal"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".l-horizontal" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("l_horizontal")
                                }
                              }
                            },
                            [
                              _c("i"),
                              _vm._v(" "),
                              _c("span", [_vm._v("横向大小")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-multi",
                              class:
                                _vm.filterOption == "l_multi"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".l-multi" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("l_multi")
                                }
                              }
                            },
                            [
                              _c("i"),
                              _vm._v(" "),
                              _c("span", [_vm._v("多面切割")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-diagonal",
                              class:
                                _vm.filterOption == "l_diagonal"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".l-diagonal" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("l_diagonal")
                                }
                              }
                            },
                            [
                              _c("i"),
                              _vm._v(" "),
                              _c("span", [_vm._v("对角线")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-norules",
                              class:
                                _vm.filterOption == "l_norules"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".l-norules" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("l_norules")
                                }
                              }
                            },
                            [
                              _c("i"),
                              _vm._v(" "),
                              _c("span", [_vm._v("無規則")])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "s_fashion" ||
                            _vm.filterOption == "s_classical" ||
                            _vm.filterOption == "s_gorgeous" ||
                            _vm.filterOption == "s_simple"
                              ? "is-active"
                              : false
                        },
                        [_vm._v("设计风格"), _c("i")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "index-filter-sub" }, [
                        _c("div", { staticClass: "is-style" }, [
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-fashion",
                              class:
                                _vm.filterOption == "s_fashion"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".s-fashion" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("s_fashion")
                                }
                              }
                            },
                            [_c("span", [_vm._v("前卫时尚")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-classical",
                              class:
                                _vm.filterOption == "s_classical"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".s-classical" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("s_classical")
                                }
                              }
                            },
                            [_c("span", [_vm._v("复古典雅")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-gorgeous",
                              class:
                                _vm.filterOption == "s_gorgeous"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".s-gorgeous" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("s_gorgeous")
                                }
                              }
                            },
                            [_c("span", [_vm._v("精致华丽")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-simple",
                              class:
                                _vm.filterOption == "s_simple"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".s-simple" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("s_simple")
                                }
                              }
                            },
                            [_c("span", [_vm._v("简约大气")])]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "c_white" ||
                            _vm.filterOption == "c_gray" ||
                            _vm.filterOption == "c_black" ||
                            _vm.filterOption == "c_blue" ||
                            _vm.filterOption == "c_green" ||
                            _vm.filterOption == "c_yellow" ||
                            _vm.filterOption == "c_brown" ||
                            _vm.filterOption == "c_orange" ||
                            _vm.filterOption == "c_red" ||
                            _vm.filterOption == "c_pink" ||
                            _vm.filterOption == "c_purple"
                              ? "is-active"
                              : false
                        },
                        [_vm._v("颜色色系"), _c("i")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "index-filter-sub" }, [
                        _c("div", { staticClass: "is-color" }, [
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-white",
                              class:
                                _vm.filterOption == "c_white"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-white" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_white")
                                }
                              }
                            },
                            [_c("b", [_vm._v("白色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-gray",
                              class:
                                _vm.filterOption == "c_gray"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-gray" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_gray")
                                }
                              }
                            },
                            [_c("b", [_vm._v("灰色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-black",
                              class:
                                _vm.filterOption == "c_black"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-black" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_black")
                                }
                              }
                            },
                            [_c("b", [_vm._v("黑色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-blue",
                              class:
                                _vm.filterOption == "c_blue"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-blue" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_blue")
                                }
                              }
                            },
                            [_c("b", [_vm._v("藍色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-green",
                              class:
                                _vm.filterOption == "c_green"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-green" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_green")
                                }
                              }
                            },
                            [_c("b", [_vm._v("綠色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-yellow",
                              class:
                                _vm.filterOption == "c_yellow"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-yellow" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_yellow")
                                }
                              }
                            },
                            [_c("b", [_vm._v("黃色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-brown",
                              class:
                                _vm.filterOption == "c_brown"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-brown" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_brown")
                                }
                              }
                            },
                            [_c("b", [_vm._v("棕色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-orange",
                              class:
                                _vm.filterOption == "c_orange"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-orange" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_orange")
                                }
                              }
                            },
                            [_c("b", [_vm._v("橘色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-red",
                              class:
                                _vm.filterOption == "c_red"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-red" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_red")
                                }
                              }
                            },
                            [_c("b", [_vm._v("紅色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-pink",
                              class:
                                _vm.filterOption == "c_pink"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-pink" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_pink")
                                }
                              }
                            },
                            [_c("b", [_vm._v("粉色")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-purple",
                              class:
                                _vm.filterOption == "c_purple"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".c-purple" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("c_purple")
                                }
                              }
                            },
                            [_c("b", [_vm._v("紫色")])]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "index-filter-item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "index-filter-btn",
                          class:
                            _vm.filterOption == "t_casino" ||
                            _vm.filterOption == "t_sports" ||
                            _vm.filterOption == "t_card" ||
                            _vm.filterOption == "t_live" ||
                            _vm.filterOption == "t_lottery" ||
                            _vm.filterOption == "t_mahjong" ||
                            _vm.filterOption == "t_fishing"
                              ? "is-active"
                              : false,
                          on: {
                            mouseover: function($event) {
                              _vm.hover_nav = "t"
                            },
                            mouseleave: function($event) {
                              _vm.hover_nav = ""
                            }
                          }
                        },
                        [_vm._v("主题类型"), _c("i")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "index-filter-sub is-theme" }, [
                        _c("div", { staticClass: "is-theme" }, [
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-casino",
                              class:
                                _vm.filterOption == "t_casino"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-casino" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_casino")
                                }
                              }
                            },
                            [_c("b", [_vm._v("机率")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-sports",
                              class:
                                _vm.filterOption == "t_sports"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-sports" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_sports")
                                }
                              }
                            },
                            [_c("b", [_vm._v("体育")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-card",
                              class:
                                _vm.filterOption == "t_card"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-card" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_card")
                                }
                              }
                            },
                            [_c("b", [_vm._v("棋牌")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-live",
                              class:
                                _vm.filterOption == "t_live"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-live" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_live")
                                }
                              }
                            },
                            [_c("b", [_vm._v("视讯")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-lottery",
                              class:
                                _vm.filterOption == "t_lottery"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-lottery" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_lottery")
                                }
                              }
                            },
                            [_c("b", [_vm._v("彩票")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-mahjong",
                              class:
                                _vm.filterOption == "t_mahjong"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-mahjong" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_mahjong")
                                }
                              }
                            },
                            [_c("b", [_vm._v("麻將")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "index-filter-option f-fishing",
                              class:
                                _vm.filterOption == "t_fishing"
                                  ? "is-active"
                                  : false,
                              attrs: { "data-filter": ".t-fishing" },
                              on: {
                                click: function($event) {
                                  return _vm.filterItems("t_fishing")
                                }
                              }
                            },
                            [_c("b", [_vm._v("捕鱼")])]
                          )
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "index-filter-sort removeTextNodes" },
                  [
                    _c("button", {
                      staticClass: "is-grid",
                      class: _vm.layoutOption == "grid" ? "is-active" : false,
                      on: {
                        click: function($event) {
                          return _vm.changeLayout("grid")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("button", {
                      staticClass: "is-masonry",
                      class:
                        _vm.layoutOption == "masonry" ? "is-active" : false,
                      on: {
                        click: function($event) {
                          return _vm.changeLayout("masonry")
                        }
                      }
                    })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "index-list-wrap" }, [
              _c(
                "div",
                { staticClass: "index-list-center" },
                [
                  _c("div", { staticClass: "index-list-top" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", [
                      _c("button", {
                        staticClass: "is-grid",
                        class: _vm.layoutOption == "grid" ? "is-active" : false,
                        on: {
                          click: function($event) {
                            return _vm.changeLayout("grid")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "is-masonry",
                        class:
                          _vm.layoutOption == "masonry" ? "is-active" : false,
                        on: {
                          click: function($event) {
                            return _vm.changeLayout("masonry")
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "isotope",
                    {
                      ref: "cpt",
                      staticClass: "index-list-main",
                      attrs: { list: _vm.projects, options: _vm.option },
                      on: {
                        filter: function($event) {
                          _vm.filterOption = arguments[0]
                        },
                        sort: function($event) {
                          _vm.sortOption = arguments[0]
                        },
                        layout: function($event) {
                          _vm.currentLayout = arguments[0]
                        }
                      }
                    },
                    _vm._l(_vm.projects, function(item) {
                      return item.pd_show == 1
                        ? _c(
                            "div",
                            {
                              key: item.pd_id,
                              staticClass: "index-list-item",
                              class: [
                                { "is-new": item.pd_new },
                                _vm.checkTags(item)
                              ]
                            },
                            [
                              _c("div", { staticClass: "item-box" }, [
                                _c("time", {
                                  domProps: {
                                    textContent: _vm._s(item.pd_date)
                                  }
                                }),
                                _vm._v(" "),
                                _c("figure", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "detail/" + item.pd_id,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: _vm.wms_url + item.pd_view_img
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("hgroup", [
                                  _c("h2", {
                                    domProps: {
                                      textContent: _vm._s(item.pd_num)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "is-detail",
                                        attrs: {
                                          href: "detail/" + item.pd_id,
                                          target: "_blank"
                                        }
                                      },
                                      [_vm._v("DETAIL")]
                                    ),
                                    _vm._v(" "),
                                    item.pd_live
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "is-livedemo",
                                            attrs: {
                                              href: "demo/" + item.pd_id,
                                              target: "_blank"
                                            }
                                          },
                                          [_vm._v("LIVE DEMO")]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("span", {
                                  style: _vm.checkColors(item.pd_colors)
                                })
                              ])
                            ]
                          )
                        : _vm._e()
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _vm.showErrorWord
                    ? _c("img", {
                        staticClass: "comingSoonImg",
                        attrs: { src: "image/index_comingsoon.png", alt: "" }
                      })
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn-top" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "overlay" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.url_show_block == "intro"
      ? _c("div", [
          _c("main", { staticClass: "container-wrap" }, [
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass: "intro-brand-wrap",
                attrs: { id: "js-intro-brand" }
              },
              [
                _c("div", { staticClass: "intro-brand-main" }, [
                  _c(
                    "div",
                    { staticClass: "intro-brand-list removeTextNodes" },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "intro-brand-item is-style-3" },
                        [
                          _vm._m(7),
                          _vm._v(" "),
                          _c("hgroup", [
                            _c("h2", [_vm._v("时尚多元前台模版")]),
                            _vm._v(" "),
                            _vm._m(8),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.goToTemplate()
                                  }
                                }
                              },
                              [_vm._v("更多")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(9),
                      _vm._v(" "),
                      _vm._m(10)
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass: "intro-partner-wrap",
                attrs: { id: "js-intro-partner" }
              },
              [
                _c("div", { staticClass: "intro-partner-main" }, [
                  _c("div", { staticClass: "intro-partner-filter" }, [
                    _vm._m(15),
                    _vm._v(" "),
                    _c("div", { staticClass: "filter-sort" }, [
                      _c(
                        "div",
                        { staticClass: "filter-content" },
                        _vm._l(_vm.logolist, function(item) {
                          return _c(
                            "figure",
                            {
                              class: [
                                {
                                  "is-casino": item.ld_casino,
                                  "is-live": item.ld_live,
                                  "is-sports": item.ld_sports,
                                  "is-lottery": item.ld_lottery,
                                  "is-card": item.ld_card,
                                  "is-mahjong": item.ld_mahjong,
                                  "is-fishing": item.ld_fishing
                                }
                              ]
                            },
                            [_c("img", { attrs: { src: item.ld_img } })]
                          )
                        }),
                        0
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("button", { staticClass: "btn-top" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "overlay" })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          attrs: {
            href: "https://wj.qq.com/s2/4777757/7aa5/",
            target: "_blank"
          }
        },
        [_vm._v("问卷调查")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "index-top-center" }, [
      _c("button", { staticClass: "scroll-pc" }, [_c("i"), _c("i")]),
      _vm._v(" "),
      _c("button", { staticClass: "scroll-device" }, [_c("i"), _c("i")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("hgroup", [_c("h2", [_vm._v("所有款式")]), _vm._v(" "), _c("h3")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "intro-top-wrap" }, [
      _c("div", { staticClass: "intro-slider-wrap" }, [
        _c("div", [
          _c("div", { staticClass: "content" }, [
            _c("figure", { staticClass: "text_a1" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_a1.png" } })
            ]),
            _vm._v(" "),
            _c("figure", { staticClass: "text_a2" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_a2.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "slider-animation-1" }, [
              _c("figure", { staticClass: "a01-l" }, [
                _c("img", { attrs: { src: "image/slider/slider_a01_l.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "a01-r" }, [
                _c("img", { attrs: { src: "image/slider/slider_a01_r.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "a02" }, [
                _c("img", {
                  staticClass: "demo-d",
                  attrs: { src: "image/slider/slider_a02.png" }
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "demo-m",
                  attrs: { src: "image/slider/slider_a02_m.png" }
                })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "a03" }, [
                _c("img", { attrs: { src: "image/slider/slider_a03.png" } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "content" }, [
            _c("figure", { staticClass: "text_b1" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_b1.png" } })
            ]),
            _vm._v(" "),
            _c("figure", { staticClass: "text_b2" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_b2.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "slider-animation-2" }, [
              _c("figure", { staticClass: "b01" }, [
                _c("img", { attrs: { src: "image/slider/slider_b01.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "b02" }, [
                _c("img", { attrs: { src: "image/slider/slider_b02.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "b03" }, [
                _c("img", { attrs: { src: "image/slider/slider_b03.png" } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "content" }, [
            _c("figure", { staticClass: "text_c1" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_c1.png" } })
            ]),
            _vm._v(" "),
            _c("figure", { staticClass: "text_c2" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_c2.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "slider-animation-3" }, [
              _c("figure", { staticClass: "c01" }, [
                _c("img", { attrs: { src: "image/slider/slider_c01.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "c02" }, [
                _c("img", { attrs: { src: "image/slider/slider_c02.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "c03" }, [
                _c("img", { attrs: { src: "image/slider/slider_c03.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "c04" }, [
                _c("img", { attrs: { src: "image/slider/slider_c04.png" } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "content" }, [
            _c("figure", { staticClass: "text_d1" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_d1.png" } })
            ]),
            _vm._v(" "),
            _c("figure", { staticClass: "text_d2" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_d2.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "slider-animation-4" }, [
              _c("figure", { staticClass: "d01" }, [
                _c("img", { attrs: { src: "image/slider/slider_d01.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "d02" }, [
                _c("img", { attrs: { src: "image/slider/slider_d02.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "d03" }, [
                _c("img", { attrs: { src: "image/slider/slider_d03.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "d04" }, [
                _c("img", { attrs: { src: "image/slider/slider_d04.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "d05" }, [
                _c("img", { attrs: { src: "image/slider/slider_d05.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "d06" }, [
                _c("img", { attrs: { src: "image/slider/slider_d06.png" } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "content" }, [
            _c("figure", { staticClass: "text_e1" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_e1.png" } })
            ]),
            _vm._v(" "),
            _c("figure", { staticClass: "text_e2" }, [
              _c("img", { attrs: { src: "image/slider/slider_text_e2.png" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "slider-animation-5" }, [
              _c("figure", { staticClass: "e01" }, [
                _c("img", {
                  staticClass: "demo-d2",
                  attrs: { src: "image/slider/slider_e01.png" }
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "demo-t",
                  attrs: { src: "image/slider/slider_e01_t.png" }
                })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e02" }, [
                _c("img", { attrs: { src: "image/slider/slider_e02.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e03" }, [
                _c("img", { attrs: { src: "image/slider/slider_e03.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e04" }, [
                _c("img", { attrs: { src: "image/slider/slider_e04.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e05" }, [
                _c("img", { attrs: { src: "image/slider/slider_e05.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e06" }, [
                _c("img", { attrs: { src: "image/slider/slider_e06.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e07" }, [
                _c("img", { attrs: { src: "image/slider/slider_e07.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e08" }, [
                _c("img", { attrs: { src: "image/slider/slider_e08.png" } })
              ]),
              _vm._v(" "),
              _c("figure", { staticClass: "e09" }, [
                _c("img", { attrs: { src: "image/slider/slider_e09.png" } })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "intro-cm-wrap" }, [
        _c(
          "div",
          { staticClass: "intro-cm-main", attrs: { id: "js-intro-cm" } },
          [
            _c("div", { staticClass: "intro-cm-content" }, [
              _c("h2", { staticClass: "intro-cm-title" }, [_vm._v("合作模式")]),
              _vm._v(" "),
              _c(
                "hgroup",
                { staticClass: "intro-cm-text is-text-1 is-active" },
                [
                  _c("h3", [_vm._v("游戏API对接")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("八大游戏类型，")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("区块链、真人、彩票、电子、")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("体育电竞、棋牌、捕鱼、麻将，")]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("50间以上国际级游戏平台，破万款游戏，")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("皆可藉由API对接整合至您的游戏平台上。")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("button", { attrs: { id: "js-cm-b1" } }, [_vm._v("更多")])
                ]
              ),
              _vm._v(" "),
              _c("hgroup", { staticClass: "intro-cm-text is-text-2" }, [
                _c("h3", [_vm._v("包网建置")]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("BBIN提供百款以上模版，")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("快速稳定的数据线路")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("以及强大的系统防护，")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("专业的技术团队7x24随时为您服务，")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("让您的站点能够站上高峰问鼎全球。")])
                ]),
                _vm._v(" "),
                _c("button", { attrs: { id: "js-cm-b2" } }, [_vm._v("更多")])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "intro-cm-prev" }),
              _vm._v(" "),
              _c("button", { staticClass: "intro-cm-next is-active" })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "intro-cm-popup popup-wrap" }, [
        _c("div", { staticClass: "popup-main" }, [
          _c("div", { staticClass: "popup-content" }, [
            _c(
              "div",
              { staticClass: "popup-text", attrs: { id: "js-cm-c1" } },
              [
                _c("div", [
                  _c("figure", [
                    _c("img", { attrs: { src: "image/cm_popup_img01.png" } })
                  ]),
                  _vm._v(" "),
                  _c("hgroup", [
                    _c("h2", [_vm._v("游戏API对接")]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", [_vm._v("BBIN与多家国际游戏商合作，")]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("丰富多元的游戏类型，拥上万款游戏，")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("我们将是您最有力的合作伙伴。")])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "popup-text", attrs: { id: "js-cm-c2" } },
              [
                _c("div", [
                  _c("figure", [
                    _c("img", { attrs: { src: "image/cm_popup_img02.png" } })
                  ]),
                  _vm._v(" "),
                  _c("hgroup", [
                    _c("h2", [_vm._v("包网建站")]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", [
                        _vm._v("最多元化的设计风格，最齐全的网站配色，")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("最多样化的版型配置，")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("BBIN提供给您最完整具时尚、")]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("热门的版型设计，您的需求我们能够一次满足。")
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("button", { staticClass: "btn-prev" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-next" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-close" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "intro-middle-wrap" }, [
      _c(
        "div",
        { staticClass: "intro-pd-wrap", attrs: { id: "js-intro-pd" } },
        [
          _c("div", { staticClass: "intro-pd-main" }, [
            _c("div", { staticClass: "pd-nav" }, [
              _c("ul", { attrs: { rel: "intro-pd-scroll" } }, [
                _c("li", { staticClass: "is-casino" }, [
                  _c("span", [_vm._v("电子")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-sports" }, [
                  _c("span", [_vm._v("体育")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-card" }, [
                  _c("span", [_vm._v("棋牌")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-live" }, [
                  _c("span", [_vm._v("视讯")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-lottery" }, [
                  _c("span", [_vm._v("彩票")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-mahjong" }, [
                  _c("span", [_vm._v("麻将")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-fishing" }, [
                  _c("span", [_vm._v("捕鱼")])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "is-blockchain" }, [
                  _c("span", [_vm._v("区块链")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pd-content" }, [
              _c("div", { staticClass: "is-casino" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("电子游戏")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("BBIN与30家以上国际级游戏商合作，")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("破万款电子游戏，随君挑选。")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-sports" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("体育赛事")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("网罗全球电竞、体育赛事的BB体育，")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("年創百亿商机等您来+1。")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-card" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("棋牌游戏")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("从明清时期盛行至今，玩法多元丰富")]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("斗地主、炸金花、牛牛，依然稳坐热搜排行榜，")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("深受华人地区玩家喜爱。")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-live" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("真人视讯")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [
                      _vm._v("BBIN最新多重加密的区块链技术公正公開，")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        "最据临场感真人荷官发牌，24小时线上即时开牌不间断，"
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("所有好玩新事物尽在BBIN。")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-lottery" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("彩票游戏")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [
                      _vm._v("BBIN多样独家创新玩法，彩种丰富多元；")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        "公平可验证的区块链技术，界面简单易懂，新世代玩法不容错过。"
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-mahjong" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("麻将游戏")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [
                      _vm._v("正所谓十亿人民九亿麻，还有一亿在观察，")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("超过九亿人在玩麻将了，你还在等啥!")])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-fishing" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("捕鱼游戏")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("现今电玩城里最火红的游戏类型，")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("透由剧情以炮弹系统攻击，捕获成功，")]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("鱼儿们将化成數不尽的金币，塞满屏幕，欢乐无比。")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "is-blockchain" }, [
                _c("hgroup", [
                  _c("h2", [_vm._v("区块链")]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [
                      _vm._v("BB区块链xSHA加密技术，多重加密无法串改，")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("领先业界，缔造全球娱乐飨宴，尽在BBIN。")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-brand-item is-style-1" }, [
      _c("figure", [_c("img", { attrs: { src: "image/brand_icon01.png" } })]),
      _vm._v(" "),
      _c("hgroup", [
        _c("h2", [_vm._v("世界顶尖机房")]),
        _vm._v(" "),
        _c("p", [
          _c("span", [_vm._v("7x24小时全面监控，核心节点极速网络，")]),
          _vm._v(" "),
          _c("span", [_vm._v("多重防护，使您安心的好选择。")])
        ]),
        _vm._v(" "),
        _c("button", [_vm._v("更多")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-brand-item is-style-2" }, [
      _c("figure", [_c("img", { attrs: { src: "image/brand_icon02.png" } })]),
      _vm._v(" "),
      _c("hgroup", [
        _c("h2", [_vm._v("智能数位管理后台")]),
        _vm._v(" "),
        _c("p", [
          _c("span", [
            _vm._v("整合最完整的玩家游戏数据、提供最全方位的金流动向分析，")
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v("揭露第一手最新游戏资讯，让您随时掌握，赢得先机。")
          ])
        ]),
        _vm._v(" "),
        _c("button", [_vm._v("更多")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", [
      _c("img", { attrs: { src: "image/brand_icon03.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", [_vm._v("BBIN提供百款以上模版，各式版型风格，")]),
      _vm._v(" "),
      _c("span", [_vm._v("众多色系搭配，展现出个人品牌风格或协助制作仿站。")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-brand-item is-style-4" }, [
      _c("figure", [_c("img", { attrs: { src: "image/brand_icon04.png" } })]),
      _vm._v(" "),
      _c("hgroup", [
        _c("h2", [_vm._v("H5移动端APP")]),
        _vm._v(" "),
        _c("p", [_c("span", [_vm._v("随登即玩，一机在手，快乐随时拥有。")])]),
        _vm._v(" "),
        _c("button", [_vm._v("更多")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-brand-item is-style-5" }, [
      _c("figure", [_c("img", { attrs: { src: "image/brand_icon05.png" } })]),
      _vm._v(" "),
      _c("hgroup", [
        _c("h2", [_vm._v("专业的技术服务团队")]),
        _vm._v(" "),
        _c("p", [
          _c("span", [_vm._v("全年365天，7x24小时，")]),
          _vm._v(" "),
          _c("span", [_vm._v("专业技术团队随时为您服务。")])
        ]),
        _vm._v(" "),
        _c("button", [_vm._v("更多")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "intro-brand-popup popup-wrap",
        attrs: { id: "brand-popup-1" }
      },
      [
        _c("div", { staticClass: "popup-main" }, [
          _c("div", { staticClass: "popup-content" }, [
            _c("div", { staticClass: "popup-text" }, [
              _c("hgroup", [
                _c("h2", [_vm._v("世界顶尖机房")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "BBIN自建顶尖高防数据中心，全球布局光纤缆线，数据中心拥全球国际稳定线路，完美防护，顶尖网络设施就在BBIN。"
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn-prev" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-next" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-close" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "intro-brand-popup popup-wrap",
        attrs: { id: "brand-popup-2" }
      },
      [
        _c("div", { staticClass: "popup-main" }, [
          _c("div", { staticClass: "popup-content" }, [
            _c("div", { staticClass: "popup-text" }, [
              _c("hgroup", [
                _c("h2", [_vm._v("智能数位管理后台")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "BBIN提供最完整的数位管理后台系统，让您洞悉玩家游戏动态，掌握资金来龙去脉，随时调整运营方针。"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("figure", [
                _c("img", { attrs: { src: "image/brand_popup_bg02.png" } }),
                _vm._v(" "),
                _c("img", { attrs: { src: "image/brand_popup_bg02_t.png" } }),
                _vm._v(" "),
                _c("img", { attrs: { src: "image/brand_popup_bg02_m.png" } })
              ])
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn-prev" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-next" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-close" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "intro-brand-popup popup-wrap",
        attrs: { id: "brand-popup-4" }
      },
      [
        _c("div", { staticClass: "popup-main" }, [
          _c("div", { staticClass: "popup-content" }, [
            _c("div", { staticClass: "popup-text" }, [
              _c("hgroup", [
                _c("h2", [_vm._v("H5移动端APP")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "运用扫脸、指纹，手势密码快速登入，随点即玩，让您的娱乐永不断线。"
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn-prev" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-next" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-close" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "intro-brand-popup popup-wrap",
        attrs: { id: "brand-popup-5" }
      },
      [
        _c("div", { staticClass: "popup-main" }, [
          _c("div", { staticClass: "popup-content" }, [
            _c("div", { staticClass: "popup-text" }, [
              _c("hgroup", [
                _c("h2", [_vm._v("专业的技术服务团队")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "BBIN提供7x24小时专人线上咨询，以提升客户满意度为最高宗旨，而提供最全方位的技术服务是我们对您的坚持。"
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn-prev" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-next" }),
            _vm._v(" "),
            _c("button", { staticClass: "btn-close" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "filter-nav removeTextNodes" }, [
      _c("div", { staticClass: "is-active" }, [
        _c("div", { staticClass: "filter-btn is-active" }, [
          _c(
            "a",
            { attrs: { href: "javascript:void(0)", "data-filter": "*" } },
            [_vm._v("全部")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: { href: "javascript:void(0)", "data-filter": ".is-casino" }
            },
            [_vm._v("电子")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: { href: "javascript:void(0)", "data-filter": ".is-sports" }
            },
            [_vm._v("体育")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: { href: "javascript:void(0)", "data-filter": ".is-card" }
            },
            [_vm._v("棋牌")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: { href: "javascript:void(0)", "data-filter": ".is-live" }
            },
            [_vm._v("视讯")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: {
                href: "javascript:void(0)",
                "data-filter": ".is-lottery"
              }
            },
            [_vm._v("彩票")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "filter-btn" }, [
          _c(
            "a",
            {
              attrs: {
                href: "javascript:void(0)",
                "data-filter": ".is-fishing"
              }
            },
            [_vm._v("捕鱼")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/assets/js/index.js":
/*!**************************************!*\
  !*** ./resources/assets/js/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Index */ "./resources/assets/js/pages/Index.vue");
// 匯入 Index.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/js/pages/Index.vue":
/*!*********************************************!*\
  !*** ./resources/assets/js/pages/Index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dc21b036&scoped=true& */ "./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dc21b036",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=dc21b036&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Index.vue?vue&type=template&id=dc21b036&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc21b036_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./resources/assets/js/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Front_new\resources\assets\js\index.js */"./resources/assets/js/index.js");


/***/ })

/******/ });