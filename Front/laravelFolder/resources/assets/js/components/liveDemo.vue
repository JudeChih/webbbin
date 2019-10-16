<template>
    <div :class="['livedemo-wrap', liveDemoClass]">
        <header class="livedemo-header">
            <div class="livedemo-top">
                <h1 v-text="item.num"></h1>
                <div class="livedemo-top-close">
                    <a href="javascript:window.close();"></a>
                </div>
                <div class="livedemo-top-qrcode">
                    <button>QRcode</button>
                    <figure>
                        <figcaption>使用行动装置浏览</figcaption>
                        <div id="qrcode"></div>
                    </figure>
                </div>
            </div>
            <div v-if="item.isRWD" class="livedemo-top-bar">
                <ul id="breakpoint-wrap" class="fullscreen">
                    <li class="breakpoint-full active">
                        <span><i>Full Screen</i><i>Full Screen</i></span>
                    </li>
                    <li class="breakpoint-1024 incolor">
                        <span><i>1024px</i><i>1024px</i></span>
                    </li>
                    <li class="breakpoint-768 incolor">
                        <span><i>768px</i><i>768px</i></span>
                    </li>
                    <li class="breakpoint-480 incolor">
                        <span><i>480px</i><i>480px</i></span>
                    </li>
                    <li class="breakpoint-320 incolor">
                        <span><i>320px</i><i>320px</i></span>
                    </li>
                </ul>
                <div id="breakpoint-icon" class="breakpoint-icon-full"></div>
                <div id="breakpoint-tips" class="breakpoint-tips">請點選瀏覽尺寸</div>
            </div>
        </header>
        <main class="livedemo-main">
            <div id="livedemo-iframe">
                <!-- 嵌入 START -->
                <iframe :src="liveUrl"></iframe>
                <!-- 嵌入 END -->
            </div>
        </main>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';


    import jQuery from 'jquery'
    window.jQuery = jQuery
    window.$ = jQuery

    require('./../qrcode.min');

    
    export default {
        props: ['source', 'asset', 'id'],
        data() {
            return {
                item: {
                },
                assetUrl: `${this.asset}`,
                liveDemoClass: '',
                liveUrl: '',
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
                        vm.item = response.data
                        vm.item.num = vm.item.num.toLocaleUpperCase()
                        if(vm.item.isRWD) {
                            vm.liveDemoClass= 'livedemo-rwd'
                        }
                        else {
                            vm.liveDemoClass= 'livedemo-adaptive'
                        }
                        vm.demoFun();
                        vm.liveUrl = vm.assetUrl + '_template/' + vm.item.num;
                        qrcode.makeCode(vm.liveUrl);
                    }).catch(function(response) {
                        console.log(response);
                    })
            },
            demoFun() {
                this.$nextTick(function() {
                    //裝置判定，解決 iOS 裝置無法顯示 iframe 的卷軸問題
                    if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {   
                        $("#livedemo-iframe").css("overflow-y","auto");   
                    };  

                    //QR code
                    $(".livedemo-top-qrcode button").click(function(){
                        $(".livedemo-top-qrcode figure").slideToggle();
                    });
                    $(document).on("click", function(e) {
                        if ($(e.target).is(".livedemo-top-qrcode button") === false) {
                            $(".livedemo-top-qrcode figure").slideUp();
                        }
                    });


                    //提示視窗
                    var $tip = $("#breakpoint-tips");
                    $tip.fadeIn("fast");
                    setTimeout(function(){
                        $tip.fadeOut("fast");
                    },4000);
                    // $("#livedemo-iframe").scroll(function() {
                    //     if ($(this).scrollTop() > 0){
                    //         $tip.fadeOut("fast");
                    //     }
                    //     else {
                    //         $("#breakpoint-tips").stop().fadeIn("fast");
                    //     }
                    // });  ***經測試，於iframe嵌入的內容無效


                    // 選取某一斷點後，其他斷點的共同樣式變化
                    $("#breakpoint-wrap li").click(function(){
                        $("#breakpoint-wrap li").removeClass("active").removeClass("incolor");
                        $(this).addClass("active").nextAll().addClass("incolor");
                        $("#livedemo-iframe").removeClass();
                    }).mouseover(function(){
                        $(this).nextAll().addClass("incolor-hover");
                        $("#breakpoint-tips").fadeOut("fast");
                    }).mouseout(function(){
                        $(this).nextAll().removeClass("incolor-hover");
                    });


                    // 斷點列的橘色背景 + 嵌入內容的容器寬度 + 滑入滑出的背景延伸、斷點左右邊的顏色樣式變換
                    $(".breakpoint-full").click(function(){
                        $("#breakpoint-wrap").removeClass().addClass("fullscreen");
                        $("#breakpoint-icon").removeClass().addClass("breakpoint-icon-full");
                        $("#livedemo-iframe").addClass("iframe-full");
                    }).mouseover(function(){
                        $(this).addClass("incolor-hover");
                    }).mouseout(function(){
                        $(this).removeClass("incolor-hover");
                    });

                    $(".breakpoint-1024").click(function(){
                        $("#breakpoint-wrap").removeClass().addClass("screen-1024");
                        $("#breakpoint-icon").removeClass().addClass("breakpoint-icon-1024");
                        $("#livedemo-iframe").addClass("iframe-1024");
                    }).mouseover(function(){
                        $(this).addClass("incolor-hover");
                    }).mouseout(function(){
                        $(this).removeClass("incolor-hover");
                    });

                    $(".breakpoint-768").click(function(){
                        $("#breakpoint-wrap").removeClass().addClass("screen-768");
                        $("#breakpoint-icon").removeClass().addClass("breakpoint-icon-768");
                        $("#livedemo-iframe").addClass("iframe-768");
                    }).mouseover(function(){
                        $(this).addClass("incolor-hover");
                    }).mouseout(function(){
                        $(this).removeClass("incolor-hover");
                    });

                    $(".breakpoint-480").click(function(){
                        $("#breakpoint-wrap").removeClass().addClass("screen-480");
                        $("#breakpoint-icon").removeClass().addClass("breakpoint-icon-480");
                        $("#livedemo-iframe").addClass("iframe-480");
                    }).mouseover(function(){
                        $(this).addClass("incolor-hover");
                    }).mouseout(function(){
                        $(this).removeClass("incolor-hover");
                    });

                    $(".breakpoint-320").click(function(){
                        $("#breakpoint-wrap").removeClass().addClass("screen-320");
                        $("#breakpoint-icon").removeClass().addClass("breakpoint-icon-320");
                        $("#livedemo-iframe").addClass("iframe-320");
                    }).mouseover(function(){
                        $(this).addClass("incolor-hover");
                    }).mouseout(function(){
                        $(this).removeClass("incolor-hover");
                    });
                })
            }
        }
    }
</script>