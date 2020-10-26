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
                                <a href="javascript:void(0)" @click="changeRouter('create')">新增版型</a>
                                <a href="javascript:void(0)" @click="changeRouter('list')">網版列表</a>
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
                    網版列表<p>共有<span class="text-nar">{{total}}</span>個版</p>
                    <div id="searchWrap">
                        <input type="text" name="pd_num" class="search-bar" v-model="pd_num" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                        <input v-if="pd_num != ''" @click="pd_num = '',getProjects(orderBy)" type="button" class="close-btn">
                        <input v-else type="button" class="search-btn" value="">
                    </div>
                </div>
            </div>
            <!-- 上方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="page" :page-count="count" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="page = 1" v-model="limit">
                        <option value=10>10項 / 頁</option>
                        <option value=50>50項 / 頁</option>
                        <option value="all">全部列出</option>
                    </select>
                </div>
                <div class="model-wrap">
                    <a @click="changeDisplay(display)" href="javascript:void(0)" title="" :class="display == 'image' ? 'model-img' : 'model-list'" class="fa model-btn"></a>
                    <select v-model="orderBy" name="adaptive_order" id="adaptive_order">
                        <option value="pd_date">上架日期排行</option>
                        <option value="pd_hot">熱門項目</option>
                    </select>
                </div>
            </div>
            <!-- list模式 -->
            <div v-if="display == 'list'" class="template-list-wrap clearfix">
                <div class="template-title clearfix">
                    <div class="temp-img">縮圖</div>
                    <div class="temp-name">名稱</div>
                    <div class="temp-date">上線日期</div>
                    <div class="temp-layout">網版佈局</div>
                    <div class="temp-style">網版風格</div>
                    <div class="temp-type">主題</div>
                    <div class="temp-color">
                        色系
                    </div>
                    <div class="temp-staut">
                        狀態
                    </div>
                    <div class="temp-icon">
                        New icon
                    </div>
                    <div class="temp-edit">
                        編輯
                    </div>
                    <div class="temp-demo">
                        Demo
                    </div>
                </div>
                <div class="template-content clearfix">
                    <div v-if="showProject == 1" v-for="item in newProjects" class="template-item">
                        <div class="temp-img">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)"><img :src="item.pd_view_img" alt=""></a>
                        </div>
                        <div class="temp-name">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)" :title="item.pd_num">{{item.pd_num}}</a>
                        </div>
                        <div class="temp-date">
                            {{item.pd_date}}
                        </div>
                        <!-- pd_layout -->
                        <div v-if="item.pd_layout == 1" class="temp-layout">直向大小</div>
                        <div v-else-if="item.pd_layout == 2" class="temp-layout">橫向大小</div>
                        <div v-else-if="item.pd_layout == 3" class="temp-layout">多面切割</div>
                        <div v-else-if="item.pd_layout == 4" class="temp-layout">對角線</div>
                        <div v-else-if="item.pd_layout == 5" class="temp-layout">無規則</div>
                        <!-- pd_style -->
                        <div v-if="item.pd_style == 1" class="temp-style">前衛時尚</div>
                        <div v-else-if="item.pd_style == 2" class="temp-style">復古典雅</div>
                        <div v-else-if="item.pd_style == 3" class="temp-style">精緻華麗</div>
                        <div v-else-if="item.pd_style == 4" class="temp-style">簡約大氣</div>
                        <!-- pd_type -->
                        <div v-if="item.pd_type == 1" class="temp-type">機率</div>
                        <div v-else-if="item.pd_type == 2" class="temp-type">體育</div>
                        <div v-else-if="item.pd_type == 3" class="temp-type">棋牌</div>
                        <div v-else-if="item.pd_type == 4" class="temp-type">視訊</div>
                        <div v-else-if="item.pd_type == 5" class="temp-type">彩票</div>
                        <div v-else-if="item.pd_type == 6" class="temp-type">麻將</div>
                        <div v-else-if="item.pd_type == 7" class="temp-type">捕魚</div>
                        <div v-else class="temp-type">無類型</div>

                        <div class="temp-color alLeft">
                            <span v-for="color in JSON.parse(item.pd_colors)" :class="'color color-'+color"></span>
                            <!-- <span v-if="JSON.parse(item.pd_colors).length == 1" class="color"></span> -->
                        </div>
                        <!-- 狀態顯示 -->
                        <div :class="{'temp-active' :item.pd_show == 1,'temp-staut':true,'js-sv':true}">
                            <a href="javascript:void(0)" @click="modifyShow(item.pd_id,item.pd_show)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 最新顯示 -->
                        <div :class="{'temp-active' :item.pd_new == 1,'temp-icon':true,'js-sv':true}">
                            <a href="javascript:void(0)" @click="modifyNew(item.pd_id,item.pd_new)" class="btn btn-s" title=""></a>
                        </div>
                        <!-- 編輯按鈕 -->
                        <div class="temp-edit js-sv">
                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)" class="btn btn-s" title="編輯"></a>
                        </div>
                        <!-- Demo連結 -->
                        <div class="temp-demo js-sv">
                            <a v-if="item.pd_live == 1" :href="'http://web.bbinpartner.com/demo/'+item.pd_id" target="_blank" class="btn btn-s" title="Demo"></a>
                        </div>
                    </div>
                    <p v-if="showProject == 2">查無相符的固定網版資料</p>
                    <p v-if="showProject == 3">目前暫無固定網版資料</p>
                </div>
            </div>
            <!-- image模式 -->
            <div v-if="display == 'image'" class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap">
                    <div class="x_panel">
                        <div v-if="showProject == 1" v-for="item in newProjects" class="col-lg-4 col-sm-6 col-xs-6">
                            <a href="javascript:void(0)" class="col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item">
                                <div class="item_block">
                                    <div class="image view view-first">
                                        <a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)" class="" :title="item.pd_num"><img style="width: 100%; display: block;" :src="item.pd_view_img" alt="image"></a>
                                    </div>
                                    <div class="caption">
                                        <p><strong><a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)" class="" :title="item.pd_num">{{ item.pd_num }}</a></strong></p>
                                            <a href="javascript:void(0)" @click="changeRouter('modify&'+item.pd_id)" class="modify_url">編輯</a>
                                            <a v-if="item.pd_live && item.pd_live_url != ''" class="live_url" :href="webbbin_front+item.pd_live_url" target="_blank">Demo</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p v-if="showProject == 2">查無相符的固定網版資料</p>
                        <p v-if="showProject == 3">目前暫無固定網版資料</p>
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
                編輯網版
                <span class="text-nar">{{ project.pd_num }}</span>
                <button @click="deleteProject(project.pd_id)" type="button" class="btn btn-del content-righttop-btn">刪除</button>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="isnum">
                    <td>網版名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="pd_num" v-model="project.pd_num" v-tooltip="'請輸入網版名稱'">
                    </td>
                </tr>
                <tr class="isdate">
                    <td>上線日期</td>
                    <td>
                        <label for="" class="fa date-icon"></label>
                        <datepicker id="datepicker" class="date-input check_unit" name="pd_date" v-model="project.pd_date" :format="'yyyy-MM-dd'" v-tooltip="'請選擇上線日期'"></datepicker>
                    </td>
                </tr>
                <tr class="isshow">
                    <td>網版 顯示 & 隱藏</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_show == 1 ? 'table-active':''" class="table-enable" @click="project.pd_show = 1">顯示</button>
                        <button type="button" :class="project.pd_show == 0 ? 'table-active':''" class="table-disable" @click="project.pd_show = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isnew">
                    <td>顯示new icon</td>
                    <td class="js-table-btn ">
                        <button type="button" :class="project.pd_new == 1 ? 'table-active':''" class="table-enable" @click="project.pd_new = 1">顯示</button>
                        <button type="button" :class="project.pd_new == 0 ? 'table-active':''" class="table-disable" @click="project.pd_new = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ishot">
                    <td>熱門版型</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_hot == 1 ? 'table-active':''" class="table-enable" @click="project.pd_hot = 1">是</button>
                        <button type="button" :class="project.pd_hot == 0 ? 'table-active':''" class="table-disable" @click="project.pd_hot = 0">否</button>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">風格設定</td>
                </tr>
                <tr class="islayout">
                    <td>網版布局</td>
                    <td>
                        <select name="pd_layout" id="pd_layout" v-model="project.pd_layout">
                            <option value="1">直向大小</option>
                            <option value="2">橫向大小</option>
                            <option value="3">多面切割</option>
                            <option value="4">對角線</option>
                            <option value="5">無規則</option>
                        </select>
                    </td>
                </tr>
                <tr class="isstyle">
                    <td>網版風格</td>
                    <td>
                        <select name="pd_style" id="pd_style" v-model="project.pd_style">
                            <option value="1">前衛時尚</option>
                            <option value="2">復古典雅</option>
                            <option value="3">精緻華麗</option>
                            <option value="4">簡約大氣</option>
                        </select>
                    </td>
                </tr>
                <tr class="istype">
                    <td>主題類型</td>
                    <td>
                        <select name="pd_type" id="pd_type" v-model="project.pd_type">
                            <option value="0">無類型</option>
                            <option value="1">機率</option>
                            <option value="2">體育</option>
                            <option value="3">棋牌</option>
                            <option value="4">視訊</option>
                            <option value="5">彩票</option>
                            <option value="6">麻將</option>
                            <option value="7">捕魚</option>
                        </select>
                    </td>
                </tr>
                <tr class="iscolor">
                    <td>網版色系</td>
                    <td class="js-color-pick">
                        <p class="fa check_unit" v-tooltip="'至少選擇一個色系，最多三個'">
                            <span @click="select_color('white')" :class="check_color('white') ? 'color-active' : ''" class="color color-white" data-value="white"></span>
                            <span @click="select_color('gray')" :class="check_color('gray') ? 'color-active' : ''" class="color color-gray" data-value="gray"></span>
                            <span @click="select_color('black')" :class="check_color('black') ? 'color-active' : ''" class="color color-black" data-value="black"></span>
                            <span @click="select_color('blue')" :class="check_color('blue') ? 'color-active' : ''" class="color color-blue" data-value="blue"></span>
                            <span @click="select_color('green')" :class="check_color('green') ? 'color-active' : ''" class="color color-green" data-value="green"></span>
                            <span @click="select_color('yellow')" :class="check_color('yellow') ? 'color-active' : ''" class="color color-yellow" data-value="yellow"></span>
                            <span @click="select_color('coffee')" :class="check_color('coffee') ? 'color-active' : ''" class="color color-coffee" data-value="coffee"></span>
                            <span @click="select_color('orange')" :class="check_color('orange') ? 'color-active' : ''" class="color color-orange" data-value="orange"></span>
                            <span @click="select_color('red')" :class="check_color('red') ? 'color-active' : ''" class="color color-red" data-value="red"></span>
                            <span @click="select_color('pink')" :class="check_color('pink') ? 'color-active' : ''" class="color color-pink" data-value="pink"></span>
                            <span @click="select_color('purple')" :class="check_color('purple') ? 'color-active' : ''" class="color color-purple" data-value="purple"></span>
                        </p>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">版面設定</td>
                </tr>
                <tr class="islive">
                    <td>網版Demo</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_live == 1 ? 'table-active':''" class="table-enable" @click="project.pd_live = 1">有</button>
                        <button type="button" :class="project.pd_live == 0 ? 'table-active':''" class="table-disable" @click="project.pd_live = 0">無</button>
                        <div v-show="project.pd_live" class="hide_or_show">
                            <div class="table-copy-btn">
                                <input type="hidden" id="pd_live_demo_url" value="">
                                <input type="text" class="check_unit" id="pd_live_url" name="pd_live_url" v-tooltip="'請輸入Demo路徑'" v-model="project.pd_live_url">
                                <button @click="add_url()" type="button" class="btn btn-path btn_add_url">產生路徑</button>
                                <button @click="initClipboard()" ref="copyUrl" type="button" class="btn btn-copy btn_copy_url"><span class="fa"></span></button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="isviewimg">
                    <td>列表圖上傳</td>
                    <td class="check_unit">
                        <input type="text" class="url_readonly check_unit" id="pd_view_img" name="pd_view_img" v-model="project.pd_view_img" v-tooltip="'請上傳列表圖'">
                        <button @click="openFilemanager('pd_view_img')" type="button" class="btn btn-upload pd_view_img" data-input="pd_view_img" data-preview="holder">檔案上傳</button>
                        
                    </td>
                </tr>
                
                <tr class="isbannerimg">
                    <td>Banner上傳</td>
                    <td class="check_unit">
                        <input type="text" class=" url_readonly" id="pd_banner_img" name="pd_banner_img" v-model="project.pd_banner_img" v-tooltip="'請上傳Banner'">
                        <button @click="openFilemanager('pd_banner_img')" type="button" class="btn btn-upload pd_banner_img" data-input="pd_banner_img" data-preview="holder">檔案上傳</button>
                    </td>
                </tr>
                <tr class="istemplateimg">
                    <td>示意圖上傳</td>
                    <td>
                        <div class="image_block">
                            <div v-if="pd_template_img.length > 0" v-for="(item, index) in pd_template_img" class="js-img-wrap template_image">
                                <p class="table-template-edit-add clearfix">
                                    <input type="text" class="url_readonly" v-model="pd_template_img[index]" :name="'templateimage_'+index" :id="'templateimage_'+index" v-tooltip="'請上傳'">
                                    <button @click="openFilemanager('templateimage_'+index)" type="button" :class="'templateimage_'+index" class="btn btn-upload btn_upload_img" :data-input="'templateimage_'+index" data-preview="holder">檔案上傳</button>
                                    <button type="button" @click="deleteTemplateImg(index)"  class="btn btn-del-circle js-del-input_i btn_remove_img">
                                        <span class="fa"></span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <button @click="addTemplateImage()" type="button" class="btn btn-add-item js-add-img btn_add_img">
                            <span class="fa"></span>新增圖片
                        </button>
                    </td>
                </tr>
                <tr class="ismodelimg">
                    <td>Model圖上傳</td>
                    <td>
                        <div class="image_model_block">
                            <div v-if="pd_model_img.length > 0" v-for="(item, index) in pd_model_img" class="js-img-wrap model_image">
                                <p class="table-template-edit-add clearfix">
                                    <input type="text" class="url_readonly" v-model="pd_model_img[index]" :name="'modelimage_'+index" :id="'modelimage_'+index">
                                    <button @click="openFilemanager('modelimage_'+index)" type="button" :class="'modelimage_'+index" class="btn btn-upload btn_upload_img" :data-input="'modelimage_'+index" data-preview="holder">檔案上傳</button>
                                    <button type="button" @click="deleteModelImg(index)"  class="btn btn-del-circle js-del-input_i btn_remove_img">
                                        <span class="fa"></span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <button @click="addModelImage()" type="button" class="btn btn-add-item js-add-model btn_add_img_model">
                            <span class="fa"></span>新增圖片
                        </button>
                    </td>
                </tr>
                <tr class="isnotice">
                    <td>注意事項</td>
                    <td>
                        <textarea class="" name="pd_notices" v-model="project.pd_notices"></textarea>
                        <p class="text-warning">＊兩行以上請加入，區隔
                        </p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="modifyProject()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowView == 'create'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                新增網版
                <span class="text-nar">create</span>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="isnum">
                    <td>網版名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="pd_num" v-model="project.pd_num" v-tooltip="'請輸入網版名稱'">
                    </td>
                </tr>
                <tr class="isdate">
                    <td>上線日期</td>
                    <td>
                        <label for="" class="fa date-icon"></label>
                        <datepicker id="datepicker" class="date-input check_unit" name="pd_date" v-model="project.pd_date" :format="'yyyy-MM-dd'" v-tooltip="'請選擇上線日期'"></datepicker>
                    </td>
                </tr>
                <tr class="isshow">
                    <td>網版 顯示 & 隱藏</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_show == 1 ? 'table-active':''" class="table-enable" @click="project.pd_show = 1">顯示</button>
                        <button type="button" :class="project.pd_show == 0 ? 'table-active':''" class="table-disable" @click="project.pd_show = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isnew">
                    <td>顯示new icon</td>
                    <td class="js-table-btn ">
                        <button type="button" :class="project.pd_new == 1 ? 'table-active':''" class="table-enable" @click="project.pd_new = 1">顯示</button>
                        <button type="button" :class="project.pd_new == 0 ? 'table-active':''" class="table-disable" @click="project.pd_new = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ishot">
                    <td>熱門版型</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_hot == 1 ? 'table-active':''" class="table-enable" @click="project.pd_hot = 1">是</button>
                        <button type="button" :class="project.pd_hot == 0 ? 'table-active':''" class="table-disable" @click="project.pd_hot = 0">否</button>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">風格設定</td>
                </tr>
                <tr class="islayout">
                    <td>網版布局</td>
                    <td>
                        <select name="pd_layout" id="pd_layout" v-model="project.pd_layout">
                            <option value="1">直向大小</option>
                            <option value="2">橫向大小</option>
                            <option value="3">多面切割</option>
                            <option value="4">對角線</option>
                            <option value="5">無規則</option>
                        </select>
                    </td>
                </tr>
                <tr class="isstyle">
                    <td>網版風格</td>
                    <td>
                        <select name="pd_style" id="pd_style" v-model="project.pd_style">
                            <option value="1">前衛時尚</option>
                            <option value="2">復古典雅</option>
                            <option value="3">精緻華麗</option>
                            <option value="4">簡約大氣</option>
                        </select>
                    </td>
                </tr>
                <tr class="istype">
                    <td>主題類型</td>
                    <td>
                        <select name="pd_type" id="pd_type" v-model="project.pd_type">
                            <option value="0">無類型</option>
                            <option value="1">機率</option>
                            <option value="2">體育</option>
                            <option value="3">棋牌</option>
                            <option value="4">視訊</option>
                            <option value="5">彩票</option>
                            <option value="6">麻將</option>
                            <option value="7">捕魚</option>
                        </select>
                    </td>
                </tr>
                <tr class="iscolor">
                    <td>網版色系</td>
                    <td class="js-color-pick">
                        <p class="fa check_unit" v-tooltip="'至少選擇一個色系，最多三個'">
                            <span @click="select_color('white')" :class="check_color('white') ? 'color-active' : ''" class="color color-white" data-value="white"></span>
                            <span @click="select_color('gray')" :class="check_color('gray') ? 'color-active' : ''" class="color color-gray" data-value="gray"></span>
                            <span @click="select_color('black')" :class="check_color('black') ? 'color-active' : ''" class="color color-black" data-value="black"></span>
                            <span @click="select_color('blue')" :class="check_color('blue') ? 'color-active' : ''" class="color color-blue" data-value="blue"></span>
                            <span @click="select_color('green')" :class="check_color('green') ? 'color-active' : ''" class="color color-green" data-value="green"></span>
                            <span @click="select_color('yellow')" :class="check_color('yellow') ? 'color-active' : ''" class="color color-yellow" data-value="yellow"></span>
                            <span @click="select_color('coffee')" :class="check_color('coffee') ? 'color-active' : ''" class="color color-coffee" data-value="coffee"></span>
                            <span @click="select_color('orange')" :class="check_color('orange') ? 'color-active' : ''" class="color color-orange" data-value="orange"></span>
                            <span @click="select_color('red')" :class="check_color('red') ? 'color-active' : ''" class="color color-red" data-value="red"></span>
                            <span @click="select_color('pink')" :class="check_color('pink') ? 'color-active' : ''" class="color color-pink" data-value="pink"></span>
                            <span @click="select_color('purple')" :class="check_color('purple') ? 'color-active' : ''" class="color color-purple" data-value="purple"></span>
                        </p>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">版面設定</td>
                </tr>
                <tr class="islive">
                    <td>網版Demo</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.pd_live == 1 ? 'table-active':''" class="table-enable" @click="project.pd_live = 1">有</button>
                        <button type="button" :class="project.pd_live == 0 ? 'table-active':''" class="table-disable" @click="project.pd_live = 0">無</button>
                        <div v-show="project.pd_live" class="hide_or_show">
                            <div class="table-copy-btn">
                                <input type="hidden" id="pd_live_demo_url" value="">
                                <input type="text" class="check_unit" id="pd_live_url" name="pd_live_url" v-tooltip="'請輸入Demo路徑'" v-model="project.pd_live_url">
                                <button @click="add_url()" type="button" class="btn btn-path btn_add_url">產生路徑</button>
                                <button @click="initClipboard()" ref="copyUrl" type="button" class="btn btn-copy btn_copy_url"><span class="fa"></span></button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="isviewimg">
                    <td>列表圖上傳</td>
                    <td class="check_unit">
                        <input type="text" class="url_readonly check_unit" id="pd_view_img" name="pd_view_img" v-model="project.pd_view_img" v-tooltip="'請上傳列表圖'">
                        <button @click="openFilemanager('pd_view_img')" type="button" class="btn btn-upload pd_view_img" data-input="pd_view_img" data-preview="holder">檔案上傳</button>
                        
                    </td>
                </tr>
                
                <tr class="isbannerimg">
                    <td>Banner上傳</td>
                    <td class="check_unit">
                        <input type="text" class=" url_readonly" id="pd_banner_img" name="pd_banner_img" v-model="project.pd_banner_img" v-tooltip="'請上傳Banner'">
                        <button @click="openFilemanager('pd_banner_img')" type="button" class="btn btn-upload pd_banner_img" data-input="pd_banner_img" data-preview="holder">檔案上傳</button>
                    </td>
                </tr>
                <tr class="istemplateimg">
                    <td>示意圖上傳</td>
                    <td>
                        <div class="image_block">
                            <div v-if="pd_template_img.length > 0" v-for="(item, index) in pd_template_img" class="js-img-wrap template_image">
                                <p class="table-template-edit-add clearfix">
                                    <input type="text" class="url_readonly" v-model="pd_template_img[index]" :name="'templateimage_'+index" :id="'templateimage_'+index" v-tooltip="'請上傳'">
                                    <button @click="openFilemanager('templateimage_'+index)" type="button" :class="'templateimage_'+index" class="btn btn-upload btn_upload_img" :data-input="'templateimage_'+index" data-preview="holder">檔案上傳</button>
                                    <button type="button" @click="deleteTemplateImg(index)"  class="btn btn-del-circle js-del-input_i btn_remove_img">
                                        <span class="fa"></span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <button @click="addTemplateImage()" type="button" class="btn btn-add-item js-add-img btn_add_img">
                            <span class="fa"></span>新增圖片
                        </button>
                    </td>
                </tr>
                <tr class="ismodelimg">
                    <td>Model圖上傳</td>
                    <td>
                        <div class="image_model_block">
                            <div v-if="pd_model_img.length > 0" v-for="(item, index) in pd_model_img" class="js-img-wrap model_image">
                                <p class="table-template-edit-add clearfix">
                                    <input type="text" class="url_readonly" v-model="pd_model_img[index]" :name="'modelimage_'+index" :id="'modelimage_'+index">
                                    <button @click="openFilemanager('modelimage_'+index)" type="button" :class="'modelimage_'+index" class="btn btn-upload btn_upload_img" :data-input="'modelimage_'+index" data-preview="holder">檔案上傳</button>
                                    <button type="button" @click="deleteModelImg(index)"  class="btn btn-del-circle js-del-input_i btn_remove_img">
                                        <span class="fa"></span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <button @click="addModelImage()" type="button" class="btn btn-add-item js-add-model btn_add_img_model">
                            <span class="fa"></span>新增圖片
                        </button>
                    </td>
                </tr>
                <tr class="isnotice">
                    <td>注意事項</td>
                    <td>
                        <textarea class="" name="pd_notices" v-model="project.pd_notices"></textarea>
                        <p class="text-warning">＊兩行以上請加入，區隔
                        </p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="createProject()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <notifications position='top center'/>
        <!-- <file-manager></file-manager> -->
    </div>
