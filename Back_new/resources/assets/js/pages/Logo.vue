<style scoped></style>
<template>
<div id="mainBody" class="clearfix">
    <!--header-->
    <div id="header" class="clearfix">
        <div class="header-wrap">
            <!-- logo -->
            <a href="/index" class="logo"></a>
            <!-- nav -->
            <div class="mainnav-wrap">
                <div class="mainnav">
                    <ul class="clearfix">
                        <li>
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">版型管理</a>
                            <div class="drop-group drop-open">
                                <a href="/project-list#/create">新增版型</a>
                                <a href="/project-list">網版列表</a>
                                <a href="javascript:void(0)" @click="openFilemanager('open_image_manager')" class="open_image_manager">圖片管理</a>
                            </div>
                        </li>
                        <li>
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">合作夥伴管理</a>
                            <div class="drop-group drop-open">
                                <a href="javascript:void(0)" @click="changeRouter('create')">新增合作夥伴</a>
                                <a href="javascript:void(0)" @click="changeRouter('list')">合作夥伴列表</a>
                            </div>
                        </li>
                        <li>
                            <a :href="rentSearch" target="_blank">租網檢索</a>
                        </li>
                        <li v-if="userdata.ud_admin">
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">後台管理</a>
                            <div class="drop-group drop-open">
                                <a href="/transaction-list#/transaction">紀錄列表</a>
                                <a href="/user-list#/admin&list">使用者列表</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--container-->
    <div id="container">
        <!--staut-->
        <div class="staut">
            <a :href="'/user-list#/personal&modify&'+userdata.ud_id" title="" class="btn staut-edit">
                {{userdata.ud_name}}
            </a>
            <a href="/logout" title="登出" class="btn staut-logout">登出</a>
        </div>
        <!--content-->
        <div v-if="nowView == 'list'" class="content-wrap clearfix">
            <div class="page-title">
                <div class="content-title">
                    合作夥伴列表<p>共有<span class="text-nar">{{total}}</span>個夥伴</p>
                </div>
            </div>
            <!-- 上方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="page" :page-count="count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="page = 1" v-model="limit">
                        <option value="10">10項 / 頁</option>
                        <option value="50">50項 / 頁</option>
                        <option value="all">全部列出</option>
                    </select>
                </div>
                <div class="model-wrap">
                    <a @click="changeDisplay(display)" href="javascript:void(0)" title="" :class="display == 'image' ? 'model-img' : 'model-list'" class="fa model-btn"></a>
                    <div id="searchWrap" style="margin-top:0;">
                        <input type="text" name="ld_name" class="search-bar" v-model="ld_name" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                        <input v-if="ld_name != ''" @click="ld_name = '',getLogos()" type="button" class="close-btn">
                        <input v-else type="button" class="search-btn" value="">
                    </div>
                </div>
            </div>
            <div v-if="display == 'list'" class="logo-list-wrap clearfix">
                <div class="logo-title clearfix">
                    <div class="lo-img">縮圖</div>
                    <div class="lo-name">名稱</div>
                    <div class="lo-casino">電子分類</div>
                    <div class="lo-sports">體育分類</div>
                    <div class="lo-card">棋牌分類</div>
                    <div class="lo-live">視訊分類</div>
                    <div class="lo-lottery">彩票分類</div>
                    <div class="lo-fishing">捕魚分類</div>
                    <div class="lo-mahjong">麻將分類</div>
                    <div class="lo-edit">編輯</div>
                </div>
                <div class="logo-content clearfix">
                    <div v-if="showLogo == 1" v-for="item in newLogos" class="logo-item">
                        <div class="lo-img">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)"><img :src="item.ld_img" alt=""></a>
                        </div>
                        <div class="lo-name">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)" :title="item.ld_name">{{item.ld_name}}</a>
                        </div>
                        <!-- 電子分類 -->
                        <div :class="{'lo-active' :item.ld_casino == 1,'temp-staut':true,'js-sv':true,'lo-casino':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_casino',item.ld_casino)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 體育分類 -->
                        <div :class="{'lo-active' :item.ld_sports == 1,'temp-staut':true,'js-sv':true,'lo-sports':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_sports',item.ld_sports)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 棋牌分類 -->
                        <div :class="{'lo-active' :item.ld_card == 1,'temp-staut':true,'js-sv':true,'lo-card':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_card',item.ld_card)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 視訊分類 -->
                        <div :class="{'lo-active' :item.ld_live == 1,'temp-staut':true,'js-sv':true,'lo-live':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_live',item.ld_live)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 彩票分類 -->
                        <div :class="{'lo-active' :item.ld_lottery == 1,'temp-staut':true,'js-sv':true,'lo-lottery':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_lottery',item.ld_lottery)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 捕魚分類 -->
                        <div :class="{'lo-active' :item.ld_fishing == 1,'temp-staut':true,'js-sv':true,'lo-fishing':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_fishing',item.ld_fishing)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 麻將分類 -->
                        <div :class="{'lo-active' :item.ld_mahjong == 1,'temp-staut':true,'js-sv':true,'lo-mahjong':true}">
                            <a href="javascript:void(0)" @click="modifySort(item.ld_id,'ld_mahjong',item.ld_mahjong)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 編輯按鈕 -->
                        <div class="lo-edit js-sv">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)" class="btn btn-s" title="編輯"></a>
                        </div>
                    </div>
                    <p v-if="showLogo == 2">查無相符的合作夥伴資料</p>
                    <p v-if="showLogo == 3">目前暫無合作夥伴資料</p>
                </div>
            </div>
            <!-- image模式 -->
            <div v-if="display == 'image'" class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap">
                    <div class="x_panel logo_warp">
                        <div v-if="showLogo == 1" v-for="item in newLogos" class="col-lg-2 col-sm-3 col-xs-3">
                            <a href="javascript:void(0)" class="col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item">
                                <div class="item_block">
                                    <div class="image view view-first">
                                        <a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)" class="" :title="item.ld_name"><img style="width: 100%; display: block;" :src="item.ld_img" alt="image"></a>
                                    </div>
                                    <div class="caption">
                                        <p><strong><a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)" class="" :title="item.ld_name">{{ item.ld_name }}</a></strong></p>
                                        <a href="javascript:void(0)" @click="changeRouter('modify&'+item.ld_id)" class="modify_url">編輯</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p v-if="showLogo == 2">查無相符的合作夥伴資料</p>
                        <p v-if="showLogo == 3">目前暫無合作夥伴資料</p>
                    </div>
                </div>
            </div>
            <!-- 下方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="page" :page-count="count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="page = 1" v-model="limit">
                        <option value="10">10項 / 頁</option>
                        <option value="50">50項 / 頁</option>
                        <option value="all">全部列出</option>
                    </select>
                </div>
                <div class="pagination-gotoTop">
                    <a @click="goToTop()" href="javascript:void(0)" class="fa js-gotoTop"></a>
                </div>
            </div>
        </div>
        <div v-else-if="nowView == 'modify'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                編輯合作夥伴
                <span class="text-nar">{{ logo.ld_name }}</span>
                <button @click="deleteLogo(logo.ld_id)" type="button" class="btn btn-del content-righttop-btn">刪除</button>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="islogoimg">
                    <td>logo上傳</td>
                    <td @dragover="allowDrop($event)" @drop="drop($event)"  class="check_unit" id="dragArea" data-toggle="tooltip" title="請上傳圖片">
                        <div id="previewDiv">
                            <img v-if="logo.ld_img" :src="logo.ld_img" width="250">
                            <p v-else>請拖曳圖片至此</p>
                        </div>
                    </td>
                </tr>
                <tr class="isname">
                    <td>合作夥伴名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="ld_name" v-model="logo.ld_name" v-tooltip="'請輸入合作夥伴名稱'">
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">分類設定</td>
                </tr>
                <tr class="iscasino">
                    <td>電子分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_casino == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_casino = 1">顯示</button>
                        <button type="button" :class="logo.ld_casino == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_casino = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="issports">
                    <td>體育分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_sports == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_sports = 1">顯示</button>
                        <button type="button" :class="logo.ld_sports == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_sports = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="iscard">
                    <td>棋牌分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_card == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_card = 1">顯示</button>
                        <button type="button" :class="logo.ld_card == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_card = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islive">
                    <td>視訊分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_live == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_live = 1">顯示</button>
                        <button type="button" :class="logo.ld_live == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_live = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islottery">
                    <td>彩票分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_lottery == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_lottery = 1">顯示</button>
                        <button type="button" :class="logo.ld_lottery == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_lottery = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isfishing">
                    <td>捕魚分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_fishing == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_fishing = 1">顯示</button>
                        <button type="button" :class="logo.ld_fishing == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_fishing = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ismahjong">
                    <td>麻將分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_mahjong == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_mahjong = 1">顯示</button>
                        <button type="button" :class="logo.ld_mahjong == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_mahjong = 0">隱藏</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="modifyLogo()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowView == 'create'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                新增合作夥伴
                <span class="text-nar">create</span>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="islogoimg">
                    <td>logo上傳</td>
                    <td @dragover="allowDrop($event)" @drop="drop($event)"  class="check_unit" id="dragArea" data-toggle="tooltip" title="請上傳圖片">
                        <div id="previewDiv">
                            <img v-if="logo.ld_img" :src="logo.ld_img" width="250">
                            <p v-else>請拖曳圖片至此</p>
                        </div>
                    </td>
                </tr>
                <tr class="isname">
                    <td>合作夥伴名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="ld_name" v-model="logo.ld_name" v-tooltip="'請輸入合作夥伴名稱'">
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">分類設定</td>
                </tr>
                <tr class="iscasino">
                    <td>電子分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_casino == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_casino = 1">顯示</button>
                        <button type="button" :class="logo.ld_casino == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_casino = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="issports">
                    <td>體育分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_sports == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_sports = 1">顯示</button>
                        <button type="button" :class="logo.ld_sports == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_sports = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="iscard">
                    <td>棋牌分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_card == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_card = 1">顯示</button>
                        <button type="button" :class="logo.ld_card == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_card = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islive">
                    <td>視訊分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_live == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_live = 1">顯示</button>
                        <button type="button" :class="logo.ld_live == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_live = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islottery">
                    <td>彩票分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_lottery == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_lottery = 1">顯示</button>
                        <button type="button" :class="logo.ld_lottery == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_lottery = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isfishing">
                    <td>捕魚分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_fishing == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_fishing = 1">顯示</button>
                        <button type="button" :class="logo.ld_fishing == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_fishing = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ismahjong">
                    <td>麻將分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.ld_mahjong == 1 ? 'table-active':''" class="table-enable" @click="logo.ld_mahjong = 1">顯示</button>
                        <button type="button" :class="logo.ld_mahjong == 0 ? 'table-active':''" class="table-disable" @click="logo.ld_mahjong = 0">隱藏</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="createLogo()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <notifications position='top center'/>
    </div>
