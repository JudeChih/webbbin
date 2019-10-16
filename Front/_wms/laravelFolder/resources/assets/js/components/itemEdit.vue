<template>
    <div class="container">
        <div id="mainBody" class="wrap">
            <!-- CONTAINER -->
            <div id="page-container">
                <div id="page-body">
                    <div class="item-wrap">
                        <a :href="'../'+type" class="item-manage-back"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                        <!-- 表單 START -->
                        <form class="item-manage-content" @submit.prevent="checking(item.id)" @click="dateValue()" @change="inputCheck()" enctype="multipart/form-data">
                            <h1>修改項目 Edit Item</h1>
                            <!--<div class="item-manage-list clearfix">
                                <h2>版型</h2>
                                <ul class="item-manage-radio clearfix" @click="numToggle()">
                                    <li>
                                        <input id="r1" type="radio" name="rwd" :value="1" v-model="item.isRWD">
                                        <label for="r1">RWD</label>
                                    </li>
                                    <li>
                                        <input id="r2" type="radio" name="rwd" :value="0" v-model="item.isRWD">
                                        <label for="r2">固定</label>
                                    </li>
                                </ul>
                            </div>-->
                            <div class="item-manage-list clearfix">
                                <h2>編號</h2>
                                <div class="item-manage-input-num">
                                    <input type="text" placeholder="輸入編號" v-model="item.num" disabled="disabled">
                                </div>
                                <div class="item-manage-hover">
                                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                                    <div class="tips">
                                        A：直向大小<br>
                                        B：橫向大小<br>
                                        C：多面切割<br>
                                        D：對角線<br>
                                        E：無規則
                                    </div>
                                </div>
                                <span  v-if="itemError.num" class="error">請輸入編號</span>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>狀態</h2>
                                <ul class="item-manage-radio clearfix">
                                    <li>
                                        <input id="s1" type="radio" name="status" :value="1" v-model="item.isShow">
                                        <label for="s1">顯示</label>
                                    </li>
                                    <li>
                                        <input id="s2" type="radio" name="status" :value="0" v-model="item.isShow">
                                        <label for="s2">隱藏</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>最新</h2>
                                <ul class="item-manage-radio clearfix">
                                    <li>
                                        <input id="n1" type="radio" name="new" :value="1" v-model="item.isNew">
                                        <label for="n1">開啟</label>
                                    </li>
                                    <li>
                                        <input id="n2" type="radio" name="new" :value="0" v-model="item.isNew">
                                        <label for="n2">關閉</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>日期</h2>
                                <div class="item-manage-input-num">
                                    <input class="form-control edit_dt" name="edit_dt" id="date" :value="item.edit_dt" v-model="item.edit_dt" type="text">
                                    <span  v-if="itemError.edit_dt" class="error">請輸入日期</span>
                                </div>
                            </div>
                            
                            
                            <div class="item-manage-list clearfix">
                                <h2>DEMO</h2>
                                <ul class="item-manage-radio clearfix">
                                    <li>
                                        <input id="d1" type="radio" name="demo" :value="1" v-model="item.isLive">
                                        <label for="d1">開啟</label>
                                    </li>
                                    <li>
                                        <input id="d2" type="radio" name="demo" :value="0" v-model="item.isLive">
                                        <label for="d2">關閉</label>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="item-manage-list clearfix">
                                <h2>設計風格</h2>
                                <ul class="item-manage-radio clearfix">
                                    <li>
                                        <input id="style1" type="radio" name="style" :value=1 v-model="item.style">
                                        <label for="style1">前衛時尚</label>
                                    </li>
                                    <li>
                                        <input id="style2" type="radio" name="style" :value=2 v-model="item.style">
                                        <label for="style2">復古典雅</label>
                                    </li>
                                    <li>
                                        <input id="style3" type="radio" name="style" :value=3 v-model="item.style">
                                        <label for="style3">精緻華麗</label>
                                    </li>
                                    <li>
                                        <input id="style4" type="radio" name="style" :value=4 v-model="item.style">
                                        <label for="style4">簡約大方</label>
                                    </li>
                                </ul>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>版型色系</h2>
                                <ul class="item-manage-checkbox clearfix">
                                    <li v-for="(color, key) in colors">
                                        <label class="checkbox" :class="color">
                                            <input type="checkbox" :value="colors[key]" v-model="item.colors"/><span></span>
                                        </label>
                                    </li>
                                    <span  v-if="itemError.colors" class="error">請選擇版型色系</span>
                                </ul>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>注意事項</h2>
                                <div class="item-manage-input-notice">
                                    <div v-for="(notice, key) in item.notices">
                                    <input type="text" v-model="item.notices[key]"/>
                                    <a @click="removeRow('notices', key)">Remove</a>
                                    </div>
                                    <a @click="addRow('notices')">Add row</a>
                                    <span  v-if="itemError.notices" class="error">請輸入注意事項</span>
                                </div>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>上傳圖片</h2>
                                <div class="item-manage-input-upload">
                                    <a class="fancybox input" @click="uploadFile('imgView')"
                                        :href="filemangerUrl">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="item-manage-list clearfix">
                                <h2>圖片管理</h2>
                                <div class="item-manage-pic">
                                    <ul class="removeTextNodes clearfix">
                                        <li>
                                            <div class="title clearfix">
                                                <h3>示意圖</h3>
                                                <span class="tip">
                                                    <div class="item-manage-hover">
                                                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                                                        <div class="tips">
                                                            顯示資訊
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <a class="fancybox input" @click="uploadFile('imgView')"
                                                :href="filemangerUrl">
                                                <img v-if="item.imgView" :src="assetUrl + 'packages/filemanager/api/crip-files' + item.imgView" alt=""/>
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <input type="text" class="imgView" v-model="item.imgView"/>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="title clearfix">
                                                <h3>BANNER</h3>
                                                <span class="tip">
                                                    <div class="item-manage-hover">
                                                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                                                        <div class="tips">
                                                            顯示資訊
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <a class="fancybox input" @click="uploadFile('imgBanner')"
                                                :href="filemangerUrl">
                                                <img v-if="item.imgBanner" :src="assetUrl + 'packages/filemanager/api/crip-files' + item.imgBanner" alt=""/>
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <input type="text" class="imgBanner" v-model="item.imgBanner"/>
                                            </a>
                                        </li>
                                        <p  v-if="itemError.imgView" class="error">請選擇示意圖</p>
                                        <p  v-if="itemError.imgBanner" class="error">請選擇BANNER</p>
                                    </ul>
                                </div>
                                <div class="item-manage-pic clearfix">
                                    <div class="class clearfix">
                                        <b>inpage</b>
                                        <div class="item-manage-hover">
                                            <i class="fa fa-question-circle" aria-hidden="true"></i>
                                            <div class="tips">
                                                顯示資訊
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-manage-checkbox clearfix">
                                        <label class="checkbox" for="desktop">
                                            Desktop
                                            <input type="checkbox" id="desktop" value="desktop" v-model="desktopChecked"><span></span>
                                        </label>
                                        <label class="checkbox" for="tablet" v-if="item.isRWD">
                                            Tablet
                                            <input type="checkbox" id="tablet" value="tablet" v-model="tabletChecked"><span></span>
                                        </label>
                                        <label class="checkbox" for="mobile" v-if="item.isRWD">
                                            Mobile
                                            <input type="checkbox" id="mobile" value="mobile"  v-model="mobileChecked"><span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="item-manage-pic">
                                    <div class="class clearfix">
                                        <b>範例圖片</b>
                                        <div class="item-manage-hover">
                                            <i class="fa fa-question-circle" aria-hidden="true"></i>
                                            <div class="tips">
                                                顯示資訊
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="removeTextNodes clearfix">
                                        <li v-for="(example, key) in item.imgExample">
                                            <div class="title clearfix">
                                                <input type="text" v-model="item.imgExampleName[key]"><span></span>
                                            </div>
                                            <a class="fancybox input" @click="uploadFile('example', key)"
                                                :href="filemangerUrl">
                                                <img v-if="item.imgExample[key]" :src="assetUrl + 'packages/filemanager/api/crip-files' + item.imgExample[key]" alt=""/>
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                <input type="text" v-model="item.imgExample[key]" class="imgExample"/>
                                            </a>
                                            <div class="nav clearfix">
                                                <label class="input">
                                                <a class="fancybox input fa fa-pencil-square-o" aria-hidden="true" @click="uploadFile('example', key)"
                                                :href="filemangerUrl">
                                                </a>
                                                <!--<i class="fa fa-pencil-square-o" aria-hidden="true"></i>-->
                                                </label>
                                                <a class="del btn-del" @click="removeRow('example', key)">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="add addRow" @click="addRow('example')">
                                            <i class="fa fa-plus" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 按鈕列 START -->
                            <div class="item-manage-btn">
                                <button type="submit" class="confirm">確認</button>
                                <a :href="'../'+type" class="cancel">取消</a>
                                <button type="button" class="del btn-del" @click="toggleDel()">刪除</button>
                                <span class="error" v-if="itemError.all">好像有什麼沒填到</span>
                            </div>
                            <!-- 按鈕列 END -->
                        </form>
                        <!-- 表單 END -->
                    </div>
                </div>
            </div>
            <!-- 刪除確認視窗 -->
            <div class="item-del-wrap" :class="this.delBox">
                <div class="item-del-close" @click="toggleDel()">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <h2>確定要刪除嗎？</h2>
                <div class="item-del-btn clearfix">
                    <button class="confirm" @click="deleteItem()">確認</button>
                    <button class="cancel" @click="toggleDel()">取消</button>
                </div>
            </div>
            <div class="mask" :class="this.delBox" @click="toggleDel()"></div>
            </div>
        </div>
       
