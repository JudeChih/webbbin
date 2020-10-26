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
                                <a href="/transaction-list#/transaction">紀錄列表</a>
                                <a href="javascript:void(0)" @click="changeRouter('list')">使用者列表</a>
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
            <a href="javascript:void(0)" @click="changeRouter('personal&modify&'+userdata.ud_id)" class="btn staut-edit">{{userdata.ud_name}}</a>
            <a href="/logout" title="登出" class="btn staut-logout">登出</a>
        </div>
        <!--content-->
        <div v-if="nowView == 'list' && userClass == 'admin' && userdata.ud_admin" class="content-wrap clearfix">
            <div class="content-title clearfix">
                使用者列表
                <p>共有<span class="text-nar">{{total}}</span>個使用者</p>
                <a href="javascript:void(0)" @click="changeRouter('create')" class="btn btn-cancel content-righttop-btn">
                    <span class="fa"></span>新增使用者
                </a>
            </div>
            <!-- 上方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="page" :page-count="count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                <div id="searchWrap">
                    <input type="text" name="ud_name" class="search-bar" v-model="ud_name" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                    <input v-if="ud_name != ''" @click="ud_name = '',getUsers()" type="button" class="close-btn">
                    <input v-else type="button" class="search-btn" value="">
                </div>
            </div>
            <div class="content-body clearfix">
                <table class="table-list">
                    <thead>
                        <tr class="table-list-user">
                            <td class="tNum">序號</td>
                            <td class="tName">名稱</td>
                            <td class="tId">帳號</td>
                            <td class="tPw">密碼</td>
                            <td class="tPer">權限</td>
                            <td class="tStaut">狀態</td>
                            <td class="tDate">最後一次登入</td>
                            <td class="tEdit">編輯</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="showUser == 1" v-for="(item,index) in newUsers">
                            <td>
                                {{index+1+(page-1)*15}}
                            </td>
                            <td class="tLeft table-username">
                                <a href="javascript:void(0)" @click="changeRouter('admin&modify&'+item.ud_id)">
                                    {{item.ud_name}}
                                </a>
                            </td>
                            <td class="tLeft">{{item.ud_account}}</td>
                            <td class="tLeft">{{item.ud_password}}</td>
                            <td v-text="item.ud_admin == 1 ? '管理員' : '一般使用者'"></td>
                            <td>
                                <span :class="item.ud_status == 1 ? '' : 'text-warning'" v-text="item.ud_status == 1 ? '啟用中' : '停用中'">啟用中</span>
                            </td>
                            <td v-text="item.ud_last_login ? item.ud_last_login : '尚未登入過'">
                            </td>
                            <td class="tLink">
                                <a href="javascript:void(0)" @click="changeRouter('admin&modify&'+item.ud_id)" class="btn btn-s">編輯</a>
                                <button @click="deleteUser(item.ud_id)" type="button" class="btn btn-s btn-s-del">刪除</button>
                            </td>
                        </tr>
                        <tr v-else-if="showUser == 2">
                            <td colspan="6">查無相符的使用者資料</td>
                        </tr>
                        <tr v-else-if="showUser == 3">
                            <td colspan="6">目前暫無使用者資料</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 下方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="page" :page-count="count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
            </div>
        </div>
        <div v-else-if="nowView == 'modify' && userClass == 'personal'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                個人資料<span class="text-nar">Admin</span>
            </div>
            <div class="content-body clearfix">
                <table class="table-order">
                    <tr class="table-sepa">
                        <td>使用者帳號</td>
                        <td><span>{{userdata.ud_account}}</span></td>
                    </tr>
                    <tr class="isname">
                        <td>使用者名稱</td>
                        <td><input type="text" name="ud_name" v-model="userdata.ud_name"></td>
                    </tr>
                    <tr class="table-sepa">
                        <td>舊密碼</td>
                        <td><input class="check_unit" v-model="user.ud_password" type="password" v-tooltip="'請輸入舊密碼'" name="ud_password"></td>
                    </tr>
                    <tr>
                        <td>新密碼</td>
                        <td><input class="check_unit" v-model="user.ud_new_password" type="password" v-tooltip="'請輸入新密碼'" name="ud_new_password"></td>
                    </tr>
                    <tr>
                        <td>確認密碼</td>
                        <td><input class="check_unit" v-model="user.ud_new_password_confirm" type="password" v-tooltip="'請再次輸入新密碼'" name="ud_new_password_confirm"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel">返回</a>
                            <button @click="modifyUser()" type="button" class="btn_save">送出</button>
                            
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-else-if="nowView == 'modify' && userClass == 'admin' && userdata.ud_admin" class="content-wrap clearfix">
            <div class="content-title clearfix">
                使用者資料<span class="text-nar">{{ user.ud_name }}</span>
            </div>
            <div class="content-body clearfix">
                <table class="table-order">
                    <tr class="table-sepa isaccount">
                        <td>使用者帳號</td>
                        <td><span>{{ user.ud_account }}</span></td>
                    </tr>
                    <tr class="isname">
                        <td>使用者名稱</td>
                        <td><input type="text" v-model="user.ud_name" class="check_unit" name="ud_name" v-tooltip="'請輸入使用者名稱'"></td>
                    </tr>
                    <tr class="isstatus">
                        <td>使用者狀態</td>
                        <td class="js-table-btn">
                            <button type="button" :class="user.ud_status == 1 ? 'table-active':''" class="table-enable" @click="user.ud_status = 1">啟用</button>
                            <button type="button" :class="user.ud_status == 0 ? 'table-active':''" class="table-disable" @click="user.ud_status = 0">停用</button>
                        </td>
                    </tr>
                    <tr class="isadmin">
                        <td>使用者權限</td>
                        <td>
                            <p>
                                <input name="isadmin" id="normaluser" type="radio" v-model="user.ud_admin" value="0" checked="checked">
                                <label name="isadmin" for="normaluser">一般使用者</label>
                            </p>
                            <p>
                                <input name="isadmin" id="adminuser" type="radio" v-model="user.ud_admin" value="1">
                                <label name="isadmin" for="adminuser">管理員</label>
                            </p>
                        </td>
                    </tr>
                    <tr class="table-sepa ispass">
                        <td>修改密碼</td>
                        <td><input type="password" class="check_unit" name="ud_new_password" v-model="user.ud_new_password" v-tooltip="'需要修改密碼再填寫'"></td>
                    </tr>
                    <tr class="">
                        <td></td>
                        <td>
                            <button @click="modifyUser()" type="button" class="btn_save">送出</button>
                            <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel">返回</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-else-if="nowView == 'create' && userClass == 'admin' && userdata.ud_admin" class="content-wrap clearfix">
            <div class="content-title clearfix">
                新增使用者
            </div>
            <div class="content-body clearfix">
                <table class="table-order">
                    <tr class="table-sepa isaccount">
                        <td>使用者帳號</td>
                        <td><input type="text" v-model="user.ud_account" class="check_unit" name="ud_account" v-tooltip="'請輸入使用者帳號'"></td>
                    </tr>
                    <tr class="ispass">
                        <td>使用者密碼</td>
                        <td><input type="password" v-model="user.ud_password" class="check_unit" name="ud_password" v-tooltip="'請輸入使用者密碼'"></td>
                    </tr>
                    <tr class="isname">
                        <td>使用者名稱</td>
                        <td><input type="text" v-model="user.ud_name" class="check_unit" name="ud_name" v-tooltip="'請輸入使用者名稱'"></td>
                    </tr>
                    <tr class="isstatus">
                        <td>使用者狀態</td>
                        <td class="js-table-btn">
                            <button type="button" :class="user.ud_status == 1 ? 'table-active':''" class="table-enable" @click="user.ud_status = 1">啟用</button>
                            <button type="button" :class="user.ud_status == 0 ? 'table-active':''" class="table-disable" @click="user.ud_status = 0">停用</button>
                        </td>
                    </tr>
                    <tr class="isadmin">
                        <td>使用者權限</td>
                        <td>
                            <p>
                                <input name="isadmin" id="normaluser" type="radio" v-model="user.ud_admin" value="0" checked="checked">
                                <label name="isadmin" for="normaluser">一般使用者</label>
                            </p>
                            <p>
                                <input name="isadmin" id="adminuser" type="radio" v-model="user.ud_admin" value="1">
                                <label name="isadmin" for="adminuser">管理員</label>
                            </p>
                        </td>
                    </tr>
                    <tr class="">
                        <td></td>
                        <td>
                            <button @click="createUser()" type="button" class="btn_save">送出</button>
                            <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel">返回</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-else class="content-wrap clearfix">
            <div class="page-title">
                <div class="content-title">
                    你不是管理員，無法瀏覽此頁面。
                </div>
            </div>
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
            userClass:'personal', // 使用者權限 personal:一般使用者 admin:管理員
            //各式資料////////////////////////////////////////////////////
            users:[], // 全部使用者資料
            user:{}, // 單一使用者資料
            userdata:[], // 使用者資料
            //頁碼相關////////////////////////////////////////////////////
            limit:15, //每頁數的筆數
            page:1, // 目前頁數
            //搜尋相關////////////////////////////////////////////////////
            composing:true, // 監聽搜尋框輸入
            ud_name:'', // 搜尋字串
            //線上路徑////////////////////////////////////////////////////
            webbbin_front:'http://web.bbinpartner.com', // 前端路徑
            webbbin_back:'http://wms.bbinpartner.com', // 後端路徑
            rentSearch:'http://rent.bbinpartner.com', // 租網路徑
            //修改頁面////////////////////////////////////////////////////
            ud_id:'', // 修改目標的使用者編號
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
        newUsers:function(){
            let self = this;
            if(self.users){
                if(self.users.length > 0){
                    if(self.limit == 'all'){
                        return self.users;
                    }else{
                        var start = (parseInt(self.page) - 1) * parseInt(self.limit);
                        return self.users.slice(start, start + parseInt(self.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        total:function(){ // 使用者總數
            let self = this;
            if(self.users){
                return self.users.length;
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
        showUser:function(){// 1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(!self.users){
                return 3;
            }else{
                if(self.users.length > 0){
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
        // 版型資料初始化
        initUser:function(){
            let self = this;
            this.user = {};
            this.user = Object.assign({}, this.user, {
                ud_name: '',
                ud_account: '',
                ud_password: '',
                ud_status: 0,
                ud_admin: 0,
                ud_last_login: ''
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
        // 更換router
        changeRouter:function(view){
            let self = this;
            if(view != ''){
                if(view == 'create'){
                    self.nowView = 'create';
                    self.userClass = 'admin';
                    self.initUser();
                    this.$router.replace('admin&create').catch(err => {});
                }else if(view.indexOf('modify') != -1){
                    if(view.indexOf('&') != -1){
                        var val_array = view.split('&');
                        if(val_array[2] != ''){
                            if(val_array[0] == 'admin'){
                                self.getUser(val_array[2]);
                            }else if(val_array[0] == 'personal'){
                                self.initUser();
                            }
                            self.nowView = 'modify';
                            self.userClass = val_array[0];
                            this.$router.replace(val_array[0]+'&modify&'+val_array[2]).catch(err => {});
                        }else{
                            self.nowView = 'list';
                            self.userClass = 'admin';
                            this.$router.replace('admin&list').catch(err => {});
                        }
                    }else{
                        self.nowView = 'list';
                        self.userClass = 'admin';
                        this.$router.replace('admin&list').catch(err => {});
                    }
                }else{
                    self.nowView = 'list';
                    self.userClass = 'admin';
                    this.$router.replace('admin&list').catch(err => {});
                }
            }else{
                self.nowView = 'list';
                self.userClass = 'admin';
                this.$router.replace('admin&list').catch(err => {});
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
                    self.getUsers();
                }
            },10)
        },
        ///
        //////////////////////// 查詢功能 end ////////////////////

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
        //取得使用者全部資料
        getAllData:function(){
            let self = this;
            
            axios.get('../user-all-data')
                .then(function (response) {
                    if(response.data.ud_name){
                        self.ud_name = response.data.ud_name;
                    }else{
                        self.ud_name = '';
                    }
                    self.users = response.data.users;
                    self.userdata = response.data.userdata;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得使用者資料
        getUsers:function(){
            let self = this;

            axios.get('../users?ud_name='+self.ud_name)
                .then(function (response) {
                    self.users = response.data.users;
                    if(response.data.ud_name){
                        self.ud_name = response.data.ud_name;
                    }else{
                        self.ud_name = '';
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得單一使用者資料
        getUser:function(id){
            let self = this;
            axios.get('../user?ud_id='+id)
                .then(function (response) {
                    self.user = response.data;
                    self.ud_id = id;
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
        //新增使用者
        createUser:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //帳號
            if(!self.user.ud_account){
                self.notification('請輸入使用者帳號','warning');
                return false;
            }
            //密碼
            if(!self.user.ud_password){
                self.notification('請輸入使用者密碼','warning');
                return false;
            }
            //名稱
            if(!self.user.ud_name){
                self.notification('請輸入使用者名稱','warning');
                return false;
            }
            
            // 回傳修改
            axios.post('/user-create',self.user) //新增 - 使用者資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.user = {};
                        self.changeRouter('list');
                        self.getUsers();
                        self.notification('新增成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification(response,'failure');
                });
        },
        ///
        //////////////////////// 新增區塊 end ////////////////////////

        //////////////////////// 修改區塊 ////////////////////////
        ///
        //修改使用者資料
        modifyUser:function(){
            let self = this;
            if(self.userClass == 'personal'){
                /// 檢查必填欄位是否傳入
                //名稱
                if(!self.userdata.ud_name){
                    self.notification('請輸入使用者名稱','warning');
                    return false;
                }else{
                    self.user.ud_name = self.userdata.ud_name;
                }
                //舊密碼
                if((self.user.ud_password || self.user.ud_password == 0) && self.user.ud_password != ''){
                    if(!self.user.ud_new_password && self.user.ud_new_password != 0){
                        self.notification('請輸入新密碼','warning');
                        return false;
                    }else if(!self.user.ud_new_password_confirm && self.user.ud_new_password_confirm != 0){
                        self.notification('請輸入確認密碼','warning');
                        return false;
                    }else if(self.user.ud_new_password != self.user.ud_new_password_confirm){
                        self.notification('新密碼和確認密碼不一致','warning');
                        return false;
                    }
                }
                self.user.ud_id = self.userdata.ud_id;
            }else if(self.userClass == 'admin'){
                /// 檢查必填欄位是否傳入
                //名稱
                if(!self.user.ud_name){
                    self.notification('請輸入使用者名稱','warning');
                    return false;
                }
                //新密碼
                if((self.user.ud_new_password || self.user.ud_new_password == 0) && self.user.ud_new_password != ''){
                    if(self.user.ud_new_password == self.user.ud_password){
                        self.notification('新密碼不能跟舊密碼一樣','warning');
                        return false;
                    }else{
                        self.user.ud_password = self.user.ud_new_password;
                    }
                }
            }

            // 回傳修改
            axios.post(self.userClass == 'personal' ? 'user-modify-personal':'/user-modify',self.user) //修改 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.user = {};
                        self.changeRouter('list');
                        self.getUsers();
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
        deleteUser:function(id){
            let self = this;
            var json = {};
            json.ud_id = id;
            
            axios.post('/user-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.user = {};
                        self.changeRouter('list');
                        self.getUsers();
                        self.notification('刪除成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
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