</div>
</template>
<script>
export default {
	data() {
        return {
            nowView:'list', // 現在頁面 list:列表頁 create:新增頁 modify:修改頁
            display:'list', // 列表顯示方式 list or image
            //各式資料////////////////////////////////////////////////////
            logos:[], // 全部合作夥伴資料
            logo:{}, // 單一合作夥伴資料
            userdata:[], // 
            //頁碼相關////////////////////////////////////////////////////
            limit:10, //每頁數的筆數
            page:1, // 目前頁數
            //搜尋相關////////////////////////////////////////////////////
            composing:true, // 監聽搜尋框輸入
            ld_name:'', // 搜尋字串
            //線上路徑////////////////////////////////////////////////////
            webbbin_front:'http://web.bbinpartner.com', // 前端路徑
            webbbin_back:'http://wms.bbinpartner.com', // 後端路徑
            rentSearch:'http://rent.bbinpartner.com', // 租網路徑
            //修改頁面////////////////////////////////////////////////////
            ld_id:'', // 修改目標的合作夥伴編號
            //新增頁面////////////////////////////////////////////////////
        }
    },
    created:function(){
        let self = this;
        self.checkUrl();
    },
    mounted: function () {
        let self = this;
        self.getAllData();
    },
    computed: {
        newLogos:function(){
            let self = this;
            if(self.logos){
                if(self.logos.length > 0){
                    if(self.limit == 'all'){
                        return self.logos;
                    }else{
                        var start = (parseInt(self.page) - 1) * parseInt(self.limit);
                        return self.logos.slice(start, start + parseInt(self.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        total:function(){ // 合作夥伴總數
            let self = this;
            if(self.logos){
                return self.logos.length;
            }else{
                return 0;
            }
        },
        count:function(){
            let self = this;
            if(self.limit == 'all'){
                self.page = 1;
                return 1;
            }else{
                return Math.ceil(self.total / self.limit)
            }
        },
        showLogo:function(){// 1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(!self.logos){
                return 3;
            }else{
                if(self.logos.length > 0){
                    return 1;
                }else{
                    return 2;
                }
            }
        },   
    },
    methods: {
        init: function () {
            
        },
        // 回最上面位置
        goToTop:function(){
            $('html').animate({ 'scrollTop': 0 }, 250);
        },
        // 開闔左側選單
        dropGroup:function(e){
            let self = this;
            $(e.target).parent().find('.drop-group').slideToggle('drop-open');
            $(e.target).toggleClass('drop-title-down');
        },
        // 合作夥伴資料初始化
        initLogo:function(){
            let self = this;
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
                ld_mahjong:0,
            })
        },
        // 開啟檔案總管
        openFilemanager:function(target){
            let self = this;
            $.fn.filemanager = function(type, options) {
                type = type || 'file';

                this.on('click', function(e) {
                var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
                localStorage.setItem('target_input', $(this).data('input'));
                localStorage.setItem('target_preview', $(this).data('preview'));
                window.open(route_prefix + '?type=' + type, 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    //set the value of the desired input to image url
                    var target_input = $('#' + localStorage.getItem('target_input'));
                    target_input.val(file_path).trigger('change');
                
                    //set or change the preview image src
                    var target_preview = $('#' + localStorage.getItem('target_preview'));
                    target_preview.attr('src', url).trigger('change');
                };
                return false;
                });
            }
            $('.'+ target).filemanager('image');
            $('.'+ target).click();
        },
        // 換頁執行
        clickCallback:function(){
            let self = this;
            // 目前換頁無須執行任何事項
        },
        // 改變呈現方式
        changeDisplay:function(type){
            let self = this;
            self.display = type == 'image' ? 'list' : 'image';
        },
        // 更換router
        changeRouter:function(view){
            let self = this;
            if(view != ''){
                if(view == 'create'){
                    self.nowView = 'create';
                    self.initLogo();
                    this.$router.replace('create').catch(err => {});
                }else if(view.indexOf('modify') != -1){
                    if(view.indexOf('&') != -1){
                        var val_array = view.split('&');
                        if(val_array[1] != ''){
                            self.getLogo(val_array[1]);
                            self.nowView = 'modify';
                            this.$router.replace('modify&'+val_array[1]).catch(err => {});
                        }else{
                            self.nowView = 'list';
                            this.$router.replace('list').catch(err => {});
                        }
                    }else{
                        self.nowView = 'list';
                        this.$router.replace('list').catch(err => {});
                    }
                }else{
                    self.nowView = 'list';
                    this.$router.replace('list').catch(err => {});
                }
            }else{
                self.nowView = 'list';
                this.$router.replace('list').catch(err => {});
            }
        },
        //////////////////////// 查詢功能 //////////////////////
        ///
        // 監聽搜尋框 注音輸入開始
        listen_input_start:function(){
            let self = this;
            self.composing = false;
        },
        // 監聽搜尋框 注音輸入結束
        listen_input_end:function(){
            let self = this;
            self.composing = true;
        },
        // 查詢功能
        search: function (id = null) {
        	let self = this;
            setTimeout(function(){
                if(self.composing){
                    self.getLogos();
                }
            },10)
        },
        ///
        //////////////////////// 查詢功能 end ////////////////////

        //////////////////////// 圖片上傳功能 //////////////////////
        ///
        // 預覽圖片，將取得的files一個個取出丟到convertFile()
        previewFiles:function(files){
            let self = this;
            if (files && files.length >= 1) {
                $.map(files, file => {
                    self.convertFile(file)
                        .then(data => {
                        $('input[name=ld_img]').val(data);
                        self.showPreviewImage(data, file.name)
                        })
                        .catch(err => console.log(err))
                })
            }
        },
        // 使用FileReader讀取檔案，並且回傳Base64編碼後的source
        convertFile:function(file){
            let self = this;
            return new Promise((resolve,reject)=>{
                // 建立FileReader物件
                let reader = new FileReader()
                let imgResult = "";
                reader.readAsDataURL(file);
                reader.onload = function() {
                    imgResult = reader.result;
                };
                reader.onerror = function(error) {
                    reject(error);
                };
                reader.onloadend = function() {
                    resolve(imgResult);
                };
            })
        },
        // 在頁面上新增<img>
        showPreviewImage:function(src, fileName){
            let self = this;
            let image = new Image(250) // 設定寬250px
            image.name = fileName
            image.src = src // <img>中src屬性除了接url外也可以直接接Base64字串
            $("#previewDiv").append(image);//.append(`<p>File: ${image.name}`)
            self.logo.ld_img = src;
        },
        // dragover事件：拖曳(滑鼠還沒鬆開)至放置區時，就要先防止瀏覽器進行開圖
        allowDrop:function(e){
            e.preventDefault();
        },
        // 當拖曳區發生drop事件時，接受格式為image的資料
        drop:function(e){
            let self = this;
            // 防止事件傳遞及預設事件發生
            e.stopPropagation()
            e.preventDefault()
            // 取得data type為image/*的資料
            e.dataTransfer.getData("image/*")
            let files = e.dataTransfer.files
            console.dir(files) // 看看File長什麼樣子
            $("#previewDiv").empty() // 清空當下預覽
            self.previewFiles(files)
        },
        ///
        //////////////////////// 圖片上傳功能 end ////////////////////

        //////////////////////// 檢查各項目 //////////////////////
        ///
        // 檢查該使用者是否可以瀏覽該頁面
        checkUrl:function(){
            let self = this;
            let url = new URL(location.href);
            let hash = url.hash.split("#/");
            //切換頁面
            self.changeRouter(hash[1]);            
        },
        ///
        //////////////////////// 檢查各項目 end //////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得全部資料
        getAllData:function(){
            let self = this;
            
            axios.get('../logo-all-data')
                .then(function (response) {
                    // self.limit = response.data.limit;
                    if(response.data.ld_name){
                        self.ld_name = response.data.ld_name;
                    }else{
                        self.ld_name = '';
                    }
                    self.logos = response.data.logos;
                    self.userdata = response.data.userdata;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得合作夥伴資料
        getLogos:function(){
            let self = this;

            axios.get('../logos?ld_name='+self.ld_name)
                .then(function (response) {
                    self.logos = response.data.logos;
                    if(response.data.ld_name){
                        self.ld_name = response.data.ld_name;
                    }else{
                        self.ld_name = '';
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得單一合作夥伴資料
        getLogo:function(id){
            let self = this;
            axios.get('../logo?ld_id='+id)
                .then(function (response) {
                    self.logo = response.data;
                    self.ld_id = id;
                })
                .catch(function (response) {
                    self.changeRouter('list');
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 取值專區 end ////////////////////////

        //////////////////////// 新增區塊 ////////////////////////
        ///
        //新增合作夥伴資料
        createLogo:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.logo.ld_name){
                self.notification('請輸入合作夥伴名稱','warning');
                return false;
            }
            //圖片
            if(!self.logo.ld_img){
                self.notification('請上傳圖片','warning');
                return false;
            }

            // 回傳修改
            axios.post('/logo-create',self.logo) //修改
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.logo = {};
                        self.changeRouter('list');
                        self.getLogos();
                        self.notification('新增成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 新增區塊 end ////////////////////////

        //////////////////////// 修改區塊 ////////////////////////
        ///
        //修改分類
        modifySort:function(id,sort,val){
            let self = this;
            var json = {};

            json.ld_id = id;
            json[sort] = val == 1 ? 0 : 1;

            axios.post('/logo-modify',json) //修改 - 
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.getLogos();
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //修改合作夥伴資料
        modifyLogo:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.logo.ld_name){
                self.notification('請輸入合作夥伴名稱','warning');
                return false;
            }
            //圖片
            if(!self.logo.ld_img){
                self.notification('請上傳圖片','warning');
                return false;
            }

            // 回傳修改
            axios.post('/logo-modify',self.logo) //修改
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.logo = {};
                        self.changeRouter('list');
                        self.getLogos();
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 修改區塊 end ////////////////////////

        //////////////////////// 刪除區塊 ////////////////////////
        ///
        //刪除資料
        deleteLogo:function(id){
            let self = this;
            var json = {};
            json.ld_id = id;
            
            axios.post('/logo-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.logo = {};
                        self.changeRouter('list');
                        self.getLogos();
                        self.notification('刪除成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification(response,'failure');
                });
        },
        ///
        //////////////////////// 刪除區塊 end ////////////////////////

        //////////////////////// 推播框設定 ////////////////////////
        ///
        // 推撥提示框
        notification:function(string,type){
            if(type == 'success'){
                this.$notify({
                    // <i class="fas fa-check-circle success"></i> 
                    title: 'SUCCESS',
                    text: string,
                    // type:'success'
                });
            }else if(type == 'failure'){
                this.$notify({
                    // <i class="fas fa-times-circle failure"></i> 
                    title: 'FAILURE',
                    text: string,
                    // type:'error'
                });
            }else if(type == 'warning'){
                this.$notify({
                    // <i class="fas fa-lightbulb warning"></i> 
                    title: 'WARNING',
                    text: string,
                    // type:'warn'
                })
            }
        },
        ///
        //////////////////////// 推播框設定 end /////////////////////
    },
    watch: {
	}
}
</script>