</template>
<script>
    import Vue from 'vue';
    import axios from 'axios';

    var nowTarget;
    export default {
        props: ['source', 'asset', 'id'],
        data() {
            return {
                item: {
                    id: '',
                    num: '',
                    edit_dt: '',
                    notices: null,
                    colors: [],
                    imgExample: null,
                    isShow: true,
                    isNew: false,
                    isLive: false,
                    isRWD: false,
                    layout: 1,
                    style: 1,
                    imgView: '',
                    imgBanner: '',
                    imgExampleName: null,
                    desktopChecked: true,
                    tabletChecked: false,
                    mobileChecked: false,
                },
                itemError: {
                    all: false,
                    num: false,
                    edit_dt: false,
                    notices: false,
                    colors: false,
                    imgView: false,
                    imgBanner: false,
                },
                isCompile: true,
                checkedNames: [],
                colors: [
                    'white',
                    'gray',
                    'black',
                    'blue',
                    'green',
                    'yellow',
                    'coffee',
                    'orange',
                    'red',
                    'pink',
                    'purple'
                ],
                nowTarget: '',
                nowImgKey: '',
                filemangerUrl: `${this.asset}` + 'packages/filemanager?target=callback&flag=link&one=1&type=image',
                delBox: '',
                assetUrl: `${this.asset}`,
                desktopChecked: true,
                tabletChecked: false,
                mobileChecked: false,
                num: '',
                numBefore: '',
                fixedWidths: null,
                rwdDesktops: null,
                rwdTablets: null,
                rwdMobiles: null,
                type: '',
            }
        },
        mounted: function() {
        },
        created() {
            this.getItem();
        },
        watch: {
            // num() {
            //     this.numToggle();
            // },
            desktopChecked() {
                this.item.desktopChecked = this.desktopChecked
                if (this.desktopChecked) {
                    if (this.item.isRWD) {
                            this.rwdDesktop()
                            this.fixedWidths = null
                        } else {
                            this.fixedWidth()
                            this.rwdDesktops = null
                        }
                } else {
                    this.fixedWidths = null
                    this.rwdDesktops = null
                }
            },
            tabletChecked() {
                this.item.tabletChecked = this.tabletChecked
                if (this.tabletChecked) {
                    this.rwdTablet()
                } else {
                    this.rwdTablets = null
                }
            },
            mobileChecked() {
                this.item.mobileChecked = this.mobileChecked
                if (this.mobileChecked) {
                    this.rwdMobile()
                } else {
                    this.rwdMobiles = null
                }
            },
        },
        methods: {
            dateValue() {
                var date = document.getElementsByClassName('edit_dt')['edit_dt'].value
                this.item.edit_dt = date
                this.inputCheck()
            },
            uploadMangement() {
                var vm = this;
                // Callback method for input group btn
                window.cripFilesystemManager = function(fileUrl, params) {
                    // will recive params.flag and params.one parameter as they are 
                    // presented in href below
                    console.log(fileUrl, params)
                };
            },
            uploadFile(type, key) {
                var vm = this;
                // Callback method for input group btn
                window.cripFilesystemManager = function(fileUrl, params) {
                    // will recive params.flag and params.one parameter as they are 
                    // presented in href below
                    console.log(fileUrl, params)
                    if (params.flag == 'link' && params.one == 1) {
                        $.fancybox.close()
                    }
                    var inptID = document.getElementsByClassName(type)
                    inptID.value = fileUrl.slice(36);
                    var url = inptID.value
                    vm.nowImgKey = key;
                    switch (type) {
                        case 'imgView':
                            vm.item.imgView = url
                            break;
                        case 'imgBanner':
                            vm.item.imgBanner = url
                            break;
                        case 'example':
                            vm.item.imgExample = vm.item.imgExample.map(function(info, key) {
                                console.log('in');
                                if (vm.nowImgKey == key) {
                                    return url;
                                }
                                return info;
                            });
                            break;
                    }
                    vm.inputCheck()
                };
            },
            addRow: function(type) {
                switch (type) {
                    case 'notices':
                        if (this.item.notices == null) {
                            this.item.notices = [];
                        }
                        this.item.notices.push('');
                        break;
                    // case 'schematic':
                    //     if (this.item.imgSchematic == null) {
                    //         this.item.imgSchematic = [];
                    //         this.item.imgSchematicName = [];
                    //     }
                    //     this.item.imgSchematic.push('');
                    //     this.item.imgSchematicName.push('');
                    //     break;
                    case 'example':
                        if (this.item.imgExample == null) {
                            this.item.imgExample = [];
                            this.item.imgExampleName = [];
                        }
                        this.item.imgExample.push('');
                        this.item.imgExampleName.push('');
                        break;
                }
            },
            removeRow: function(type, key) {
                switch (type) {
                    case 'notices':
                        this.item.notices.splice(key, 1);
                        break;
                    // case 'schematic':
                    //     this.item.imgSchematic.splice(key, 1);
                    //     this.item.imgSchematicName.splice(key, 1);
                    //     break;
                    case 'example':
                        this.item.imgExample.splice(key, 1);
                        this.item.imgExampleName.splice(key, 1);
                        break;
                }
            },
            upload() {
                if (confirm("更新嘍")) {
                    var input = this.item;
                    var id = this.item.id;
                    axios.put(`${this.source}/` + id, input)
                        .then(function(response) {})
                        .catch(function(response) {})
                }
            },
            getItem() {
                let vm = this;
                axios.get(`${this.source}/${this.id}`)
                    .then(function(response) {
                        Vue.set(vm.$data, 'item', response.data.item);
                        console.log(response.data);
                        vm.item = response.data
                        vm.item.colors = JSON.parse(response.data.colors)
                        vm.item.notices = JSON.parse(response.data.notices)
                        vm.item.imgExampleName = JSON.parse(response.data.imgExampleName)
                        vm.item.imgExample = JSON.parse(response.data.imgExample)
                        vm.item.num = vm.item.num.toLocaleUpperCase()
                        vm.desktopChecked = vm.item.desktopChecked
                        vm.tabletChecked = vm.item.tabletChecked
                        vm.mobileChecked = vm.item.mobileChecked
                        if(vm.item.isRWD) {
                        vm.type = 'viewRWD'
                    } else {
                        vm.type = 'viewAdaptive'
                    }
                    }).catch(function(response) {
                        console.log(response);
                    })
            },
            deleteItem() {
                let vm = this;
                console.log(`${this.source}/${this.id}`)
                if (confirm("刪除嘍")) {
                    axios.delete(`${this.source}/${this.id}`)
                        .then(function(response) {
                            location.href = vm.assetUrl+ vm.type
                        })
                        .catch(function(response) {})
                }
            },
            toggleDel() {
                if (this.delBox == '') {
                    this.delBox = 'display-show'
                } else {
                    this.delBox = ''
                }
            },
            checking() {
                if (this.item.num.length == 0) {
                    this.itemError.num = true
                }
                if (this.item.edit_dt.length == 0) {
                    this.itemError.edit_dt = true
                }
                if (this.item.colors.length == 0) {
                    this.itemError.colors = true
                }
                if (this.item.notices == null || this.item.notices == 0) {
                    this.itemError.notices = true
                }
                if (this.item.imgView.length == 0) {
                    this.itemError.imgView = true
                }
                if (this.item.imgBanner.length == 0) {
                    this.itemError.imgBanner = true
                }
                switch (true) {
                    case (this.item.num.length == 0):
                        this.itemError.all = true
                        break
                    case (this.item.edit_dt.length == 0):
                        this.itemError.all = true
                        break
                    case (this.item.colors.length == 0):
                        this.itemError.all = true
                        break
                    case (this.item.notices == null || this.item.notices == 0):
                        this.itemError.all = true
                        break
                    case (this.item.imgView.length == 0):
                        this.itemError.all = true
                        break
                    case (this.item.imgBanner.length == 0):
                        this.itemError.all = true
                        break
                    default:
                        this.upload();
                };
            },
            inputCheck() {
                if (this.item.num.length !== 0) {
                    this.itemError.num = false
                }
                if (this.item.edit_dt.length !== 0) {
                    this.itemError.edit_dt = false
                }
                if (this.item.colors.length !== 0) {
                    this.itemError.colors = false
                }
                if (this.item.notices !== null) {
                    this.itemError.notices = false
                }
                if (this.item.imgView.length !== 0) {
                    this.itemError.imgView = false
                }
                if (this.item.imgBanner.length !== 0) {
                    this.itemError.imgBanner = false
                }
                switch (true) {
                    case (this.item.num.length == 0):
                        break
                    case (this.item.edit_dt.length == 0):
                        break
                    case (this.item.colors.length == 0):
                        break
                    case (this.item.notices == null || this.item.notices == 0):
                        break
                    case (this.item.imgView.length == 0):
                        break
                    case (this.item.imgBanner.length == 0):
                        break
                    default:
                        this.itemError.all = false
                };
            },
            // numToggle() {
            //     if (this.item.isRWD) {
            //         this.numBefore = "RA"
            //     } else {
            //         this.numBefore = "A"
            //         this.tabletChecked = false
            //         this.mobileChecked = false
            //     }
            //     if (this.num.length == 0) {
            //         this.item.num = ''
            //     } else {
            //         this.item.num = this.numBefore.toLowerCase() + this.num
            //         if (this.item.isRWD) {
            //             this.rwdDesktop()
            //             this.fixedWidths = null
            //             if (this.tabletChecked) {
            //                 this.rwdTablet()
            //             }
            //             if (this.mobileChecked) {
            //                 this.rwdMobile()
            //             }
            //         } else {
            //             this.fixedWidth()
            //             this.rwdDesktops = null
            //         }
            //     }
            // },
            fixedWidth() {
                var fixedWidths = [];
                for (var i = 1; i < 9; i++) {
                    var img = (i < 10 ? '0' : '') + i + ".jpg"
                    fixedWidths.push("/item/images/" + this.item.num + "/" + img);
                }
                this.fixedWidths = fixedWidths
            },
            rwdDesktop() {
                var rwdDesktops = [];
                for (var i = 1; i < 10; i++) {
                    var img = (i < 10 ? '0' : '') + i + ".jpg"
                    rwdDesktops.push("/item/images/" + this.item.num + "/" + "desktop/" + img);
                }
                this.rwdDesktops = rwdDesktops
            },
            rwdTablet() {
                var rwdTablets = [];
                for (var i = 1; i < 11; i++) {
                    var img = (i < 10 ? '0' : '') + i + ".jpg"
                    rwdTablets.push("/item/images/" + this.item.num + "/" + "tablet/" + img);
                }
                this.rwdTablets = rwdTablets
            },
            rwdMobile() {
                var rwdMobiles = [];
                for (var i = 1; i < 11; i++) {
                    var img = (i < 10 ? '0' : '') + i + ".jpg"
                    rwdMobiles.push("/item/images/" + this.item.num + "/" + "mobile/" + img);
                }
                this.rwdMobiles = rwdMobiles
            },
        },
    };
</script>
</body>

</html>