<template>
    <div class="">
        <div id="mainBody" class="wrap">
            <!-- HEADER -->
            <div id="page-header" class="header-wrap clearfix">
                <a href="./" class="item-manage-back"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                <div class="header-mode">
                    <h2>模式</h2>
                    <button class="modeBlock" @click="modeBlock()"><i class="fa fa-th-large"></i></button>
                    <button class="modeList" @click="modeList()"><i class="fa fa-th-list"></i></button>
                </div>
                <div class="header-sort">
                    <h2>排序</h2>
                    <select @change="directionType(directionSelect)" v-model="directionSelect">
                        <option v-for="(directionName, key) in directionNames" v-model="directionName[key]" v-text="directionName"></option>
                    </select>
                </div>
                <div class="header-search">
                    <!--<input id="itemFilter" type="text" placeholder="請輸入版型編號">-->
                    <input type="text" id="itemFilter"
                    placeholder="請輸入版型編號"
                    v-model="search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <!-- CONTAINER -->
            <div id="page-container">
                <div id="page-body">
                    <div class="item-wrap">
                        <div class="item-mode" :class="itemMode">
                            <!-- 僅列表模式顯示 START -->
                            <div class="item-list-add"><a :href="currentPage + '/itemAdd'">+新增版型</a></div>
                            <div class="item-list-title clearfix">
                                <span class="num">編號</span>
                                <span class="new">最新</span>
                                <span class="hot">熱門</span>
                                <span class="status">顯示</span>
                                <span class="select">選擇次數</span>
                                <span class="edit">編輯</span>
                                <span class="del">刪除</span>
                            </div>
                            <!-- 僅列表模式顯示 END -->
                            <ul id="itemList" class="clearfix">
                                <!-- 縮圖模式ADD START -->
                                <li class="item-add" v-if="search === ''">
                                    <a :href="currentPage + '/itemAdd'">
                                        <img src="image/item_img.png">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <!-- 縮圖模式ADD END -->
                                <!-- ITEM START -->
                                <li class="clearfix" v-for="(row, key) in model.data">
                                    <div class="item-box">
                                        <img src="image/item_img.png">
                                        <img :src="assetUrl + 'packages/filemanager/api/crip-files' + row.imgView" class="item-img" alt=""/>
                                    </div>
                                    <span class="info clearfix">
                                        <h2>{{ row.num }}</h2>
                                        <a :href="'itemEdit/'+ row.id" class="btn-edit">編輯</a>
                                        <!--<button class="btn-view selectCount" @click="toggleSelectView()">檢視</button>-->
                                    </span>
                                    <span class="new">
                                        <input type="checkbox" class="checkbox" v-model="row.isNew"  @click="patchItem(row.id, key)">
                                    </span>
                                    <span class="hot">
                                        <input type="checkbox" class="checkbox">
                                    </span>
                                    <span class="status">
                                        <input type="checkbox" class="checkbox"  v-model="row.isShow"  @click="patchItem(row.id, key)">
                                    </span>
                                    <span class="select"><button class="selectCount">7</button></span>
                                    <span class="edit">
                                        <a :href="'itemEdit/'+ row.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                                    </span>
                                    <span class="del btn-del">
                                        <button @click="openDel(row)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </span>
                                </li>
                                <!-- ITEM END -->
                                <!-- ITEM-EXAMPLE START -->
                                <!-- ITEM-EXAMPLE END -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 選擇次數 -->
        <div v-if="selectView" class="select-count-wrap" :class="selectView">
            <div class="select-count-close" @click="toggleSelectView()">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="select-count-main">
                <!-- ADD START -->
                <!--<div class="select-count-collapse clearfix" :class="selectEdit">
                    <div class="date">
                        <div id="datepicker"><div></div></div>
                    </div>
                    <div class="form">
                        <h2>新增/編輯記錄</h2>
                        <ul class="clearfix">
                            <li>
                                <span>日期</span>
                                <input class="form-control" name="date" id="date2" value="" type="text">
                            </li>
                            <li>
                                <span>專案名稱</span>
                                <input type="text">
                            </li>
                            <li>
                                <span>視覺</span>
                                <input type="text">
                            </li>
                            <li>
                                <span>TPL</span>
                                <input type="text">
                            </li>
                            <li class="last">
                                <span>檔案路徑</span>
                                <input type="text">
                            </li>
                        </ul>
                        <div class="nav">
                            <a href="#0" class="confirm">新增</a>
                            <a href="#0" class="cancel" @click="toggleSelectEdit()">取消</a>
                        </div>
                    </div>
                </div>-->
                <!-- ADD END -->
                <div class="select-count-title clearfix">
                    <h2>A01</h2>
                    <!--<a href="#0" class="add" @click="toggleSelectEdit()">+</a>-->
                </div>
                <!-- FORM START -->
                <div class="select-count-form">
                    <table class="table table-striped"  data-sortable>
                        <thead>
                            <tr>
                                <th data-sorted="true" data-sorted-direction="descending">日期</th>
                                <th data-sortable="false">TPL</th>
                                <th data-sortable="false">專案名稱</th>
                                <th data-sortable="false">視覺</th>
                                <th data-sortable="false">檔案路徑</th>
                                <th data-sortable="false"></th>
                            </tr>
                        </thead>
                        <tbody class="copyLine">
                            <tr>
                                <td>2015-06-26</td>
                                <td>amjjss</td>
                                <td>澳門金沙賭城</td>
                                <td>liying</td>
                                <td>\\art-server\artWeb\(1)專案\(1)整合站\(2)租網\2015\上半年度(1~6)\澳門金沙賭城</td>
                                <td class="table_btn">
                                    <!--<a href="#0" class="fa fa-times-circle"></a>
                                    <a href="#0" class="fa fa-pencil-square-o collapsed" data-toggle="collapse"></a>-->
                                </td>
                            </tr>
                            <tr>
                                <td>2015-10-30</td>
                                <td>000</td>
                                <td>龍城國際娛樂城</td>
                                <td>rita</td>
                                <td>\\art-server\artWeb\(1)專案\(1)整合站\(2)租網\2015\下半年度(7~12)\龍成國際娛樂城</td>
                                <td class="table_btn">
                                    <!--<a href="#0" class="fa fa-times-circle"></a>
                                    <a href="#0" class="fa fa-pencil-square-o collapsed" data-toggle="collapse"></a>-->
                                </td>
                            </tr>
                            <tr>
                                <td>2015-10-30</td>
                                <td>000</td>
                                <td>龍城國際娛樂城</td>
                                <td>rita</td>
                                <td>\\art-server\artWeb\(1)專案\(1)整合站\(2)租網\2015\下半年度(7~12)\龍成國際娛樂城</td>
                                <td class="table_btn">
                                    <!--<a href="#0" class="fa fa-times-circle"></a>
                                    <a href="#0" class="fa fa-pencil-square-o collapsed" data-toggle="collapse"></a>-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- FORM END -->
            </div>
        </div>
        <!-- 刪除確認視窗 -->
        <div v-if="delTarget" class="item-del-wrap" :class="this.delBox">
            <div class="item-del-close" @click="closeDel()">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <h2>確定要刪除嗎？</h2>
            <div class="item-del-btn clearfix">
                <button class="confirm" @click="deleteItem(this.delTarget)">確認</button>
                <button class="cancel" @click="closeDel()">取消</button>
            </div>
        </div>
        <div v-if="delTarget" class="mask" :class="this.delBox" @click="closeDel()"></div>
        <div v-if="selectView"class="mask" :class="this.selectView" @click="toggleSelectView()"></div>
        </div>
        </div>
    </div>
