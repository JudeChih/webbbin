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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nowView: 'transaction',
      // 現在頁面 transaction:紀錄頁 userlogin:最後登入頁
      //各式資料////////////////////////////////////////////////////
      transactions: [],
      // 全部異動紀錄資料
      userlogins: [],
      // 全部使用者最後登入的資料
      userdata: [],
      // 登入中的使用者資料
      //頁碼相關////////////////////////////////////////////////////
      tran_limit: 10,
      //每頁數的筆數
      tran_page: 1,
      // 目前頁數
      login_limit: 10,
      //每頁數的筆數
      login_page: 1,
      // 目前頁數
      //線上路徑////////////////////////////////////////////////////
      webbbin_front: 'http://web.bbinpartner.com',
      // 前端路徑
      webbbin_back: 'http://wms.bbinpartner.com',
      // 後端路徑
      rentSearch: 'http://rent.bbinpartner.com' // 租網路徑

    };
  },
  created: function created() {
    var self = this;
    self.checkUrl();
  },
  mounted: function mounted() {
    var self = this;
    self.getAllData();
  },
  computed: {
    newTransactions: function newTransactions() {
      var self = this;

      if (self.transactions) {
        if (self.transactions.length > 0) {
          if (self.tran_limit == 'all') {
            return self.transactions;
          } else {
            var start = (parseInt(self.tran_page) - 1) * parseInt(self.tran_limit);
            return self.transactions.slice(start, start + parseInt(self.tran_limit));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    newUserlogins: function newUserlogins() {
      var self = this;

      if (self.userlogins) {
        if (self.userlogins.length > 0) {
          if (self.login_limit == 'all') {
            return self.userlogins;
          } else {
            var start = (parseInt(self.login_page) - 1) * parseInt(self.login_limit);
            return self.userlogins.slice(start, start + parseInt(self.login_limit));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    tran_total: function tran_total() {
      // 合作夥伴總數
      var self = this;

      if (self.transactions) {
        return self.transactions.length;
      } else {
        return 0;
      }
    },
    login_total: function login_total() {
      // 合作夥伴總數
      var self = this;

      if (self.userlogins) {
        return self.userlogins.length;
      } else {
        return 0;
      }
    },
    tran_count: function tran_count() {
      var self = this;

      if (self.tran_limit == 'all') {
        self.tran_page = 1;
        return 1;
      } else {
        return Math.ceil(self.tran_total / self.tran_limit);
      }
    },
    login_count: function login_count() {
      var self = this;

      if (self.login_limit == 'all') {
        self.login_page = 1;
        return 1;
      } else {
        return Math.ceil(self.login_total / self.login_limit);
      }
    },
    showTransaction: function showTransaction() {
      // 1:有資料 2:無相符資料 3:資料庫沒資料
      var self = this;

      if (!self.transactions) {
        return 3;
      } else {
        if (self.transactions.length > 0) {
          return 1;
        } else {
          return 2;
        }
      }
    },
    showUserlogin: function showUserlogin() {
      // 1:有資料 2:無相符資料 3:資料庫沒資料
      var self = this;

      if (!self.userlogins) {
        return 3;
      } else {
        if (self.userlogins.length > 0) {
          return 1;
        } else {
          return 2;
        }
      }
    }
  },
  methods: {
    init: function init() {},
    // 回最上面位置
    goToTop: function goToTop() {
      $('html').animate({
        'scrollTop': 0
      }, 250);
    },
    // 開闔左側選單
    dropGroup: function dropGroup(e) {
      var self = this;
      $(e.target).parent().find('.drop-group').slideToggle('drop-open');
      $(e.target).toggleClass('drop-title-down');
    },
    // 開啟檔案總管
    openFilemanager: function openFilemanager(target) {
      var self = this;

      $.fn.filemanager = function (type, options) {
        type = type || 'file';
        this.on('click', function (e) {
          var route_prefix = options && options.prefix ? options.prefix : '/laravel-filemanager';
          localStorage.setItem('target_input', $(this).data('input'));
          localStorage.setItem('target_preview', $(this).data('preview'));
          window.open(route_prefix + '?type=' + type, 'FileManager', 'width=900,height=600');

          window.SetUrl = function (url, file_path) {
            //set the value of the desired input to image url
            var target_input = $('#' + localStorage.getItem('target_input'));
            target_input.val(file_path).trigger('change'); //set or change the preview image src

            var target_preview = $('#' + localStorage.getItem('target_preview'));
            target_preview.attr('src', url).trigger('change');
          };

          return false;
        });
      };

      $('.' + target).filemanager('image');
      $('.' + target).click();
    },
    // 換頁執行
    clickCallback: function clickCallback() {
      var self = this; // 目前換頁無須執行任何事項
    },
    // 更換router
    changeRouter: function changeRouter(view) {
      var self = this;

      if (view != '') {
        //transaction:紀錄頁 userlogin:最後登入頁
        if (view == 'transaction') {
          self.nowView = 'transaction';
          this.$router.replace('transaction')["catch"](function (err) {});
        } else if (view == 'userlogin') {
          self.nowView = 'userlogin';
          this.$router.replace('userlogin')["catch"](function (err) {});
        } else {
          self.nowView = 'transaction';
          this.$router.replace('transaction')["catch"](function (err) {});
        }
      } else {
        self.nowView = 'transaction';
        this.$router.replace('transaction')["catch"](function (err) {});
      }
    },
    //////////////////////// 檢查各項目 //////////////////////
    ///
    // 檢查該使用者是否可以瀏覽該頁面
    checkUrl: function checkUrl() {
      var self = this;
      var url = new URL(location.href);
      var hash = url.hash.split("#/"); //切換頁面

      self.changeRouter(hash[1]);
    },
    ///
    //////////////////////// 檢查各項目 end //////////////////
    //////////////////////// 取值專區 ////////////////////////
    ///
    //取得全部資料
    getAllData: function getAllData() {
      var self = this;
      axios.get('../transaction-all-data').then(function (response) {
        self.transactions = response.data.transactions;
        self.userlogins = response.data.userlogins;
        self.userdata = response.data.userdata;
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
          // <i class="fas fa-check-circle success"></i> 
          title: 'SUCCESS',
          text: string // type:'success'

        });
      } else if (type == 'failure') {
        this.$notify({
          // <i class="fas fa-times-circle failure"></i> 
          title: 'FAILURE',
          text: string // type:'error'

        });
      } else if (type == 'warning') {
        this.$notify({
          // <i class="fas fa-lightbulb warning"></i> 
          title: 'WARNING',
          text: string // type:'warn'

        });
      }
    } ///
    //////////////////////// 推播框設定 end /////////////////////

  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "clearfix", attrs: { id: "mainBody" } }, [
    _c("div", { staticClass: "clearfix", attrs: { id: "header" } }, [
      _c("div", { staticClass: "header-wrap" }, [
        _c("a", { staticClass: "logo", attrs: { href: "/index" } }),
        _vm._v(" "),
        _c("div", { staticClass: "mainnav-wrap" }, [
          _c("div", { staticClass: "mainnav" }, [
            _c("ul", { staticClass: "clearfix" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "fa drop-title drop-title-down",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.dropGroup($event)
                      }
                    }
                  },
                  [_vm._v("版型管理")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "drop-group drop-open" }, [
                  _c("a", { attrs: { href: "/project-list#/create" } }, [
                    _vm._v("新增版型")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "/project-list" } }, [
                    _vm._v("網版列表")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "open_image_manager",
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          return _vm.openFilemanager("open_image_manager")
                        }
                      }
                    },
                    [_vm._v("圖片管理")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "fa drop-title drop-title-down",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.dropGroup($event)
                      }
                    }
                  },
                  [_vm._v("合作夥伴管理")]
                ),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: _vm.rentSearch, target: "_blank" } }, [
                  _vm._v("租網檢索")
                ])
              ]),
              _vm._v(" "),
              _vm.userdata.ud_admin
                ? _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "fa drop-title drop-title-down",
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            return _vm.dropGroup($event)
                          }
                        }
                      },
                      [_vm._v("後台管理")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "drop-group drop-open" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm.changeRouter("transaction")
                            }
                          }
                        },
                        [_vm._v("紀錄列表")]
                      ),
                      _vm._v(" "),
                      _c("a", { attrs: { href: "/user-list#/admin&list" } }, [
                        _vm._v("使用者列表")
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "container" } }, [
      _c("div", { staticClass: "staut" }, [
        _c(
          "a",
          {
            staticClass: "btn staut-edit",
            attrs: {
              href: "/user-list#/personal&modify&" + _vm.userdata.ud_id,
              title: ""
            }
          },
          [
            _vm._v(
              "\r\n                " +
                _vm._s(_vm.userdata.ud_name) +
                "\r\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn staut-logout",
            attrs: { href: "/logout", title: "登出" }
          },
          [_vm._v("登出")]
        )
      ]),
      _vm._v(" "),
      _vm.nowView == "transaction"
        ? _c("div", { staticClass: "content-wrap clearfix" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "content-body clearfix" }, [
              _c("div", { attrs: { id: "tab-link" } }, [
                _c("ul", { staticClass: "clearfix" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        class: { active: _vm.nowView == "transaction" },
                        attrs: { href: "javascript:void(0)" }
                      },
                      [_vm._v("異動紀錄")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        class: { active: _vm.nowView == "userlogin" },
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            _vm.nowView = "userlogin"
                          }
                        }
                      },
                      [_vm._v("登入紀錄")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "tab-content" } }, [
                _c("table", { staticClass: "table-list" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.newTransactions, function(item, index) {
                      return _vm.showTransaction == 1
                        ? _c("tr", [
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.tran_limit == "all"
                                    ? index + 1
                                    : index +
                                        1 +
                                        (_vm.tran_page - 1) * _vm.tran_limit
                                )
                              }
                            }),
                            _vm._v(" "),
                            item.tr_action == 1
                              ? _c("td", {
                                  staticClass: "create_font",
                                  domProps: { textContent: _vm._s("新增") }
                                })
                              : item.tr_action == 2
                              ? _c("td", {
                                  staticClass: "modify_font",
                                  domProps: { textContent: _vm._s("修改") }
                                })
                              : item.tr_action == 3
                              ? _c("td", {
                                  staticClass: "delete_font",
                                  domProps: { textContent: _vm._s("刪除") }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            item.tr_action == 1
                              ? _c("td", { staticClass: "tLeft" }, [
                                  _c("span", { staticClass: "text-tip" }, [
                                    _vm._v(_vm._s(item.tr_user))
                                  ]),
                                  _vm._v(" "),
                                  item.pd_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "新增一個版型，版型編號為 " +
                                              item.pd_id
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ld_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "新增一個合作夥伴，合作夥伴編號為 " +
                                              item.ld_id
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ud_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "謹慎的新增一位使用者，使用者編號為 " +
                                              item.ud_id
                                          )
                                        }
                                      })
                                    : _vm._e()
                                ])
                              : item.tr_action == 2
                              ? _c("td", { staticClass: "tLeft" }, [
                                  _c("span", { staticClass: "text-tip" }, [
                                    _vm._v(_vm._s(item.tr_user))
                                  ]),
                                  _vm._v(" "),
                                  item.pd_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "針對版型編號為 " +
                                              item.pd_id +
                                              " 的版型做了些微調"
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ld_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "針對版型編號為 " +
                                              item.ld_id +
                                              " 的某些設定"
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ud_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "針對版型編號為 " +
                                              item.ud_id +
                                              " 的相關資訊"
                                          )
                                        }
                                      })
                                    : _vm._e()
                                ])
                              : item.tr_action == 3
                              ? _c("td", { staticClass: "tLeft" }, [
                                  _c("span", { staticClass: "text-tip" }, [
                                    _vm._v(_vm._s(item.tr_user))
                                  ]),
                                  _vm._v(" "),
                                  item.pd_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "忍痛刪除版型編號為 " + item.pd_id
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ld_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "非常不捨的刪除合作夥伴編號為 " +
                                              item.ld_id
                                          )
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.ud_id != null
                                    ? _c("span", {
                                        domProps: {
                                          textContent: _vm._s(
                                            "刪除使用者編號為 " +
                                              item.ud_id +
                                              " 的使用者"
                                          )
                                        }
                                      })
                                    : _vm._e()
                                ])
                              : _c("td", { attrs: { colspan: "2" } }, [
                                  _vm._v("過時的動作資訊，請忽略")
                                ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.create_date))])
                          ])
                        : _vm.showTransaction == 2
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v("目前暫無異動紀錄")
                            ])
                          ])
                        : _vm.showTransaction == 3
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v("目前暫無異動紀錄")
                            ])
                          ])
                        : _vm._e()
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "paginate_box" },
                  [
                    _c("paginate", {
                      attrs: {
                        "page-count": _vm.tran_count,
                        "page-range": 3,
                        "margin-pages": 2,
                        "click-handler": _vm.clickCallback,
                        "prev-text": "<",
                        "next-text": ">"
                      },
                      model: {
                        value: _vm.tran_page,
                        callback: function($$v) {
                          _vm.tran_page = $$v
                        },
                        expression: "tran_page"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "pagination-select" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.tran_limit,
                              expression: "tran_limit"
                            }
                          ],
                          attrs: { name: "page_limit", id: "page_limit" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.tran_limit = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.tran_page = 1
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "10" } }, [
                            _vm._v("10項 / 頁")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("50項 / 頁")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "all" } }, [
                            _vm._v("全部列出")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pagination-gotoTop" }, [
                      _c("a", {
                        staticClass: "fa js-gotoTop",
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            return _vm.goToTop()
                          }
                        }
                      })
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.nowView == "userlogin"
        ? _c("div", { staticClass: "content-wrap clearfix" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "content-body clearfix" }, [
              _c("div", { attrs: { id: "tab-link" } }, [
                _c("ul", { staticClass: "clearfix" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        class: { active: _vm.nowView == "transaction" },
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            _vm.nowView = "transaction"
                          }
                        }
                      },
                      [_vm._v("異動紀錄")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        class: { active: _vm.nowView == "userlogin" },
                        attrs: { href: "javascript:void(0)" }
                      },
                      [_vm._v("登入紀錄")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "tab-content" } }, [
                _c("table", { staticClass: "table-list table-login-width" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.newUserlogins, function(item, index) {
                      return _vm.showUserlogin == 1
                        ? _c("tr", [
                            _c("td", [
                              _c("span", { staticClass: "text-tip" }, [
                                _vm._v(_vm._s(item.ud_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.ud_last_login))])
                          ])
                        : _vm.showUserlogin == 2
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v("目前暫無登入紀錄")
                            ])
                          ])
                        : _vm.showUserlogin == 3
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v("目前暫無登入紀錄")
                            ])
                          ])
                        : _vm._e()
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "paginate_box" },
                  [
                    _c("paginate", {
                      attrs: {
                        "page-count": _vm.login_count,
                        "page-range": 3,
                        "margin-pages": 2,
                        "click-handler": _vm.clickCallback,
                        "prev-text": "<",
                        "next-text": ">"
                      },
                      model: {
                        value: _vm.login_page,
                        callback: function($$v) {
                          _vm.login_page = $$v
                        },
                        expression: "login_page"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "pagination-select" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.login_limit,
                              expression: "login_limit"
                            }
                          ],
                          attrs: { name: "page_limit", id: "page_limit" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.login_limit = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.login_page = 1
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "10" } }, [
                            _vm._v("10項 / 頁")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("50項 / 頁")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "all" } }, [
                            _vm._v("全部列出")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pagination-gotoTop" }, [
                      _c("a", {
                        staticClass: "fa js-gotoTop",
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            return _vm.goToTop()
                          }
                        }
                      })
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "drop-group drop-open" }, [
      _c("a", { attrs: { href: "/logo-list#/create" } }, [
        _vm._v("新增合作夥伴")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/logo-list" } }, [_vm._v("合作夥伴列表")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title clearfix" }, [
      _vm._v("\r\n                紀錄列表\r\n                "),
      _c("p", { staticClass: "tab-title1" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-list-modify" }, [
        _c("td", { staticClass: "tNum" }, [_vm._v("序號")]),
        _vm._v(" "),
        _c("td", { staticClass: "tAct" }, [_vm._v("動作")]),
        _vm._v(" "),
        _c("td", { staticClass: "tCon" }, [_vm._v("內容")]),
        _vm._v(" "),
        _c("td", { staticClass: "tDate" }, [_vm._v("時間")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title clearfix" }, [
      _vm._v("\r\n                紀錄列表\r\n                "),
      _c("p", { staticClass: "tab-title1" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-list-login-record" }, [
        _c("td", { staticClass: "tUser" }, [_vm._v("操作者")]),
        _vm._v(" "),
        _c("td", { staticClass: "tDate" }, [_vm._v("時間")])
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

/***/ "./resources/assets/js/pages/Transaction.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/Transaction.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction.vue?vue&type=template&id=559fa3b1&scoped=true& */ "./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true&");
/* harmony import */ var _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "559fa3b1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Transaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=template&id=559fa3b1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Transaction.vue?vue&type=template&id=559fa3b1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_559fa3b1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/transaction.js":
/*!********************************************!*\
  !*** ./resources/assets/js/transaction.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Transaction */ "./resources/assets/js/pages/Transaction.vue");
// 匯入 Transaction.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 4:
/*!**************************************************!*\
  !*** multi ./resources/assets/js/transaction.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Back_new\resources\assets\js\transaction.js */"./resources/assets/js/transaction.js");


/***/ })

/******/ });