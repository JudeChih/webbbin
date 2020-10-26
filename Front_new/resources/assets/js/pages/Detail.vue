<style scoped></style>
<template>
<div id="mainBody">
    <main class="container-wrap">
        <section class="detail-wrap">
            <div class="detail-main" v-if="project != ''">
                <div class="detail-top">
                    <figure class="detail-screen">
                        <span>
                            <img :src="wms_url + project.pd_banner_img">
                        </span>
                    </figure>
                    <hgroup>
                        <h1>{{project.pd_num}}</h1>
                        <a v-if="project.pd_live" :href="'../demo/'+project.pd_id" target="_blank">LIVE DEMO</a>
                        <p>
                            <span>首页廣告轮播圖片尺吋不限依設計為主，如有特殊要求請告知。</span>
                            <br>
                            <span>导览列/网页字型：预设系统字。</span>
                            <br>
                            <span>网页语系，功能按钮，</span>
                            <span>标题名称皆与BBIN为主。</span>
                        </p>
                    </hgroup>
                    <div>
                        <button class="is-prev" @click="getPrevProject()"></button>
                        <button class="is-next" @click="getNextProject()"></button>
                    </div>
                </div>
                <div class="detail-slider">
                    <div v-for="(img,index) in JSON.parse(project.pd_template_img)">
                        <img id="index" :src="wms_url+img">
                    </div>
                </div>
            </div>
            <button onclick="javascript:window.close();"></button>
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
            wms_url:'http://wms.bbinpartner.com',
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

   	},
    methods: {
        init: function () {
            setTimeout(() => {
                $(".detail-slider").slick({
                    dots: true,
                    arrows: true,
                    fade: true,
                    adaptiveHeight: true,
                });
            }, 200);

        },
        //////////////////////// 檢查各項目 ////////////////////////
        ///
        // 檢查該使用者是否可以瀏覽該頁面
        checkUrl:function(){
            let self = this;
            let url = new URL(location.href);
            var array = url.pathname.split("/detail/");
            this.$router.replace('/detail').catch(err => {});
            self.pd_id = array[1];
        },
        ///
        //////////////////////// 檢查各項目 end //////////////////////

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
        getPrevProject:function(){
            let self = this;
            $(".detail-slider").slick('unslick');
            axios.get('../prev_project/'+self.pd_id)
                .then(function (response) {
                    // self.project = response.data;
                    // self.pd_id = self.project.pd_id
                    document.location.href="../detail/"+response.data.pd_id;
                    // self.init()
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        getNextProject:function(){
            let self = this;
            $(".detail-slider").slick('unslick');
            axios.get('../next_project/'+self.pd_id)
                .then(function (response) {
                    // self.project = response.data;
                    // self.pd_id = self.project.pd_id
                    document.location.href="../detail/"+response.data.pd_id;
                    // self.init()
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