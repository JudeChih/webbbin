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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/User.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/User.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nowView: 'list',
      // 現在頁面 list:列表頁 create:新增頁 modify:修改頁
      userClass: 'personal',
      // 使用者權限 personal:一般使用者 admin:管理員
      //各式資料////////////////////////////////////////////////////
      users: [],
      // 全部使用者資料
      user: {},
      // 單一使用者資料
      userdata: [],
      // 使用者資料
      //頁碼相關////////////////////////////////////////////////////
      limit: 15,
      //每頁數的筆數
      page: 1,
      // 目前頁數
      //搜尋相關////////////////////////////////////////////////////
      composing: true,
      // 監聽搜尋框輸入
      ud_name: '',
      // 搜尋字串
      //線上路徑////////////////////////////////////////////////////
      webbbin_front: 'http://web.bbinpartner.com',
      // 前端路徑
      webbbin_back: 'http://wms.bbinpartner.com',
      // 後端路徑
      rentSearch: 'http://rent.bbinpartner.com',
      // 租網路徑
      //修改頁面////////////////////////////////////////////////////
      ud_id: '' // 修改目標的使用者編號
      //新增頁面////////////////////////////////////////////////////

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
    newUsers: function newUsers() {
      var self = this;

      if (self.users) {
        if (self.users.length > 0) {
          if (self.limit == 'all') {
            return self.users;
          } else {
            var start = (parseInt(self.page) - 1) * parseInt(self.limit);
            return self.users.slice(start, start + parseInt(self.limit));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    total: function total() {
      // 使用者總數
      var self = this;

      if (self.users) {
        return self.users.length;
      } else {
        return 0;
      }
    },
    count: function count() {
      var self = this;

      if (self.limit == 'all') {
        self.page = 1;
        return 1;
      } else {
        return Math.ceil(self.total / self.limit);
      }
    },
    showUser: function showUser() {
      // 1:有資料 2:無相符資料 3:資料庫沒資料
      var self = this;

      if (!self.users) {
        return 3;
      } else {
        if (self.users.length > 0) {
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
    // 版型資料初始化
    initUser: function initUser() {
      var self = this;
      this.user = {};
      this.user = Object.assign({}, this.user, {
        ud_name: '',
        ud_account: '',
        ud_password: '',
        ud_status: 0,
        ud_admin: 0,
        ud_last_login: ''
      });
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
        if (view == 'create') {
          self.nowView = 'create';
          self.userClass = 'admin';
          self.initUser();
          this.$router.replace('admin&create')["catch"](function (err) {});
        } else if (view.indexOf('modify') != -1) {
          if (view.indexOf('&') != -1) {
            var val_array = view.split('&');

            if (val_array[2] != '') {
              if (val_array[0] == 'admin') {
                self.getUser(val_array[2]);
              } else if (val_array[0] == 'personal') {
                self.initUser();
              }

              self.nowView = 'modify';
              self.userClass = val_array[0];
              this.$router.replace(val_array[0] + '&modify&' + val_array[2])["catch"](function (err) {});
            } else {
              self.nowView = 'list';
              self.userClass = 'admin';
              this.$router.replace('admin&list')["catch"](function (err) {});
            }
          } else {
            self.nowView = 'list';
            self.userClass = 'admin';
            this.$router.replace('admin&list')["catch"](function (err) {});
          }
        } else {
          self.nowView = 'list';
          self.userClass = 'admin';
          this.$router.replace('admin&list')["catch"](function (err) {});
        }
      } else {
        self.nowView = 'list';
        self.userClass = 'admin';
        this.$router.replace('admin&list')["catch"](function (err) {});
      }
    },
    //////////////////////// 查詢功能 //////////////////////
    ///
    // 監聽搜尋框 注音輸入開始
    listen_input_start: function listen_input_start() {
      var self = this;
      self.composing = false;
    },
    // 監聽搜尋框 注音輸入結束
    listen_input_end: function listen_input_end() {
      var self = this;
      self.composing = true;
    },
    // 查詢功能
    search: function search() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var self = this;
      setTimeout(function () {
        if (self.composing) {
          self.getUsers();
        }
      }, 10);
    },
    ///
    //////////////////////// 查詢功能 end ////////////////////
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
    //取得使用者全部資料
    getAllData: function getAllData() {
      var self = this;
      axios.get('../user-all-data').then(function (response) {
        if (response.data.ud_name) {
          self.ud_name = response.data.ud_name;
        } else {
          self.ud_name = '';
        }

        self.users = response.data.users;
        self.userdata = response.data.userdata;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得使用者資料
    getUsers: function getUsers() {
      var self = this;
      axios.get('../users?ud_name=' + self.ud_name).then(function (response) {
        self.users = response.data.users;

        if (response.data.ud_name) {
          self.ud_name = response.data.ud_name;
        } else {
          self.ud_name = '';
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得單一使用者資料
    getUser: function getUser(id) {
      var self = this;
      axios.get('../user?ud_id=' + id).then(function (response) {
        self.user = response.data;
        self.ud_id = id;
      })["catch"](function (response) {
        self.changeRouter('list');
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 取值專區 end ////////////////////////
    //////////////////////// 新增區塊 ////////////////////////
    ///
    //新增使用者
    createUser: function createUser() {
      var self = this; /// 檢查必填欄位是否傳入
      //帳號

      if (!self.user.ud_account) {
        self.notification('請輸入使用者帳號', 'warning');
        return false;
      } //密碼


      if (!self.user.ud_password) {
        self.notification('請輸入使用者密碼', 'warning');
        return false;
      } //名稱


      if (!self.user.ud_name) {
        self.notification('請輸入使用者名稱', 'warning');
        return false;
      } // 回傳修改


      axios.post('/user-create', self.user) //新增 - 使用者資料
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.user = {};
          self.changeRouter('list');
          self.getUsers();
          self.notification('新增成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification(response, 'failure');
      });
    },
    ///
    //////////////////////// 新增區塊 end ////////////////////////
    //////////////////////// 修改區塊 ////////////////////////
    ///
    //修改使用者資料
    modifyUser: function modifyUser() {
      var self = this;

      if (self.userClass == 'personal') {
        /// 檢查必填欄位是否傳入
        //名稱
        if (!self.userdata.ud_name) {
          self.notification('請輸入使用者名稱', 'warning');
          return false;
        } else {
          self.user.ud_name = self.userdata.ud_name;
        } //舊密碼


        if ((self.user.ud_password || self.user.ud_password == 0) && self.user.ud_password != '') {
          if (!self.user.ud_new_password && self.user.ud_new_password != 0) {
            self.notification('請輸入新密碼', 'warning');
            return false;
          } else if (!self.user.ud_new_password_confirm && self.user.ud_new_password_confirm != 0) {
            self.notification('請輸入確認密碼', 'warning');
            return false;
          } else if (self.user.ud_new_password != self.user.ud_new_password_confirm) {
            self.notification('新密碼和確認密碼不一致', 'warning');
            return false;
          }
        }

        self.user.ud_id = self.userdata.ud_id;
      } else if (self.userClass == 'admin') {
        /// 檢查必填欄位是否傳入
        //名稱
        if (!self.user.ud_name) {
          self.notification('請輸入使用者名稱', 'warning');
          return false;
        } //新密碼


        if ((self.user.ud_new_password || self.user.ud_new_password == 0) && self.user.ud_new_password != '') {
          if (self.user.ud_new_password == self.user.ud_password) {
            self.notification('新密碼不能跟舊密碼一樣', 'warning');
            return false;
          } else {
            self.user.ud_password = self.user.ud_new_password;
          }
        }
      } // 回傳修改


      axios.post(self.userClass == 'personal' ? 'user-modify-personal' : '/user-modify', self.user) //修改 - 版型資料
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.user = {};
          self.changeRouter('list');
          self.getUsers();
          self.notification('修改成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 修改區塊 end ////////////////////////
    //////////////////////// 刪除區塊 ////////////////////////
    ///
    //刪除資料
    deleteUser: function deleteUser(id) {
      var self = this;
      var json = {};
      json.ud_id = id;
      axios.post('/user-delete', json) //刪除
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.user = {};
          self.changeRouter('list');
          self.getUsers();
          self.notification('刪除成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 刪除區塊 end ////////////////////////
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                        { attrs: { href: "/transaction-list#/transaction" } },
                        [_vm._v("紀錄列表")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm.changeRouter("list")
                            }
                          }
                        },
                        [_vm._v("使用者列表")]
                      )
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "container" } },
      [
        _c("div", { staticClass: "staut" }, [
          _c(
            "a",
            {
              staticClass: "btn staut-edit",
              attrs: { href: "javascript:void(0)" },
              on: {
                click: function($event) {
                  return _vm.changeRouter(
                    "personal&modify&" + _vm.userdata.ud_id
                  )
                }
              }
            },
            [_vm._v(_vm._s(_vm.userdata.ud_name))]
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
        _vm.nowView == "list" &&
        _vm.userClass == "admin" &&
        _vm.userdata.ud_admin
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _c("div", { staticClass: "content-title clearfix" }, [
                _vm._v("\r\n                使用者列表\r\n                "),
                _c("p", [
                  _vm._v("共有"),
                  _c("span", { staticClass: "text-nar" }, [
                    _vm._v(_vm._s(_vm.total))
                  ]),
                  _vm._v("個使用者")
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-cancel content-righttop-btn",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.changeRouter("create")
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "fa" }),
                    _vm._v("新增使用者\r\n                ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "paginate_box" },
                [
                  _c("paginate", {
                    attrs: {
                      "page-count": _vm.count,
                      "page-range": 3,
                      "margin-pages": 2,
                      "click-handler": _vm.clickCallback,
                      "prev-text": "<",
                      "next-text": ">"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "searchWrap" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.ud_name,
                          expression: "ud_name"
                        }
                      ],
                      staticClass: "search-bar",
                      attrs: {
                        type: "text",
                        name: "ud_name",
                        placeholder: "Search for..."
                      },
                      domProps: { value: _vm.ud_name },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ud_name = $event.target.value
                          },
                          function($event) {
                            return _vm.search()
                          }
                        ],
                        compositionstart: function($event) {
                          return _vm.listen_input_start()
                        },
                        compositionend: function($event) {
                          return _vm.listen_input_end()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.ud_name != ""
                      ? _c("input", {
                          staticClass: "close-btn",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              ;(_vm.ud_name = ""), _vm.getUsers()
                            }
                          }
                        })
                      : _c("input", {
                          staticClass: "search-btn",
                          attrs: { type: "button", value: "" }
                        })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "content-body clearfix" }, [
                _c("table", { staticClass: "table-list" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.newUsers, function(item, index) {
                      return _vm.showUser == 1
                        ? _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(index + 1 + (_vm.page - 1) * 15) +
                                  "\r\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "tLeft table-username" }, [
                              _c(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeRouter(
                                        "admin&modify&" + item.ud_id
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(item.ud_name) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "tLeft" }, [
                              _vm._v(_vm._s(item.ud_account))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "tLeft" }, [
                              _vm._v(_vm._s(item.ud_password))
                            ]),
                            _vm._v(" "),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(
                                  item.ud_admin == 1 ? "管理員" : "一般使用者"
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  class:
                                    item.ud_status == 1 ? "" : "text-warning",
                                  domProps: {
                                    textContent: _vm._s(
                                      item.ud_status == 1 ? "啟用中" : "停用中"
                                    )
                                  }
                                },
                                [_vm._v("啟用中")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(
                                  item.ud_last_login
                                    ? item.ud_last_login
                                    : "尚未登入過"
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("td", { staticClass: "tLink" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-s",
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeRouter(
                                        "admin&modify&" + item.ud_id
                                      )
                                    }
                                  }
                                },
                                [_vm._v("編輯")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-s btn-s-del",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteUser(item.ud_id)
                                    }
                                  }
                                },
                                [_vm._v("刪除")]
                              )
                            ])
                          ])
                        : _vm.showUser == 2
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "6" } }, [
                              _vm._v("查無相符的使用者資料")
                            ])
                          ])
                        : _vm.showUser == 3
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "6" } }, [
                              _vm._v("目前暫無使用者資料")
                            ])
                          ])
                        : _vm._e()
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "paginate_box" },
                [
                  _c("paginate", {
                    attrs: {
                      "page-count": _vm.count,
                      "page-range": 3,
                      "margin-pages": 2,
                      "click-handler": _vm.clickCallback,
                      "prev-text": "<",
                      "next-text": ">"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ])
          : _vm.nowView == "modify" && _vm.userClass == "personal"
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "content-body clearfix" }, [
                _c("table", { staticClass: "table-order" }, [
                  _c("tr", { staticClass: "table-sepa" }, [
                    _c("td", [_vm._v("使用者帳號")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", [_vm._v(_vm._s(_vm.userdata.ud_account))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isname" }, [
                    _c("td", [_vm._v("使用者名稱")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.userdata.ud_name,
                            expression: "userdata.ud_name"
                          }
                        ],
                        attrs: { type: "text", name: "ud_name" },
                        domProps: { value: _vm.userdata.ud_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.userdata,
                              "ud_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "table-sepa" }, [
                    _c("td", [_vm._v("舊密碼")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_password,
                            expression: "user.ud_password"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入舊密碼",
                            expression: "'請輸入舊密碼'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "password", name: "ud_password" },
                        domProps: { value: _vm.user.ud_password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("新密碼")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_new_password,
                            expression: "user.ud_new_password"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入新密碼",
                            expression: "'請輸入新密碼'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "password", name: "ud_new_password" },
                        domProps: { value: _vm.user.ud_new_password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_new_password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("確認密碼")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_new_password_confirm,
                            expression: "user.ud_new_password_confirm"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請再次輸入新密碼",
                            expression: "'請再次輸入新密碼'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: {
                          type: "password",
                          name: "ud_new_password_confirm"
                        },
                        domProps: { value: _vm.user.ud_new_password_confirm },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_new_password_confirm",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-cancel",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm.changeRouter("list")
                            }
                          }
                        },
                        [_vm._v("返回")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn_save",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.modifyUser()
                            }
                          }
                        },
                        [_vm._v("送出")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _vm.nowView == "modify" &&
            _vm.userClass == "admin" &&
            _vm.userdata.ud_admin
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _c("div", { staticClass: "content-title clearfix" }, [
                _vm._v("\r\n                使用者資料"),
                _c("span", { staticClass: "text-nar" }, [
                  _vm._v(_vm._s(_vm.user.ud_name))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "content-body clearfix" }, [
                _c("table", { staticClass: "table-order" }, [
                  _c("tr", { staticClass: "table-sepa isaccount" }, [
                    _c("td", [_vm._v("使用者帳號")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", [_vm._v(_vm._s(_vm.user.ud_account))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isname" }, [
                    _c("td", [_vm._v("使用者名稱")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_name,
                            expression: "user.ud_name"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入使用者名稱",
                            expression: "'請輸入使用者名稱'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "text", name: "ud_name" },
                        domProps: { value: _vm.user.ud_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "ud_name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isstatus" }, [
                    _c("td", [_vm._v("使用者狀態")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "js-table-btn" }, [
                      _c(
                        "button",
                        {
                          staticClass: "table-enable",
                          class: _vm.user.ud_status == 1 ? "table-active" : "",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.user.ud_status = 1
                            }
                          }
                        },
                        [_vm._v("啟用")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "table-disable",
                          class: _vm.user.ud_status == 0 ? "table-active" : "",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.user.ud_status = 0
                            }
                          }
                        },
                        [_vm._v("停用")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isadmin" }, [
                    _c("td", [_vm._v("使用者權限")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.ud_admin,
                              expression: "user.ud_admin"
                            }
                          ],
                          attrs: {
                            name: "isadmin",
                            id: "normaluser",
                            type: "radio",
                            value: "0",
                            checked: "checked"
                          },
                          domProps: { checked: _vm._q(_vm.user.ud_admin, "0") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.user, "ud_admin", "0")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { name: "isadmin", for: "normaluser" } },
                          [_vm._v("一般使用者")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.ud_admin,
                              expression: "user.ud_admin"
                            }
                          ],
                          attrs: {
                            name: "isadmin",
                            id: "adminuser",
                            type: "radio",
                            value: "1"
                          },
                          domProps: { checked: _vm._q(_vm.user.ud_admin, "1") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.user, "ud_admin", "1")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { name: "isadmin", for: "adminuser" } },
                          [_vm._v("管理員")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "table-sepa ispass" }, [
                    _c("td", [_vm._v("修改密碼")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_new_password,
                            expression: "user.ud_new_password"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "需要修改密碼再填寫",
                            expression: "'需要修改密碼再填寫'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "password", name: "ud_new_password" },
                        domProps: { value: _vm.user.ud_new_password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_new_password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", {}, [
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn_save",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.modifyUser()
                            }
                          }
                        },
                        [_vm._v("送出")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-cancel",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm.changeRouter("list")
                            }
                          }
                        },
                        [_vm._v("返回")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _vm.nowView == "create" &&
            _vm.userClass == "admin" &&
            _vm.userdata.ud_admin
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _c("div", { staticClass: "content-title clearfix" }, [
                _vm._v("\r\n                新增使用者\r\n            ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "content-body clearfix" }, [
                _c("table", { staticClass: "table-order" }, [
                  _c("tr", { staticClass: "table-sepa isaccount" }, [
                    _c("td", [_vm._v("使用者帳號")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_account,
                            expression: "user.ud_account"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入使用者帳號",
                            expression: "'請輸入使用者帳號'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "text", name: "ud_account" },
                        domProps: { value: _vm.user.ud_account },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_account",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "ispass" }, [
                    _c("td", [_vm._v("使用者密碼")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_password,
                            expression: "user.ud_password"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入使用者密碼",
                            expression: "'請輸入使用者密碼'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "password", name: "ud_password" },
                        domProps: { value: _vm.user.ud_password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "ud_password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isname" }, [
                    _c("td", [_vm._v("使用者名稱")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ud_name,
                            expression: "user.ud_name"
                          },
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請輸入使用者名稱",
                            expression: "'請輸入使用者名稱'"
                          }
                        ],
                        staticClass: "check_unit",
                        attrs: { type: "text", name: "ud_name" },
                        domProps: { value: _vm.user.ud_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "ud_name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isstatus" }, [
                    _c("td", [_vm._v("使用者狀態")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "js-table-btn" }, [
                      _c(
                        "button",
                        {
                          staticClass: "table-enable",
                          class: _vm.user.ud_status == 1 ? "table-active" : "",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.user.ud_status = 1
                            }
                          }
                        },
                        [_vm._v("啟用")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "table-disable",
                          class: _vm.user.ud_status == 0 ? "table-active" : "",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.user.ud_status = 0
                            }
                          }
                        },
                        [_vm._v("停用")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "isadmin" }, [
                    _c("td", [_vm._v("使用者權限")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.ud_admin,
                              expression: "user.ud_admin"
                            }
                          ],
                          attrs: {
                            name: "isadmin",
                            id: "normaluser",
                            type: "radio",
                            value: "0",
                            checked: "checked"
                          },
                          domProps: { checked: _vm._q(_vm.user.ud_admin, "0") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.user, "ud_admin", "0")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { name: "isadmin", for: "normaluser" } },
                          [_vm._v("一般使用者")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.ud_admin,
                              expression: "user.ud_admin"
                            }
                          ],
                          attrs: {
                            name: "isadmin",
                            id: "adminuser",
                            type: "radio",
                            value: "1"
                          },
                          domProps: { checked: _vm._q(_vm.user.ud_admin, "1") },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.user, "ud_admin", "1")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { name: "isadmin", for: "adminuser" } },
                          [_vm._v("管理員")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", {}, [
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn_save",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.createUser()
                            }
                          }
                        },
                        [_vm._v("送出")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-cancel",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm.changeRouter("list")
                            }
                          }
                        },
                        [_vm._v("返回")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _c("div", { staticClass: "content-wrap clearfix" }, [_vm._m(3)]),
        _vm._v(" "),
        _c("notifications", { attrs: { position: "top center" } })
      ],
      1
    )
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
    return _c("thead", [
      _c("tr", { staticClass: "table-list-user" }, [
        _c("td", { staticClass: "tNum" }, [_vm._v("序號")]),
        _vm._v(" "),
        _c("td", { staticClass: "tName" }, [_vm._v("名稱")]),
        _vm._v(" "),
        _c("td", { staticClass: "tId" }, [_vm._v("帳號")]),
        _vm._v(" "),
        _c("td", { staticClass: "tPw" }, [_vm._v("密碼")]),
        _vm._v(" "),
        _c("td", { staticClass: "tPer" }, [_vm._v("權限")]),
        _vm._v(" "),
        _c("td", { staticClass: "tStaut" }, [_vm._v("狀態")]),
        _vm._v(" "),
        _c("td", { staticClass: "tDate" }, [_vm._v("最後一次登入")]),
        _vm._v(" "),
        _c("td", { staticClass: "tEdit" }, [_vm._v("編輯")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title clearfix" }, [
      _vm._v("\r\n                個人資料"),
      _c("span", { staticClass: "text-nar" }, [_vm._v("Admin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "content-title" }, [
        _vm._v(
          "\r\n                    你不是管理員，無法瀏覽此頁面。\r\n                "
        )
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

/***/ "./resources/assets/js/pages/User.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/pages/User.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=5126a008&scoped=true& */ "./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5126a008",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/User.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/pages/User.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=5126a008&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/User.vue?vue&type=template&id=5126a008&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5126a008_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/user.js":
/*!*************************************!*\
  !*** ./resources/assets/js/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/User */ "./resources/assets/js/pages/User.vue");
// 匯入 User.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 5:
/*!*******************************************!*\
  !*** multi ./resources/assets/js/user.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Back_new\resources\assets\js\user.js */"./resources/assets/js/user.js");


/***/ })

/******/ });