<style scoped></style>
<template>
<div id="mainBody" class="clearfix">
    <!--header-->
    <div id="header" class="clearfix">
        <div class="header-wrap">
            <!-- logo -->
            <a href="javascript:void(0)" @click="changeRouter('index&list')" class="logo"></a>
            <!-- nav -->
            <div class="mainnav-wrap">
                <div class="mainnav">
                    <ul class="clearfix">
                        <li>
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">版型管理</a>
                            <div class="drop-group drop-open">
                                <a href="javascript:void(0)" @click="changeRouter('project&create')">新增版型</a>
                                <a href="javascript:void(0)" @click="changeRouter('project&list')">網版列表</a>
                                <a href="javascript:void(0)" @click="openFilemanager('open_image_manager')" class="open_image_manager">圖片管理</a>
                            </div>
                        </li>
                        <li>
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">合作夥伴管理</a>
                            <div class="drop-group drop-open">
                                <a href="javascript:void(0)" @click="changeRouter('logo&create')">新增合作夥伴</a>
                                <a href="javascript:void(0)" @click="changeRouter('logo&list')">合作夥伴列表</a>
                            </div>
                        </li>
                        <li v-if="userdata.ud_admin">
                            <a @click="dropGroup($event)" href="javascript:void(0)" class="fa drop-title drop-title-down">後台管理</a>
                            <div class="drop-group drop-open">
                                <a href="javascript:void(0)" @click="changeRouter('transaction&record')">紀錄列表</a>
                                <a href="javascript:void(0)" @click="changeRouter('user&list')">使用者列表</a>
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
            <a href="javascript:void(0)" @click="user.display = 'personal',changeRouter('user&modify&'+userdata.ud_id)" class="btn staut-edit">
                {{userdata.ud_name}}
            </a>
            <a href="/logout" title="登出" class="btn staut-logout">登出</a>
        </div>
        <!--content-->
        <div v-if="nowPage == 'index' && nowView == 'list'" class="content-wrap clearfix">
            <!--top-->
            <div class="first-wrap">
                <div class="first-item clearfix">
                    <div class="title">網版總數</div>
                    <div class="first-temp-num clearfix">
                        <p>{{index.project_count}}</p>
                    </div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li v-for="item in index.newestdata"><span></span><a :href="'/project-list?pd_id='+item.pd_id+'#/modify'" :title="item.pd_num">{{item.pd_num}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="first-item">
                    <div class="title">網版佈局</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="chart1_bg1"></span>直向大小：{{index.layout_count[0]}}</li>
                            <li><span class="chart1_bg2"></span>橫向大小：{{index.layout_count[1]}}</li>
                            <li><span class="chart1_bg3"></span>多面切割：{{index.layout_count[2]}}</li>
                            <li><span class="chart1_bg4"></span>對角線：{{index.layout_count[3]}}</li>
                            <li><span class="chart1_bg5"></span>無規則：{{index.layout_count[4]}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart1" :chart-data="chart1"></pie-chart>
                </div>
                <div class="first-item">
                    <div class="title">網版風格</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="chart2_bg1"></span>前衛時尚：{{index.style_count[0]}}</li>
                            <li><span class="chart2_bg2"></span>復古典雅：{{index.style_count[1]}}</li>
                            <li><span class="chart2_bg3"></span>精緻華麗：{{index.style_count[2]}}</li>
                            <li><span class="chart2_bg4"></span>簡約大氣：{{index.style_count[3]}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart2" :chart-data="chart2"></pie-chart>
                </div>
                <div class="first-item">
                    <div class="title">網版色系</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="white"></span>white：{{index.color_count['white']}}</li>
                            <li><span class="grey"></span>grey：{{index.color_count['grey']}}</li>
                            <li><span class="black"></span>black：{{index.color_count['black']}}</li>
                            <li><span class="blue"></span>blue：{{index.color_count['blue']}}</li>
                            <li><span class="green"></span>green：{{index.color_count['green']}}</li>
                            <li><span class="yellow"></span>yellow：{{index.color_count['yellow']}}</li>
                            <li><span class="brown"></span>brown：{{index.color_count['brown']}}</li>
                            <li><span class="orange"></span>orange：{{index.color_count['orange']}}</li>
                            <li><span class="red"></span>red：{{index.color_count['red']}}</li>
                            <li><span class="pink"></span>pink：{{index.color_count['pink']}}</li>
                            <li><span class="purple"></span>purple：{{index.color_count['purple']}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart3" :chart-data="chart3"></pie-chart>
                </div>
            </div>
            <!--bottom-->
            <div class="content-body first-content clearfix ">
                <div class="title">最新網版列表</div>
                <select v-model="index_orderBy" name="orderList" id="orderList">
                    <option value="pd_date">上架日期排行</option>
                    <option value="pd_hot">熱門項目</option>
                </select>
                <!--template 列表 -->
                <div class="template-list-wrap clearfix">
                    <div class="template-title clearfix">
                        <div class="temp-img">縮圖</div>
                        <div class="temp-name">名稱</div>
                        <div class="temp-date">上線日期</div>
                        <div class="temp-layout">網版佈局</div>
                        <div class="temp-style">網版風格</div>
                        <div class="temp-type">主題</div>
                        <div class="temp-color">色系</div>
                        <div class="temp-staut">狀態</div>
                        <div class="temp-icon">New icon</div>
                        <div class="temp-edit">編輯</div>
                        <div class="temp-demo">Demo</div>
                    </div>
                    <div class="template-content clearfix">
                        <div v-for="item in index.projectdata" class="template-item">
                            <div class="temp-img">
                                <a :href="'/project-list#/modify&'+item.pd_id"><img :src="item.pd_view_img" alt=""></a>
                            </div>
                            <div class="temp-name">
                                <a :href="'/project-list#/modify&'+item.pd_id" :title="item.pd_num">{{item.pd_num}}</a>
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
                                <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" class="btn btn-s" title="編輯"></a>
                            </div>
                            <!-- Demo連結 -->
                            <div class="temp-demo js-sv">
                                <a v-if="item.pd_live == 1" :href="'http://web.bbinpartner.com/demo/'+item.pd_id" target="_blank" class="btn btn-s" title="Demo"></a>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" @click="changeRouter('project&list')" title="檢視更多網版" class="first-more-btn">檢視更多網版</a>
                </div>
                
            </div>
        </div>
        <div v-else-if="nowPage == 'project' && nowView == 'list'" class="content-wrap clearfix">
            <div class="page-title">
                <div class="content-title">
                    網版列表<p>共有<span class="text-nar">{{total}}</span>個版</p>
                    <div id="searchWrap">
                        <input type="text" name="pd_num" class="search-bar" v-model="project.pd_num" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                        <input v-if="project.pd_num != ''" @click="project.pd_num = '',getProjects(project_orderBy)" type="button" class="close-btn">
                        <input v-else type="button" class="search-btn" value="">
                    </div>
                </div>
            </div>
            <!-- 上方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="project.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="project.page = 1" v-model="project.limit">
                        <option value=10>10項 / 頁</option>
                        <option value=50>50項 / 頁</option>
                        <option value="all">全部列出</option>
                    </select>
                </div>
                <div class="model-wrap">
                    <a @click="changeDisplay(project.display)" href="javascript:void(0)" title="" :class="project.display == 'image' ? 'model-img' : 'model-list'" class="fa model-btn"></a>
                    <select v-model="project_orderBy" name="adaptive_order" id="adaptive_order">
                        <option value="pd_date">上架日期排行</option>
                        <option value="pd_hot">熱門項目</option>
                    </select>
                </div>
            </div>
            <!-- list模式 -->
            <div v-if="project.display == 'list'" class="template-list-wrap clearfix">
                <div class="template-title clearfix">
                    <div class="temp-img">縮圖</div>
                    <div class="temp-name">名稱</div>
                    <div class="temp-date">上線日期</div>
                    <div class="temp-layout">網版佈局</div>
                    <div class="temp-style">網版風格</div>
                    <div class="temp-type">主題</div>
                    <div class="temp-color">色系</div>
                    <div class="temp-staut">狀態</div>
                    <div class="temp-icon">New icon</div>
                    <div class="temp-edit">編輯</div>
                    <div class="temp-demo">Demo</div>
                </div>
                <div class="template-content clearfix">
                    <div v-if="showData == 1" v-for="item in newProjects" class="template-item">
                        <div class="temp-img">
                            <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)"><img :src="item.pd_view_img" alt=""></a>
                        </div>
                        <div class="temp-name">
                            <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" :title="item.pd_num">{{item.pd_num}}</a>
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
                        <!-- pd_colors -->
                        <div class="temp-color alLeft">
                            <span v-for="color in JSON.parse(item.pd_colors)" :class="'color color-'+color"></span>
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
                            <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" class="btn btn-s" title="編輯"></a>
                        </div>
                        <!-- Demo連結 -->
                        <div class="temp-demo js-sv">
                            <a v-if="item.pd_live == 1" :href="'http://web.bbinpartner.com/demo/'+item.pd_id" target="_blank" class="btn btn-s" title="Demo"></a>
                        </div>
                    </div>
                    <p v-if="showData == 2">查無相符的固定網版資料</p>
                    <p v-if="showData == 3">目前暫無固定網版資料</p>
                </div>
            </div>
            <!-- image模式 -->
            <div v-if="project.display == 'image'" class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap">
                    <div class="x_panel">
                        <div v-if="showData == 1" v-for="item in newProjects" class="col-lg-4 col-sm-6 col-xs-6">
                            <a href="javascript:void(0)" class="col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item">
                                <div class="item_block">
                                    <div class="image view view-first">
                                        <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" class="" :title="item.pd_num"><img style="width: 100%; display: block;" :src="item.pd_view_img" alt="image"></a>
                                    </div>
                                    <div class="caption">
                                        <p><strong><a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" class="" :title="item.pd_num">{{ item.pd_num }}</a></strong></p>
                                            <a href="javascript:void(0)" @click="changeRouter('project&modify&'+item.pd_id)" class="modify_url">編輯</a>
                                            <a v-if="item.pd_live && item.pd_live_url != ''" class="live_url" :href="webbbin_front+item.pd_live_url" target="_blank">Demo</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p v-if="showData == 2">查無相符的固定網版資料</p>
                        <p v-if="showData == 3">目前暫無固定網版資料</p>
                    </div>
                </div>
            </div>
            <!-- 下方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="project.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="project.page = 1" v-model="project.limit">
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
        <div v-else-if="nowPage == 'project' && nowView == 'modify'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                編輯網版
                <span class="text-nar">{{ project.project.pd_num }}</span>
                <button @click="deleteProject(project.project.pd_id)" type="button" class="btn btn-del content-righttop-btn">刪除</button>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="isnum">
                    <td>網版名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="pd_num" v-model="project.project.pd_num" v-tooltip="'請輸入網版名稱'">
                    </td>
                </tr>
                <tr class="isdate">
                    <td>上線日期</td>
                    <td>
                        <label for="" class="fa date-icon"></label>
                        <datepicker id="datepicker" class="date-input check_unit" name="pd_date" v-model="project.project.pd_date" :format="'yyyy-MM-dd'" v-tooltip="'請選擇上線日期'"></datepicker>
                    </td>
                </tr>
                <tr class="isshow">
                    <td>網版 顯示 & 隱藏</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.project.pd_show == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_show = 1">顯示</button>
                        <button type="button" :class="project.project.pd_show == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_show = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isnew">
                    <td>顯示new icon</td>
                    <td class="js-table-btn ">
                        <button type="button" :class="project.project.pd_new == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_new = 1">顯示</button>
                        <button type="button" :class="project.project.pd_new == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_new = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ishot">
                    <td>熱門版型</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.project.pd_hot == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_hot = 1">是</button>
                        <button type="button" :class="project.project.pd_hot == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_hot = 0">否</button>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">風格設定</td>
                </tr>
                <tr class="islayout">
                    <td>網版布局</td>
                    <td>
                        <select name="pd_layout" id="pd_layout" v-model="project.project.pd_layout">
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
                        <select name="pd_style" id="pd_style" v-model="project.project.pd_style">
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
                        <select name="pd_type" id="pd_type" v-model="project.project.pd_type">
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
                        <button type="button" :class="project.project.pd_live == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_live = 1">有</button>
                        <button type="button" :class="project.project.pd_live == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_live = 0">無</button>
                        <div v-show="project.project.pd_live" class="hide_or_show">
                            <div class="table-copy-btn">
                                <input type="hidden" id="pd_live_demo_url" value="">
                                <input type="text" class="check_unit" id="pd_live_url" name="pd_live_url" v-tooltip="'請輸入Demo路徑'" v-model="project.project.pd_live_url">
                                <button @click="add_url()" type="button" class="btn btn-path btn_add_url">產生路徑</button>
                                <button @click="initClipboard()" ref="copyUrl" type="button" class="btn btn-copy btn_copy_url"><span class="fa"></span></button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="isviewimg">
                    <td>列表圖上傳</td>
                    <td class="check_unit">
                        <input type="text" class="url_readonly check_unit" id="pd_view_img" name="pd_view_img" v-model="project.project.pd_view_img" v-tooltip="'請上傳列表圖'">
                        <button @click="openFilemanager('pd_view_img')" type="button" class="btn btn-upload pd_view_img" data-input="pd_view_img" data-preview="holder">檔案上傳</button>
                        
                    </td>
                </tr>
                
                <tr class="isbannerimg">
                    <td>Banner上傳</td>
                    <td class="check_unit">
                        <input type="text" class=" url_readonly" id="pd_banner_img" name="pd_banner_img" v-model="project.project.pd_banner_img" v-tooltip="'請上傳Banner'">
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
                        <textarea class="" name="pd_notices" v-model="project.project.pd_notices"></textarea>
                        <p class="text-warning">＊兩行以上請加入，區隔
                        </p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="modifyProject()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('project&list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowPage == 'project' && nowView == 'create'" class="content-wrap clearfix">
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
                        <input type="text" class="check_unit" name="pd_num" v-model="project.project.pd_num" v-tooltip="'請輸入網版名稱'">
                    </td>
                </tr>
                <tr class="isdate">
                    <td>上線日期</td>
                    <td>
                        <label for="" class="fa date-icon"></label>
                        <datepicker id="datepicker" class="date-input check_unit" name="pd_date" v-model="project.project.pd_date" :format="'yyyy-MM-dd'" v-tooltip="'請選擇上線日期'"></datepicker>
                    </td>
                </tr>
                <tr class="isshow">
                    <td>網版 顯示 & 隱藏</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.project.pd_show == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_show = 1">顯示</button>
                        <button type="button" :class="project.project.pd_show == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_show = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isnew">
                    <td>顯示new icon</td>
                    <td class="js-table-btn ">
                        <button type="button" :class="project.project.pd_new == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_new = 1">顯示</button>
                        <button type="button" :class="project.project.pd_new == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_new = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ishot">
                    <td>熱門版型</td>
                    <td class="js-table-btn">
                        <button type="button" :class="project.project.pd_hot == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_hot = 1">是</button>
                        <button type="button" :class="project.project.pd_hot == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_hot = 0">否</button>
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">風格設定</td>
                </tr>
                <tr class="islayout">
                    <td>網版布局</td>
                    <td>
                        <select name="pd_layout" id="pd_layout" v-model="project.project.pd_layout">
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
                        <select name="pd_style" id="pd_style" v-model="project.project.pd_style">
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
                        <select name="pd_type" id="pd_type" v-model="project.project.pd_type">
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
                        <button type="button" :class="project.project.pd_live == 1 ? 'table-active':''" class="table-enable" @click="project.project.pd_live = 1">有</button>
                        <button type="button" :class="project.project.pd_live == 0 ? 'table-active':''" class="table-disable" @click="project.project.pd_live = 0">無</button>
                        <div v-show="project.project.pd_live" class="hide_or_show">
                            <div class="table-copy-btn">
                                <input type="hidden" id="pd_live_demo_url" value="">
                                <input type="text" class="check_unit" id="pd_live_url" name="pd_live_url" v-tooltip="'請輸入Demo路徑'" v-model="project.project.pd_live_url">
                                <button @click="add_url()" type="button" class="btn btn-path btn_add_url">產生路徑</button>
                                <button @click="initClipboard()" ref="copyUrl" type="button" class="btn btn-copy btn_copy_url"><span class="fa"></span></button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="isviewimg">
                    <td>列表圖上傳</td>
                    <td class="check_unit">
                        <input type="text" class="url_readonly check_unit" id="pd_view_img" name="pd_view_img" v-model="project.project.pd_view_img" v-tooltip="'請上傳列表圖'">
                        <button @click="openFilemanager('pd_view_img')" type="button" class="btn btn-upload pd_view_img" data-input="pd_view_img" data-preview="holder">檔案上傳</button>
                        
                    </td>
                </tr>
                
                <tr class="isbannerimg">
                    <td>Banner上傳</td>
                    <td class="check_unit">
                        <input type="text" class=" url_readonly" id="pd_banner_img" name="pd_banner_img" v-model="project.project.pd_banner_img" v-tooltip="'請上傳Banner'">
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
                        <textarea class="" name="pd_notices" v-model="project.project.pd_notices"></textarea>
                        <p class="text-warning">＊兩行以上請加入，區隔
                        </p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="createProject()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('project&list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowPage == 'logo' && nowView == 'list'" class="content-wrap clearfix">
            <div class="page-title">
                <div class="content-title">
                    合作夥伴列表<p>共有<span class="text-nar">{{total}}</span>個夥伴</p>
                </div>
                <a v-if="userdata.ud_admin" @click="logo.sort ? logo.sort=false:logo.sort=true" :class="logo.sort ? 'model-cancel' : 'model-sort'" href="javascript:void(0)" v-tooltip="logo.sort ? '關閉拖拉':'開啟拖拉'" class="model-sort fa model-btn"></a>
            </div>
            <!-- 上方頁碼 -->
            <div v-if="!logo.sort" class="paginate_box">
                <paginate v-model="logo.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="logo.page = 1" v-model="logo.limit">
                        <option value="10">10項 / 頁</option>
                        <option value="50">50項 / 頁</option>
                        <option value="all">全部列出</option>
                    </select>
                </div>
                <div class="model-wrap">
                    <a @click="changeDisplay(logo.display)" href="javascript:void(0)" v-tooltip="logo.display == 'list' ? '圖示':'列表'" :class="logo.display == 'image' ? 'model-img' : 'model-list'" class="fa model-btn"></a>
                    <div id="searchWrap" style="margin-top:0;">
                        <input type="text" name="ld_name" class="search-bar" v-model="logo.ld_name" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                        <input v-if="logo.ld_name != ''" @click="logo.ld_name = '',getLogos()" type="button" class="close-btn">
                        <input v-else type="button" class="search-btn" value="">
                    </div>
                </div>
            </div>
            <!-- 列表模式 -->
            <div v-if="logo.display == 'list' && !logo.sort" class="logo-list-wrap clearfix">
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
                    <div v-for="(item, index) in newLogos" class="logo-item">
                        <div class="lo-img">
                            <a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)"><img :src="item.ld_img" alt=""></a>
                        </div>
                        <div class="lo-name">
                            <a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)" :title="item.ld_name">{{item.ld_name}}</a>
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
                            <a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)" class="btn btn-s" title="編輯"></a>
                        </div>
                    </div>
                    <p v-if="showData == 2">查無相符的合作夥伴資料</p>
                    <p v-if="showData == 3">目前暫無合作夥伴資料</p>
                </div>
            </div>
            <!-- image模式 -->
            <div v-if="logo.display == 'image' && !logo.sort" class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap">
                    <div class="x_panel logo_warp">
                        <div  v-if="showData == 1">
                            <div v-for="(item, index) in newLogos" class="col-lg-2 col-sm-3 col-xs-3">
                                <a href="javascript:void(0)" class="col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item">
                                    <div class="item_block">
                                        <div class="image view view-first">
                                            <a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)" class="" :title="item.ld_name"><img style="width: 100%; display: block;" :src="item.ld_img" alt="image"></a>
                                        </div>
                                        <div class="caption">
                                            <p><strong><a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)" class="" :title="item.ld_name">{{ item.ld_name }}</a></strong></p>
                                            <a href="javascript:void(0)" @click="changeRouter('logo&modify&'+item.ld_id)" class="modify_url">編輯</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <p v-if="showData == 2">查無相符的合作夥伴資料</p>
                        <p v-if="showData == 3">目前暫無合作夥伴資料</p>
                    </div>
                </div>
            </div>
            <!-- 拖拉模式 -->
            <div v-if="logo.sort && userdata.ud_admin" class="sort-list-wrap clearfix">
                <div>
                    <SlickList v-if="showData == 1" class="sort-content clearfix row" v-model="logo.sorts" @input="modifyLogoSort()" axis="x,y">
                        <SlickItem v-for="(item, index) in logo.sorts" class="sort-item col-lg-2 col-sm-3 col-xs-3" :index="index" :key="index">
                            <div class="sort-img sort-item">
                                <a href="javascript:void(0)"><img :src="item.ld_img" alt=""></a>
                            </div>
                        </SlickItem>
                    </SlickList>
                    <p v-if="showData == 2">查無相符的合作夥伴資料</p>
                    <p v-if="showData == 3">目前暫無合作夥伴資料</p>
                </div>
            </div>
            <!-- 下方頁碼 -->
            <div v-if="!logo.sort" class="paginate_box">
                <paginate v-model="logo.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                <div class="pagination-select">
                    <select name="page_limit" id="page_limit" @change="logo.page = 1" v-model="logo.limit">
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
        <div v-else-if="nowPage == 'logo' && nowView == 'modify'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                編輯合作夥伴
                <span class="text-nar">{{ logo.logo.ld_name }}</span>
                <button @click="deleteLogo(logo.logo.ld_id)" type="button" class="btn btn-del content-righttop-btn">刪除</button>
            </div>
            <table class="table-template-edit">
                <tr class="temp-title">
                    <td colspan="2">基本設定</td>
                </tr>
                <tr class="islogoimg">
                    <td>logo上傳</td>
                    <td @dragover="allowDrop($event)" @drop="drop($event)"  class="check_unit" id="dragArea" data-toggle="tooltip" title="請上傳圖片">
                        <div id="previewDiv">
                            <img v-if="logo.logo.ld_img" :src="logo.logo.ld_img" width="250">
                            <p v-else>請拖曳圖片至此</p>
                        </div>
                    </td>
                </tr>
                <tr class="isname">
                    <td>合作夥伴名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="ld_name" v-model="logo.logo.ld_name" v-tooltip="'請輸入合作夥伴名稱'">
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">分類設定</td>
                </tr>
                <tr class="iscasino">
                    <td>電子分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_casino == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_casino = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_casino == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_casino = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="issports">
                    <td>體育分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_sports == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_sports = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_sports == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_sports = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="iscard">
                    <td>棋牌分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_card == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_card = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_card == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_card = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islive">
                    <td>視訊分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_live == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_live = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_live == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_live = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islottery">
                    <td>彩票分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_lottery == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_lottery = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_lottery == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_lottery = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isfishing">
                    <td>捕魚分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_fishing == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_fishing = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_fishing == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_fishing = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ismahjong">
                    <td>麻將分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_mahjong == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_mahjong = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_mahjong == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_mahjong = 0">隱藏</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="modifyLogo()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('logo&list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowPage == 'logo' && nowView == 'create'" class="content-wrap clearfix">
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
                            <img v-if="logo.logo.ld_img" :src="logo.logo.ld_img" width="250">
                            <p v-else>請拖曳圖片至此</p>
                        </div>
                    </td>
                </tr>
                <tr class="isname">
                    <td>合作夥伴名稱</td>
                    <td>
                        <input type="text" class="check_unit" name="ld_name" v-model="logo.logo.ld_name" v-tooltip="'請輸入合作夥伴名稱'">
                    </td>
                </tr>
                <tr class="temp-title">
                    <td colspan="2">分類設定</td>
                </tr>
                <tr class="iscasino">
                    <td>電子分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_casino == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_casino = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_casino == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_casino = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="issports">
                    <td>體育分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_sports == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_sports = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_sports == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_sports = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="iscard">
                    <td>棋牌分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_card == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_card = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_card == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_card = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islive">
                    <td>視訊分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_live == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_live = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_live == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_live = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="islottery">
                    <td>彩票分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_lottery == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_lottery = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_lottery == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_lottery = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="isfishing">
                    <td>捕魚分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_fishing == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_fishing = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_fishing == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_fishing = 0">隱藏</button>
                    </td>
                </tr>
                <tr class="ismahjong">
                    <td>麻將分類</td>
                    <td class="js-table-btn">
                        <button type="button" :class="logo.logo.ld_mahjong == 1 ? 'table-active':''" class="table-enable" @click="logo.logo.ld_mahjong = 1">顯示</button>
                        <button type="button" :class="logo.logo.ld_mahjong == 0 ? 'table-active':''" class="table-disable" @click="logo.logo.ld_mahjong = 0">隱藏</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button @click="createLogo()" type="button" class="btn btn_save">送出</button>
                        <a href="javascript:void(0)" @click="changeRouter('logo&list')" class="btn btn-cancel btn_back">返回</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else-if="nowPage == 'transaction' && nowView == 'record'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                紀錄列表
                <p class="tab-title1"></p>
            </div>
            <div class="content-body clearfix">
                <div id="tab-link">
                    <ul class="clearfix">
                        <li><a href="javascript:void(0)" :class="{'active':nowView == 'record'}">異動紀錄</a></li>
                        <li><a href="javascript:void(0)" @click="nowView = 'lastlogin'" :class="{'active':nowView == 'lastlogin'}">登入紀錄</a></li>
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
                            <tr v-if="showData == 1" v-for="(item,index) in newRecords">
                                <td v-text='transaction.tran_limit == "all" ? index+1 : index+1+(transaction.tran_page-1)*transaction.tran_limit'></td>

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
                            <tr v-else-if="showData == 2">
                                <td colspan="4">目前暫無異動紀錄</td>
                            </tr>
                            <tr v-else-if="showData == 3">
                                <td colspan="4">目前暫無異動紀錄</td>
                            </tr>
                        </tbody>
                    </table>
                    <!--pagination-->
                    <div class="paginate_box">
                        <paginate v-model="transaction.tran_page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                        <div class="pagination-select">
                            <select name="page_limit" id="page_limit" @change="transaction.tran_page = 1" v-model="transaction.tran_limit">
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
        <div v-else-if="nowPage == 'transaction' && nowView == 'lastlogin'" class="content-wrap clearfix">
            <div class="content-title clearfix">
                紀錄列表
                <p class="tab-title1"></p>
            </div>
            <div class="content-body clearfix">
                <div id="tab-link">
                    <ul class="clearfix">
                        <li><a @click="nowView = 'record'" :class="{'active':nowView == 'record'}" href="javascript:void(0)">異動紀錄</a></li>
                        <li><a href="javascript:void(0)" :class="{'active':nowView == 'lastlogin'}">登入紀錄</a></li>
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
                            <tr v-if="showData == 1" v-for="(item,index) in newLastlogins">
                                <td>
                                    <span class="text-tip">{{item.ud_name}}</span>
                                </td>
                                <td>{{item.ud_last_login}}</td>
                            </tr>
                            <tr v-else-if="showData == 2">
                                <td colspan="4">目前暫無登入紀錄</td>
                            </tr>
                            <tr v-else-if="showData == 3">
                                <td colspan="4">目前暫無登入紀錄</td>
                            </tr>
                        </tbody>
                    </table>
                    <!--pagination-->
                    <div class="paginate_box">
                        <paginate v-model="transaction.login_page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                        <div class="pagination-select">
                            <select name="page_limit" id="page_limit" @change="transaction.login_page = 1" v-model="transaction.login_limit">
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
        <div v-else-if="nowPage == 'user' && nowView == 'list' && userdata.ud_admin" class="content-wrap clearfix user_page">
            <div class="content-title clearfix">
                使用者列表
                <p>共有<span class="text-nar">{{total}}</span>個使用者</p>
                <a href="javascript:void(0)" @click="changeRouter('user&create')" class="btn btn-cancel content-righttop-btn">
                    <span class="fa"></span>新增使用者
                </a>
            </div>
            <!-- 上方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="user.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
                <div id="searchWrap">
                    <input type="text" name="ud_name" class="search-bar" v-model="user.ud_name" placeholder="Search for..." @input="search()" @compositionstart="listen_input_start()" @compositionend="listen_input_end()">
                    <input v-if="user.ud_name != ''" @click="user.ud_name = '',getUsers()" type="button" class="close-btn">
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
                        <tr v-if="showData == 1" v-for="(item,index) in newUsers">
                            <td>
                                {{index+1+(user.page-1)*15}}
                            </td>
                            <td class="tLeft table-username">
                                <a href="javascript:void(0)" @click="user.display = 'admin',changeRouter('user&modify&'+item.ud_id)">
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
                                <a href="javascript:void(0)" @click="user.display = 'admin',changeRouter('user&modify&'+item.ud_id)" class="btn btn-s">編輯</a>
                                <button @click="deleteUser(item.ud_id)" type="button" class="btn btn-s btn-s-del">刪除</button>
                            </td>
                        </tr>
                        <tr v-else-if="showData == 2">
                            <td colspan="6">查無相符的使用者資料</td>
                        </tr>
                        <tr v-else-if="showData == 3">
                            <td colspan="6">目前暫無使用者資料</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 下方頁碼 -->
            <div class="paginate_box">
                <paginate v-model="user.page" :page-count="count" :page-range="3" :margin-pages="2" :prev-text="'<'" :next-text="'>'"></paginate>
            </div>
        </div>
        <div v-else-if="nowPage == 'user' && nowView == 'modify' && user.display == 'personal'" class="content-wrap clearfix">
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
                        <td><input class="check_unit" v-model="user.user.ud_password" type="password" v-tooltip="'請輸入舊密碼'" name="ud_password"></td>
                    </tr>
                    <tr>
                        <td>新密碼</td>
                        <td><input class="check_unit" v-model="user.user.ud_new_password" type="password" v-tooltip="'請輸入新密碼'" name="ud_new_password"></td>
                    </tr>
                    <tr>
                        <td>確認密碼</td>
                        <td><input class="check_unit" v-model="user.user.ud_new_password_confirm" type="password" v-tooltip="'請再次輸入新密碼'" name="ud_new_password_confirm"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href="javascript:void(0)" @click="changeRouter('index&list')" class="btn btn-cancel">返回</a>
                            <button @click="modifyUser()" type="button" class="btn_save">送出</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-else-if="nowPage == 'user' && nowView == 'modify' && user.display == 'admin' && userdata.ud_admin" class="content-wrap clearfix">
            <div class="content-title clearfix">
                使用者資料<span class="text-nar">{{ user.user.ud_name }}</span>
            </div>
            <div class="content-body clearfix">
                <table class="table-order">
                    <tr class="table-sepa isaccount">
                        <td>使用者帳號</td>
                        <td><span>{{ user.user.ud_account }}</span></td>
                    </tr>
                    <tr class="isname">
                        <td>使用者名稱</td>
                        <td><input type="text" v-model="user.user.ud_name" class="check_unit" name="ud_name" v-tooltip="'請輸入使用者名稱'"></td>
                    </tr>
                    <tr class="isstatus">
                        <td>使用者狀態</td>
                        <td class="js-table-btn">
                            <button type="button" :class="user.user.ud_status == 1 ? 'table-active':''" class="table-enable" @click="user.user.ud_status = 1">啟用</button>
                            <button type="button" :class="user.user.ud_status == 0 ? 'table-active':''" class="table-disable" @click="user.user.ud_status = 0">停用</button>
                        </td>
                    </tr>
                    <tr class="isadmin">
                        <td>使用者權限</td>
                        <td>
                            <p>
                                <input name="isadmin" id="normaluser" type="radio" v-model="user.user.ud_admin" value="0" checked="checked">
                                <label name="isadmin" for="normaluser">一般使用者</label>
                            </p>
                            <p>
                                <input name="isadmin" id="adminuser" type="radio" v-model="user.user.ud_admin" value="1">
                                <label name="isadmin" for="adminuser">管理員</label>
                            </p>
                        </td>
                    </tr>
                    <tr class="table-sepa ispass">
                        <td>修改密碼</td>
                        <td><input type="password" class="check_unit" name="ud_new_password" v-model="user.user.ud_new_password" v-tooltip="'需要修改密碼再填寫'"></td>
                    </tr>
                    <tr class="">
                        <td></td>
                        <td>
                            <button @click="modifyUser()" type="button" class="btn_save">送出</button>
                            <a href="javascript:void(0)" @click="changeRouter('user&list')" class="btn btn-cancel">返回</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-else-if="nowPage == 'user' && nowView == 'create' && userdata.ud_admin" class="content-wrap clearfix">
            <div class="content-title clearfix">
                新增使用者
            </div>
            <div class="content-body clearfix">
                <table class="table-order">
                    <tr class="table-sepa isaccount">
                        <td>使用者帳號</td>
                        <td><input type="text" v-model="user.user.ud_account" class="check_unit" name="ud_account" v-tooltip="'請輸入使用者帳號'"></td>
                    </tr>
                    <tr class="ispass">
                        <td>使用者密碼</td>
                        <td><input type="password" v-model="user.user.ud_password" class="check_unit" name="ud_password" v-tooltip="'請輸入使用者密碼'"></td>
                    </tr>
                    <tr class="isname">
                        <td>使用者名稱</td>
                        <td><input type="text" v-model="user.user.ud_name" class="check_unit" name="ud_name" v-tooltip="'請輸入使用者名稱'"></td>
                    </tr>
                    <tr class="isstatus">
                        <td>使用者狀態</td>
                        <td class="js-table-btn">
                            <button type="button" :class="user.user.ud_status == 1 ? 'table-active':''" class="table-enable" @click="user.user.ud_status = 1">啟用</button>
                            <button type="button" :class="user.user.ud_status == 0 ? 'table-active':''" class="table-disable" @click="user.user.ud_status = 0">停用</button>
                        </td>
                    </tr>
                    <tr class="isadmin">
                        <td>使用者權限</td>
                        <td>
                            <p>
                                <input name="isadmin" id="normaluser" type="radio" v-model="user.user.ud_admin" value="0" checked="checked">
                                <label name="isadmin" for="normaluser">一般使用者</label>
                            </p>
                            <p>
                                <input name="isadmin" id="adminuser" type="radio" v-model="user.user.ud_admin" value="1">
                                <label name="isadmin" for="adminuser">管理員</label>
                            </p>
                        </td>
                    </tr>
                    <tr class="">
                        <td></td>
                        <td>
                            <button @click="createUser()" type="button" class="btn_save">送出</button>
                            <a href="javascript:void(0)" @click="changeRouter('user&list')" class="btn btn-cancel">返回</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <notifications position='top center'/>
</div>
</template>
<script>
import PieChart from '../components/PieChart.js'
import Datepicker from 'vuejs-datepicker';
import Clipboard from "clipboard";
import { SlickList, SlickItem } from 'vue-slicksort';
import { Bubble } from 'vue-chartjs';
export default {
    components: {
        PieChart,
        Datepicker,
        Clipboard,
        SlickList,
        SlickItem
    },
	data() {
        return {
            gg:true,
            //共用資訊////////////////////////////////////////////////////
            nowPage:'index', // index:首頁 project:網版頁 logo:合作夥伴頁 user:使用者頁 transaction:紀錄頁
            nowView:'list', // list:列表頁 create:新增頁 modify:修改頁
            userdata:[], // 使用者資料
            //各頁排序依據/////////////////////////////////////////////////
            index_orderBy:'pd_date', // 網版列表排序
            project_orderBy:'pd_date', // 網版列表排序
            //各頁資訊////////////////////////////////////////////////////
            index:{/// 首頁
                project_count:'', // 網版總數
                layout_count:[], // 各網版布局總數
                style_count:[], // 各網版風格總數
                color_count:[], // 各網版色系總數
                newestdata:[], // 最新五筆的固定網版名稱
                projectdata:[], // 最新三筆的固定網版資料
            },
            project:{/// 網版
                display:'list', // 列表顯示方式 list or image
                //各式資料////
                projects:[], // 全部固定網版資料
                project:{}, // 單一固定網版資料
                //頁碼相關////
                limit:10, //每頁數的筆數
                page:1, // 目前頁數
                //搜尋相關////
                composing:true, // 監聽搜尋框輸入
                pd_num:'', // 搜尋字串
                //資料夾路徑//////////////////////////////////////////////////
                live_demo:'/_template/',
            },
            logo:{/// 合作夥伴
                display:'list', // 列表顯示方式 list or image
                //各式資料////////////////////////////////////////////////////
                logos:[], // 全部合作夥伴資料
                sorts:[],
                sort:false,
                logo:{}, // 單一合作夥伴資料
                //頁碼相關////////////////////////////////////////////////////
                limit:10, //每頁數的筆數
                page:1, // 目前頁數
                //搜尋相關////////////////////////////////////////////////////
                composing:true, // 監聽搜尋框輸入
                ld_name:'', // 搜尋字串
            },
            user:{/// 使用者
                display:'personal', // 修改頁顯示方式 personal:一般使用者 admin:管理員
                //各式資料////////////////////////////////////////////////////
                users:[], // 全部使用者資料
                user:{}, // 單一使用者資料
                //頁碼相關////////////////////////////////////////////////////
                limit:15, //每頁數的筆數
                page:1, // 目前頁數
                //搜尋相關////////////////////////////////////////////////////
                composing:true, // 監聽搜尋框輸入
                ud_name:'', // 搜尋字串
            },
            transaction:{/// 異動紀錄
                //各式資料////////////////////////////////////////////////////
                records:[], // 全部異動紀錄資料
                lastlogins:[], // 全部使用者最後登入的資料
                //頁碼相關////////////////////////////////////////////////////
                tran_limit:10, //每頁數的筆數
                tran_page:1, // 目前頁數
                login_limit:10, //每頁數的筆數
                login_page:1, // 目前頁數
            },
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
        chart1:function(){//網版布局
            let self = this;
            var labels = ['直向大小', '橫向大小', '多面切割', '對角線', '無規則'];
            return{
            labels: labels,
            datasets: [{
                data: self.index.layout_count,
                backgroundColor: [
                    //資料顏色
                    "#7d66f4",
                    "#ff7e00",
                    "#ffd200",
                    "#bc00ff",
                    "#f94c4c"
                ],
            }]
            }
        },
        chart2:function(){//網版風格
            let self = this;
            var labels2 = ['前衛時尚', '復古典雅', '精緻華麗', '簡約大氣'];
            return{
            labels: labels2,
            datasets: [{
                data: self.index.style_count,
                backgroundColor: [
                    //資料顏色
                    "#7d66f4",
                    "#ff7e00",
                    "#ffd200",
                    "#bc00ff"
                ],
            }]
            }
        },
        chart3:function(){//網版色系
            let self = this;
            var labels3 = ['white', 'grey', 'black', 'blue', 'green', 'yellow', 'brown', 'orange', 'red', 'pink', 'purple'];
            return{
            labels: labels3,
            datasets: [{
                data: [self.index.color_count.white,self.index.color_count.grey,self.index.color_count.black,self.index.color_count.blue,self.index.color_count.green,self.index.color_count.yellow,self.index.color_count.brown,self.index.color_count.orange,self.index.color_count.red,self.index.color_count.pink,self.index.color_count.purple],
                backgroundColor: [
                    //資料顏色
                    "#fff",
                    "#999",
                    "#000",
                    "#008fe4",
                    "#46c100",
                    "#f1f500",
                    "#5b2900",
                    "#ff7e00",
                    "#f31809",
                    "#ff007e",
                    "#bc00ff"
                ],
            }]
            }
        },
        newProjects:function(){
            let self = this;
            if(self.project.projects){
                if(self.project.projects.length > 0){
                    if(self.project.limit == 'all'){
                        return self.project.projects;
                    }else{
                        var start = (parseInt(self.project.page) - 1) * parseInt(self.project.limit);
                        return self.project.projects.slice(start, start + parseInt(self.project.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        newLogos:function(){
            let self = this;
            if(self.logo.logos){
                if(self.logo.logos.length > 0){
                    if(self.logo.limit == 'all'){
                        return self.logo.logos;
                    }else{
                        var start = (parseInt(self.logo.page) - 1) * parseInt(self.logo.limit);
                        return self.logo.logos.slice(start, start + parseInt(self.logo.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        newUsers:function(){
            let self = this;
            if(self.user.users){
                if(self.user.users.length > 0){
                    if(self.user.limit == 'all'){
                        return self.user.users;
                    }else{
                        var start = (parseInt(self.user.page) - 1) * parseInt(self.user.limit);
                        return self.user.users.slice(start, start + parseInt(self.user.limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        newRecords:function(){
            let self = this;
            if(self.transaction.records){
                if(self.transaction.records.length > 0){
                    if(self.transaction.tran_limit == 'all'){
                        return self.transaction.records;
                    }else{
                        var start = (parseInt(self.transaction.tran_page) - 1) * parseInt(self.transaction.tran_limit);
                        return self.transaction.records.slice(start, start + parseInt(self.transaction.tran_limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        newLastlogins:function(){
            let self = this;
            if(self.transaction.lastlogins){
                if(self.transaction.lastlogins.length > 0){
                    if(self.transaction.login_limit == 'all'){
                        return self.transaction.lastlogins;
                    }else{
                        var start = (parseInt(self.transaction.login_page) - 1) * parseInt(self.transaction.login_limit);
                        return self.transaction.lastlogins.slice(start, start + parseInt(self.transaction.login_limit));
                    }
                }else{
                    return [];
                }
            }else{
                return [];
            }
        },
        total:function(){//版型總數
            let self = this;
            if(self.nowPage == 'project'){
                if(self.project.projects){
                    return self.project.projects.length;
                }else{
                    return 0;
                }
            }else if(self.nowPage == 'logo'){
                if(self.logo.logos){
                    return self.logo.logos.length;
                }else{
                    return 0;
                }
            }else if(self.nowPage == 'user'){
                if(self.user.users){
                    return self.user.users.length;
                }else{
                    return 0;
                }
            }else if(self.nowPage == 'transaction'){
                if(self.nowView == 'record'){
                    if(self.transaction.records){
                        return self.transaction.records.length;
                    }else{
                        return 0;
                    }
                }else if(self.nowView == 'lastlogin'){
                    if(self.transaction.lastlogins){
                        return self.transaction.lastlogins.length;
                    }else{
                        return 0;
                    }
                }
            }
        },
        count:function(){
            let self = this;
            if(self.nowPage == 'project'){
                if(self.project.limit == 'all'){
                    self.project.page = 1;
                    return 1;
                }else{
                    return Math.ceil(self.total / self.project.limit)
                }
            }else if(self.nowPage == 'logo'){
                if(self.logo.limit == 'all'){
                    self.logo.page = 1;
                    return 1;
                }else{
                    return Math.ceil(self.total / self.logo.limit)
                }
            }else if(self.nowPage == 'user'){
                if(self.user.limit == 'all'){
                    self.user.page = 1;
                    return 1;
                }else{
                    return Math.ceil(self.total / self.user.limit)
                }
            }else if(self.nowPage == 'transaction'){
                
                if(self.nowView == 'record'){
                    if(self.transaction.tran_limit == 'all'){
                        self.transaction.tran_page = 1;
                        return 1;
                    }else{
                        return Math.ceil(self.total / self.transaction.tran_limit)
                    }
                }else if(self.nowView == 'lastlogin'){
                    if(self.transaction.login_limit == 'all'){
                        self.transaction.login_page = 1;
                        return 1;
                    }else{
                        return Math.ceil(self.total / self.transaction.login_limit)
                    }
                }
            }
            
        },
        showData:function(){//1:有資料 2:無相符資料 3:資料庫沒資料
            let self = this;
            if(self.nowPage == 'project'){
                if(!self.project.projects){
                    return 3;
                }else{
                    if(self.project.projects.length > 0){
                        return 1;
                    }else{
                        return 2;
                    }
                }
            }else if(self.nowPage == 'logo'){
                if(!self.logo.logos){
                    return 3;
                }else{
                    if(self.logo.logos.length > 0){
                        return 1;
                    }else{
                        return 2;
                    }
                }
            }else if(self.nowPage == 'user'){
                if(!self.user.users){
                    return 3;
                }else{
                    if(self.user.users.length > 0){
                        return 1;
                    }else{
                        return 2;
                    }
                }
            }else if(self.nowPage == 'transaction'){
                if(self.nowView == 'record'){
                    if(!self.transaction.records){
                        return 3;
                    }else{
                        if(self.transaction.records.length > 0){
                            return 1;
                        }else{
                            return 2;
                        }
                    }
                }else if(self.nowView == 'lastlogin'){
                    if(!self.transaction.lastlogins){
                        return 3;
                    }else{
                        if(self.transaction.lastlogins.length > 0){
                            return 1;
                        }else{
                            return 2;
                        }
                    }
                }
            }
        },
        pd_template_img:function(){//示意圖
            let self = this;
            if(self.project.project.pd_template_img){
                return JSON.parse(self.project.project.pd_template_img);
            }else{
                return [];
            }
            
        },
        pd_model_img:function(){//Model圖
            let self = this;
            if(self.project.project.pd_model_img){
                return JSON.parse(self.project.project.pd_model_img);
            }else{
                return [];
            }
        }
    },
    methods: {
        init: function () {
            
        },
        //////////////////////// 共用功能 //////////////////////
        ///
        // 檢查該使用者是否可以瀏覽該頁面
        checkUrl:function(){
            let self = this;
            let url = new URL(location.href);
            let hash = url.hash.split("#/");
            //切換頁面
            self.changeRouter(hash[1]);            
        },
        // 更換router
        changeRouter:function(view){//連結邏輯 主頁面 & 頁面功能 & 目標編號(選填)
            let self = this;
            if(view != ''){
                var array = view.split('&');
                if(!array){
                    self.setRouter('index','list');
                }else{
                    if(array[0] == 'project'){ /// 網版頁
                        if(array[1] == 'list'){
                            self.setRouter('project','list');
                        }else if(array[1] == 'create'){
                            self.setRouter('project','create');
                            self.initProject();
                        }else if(array[1] == 'modify'){
                            if(array[2]){
                                self.getProject(array[2]);
                                self.setRouter('project','modify',array[2]);
                            }else{
                                self.setRouter('project','list');
                                self.notification('連結有誤','failure');
                            }
                        }else{
                            self.setRouter('project','list');
                            self.notification('連結有誤','failure');
                        }
                    }else if(array[0] == 'logo'){ /// 合作夥伴頁
                        if(array[1] == 'list'){
                            self.setRouter('logo','list');
                        }else if(array[1] == 'create'){
                            self.setRouter('logo','create');
                            self.initLogo();
                        }else if(array[1] == 'modify'){
                            if(array[2]){
                                self.getLogo(array[2]);
                                self.setRouter('logo','modify',array[2]);
                            }else{
                                self.setRouter('logo','list');
                                self.notification('連結有誤','failure');
                            }
                        }else{
                            self.setRouter('logo','list');
                            self.notification('連結有誤','failure');
                        }
                    }else if(array[0] == 'user'){ /// 使用者頁
                        if(array[1] == 'list'){
                            self.setRouter('user','list');
                        }else if(array[1] == 'create'){
                            self.setRouter('user','create');
                            self.initUser();
                        }else if(array[1] == 'modify'){
                            if(array[2]){
                                self.getUser(array[2]);
                                self.setRouter('user','modify',array[2]);
                            }else{
                                self.setRouter('user','list');
                                self.notification('連結有誤','failure');
                            }
                        }else{
                            self.setRouter('user','list');
                            self.notification('連結有誤','failure');
                        }
                    }else if(array[0] == 'transaction'){ /// 異動紀錄頁
                        if(array[1] == 'record'){
                            self.setRouter('transaction','record');
                        }else if(array[1] == 'lastlogin'){
                            self.setRouter('transaction','lastlogin');
                        }
                    }else{
                        self.setRouter('index','list'); /// 首頁
                    }
                }
            }else{
                self.setRouter('index','list');
            }
        },
        // 設定連結顯示樣式
        setRouter:function(page,view,id = false){
            let self = this;
            self.nowPage = page;
            self.nowView = view;
            if(id){
                this.$router.replace(page+'&'+view+'&'+id).catch(err => {});
            }else{
                this.$router.replace(page+'&'+view).catch(err => {});
            }
        },
        // 開闔左側選單
        dropGroup:function(e){
            let self = this;
            $(e.target).parent().find('.drop-group').slideToggle('drop-open');
            $(e.target).toggleClass('drop-title-down');
        },
        // 回最上面位置
        goToTop:function(){
            $('html').animate({ 'scrollTop': 0 }, 250);
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
                        self.project.project.pd_view_img = file_path;
                    }else if(target == 'pd_banner_img'){
                        self.project.project.pd_banner_img = file_path;
                    }else if(target.indexOf('template') != -1){
                        var array = target.split('_');
                        self.pd_template_img[array[1]] = file_path;
                        self.project.project.pd_template_img = JSON.stringify(self.pd_template_img);
                    }else if(target.indexOf('model') != -1){
                        var array = target.split('_');
                        self.pd_model_img[array[1]] = file_path;
                        self.project.project.pd_model_img = JSON.stringify(self.pd_model_img);
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
        // 改變呈現方式
        changeDisplay:function(type){
            let self = this;
            if(self.nowPage == 'project'){
                self.project.display = type == 'image' ? 'list' : 'image';
            }else if(self.nowPage == 'logo'){
                self.logo.display = type == 'image' ? 'list' : 'image';
            }
        },
        ///
        //////////////////////// 共用功能 end ////////////////////

        //////////////////////// 初始化各項目 //////////////////////
        ///
        // 版型資料初始化
        initProject:function(){
            let self = this;
            this.project.project = {};
            this.project.project = Object.assign({}, this.project.project, {
                pd_num:'',
                pd_date:'',
                pd_show: 0,
                pd_new: 0,
                pd_hot: 0,
                pd_layout: 1,
                pd_style: 1,
                pd_colors:'[]',
                pd_type: 0,
                pd_live: 0,
                pd_live_url: '',
                pd_view_img:'',
                pd_banner_img:'',
                pd_template_img:'[]',
                pd_model_img:'[]',
                pd_notices:'',
            })
        },
        // 合作夥伴資料初始化
        initLogo:function(){
            let self = this;
            this.logo.logo = {};
            this.logo.logo = Object.assign({}, this.logo.logo, {
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
        // 使用者資料初始化
        initUser:function(){
            let self = this;
            this.user.user = {};
            this.user.user = Object.assign({}, this.user.user, {
                ud_name: '',
                ud_account: '',
                ud_password: '',
                ud_status: 0,
                ud_admin: 0,
                ud_last_login: ''
            })
        },
        ///
        //////////////////////// 初始化各項目 end //////////////////

        //////////////////////// 各頁面功能 //////////////////////
        ///
        // 檢查該網版色系
        check_color:function(color){
            let self = this;

            if(self.project.project.pd_colors){
                if(self.project.project.pd_colors.indexOf(color) != -1){
                    return true;
                }else{
                    return false;
                }
            }
        },
        // 初始化複製功能
        initClipboard(){
            let self = this;
            // 創建
            const clipboard = new Clipboard(this.$refs.copyUrl,{
                text: function(){
                    return self.webbbin_front + self.project.project.pd_live_url;
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
        // 選擇色系
        select_color:function(color){
            let self = this;
            if(self.project.project.pd_colors || self.project.project.pd_colors == '[]'){
                var pd_colors = JSON.parse(self.project.project.pd_colors);
                var array = [];
                if(self.check_color(color)){
                    for (let i = 0; i < pd_colors.length; i++) {
                        if(pd_colors[i] != color){
                            array.push(pd_colors[i]);
                        }
                    }
                    self.project.project.pd_colors = JSON.stringify(array);
                }else{
                    if(pd_colors.length > 2){
                        self.notification('最多選擇三個色系','warning');
                    }else{
                        pd_colors.push(color);
                        self.project.project.pd_colors = JSON.stringify(pd_colors);
                    }
                    
                }
            }else{
                var array = [];
                array.push(color);
                self.project.project.pd_colors = JSON.stringify(array);
            }
                
        },
        // 產生路徑
        add_url:function(){
            let self = this;
            if(!self.project.project.pd_num){
                self.notification('請先輸入網版名稱','failure');
            }else{
                self.project.project.pd_live_url = self.project.live_demo + self.project.project.pd_num;
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
            self.project.project.pd_template_img = JSON.stringify(array);
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
            self.project.project.pd_model_img = JSON.stringify(array);
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
            self.project.project.pd_template_img = JSON.stringify(array);
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
            self.project.project.pd_model_img = JSON.stringify(array);
        },
        ///
        //////////////////////// 各頁面功能 end //////////////////

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
            self.logo.logo.ld_img = src;
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
            // console.dir(files) // 看看File長什麼樣子
            if(files.length){
                $("#previewDiv").empty() // 清空當下預覽
                self.previewFiles(files)
            }
        },
        ///
        //////////////////////// 圖片上傳功能 end ////////////////////

        //////////////////////// 查詢功能 //////////////////////
        ///
        // 監聽搜尋框 注音輸入開始
        listen_input_start:function(){
            let self = this;
            if(self.nowPage == 'project'){
                self.project.composing = false;
            }else if(self.nowPage == 'logo'){
                self.logo.composing = false;
            }else if(self.nowPage == 'user'){
                self.user.composing = false;
            }
        },
        // 監聽搜尋框 注音輸入結束
        listen_input_end:function(){
            let self = this;
            if(self.nowPage == 'project'){
                self.project.composing = true;
            }else if(self.nowPage == 'logo'){
                self.logo.composing = true;
            }else if(self.nowPage == 'user'){
                self.user.composing = true;
            }
        },
        // 查詢功能
        search: function (id = null) {
        	let self = this;
            setTimeout(function(){
                if(self.nowPage == 'project'){
                    if(self.project.composing){
                        self.project.page = 1;
                        self.getProjects(self.project_orderBy);
                    }
                }else if(self.nowPage == 'logo'){
                    if(self.logo.composing){
                        self.logo.page = 1;
                        self.getLogos();
                    }
                }else if(self.nowPage == 'user'){
                    if(self.user.composing){
                        self.user.page = 1;
                        self.getUsers();
                    }
                }
            },10)
        },
        ///
        //////////////////////// 查詢功能 end //////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得首頁全部資料
        getAllData:function(){
            let self = this;
            
            axios.get('../all-data')
                .then(function (response) {
                    //登入者資訊
                    self.userdata = response.data.userdata;
                    //首頁相關
                    self.index_orderBy = response.data.index.orderBy;
                    self.index.project_count = response.data.index.project_count;
                    self.index.layout_count = response.data.index.layout_count;
                    self.index.style_count = response.data.index.style_count;
                    self.index.color_count = response.data.index.color_count;
                    self.index.newestdata = response.data.index.newestdata;
                    self.index.projectdata = response.data.index.projectdata;
                    //網版相關
                    self.project.orderBy = response.data.project.orderBy;
                    self.project.pd_num = '';
                    self.project.projects = response.data.project.projects;
                    //合作夥伴相關
                    self.logo.ld_name = '';
                    self.logo.logos = response.data.logo.logos;
                    self.logo.sorts = response.data.logo.logos;
                    //使用者相關
                    self.user.ld_name = '';
                    self.user.users = response.data.user.users;
                    //異動記錄相關
                    self.transaction.records = response.data.transaction.records;
                    self.transaction.lastlogins = response.data.transaction.lastlogins;
                })
                .catch(function (response) {
                    self.notification('系統出錯：getAllData()','failure');
                });
        },
        //取得最新三筆的網版資料
        getProjectData:function(orderBy){
            let self = this;
            
            axios.get('../project-three-data/'+orderBy)
                .then(function (response) {
                    self.index.projectdata = response.data;
                    self.index.orderBy = orderBy;
                })
                .catch(function (response) {
                    self.notification('系統出錯：getProjectData()','failure');
                });
        },
        //取得網版資料
        getProjects:function(orderBy){
            let self = this;

            axios.get('../projects?orderBy='+orderBy+'&pd_num='+self.project.pd_num)
                .then(function (response) {
                    self.project.projects = response.data.projects;
                    self.project_orderBy = response.data.orderBy;
                    if(response.data.pd_num){
                        self.project.pd_num = response.data.pd_num;
                    }else{
                        self.project.pd_num = '';
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：getProjects()','failure');
                });
        },
        //取得單一網版資料
        getProject:function(id){
            let self = this;

            axios.get('../project?pd_id='+id)
                .then(function (response) {
                    self.project.project = response.data;
                })
                .catch(function (response) {
                    self.changeRouter('project&list');
                    self.notification('系統出錯：getProject()','failure');
                });
        },
        //取得合作夥伴資料
        getLogos:function(){
            let self = this;

            axios.get('../logos?ld_name='+self.logo.ld_name)
                .then(function (response) {
                    self.logo.logos = response.data.logos;
                })
                .catch(function (response) {
                    self.notification('系統出錯：getLogos()','failure');
                });
        },
        //取得單一合作夥伴資料
        getLogo:function(id){
            let self = this;

            axios.get('../logo?ld_id='+id)
                .then(function (response) {
                    self.logo.logo = response.data;
                })
                .catch(function (response) {
                    self.changeRouter('logo&list');
                    self.notification('系統出錯：getLogo()','failure');
                });
        },
        //取得合作夥伴資料排序
        getSorts:function(){
            let self = this;

            axios.get('../logos')
                .then(function (response) {
                    self.logo.sorts = response.data.logos;
                })
                .catch(function (response) {
                    self.notification('系統出錯：getSorts()','failure');
                });
        },
        //取得使用者資料
        getUsers:function(){
            let self = this;

            axios.get('../users?ud_name='+self.user.ud_name)
                .then(function (response) {
                    self.user.users = response.data.users;
                    if(response.data.ud_name){
                        self.user.ud_name = response.data.ud_name;
                    }else{
                        self.user.ud_name = '';
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：getUsers()','failure');
                });
        },
        //取得單一使用者資料
        getUser:function(id){
            let self = this;
            axios.get('../user?ud_id='+id)
                .then(function (response) {
                    
                    self.user.user = response.data;
                    self.user.user.ud_password = '';
                })
                .catch(function (response) {
                    self.changeRouter('user&list');
                    self.notification('系統出錯：getUser()','failure');
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
            if(!self.project.project.pd_num){
                self.notification('請輸入網版名稱','warning');
                return false;
            }
            //時間格式轉換
            if(!self.project.project.pd_date){
                self.notification('請選擇上線日期','warning');
                return false;
            }else{
                var fromDate = new Date(self.project.project.pd_date);
                var year = fromDate.getFullYear(); 
                var month = fromDate.getMonth()+1 < 10 ? '0'+ (fromDate.getMonth()+1) : (fromDate.getMonth()+1);
                var day = fromDate.getDate() < 10 ? '0'+ fromDate.getDate(): fromDate.getDate();
                self.project.project.pd_date = year+'-'+month+'-'+day;
            }
            //色系
            var pd_colors = JSON.parse(self.project.project.pd_colors);
            if(pd_colors.length < 1){
                self.notification('至少選擇一個色系','warning');
                return false;
            }
            //網版dome
            if(self.project.project.pd_live){
                var pd_live_url = $('input[name=pd_live_url]').val();
                if(pd_live_url == ''){
                    self.notification('請輸入Demo路徑','warning');
                    return false;
                }else{
                    self.project.project.pd_live_url = $('input[name=pd_live_url]').val();
                }
            }else{
                self.project.project.pd_live_url = '';
            }
            //列表圖
            var pd_view_img = $('input[name="pd_view_img"]').val();
            if(pd_view_img == ''){
                self.notification('請上傳列表圖','warning');
                return false;
            }else{
                self.project.project.pd_view_img = pd_view_img;
            }
            //banner圖
            var pd_banner_img = $('input[name="pd_banner_img"]').val();
            if(pd_banner_img == ''){
                self.notification('請上傳Banner','warning');
                return false;
            }else{
                self.project.project.pd_banner_img = pd_banner_img;
            }
            //示意圖
            var pd_template_img = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_template_img.push($(this).find('input').val());
                }
            })
            self.project.project.pd_template_img = JSON.stringify(pd_template_img);
            //model圖
            var pd_model_img = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_model_img.push($(this).find('input').val());
                }
            })
            self.project.project.pd_model_img = JSON.stringify(pd_model_img);
            // 回傳修改
            axios.post('/project-create',self.project.project) //新增 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        // self.project.page = 1;
                        self.project.project = {};
                        self.changeRouter('project&list');
                        self.getProjects(self.project_orderBy);
                        self.notification('新增成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：createProject()','failure');
                });
        },
        //新增合作夥伴資料
        createLogo:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.logo.logo.ld_name){
                self.notification('請輸入合作夥伴名稱','warning');
                return false;
            }
            //圖片
            if(!self.logo.logo.ld_img){
                self.notification('請上傳圖片','warning');
                return false;
            }
            // 回傳修改
            axios.post('/logo-create',self.logo.logo) //修改
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        // self.logo.page = 1;
                        self.logo.logo = {};
                        self.changeRouter('logo&list');
                        self.getLogos();
                        self.getSorts();
                        self.notification('新增成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：createLogo()','failure');
                });
        },
        //新增使用者
        createUser:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //帳號
            if(!self.user.user.ud_account){
                self.notification('請輸入使用者帳號','warning');
                return false;
            }
            //密碼
            if(!self.user.user.ud_password){
                self.notification('請輸入使用者密碼','warning');
                return false;
            }
            //名稱
            if(!self.user.user.ud_name){
                self.notification('請輸入使用者名稱','warning');
                return false;
            }
            // 回傳修改
            axios.post('/user-create',self.user.user) //新增 - 使用者資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        // self.user.page = 1;
                        self.user.user = {};
                        self.changeRouter('user&list');
                        self.getUsers();
                        self.notification('新增成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：createUser()','failure');
                });
        },
        ///
        //////////////////////// 新增區塊 end ////////////////////////

        //////////////////////// 修改區塊 ///////////////////////////
        ///
        //修改合作夥伴排序
        modifyLogoSort:function(){
            let self = this;
            axios.post('/logosort-modify',self.logo.sorts) //修改 - 
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.getLogos();
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification(response,'failure');
                });
        },
        //修改顯示狀態
        modifyShow:function(id,pd_show){
            let self = this;
            var json = {};

            json.pd_id = id;
            json.pd_show = pd_show ? 0 : 1;

            axios.post('/project-modify',json) //修改 - 
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        if(self.nowPage == 'index'){
                            self.getProjectData(self.index_orderBy);
                        }else if(self.nowPage == 'project'){
                            self.getProjects(self.project_orderBy);
                        }
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：modifyShow()','failure');
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
                        if(self.nowPage == 'index'){
                            self.getProjectData(self.index_orderBy);
                        }else if(self.nowPage == 'project'){
                            self.getProjects(self.project_orderBy);
                        }
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：modifyNew()','failure');
                });
        },
        //修改版型資料
        modifyProject:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.project.project.pd_num){
                self.notification('請輸入網版名稱','warning');
                return false;
            }
            //時間格式轉換
            if(!self.project.project.pd_date){
                self.notification('請選擇上線日期','warning');
                return false;
            }else{
                var fromDate = new Date(self.project.project.pd_date);
                var year = fromDate.getFullYear(); 
                var month = fromDate.getMonth() < 10 ? '0'+ (fromDate.getMonth()+1) : (fromDate.getMonth()+1);
                var day = fromDate.getDate() < 10 ? '0'+ fromDate.getDate(): fromDate.getDate();
                self.project.project.pd_date = year+'-'+month+'-'+day;
            }
            
            //色系
            var pd_colors = JSON.parse(self.project.project.pd_colors);
            if(pd_colors.length < 1){
                self.notification('至少選擇一個色系','warning');
                return false;
            }
            //網版dome
            if(self.project.project.pd_live){
                var pd_live_url = $('input[name=pd_live_url]').val();
                if(pd_live_url == ''){
                    self.notification('請輸入Demo路徑','warning');
                    return false;
                }
            }else{
                self.project.project.pd_live_url = '';
            }
            //列表圖
            var pd_view_img = $('input[name="pd_view_img"]').val();
            if(pd_view_img == ''){
                self.notification('請上傳列表圖','warning');
                return false;
            }else{
                self.project.project.pd_view_img = pd_view_img;
            }
            //banner圖
            var pd_banner_img = $('input[name="pd_banner_img"]').val();
            if(pd_banner_img == ''){
                self.notification('請上傳Banner','warning');
                return false;
            }else{
                self.project.project.pd_banner_img = pd_banner_img;
            }
            //示意圖
            var pd_template_img = [];
            $('.template_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_template_img.push($(this).find('input').val());
                }
            })
            self.project.project.pd_template_img = JSON.stringify(pd_template_img);
            //model圖
            var pd_model_img = [];
            $('.model_image').each(function(){
                if($(this).find('input').val() != ''){
                    pd_model_img.push($(this).find('input').val());
                }
            })
            self.project.project.pd_model_img = JSON.stringify(pd_model_img);
            // 回傳修改
            axios.post('/project-modify',self.project.project) //修改 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.project.page = 1;
                        self.project.project = {};
                        self.changeRouter('project&list');
                        self.getProjects(self.project_orderBy);
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：modifyProject()','failure');
                });
        },
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
                    self.notification('系統出錯：modifySort()','failure');
                });
        },
        //修改合作夥伴資料
        modifyLogo:function(){
            let self = this;
            /// 檢查必填欄位是否傳入
            //名稱
            if(!self.logo.logo.ld_name){
                self.notification('請輸入合作夥伴名稱','warning');
                return false;
            }
            //圖片
            if(!self.logo.logo.ld_img){
                self.notification('請上傳圖片','warning');
                return false;
            }
            // 回傳修改
            axios.post('/logo-modify',self.logo.logo) //修改
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.logo.page = 1;
                        self.logo.logo = {};
                        self.changeRouter('logo&list');
                        self.getLogos();
                        self.getSorts();
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：modifyLogo()','failure');
                });
        },
        //修改使用者資料
        modifyUser:function(){
            let self = this;
            if(self.user.display == 'personal'){
                /// 檢查必填欄位是否傳入
                //名稱
                if(!self.userdata.ud_name){
                    self.notification('請輸入使用者名稱','warning');
                    return false;
                }else{
                    self.user.user.ud_name = self.userdata.ud_name;
                }
                //舊密碼
                if((self.user.user.ud_password || self.user.user.ud_password == 0) && self.user.user.ud_password != ''){
                    if(!self.user.user.ud_new_password && self.user.user.ud_new_password != 0){
                        self.notification('請輸入新密碼','warning');
                        return false;
                    }else if(!self.user.user.ud_new_password_confirm && self.user.user.ud_new_password_confirm != 0){
                        self.notification('請輸入確認密碼','warning');
                        return false;
                    }else if(self.user.user.ud_new_password != self.user.user.ud_new_password_confirm){
                        self.notification('新密碼和確認密碼不一致','warning');
                        return false;
                    }
                }
                self.user.user.ud_id = self.userdata.ud_id;
            }else if(self.user.display == 'admin'){
                /// 檢查必填欄位是否傳入
                //名稱
                if(!self.user.user.ud_name){
                    self.notification('請輸入使用者名稱','warning');
                    return false;
                }
                //新密碼
                if((self.user.user.ud_new_password || self.user.user.ud_new_password == 0) && self.user.user.ud_new_password != ''){
                    if(self.user.user.ud_new_password == self.user.user.ud_password){
                        self.notification('新密碼不能跟舊密碼一樣','warning');
                        return false;
                    }else{
                        self.user.user.ud_password = self.user.user.ud_new_password;
                    }
                }
            }
            // 回傳修改
            axios.post(self.user.display == 'personal' ? 'user-modify-personal':'/user-modify',self.user.user) //修改 - 版型資料
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.user.page = 1;
                        self.user.user = {};
                        self.changeRouter('user&list');
                        self.getUsers();
                        self.notification('修改成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：modifyUser()','failure');
                });
        },
        ///
        //////////////////////// 修改區塊 end ////////////////////////

        //////////////////////// 刪除區塊 ///////////////////////////
        ///
        //刪除資料
        deleteProject:function(id){
            let self = this;
            var json = {};
            json.pd_id = id;
            
            axios.post('/project-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.project.page = 1;
                        self.project.project = {};
                        self.changeRouter('project&list');
                        self.getProjects(self.project_orderBy);
                        self.notification('刪除成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：deleteProject()','failure');
                });
        },
        //刪除資料
        deleteLogo:function(id){
            let self = this;
            var json = {};
            json.ld_id = id;
            
            axios.post('/logo-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        self.logo.page = 1;
                        self.logo.logo = {};
                        self.changeRouter('logo&list');
                        self.getLogos();
                        self.getSorts();
                        self.notification('刪除成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：deleteLogo()','failure');
                });
        },
        //刪除資料
        deleteUser:function(id){
            let self = this;
            var json = {};
            json.ud_id = id;

            axios.post('/user-delete',json) //刪除
                .then(function (response) {
                    if(response.data.result == 'ok'){
                        // self.user.page = 1;
                        self.user.user = {};
                        self.changeRouter('user&list');
                        self.getUsers();
                        self.notification('刪除成功','success');
                    }else{
                        self.notification(response.data.result,'failure');
                    }
                })
                .catch(function (response) {
                    self.notification('系統出錯：deleteUser()','failure');
                });
        },
        ///
        //////////////////////// 刪除區塊 end ////////////////////////

        //////////////////////// 推播框設定 //////////////////////////
        ///
        // 推撥提示框
        notification:function(string,type){
            if(type == 'success'){
                this.$notify({
                    title: 'SUCCESS',
                    text: string,
                });
            }else if(type == 'failure'){
                this.$notify({
                    title: 'FAILURE',
                    text: string,
                });
            }else if(type == 'warning'){
                this.$notify({
                    title: 'WARNING',
                    text: string,
                })
            }
        },
        ///
        //////////////////////// 推播框設定 end /////////////////////
    },
    watch: {
        index_orderBy:function(){
            let self = this;
            self.getProjectData(self.index_orderBy);
        },
        project_orderBy:function(){
            let self = this;
            self.getProjects(self.project_orderBy);
        }
	}
}
</script>