<style scoped></style>
<template>
<div id="mainBody" class="clearfix">
    <!--header-->
    <div id="header" class="clearfix">
        <div class="header-wrap">
            <!-- logo -->
            <a href="/allinone" class="logo"></a>
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
        <div class="content-wrap clearfix">
            <!--top-->
            <div class="first-wrap">
                <div class="first-item clearfix">
                    <div class="title">網版總數</div>
                    <div class="first-temp-num clearfix">
                        <p>{{project_count}}</p>
                    </div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li v-for="item in newestdata"><span></span><a :href="'/project-list?pd_id='+item.pd_id+'#/modify'" :title="item.pd_num">{{item.pd_num}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="first-item">
                    <div class="title">網版佈局</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="chart1_bg1"></span>直向大小：{{layout_count[0]}}</li>
                            <li><span class="chart1_bg2"></span>橫向大小：{{layout_count[1]}}</li>
                            <li><span class="chart1_bg3"></span>多面切割：{{layout_count[2]}}</li>
                            <li><span class="chart1_bg4"></span>對角線：{{layout_count[3]}}</li>
                            <li><span class="chart1_bg5"></span>無規則：{{layout_count[4]}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart1" :chart-data="chart1"></pie-chart>
                    <!-- <canvas id="chart1"></canvas> -->
                </div>
                <div class="first-item">
                    <div class="title">網版風格</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="chart2_bg1"></span>前衛時尚：{{style_count[0]}}</li>
                            <li><span class="chart2_bg2"></span>復古典雅：{{style_count[1]}}</li>
                            <li><span class="chart2_bg3"></span>精緻華麗：{{style_count[2]}}</li>
                            <li><span class="chart2_bg4"></span>簡約大氣：{{style_count[3]}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart2" :chart-data="chart2"></pie-chart>
                </div>
                <div class="first-item">
                    <div class="title">網版色系</div>
                    <div class="first-temp-wrap">
                        <ul>
                            <li><span class="white"></span>white：{{color_count['white']}}</li>
                            <li><span class="grey"></span>grey：{{color_count['grey']}}</li>
                            <li><span class="black"></span>black：{{color_count['black']}}</li>
                            <li><span class="blue"></span>blue：{{color_count['blue']}}</li>
                            <li><span class="green"></span>green：{{color_count['green']}}</li>
                            <li><span class="yellow"></span>yellow：{{color_count['yellow']}}</li>
                            <li><span class="brown"></span>brown：{{color_count['brown']}}</li>
                            <li><span class="orange"></span>orange：{{color_count['orange']}}</li>
                            <li><span class="red"></span>red：{{color_count['red']}}</li>
                            <li><span class="pink"></span>pink：{{color_count['pink']}}</li>
                            <li><span class="purple"></span>purple：{{color_count['purple']}}</li>
                        </ul>
                    </div>
                    <!--圓餅圖-->
                    <pie-chart id="chart3" :chart-data="chart3"></pie-chart>
                </div>
            </div>
            <!--bottom-->
            <div class="content-body first-content clearfix ">
                <div class="title">最新網版列表</div>
                <select v-model="orderBy" name="orderList" id="orderList">
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
                        <div v-for="item in projectdata" class="template-item">
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
                                <a :href="'/project-list#/modify&'+item.pd_id" class="btn btn-s" title="編輯"></a>
                            </div>
                            <!-- Demo連結 -->
                            <div class="temp-demo js-sv">
                                <a v-if="item.pd_live == 1" :href="'http://web.bbinpartner.com/demo/'+item.pd_id" target="_blank" class="btn btn-s" title="Demo"></a>
                            </div>
                        </div>
                    </div>
                    <a href="/project-list" title="檢視更多網版" class="first-more-btn">檢視更多網版</a>
                </div>
                <notifications position='top center'/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import PieChart from '../components/PieChart.js'
export default {
    components: {
      PieChart
    },
	data() {
        return {
            orderBy:'pd_date', // 網版列表排序
            project_count:'', // 網版總數
            layout_count:[], // 各網版布局總數
            style_count:[], // 各網版風格總數
            color_count:[], // 各網版色系總數
            newestdata:[], // 最新五筆的固定網版名稱
            projectdata:[], // 最新三筆的固定網版資料
            userdata:[], // 使用者資料
            //線上路徑////////////////////////////////////////////////////
            rentSearch:'http://rent.bbinpartner.com', // 租網路徑
        }
    },
    created:function(){
        let self = this;
    },
    mounted: function () {
        let self = this;
        self.getAllData();
    },
    computed: {
        chart1:function(){
            let self = this;
            var labels = ['直向大小', '橫向大小', '多面切割', '對角線', '無規則'];
            return{
            labels: labels,
            datasets: [{
                data: self.layout_count,
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
        chart2:function(){
            let self = this;
            var labels2 = ['前衛時尚', '復古典雅', '精緻華麗', '簡約大氣'];
            return{
            labels: labels2,
            datasets: [{
                data: self.style_count,
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
        chart3:function(){
            let self = this;
            var labels3 = ['white', 'grey', 'black', 'blue', 'green', 'yellow', 'brown', 'orange', 'red', 'pink', 'purple'];
            return{
            labels: labels3,
            datasets: [{
                data: [self.color_count.white,self.color_count.grey,self.color_count.black,self.color_count.blue,self.color_count.green,self.color_count.yellow,self.color_count.brown,self.color_count.orange,self.color_count.red,self.color_count.pink,self.color_count.purple],
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
        }
   	},
    methods: {
        init: function () {
            // 設定檔案總管
            // $('#open_image_manager').filemanager('image');
            
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
        //////////////////////// 檢查各項目 //////////////////////
        ///

        ///
        //////////////////////// 檢查各項目 end //////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得首頁全部資料
        getAllData:function(){
            let self = this;
            
            axios.get('../index-all-data')
                .then(function (response) {
                    self.orderBy = response.data.orderBy;
                    self.project_count = response.data.project_count;
                    self.layout_count = response.data.layout_count;
                    self.style_count = response.data.style_count;
                    self.color_count = response.data.color_count;
                    self.newestdata = response.data.newestdata;
                    self.projectdata = response.data.projectdata;
                    self.userdata = response.data.userdata;
                    self.init()
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得最新三筆的網版資料
        getProjectData:function(orderBy){
            let self = this;
            
            axios.get('../project-three-data/'+orderBy)
                .then(function (response) {
                    self.projectdata = response.data;
                    self.orderBy = orderBy;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 取值專區 end ////////////////////////

        //////////////////////// 新增區塊 ////////////////////////
        ///
        //新增樣式

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
                        self.getProjectData(self.orderBy);
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
                        self.getProjectData(self.orderBy);
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
            self.getProjectData(self.orderBy);
        }
	}
}
</script>