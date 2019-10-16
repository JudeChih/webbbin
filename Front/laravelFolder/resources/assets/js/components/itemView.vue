<template>
    <div>
        <dd v-for="(row, key) in model.data" class="page-items" :class="item[key].classArray" v-if="row.isShow">
            <section>
                <hgroup>
                    <h2>{{ row.num }}</h2>
                    <h3>{{ row.edit_dt}}</h3>
                </hgroup>
                <figure>
                    <a :href="'itemDetail/' + row.id" target="_blank">
                        <img :src="wms + 'packages/filemanager/api/crip-files' + row.imgView" />
                        <img src="image/page_items_grid_img_bg.png" class="base-rwd" />
                    </a>
                </figure>
                <div class="page-items-intro">
                    <div class="page-items-info">
                        <span class="color removeTextNodes">
                            <i v-for="(color, key) in item[key].colors" :class=color></i>
                        </span>
                    </div>
                    <div class="page-items-link">
                        <a :href="'itemDetail/' + row.id" class="detail" target="_blank">DETAIL</a>
                        <a v-if="row.isLive" :href="'liveDemo/' + row.id" class="livedemo" target="_blank">LIVE DEMO</a>
                        <a v-else class="livedemo-no">LIVE DEMO</a>
                    </div>
                </div>
            </section>
        </dd>
    </div>
    
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'

    import jQuery from 'jquery'
    window.jQuery = jQuery
    window.$ = jQuery

    require('./../parallaxmouse.min');

    export default {
        props: ['source', 'asset', 'rwd', 'wms'],
        data() {
            return {
                model: {},
                columns: {},
                query: {
                    column: 'num',
                    direction: 'desc',
                    search_input: '',
                    isRWD: `${this.rwd}`,
                },
                search: '',
                selectView: '',
                assetUrl: `${this.asset}`,
                sourceUrl: `${this.source}`,
                item: [],
                currentPage: '',
                isShow: 1,
            }
        },
        created() {
            this.fetchIndexData();
        },
        methods: {

            fetchIndexData() {
                var vm = this
                axios.get(`${this.source}?isRWD=${this.query.isRWD}&isShow=${this.isShow}&column=${this.query.column}&direction=${this.query.direction}&search_input=${this.query.search_input}`)
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)
                        Vue.set(vm.$data, 'columns', response.data.columns)
                        vm.model.per_page = 1000
                        var modelL = vm.model.data.length
                        for (var i = 0; i < modelL; i++) {
                            vm.item[i] = vm.model.data[i]
                            vm.item[i].colors = JSON.parse(vm.model.data[i].colors)
                            vm.item[i].notices = JSON.parse(vm.model.data[i].notices)
                            vm.item[i].imgExampleName = JSON.parse(vm.model.data[i].imgExampleName)
                            vm.item[i].imgExample = JSON.parse(vm.model.data[i].imgExample)
                            vm.item[i].num = vm.model.data[i].num.toLocaleUpperCase()

                            if (vm.item[i].classArray == null) {
                                vm.item[i].classArray = [];
                            }
                            vm.item[i].classArray.push('');
                            switch (vm.item[i].layout) {
                                case (1):
                                    vm.item[i].classArray[0] = 'L-a'
                                    break
                                case (2):
                                    vm.item[i].classArray[0] = 'L-b'
                                    break
                                case (3):
                                    vm.item[i].classArray[0] = 'L-c'
                                    break
                                case (4):
                                    vm.item[i].classArray[0] = 'L-d'
                                    break
                                case (5):
                                    vm.item[i].classArray[0] = 'L-e'
                                    break
                                default:
                                    break
                            }
                            switch (vm.item[i].style) {
                                case (1):
                                    vm.item[i].classArray[1] = 'S-fashion'
                                    break
                                case (2):
                                    vm.item[i].classArray[1] = 'S-classical'
                                    break
                                case (3):
                                    vm.item[i].classArray[1] = 'S-gorgeous'
                                    break
                                case (4):
                                    vm.item[i].classArray[1] = 'S-simple'
                                    break
                                default:
                                    break
                            }
                            vm.item[i].classArray[2] = vm.item[i].colors
                            if (vm.item[i].isHot) {
                                vm.item[i].classArray[3] = 'hot'
                            }

                        }
                        if (vm.query.isRWD == '1') {
                            vm.currentPage = 'viewRWD'
                        } else {
                            vm.currentPage = 'viewAdaptive'
                        }
                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            },
        },
    }
</script>