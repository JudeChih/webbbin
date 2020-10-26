<style scoped></style>
<template>
<div id="mainBody">
    <header class="livedemo-header-wrap">
        <div class="livedemo-header-main">
            <h1>{{project.pd_num}}</h1>
            <button onclick="javascript:window.close();"></button>
        </div>
    </header>
    <main class="container-wrap">
        <section class="livedemo-iframe-wrap">
            <div class="livedemo-iframe-content" v-html="returnIframe">
                <!-- <iframe :src="web_url+project.pd_live_url" frameborder="0" scrolling="yes"></iframe> -->
            </div>
        </section>
    </main>
</div>
</template>
<script>
export default {
	data() {
        return {
            pd_id:'',
            project:'',
            web_url:'http://web.bbinpartner.com/',
            // web_url:'http://192.168.160.227/webbbin/Front/'
        }
    },
    created:function(){
        let self = this;
        self.checkUrl();
    },
    mounted: function () {
        let self = this;
        self.getProject();
        
        // vh adjust
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Resize
        $(window).resize(function() {
            $(".nav-menu-btn").removeClass("is-active");
            $(".nav-wrap").removeClass("is-active");
            $(".nav-filter-btn").removeClass("is-active");
            $(".index-filter-wrap").removeClass("is-active");
            $(".overlay").removeClass("is-active");
            $(".index-filter-sub").css("display", "");
            $(".index-filter-btn").removeClass("is-active");
        });
    },
    computed: {
        returnIframe:function(){
            let self = this;
            if(self.project){
                return '<iframe src="' + self.web_url + self.project.pd_live_url + '" frameborder="0" scrolling="yes"></iframe>';
            }else{
                return '<p>請耐心等待</p>';
            }
        }
   	},
    methods: {
        init: function () {
            
        },
        //////////////////////// 檢查各項目 //////////////////////
        ///
        // 檢查該使用者是否可以瀏覽該頁面
        checkUrl:function(){
            let self = this;
            let url = new URL(location.href);
            var array = url.pathname.split("/demo/");
            this.$router.replace('/demo').catch(err => {});
            self.pd_id = array[1];
        },
        ///
        //////////////////////// 檢查各項目 end //////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得資料
        getProject:function(){
            let self = this;
            
            axios.get('../project/'+self.pd_id)
                .then(function (response) {
                    self.project = response.data;
                    self.init()
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
                    title: '成功',
                    message: string,
                    position: 'bottom-right',
                    type:'success'
                });
            }else if(type == 'failure'){
                this.$notify({
                    title: '失敗',
                    message: string,
                    position: 'bottom-right',
                    type:'error'
                });
            }
        },
        ///
        //////////////////////// 推播框設定 end /////////////////////
    },
    watch: {
	}
}
</script>