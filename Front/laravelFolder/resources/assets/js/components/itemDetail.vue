<template>
    <div id="page-container">
        <div id="page-body" class="page-body">
            <div class="item-wrap">
                <!-- CTRL START -->
                <div class="item-ctrl">
                    <ul>
                        <li class="item-ctrl-close">
                            <a href="javascript:window.close();"></a>
                        </li>
                        <li class="item-ctrl-next">
                            <a :href="model.next_page_url"></a>
                        </li>
                        <li class="item-ctrl-prev">
                            <a :href="model.prev_page_url"></a>
                        </li>
                    </ul>
                </div>
                <!-- CTRL END -->
                <div class="item-main item-adaptive">
                    <div class="item-top">
                        <section>
                            <article>
                                <h1 v-text="item.num"></h1>
                                <h2 v-if="item.isRWD"><span>RWD 網版</span><i></i></h2>
                                <h2 v-else><span>固定網版</span><i></i></h2>
                                <hr>
                                <ul>
                                    <li v-for="notice in item.notices" v-text="notice"></li>
                                    <li>首页廣告轮播圖片尺吋不限依設計為主，如有特殊要求請告知。</li>
                                    <li>导览列/网页字型：预设系统字。</li>
                                    <li>网页语系，功能按钮，标题名称皆与BBIN为主。</li>
                                </ul>
                                <a v-if="item.isLive" :href="assetUrl + 'liveDemo/' + item.id" target="_blank">LIVE DEMO</a>
                            </article>
                            <figure>
                                 <img :src="imgBanner"> 
                            </figure>
                        </section>
                    </div>
                    <div class="item-inpage">
                        <div v-if="item.isRWD" class="item-tabs clearfix">
                            <div class="title">
                                <ul>
                                    <li class="active">DESKTOP</li>
                                    <li>PAD</li>
                                    <li>PHONE</li>
                                </ul>
                                <div style="clear:both;"></div>
                            </div>
                            <div class="content active" >
                                <div class="item-gallery">
                                    <ul>
                                         <li v-for="img in rwdDesktops"><img :src="wms + 'packages/filemanager/api/crip-files' + img"></li> 
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <div class="item-gallery">
                                    <ul>
                                        <li v-for="img in rwdTablets"><img :src="wms + 'packages/filemanager/api/crip-files' + img"></li> 
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <div class="item-gallery">
                                    <ul>
                                        <li v-for="img in rwdMobiles"><img :src="wms + 'packages/filemanager/api/crip-files' + img"></li> 
                                    </ul>
                                </div>
                            </div>
                            </div>
                        <div v-else class="item-gallery">
                            <ul>
                                  <li v-for="img in adaptive"><img :src="wms + 'packages/filemanager/api/crip-files' + img"></li>  
                            </ul>
                        </div>
                        <div class="item-model" v-if="hasExample">
                            <h2>MODEL</h2>
                            <ul>
                                <li v-for="(img,index) in item.imgExample">
                                    <a class="venobox" data-gall="img" :href="wms + 'packages/filemanager/api/crip-files' + img " alt="item.imgExampleName[index]">
                                        <img :src="wms + 'packages/filemanager/api/crip-files' + img "/>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';


    import jQuery from 'jquery'
    window.jQuery = jQuery
    window.$ = jQuery

    require('./../slides');
    require('./../venobox');

    export default {
        props: ['source', 'asset', 'id', 'wms'],
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
                desktopChecked: true,
                tabletChecked: false,
                mobileChecked: false,
                adaptive: null,
                rwdDesktops: null,
                rwdTablets: null,
                rwdMobiles: null,
                imgBanner: '',
                assetUrl: `${this.asset}`,
                hasExample: 0,
            }
        },
        mounted() {
            // console.log('Component mounted.');
        },
        created() {
            this.getItem();

        },
        computed: {},
        methods: {
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
                        if (vm.item.isRWD) {
                            vm.type = 'viewRWD'
                            if (vm.desktopChecked) {
                                vm.rwdDesktop();
                            }
                            if (vm.tabletChecked) {
                                vm.rwdTablet();
                            }
                            if (vm.mobileChecked) {
                                vm.rwdMobile();
                            }
                        } else {
                            vm.type = 'viewAdaptive'
                            vm.fixedWidth();
                        }
                        vm.imgBanner = vm.wms + 'packages/filemanager/api/crip-files' + vm.item.imgBanner
                        vm.sliderFun();
                        vm.ChangePage();
                        if (response.data.imgExample[0]) {
                            vm.hasExample = 1;
                        }
                    }).catch(function(response) {
                        console.log(response);
                    })
            },
            ChangePage() {
                var vm = this
                axios.get(`${this.source}?isRWD=` + vm.item.isRWD + `&isShow=` + vm.item.isShow + `&column=${this.query.column}&direction=${this.query.direction}`)
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)
                        Vue.set(vm.$data, 'columns', response.data.columns)
                            // vm.model.per_page = 1
                        var modelL = vm.model.data.length
                        for (var i = 0; i < modelL; i++) {
                            if (vm.item.id == vm.model.data[i].id) {
                                vm.model.current_page = i + 1
                                if (vm.model.current_page !== vm.model.data.length) {
                                    var nextId = vm.model.data[i + 1].id
                                    vm.model.next_page_url = vm.assetUrl + 'itemDetail/' + nextId
                                } else {
                                    vm.model.next_page_url = vm.assetUrl + 'itemDetail/' + vm.model.data[0].id
                                }
                                if (vm.model.current_page !== 1) {
                                    var prevId = vm.model.data[i - 1].id
                                    vm.model.prev_page_url = vm.assetUrl + 'itemDetail/' + prevId
                                } else {
                                    vm.model.prev_page_url = vm.assetUrl + 'itemDetail/' + vm.model.data[modelL - 1].id
                                }
                            }
                        }

                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            },
            // pageNext() {
            //     if (this.model.current,page)
            // },
            fixedWidth() {
                var adaptive = [];
                for (var i = 1; i < 8; i++) {
                    var img = (i < 10 ? '0' : '') + i + ".jpg"
                    adaptive.push("/item/images/" + this.item.num + "/" + img);
                }
                this.adaptive = adaptive
            },
            rwdDesktop() {
                var rwdDesktops = [];
                for (var i = 1; i < 9; i++) {
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
            sliderFun() {
                this.$nextTick(function() {
                    //TABS
                    var $block = $('.item-tabs');
                    $('.item-tabs .title ul li').click(function() {
                        var $this = $(this);
                        $this.add($('.content', $block)
                                .eq($this.index()))
                            .addClass('active')
                            .siblings('.active')
                            .removeClass('active');
                    });


                    //SLIDER
                    $(".item-gallery ul").responsiveSlides({
                        auto: false,
                        pager: true,
                        nav: true,
                        speed: 500,
                        namespace: "item-slider",
                    });


                    //VENOBOX
                    $('.venobox').venobox();
                })
            }

        }
    }
</script>