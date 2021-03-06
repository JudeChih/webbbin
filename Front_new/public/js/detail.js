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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pd_id: '',
      project: '',
      wms_url: 'http://wms.bbinpartner.com'
    };
  },
  created: function created() {
    var self = this;
    self.checkUrl();
  },
  mounted: function mounted() {
    var self = this;
    self.getProject(); // vh adjust

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // Resize

    $(window).resize(function () {
      $(".nav-menu-btn").removeClass("is-active");
      $(".nav-wrap").removeClass("is-active");
      $(".nav-filter-btn").removeClass("is-active");
      $(".index-filter-wrap").removeClass("is-active");
      $(".overlay").removeClass("is-active");
      $(".index-filter-sub").css("display", "");
      $(".index-filter-btn").removeClass("is-active");
    });
  },
  computed: {},
  methods: {
    init: function init() {
      setTimeout(function () {
        $(".detail-slider").slick({
          dots: true,
          arrows: true,
          fade: true,
          adaptiveHeight: true
        });
      }, 200);
    },
    //////////////////////// 檢查各項目 ////////////////////////
    ///
    // 檢查該使用者是否可以瀏覽該頁面
    checkUrl: function checkUrl() {
      var self = this;
      var url = new URL(location.href);
      var array = url.pathname.split("/detail/");
      this.$router.replace('/detail')["catch"](function (err) {});
      self.pd_id = array[1];
    },
    ///
    //////////////////////// 檢查各項目 end //////////////////////
    //////////////////////// 取值專區 ////////////////////////
    ///
    //取得資料
    getProject: function getProject() {
      var self = this;
      axios.get('../project/' + self.pd_id).then(function (response) {
        self.project = response.data;
        self.init();
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    getPrevProject: function getPrevProject() {
      var self = this;
      $(".detail-slider").slick('unslick');
      axios.get('../prev_project/' + self.pd_id).then(function (response) {
        // self.project = response.data;
        // self.pd_id = self.project.pd_id
        document.location.href = "../detail/" + response.data.pd_id; // self.init()
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    getNextProject: function getNextProject() {
      var self = this;
      $(".detail-slider").slick('unslick');
      axios.get('../next_project/' + self.pd_id).then(function (response) {
        // self.project = response.data;
        // self.pd_id = self.project.pd_id
        document.location.href = "../detail/" + response.data.pd_id; // self.init()
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 取值專區 end ////////////////////////
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
    //////////////////////// 推播框設定 end /////////////////////

  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("main", { staticClass: "container-wrap" }, [
      _c("section", { staticClass: "detail-wrap" }, [
        _vm.project != ""
          ? _c("div", { staticClass: "detail-main" }, [
              _c("div", { staticClass: "detail-top" }, [
                _c("figure", { staticClass: "detail-screen" }, [
                  _c("span", [
                    _c("img", {
                      attrs: { src: _vm.wms_url + _vm.project.pd_banner_img }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("hgroup", [
                  _c("h1", [_vm._v(_vm._s(_vm.project.pd_num))]),
                  _vm._v(" "),
                  _vm.project.pd_live
                    ? _c(
                        "a",
                        {
                          attrs: {
                            href: "../demo/" + _vm.project.pd_id,
                            target: "_blank"
                          }
                        },
                        [_vm._v("LIVE DEMO")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("button", {
                    staticClass: "is-prev",
                    on: {
                      click: function($event) {
                        return _vm.getPrevProject()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "is-next",
                    on: {
                      click: function($event) {
                        return _vm.getNextProject()
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "detail-slider" },
                _vm._l(JSON.parse(_vm.project.pd_template_img), function(
                  img,
                  index
                ) {
                  return _c("div", [
                    _c("img", {
                      attrs: { id: "index", src: _vm.wms_url + img }
                    })
                  ])
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("button", { attrs: { onclick: "javascript:window.close();" } })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", [
        _vm._v("首页廣告轮播圖片尺吋不限依設計為主，如有特殊要求請告知。")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("span", [_vm._v("导览列/网页字型：预设系统字。")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("span", [_vm._v("网页语系，功能按钮，")]),
      _vm._v(" "),
      _c("span", [_vm._v("标题名称皆与BBIN为主。")])
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

/***/ "./resources/assets/js/detail.js":
/*!***************************************!*\
  !*** ./resources/assets/js/detail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Detail */ "./resources/assets/js/pages/Detail.vue");
// 匯入 Detail.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/js/pages/Detail.vue":
/*!**********************************************!*\
  !*** ./resources/assets/js/pages/Detail.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=4448e44e&scoped=true& */ "./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4448e44e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=4448e44e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Detail.vue?vue&type=template&id=4448e44e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_4448e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/assets/js/detail.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Front_new\resources\assets\js\detail.js */"./resources/assets/js/detail.js");


/***/ })

/******/ });