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
                                <a href="/logo-list#/create">新增合作夥伴</a>
                                <a href="/logo-list">合作夥伴列表</a>
                            </div>
                        </li>
                        <li>
                            <a :href="rentSearch" target="_blank">租網檢索</a>
                        </li>
                        <li v-if="userdata.ud_admin">
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">後台管理</a>
                            <div class="drop-group drop-open">
                                <a href="javascript:void(0)" @click="changeRouter('transaction')">紀錄列表</a>
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
        <div v-if="nowView == 'transaction'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                紀錄列表
                <p class="tab-title1"></p>
            </div>
            <div class="content-body clearfix">
                <div id="tab-link">
                    <ul class="clearfix">
                        <li><a href="javascript:void(0)" :class="{'active':nowView == 'transaction'}">異動紀錄</a></li>
                        <li><a @click="nowView = 'userlogin'" href="javascript:void(0)" :class="{'active':nowView == 'userlogin'}">登入紀錄</a></li>
                    </ul>
                </div>
                <div id="tab-content">
                    <table class="table-list">
                        <thead>
                            <tr class="table-list-modify">
                                <td class="tNum">序號</td>
                                <td class="tAct">動作</td>
                                <td class="tCon">內容</td>
                                <td class="tDate">時間</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="showTransaction == 1" v-for="(item,index) in newTransactions">
                                <td v-text='tran_limit == "all" ? index+1 : index+1+(tran_page-1)*tran_limit'></td>

                                <td v-if="item.tr_action == 1" class="create_font" v-text="'新增'"></td>
                                <td v-else-if="item.tr_action == 2" class="modify_font" v-text="'修改'"></td>
                                <td v-else-if="item.tr_action == 3" class="delete_font" v-text="'刪除'"></td>
                                <!-- <td v-else></td> -->

                                <td class="tLeft" v-if="item.tr_action == 1">
                                    <span class="text-tip">{{item.tr_user}}</span>
                                    <span v-if="item.pd_id != null" v-text="'新增一個版型，版型編號為 '+item.pd_id"></span>
                                    <span v-if="item.ld_id != null" v-text="'新增一個合作夥伴，合作夥伴編號為 '+item.ld_id"></span>
                                    <span v-if="item.ud_id != null" v-text="'謹慎的新增一位使用者，使用者編號為 '+item.ud_id"></span>
                                </td>
                                <td class="tLeft" v-else-if="item.tr_action == 2">
                                    <span class="text-tip">{{item.tr_user}}</span>
                                    <span v-if="item.pd_id != null" v-text="'針對版型編號為 '+item.pd_id+' 的版型做了些微調'"></span>
                                    <span v-if="item.ld_id != null" v-text="'針對版型編號為 '+item.ld_id+' 的某些設定'"></span>
                                    <span v-if="item.ud_id != null" v-text="'針對版型編號為 '+item.ud_id+' 的相關資訊'"></span>
                                </td>
                                <td class="tLeft" v-else-if="item.tr_action == 3">
                                    <span class="text-tip">{{item.tr_user}}</span>
                                    <span v-if="item.pd_id != null" v-text="'忍痛刪除版型編號為 '+item.pd_id"></span>
                                    <span v-if="item.ld_id != null" v-text="'非常不捨的刪除合作夥伴編號為 '+item.ld_id"></span>
                                    <span v-if="item.ud_id != null" v-text="'刪除使用者編號為 '+item.ud_id+' 的使用者'"></span>
                                </td>
                                <td colspan="2" v-else>過時的動作資訊，請忽略</td>
                                <td>{{item.create_date}}</td>
                            </tr>
                            <tr v-else-if="showTransaction == 2">
                                <td colspan="4">目前暫無異動紀錄</td>
                            </tr>
                            <tr v-else-if="showTransaction == 3">
                                <td colspan="4">目前暫無異動紀錄</td>
                            </tr>
                        </tbody>
                    </table>
                    <!--pagination-->
                    <div class="paginate_box">
                        <paginate v-model="tran_page" :page-count="tran_count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                        <div class="pagination-select">
                            <select name="page_limit" id="page_limit" @change="tran_page = 1" v-model="tran_limit">
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
            </div>
        </div>
        <div v-if="nowView == 'userlogin'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                紀錄列表
                <p class="tab-title1"></p>
            </div>
            <div class="content-body clearfix">
                <div id="tab-link">
                    <ul class="clearfix">
                        <li><a @click="nowView = 'transaction'" :class="{'active':nowView == 'transaction'}" href="javascript:void(0)">異動紀錄</a></li>
                        <li><a href="javascript:void(0)" :class="{'active':nowView == 'userlogin'}">登入紀錄</a></li>
                    </ul>
                </div>
                <div id="tab-content">
                    <table class="table-list table-login-width">
                        <thead>
                            <tr class="table-list-login-record">
                                <td class="tUser">操作者</td>
                                <td class="tDate">時間</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="showUserlogin == 1" v-for="(item,index) in newUserlogins">
                                <td>
                                    <span class="text-tip">{{item.ud_name}}</span>
                                </td>
                                <td>{{item.ud_last_login}}</td>
                            </tr>
                            <tr v-else-if="showUserlogin == 2">
                                <td colspan="4">目前暫無登入紀錄</td>
                            </tr>
                            <tr v-else-if="showUserlogin == 3">
                                <td colspan="4">目前暫無登入紀錄</td>
                            </tr>
                        </tbody>
                    </table>
                    <!--pagination-->
                    <div class="paginate_box">
                        <paginate v-model="login_page" :page-count="login_count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                        <div class="pagination-select">
                            <select name="page_limit" id="page_limit" @change="login_page = 1" v-model="login_limit">
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
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
	data() {
        return {
            nowView:'transaction', // 現在頁面 transaction:紀錄頁 userlogin:最後登入頁
            //各式資料////////////////////////////////////////////////////
            transactions:[], // 全部異動紀錄資料
            userlogins:[], // 全部使用者最後登入的資料
            userdata:[], // 登入中的使用者資料
            //頁碼相關////////////////////////////////////////////////////
            tran_limit:10, //每頁數的筆數
            tran_page:1, // 目前頁數
            login_limit:10, //每頁數的筆數
            login_page:1, // 目前頁數
            //線上路徑////////////////////////////////////////////////////
            webbbin_front:'http://web.bbinpartner.com', // 前端路徑
            webbbin_back:'http://wms.bbinpartner.com', // 後端路徑
            rentSearch:'http://rent.bbinpartner.com', // 租網路徑
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
        newTransactions:function(){
            let self = this;
            if(self.transactions){
                if(self.transactions.length > 0){
                    if(self.tran_limit == 'all'){
                        return self.transactions;
                    }else{
                        var start = (parseInt(self.tran_page) - 1) * parseInt(self.tran_limit);
                        return self.transactions.slice(start, start + parseInt(self.tran_limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        newUserlogins:function(){
            let self = this;
            if(self.userlogins){
                if(self.userlogins.length > 0){
                    if(self.login_limit == 'all'){
                        return self.userlogins;
                    }else{
                        var start = (parseInt(self.login_page) - 1) * parseInt(self.login_limit);
                        return self.userlogins.slice(start, start + parseInt(self.login_limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        tran_total:function(){ // 合作夥伴總數
            let self = this;
            if(self.transactions){
                return self.transactions.length;
            }else{
                return 0;
            }
        },
        login_total:function(){ // 合作夥伴總數
            let self = this;
            if(self.userlogins){
                return self.userlogins.length;
            }else{
                return 0;
            }
        },
        tran_count:function(){
            let self = this;
            if(self.tran_limit == 'all'){
                self.tran_page = 1;
                return 1;
            }else{
                return Math.ceil(self.tran_total / self.tran_limit)
            }
        },
        login_count:function(){
            let self = this;
            if(self.login_limit == 'all'){
                self.login_page = 1;
                return 1;
            }else{
                return Math.ceil(self.login_total / self.login_limit)
            }
        },
        showTransaction:function(){// 1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(!self.transactions){
                return 3;
            }else{
                if(self.transactions.length > 0){
                    return 1;
                }else{
                    return 2;
                }
            }
        },
        showUserlogin:function(){// 1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(!self.userlogins){
                return 3;
            }else{
                if(self.userlogins.length > 0){
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
        // 更換router
        changeRouter:function(view){
            let self = this;
            if(view != ''){//transaction:紀錄頁 userlogin:最後登入頁
                if(view == 'transaction'){
                    self.nowView = 'transaction';
                    this.$router.replace('transaction').catch(err => {});
                }else if(view == 'userlogin'){
                    self.nowView = 'userlogin';
                    this.$router.replace('userlogin').catch(err => {});
                }else{
                    self.nowView = 'transaction';
                    this.$router.replace('transaction').catch(err => {});
                }
            }else{
                self.nowView = 'transaction';
                this.$router.replace('transaction').catch(err => {});
            }
        },
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
            
            axios.get('../transaction-all-data')
                .then(function (response) {
                    self.transactions = response.data.transactions;
                    self.userlogins = response.data.userlogins;
                    self.userdata = response.data.userdata;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 取值專區 end ////////////////////////

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