</template>












<script>
    import Vue from 'vue'
    import axios from 'axios'

    export default {
        props: ['source','asset','rwd'],
        data() {
            return {
                model: {},
                columns: {},
                query: {
                    column: 'num',
                    direction: 'asc',
                    search_input: '',
                    isRWD: `${this.rwd}`,
                },
                directionNames: [
                    '編號A到E',
                    '編號E到A',
                    '由新到舊',
                    '由舊到新',
                    // '選擇次數多到少',
                    // '選擇次數少到多'
                ],
                directionSelect: '編號A到E',
                search: '',
                selectView: '',
                itemMode: 'item-block',
                delBox: '',
                delTarget: '',
                assetUrl: `${this.asset}`,
                sourceUrl: `${this.source}`,
                item: [],
                currentPage: '',
            }
        },
        created() {;
            this.fetchIndexData()
        },
        watch: {
            search: function() {
                console.log('work')
                this.query.search_input = this.search
                if (this.query.search_input) {
                    this.fetchIndexData();
                } else {
                    this.fetchIndexData();
                }
            },
        },
        methods: {
            directionType(type) {
                var vm = this;
                switch (type) {
                    case '編號A到E':
                        vm.query.column = 'num'
                        vm.query.direction = 'asc'
                        console.log('num asc')
                        break;
                    case '編號E到A':
                        vm.query.column = 'num'
                        vm.query.direction = 'desc'
                        console.log('num desc')
                        break;
                    case '由新到舊':
                        vm.query.column = 'edit_dt'
                        vm.query.direction = 'asc'
                        console.log('edit_dt asc')
                        break;
                    case '由舊到新':
                        vm.query.column = 'edit_dt'
                        vm.query.direction = 'desc'
                        console.log('edit_dt desc')
                        break;
                }
                vm.fetchIndexData()
            },
            deleteItem() {
                console.log(this.delTarget)
                var vm = this
                if (confirm("刪除嘍")) {
                    axios.delete('projects/' + this.delTarget.id)
                        .then(function(response) {
                            vm.fetchIndexData()
                            vm.closeDel()
                        })
                        .catch(function(response) {})
                }
            },
            fetchIndexData() {
                var vm = this
                axios.get(`${this.source}?isRWD=${this.query.isRWD}&column=${this.query.column}&direction=${this.query.direction}&search_input=${this.query.search_input}`)
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)
                        Vue.set(vm.$data, 'columns', response.data.columns)
                        var modelL = vm.model.data.length
                        for (var i = 0; i < modelL; i++) {
                            vm.item[i] = vm.model.data[i]
                            vm.item[i].colors = JSON.parse(vm.model.data[i].colors)
                            vm.item[i].notices = JSON.parse(vm.model.data[i].notices)
                            vm.item[i].imgExampleName = JSON.parse(vm.model.data[i].imgExampleName)
                            vm.item[i].imgExample = JSON.parse(vm.model.data[i].imgExample)
                            vm.item[i].num = vm.model.data[i].num.toLocaleUpperCase()
                        }
                        if(vm.query.isRWD == '1') {
                            vm.currentPage = 'viewRWD'
                        } else {
                            vm.currentPage = 'viewAdaptive'
                        }

                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            },
            patchItem(id, key) {
                var input = this.item[key]
                console.log(input)
                    // var id = this.model.data[key].id;
                axios.put('projects/' + id, input)
                    .then(function(response) {})
                    .catch(function(response) {})
            },
            toggleSelectView() {
                if (this.selectView == '') {
                    this.selectView = 'display-show'
                } else {
                    this.selectView = ''
                }
            },
            toggleSelectEdit() {
                if (this.selectEdit == '') {
                    this.selectEdit = 'display-show'
                } else {
                    this.selectEdit = ''
                }
            },
            openDel(item) {
                this.delTarget = item
                if (this.delBox == '') {
                    this.delBox = 'display-show'
                } else {
                    this.delBox = ''
                }
            },
            closeDel() {
                this.delTarget = ''
                if (this.delBox == '') {
                    this.delBox = 'display-show'
                } else {
                    this.delBox = ''
                }
            },
            modeBlock() {
                this.itemMode = 'item-block'
            },
            modeList() {
                this.itemMode = 'item-list'
            }
        }
    }
</script>