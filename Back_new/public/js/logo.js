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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      display: 'list',
      // 列表顯示方式 list or image
      //各式資料////////////////////////////////////////////////////
      logos: [],
      // 全部合作夥伴資料
      logo: {},
      // 單一合作夥伴資料
      userdata: [],
      // 
      //頁碼相關////////////////////////////////////////////////////
      limit: 10,
      //每頁數的筆數
      page: 1,
      // 目前頁數
      //搜尋相關////////////////////////////////////////////////////
      composing: true,
      // 監聽搜尋框輸入
      ld_name: '',
      // 搜尋字串
      //線上路徑////////////////////////////////////////////////////
      webbbin_front: 'http://web.bbinpartner.com',
      // 前端路徑
      webbbin_back: 'http://wms.bbinpartner.com',
      // 後端路徑
      rentSearch: 'http://rent.bbinpartner.com',
      // 租網路徑
      //修改頁面////////////////////////////////////////////////////
      ld_id: '' // 修改目標的合作夥伴編號
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
    newLogos: function newLogos() {
      var self = this;

      if (self.logos) {
        if (self.logos.length > 0) {
          if (self.limit == 'all') {
            return self.logos;
          } else {
            var start = (parseInt(self.page) - 1) * parseInt(self.limit);
            return self.logos.slice(start, start + parseInt(self.limit));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    total: function total() {
      // 合作夥伴總數
      var self = this;

      if (self.logos) {
        return self.logos.length;
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
    showLogo: function showLogo() {
      // 1:有資料 2:無相符資料 3:資料庫沒資料
      var self = this;

      if (!self.logos) {
        return 3;
      } else {
        if (self.logos.length > 0) {
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
    // 合作夥伴資料初始化
    initLogo: function initLogo() {
      var self = this;
      this.logo = {};
      this.logo = Object.assign({}, this.logo, {
        ld_img: '',
        ld_name: '',
        ld_casino: 0,
        ld_sports: 0,
        ld_card: 0,
        ld_live: 0,
        ld_lottery: 0,
        ld_fishing: 0,
        ld_mahjong: 0
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
    // 改變呈現方式
    changeDisplay: function changeDisplay(type) {
      var self = this;
      self.display = type == 'image' ? 'list' : 'image';
    },
    // 更換router
    changeRouter: function changeRouter(view) {
      var self = this;

      if (view != '') {
        if (view == 'create') {
          self.nowView = 'create';
          self.initLogo();
          this.$router.replace('create')["catch"](function (err) {});
        } else if (view.indexOf('modify') != -1) {
          if (view.indexOf('&') != -1) {
            var val_array = view.split('&');

            if (val_array[1] != '') {
              self.getLogo(val_array[1]);
              self.nowView = 'modify';
              this.$router.replace('modify&' + val_array[1])["catch"](function (err) {});
            } else {
              self.nowView = 'list';
              this.$router.replace('list')["catch"](function (err) {});
            }
          } else {
            self.nowView = 'list';
            this.$router.replace('list')["catch"](function (err) {});
          }
        } else {
          self.nowView = 'list';
          this.$router.replace('list')["catch"](function (err) {});
        }
      } else {
        self.nowView = 'list';
        this.$router.replace('list')["catch"](function (err) {});
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
          self.getLogos();
        }
      }, 10);
    },
    ///
    //////////////////////// 查詢功能 end ////////////////////
    //////////////////////// 圖片上傳功能 //////////////////////
    ///
    // 預覽圖片，將取得的files一個個取出丟到convertFile()
    previewFiles: function previewFiles(files) {
      var self = this;

      if (files && files.length >= 1) {
        $.map(files, function (file) {
          self.convertFile(file).then(function (data) {
            $('input[name=ld_img]').val(data);
            self.showPreviewImage(data, file.name);
          })["catch"](function (err) {
            return console.log(err);
          });
        });
      }
    },
    // 使用FileReader讀取檔案，並且回傳Base64編碼後的source
    convertFile: function convertFile(file) {
      var self = this;
      return new Promise(function (resolve, reject) {
        // 建立FileReader物件
        var reader = new FileReader();
        var imgResult = "";
        reader.readAsDataURL(file);

        reader.onload = function () {
          imgResult = reader.result;
        };

        reader.onerror = function (error) {
          reject(error);
        };

        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },
    // 在頁面上新增<img>
    showPreviewImage: function showPreviewImage(src, fileName) {
      var self = this;
      var image = new Image(250); // 設定寬250px

      image.name = fileName;
      image.src = src; // <img>中src屬性除了接url外也可以直接接Base64字串

      $("#previewDiv").append(image); //.append(`<p>File: ${image.name}`)

      self.logo.ld_img = src;
    },
    // dragover事件：拖曳(滑鼠還沒鬆開)至放置區時，就要先防止瀏覽器進行開圖
    allowDrop: function allowDrop(e) {
      e.preventDefault();
    },
    // 當拖曳區發生drop事件時，接受格式為image的資料
    drop: function drop(e) {
      var self = this; // 防止事件傳遞及預設事件發生

      e.stopPropagation();
      e.preventDefault(); // 取得data type為image/*的資料

      e.dataTransfer.getData("image/*");
      var files = e.dataTransfer.files;
      console.dir(files); // 看看File長什麼樣子

      $("#previewDiv").empty(); // 清空當下預覽

      self.previewFiles(files);
    },
    ///
    //////////////////////// 圖片上傳功能 end ////////////////////
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
      axios.get('../logo-all-data').then(function (response) {
        // self.limit = response.data.limit;
        if (response.data.ld_name) {
          self.ld_name = response.data.ld_name;
        } else {
          self.ld_name = '';
        }

        self.logos = response.data.logos;
        self.userdata = response.data.userdata;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得合作夥伴資料
    getLogos: function getLogos() {
      var self = this;
      axios.get('../logos?ld_name=' + self.ld_name).then(function (response) {
        self.logos = response.data.logos;

        if (response.data.ld_name) {
          self.ld_name = response.data.ld_name;
        } else {
          self.ld_name = '';
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得單一合作夥伴資料
    getLogo: function getLogo(id) {
      var self = this;
      axios.get('../logo?ld_id=' + id).then(function (response) {
        self.logo = response.data;
        self.ld_id = id;
      })["catch"](function (response) {
        self.changeRouter('list');
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 取值專區 end ////////////////////////
    //////////////////////// 新增區塊 ////////////////////////
    ///
    //新增合作夥伴資料
    createLogo: function createLogo() {
      var self = this; /// 檢查必填欄位是否傳入
      //名稱

      if (!self.logo.ld_name) {
        self.notification('請輸入合作夥伴名稱', 'warning');
        return false;
      } //圖片


      if (!self.logo.ld_img) {
        self.notification('請上傳圖片', 'warning');
        return false;
      } // 回傳修改


      axios.post('/logo-create', self.logo) //修改
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.logo = {};
          self.changeRouter('list');
          self.getLogos();
          self.notification('新增成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 新增區塊 end ////////////////////////
    //////////////////////// 修改區塊 ////////////////////////
    ///
    //修改分類
    modifySort: function modifySort(id, sort, val) {
      var self = this;
      var json = {};
      json.ld_id = id;
      json[sort] = val == 1 ? 0 : 1;
      axios.post('/logo-modify', json) //修改 - 
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.getLogos();
          self.notification('修改成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //修改合作夥伴資料
    modifyLogo: function modifyLogo() {
      var self = this; /// 檢查必填欄位是否傳入
      //名稱

      if (!self.logo.ld_name) {
        self.notification('請輸入合作夥伴名稱', 'warning');
        return false;
      } //圖片


      if (!self.logo.ld_img) {
        self.notification('請上傳圖片', 'warning');
        return false;
      } // 回傳修改


      axios.post('/logo-modify', self.logo) //修改
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.logo = {};
          self.changeRouter('list');
          self.getLogos();
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
    deleteLogo: function deleteLogo(id) {
      var self = this;
      var json = {};
      json.ld_id = id;
      axios.post('/logo-delete', json) //刪除
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.logo = {};
          self.changeRouter('list');
          self.getLogos();
          self.notification('刪除成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification(response, 'failure');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true& ***!
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
                _c("div", { staticClass: "drop-group drop-open" }, [
                  _c(
                    "a",
                    {
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          return _vm.changeRouter("create")
                        }
                      }
                    },
                    [_vm._v("新增合作夥伴")]
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
                    [_vm._v("合作夥伴列表")]
                  )
                ])
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
                    _vm._m(0)
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
        _vm.nowView == "list"
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _c("div", { staticClass: "page-title" }, [
                _c("div", { staticClass: "content-title" }, [
                  _vm._v("\r\n                    合作夥伴列表"),
                  _c("p", [
                    _vm._v("共有"),
                    _c("span", { staticClass: "text-nar" }, [
                      _vm._v(_vm._s(_vm.total))
                    ]),
                    _vm._v("個夥伴")
                  ])
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
                            value: _vm.limit,
                            expression: "limit"
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
                              _vm.limit = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              _vm.page = 1
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
                  _c("div", { staticClass: "model-wrap" }, [
                    _c("a", {
                      staticClass: "fa model-btn",
                      class:
                        _vm.display == "image" ? "model-img" : "model-list",
                      attrs: { href: "javascript:void(0)", title: "" },
                      on: {
                        click: function($event) {
                          return _vm.changeDisplay(_vm.display)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: { "margin-top": "0" },
                        attrs: { id: "searchWrap" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ld_name,
                              expression: "ld_name"
                            }
                          ],
                          staticClass: "search-bar",
                          attrs: {
                            type: "text",
                            name: "ld_name",
                            placeholder: "Search for..."
                          },
                          domProps: { value: _vm.ld_name },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.ld_name = $event.target.value
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
                        _vm.ld_name != ""
                          ? _c("input", {
                              staticClass: "close-btn",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  ;(_vm.ld_name = ""), _vm.getLogos()
                                }
                              }
                            })
                          : _c("input", {
                              staticClass: "search-btn",
                              attrs: { type: "button", value: "" }
                            })
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.display == "list"
                ? _c("div", { staticClass: "logo-list-wrap clearfix" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "logo-content clearfix" },
                      [
                        _vm._l(_vm.newLogos, function(item) {
                          return _vm.showLogo == 1
                            ? _c("div", { staticClass: "logo-item" }, [
                                _c("div", { staticClass: "lo-img" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeRouter(
                                            "modify&" + item.ld_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: { src: item.ld_img, alt: "" }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "lo-name" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: item.ld_name
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeRouter(
                                            "modify&" + item.ld_id
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(item.ld_name))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_casino == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-casino": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_casino",
                                            item.ld_casino
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_sports == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-sports": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_sports",
                                            item.ld_sports
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_card == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-card": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_card",
                                            item.ld_card
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_live == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-live": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_live",
                                            item.ld_live
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_lottery == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-lottery": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_lottery",
                                            item.ld_lottery
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_fishing == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-fishing": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_fishing",
                                            item.ld_fishing
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "lo-active": item.ld_mahjong == 1,
                                      "temp-staut": true,
                                      "js-sv": true,
                                      "lo-mahjong": true
                                    }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "btn btn-s",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.modifySort(
                                            item.ld_id,
                                            "ld_mahjong",
                                            item.ld_mahjong
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "lo-edit js-sv" }, [
                                  _c("a", {
                                    staticClass: "btn btn-s",
                                    attrs: {
                                      href: "javascript:void(0)",
                                      title: "編輯"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeRouter(
                                          "modify&" + item.ld_id
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm.showLogo == 2
                          ? _c("p", [_vm._v("查無相符的合作夥伴資料")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.showLogo == 3
                          ? _c("p", [_vm._v("目前暫無合作夥伴資料")])
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.display == "image"
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "x_panel logo_warp" },
                          [
                            _vm._l(_vm.newLogos, function(item) {
                              return _vm.showLogo == 1
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "col-lg-2 col-sm-3 col-xs-3"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item",
                                          attrs: { href: "javascript:void(0)" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "item_block" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "image view view-first"
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          "javascript:void(0)",
                                                        title: item.ld_name
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.changeRouter(
                                                            "modify&" +
                                                              item.ld_id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticStyle: {
                                                          width: "100%",
                                                          display: "block"
                                                        },
                                                        attrs: {
                                                          src: item.ld_img,
                                                          alt: "image"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "caption" },
                                                [
                                                  _c("p", [
                                                    _c("strong", [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href:
                                                              "javascript:void(0)",
                                                            title: item.ld_name
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.changeRouter(
                                                                "modify&" +
                                                                  item.ld_id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.ld_name)
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "modify_url",
                                                      attrs: {
                                                        href:
                                                          "javascript:void(0)"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.changeRouter(
                                                            "modify&" +
                                                              item.ld_id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("編輯")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            }),
                            _vm._v(" "),
                            _vm.showLogo == 2
                              ? _c("p", [_vm._v("查無相符的合作夥伴資料")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.showLogo == 3
                              ? _c("p", [_vm._v("目前暫無合作夥伴資料")])
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    )
                  ])
                : _vm._e(),
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
                  _c("div", { staticClass: "pagination-select" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.limit,
                            expression: "limit"
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
                              _vm.limit = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              _vm.page = 1
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
          : _vm.nowView == "modify"
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _c("div", { staticClass: "content-title clearfix" }, [
                _vm._v("\r\n                編輯合作夥伴\r\n                "),
                _c("span", { staticClass: "text-nar" }, [
                  _vm._v(_vm._s(_vm.logo.ld_name))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-del content-righttop-btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.deleteLogo(_vm.logo.ld_id)
                      }
                    }
                  },
                  [_vm._v("刪除")]
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table-template-edit" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("tr", { staticClass: "islogoimg" }, [
                  _c("td", [_vm._v("logo上傳")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "check_unit",
                      attrs: {
                        id: "dragArea",
                        "data-toggle": "tooltip",
                        title: "請上傳圖片"
                      },
                      on: {
                        dragover: function($event) {
                          return _vm.allowDrop($event)
                        },
                        drop: function($event) {
                          return _vm.drop($event)
                        }
                      }
                    },
                    [
                      _c("div", { attrs: { id: "previewDiv" } }, [
                        _vm.logo.ld_img
                          ? _c("img", {
                              attrs: { src: _vm.logo.ld_img, width: "250" }
                            })
                          : _c("p", [_vm._v("請拖曳圖片至此")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isname" }, [
                  _c("td", [_vm._v("合作夥伴名稱")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.logo.ld_name,
                          expression: "logo.ld_name"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請輸入合作夥伴名稱",
                          expression: "'請輸入合作夥伴名稱'"
                        }
                      ],
                      staticClass: "check_unit",
                      attrs: { type: "text", name: "ld_name" },
                      domProps: { value: _vm.logo.ld_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.logo, "ld_name", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("tr", { staticClass: "iscasino" }, [
                  _c("td", [_vm._v("電子分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_casino == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_casino = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_casino == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_casino = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "issports" }, [
                  _c("td", [_vm._v("體育分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_sports == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_sports = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_sports == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_sports = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "iscard" }, [
                  _c("td", [_vm._v("棋牌分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_card == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_card = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_card == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_card = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "islive" }, [
                  _c("td", [_vm._v("視訊分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_live == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_live = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_live == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_live = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "islottery" }, [
                  _c("td", [_vm._v("彩票分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_lottery == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_lottery = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_lottery == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_lottery = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isfishing" }, [
                  _c("td", [_vm._v("捕魚分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_fishing == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_fishing = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_fishing == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_fishing = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ismahjong" }, [
                  _c("td", [_vm._v("麻將分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_mahjong == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_mahjong = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_mahjong == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_mahjong = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_save",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.modifyLogo()
                          }
                        }
                      },
                      [_vm._v("送出")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-cancel btn_back",
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
          : _vm.nowView == "create"
          ? _c("div", { staticClass: "content-wrap clearfix" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("table", { staticClass: "table-template-edit" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("tr", { staticClass: "islogoimg" }, [
                  _c("td", [_vm._v("logo上傳")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "check_unit",
                      attrs: {
                        id: "dragArea",
                        "data-toggle": "tooltip",
                        title: "請上傳圖片"
                      },
                      on: {
                        dragover: function($event) {
                          return _vm.allowDrop($event)
                        },
                        drop: function($event) {
                          return _vm.drop($event)
                        }
                      }
                    },
                    [
                      _c("div", { attrs: { id: "previewDiv" } }, [
                        _vm.logo.ld_img
                          ? _c("img", {
                              attrs: { src: _vm.logo.ld_img, width: "250" }
                            })
                          : _c("p", [_vm._v("請拖曳圖片至此")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isname" }, [
                  _c("td", [_vm._v("合作夥伴名稱")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.logo.ld_name,
                          expression: "logo.ld_name"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請輸入合作夥伴名稱",
                          expression: "'請輸入合作夥伴名稱'"
                        }
                      ],
                      staticClass: "check_unit",
                      attrs: { type: "text", name: "ld_name" },
                      domProps: { value: _vm.logo.ld_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.logo, "ld_name", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c("tr", { staticClass: "iscasino" }, [
                  _c("td", [_vm._v("電子分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_casino == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_casino = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_casino == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_casino = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "issports" }, [
                  _c("td", [_vm._v("體育分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_sports == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_sports = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_sports == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_sports = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "iscard" }, [
                  _c("td", [_vm._v("棋牌分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_card == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_card = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_card == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_card = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "islive" }, [
                  _c("td", [_vm._v("視訊分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_live == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_live = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_live == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_live = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "islottery" }, [
                  _c("td", [_vm._v("彩票分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_lottery == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_lottery = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_lottery == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_lottery = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isfishing" }, [
                  _c("td", [_vm._v("捕魚分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_fishing == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_fishing = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_fishing == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_fishing = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ismahjong" }, [
                  _c("td", [_vm._v("麻將分類")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.logo.ld_mahjong == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_mahjong = 1
                          }
                        }
                      },
                      [_vm._v("顯示")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.logo.ld_mahjong == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.logo.ld_mahjong = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_save",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.createLogo()
                          }
                        }
                      },
                      [_vm._v("送出")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-cancel btn_back",
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
          : _vm._e(),
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
      _c("a", { attrs: { href: "/transaction-list#/transaction" } }, [
        _vm._v("紀錄列表")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/user-list#/admin&list" } }, [
        _vm._v("使用者列表")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-title clearfix" }, [
      _c("div", { staticClass: "lo-img" }, [_vm._v("縮圖")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-name" }, [_vm._v("名稱")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-casino" }, [_vm._v("電子分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-sports" }, [_vm._v("體育分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-card" }, [_vm._v("棋牌分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-live" }, [_vm._v("視訊分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-lottery" }, [_vm._v("彩票分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-fishing" }, [_vm._v("捕魚分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-mahjong" }, [_vm._v("麻將分類")]),
      _vm._v(" "),
      _c("div", { staticClass: "lo-edit" }, [_vm._v("編輯")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("基本設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("分類設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title clearfix" }, [
      _vm._v("\r\n                新增合作夥伴\r\n                "),
      _c("span", { staticClass: "text-nar" }, [_vm._v("create")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("基本設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("分類設定")])
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

/***/ "./resources/assets/js/logo.js":
/*!*************************************!*\
  !*** ./resources/assets/js/logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Logo */ "./resources/assets/js/pages/Logo.vue");
// 匯入 Logo.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/js/pages/Logo.vue":
/*!********************************************!*\
  !*** ./resources/assets/js/pages/Logo.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=4c3aec30&scoped=true& */ "./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c3aec30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=4c3aec30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Logo.vue?vue&type=template&id=4c3aec30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4c3aec30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./resources/assets/js/logo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Back_new\resources\assets\js\logo.js */"./resources/assets/js/logo.js");


/***/ })

/******/ });