</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
import Clipboard from "clipboard";
export default {
    components: {
        Datepicker,
        Clipboard
    },
	data() {
        return {
            nowView:'list', // 現在頁面 list:列表頁 create:新增頁 modify:修改頁
            display:'list', // 列表顯示方式 list or image
            orderBy:'pd_date', // 網版列表排序
            //各式資料////////////////////////////////////////////////////
            projects:[], // 全部固定網版資料
            project:{}, // 單一固定網版資料
            userdata:[], // 使用者資料
            //頁碼相關////////////////////////////////////////////////////
            limit:10, //每頁數的筆數
            page:1, // 目前頁數
            //搜尋相關////////////////////////////////////////////////////
            composing:true, // 監聽搜尋框輸入
            pd_num:'', // 搜尋字串
            //線上路徑////////////////////////////////////////////////////
            webbbin_front:'http://web.bbinpartner.com', // 前端路徑
            webbbin_back:'http://wms.bbinpartner.com', // 後端路徑
            rentSearch:'http://rent.bbinpartner.com', // 租網路徑
            //資料夾路徑//////////////////////////////////////////////////
            live_demo:'/_template/',
            //修改頁面////////////////////////////////////////////////////
            pd_id:'', // 修改目標的版型編號
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
        newProjects:function(){
            let self = this;
            if(self.projects){
                if(self.projects.length > 0){
                    if(self.limit == 'all'){
                        return self.projects;
                    }else{
                        var start = (parseInt(self.page) - 1) * parseInt(self.limit);
                        return self.projects.slice(start, start + parseInt(self.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        total:function(){ // 版型總數
            let self = this;
            if(self.projects){
                return self.projects.length;
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
        showProject:function(){// 1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(!self.projects){
                return 3;
            }else{
                if(self.projects.length > 0){
                    return 1;
                }else{
                    return 2;
                }
            }
        },
        pd_template_img:function(){//示意圖
            let self = this;
            if(self.project.pd_template_img){
                return JSON.parse(self.project.pd_template_img);
            }else{
                return [];
            }
            
        },
        pd_model_img:function(){//Model圖
            let self = this;
            if(self.project.pd_model_img){
                return JSON.parse(self.project.pd_model_img);
            }else{
                return [];
            }
        }
   	},
    methods: {
        // 頁面初始化
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
        initProject:function(){
            let self = this;
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
                pd_colors:'[]',
                pd_view_img:'',
                pd_template_img:'[]',
                pd_banner_img:'',
                pd_model_img:'[]',
            })
        },
        // 初始化複製功能
        initClipboard(){
            let self = this;
            // 創建
            const clipboard = new Clipboard(this.$refs.copyUrl,{
                text: function(){
                    return self.webbbin_front + self.project.pd_live_url;
                }
            });
            clipboard.on('success', (e) => {
                self.notification('複製成功','success');
            });
            clipboard.on('error', (e) => {
                self.notification('複製失敗','failure');
            });
            // 點擊
            this.$refs.copyUrl.click();
            // 清除
            clipboard.destroy();
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

                    if(target == 'pd_view_img'){
                        self.project.pd_view_img = file_path;
                    }else if(target == 'pd_banner_img'){
                        self.project.pd_banner_img = file_path;
                    }else if(target.indexOf('template') != -1){
                        var array = target.split('_');
                        self.pd_template_img[array[1]] = file_path;
                        self.project.pd_template_img = JSON.stringify(self.pd_template_img);
                    }else if(target.indexOf('model') != -1){
                        var array = target.split('_');
                        self.pd_model_img[array[1]] = file_path;
                        self.project.pd_model_img = JSON.stringify(self.pd_model_img);
                    }
                    

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
                    self.initProject();
                    this.$router.replace('create').catch(err => {});
                }else if(view.indexOf('modify') != -1){
                    if(view.indexOf('&') != -1){
                        var val_array = view.split('&');
                        if(val_array[1] != ''){
                            self.getProject(val_array[1]);
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
        // 選擇色系
        select_color:function(color){
            let self = this;
            if(self.project.pd_colors || self.project.pd_colors == '[]'){
                var pd_colors = JSON.parse(self.project.pd_colors);
                var array = [];
                if(self.check_color(color)){
                    for (let i = 0; i < pd_colors.length; i++) {
                        if(pd_colors[i] != color){
                            array.push(pd_colors[i]);
                        }
                    }
                    // if(self.nowView == 'create'){
                    //     $('.color-'+color).removeClass('color-active');
                    // }
                    self.project.pd_colors = JSON.stringify(array);
                }else{
                    if(pd_colors.length > 2){
                        self.notification('最多選擇三個色系','warning');
                    }else{
                        pd_colors.push(color);
                        // if(self.nowView == 'create'){
                        //     $('.color-'+color).addClass('color-active');
                        // }
                        self.project.pd_colors = JSON.stringify(pd_colors);
                    }
                    
                }
            }else{
                var array = [];
                array.push(color);
                // if(self.nowView == 'create'){
                //     $('.color-'+color).addClass('color-active');
                // }
                self.project.pd_colors = JSON.stringify(array);
            }
                
        },
        // 產生路徑
        add_url:function(){
            let self = this;
            if(!self.project.pd_num){
                self.notification('請先輸入網版名稱','failure');
            }else{
                self.project.pd_live_url = self.live_demo + self.project.pd_num;
            }
        },
        // 刪除示意圖
        deleteTemplateImg:function(index){
            let self = this;
            var array = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != '' && $(this).index() != index){
                    array.push($(this).find('input').val());
                }
            })
            self.project.pd_template_img = JSON.stringify(array);
        },
        // 刪除Model圖
        deleteModelImg:function(index){
            let self = this;
            var array = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != '' && $(this).index() != index){
                    array.push($(this).find('input').val());
                }
            })
            self.project.pd_model_img = JSON.stringify(array);
        },
        // 新增示意圖
        addTemplateImage:function(){
            let self = this;
            var array = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != ''){
                    array.push($(this).find('input').val());
                }
            })
            array.push('')
            self.project.pd_template_img = JSON.stringify(array);
        },
        // 新增Model圖
        addModelImage:function(){
            let self = this;
            var array = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != ''){
                    array.push($(this).find('input').val());
                }
            })
            array.push('');
            self.project.pd_model_img = JSON.stringify(array);
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
                    self.getProjects(self.orderBy);
                }
            },10)
        },
        ///
        //////////////////////// 查詢功能 end //////////////////

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
        // 檢查該網版色系
        check_color:function(color){
            let self = this;

            if(self.project.pd_colors){
                if(self.project.pd_colors.indexOf(color) != -1){
                    return true;
                }else{
                    return false;
                }
            }
        },
        ///
        //////////////////////// 檢查各項目 end //////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得版型全部資料
        getAllData:function(){
            let self = this;
            
            axios.get('../project-all-data')
                .then(function (response) {
                    self.orderBy = response.data.orderBy;
                    if(response.data.pd_num){
                        self.pd_num = response.data.pd_num;
                    }else{
                        self.pd_num = '';
                    }
                    self.projects = response.data.projects;
                    self.userdata = response.data.userdata;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得網版資料
        getProjects:function(orderBy){
            let self = this;

            axios.get('../projects?orderBy='+orderBy+'&pd_num='+self.pd_num)
                .then(function (response) {
                    self.projects = response.data.projects;
                    self.orderBy = response.data.orderBy;
                    if(response.data.pd_num){
                        self.pd_num = response.data.pd_num;
                    }else{
                        self.pd_num = '';
                    }
                    // self.page = 1;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得單一網版資料
        getProject:function(id){
            let self = this;
            axios.get('../project?pd_id='+id)
                .then(function (response) {
                    self.project = response.data;
                    self.pd_id = id;
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
        //新增網版
        createProject:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.project.pd_num){
                self.notification('請輸入網版名稱','warning');
                return false;
            }
            //時間格式轉換
            if(!self.project.pd_date){
                self.notification('請選擇上線日期','warning');
                return false;
            }else{
                var fromDate = new Date(self.project.pd_date);
                var year = fromDate.getFullYear(); 
                var month = fromDate.getMonth()+1 < 10 ? '0'+ (fromDate.getMonth()+1) : (fromDate.getMonth()+1);
                var day = fromDate.getDate() < 10 ? '0'+ fromDate.getDate(): fromDate.getDate();
                self.project.pd_date = year+'-'+month+'-'+day;
            }
            //色系
            var pd_colors = JSON.parse(self.project.pd_colors);
            if(pd_colors.length < 1){
                self.notification('至少選擇一個色系','warning');
                return false;
            }
            //網版dome
            if(self.project.pd_live){
                var pd_live_url = $('input[name=pd_live_url]').val();
                if(pd_live_url == ''){
                    self.notification('請輸入Demo路徑','warning');
                    return false;
                }else{
                    self.project.pd_live_url = $('input[name=pd_live_url]').val();
                }
            }else{
                self.project.pd_live_url = '';
            }
            //列表圖
            var pd_view_img = $('input[name="pd_view_img"]').val();
            if(pd_view_img == ''){
                self.notification('請上傳列表圖','warning');
                return false;
            }else{
                self.project.pd_view_img = pd_view_img;
            }
            //banner圖
            var pd_banner_img = $('input[name="pd_banner_img"]').val();
            if(pd_banner_img == ''){
                self.notification('請上傳Banner','warning');
                return false;
            }else{
                self.project.pd_banner_img = pd_banner_img;
            }
            //示意圖
            var pd_template_img = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_template_img.push($(this).find('input').val());
                }
            })
            self.project.pd_template_img = JSON.stringify(pd_template_img);
            //model圖
            var pd_model_img = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_model_img.push($(this).find('input').val());
                }
            })
            self.project.pd_model_img = JSON.stringify(pd_model_img);
            // 回傳修改
            axios.post('/project-create',self.project) //新增 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.project = {};
                        self.changeRouter('list');
                        self.getProjects(self.orderBy);
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
        //修改顯示狀態
        modifyShow:function(id,pd_show){
            let self = this;
            var json = {};

            json.pd_id = id;
            json.pd_show = pd_show ? 0 : 1;

            axios.post('/project-modify',json) //修改 - 
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.getProjects(self.orderBy);
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //修改最新項目狀態
        modifyNew:function(id,pd_new){
            let self = this;
            var json = {};

            json.pd_id = id;
            json.pd_new = pd_new ? 0 : 1;

            axios.post('/project-modify',json) //修改 - 
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.getProjects(self.orderBy);
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //修改版型資料
        modifyProject:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.project.pd_num){
                self.notification('請輸入網版名稱','warning');
                return false;
            }
            //時間格式轉換
            if(!self.project.pd_date){
                self.notification('請選擇上線日期','warning');
                return false;
            }else{
                var fromDate = new Date(self.project.pd_date);
                var year = fromDate.getFullYear(); 
                var month = fromDate.getMonth() < 10 ? '0'+ (fromDate.getMonth()+1) : (fromDate.getMonth()+1);
                var day = fromDate.getDate() < 10 ? '0'+ fromDate.getDate(): fromDate.getDate();
                self.project.pd_date = year+'-'+month+'-'+day;
            }
            
            //色系
            var pd_colors = JSON.parse(self.project.pd_colors);
            if(pd_colors.length < 1){
                self.notification('至少選擇一個色系','warning');
                return false;
            }
            //網版dome
            if(self.project.pd_live){
                var pd_live_url = $('input[name=pd_live_url]').val();
                if(pd_live_url == ''){
                    self.notification('請輸入Demo路徑','warning');
                    return false;
                }
            }else{
                self.project.pd_live_url = '';
            }
            //列表圖
            var pd_view_img = $('input[name="pd_view_img"]').val();
            if(pd_view_img == ''){
                self.notification('請上傳列表圖','warning');
                return false;
            }else{
                self.project.pd_view_img = pd_view_img;
            }
            //banner圖
            var pd_banner_img = $('input[name="pd_banner_img"]').val();
            if(pd_banner_img == ''){
                self.notification('請上傳Banner','warning');
                return false;
            }else{
                self.project.pd_banner_img = pd_banner_img;
            }
            //示意圖
            var pd_template_img = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_template_img.push($(this).find('input').val());
                }
            })
            self.project.pd_template_img = JSON.stringify(pd_template_img);
            //model圖
            var pd_model_img = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_model_img.push($(this).find('input').val());
                }
            })
            self.project.pd_model_img = JSON.stringify(pd_model_img);

            // 回傳修改
            axios.post('/project-modify',self.project) //修改 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.project = {};
                        self.changeRouter('list');
                        self.getProjects(self.orderBy);
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
        deleteProject:function(id){
            let self = this;
            var json = {};
            json.pd_id = id;
            
            axios.post('/project-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.page = 1;
                        self.project = {};
                        self.changeRouter('list');
                        self.getProjects(self.orderBy);
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
        orderBy:function(){
            let self = this;
            self.getProjects(self.orderBy);
        }
	}
}
</script>