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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Project.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Project.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"],
    Clipboard: clipboard__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      nowView: 'list',
      // 現在頁面 list:列表頁 create:新增頁 modify:修改頁
      display: 'list',
      // 列表顯示方式 list or image
      orderBy: 'pd_date',
      // 網版列表排序
      //各式資料////////////////////////////////////////////////////
      projects: [],
      // 全部固定網版資料
      project: {},
      // 單一固定網版資料
      userdata: [],
      // 使用者資料
      //頁碼相關////////////////////////////////////////////////////
      limit: 10,
      //每頁數的筆數
      page: 1,
      // 目前頁數
      //搜尋相關////////////////////////////////////////////////////
      composing: true,
      // 監聽搜尋框輸入
      pd_num: '',
      // 搜尋字串
      //線上路徑////////////////////////////////////////////////////
      webbbin_front: 'http://web.bbinpartner.com',
      // 前端路徑
      webbbin_back: 'http://wms.bbinpartner.com',
      // 後端路徑
      rentSearch: 'http://rent.bbinpartner.com',
      // 租網路徑
      //資料夾路徑//////////////////////////////////////////////////
      live_demo: '/_template/',
      //修改頁面////////////////////////////////////////////////////
      pd_id: '' // 修改目標的版型編號
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
    newProjects: function newProjects() {
      var self = this;

      if (self.projects) {
        if (self.projects.length > 0) {
          if (self.limit == 'all') {
            return self.projects;
          } else {
            var start = (parseInt(self.page) - 1) * parseInt(self.limit);
            return self.projects.slice(start, start + parseInt(self.limit));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
    total: function total() {
      // 版型總數
      var self = this;

      if (self.projects) {
        return self.projects.length;
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
    showProject: function showProject() {
      // 1:有資料 2:無相符資料 3:資料庫沒資料
      var self = this;

      if (!self.projects) {
        return 3;
      } else {
        if (self.projects.length > 0) {
          return 1;
        } else {
          return 2;
        }
      }
    },
    pd_template_img: function pd_template_img() {
      //示意圖
      var self = this;

      if (self.project.pd_template_img) {
        return JSON.parse(self.project.pd_template_img);
      } else {
        return [];
      }
    },
    pd_model_img: function pd_model_img() {
      //Model圖
      var self = this;

      if (self.project.pd_model_img) {
        return JSON.parse(self.project.pd_model_img);
      } else {
        return [];
      }
    }
  },
  methods: {
    // 頁面初始化
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
    initProject: function initProject() {
      var self = this;
      this.project = {};
      this.project = Object.assign({}, this.project, {
        pd_show: 0,
        pd_new: 0,
        pd_hot: 0,
        pd_layout: 1,
        pd_style: 1,
        pd_type: 0,
        pd_live: 0,
        pd_live_url: '',
        pd_colors: '[]',
        pd_view_img: '',
        pd_template_img: '[]',
        pd_banner_img: '',
        pd_model_img: '[]'
      });
    },
    // 初始化複製功能
    initClipboard: function initClipboard() {
      var self = this; // 創建

      var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(this.$refs.copyUrl, {
        text: function text() {
          return self.webbbin_front + self.project.pd_live_url;
        }
      });
      clipboard.on('success', function (e) {
        self.notification('複製成功', 'success');
      });
      clipboard.on('error', function (e) {
        self.notification('複製失敗', 'failure');
      }); // 點擊

      this.$refs.copyUrl.click(); // 清除

      clipboard.destroy();
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
            target_input.val(file_path).trigger('change');

            if (target == 'pd_view_img') {
              self.project.pd_view_img = file_path;
            } else if (target == 'pd_banner_img') {
              self.project.pd_banner_img = file_path;
            } else if (target.indexOf('template') != -1) {
              var array = target.split('_');
              self.pd_template_img[array[1]] = file_path;
              self.project.pd_template_img = JSON.stringify(self.pd_template_img);
            } else if (target.indexOf('model') != -1) {
              var array = target.split('_');
              self.pd_model_img[array[1]] = file_path;
              self.project.pd_model_img = JSON.stringify(self.pd_model_img);
            } //set or change the preview image src


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
          self.initProject();
          this.$router.replace('create')["catch"](function (err) {});
        } else if (view.indexOf('modify') != -1) {
          if (view.indexOf('&') != -1) {
            var val_array = view.split('&');

            if (val_array[1] != '') {
              self.getProject(val_array[1]);
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
    // 選擇色系
    select_color: function select_color(color) {
      var self = this;

      if (self.project.pd_colors || self.project.pd_colors == '[]') {
        var pd_colors = JSON.parse(self.project.pd_colors);
        var array = [];

        if (self.check_color(color)) {
          for (var i = 0; i < pd_colors.length; i++) {
            if (pd_colors[i] != color) {
              array.push(pd_colors[i]);
            }
          } // if(self.nowView == 'create'){
          //     $('.color-'+color).removeClass('color-active');
          // }


          self.project.pd_colors = JSON.stringify(array);
        } else {
          if (pd_colors.length > 2) {
            self.notification('最多選擇三個色系', 'warning');
          } else {
            pd_colors.push(color); // if(self.nowView == 'create'){
            //     $('.color-'+color).addClass('color-active');
            // }

            self.project.pd_colors = JSON.stringify(pd_colors);
          }
        }
      } else {
        var array = [];
        array.push(color); // if(self.nowView == 'create'){
        //     $('.color-'+color).addClass('color-active');
        // }

        self.project.pd_colors = JSON.stringify(array);
      }
    },
    // 產生路徑
    add_url: function add_url() {
      var self = this;

      if (!self.project.pd_num) {
        self.notification('請先輸入網版名稱', 'failure');
      } else {
        self.project.pd_live_url = self.live_demo + self.project.pd_num;
      }
    },
    // 刪除示意圖
    deleteTemplateImg: function deleteTemplateImg(index) {
      var self = this;
      var array = [];
      $('.template_image').each(function () {
        if ($(this).find('input').val() != '' && $(this).index() != index) {
          array.push($(this).find('input').val());
        }
      });
      self.project.pd_template_img = JSON.stringify(array);
    },
    // 刪除Model圖
    deleteModelImg: function deleteModelImg(index) {
      var self = this;
      var array = [];
      $('.model_image').each(function () {
        if ($(this).find('input').val() != '' && $(this).index() != index) {
          array.push($(this).find('input').val());
        }
      });
      self.project.pd_model_img = JSON.stringify(array);
    },
    // 新增示意圖
    addTemplateImage: function addTemplateImage() {
      var self = this;
      var array = [];
      $('.template_image').each(function () {
        if ($(this).find('input').val() != '') {
          array.push($(this).find('input').val());
        }
      });
      array.push('');
      self.project.pd_template_img = JSON.stringify(array);
    },
    // 新增Model圖
    addModelImage: function addModelImage() {
      var self = this;
      var array = [];
      $('.model_image').each(function () {
        if ($(this).find('input').val() != '') {
          array.push($(this).find('input').val());
        }
      });
      array.push('');
      self.project.pd_model_img = JSON.stringify(array);
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
          self.getProjects(self.orderBy);
        }
      }, 10);
    },
    ///
    //////////////////////// 查詢功能 end //////////////////
    //////////////////////// 檢查各項目 //////////////////////
    ///
    // 檢查該使用者是否可以瀏覽該頁面
    checkUrl: function checkUrl() {
      var self = this;
      var url = new URL(location.href);
      var hash = url.hash.split("#/"); //切換頁面

      self.changeRouter(hash[1]);
    },
    // 檢查該網版色系
    check_color: function check_color(color) {
      var self = this;

      if (self.project.pd_colors) {
        if (self.project.pd_colors.indexOf(color) != -1) {
          return true;
        } else {
          return false;
        }
      }
    },
    ///
    //////////////////////// 檢查各項目 end //////////////////
    //////////////////////// 取值專區 ////////////////////////
    ///
    //取得版型全部資料
    getAllData: function getAllData() {
      var self = this;
      axios.get('../project-all-data').then(function (response) {
        self.orderBy = response.data.orderBy;

        if (response.data.pd_num) {
          self.pd_num = response.data.pd_num;
        } else {
          self.pd_num = '';
        }

        self.projects = response.data.projects;
        self.userdata = response.data.userdata;
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得網版資料
    getProjects: function getProjects(orderBy) {
      var self = this;
      axios.get('../projects?orderBy=' + orderBy + '&pd_num=' + self.pd_num).then(function (response) {
        self.projects = response.data.projects;
        self.orderBy = response.data.orderBy;

        if (response.data.pd_num) {
          self.pd_num = response.data.pd_num;
        } else {
          self.pd_num = '';
        } // self.page = 1;

      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //取得單一網版資料
    getProject: function getProject(id) {
      var self = this;
      axios.get('../project?pd_id=' + id).then(function (response) {
        self.project = response.data;
        self.pd_id = id;
      })["catch"](function (response) {
        self.changeRouter('list');
        self.notification('系統出錯', 'failure');
      });
    },
    ///
    //////////////////////// 取值專區 end ////////////////////////
    //////////////////////// 新增區塊 ////////////////////////
    ///
    //新增網版
    createProject: function createProject() {
      var self = this; /// 檢查必填欄位是否傳入
      //名稱

      if (!self.project.pd_num) {
        self.notification('請輸入網版名稱', 'warning');
        return false;
      } //時間格式轉換


      if (!self.project.pd_date) {
        self.notification('請選擇上線日期', 'warning');
        return false;
      } else {
        var fromDate = new Date(self.project.pd_date);
        var year = fromDate.getFullYear();
        var month = fromDate.getMonth() + 1 < 10 ? '0' + (fromDate.getMonth() + 1) : fromDate.getMonth() + 1;
        var day = fromDate.getDate() < 10 ? '0' + fromDate.getDate() : fromDate.getDate();
        self.project.pd_date = year + '-' + month + '-' + day;
      } //色系


      var pd_colors = JSON.parse(self.project.pd_colors);

      if (pd_colors.length < 1) {
        self.notification('至少選擇一個色系', 'warning');
        return false;
      } //網版dome


      if (self.project.pd_live) {
        var pd_live_url = $('input[name=pd_live_url]').val();

        if (pd_live_url == '') {
          self.notification('請輸入Demo路徑', 'warning');
          return false;
        } else {
          self.project.pd_live_url = $('input[name=pd_live_url]').val();
        }
      } else {
        self.project.pd_live_url = '';
      } //列表圖


      var pd_view_img = $('input[name="pd_view_img"]').val();

      if (pd_view_img == '') {
        self.notification('請上傳列表圖', 'warning');
        return false;
      } else {
        self.project.pd_view_img = pd_view_img;
      } //banner圖


      var pd_banner_img = $('input[name="pd_banner_img"]').val();

      if (pd_banner_img == '') {
        self.notification('請上傳Banner', 'warning');
        return false;
      } else {
        self.project.pd_banner_img = pd_banner_img;
      } //示意圖


      var pd_template_img = [];
      $('.template_image').each(function () {
        if ($(this).find('input').val() != '') {
          pd_template_img.push($(this).find('input').val());
        }
      });
      self.project.pd_template_img = JSON.stringify(pd_template_img); //model圖

      var pd_model_img = [];
      $('.model_image').each(function () {
        if ($(this).find('input').val() != '') {
          pd_model_img.push($(this).find('input').val());
        }
      });
      self.project.pd_model_img = JSON.stringify(pd_model_img); // 回傳修改

      axios.post('/project-create', self.project) //新增 - 版型資料
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.project = {};
          self.changeRouter('list');
          self.getProjects(self.orderBy);
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
    //修改顯示狀態
    modifyShow: function modifyShow(id, pd_show) {
      var self = this;
      var json = {};
      json.pd_id = id;
      json.pd_show = pd_show ? 0 : 1;
      axios.post('/project-modify', json) //修改 - 
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.getProjects(self.orderBy);
          self.notification('修改成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //修改最新項目狀態
    modifyNew: function modifyNew(id, pd_new) {
      var self = this;
      var json = {};
      json.pd_id = id;
      json.pd_new = pd_new ? 0 : 1;
      axios.post('/project-modify', json) //修改 - 
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.getProjects(self.orderBy);
          self.notification('修改成功', 'success');
        } else {
          self.notification(response.data.result, 'failure');
        }
      })["catch"](function (response) {
        self.notification('系統出錯', 'failure');
      });
    },
    //修改版型資料
    modifyProject: function modifyProject() {
      var self = this; /// 檢查必填欄位是否傳入
      //名稱

      if (!self.project.pd_num) {
        self.notification('請輸入網版名稱', 'warning');
        return false;
      } //時間格式轉換


      if (!self.project.pd_date) {
        self.notification('請選擇上線日期', 'warning');
        return false;
      } else {
        var fromDate = new Date(self.project.pd_date);
        var year = fromDate.getFullYear();
        var month = fromDate.getMonth() < 10 ? '0' + (fromDate.getMonth() + 1) : fromDate.getMonth() + 1;
        var day = fromDate.getDate() < 10 ? '0' + fromDate.getDate() : fromDate.getDate();
        self.project.pd_date = year + '-' + month + '-' + day;
      } //色系


      var pd_colors = JSON.parse(self.project.pd_colors);

      if (pd_colors.length < 1) {
        self.notification('至少選擇一個色系', 'warning');
        return false;
      } //網版dome


      if (self.project.pd_live) {
        var pd_live_url = $('input[name=pd_live_url]').val();

        if (pd_live_url == '') {
          self.notification('請輸入Demo路徑', 'warning');
          return false;
        }
      } else {
        self.project.pd_live_url = '';
      } //列表圖


      var pd_view_img = $('input[name="pd_view_img"]').val();

      if (pd_view_img == '') {
        self.notification('請上傳列表圖', 'warning');
        return false;
      } else {
        self.project.pd_view_img = pd_view_img;
      } //banner圖


      var pd_banner_img = $('input[name="pd_banner_img"]').val();

      if (pd_banner_img == '') {
        self.notification('請上傳Banner', 'warning');
        return false;
      } else {
        self.project.pd_banner_img = pd_banner_img;
      } //示意圖


      var pd_template_img = [];
      $('.template_image').each(function () {
        if ($(this).find('input').val() != '') {
          pd_template_img.push($(this).find('input').val());
        }
      });
      self.project.pd_template_img = JSON.stringify(pd_template_img); //model圖

      var pd_model_img = [];
      $('.model_image').each(function () {
        if ($(this).find('input').val() != '') {
          pd_model_img.push($(this).find('input').val());
        }
      });
      self.project.pd_model_img = JSON.stringify(pd_model_img); // 回傳修改

      axios.post('/project-modify', self.project) //修改 - 版型資料
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.project = {};
          self.changeRouter('list');
          self.getProjects(self.orderBy);
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
    deleteProject: function deleteProject(id) {
      var self = this;
      var json = {};
      json.pd_id = id;
      axios.post('/project-delete', json) //刪除
      .then(function (response) {
        if (response.data.result == 'ok') {
          self.page = 1;
          self.project = {};
          self.changeRouter('list');
          self.getProjects(self.orderBy);
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
  watch: {
    orderBy: function orderBy() {
      var self = this;
      self.getProjects(self.orderBy);
    }
  }
});

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(3);
var delegate = __webpack_require__(4);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(0);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);

// CONCATENATED MODULE: ./src/clipboard-action.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var clipboard_action_ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = select_default()(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = select_default()(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }
            document.activeElement.blur();
            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (clipboard_action_ClipboardAction);
// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(1);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);

// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(2);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);

// CONCATENATED MODULE: ./src/clipboard.js
var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clipboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var clipboard_Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        clipboard_classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    clipboard_createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = listen_default()(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(tiny_emitter_default.a);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

/* harmony default export */ var clipboard = __webpack_exports__["default"] = (clipboard_Clipboard);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("新增版型")]
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
                    [_vm._v("網版列表")]
                  ),
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
                    _vm._m(1)
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
                  _vm._v("\r\n                    網版列表"),
                  _c("p", [
                    _vm._v("共有"),
                    _c("span", { staticClass: "text-nar" }, [
                      _vm._v(_vm._s(_vm.total))
                    ]),
                    _vm._v("個版")
                  ]),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "searchWrap" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pd_num,
                          expression: "pd_num"
                        }
                      ],
                      staticClass: "search-bar",
                      attrs: {
                        type: "text",
                        name: "pd_num",
                        placeholder: "Search for..."
                      },
                      domProps: { value: _vm.pd_num },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.pd_num = $event.target.value
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
                    _vm.pd_num != ""
                      ? _c("input", {
                          staticClass: "close-btn",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              ;(_vm.pd_num = ""), _vm.getProjects(_vm.orderBy)
                            }
                          }
                        })
                      : _c("input", {
                          staticClass: "search-btn",
                          attrs: { type: "button", value: "" }
                        })
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
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.orderBy,
                            expression: "orderBy"
                          }
                        ],
                        attrs: { name: "adaptive_order", id: "adaptive_order" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.orderBy = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "pd_date" } }, [
                          _vm._v("上架日期排行")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "pd_hot" } }, [
                          _vm._v("熱門項目")
                        ])
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.display == "list"
                ? _c("div", { staticClass: "template-list-wrap clearfix" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "template-content clearfix" },
                      [
                        _vm._l(_vm.newProjects, function(item) {
                          return _vm.showProject == 1
                            ? _c("div", { staticClass: "template-item" }, [
                                _c("div", { staticClass: "temp-img" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeRouter(
                                            "modify&" + item.pd_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: item.pd_view_img,
                                          alt: ""
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "temp-name" }, [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "javascript:void(0)",
                                        title: item.pd_num
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeRouter(
                                            "modify&" + item.pd_id
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(item.pd_num))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "temp-date" }, [
                                  _vm._v(
                                    "\r\n                            " +
                                      _vm._s(item.pd_date) +
                                      "\r\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                item.pd_layout == 1
                                  ? _c("div", { staticClass: "temp-layout" }, [
                                      _vm._v("直向大小")
                                    ])
                                  : item.pd_layout == 2
                                  ? _c("div", { staticClass: "temp-layout" }, [
                                      _vm._v("橫向大小")
                                    ])
                                  : item.pd_layout == 3
                                  ? _c("div", { staticClass: "temp-layout" }, [
                                      _vm._v("多面切割")
                                    ])
                                  : item.pd_layout == 4
                                  ? _c("div", { staticClass: "temp-layout" }, [
                                      _vm._v("對角線")
                                    ])
                                  : item.pd_layout == 5
                                  ? _c("div", { staticClass: "temp-layout" }, [
                                      _vm._v("無規則")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.pd_style == 1
                                  ? _c("div", { staticClass: "temp-style" }, [
                                      _vm._v("前衛時尚")
                                    ])
                                  : item.pd_style == 2
                                  ? _c("div", { staticClass: "temp-style" }, [
                                      _vm._v("復古典雅")
                                    ])
                                  : item.pd_style == 3
                                  ? _c("div", { staticClass: "temp-style" }, [
                                      _vm._v("精緻華麗")
                                    ])
                                  : item.pd_style == 4
                                  ? _c("div", { staticClass: "temp-style" }, [
                                      _vm._v("簡約大氣")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.pd_type == 1
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("機率")
                                    ])
                                  : item.pd_type == 2
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("體育")
                                    ])
                                  : item.pd_type == 3
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("棋牌")
                                    ])
                                  : item.pd_type == 4
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("視訊")
                                    ])
                                  : item.pd_type == 5
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("彩票")
                                    ])
                                  : item.pd_type == 6
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("麻將")
                                    ])
                                  : item.pd_type == 7
                                  ? _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("捕魚")
                                    ])
                                  : _c("div", { staticClass: "temp-type" }, [
                                      _vm._v("無類型")
                                    ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "temp-color alLeft" },
                                  _vm._l(JSON.parse(item.pd_colors), function(
                                    color
                                  ) {
                                    return _c("span", {
                                      class: "color color-" + color
                                    })
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: {
                                      "temp-active": item.pd_show == 1,
                                      "temp-staut": true,
                                      "js-sv": true
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
                                          return _vm.modifyShow(
                                            item.pd_id,
                                            item.pd_show
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
                                      "temp-active": item.pd_new == 1,
                                      "temp-icon": true,
                                      "js-sv": true
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
                                          return _vm.modifyNew(
                                            item.pd_id,
                                            item.pd_new
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "temp-edit js-sv" }, [
                                  _c("a", {
                                    staticClass: "btn btn-s",
                                    attrs: {
                                      href: "javascript:void(0)",
                                      title: "編輯"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.changeRouter(
                                          "modify&" + item.pd_id
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "temp-demo js-sv" }, [
                                  item.pd_live == 1
                                    ? _c("a", {
                                        staticClass: "btn btn-s",
                                        attrs: {
                                          href:
                                            "http://web.bbinpartner.com/demo/" +
                                            item.pd_id,
                                          target: "_blank",
                                          title: "Demo"
                                        }
                                      })
                                    : _vm._e()
                                ])
                              ])
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm.showProject == 2
                          ? _c("p", [_vm._v("查無相符的固定網版資料")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.showProject == 3
                          ? _c("p", [_vm._v("目前暫無固定網版資料")])
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
                          { staticClass: "x_panel" },
                          [
                            _vm._l(_vm.newProjects, function(item) {
                              return _vm.showProject == 1
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "col-lg-4 col-sm-6 col-xs-6"
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
                                                        title: item.pd_num
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.changeRouter(
                                                            "modify&" +
                                                              item.pd_id
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
                                                          src: item.pd_view_img,
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
                                                            title: item.pd_num
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.changeRouter(
                                                                "modify&" +
                                                                  item.pd_id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.pd_num)
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
                                                              item.pd_id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("編輯")]
                                                  ),
                                                  _vm._v(" "),
                                                  item.pd_live &&
                                                  item.pd_live_url != ""
                                                    ? _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "live_url",
                                                          attrs: {
                                                            href:
                                                              _vm.webbbin_front +
                                                              item.pd_live_url,
                                                            target: "_blank"
                                                          }
                                                        },
                                                        [_vm._v("Demo")]
                                                      )
                                                    : _vm._e()
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
                            _vm.showProject == 2
                              ? _c("p", [_vm._v("查無相符的固定網版資料")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.showProject == 3
                              ? _c("p", [_vm._v("目前暫無固定網版資料")])
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
                _vm._v("\r\n                編輯網版\r\n                "),
                _c("span", { staticClass: "text-nar" }, [
                  _vm._v(_vm._s(_vm.project.pd_num))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-del content-righttop-btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.deleteProject(_vm.project.pd_id)
                      }
                    }
                  },
                  [_vm._v("刪除")]
                )
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table-template-edit" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("tr", { staticClass: "isnum" }, [
                  _c("td", [_vm._v("網版名稱")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_num,
                          expression: "project.pd_num"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請輸入網版名稱",
                          expression: "'請輸入網版名稱'"
                        }
                      ],
                      staticClass: "check_unit",
                      attrs: { type: "text", name: "pd_num" },
                      domProps: { value: _vm.project.pd_num },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "pd_num", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isdate" }, [
                  _c("td", [_vm._v("上線日期")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("label", {
                        staticClass: "fa date-icon",
                        attrs: { for: "" }
                      }),
                      _vm._v(" "),
                      _c("datepicker", {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請選擇上線日期",
                            expression: "'請選擇上線日期'"
                          }
                        ],
                        staticClass: "date-input check_unit",
                        attrs: {
                          id: "datepicker",
                          name: "pd_date",
                          format: "yyyy-MM-dd"
                        },
                        model: {
                          value: _vm.project.pd_date,
                          callback: function($$v) {
                            _vm.$set(_vm.project, "pd_date", $$v)
                          },
                          expression: "project.pd_date"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isshow" }, [
                  _c("td", [_vm._v("網版 顯示 & 隱藏")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_show == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_show = 1
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
                        class: _vm.project.pd_show == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_show = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isnew" }, [
                  _c("td", [_vm._v("顯示new icon")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn " }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_new == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_new = 1
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
                        class: _vm.project.pd_new == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_new = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ishot" }, [
                  _c("td", [_vm._v("熱門版型")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_hot == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_hot = 1
                          }
                        }
                      },
                      [_vm._v("是")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.project.pd_hot == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_hot = 0
                          }
                        }
                      },
                      [_vm._v("否")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("tr", { staticClass: "islayout" }, [
                  _c("td", [_vm._v("網版布局")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_layout,
                            expression: "project.pd_layout"
                          }
                        ],
                        attrs: { name: "pd_layout", id: "pd_layout" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_layout",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("直向大小")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("橫向大小")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("多面切割")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("對角線")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("無規則")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isstyle" }, [
                  _c("td", [_vm._v("網版風格")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_style,
                            expression: "project.pd_style"
                          }
                        ],
                        attrs: { name: "pd_style", id: "pd_style" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_style",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("前衛時尚")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("復古典雅")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("精緻華麗")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("簡約大氣")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "istype" }, [
                  _c("td", [_vm._v("主題類型")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_type,
                            expression: "project.pd_type"
                          }
                        ],
                        attrs: { name: "pd_type", id: "pd_type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("無類型")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("機率")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("體育")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("棋牌")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("視訊")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("彩票")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "6" } }, [
                          _vm._v("麻將")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "7" } }, [
                          _vm._v("捕魚")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "iscolor" }, [
                  _c("td", [_vm._v("網版色系")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-color-pick" }, [
                    _c(
                      "p",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "至少選擇一個色系，最多三個",
                            expression: "'至少選擇一個色系，最多三個'"
                          }
                        ],
                        staticClass: "fa check_unit"
                      },
                      [
                        _c("span", {
                          staticClass: "color color-white",
                          class: _vm.check_color("white") ? "color-active" : "",
                          attrs: { "data-value": "white" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("white")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-gray",
                          class: _vm.check_color("gray") ? "color-active" : "",
                          attrs: { "data-value": "gray" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("gray")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-black",
                          class: _vm.check_color("black") ? "color-active" : "",
                          attrs: { "data-value": "black" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("black")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-blue",
                          class: _vm.check_color("blue") ? "color-active" : "",
                          attrs: { "data-value": "blue" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("blue")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-green",
                          class: _vm.check_color("green") ? "color-active" : "",
                          attrs: { "data-value": "green" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("green")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-yellow",
                          class: _vm.check_color("yellow")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "yellow" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("yellow")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-coffee",
                          class: _vm.check_color("coffee")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "coffee" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("coffee")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-orange",
                          class: _vm.check_color("orange")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "orange" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("orange")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-red",
                          class: _vm.check_color("red") ? "color-active" : "",
                          attrs: { "data-value": "red" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("red")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-pink",
                          class: _vm.check_color("pink") ? "color-active" : "",
                          attrs: { "data-value": "pink" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("pink")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-purple",
                          class: _vm.check_color("purple")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "purple" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("purple")
                            }
                          }
                        })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _c("tr", { staticClass: "islive" }, [
                  _c("td", [_vm._v("網版Demo")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_live == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_live = 1
                          }
                        }
                      },
                      [_vm._v("有")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.project.pd_live == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_live = 0
                          }
                        }
                      },
                      [_vm._v("無")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.project.pd_live,
                            expression: "project.pd_live"
                          }
                        ],
                        staticClass: "hide_or_show"
                      },
                      [
                        _c("div", { staticClass: "table-copy-btn" }, [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              id: "pd_live_demo_url",
                              value: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "請輸入Demo路徑",
                                expression: "'請輸入Demo路徑'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.project.pd_live_url,
                                expression: "project.pd_live_url"
                              }
                            ],
                            staticClass: "check_unit",
                            attrs: {
                              type: "text",
                              id: "pd_live_url",
                              name: "pd_live_url"
                            },
                            domProps: { value: _vm.project.pd_live_url },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.project,
                                  "pd_live_url",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-path btn_add_url",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.add_url()
                                }
                              }
                            },
                            [_vm._v("產生路徑")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              ref: "copyUrl",
                              staticClass: "btn btn-copy btn_copy_url",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.initClipboard()
                                }
                              }
                            },
                            [_c("span", { staticClass: "fa" })]
                          )
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isviewimg" }, [
                  _c("td", [_vm._v("列表圖上傳")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "check_unit" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_view_img,
                          expression: "project.pd_view_img"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請上傳列表圖",
                          expression: "'請上傳列表圖'"
                        }
                      ],
                      staticClass: "url_readonly check_unit",
                      attrs: {
                        type: "text",
                        id: "pd_view_img",
                        name: "pd_view_img"
                      },
                      domProps: { value: _vm.project.pd_view_img },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_view_img",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-upload pd_view_img",
                        attrs: {
                          type: "button",
                          "data-input": "pd_view_img",
                          "data-preview": "holder"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openFilemanager("pd_view_img")
                          }
                        }
                      },
                      [_vm._v("檔案上傳")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isbannerimg" }, [
                  _c("td", [_vm._v("Banner上傳")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "check_unit" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_banner_img,
                          expression: "project.pd_banner_img"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請上傳Banner",
                          expression: "'請上傳Banner'"
                        }
                      ],
                      staticClass: " url_readonly",
                      attrs: {
                        type: "text",
                        id: "pd_banner_img",
                        name: "pd_banner_img"
                      },
                      domProps: { value: _vm.project.pd_banner_img },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_banner_img",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-upload pd_banner_img",
                        attrs: {
                          type: "button",
                          "data-input": "pd_banner_img",
                          "data-preview": "holder"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openFilemanager("pd_banner_img")
                          }
                        }
                      },
                      [_vm._v("檔案上傳")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "istemplateimg" }, [
                  _c("td", [_vm._v("示意圖上傳")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      { staticClass: "image_block" },
                      _vm._l(_vm.pd_template_img, function(item, index) {
                        return _vm.pd_template_img.length > 0
                          ? _c(
                              "div",
                              { staticClass: "js-img-wrap template_image" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "table-template-edit-add clearfix"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.pd_template_img[index],
                                          expression: "pd_template_img[index]"
                                        },
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "請上傳",
                                          expression: "'請上傳'"
                                        }
                                      ],
                                      staticClass: "url_readonly",
                                      attrs: {
                                        type: "text",
                                        name: "templateimage_" + index,
                                        id: "templateimage_" + index
                                      },
                                      domProps: {
                                        value: _vm.pd_template_img[index]
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.pd_template_img,
                                            index,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-upload btn_upload_img",
                                        class: "templateimage_" + index,
                                        attrs: {
                                          type: "button",
                                          "data-input":
                                            "templateimage_" + index,
                                          "data-preview": "holder"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openFilemanager(
                                              "templateimage_" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("檔案上傳")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-del-circle js-del-input_i btn_remove_img",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteTemplateImg(index)
                                          }
                                        }
                                      },
                                      [_c("span", { staticClass: "fa" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-add-item js-add-img btn_add_img",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.addTemplateImage()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa" }),
                        _vm._v("新增圖片\r\n                        ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ismodelimg" }, [
                  _c("td", [_vm._v("Model圖上傳")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      { staticClass: "image_model_block" },
                      _vm._l(_vm.pd_model_img, function(item, index) {
                        return _vm.pd_model_img.length > 0
                          ? _c(
                              "div",
                              { staticClass: "js-img-wrap model_image" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "table-template-edit-add clearfix"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.pd_model_img[index],
                                          expression: "pd_model_img[index]"
                                        }
                                      ],
                                      staticClass: "url_readonly",
                                      attrs: {
                                        type: "text",
                                        name: "modelimage_" + index,
                                        id: "modelimage_" + index
                                      },
                                      domProps: {
                                        value: _vm.pd_model_img[index]
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.pd_model_img,
                                            index,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-upload btn_upload_img",
                                        class: "modelimage_" + index,
                                        attrs: {
                                          type: "button",
                                          "data-input": "modelimage_" + index,
                                          "data-preview": "holder"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openFilemanager(
                                              "modelimage_" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("檔案上傳")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-del-circle js-del-input_i btn_remove_img",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteModelImg(index)
                                          }
                                        }
                                      },
                                      [_c("span", { staticClass: "fa" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-add-item js-add-model btn_add_img_model",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.addModelImage()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa" }),
                        _vm._v("新增圖片\r\n                        ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isnotice" }, [
                  _c("td", [_vm._v("注意事項")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_notices,
                          expression: "project.pd_notices"
                        }
                      ],
                      attrs: { name: "pd_notices" },
                      domProps: { value: _vm.project.pd_notices },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_notices",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-warning" }, [
                      _vm._v(
                        "＊兩行以上請加入，區隔\r\n                        "
                      )
                    ])
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
                            return _vm.modifyProject()
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
              _vm._m(6),
              _vm._v(" "),
              _c("table", { staticClass: "table-template-edit" }, [
                _vm._m(7),
                _vm._v(" "),
                _c("tr", { staticClass: "isnum" }, [
                  _c("td", [_vm._v("網版名稱")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_num,
                          expression: "project.pd_num"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請輸入網版名稱",
                          expression: "'請輸入網版名稱'"
                        }
                      ],
                      staticClass: "check_unit",
                      attrs: { type: "text", name: "pd_num" },
                      domProps: { value: _vm.project.pd_num },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.project, "pd_num", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isdate" }, [
                  _c("td", [_vm._v("上線日期")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("label", {
                        staticClass: "fa date-icon",
                        attrs: { for: "" }
                      }),
                      _vm._v(" "),
                      _c("datepicker", {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "請選擇上線日期",
                            expression: "'請選擇上線日期'"
                          }
                        ],
                        staticClass: "date-input check_unit",
                        attrs: {
                          id: "datepicker",
                          name: "pd_date",
                          format: "yyyy-MM-dd"
                        },
                        model: {
                          value: _vm.project.pd_date,
                          callback: function($$v) {
                            _vm.$set(_vm.project, "pd_date", $$v)
                          },
                          expression: "project.pd_date"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isshow" }, [
                  _c("td", [_vm._v("網版 顯示 & 隱藏")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_show == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_show = 1
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
                        class: _vm.project.pd_show == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_show = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isnew" }, [
                  _c("td", [_vm._v("顯示new icon")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn " }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_new == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_new = 1
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
                        class: _vm.project.pd_new == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_new = 0
                          }
                        }
                      },
                      [_vm._v("隱藏")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ishot" }, [
                  _c("td", [_vm._v("熱門版型")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_hot == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_hot = 1
                          }
                        }
                      },
                      [_vm._v("是")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.project.pd_hot == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_hot = 0
                          }
                        }
                      },
                      [_vm._v("否")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _c("tr", { staticClass: "islayout" }, [
                  _c("td", [_vm._v("網版布局")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_layout,
                            expression: "project.pd_layout"
                          }
                        ],
                        attrs: { name: "pd_layout", id: "pd_layout" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_layout",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("直向大小")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("橫向大小")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("多面切割")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("對角線")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("無規則")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isstyle" }, [
                  _c("td", [_vm._v("網版風格")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_style,
                            expression: "project.pd_style"
                          }
                        ],
                        attrs: { name: "pd_style", id: "pd_style" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_style",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("前衛時尚")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("復古典雅")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("精緻華麗")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("簡約大氣")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "istype" }, [
                  _c("td", [_vm._v("主題類型")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project.pd_type,
                            expression: "project.pd_type"
                          }
                        ],
                        attrs: { name: "pd_type", id: "pd_type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.project,
                              "pd_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("無類型")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("機率")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("體育")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("棋牌")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("視訊")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("彩票")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "6" } }, [
                          _vm._v("麻將")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "7" } }, [
                          _vm._v("捕魚")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "iscolor" }, [
                  _c("td", [_vm._v("網版色系")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-color-pick" }, [
                    _c(
                      "p",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: "至少選擇一個色系，最多三個",
                            expression: "'至少選擇一個色系，最多三個'"
                          }
                        ],
                        staticClass: "fa check_unit"
                      },
                      [
                        _c("span", {
                          staticClass: "color color-white",
                          class: _vm.check_color("white") ? "color-active" : "",
                          attrs: { "data-value": "white" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("white")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-gray",
                          class: _vm.check_color("gray") ? "color-active" : "",
                          attrs: { "data-value": "gray" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("gray")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-black",
                          class: _vm.check_color("black") ? "color-active" : "",
                          attrs: { "data-value": "black" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("black")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-blue",
                          class: _vm.check_color("blue") ? "color-active" : "",
                          attrs: { "data-value": "blue" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("blue")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-green",
                          class: _vm.check_color("green") ? "color-active" : "",
                          attrs: { "data-value": "green" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("green")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-yellow",
                          class: _vm.check_color("yellow")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "yellow" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("yellow")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-coffee",
                          class: _vm.check_color("coffee")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "coffee" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("coffee")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-orange",
                          class: _vm.check_color("orange")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "orange" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("orange")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-red",
                          class: _vm.check_color("red") ? "color-active" : "",
                          attrs: { "data-value": "red" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("red")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-pink",
                          class: _vm.check_color("pink") ? "color-active" : "",
                          attrs: { "data-value": "pink" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("pink")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "color color-purple",
                          class: _vm.check_color("purple")
                            ? "color-active"
                            : "",
                          attrs: { "data-value": "purple" },
                          on: {
                            click: function($event) {
                              return _vm.select_color("purple")
                            }
                          }
                        })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _c("tr", { staticClass: "islive" }, [
                  _c("td", [_vm._v("網版Demo")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "js-table-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "table-enable",
                        class: _vm.project.pd_live == 1 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_live = 1
                          }
                        }
                      },
                      [_vm._v("有")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "table-disable",
                        class: _vm.project.pd_live == 0 ? "table-active" : "",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.project.pd_live = 0
                          }
                        }
                      },
                      [_vm._v("無")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.project.pd_live,
                            expression: "project.pd_live"
                          }
                        ],
                        staticClass: "hide_or_show"
                      },
                      [
                        _c("div", { staticClass: "table-copy-btn" }, [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              id: "pd_live_demo_url",
                              value: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "請輸入Demo路徑",
                                expression: "'請輸入Demo路徑'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.project.pd_live_url,
                                expression: "project.pd_live_url"
                              }
                            ],
                            staticClass: "check_unit",
                            attrs: {
                              type: "text",
                              id: "pd_live_url",
                              name: "pd_live_url"
                            },
                            domProps: { value: _vm.project.pd_live_url },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.project,
                                  "pd_live_url",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-path btn_add_url",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.add_url()
                                }
                              }
                            },
                            [_vm._v("產生路徑")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              ref: "copyUrl",
                              staticClass: "btn btn-copy btn_copy_url",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.initClipboard()
                                }
                              }
                            },
                            [_c("span", { staticClass: "fa" })]
                          )
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isviewimg" }, [
                  _c("td", [_vm._v("列表圖上傳")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "check_unit" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_view_img,
                          expression: "project.pd_view_img"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請上傳列表圖",
                          expression: "'請上傳列表圖'"
                        }
                      ],
                      staticClass: "url_readonly check_unit",
                      attrs: {
                        type: "text",
                        id: "pd_view_img",
                        name: "pd_view_img"
                      },
                      domProps: { value: _vm.project.pd_view_img },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_view_img",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-upload pd_view_img",
                        attrs: {
                          type: "button",
                          "data-input": "pd_view_img",
                          "data-preview": "holder"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openFilemanager("pd_view_img")
                          }
                        }
                      },
                      [_vm._v("檔案上傳")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isbannerimg" }, [
                  _c("td", [_vm._v("Banner上傳")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "check_unit" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_banner_img,
                          expression: "project.pd_banner_img"
                        },
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: "請上傳Banner",
                          expression: "'請上傳Banner'"
                        }
                      ],
                      staticClass: " url_readonly",
                      attrs: {
                        type: "text",
                        id: "pd_banner_img",
                        name: "pd_banner_img"
                      },
                      domProps: { value: _vm.project.pd_banner_img },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_banner_img",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-upload pd_banner_img",
                        attrs: {
                          type: "button",
                          "data-input": "pd_banner_img",
                          "data-preview": "holder"
                        },
                        on: {
                          click: function($event) {
                            return _vm.openFilemanager("pd_banner_img")
                          }
                        }
                      },
                      [_vm._v("檔案上傳")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "istemplateimg" }, [
                  _c("td", [_vm._v("示意圖上傳")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      { staticClass: "image_block" },
                      _vm._l(_vm.pd_template_img, function(item, index) {
                        return _vm.pd_template_img.length > 0
                          ? _c(
                              "div",
                              { staticClass: "js-img-wrap template_image" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "table-template-edit-add clearfix"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.pd_template_img[index],
                                          expression: "pd_template_img[index]"
                                        },
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: "請上傳",
                                          expression: "'請上傳'"
                                        }
                                      ],
                                      staticClass: "url_readonly",
                                      attrs: {
                                        type: "text",
                                        name: "templateimage_" + index,
                                        id: "templateimage_" + index
                                      },
                                      domProps: {
                                        value: _vm.pd_template_img[index]
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.pd_template_img,
                                            index,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-upload btn_upload_img",
                                        class: "templateimage_" + index,
                                        attrs: {
                                          type: "button",
                                          "data-input":
                                            "templateimage_" + index,
                                          "data-preview": "holder"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openFilemanager(
                                              "templateimage_" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("檔案上傳")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-del-circle js-del-input_i btn_remove_img",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteTemplateImg(index)
                                          }
                                        }
                                      },
                                      [_c("span", { staticClass: "fa" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-add-item js-add-img btn_add_img",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.addTemplateImage()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa" }),
                        _vm._v("新增圖片\r\n                        ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "ismodelimg" }, [
                  _c("td", [_vm._v("Model圖上傳")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      { staticClass: "image_model_block" },
                      _vm._l(_vm.pd_model_img, function(item, index) {
                        return _vm.pd_model_img.length > 0
                          ? _c(
                              "div",
                              { staticClass: "js-img-wrap model_image" },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "table-template-edit-add clearfix"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.pd_model_img[index],
                                          expression: "pd_model_img[index]"
                                        }
                                      ],
                                      staticClass: "url_readonly",
                                      attrs: {
                                        type: "text",
                                        name: "modelimage_" + index,
                                        id: "modelimage_" + index
                                      },
                                      domProps: {
                                        value: _vm.pd_model_img[index]
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.pd_model_img,
                                            index,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-upload btn_upload_img",
                                        class: "modelimage_" + index,
                                        attrs: {
                                          type: "button",
                                          "data-input": "modelimage_" + index,
                                          "data-preview": "holder"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openFilemanager(
                                              "modelimage_" + index
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("檔案上傳")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-del-circle js-del-input_i btn_remove_img",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteModelImg(index)
                                          }
                                        }
                                      },
                                      [_c("span", { staticClass: "fa" })]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-add-item js-add-model btn_add_img_model",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.addModelImage()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "fa" }),
                        _vm._v("新增圖片\r\n                        ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", { staticClass: "isnotice" }, [
                  _c("td", [_vm._v("注意事項")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.project.pd_notices,
                          expression: "project.pd_notices"
                        }
                      ],
                      attrs: { name: "pd_notices" },
                      domProps: { value: _vm.project.pd_notices },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.project,
                            "pd_notices",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-warning" }, [
                      _vm._v(
                        "＊兩行以上請加入，區隔\r\n                        "
                      )
                    ])
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
                            return _vm.createProject()
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
    return _c("div", { staticClass: "template-title clearfix" }, [
      _c("div", { staticClass: "temp-img" }, [_vm._v("縮圖")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-name" }, [_vm._v("名稱")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-date" }, [_vm._v("上線日期")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-layout" }, [_vm._v("網版佈局")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-style" }, [_vm._v("網版風格")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-type" }, [_vm._v("主題")]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-color" }, [
        _vm._v("\r\n                        色系\r\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-staut" }, [
        _vm._v("\r\n                        狀態\r\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-icon" }, [
        _vm._v("\r\n                        New icon\r\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-edit" }, [
        _vm._v("\r\n                        編輯\r\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "temp-demo" }, [
        _vm._v("\r\n                        Demo\r\n                    ")
      ])
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
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("風格設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("版面設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-title clearfix" }, [
      _vm._v("\r\n                新增網版\r\n                "),
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
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("風格設定")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "temp-title" }, [
      _c("td", { attrs: { colspan: "2" } }, [_vm._v("版面設定")])
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

/***/ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var Language =
/*#__PURE__*/
function () {
  function Language(language, months, monthsAbbr, days) {
    _classCallCheck(this, Language);

    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }

  _createClass(Language, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string');
      }

      this._language = language;
    }
  }, {
    key: "months",
    get: function get() {
      return this._months;
    },
    set: function set(months) {
      if (months.length !== 12) {
        throw new RangeError("There must be 12 months for ".concat(this.language, " language"));
      }

      this._months = months;
    }
  }, {
    key: "monthsAbbr",
    get: function get() {
      return this._monthsAbbr;
    },
    set: function set(monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError("There must be 12 abbreviated months for ".concat(this.language, " language"));
      }

      this._monthsAbbr = monthsAbbr;
    }
  }, {
    key: "days",
    get: function get() {
      return this._days;
    },
    set: function set(days) {
      if (days.length !== 7) {
        throw new RangeError("There must be 7 days for ".concat(this.language, " language"));
      }

      this._days = days;
    }
  }]);

  return Language;
}(); // eslint-disable-next-line

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) // eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear(date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth(date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate(date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }

    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr(date, days) {
    if (_typeof(date) !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (_typeof(month) === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (_typeof(month) === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return monthsAbbr[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate(date, format, translation) {
    translation = !translation ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month).replace(/su/, this.getNthSuffix(this.getDate(date))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray(start, end) {
    var dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }

    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput(val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  }
};
var makeDateUtils = function makeDateUtils(useUtc) {
  return _objectSpread({}, utils, {
    useUtc: useUtc
  });
};
var utils$1 = _objectSpread({}, utils) // eslint-disable-next-line
;

var script = {
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    };
  },
  computed: {
    formattedValue: function formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate) {
        return this.typedDate;
      }

      return typeof this.format === 'function' ? this.format(this.selectedDate) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    },
    computedInputClass: function computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread({
          'form-control': true
        }, this.inputClass);
      }

      return this.inputClass;
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate() {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar() {
      this.$emit('showCalendar');
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if ([27, // escape
      13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);

        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred() {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },

    /**
     * emit a clearDate event
     */
    clearDate: function clearDate() {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelector('input');
  }
} // eslint-disable-next-line
;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: { "input-group-prepend": _vm.bootstrapStyling },
              style: { "cursor:not-allowed;": _vm.disabled },
              on: { click: _vm.showCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.calendarButtonIcon }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.calendarButtonIconContent) +
                        "\n        "
                    ),
                    !_vm.calendarButtonIcon
                      ? _c("span", [_vm._v("…")])
                      : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          type: _vm.inline ? "hidden" : "text",
          name: _vm.name,
          id: _vm.id,
          "open-date": _vm.openDate,
          placeholder: _vm.placeholder,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          required: _vm.required,
          readonly: !_vm.typeable,
          autocomplete: "off"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          click: _vm.showCalendar,
          keyup: _vm.parseTypedDate,
          blur: _vm.inputBlurred
        }
      }),
      _vm._v(" "),
      _vm.clearButton && _vm.selectedDate
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__clear-button",
              class: { "input-group-append": _vm.bootstrapStyling },
              on: {
                click: function($event) {
                  return _vm.clearDate()
                }
              }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.clearButtonIcon }, [
                    !_vm.clearButtonIcon ? _c("span", [_vm._v("×")]) : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("afterDateInput")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DateInput = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
var script$1 = {
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      "default": function _default(day) {
        return day.date;
      }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek() {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return this.translation.days;
    },

    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays() {
      var d = this.pageDate;
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;
      }

      return this.utils.getDay(dObj);
    },

    /**
     * @return {Object[]}
     */
    days: function days() {
      var d = this.pageDate;
      var days = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName() {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd() {
      return this.translation.ymd && this.translation.ymd === true;
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextMonthDisabled(this.pageTimestamp) : this.isPreviousMonthDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousMonthDisabled(this.pageTimestamp) : this.isNextMonthDisabled(this.pageTimestamp);
    }
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false;
      }

      this.$emit('selectDate', date);
    },

    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar() {
      this.$emit('showMonthCalendar');
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth(incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },

    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth() {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d);
    },

    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth() {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d);
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (_this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }

      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate(date) {
      var _this2 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false;
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (_this2.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    },
    dayClasses: function dayClasses(day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart(date) {
      return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.from) === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd(date) {
      return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.to) === this.utils.getDate(date);
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showDayView,
          expression: "showDayView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "day__month_btn",
            class: _vm.allowedToShowView("month") ? "up" : "",
            on: { click: _vm.showMonthCalendar }
          },
          [
            _vm._v(
              _vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName) +
                " " +
                _vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName)
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.isRtl ? "flex-rtl" : "" },
        [
          _vm._l(_vm.daysOfWeek, function(d) {
            return _c(
              "span",
              { key: d.timestamp, staticClass: "cell day-header" },
              [_vm._v(_vm._s(d))]
            )
          }),
          _vm._v(" "),
          _vm.blankDays > 0
            ? _vm._l(_vm.blankDays, function(d) {
                return _c("span", {
                  key: d.timestamp,
                  staticClass: "cell day blank"
                })
              })
            : _vm._e(),
          _vm._l(_vm.days, function(day) {
            return _c("span", {
              key: day.timestamp,
              staticClass: "cell day",
              class: _vm.dayClasses(day),
              domProps: { innerHTML: _vm._s(_vm.dayCellContent(day)) },
              on: {
                click: function($event) {
                  return _vm.selectDate(day)
                }
              }
            })
          })
        ],
        2
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerDay = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    months: function months() {
      var d = this.pageDate;
      var months = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i++) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj)
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextYearDisabled(this.pageTimestamp) : this.isPreviousYearDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousYearDisabled(this.pageTimestamp) : this.isNextYearDisabled(this.pageTimestamp);
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      if (month.isDisabled) {
        return false;
      }

      this.$emit('selectMonth', month);
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },

    /**
     * Decrements the year
     */
    previousYear: function previousYear() {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Increments the year
     */
    nextYear: function nextYear() {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar() {
      this.$emit('showYearCalendar');
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) && this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date);
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to) || this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from) || this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showMonthView,
          expression: "showMonthView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextYear() : _vm.previousYear();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "month__year_btn",
            class: _vm.allowedToShowView("year") ? "up" : "",
            on: { click: _vm.showYearCalendar }
          },
          [_vm._v(_vm._s(_vm.pageYearName))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousYear() : _vm.nextYear();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.months, function(month) {
        return _c(
          "span",
          {
            key: month.timestamp,
            staticClass: "cell month",
            class: { selected: month.isSelected, disabled: month.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectMonth(month)
              }
            }
          },
          [_vm._v(_vm._s(month.month))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerMonth = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  computed: {
    years: function years() {
      var d = this.pageDate;
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },

    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade() {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextDecadeDisabled(this.pageTimestamp) : this.isPreviousDecadeDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousDecadeDisabled(this.pageTimestamp) : this.isNextDecadeDisabled(this.pageTimestamp);
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  methods: {
    selectYear: function selectYear(year) {
      if (year.isDisabled) {
        return false;
      }

      this.$emit('selectYear', year);
    },
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade() {
      if (this.isPreviousDecadeDisabled()) {
        return false;
      }

      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    },
    nextDecade: function nextDecade() {
      if (this.isNextDecadeDisabled()) {
        return false;
      }

      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date);
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showYearView,
          expression: "showYearView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.getPageDecade))]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.years, function(year) {
        return _c(
          "span",
          {
            key: year.timestamp,
            staticClass: "cell year",
            class: { selected: year.isSelected, disabled: year.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectYear(year)
              }
            }
          },
          [_vm._v(_vm._s(year.year))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerYear = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      "default": 'dd MMM yyyy'
    },
    language: {
      type: Object,
      "default": function _default() {
        return en;
      }
    },
    openDate: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      "default": 'day'
    },
    maximumView: {
      type: String,
      "default": 'year'
    }
  },
  data: function data() {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,

      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,

      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils
    };
  },
  watch: {
    value: function value(_value) {
      this.setValue(_value);
    },
    openDate: function openDate() {
      this.setPageDate();
    },
    initialView: function initialView() {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate: function pageDate() {
      return new Date(this.pageTimestamp);
    },
    translation: function translation() {
      return this.language;
    },
    calendarStyle: function calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined
      };
    },
    isOpen: function isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline: function isInline() {
      return !!this.inline;
    },
    isRtl: function isRtl() {
      return this.translation.rtl === true;
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar() {
      if (this.disabled || this.isInline) {
        return false;
      }

      if (this.isOpen) {
        return this.close(true);
      }

      this.setInitialView();
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView() {
      var initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(this.initialView, "' cannot be rendered based on minimum '").concat(this.minimumView, "' and maximum '").concat(this.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;

        case 'month':
          this.showMonthCalendar();
          break;

        default:
          this.showDayCalendar();
          break;
      }
    },

    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }

      this.close();
      this.showDayView = true;
      return true;
    },

    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }

      this.close();
      this.showMonthView = true;
      return true;
    },

    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }

      this.close();
      this.showYearView = true;
      return true;
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate(timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },

    /**
     * Clear the selected date
     */
    clearDate: function clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },

    /**
     * @param {Object} date
     */
    selectDate: function selectDate(date) {
      this.setDate(date.timestamp);

      if (!this.isInline) {
        this.close(true);
      }

      this.resetTypedDate = new Date();
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear: function selectYear(year) {
      var date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }

      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate(date) {
      this.setDate(date.getTime());
    },

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close(emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;

      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }

        document.removeEventListener('click', this.clickOutside, false);
      }
    },

    /**
     * Initiate the component
     */
    init: function init() {
      if (this.value) {
        this.setValue(this.value);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
} // eslint-disable-next-line
;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "vdp-datepicker",
      class: [_vm.wrapperClass, _vm.isRtl ? "rtl" : ""]
    },
    [
      _c(
        "date-input",
        {
          attrs: {
            selectedDate: _vm.selectedDate,
            resetTypedDate: _vm.resetTypedDate,
            format: _vm.format,
            translation: _vm.translation,
            inline: _vm.inline,
            id: _vm.id,
            name: _vm.name,
            refName: _vm.refName,
            openDate: _vm.openDate,
            placeholder: _vm.placeholder,
            inputClass: _vm.inputClass,
            typeable: _vm.typeable,
            clearButton: _vm.clearButton,
            clearButtonIcon: _vm.clearButtonIcon,
            calendarButton: _vm.calendarButton,
            calendarButtonIcon: _vm.calendarButtonIcon,
            calendarButtonIconContent: _vm.calendarButtonIconContent,
            disabled: _vm.disabled,
            required: _vm.required,
            bootstrapStyling: _vm.bootstrapStyling,
            "use-utc": _vm.useUtc
          },
          on: {
            showCalendar: _vm.showCalendar,
            closeCalendar: _vm.close,
            typedDate: _vm.setTypedDate,
            clearDate: _vm.clearDate
          }
        },
        [_vm._t("afterDateInput", null, { slot: "afterDateInput" })],
        2
      ),
      _vm._v(" "),
      _vm.allowedToShowView("day")
        ? _c(
            "picker-day",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showDayView: _vm.showDayView,
                fullMonthName: _vm.fullMonthName,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                highlighted: _vm.highlighted,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                pageTimestamp: _vm.pageTimestamp,
                isRtl: _vm.isRtl,
                mondayFirst: _vm.mondayFirst,
                dayCellContent: _vm.dayCellContent,
                "use-utc": _vm.useUtc
              },
              on: {
                changedMonth: _vm.handleChangedMonthFromDayPicker,
                selectDate: _vm.selectDate,
                showMonthCalendar: _vm.showMonthCalendar,
                selectedDisabled: _vm.selectDisabledDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("month")
        ? _c(
            "picker-month",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showMonthView: _vm.showMonthView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: {
                selectMonth: _vm.selectMonth,
                showYearCalendar: _vm.showYearCalendar,
                changedYear: _vm.setPageDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("year")
        ? _c(
            "picker-year",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showYearView: _vm.showYearView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: { selectYear: _vm.selectYear, changedDecade: _vm.setPageDate }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-64ca2bb5_0", { source: ".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n", map: {"version":3,"sources":["Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;AACb;AACA;;EAEE,0BAA0B;EAC1B,WAAW;EACX,qBAAqB;EACrB,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,4CAA4C;EAC5C,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;AACA;EACE,4BAA4B;AAC9B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,eAAe;AACjB","file":"Datepicker.vue","sourcesContent":[".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Datepicker = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (Datepicker);


/***/ }),

/***/ "./resources/assets/js/pages/Project.vue":
/*!***********************************************!*\
  !*** ./resources/assets/js/pages/Project.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=ecbf4828&scoped=true& */ "./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ecbf4828",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/Project.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/assets/js/pages/Project.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=ecbf4828&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/pages/Project.vue?vue&type=template&id=ecbf4828&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_ecbf4828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/project.js":
/*!****************************************!*\
  !*** ./resources/assets/js/project.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Project */ "./resources/assets/js/pages/Project.vue");
// 匯入 Project.vue 檔，不需加副檔名

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./resources/assets/js/project.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\webbbin\Back_new\resources\assets\js\project.js */"./resources/assets/js/project.js");


/***/ })

/******/ });