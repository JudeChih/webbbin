<style scoped></style>
<template>
<div id="mainBody">
    <header class="header-wrap" v-bind:class="url_show_block == 'intro' ? 'is-intro' : false">
        <div class="header-center">
            <div class="logo-wrap">
                <a href="javascript:void(0)" @click="url_show_block != 'index' ? url_show_block = 'index' : false">
                    <img src="image/logo.png">
                </a>
            </div>
            <nav class="nav-wrap">
                <ul>
                    <li>
                        <a href="javascript:void(0)" id="nav-home" @click="url_show_block != 'index' ? init_index() : false" v-bind:class="url_show_block == 'index' ? 'is-active' : false ">多元模版</a>
                    </li>
                    <li>
                        <a id="scroll-cm" href="javascript:void(0)" @click="url_show_block != 'intro' ? init_intro() : false,intro_show_block = 'js-intro-cm',scrollToIntroPage('js-intro-cm')" v-bind:class="url_show_block == 'intro' && intro_show_block == 'js-intro-cm' ? 'is-active' : false ">合作模式</a>
                    </li>
                    <li>
                        <a id="scroll-pd" href="javascript:void(0)" @click="url_show_block != 'intro' ? init_intro() : false,intro_show_block = 'js-intro-pd',scrollToIntroPage('js-intro-pd')" v-bind:class="url_show_block == 'intro' && intro_show_block == 'js-intro-pd' ? 'is-active' : false ">产品类型</a>
                    </li>
                    <li>
                        <a id="scroll-brand" href="javascript:void(0)" @click="url_show_block != 'intro' ? init_intro() : false,intro_show_block = 'js-intro-brand',scrollToIntroPage('js-intro-brand')" v-bind:class="url_show_block == 'intro' && intro_show_block == 'js-intro-brand' ? 'is-active' : false ">品牌优势</a>
                    </li>
                    <li>
                        <a id="scroll-partner" href="javascript:void(0)" @click="url_show_block != 'intro' ? init_intro() : false,intro_show_block = 'js-intro-partner',scrollToIntroPage('js-intro-partner')" v-bind:class="url_show_block == 'intro' && intro_show_block == 'js-intro-partner' ? 'is-active' : false ">合作伙伴</a>
                    </li>
                    <li>
                        <a href="https://wj.qq.com/s2/4777757/7aa5/" target="_blank">问卷调查</a>
                    </li>
                </ul>
            </nav>
            <button class="nav-menu-btn"></button>
            <button class="nav-filter-btn" v-if="url_show_block == 'index'"></button>
        </div>
    </header>
    <div v-if="url_show_block == 'index'">
        <main class="container-wrap">
            <!-- 上半部 -->
            <section class="index-top-wrap">
                <div class="index-top-center">
                    <button class="scroll-pc"><i></i><i></i></button>
                    <button class="scroll-device"><i></i><i></i></button>
                </div>
                <div class="index-top-button removeTextNodes">
                    <button class="is-casino" data-filter=".t-casino" @click="filterItems('t_casino')">
                        <span>机率</span>
                    </button>
                    <button class="is-sports" data-filter=".t-sports" @click="filterItems('t_sports')">
                        <span>体育</span>
                    </button>
                    <button class="is-card" data-filter=".t-card" @click="filterItems('t_card')">
                        <span>棋牌</span>
                    </button>
                    <button class="is-live" data-filter=".t-live" @click="filterItems('t_live')">
                        <span>视讯</span>
                    </button>
                    <button class="is-lottery" data-filter=".t-lottery" @click="filterItems('t_lottery')">
                        <span>彩票</span>
                    </button>
                    <button class="is-mahjong" data-filter=".t-mahjong" @click="filterItems('t_mahjong')">
                        <span>麻將</span>
                    </button>
                    <button class="is-fishing" data-filter=".t-fishing" @click="filterItems('t_fishing')">
                        <span>捕鱼</span>
                    </button>
                </div>
                <div class="index-top-title-1"></div>
                <div class="index-top-title-2"></div>
                <div class="index-top-title-3"></div>
                <div class="index-top-title-4"></div>
                <span class="index-top-line-1"></span>
                <span class="index-top-line-2"></span>
            </section>
            <!-- 篩選列表 -->
            <section class="index-filter-wrap">
                <nav class="index-filter-nav">
                    <div class="index-filter-link removeTextNodes">
                        <div class="index-filter-item">
                            <button class="index-filter-btn" v-bind:class="filterOption == 'all' ? 'is-active' : false" @click="filterItems('all')" data-filter="*">所有款式</button>
                        </div>
                        <div class="index-filter-item">
                            <button class="index-filter-btn" v-bind:class="filterOption == 'is_new' ? 'is-active' : false" @click="filterItems('is_new')" data-filter=".is-new">最新版型</button>
                        </div>
                        <div class="index-filter-item">
                            <span class="index-filter-btn" v-bind:class="filterOption == 'l_straight' || filterOption == 'l_horizontal' || filterOption == 'l_multi' || filterOption == 'l_diagonal' || filterOption == 'l_norules' ? 'is-active' : false">版型布局<i></i></span>
                            <div class="index-filter-sub">
                                <div class="is-layout">
                                    <button class="index-filter-option f-straight" v-bind:class="filterOption == 'l_straight' ? 'is-active' : false" @click="filterItems('l_straight')" data-filter=".l-straight">
                                        <i></i>
                                        <span>直向大小</span>
                                    </button>
                                    <button class="index-filter-option f-horizontal" v-bind:class="filterOption == 'l_horizontal' ? 'is-active' : false" @click="filterItems('l_horizontal')" data-filter=".l-horizontal">
                                        <i></i>
                                        <span>横向大小</span>
                                    </button>
                                    <button class="index-filter-option f-multi" v-bind:class="filterOption == 'l_multi' ? 'is-active' : false" @click="filterItems('l_multi')" data-filter=".l-multi">
                                        <i></i>
                                        <span>多面切割</span>
                                    </button>
                                    <button class="index-filter-option f-diagonal" v-bind:class="filterOption == 'l_diagonal' ? 'is-active' : false" @click="filterItems('l_diagonal')" data-filter=".l-diagonal">
                                        <i></i>
                                        <span>对角线</span>
                                    </button>
                                    <button class="index-filter-option f-norules" v-bind:class="filterOption == 'l_norules' ? 'is-active' : false" @click="filterItems('l_norules')" data-filter=".l-norules">
                                        <i></i>
                                        <span>無規則</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="index-filter-item">
                            <span class="index-filter-btn" v-bind:class="filterOption == 's_fashion' || filterOption == 's_classical' || filterOption == 's_gorgeous' || filterOption == 's_simple' ? 'is-active' : false">设计风格<i></i></span>
                            <div class="index-filter-sub">
                                <div class="is-style">
                                    <button class="index-filter-option f-fashion" v-bind:class="filterOption == 's_fashion' ? 'is-active' : false" @click="filterItems('s_fashion')" data-filter=".s-fashion">
                                        <span>前卫时尚</span>
                                    </button>
                                    <button class="index-filter-option f-classical" v-bind:class="filterOption == 's_classical' ? 'is-active' : false" @click="filterItems('s_classical')" data-filter=".s-classical">
                                        <span>复古典雅</span>
                                    </button>
                                    <button class="index-filter-option f-gorgeous" v-bind:class="filterOption == 's_gorgeous' ? 'is-active' : false" @click="filterItems('s_gorgeous')" data-filter=".s-gorgeous">
                                        <span>精致华丽</span>
                                    </button>
                                    <button class="index-filter-option f-simple" v-bind:class="filterOption == 's_simple' ? 'is-active' : false" @click="filterItems('s_simple')" data-filter=".s-simple">
                                        <span>简约大气</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="index-filter-item">
                            <span class="index-filter-btn" v-bind:class="filterOption == 'c_white' || filterOption == 'c_gray' || filterOption == 'c_black' || filterOption == 'c_blue' || filterOption == 'c_green' || filterOption == 'c_yellow' || filterOption == 'c_brown' || filterOption == 'c_orange' || filterOption == 'c_red' || filterOption == 'c_pink' || filterOption == 'c_purple' ? 'is-active' : false">颜色色系<i></i></span>
                            <div class="index-filter-sub">
                                <div class="is-color">
                                    <button class="index-filter-option f-white" v-bind:class="filterOption == 'c_white' ? 'is-active' : false" @click="filterItems('c_white')" data-filter=".c-white">
                                        <b>白色</b>
                                    </button>
                                    <button class="index-filter-option f-gray" v-bind:class="filterOption == 'c_gray' ? 'is-active' : false" @click="filterItems('c_gray')" data-filter=".c-gray">
                                        <b>灰色</b>
                                    </button>
                                    <button class="index-filter-option f-black" v-bind:class="filterOption == 'c_black' ? 'is-active' : false" @click="filterItems('c_black')" data-filter=".c-black">
                                        <b>黑色</b>
                                    </button>
                                    <button class="index-filter-option f-blue" v-bind:class="filterOption == 'c_blue' ? 'is-active' : false" @click="filterItems('c_blue')" data-filter=".c-blue">
                                        <b>藍色</b>
                                    </button>
                                    <button class="index-filter-option f-green" v-bind:class="filterOption == 'c_green' ? 'is-active' : false" @click="filterItems('c_green')" data-filter=".c-green">
                                        <b>綠色</b>
                                    </button>
                                    <button class="index-filter-option f-yellow" v-bind:class="filterOption == 'c_yellow' ? 'is-active' : false" @click="filterItems('c_yellow')" data-filter=".c-yellow">
                                        <b>黃色</b>
                                    </button>
                                    <button class="index-filter-option f-brown" v-bind:class="filterOption == 'c_brown' ? 'is-active' : false" @click="filterItems('c_brown')" data-filter=".c-brown">
                                        <b>棕色</b>
                                    </button>
                                    <button class="index-filter-option f-orange" v-bind:class="filterOption == 'c_orange' ? 'is-active' : false" @click="filterItems('c_orange')" data-filter=".c-orange">
                                        <b>橘色</b>
                                    </button>
                                    <button class="index-filter-option f-red" v-bind:class="filterOption == 'c_red' ? 'is-active' : false" @click="filterItems('c_red')" data-filter=".c-red">
                                        <b>紅色</b>
                                    </button>
                                    <button class="index-filter-option f-pink" v-bind:class="filterOption == 'c_pink' ? 'is-active' : false" @click="filterItems('c_pink')" data-filter=".c-pink">
                                        <b>粉色</b>
                                    </button>
                                    <button class="index-filter-option f-purple" v-bind:class="filterOption == 'c_purple' ? 'is-active' : false" @click="filterItems('c_purple')" data-filter=".c-purple">
                                        <b>紫色</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="index-filter-item">
                            <span class="index-filter-btn" v-bind:class="filterOption == 't_casino' || filterOption == 't_sports' || filterOption == 't_card' || filterOption == 't_live' || filterOption == 't_lottery' || filterOption == 't_mahjong' || filterOption == 't_fishing' ? 'is-active' : false" @mouseover="hover_nav = 't'" @mouseleave="hover_nav = ''">主题类型<i></i></span>
                            <div class="index-filter-sub is-theme">
                                <div class="is-theme">
                                    <button class="index-filter-option f-casino" v-bind:class="filterOption == 't_casino' ? 'is-active' : false" @click="filterItems('t_casino')" data-filter=".t-casino">
                                        <b>机率</b>
                                    </button>
                                    <button class="index-filter-option f-sports" v-bind:class="filterOption == 't_sports' ? 'is-active' : false" @click="filterItems('t_sports')" data-filter=".t-sports">
                                        <b>体育</b>
                                    </button>
                                    <button class="index-filter-option f-card" v-bind:class="filterOption == 't_card' ? 'is-active' : false" @click="filterItems('t_card')" data-filter=".t-card">
                                        <b>棋牌</b>
                                    </button>
                                    <button class="index-filter-option f-live" v-bind:class="filterOption == 't_live' ? 'is-active' : false" @click="filterItems('t_live')" data-filter=".t-live">
                                        <b>视讯</b>
                                    </button>
                                    <button class="index-filter-option f-lottery" v-bind:class="filterOption == 't_lottery' ? 'is-active' : false" @click="filterItems('t_lottery')" data-filter=".t-lottery">
                                        <b>彩票</b>
                                    </button>
                                    <button class="index-filter-option f-mahjong" v-bind:class="filterOption == 't_mahjong' ? 'is-active' : false" @click="filterItems('t_mahjong')" data-filter=".t-mahjong">
                                        <b>麻將</b>
                                    </button>
                                    <button class="index-filter-option f-fishing" v-bind:class="filterOption == 't_fishing' ? 'is-active' : false" @click="filterItems('t_fishing')" data-filter=".t-fishing">
                                        <b>捕鱼</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index-filter-sort removeTextNodes">
                        <button @click="changeLayout('grid')" class="is-grid" v-bind:class="layoutOption == 'grid' ? 'is-active' : false"></button>
                        <button @click="changeLayout('masonry')" class="is-masonry" v-bind:class="layoutOption == 'masonry' ? 'is-active' : false"></button>
                    </div>
                </nav>
            </section>
            <!-- 版型列表 -->
            <section class="index-list-wrap">
                <div class="index-list-center">
                    <div class="index-list-top">
                        <hgroup>
                            <h2>所有款式</h2>
                            <h3></h3>
                        </hgroup>
                        <div>
                            <button @click="changeLayout('grid')" class="is-grid" v-bind:class="layoutOption == 'grid' ? 'is-active' : false"></button>
                            <button @click="changeLayout('masonry')" class="is-masonry" v-bind:class="layoutOption == 'masonry' ? 'is-active' : false"></button>
                        </div>
                    </div>
                        <isotope ref="cpt" class="index-list-main" :list="projects" :options='option' @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]" @layout="currentLayout=arguments[0]">
                            <div v-for="item in projects" v-if="item.pd_show == 1" class="index-list-item" :class="[{ 'is-new' : item.pd_new }, checkTags(item)]"  :key="item.pd_id">
                                <div class="item-box">
                                    <time v-text="item.pd_date"></time>
                                    <figure>
                                        <a :href="'detail/'+item.pd_id" target="_blank">
                                            <img :src="wms_url + item.pd_view_img">
                                        </a>
                                    </figure>
                                    <hgroup>
                                        <h2 v-text="item.pd_num"></h2>
                                        <div>
                                            <a :href="'detail/'+item.pd_id" class="is-detail" target="_blank">DETAIL</a>
                                            <a v-if="item.pd_live" :href="'demo/'+item.pd_id" class="is-livedemo" target="_blank">LIVE DEMO</a>
                                        </div>
                                    </hgroup>
                                    <span :style="checkColors(item.pd_colors)"></span>
                                </div>
                            </div>
                        </isotope>
                        <!-- <div v-if="showErrorWord" style="width">未搜寻到相关版型</div> -->
                        <img class="comingSoonImg" v-if="showErrorWord" src="image/index_comingsoon.png" alt="">
                    <!-- <div class="item-loading" v-if="!busy"></div> -->
                </div>
            </section>
            <!-- Go top -->
            <button class="btn-top"></button>
        </main>
        <span class="overlay"></span>
    </div>
    <div v-if="url_show_block == 'intro'">
        <main class="container-wrap">
            <section class="intro-top-wrap">
                <!-- 輪播圖 -->
                <div class="intro-slider-wrap">
                    <div>
                        <div class="content">
                            <figure class="text_a1">
                                <img src="image/slider/slider_text_a1.png">
                            </figure>
                            <figure class="text_a2"> <img src="image/slider/slider_text_a2.png"></figure>
                            <!-- 右側動畫 -->
                            <div class="slider-animation-1">
                                <figure class="a01-l">
                                    <img src="image/slider/slider_a01_l.png">
                                </figure>
                                <figure class="a01-r">
                                    <img src="image/slider/slider_a01_r.png">
                                </figure>
                                <figure class="a02">
                                    <img src="image/slider/slider_a02.png" class="demo-d">
                                    <img src="image/slider/slider_a02_m.png" class="demo-m">
                                </figure>
                                <figure class="a03">
                                    <img src="image/slider/slider_a03.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <figure class="text_b1">
                                <img src="image/slider/slider_text_b1.png">
                            </figure>
                            <figure class="text_b2"> <img src="image/slider/slider_text_b2.png"></figure>
                            <!-- 右側動畫 -->
                            <div class="slider-animation-2">
                                <figure class="b01">
                                    <img src="image/slider/slider_b01.png">
                                </figure>
                                <figure class="b02">
                                    <img src="image/slider/slider_b02.png">
                                </figure>
                                 <figure class="b03">
                                    <img src="image/slider/slider_b03.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <figure class="text_c1">
                                <img src="image/slider/slider_text_c1.png">
                            </figure>
                            <figure class="text_c2"> <img src="image/slider/slider_text_c2.png"></figure>
                            <!-- 右側動畫 -->
                            <div class="slider-animation-3">
                                <figure class="c01">
                                    <img src="image/slider/slider_c01.png">
                                </figure>
                                <figure class="c02">
                                    <img src="image/slider/slider_c02.png">
                                </figure>
                                <figure class="c03">
                                    <img src="image/slider/slider_c03.png">
                                </figure>
                                <figure class="c04">
                                    <img src="image/slider/slider_c04.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                         <div class="content">
                            <figure class="text_d1">
                                <img src="image/slider/slider_text_d1.png">
                            </figure>
                            <figure class="text_d2"> <img src="image/slider/slider_text_d2.png"></figure>
                            <!-- 右側動畫 -->
                            <div class="slider-animation-4">
                                <figure class="d01">
                                    <img src="image/slider/slider_d01.png">
                                </figure>
                                <figure class="d02">
                                    <img src="image/slider/slider_d02.png">
                                </figure>
                                <figure class="d03">
                                    <img src="image/slider/slider_d03.png">
                                </figure>
                                <figure class="d04">
                                    <img src="image/slider/slider_d04.png">
                                </figure>
                                <figure class="d05">
                                    <img src="image/slider/slider_d05.png">
                                </figure>
                                <figure class="d06">
                                    <img src="image/slider/slider_d06.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div>
                         <div class="content">
                            <figure class="text_e1">
                                <img src="image/slider/slider_text_e1.png">
                            </figure>
                            <figure class="text_e2">
                                <img src="image/slider/slider_text_e2.png">
                            </figure>
                            <!-- 右側動畫 -->
                            <div class="slider-animation-5">
                                <figure class="e01">
                                    <img src="image/slider/slider_e01.png" class="demo-d2">
                                    <img src="image/slider/slider_e01_t.png" class="demo-t">
                                </figure>
                                <figure class="e02">
                                    <img src="image/slider/slider_e02.png">
                                </figure>
                                <figure class="e03">
                                    <img src="image/slider/slider_e03.png">
                                </figure>
                                <figure class="e04">
                                    <img src="image/slider/slider_e04.png">
                                </figure>
                                <figure class="e05">
                                    <img src="image/slider/slider_e05.png">
                                </figure>
                                <figure class="e06">
                                    <img src="image/slider/slider_e06.png">
                                </figure>
                                <figure class="e07">
                                    <img src="image/slider/slider_e07.png">
                                </figure>
                                <figure class="e08">
                                    <img src="image/slider/slider_e08.png">
                                </figure>
                                <figure class="e09">
                                    <img src="image/slider/slider_e09.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 合作模式 -->
                <div class="intro-cm-wrap">
                    <div id="js-intro-cm" class="intro-cm-main">
                        <div class="intro-cm-content">
                            <h2 class="intro-cm-title">合作模式</h2>
                            <hgroup class="intro-cm-text is-text-1 is-active">
                                <h3>游戏API对接</h3>
                                <p>
                                    <span>八大游戏类型，</span>
                                    <span>区块链、真人、彩票、电子、</span>
                                    <span>体育电竞、棋牌、捕鱼、麻将，</span>
                                    <span>50间以上国际级游戏平台，破万款游戏，</span>
                                    <span>皆可藉由API对接整合至您的游戏平台上。</span>
                                </p>
                                <button id="js-cm-b1">更多</button>
                            </hgroup>
                            <hgroup class="intro-cm-text is-text-2">
                                <h3>包网建置</h3>
                                <p>
                                    <span>BBIN提供百款以上模版，</span>
                                    <span>快速稳定的数据线路</span>
                                    <span>以及强大的系统防护，</span>
                                    <span>专业的技术团队7x24随时为您服务，</span>
                                    <span>让您的站点能够站上高峰问鼎全球。</span>
                                </p>
                                <button id="js-cm-b2">更多</button>
                            </hgroup>
                            <button class="intro-cm-prev"></button>
                            <button class="intro-cm-next is-active"></button>
                        </div>
                    </div>
                </div>
                <div class="intro-cm-popup popup-wrap">
                    <div class="popup-main">
                        <div class="popup-content">
                            <div id="js-cm-c1" class="popup-text">
                                <div>
                                    <figure>
                                        <img src="image/cm_popup_img01.png">
                                    </figure>
                                    <hgroup>
                                        <h2>游戏API对接</h2>
                                        <p>
                                            <span>BBIN与多家国际游戏商合作，</span>
                                            <span>丰富多元的游戏类型，拥上万款游戏，</span>
                                            <span>我们将是您最有力的合作伙伴。</span>
                                        </p>
                                    </hgroup>
                                </div>
                            </div>
                            <div id="js-cm-c2" class="popup-text">
                                <div>
                                    <figure>
                                        <img src="image/cm_popup_img02.png">
                                    </figure>
                                    <hgroup>
                                        <h2>包网建站</h2>
                                        <p>
                                            <span>最多元化的设计风格，最齐全的网站配色，</span>
                                            <span>最多样化的版型配置，</span>
                                            <span>BBIN提供给您最完整具时尚、</span>
                                            <span>热门的版型设计，您的需求我们能够一次满足。</span>
                                        </p>
                                    </hgroup>
                                </div>
                            </div>
                            <button class="btn-prev"></button>
                            <button class="btn-next"></button>
                            <button class="btn-close"></button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 產品類型 -->
            <section class="intro-middle-wrap">
                <div id="js-intro-pd" class="intro-pd-wrap">
                    <div class="intro-pd-main">
                        <div class="pd-nav">
                            <ul rel="intro-pd-scroll">
                                <li class="is-casino">
                                    <span>电子</span>
                                </li>
                                <li class="is-sports">
                                    <span>体育</span>
                                </li>
                                <li class="is-card">
                                    <span>棋牌</span>
                                </li>
                                <li class="is-live">
                                    <span>视讯</span>
                                </li>
                                <li class="is-lottery">
                                    <span>彩票</span>
                                </li>
                                <li class="is-mahjong">
                                    <span>麻将</span>
                                </li>
                                <li class="is-fishing">
                                    <span>捕鱼</span>
                                </li>
                                <li class="is-blockchain">
                                    <span>区块链</span>
                                </li>
                            </ul>
                        </div>
                        <div class="pd-content">
                            <div class="is-casino">
                                <hgroup>
                                    <h2>电子游戏</h2>
                                    <p>
                                        <span>BBIN与30家以上国际级游戏商合作，</span>
                                        <span>破万款电子游戏，随君挑选。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-sports">
                                <hgroup>
                                    <h2>体育赛事</h2>
                                    <p>
                                        <span>网罗全球电竞、体育赛事的BB体育，</span>
                                        <span>年創百亿商机等您来+1。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-card">
                                <hgroup>
                                    <h2>棋牌游戏</h2>
                                    <p>
                                        <span>从明清时期盛行至今，玩法多元丰富</span>
                                        <span>斗地主、炸金花、牛牛，依然稳坐热搜排行榜，</span>
                                        <span>深受华人地区玩家喜爱。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-live">
                                <hgroup>
                                    <h2>真人视讯</h2>
                                    <p>
                                        <span>BBIN最新多重加密的区块链技术公正公開，</span>
                                        <span>最据临场感真人荷官发牌，24小时线上即时开牌不间断，</span>
                                        <span>所有好玩新事物尽在BBIN。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-lottery">
                                <hgroup>
                                    <h2>彩票游戏</h2>
                                    <p>
                                        <span>BBIN多样独家创新玩法，彩种丰富多元；</span>
                                        <span>公平可验证的区块链技术，界面简单易懂，新世代玩法不容错过。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-mahjong">
                                <hgroup>
                                    <h2>麻将游戏</h2>
                                    <p>
                                        <span>正所谓十亿人民九亿麻，还有一亿在观察，</span>
                                        <span>超过九亿人在玩麻将了，你还在等啥!</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-fishing">
                                <hgroup>
                                    <h2>捕鱼游戏</h2>
                                    <p>
                                        <span>现今电玩城里最火红的游戏类型，</span>
                                        <span>透由剧情以炮弹系统攻击，捕获成功，</span>
                                        <span>鱼儿们将化成數不尽的金币，塞满屏幕，欢乐无比。</span>
                                    </p>
                                </hgroup>
                            </div>
                            <div class="is-blockchain">
                                <hgroup>
                                    <h2>区块链</h2>
                                    <p>
                                        <span>BB区块链xSHA加密技术，多重加密无法串改，</span>
                                        <span>领先业界，缔造全球娱乐飨宴，尽在BBIN。</span>
                                    </p>
                                </hgroup>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 品牌優勢 -->
            <section id="js-intro-brand" class="intro-brand-wrap">
                <div class="intro-brand-main">
                    <div class="intro-brand-list removeTextNodes">
                        <div class="intro-brand-item is-style-1">
                            <figure>
                                <img src="image/brand_icon01.png">
                            </figure>
                            <hgroup>
                                <h2>世界顶尖机房</h2>
                                <p>
                                    <span>7x24小时全面监控，核心节点极速网络，</span>
                                    <span>多重防护，使您安心的好选择。</span>
                                </p>
                                <button>更多</button>
                            </hgroup>
                        </div>
                        <div class="intro-brand-item is-style-2">
                            <figure>
                                <img src="image/brand_icon02.png">
                            </figure>
                            <hgroup>
                                <h2>智能数位管理后台</h2>
                                <p>
                                    <span>整合最完整的玩家游戏数据、提供最全方位的金流动向分析，</span>
                                    <span>揭露第一手最新游戏资讯，让您随时掌握，赢得先机。</span>
                                </p>
                                <button>更多</button>
                            </hgroup>
                        </div>
                        <div class="intro-brand-item is-style-3">
                            <figure>
                                <img src="image/brand_icon03.png">
                            </figure>
                            <hgroup>
                                <h2>时尚多元前台模版</h2>
                                <p>
                                    <span>BBIN提供百款以上模版，各式版型风格，</span>
                                    <span>众多色系搭配，展现出个人品牌风格或协助制作仿站。</span>
                                </p>
                                <button @click="goToTemplate()">更多</button>
                            </hgroup>
                        </div>
                        <div class="intro-brand-item is-style-4">
                            <figure>
                                <img src="image/brand_icon04.png">
                            </figure>
                            <hgroup>
                                <h2>H5移动端APP</h2>
                                <p>
                                    <span>随登即玩，一机在手，快乐随时拥有。</span>
                                </p>
                                <button>更多</button>
                            </hgroup>
                        </div>
                        <div class="intro-brand-item is-style-5">
                            <figure>
                                <img src="image/brand_icon05.png">
                            </figure>
                            <hgroup>
                                <h2>专业的技术服务团队</h2>
                                <p>
                                    <span>全年365天，7x24小时，</span>
                                    <span>专业技术团队随时为您服务。</span>
                                </p>
                                <button>更多</button>
                            </hgroup>
                        </div>
                    </div>
                    <div id="brand-popup-1" class="intro-brand-popup popup-wrap">
                        <div class="popup-main">
                            <div class="popup-content">
                                <div class="popup-text">
                                    <hgroup>
                                        <h2>世界顶尖机房</h2>
                                        <p>BBIN自建顶尖高防数据中心，全球布局光纤缆线，数据中心拥全球国际稳定线路，完美防护，顶尖网络设施就在BBIN。</p>
                                    </hgroup>
                                </div>
                                <button class="btn-prev"></button>
                                <button class="btn-next"></button>
                                <button class="btn-close"></button>
                            </div>
                        </div>
                    </div>
                    <div id="brand-popup-2" class="intro-brand-popup popup-wrap">
                        <div class="popup-main">
                            <div class="popup-content">
                                <div class="popup-text">
                                    <hgroup>
                                        <h2>智能数位管理后台</h2>
                                        <p>BBIN提供最完整的数位管理后台系统，让您洞悉玩家游戏动态，掌握资金来龙去脉，随时调整运营方针。</p>
                                    </hgroup>
                                    <figure>
                                        <img src="image/brand_popup_bg02.png">
                                        <img src="image/brand_popup_bg02_t.png">
                                        <img src="image/brand_popup_bg02_m.png">
                                    </figure>
                                </div>
                                <button class="btn-prev"></button>
                                <button class="btn-next"></button>
                                <button class="btn-close"></button>
                            </div>
                        </div>
                    </div>
                    <div id="brand-popup-4" class="intro-brand-popup popup-wrap">
                        <div class="popup-main">
                            <div class="popup-content">
                                <div class="popup-text">
                                    <hgroup>
                                        <h2>H5移动端APP</h2>
                                        <p>运用扫脸、指纹，手势密码快速登入，随点即玩，让您的娱乐永不断线。</p>
                                    </hgroup>
                                </div>
                                <button class="btn-prev"></button>
                                <button class="btn-next"></button>
                                <button class="btn-close"></button>
                            </div>
                        </div>
                    </div>
                    <div id="brand-popup-5" class="intro-brand-popup popup-wrap">
                        <div class="popup-main">
                            <div class="popup-content">
                                <div class="popup-text">
                                    <hgroup>
                                        <h2>专业的技术服务团队</h2>
                                        <p>BBIN提供7x24小时专人线上咨询，以提升客户满意度为最高宗旨，而提供最全方位的技术服务是我们对您的坚持。</p>
                                    </hgroup>
                                </div>
                                <button class="btn-prev"></button>
                                <button class="btn-next"></button>
                                <button class="btn-close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 合作伙伴 -->
            <section id="js-intro-partner" class="intro-partner-wrap">
                <div class="intro-partner-main">
                    <div class="intro-partner-filter">
                        <nav class="filter-nav removeTextNodes">
                            <div class="is-active">
                                <div class="filter-btn is-active">
                                    <a href="javascript:void(0)" data-filter="*">全部</a>
                                </div>
                            </div>
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-casino">电子</a>
                                </div>
                            </div>
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-sports">体育</a>
                                </div>
                            </div>
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-card">棋牌</a>
                                </div>
                            </div>
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-live">视讯</a>
                                </div>
                            </div>
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-lottery">彩票</a>
                                </div>
                            </div>
                            <!-- <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-mahjong">麻将</a>
                                </div>
                            </div> -->
                            <div>
                                <div class="filter-btn">
                                    <a href="javascript:void(0)" data-filter=".is-fishing">捕鱼</a>
                                </div>
                            </div>
                        </nav>
                        <div class="filter-sort">
                            <div class="filter-content">
                                <!-- <figure v-for="item in bbinlogo" :class="[{ 'is-casino' : item.ld_casino, 'is-live' : item.ld_live, 'is-sports' : item.ld_sports, 'is-lottery' : item.ld_lottery, 'is-card' : item.ld_card, 'is-mahjong' : item.ld_mahjong, 'is-fishing' : item.ld_fishing }]">
                                    <img :src="item.ld_img">
                                </figure> -->
                                <figure v-for="item in logolist" :class="[{ 'is-casino' : item.ld_casino, 'is-live' : item.ld_live, 'is-sports' : item.ld_sports, 'is-lottery' : item.ld_lottery, 'is-card' : item.ld_card, 'is-mahjong' : item.ld_mahjong, 'is-fishing' : item.ld_fishing }]">
                                    <img :src="item.ld_img">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Go top -->
            <button class="btn-top"></button>
        </main>
        <span class="overlay"></span>
    </div>
</div>
</template>
<script>
export default {
	data() {
        return {
            url_show_block:'index',
            hover_nav:'',
            showTemplateData:false,
            showErrorWord:false,
            intro_show_block:'',
            projects:[],
            list:[],
            logolist: [],
            bbinlogo:[],
            wms_url:'http://wms.bbinpartner.com/',
            option: {
                getSortData: {
                    id: "pd_id",
                },
                getFilterData: {
                    is_new: function(itemElem) {
                        return itemElem.pd_new == 1 ;
                    },
                    all: function(itemElem) {
                        return true;
                    },
                    l_straight: function(itemElem) {
                        return itemElem.pd_layout == 1;
                    },
                    l_horizontal: function(itemElem) {
                        return itemElem.pd_layout == 2;
                    },
                    l_multi: function(itemElem) {
                        return itemElem.pd_layout == 3;
                    },
                    l_diagonal: function(itemElem) {
                        return itemElem.pd_layout == 4;
                    },
                    l_norules: function(itemElem) {
                        return itemElem.pd_layout == 5;
                    },
                    s_fashion: function(itemElem) {
                        return itemElem.pd_style == 1;
                    },
                    s_classical: function(itemElem) {
                        return itemElem.pd_style == 2;
                    },
                    s_gorgeous: function(itemElem) {
                        return itemElem.pd_style == 3;
                    },
                    s_simple: function(itemElem) {
                        return itemElem.pd_style == 4;
                    },
                    c_white: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'white'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_gray: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'gray'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_black: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'black'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_blue: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'blue'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_green: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'green'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_yellow: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'yellow'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_brown: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'coffee'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_orange: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'orange'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_red: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'red'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_pink: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'pink'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    c_purple: function(itemElem) {
                        var colors = JSON.parse( itemElem.pd_colors );
                        var boolean = false;
                        for(var j = 0;j < colors.length;j++){
                            if(colors[j] == 'purple'){
                                boolean = true;
                                break;
                            }
                        }
                        return boolean;
                    },
                    t_casino: function(itemElem) {
                        return itemElem.pd_type == 1;
                    },
                    t_sports: function(itemElem) {
                        return itemElem.pd_type == 2;
                    },
                    t_card: function(itemElem) {
                        return itemElem.pd_type == 3;
                    },
                    t_live: function(itemElem) {
                        return itemElem.pd_type == 4;
                    },
                    t_lottery: function(itemElem) {
                        return itemElem.pd_type == 5;
                    },
                    t_mahjong: function(itemElem) {
                        return itemElem.pd_type == 6;
                    },
                    t_fishing: function(itemElem) {
                        return itemElem.pd_type == 7;
                    },
                    filterByText: function(itemElem) {
                    return itemElem.name.toLowerCase().includes(this.filterText.toLowerCase());
                    }
                },
                sortAscending: false
            },
            filterOption: 'all',
            layoutOption: 'grid',
        }
    },
    created:function(){
        let self = this;
        window.onbeforeunload = function(){
            //刷新后页面自动回到顶部
            document.documentElement.scrollTop = 0;  //ie下
            document.body.scrollTop = 0;  //非ie
        }
        self.checkUrl();
        self.getProjects();
        self.getLogos();
        self.getBBINLogo();
    },
    mounted: function () {
        let self = this;
        self.init_index();
    },
    computed: {

   	},
    methods: {
        goToTemplate:function(){
            let self = this;

            // document.location.href = '/webbbin/Front/#/template';
            self.url_show_block = 'index';
            document.documentElement.scrollTop = 0;  //ie下
            document.body.scrollTop = 0;  //非ie
            self.init_index();
                // document.documentElement.scrollTop = topHeight + 100;  //ie下
                // document.body.scrollTop = topHeight + 100;  //非ie
            setTimeout(() => {
                
                var topHeight = $(".index-top-wrap").outerHeight();
                $('html, body').animate({
                    scrollTop: topHeight + 100
                }, 300);
            },500);
        },
        //變更列表呈現方式
        changeLayout:function(key){
            let self = this;
            self.layoutOption = key;
            if(key == 'grid'){
                $(".index-list-main").removeClass("is-masonry");
                this.$refs.cpt.sort('id');
            }else{
                $(".index-list-main").addClass("is-masonry");
                this.$refs.cpt.sort('id');
            }
        },
        //變更分頁
        filterItems: function(key) {
            if (this.filterOption != key){
                this.$refs.cpt.filter(key);
                this.filterOption = key;
            }
            let self = this;
            setTimeout(() => {
                if($('.index-list-item:hidden').length == self.projects.length){
                    self.showErrorWord = true;
                }else{
                    self.showErrorWord = false;
                }
            },500);
        },
        init_index: function () {
            let self = this;
            self.url_show_block = 'index';
            if(self.showTemplateData){
                var topHeight = $(".index-top-wrap").outerHeight();
                // document.documentElement.scrollTop = topHeight + 100;  //ie下
                // document.body.scrollTop = topHeight + 100;  //非ie
                setTimeout(() => {
                $('html, body').animate({
                    scrollTop: topHeight + 100
                }, 300);
                },500);
                self.showTemplateData = false;
            }else{
                document.documentElement.scrollTop = 0;  //ie下
                document.body.scrollTop = 0;  //非ie
            }
            
            // scroll
            $(function() {
                $(".scroll-pc").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(".index-list-wrap").offset().top
                    }, 300);
                });
                $(".scroll-device").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(".index-list-wrap").offset().top - 80
                    }, 300);
                });

                // 首頁滾動至篩選列表時取消 header fixed
                $(document).scroll(function(){
                    var topHeight = $(".index-top-wrap").outerHeight();
                    if($(this).scrollTop() >= topHeight + 100) {
                        $(".header-wrap").addClass("is-hide");
                    } else {
                        $(".header-wrap").removeClass("is-hide");
                    }
                });

                // 篩選按鈕的選取狀態
                $('.index-filter-link').each( function( i, navfilter ) {
                    var $navfilter = $( navfilter );
                        $navfilter.on( 'click', 'button', function() {
                        // $navfilter.find('button.is-active').removeClass('is-active');
                        // $(this).addClass('is-active');

                        $("html, body").removeClass("no-scroll");
                        $(".nav-filter-btn").removeClass("is-active");
                        $(".index-filter-wrap").removeClass("is-active");
                        $(".overlay").removeClass("is-active");
                        $('html, body').animate({
                            scrollTop: $(".index-list-wrap").offset().top - 80
                        }, 300);
                        $(".index-filter-sub").slideUp();
                        // $(".index-filter-btn").removeClass("is-active");
                    });
                });
                $('.index-top-button').on( 'click', 'button', function() {
                    // $('.index-filter-link button').removeClass('is-active');
                    $('html, body').animate({
                        scrollTop: $(".index-list-wrap").offset().top - 80
                    }, 300);
                });

                // 取得篩選條件的文字
                $('.index-filter-btn').click(function (){
                    var first = $(this).text();
                    $(".index-list-top").find("h2").text(first);
                    if(first == "所有款式" || first == "最新版型") {
                        $(".index-list-top").find("h3").text("");
                    }
                });
                $('.index-filter-option').click(function (){
                    var second = $(this).text();
                    $(".index-list-top").find("h3").text(second);
                });
                $('.index-top-button button').click(function (){
                    var second = $(this).text();
                    $(".index-list-top").find("h2").text("主题类型");
                    $(".index-list-top").find("h3").text(second);
                });
                $(".index-filter-btn").on("click", function(e){
                    if($(this).parent().has(".index-filter-sub")) {
                        e.preventDefault();
                    }
                    if(!$(this).hasClass("is-active")) {
                        $(".index-filter-sub").slideUp();
                        $(".index-filter-btn").removeClass("is-active");
                        $(this).next(".index-filter-sub").slideDown();
                        $(this).addClass("is-active");
                    }
                    else if($(this).hasClass("is-active")) {
                        $(this).removeClass("is-active");
                        $(this).next(".index-filter-sub").slideUp();
                    }
                });

                // Remove inline-block node
                $('.removeTextNodes').contents().filter(function() {
                    return this.nodeType === 3;
                }).remove();

                // vh adjust
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);

                // Nav
                $(".nav-menu-btn").click(function(){
                    // $("html, body").toggleClass("no-scroll");
                    $(".nav-wrap, .overlay").toggleClass("is-active");
                    $(this).toggleClass("is-active");
                    if($(".nav-filter-btn").hasClass("is-active")) {
                        $(".nav-filter-btn").removeClass("is-active");
                        $(".index-filter-wrap").removeClass("is-active");
                        $(".overlay").addClass("is-active");
                        // $("html, body").addClass("no-scroll");
                    }
                });
                $(".nav-filter-btn").click(function(){
                    // $("html, body").toggleClass("no-scroll");
                    $(".index-filter-wrap, .overlay").toggleClass("is-active");
                    $(this).toggleClass("is-active");
                    if($(".nav-menu-btn").hasClass("is-active")) {
                        $(".nav-menu-btn").removeClass("is-active");
                        $(".nav-wrap").removeClass("is-active");
                        $(".overlay").addClass("is-active");
                        // $("html, body").addClass("no-scroll");
                    }
                });
                $(".nav-wrap a").click(function(){
                    $(".nav-menu-btn").removeClass("is-active");
                    $(".nav-wrap").removeClass("is-active");
                    $(".overlay").removeClass("is-active");
                });

                // Go top
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 240) {
                        $(".btn-top").fadeIn();
                    } else {
                        $(".btn-top").fadeOut();
                    }
                });
                $(".btn-top").click(function() {
                    $('body, html').animate({
                        scrollTop: 0
                    }, 500);
                });

                // Overlay
                $(".overlay").click(function(){
                    // $("html, body").removeClass("no-scroll");
                    $(".nav-wrap, .nav-menu-btn, .index-filter-wrap, .nav-filter-btn").removeClass("is-active");
                    $(this).removeClass("is-active");
                });

                // Resize
                $(window).resize(function() {
                    $(".nav-menu-btn").removeClass("is-active");
                    $(".nav-wrap").removeClass("is-active");
                    $(".nav-filter-btn").removeClass("is-active");
                    $(".index-filter-wrap").removeClass("is-active");
                    $(".overlay").removeClass("is-active");
                    $(".index-filter-sub").css("display", "");
                });
            });
        },
        init_intro: function(){
            let self = this;
            self.url_show_block = 'intro';
            // scroll
            $(function() {
                // slick 設定
                $(".intro-slider-wrap").slick({
                    dots: true,
                    arrows: true,
                    adaptiveHeight: true,
                });

                $(".intro-brand-list").slick({
                    dots: false,
                    arrows: false,
                    slidesToShow: 5,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: true,
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                arrows: true,
                                slidesToShow: 1,
                            }
                        },
                    ]
                });

                $(".filter-nav").slick({
                    dots: false,
                    infinite: false,
                    arrows: false,
                    touchMove: false,
                    swipe: false,
                    swipeToSlide: false,
                    variableWidth: true,
                    // slidesToShow: 1,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: true,
                                swipe: true,
                                touchMove: true,
                                swipeToSlide: true,
                                // centerMode: true,
                                infinite: true,
                            }
                        },
                    ]
                });


                // 合作模式 設定
                $("#js-cm-b1").click(function(){
                    $(".intro-cm-popup, .intro-cm-popup .btn-prev, .intro-cm-popup .btn-next").fadeIn();
                    $("#js-cm-c1").fadeIn();
                });
                $("#js-cm-b2").click(function(){
                    $(".intro-cm-popup, .intro-cm-popup .btn-prev, .intro-cm-popup .btn-next").fadeIn();
                    $("#js-cm-c2").fadeIn();
                });
                $(".intro-cm-popup .btn-close").click(function(){
                    $(".intro-cm-popup .btn-next, .intro-cm-popup .btn-prev").fadeOut();
                    $(".intro-cm-popup").fadeOut();
                    $(".intro-cm-popup .popup-text").fadeOut();
                });
                $(".intro-cm-popup .btn-next, .intro-cm-popup .btn-prev").click(function(){
                    var display1 = $("#js-cm-c1").css("display");
                    var display2 = $("#js-cm-c2").css("display");
                    if( display1 == "block" ){
                        $("#js-cm-c1").fadeOut();
                        $("#js-cm-c2").fadeIn();
                    }
                    else if (display2 == "block") {
                        $("#js-cm-c1").fadeIn();
                        $("#js-cm-c2").fadeOut();
                    }
                });
                $(".intro-cm-next").click(function(){
                    $(".intro-cm-text.is-text-1").removeClass("is-active");
                    $(".intro-cm-text.is-text-2").addClass("is-active");
                    $(".intro-cm-prev").addClass("is-active");
                    $(this).removeClass("is-active");
                });
                $(".intro-cm-prev").click(function(){
                    $(".intro-cm-text.is-text-1").addClass("is-active");
                    $(".intro-cm-text.is-text-2").removeClass("is-active");
                    $(".intro-cm-next").addClass("is-active");
                    $(this).removeClass("is-active");
                });

                // 品牌優勢 設定
                $(".intro-brand-item.is-style-1 hgroup button").click(function(){
                    $("#brand-popup-1").addClass("is-active");
                });
                $(".intro-brand-item.is-style-2 hgroup button").click(function(){
                    $("#brand-popup-2").addClass("is-active");
                });
                $(".intro-brand-item.is-style-4 hgroup button").click(function(){
                    $("#brand-popup-4").addClass("is-active");
                });
                $(".intro-brand-item.is-style-5 hgroup button").click(function(){
                    $("#brand-popup-5").addClass("is-active");
                });
                $(".intro-brand-popup .btn-close").click(function(){
                    $(".intro-brand-popup").removeClass("is-active");
                });
                $(".intro-brand-popup .btn-prev").click(function(){
                    var bid = $(this).parents(".intro-brand-popup").attr("id");
                    $(this).parents(".intro-brand-popup").removeClass("is-active");
                    if(bid == "brand-popup-1") {
                        $("#brand-popup-5").addClass("is-active");
                    }
                    else if (bid == "brand-popup-2") {
                        $("#brand-popup-1").addClass("is-active");
                    }
                    else if (bid == "brand-popup-4") {
                        $("#brand-popup-2").addClass("is-active");
                    }
                    else if (bid == "brand-popup-5") {
                        $("#brand-popup-4").addClass("is-active");
                    }
                });
                $(".intro-brand-popup .btn-next").click(function(){
                    var bid = $(this).parents(".intro-brand-popup").attr("id");
                    $(this).parents(".intro-brand-popup").removeClass("is-active");
                    if(bid == "brand-popup-1") {
                        $("#brand-popup-2").addClass("is-active");
                    }
                    else if (bid == "brand-popup-2") {
                        $("#brand-popup-4").addClass("is-active");
                    }
                    else if (bid == "brand-popup-4") {
                        $("#brand-popup-5").addClass("is-active");
                    }
                    else if (bid == "brand-popup-5") {
                        $("#brand-popup-1").addClass("is-active");
                    }
                });


                // 產品類型 設定
                $(".pd-nav li:first").addClass("is-active");
                $(".pd-content div:first").addClass("is-active");
                $(".pd-nav li").click(function(){
                    $(this).addClass("is-active");
                    $(this).siblings().removeClass("is-active");
                    $(".pd-content div").siblings().removeClass("is-active");  
                    $(".pd-content div").eq($(this).index()).addClass("is-active");
                });


                // 合作夥伴 設定
                var $MixItUp = $('.filter-content').isotope({
                    itemSelector: '.filter-content figure',
                    masonry: {gutter: 0}
                });
                $MixItUp.imagesLoaded( function() {
                    $MixItUp.isotope('layout');
                });
                $('.intro-partner-filter nav').on( 'click', 'a', function() {
                var filterValue = $(this).attr('data-filter');
                $MixItUp.isotope({ filter: filterValue });
                });
                    // 篩選按鈕的選取狀態
                $('.intro-partner-filter nav').each( function( i, navfilter ) {
                    var $navfilter = $( navfilter );
                        $navfilter.on( 'click', 'a', function() {
                        $navfilter.find('.is-active').removeClass('is-active');
                        $(this).parent().addClass('is-active');
                    });
                });


                // 20200730new--- by 壯壯
                // h-scroll
                $(function() {
                    $("ul[rel='intro-pd-scroll']").customscroll({
                        direction: "horizontal",
                        bounce: 0
                    });
                });

                jQuery.fn.customscroll = function (d) {
                    return this.each(function () {
                        var direction = d.direction,
                            bounce = typeof d.bounce === "number" ? d.bounce : 20;
                        var drag = {
                            d: direction,
                            t: $(this).attr("rel"),
                            id: $(this),
                            setdimensions: function (orientation) {
                                //DD added function
                                if (orientation == "horizontal") {
                                    drag.b.css({
                                        width: drag.id.width(),
                                        left: 0,
                                        bottom: 0,
                                        position: "absolute",
                                        "z-index": 10
                                    });
                                    drag.c.css({
                                        display: "block",
                                        position: "absolute",
                                        height: drag.id.height() - drag.b.height() - 5,
                                        "overflow-y": "hidden"
                                    });
                                    drag.s.css({
                                        width: drag.b.width(),
                                        top: 0,
                                        width: 70,
                                        height: drag.b.height(),
                                        position: "absolute",
                                        "z-index": 100
                                    });
                                    drag.tickB = parseFloat(
                                        parseInt(drag.c.width() - drag.s.parent().width()) /
                                            parseInt(drag.s.parent().width() - drag.s.width())
                                    ); // ratio between scrollable DIV area and scrollbar area
                                    drag.tickC = parseFloat(
                                        parseInt(drag.s.parent().width() - drag.s.width()) /
                                            parseInt(drag.c.width() - drag.s.parent().width())
                                    ); // ratio between scrollable scrollbar area and DIV area
                                    return [
                                        drag.b.width() - drag.s.width() + bounce,
                                        drag.id.width() - drag.c.width() - bounce * drag.tickB
                                    ];
                                } else {
                                    drag.b.css({
                                        height: drag.id.height(),
                                        right: 0,
                                        top: 0,
                                        position: "absolute"
                                    });
                                    drag.c.css({
                                        display: "block",
                                        position: "absolute",
                                        width: drag.id.width() - drag.b.width() - 5
                                    });
                                    drag.s.css({
                                        width: drag.b.width(),
                                        top: 0,
                                        height: 70,
                                        position: "absolute"
                                    });
                                    drag.tickB = parseFloat(
                                        parseInt(drag.c.height() - drag.s.parent().height()) /
                                            parseInt(drag.s.parent().height() - drag.s.height())
                                    );
                                    drag.tickC = parseFloat(
                                        parseInt(drag.s.parent().height() - drag.s.height()) /
                                            parseInt(drag.c.height() - drag.s.parent().height())
                                    );
                                    return [
                                        drag.b.height() - drag.s.height() + bounce,
                                        drag.id.height() - drag.c.height() - bounce * drag.tickB
                                    ];
                                }
                            },
                            create: function () {
                                switch (drag.d) {
                                    case "horizontal":
                                        drag.elements("horizontal");
                                        var maxs = drag.setdimensions("horizontal");
                                        drag.s.data({ click: false });
                                        drag.s.mouseover(function () {
                                            drag.s.data({ click: true });
                                        });
                                        drag.s.mouseout(function () {
                                            drag.s.data({ click: false });
                                        });
                                        drag.id.bind("mousewheel", function (f, delta) {
                                            f.preventDefault();
                                            clearTimeout(drag.wheeltimer);
                                            var initial = drag.s.position().left,
                                                moveby;
                                            drag.s.css({
                                                left: Math.min(
                                                    Math.max(
                                                        (moveby = -10 * delta + initial),
                                                        -bounce
                                                    ),
                                                    maxs[0]
                                                )
                                            });
                                            drag.c.css({
                                                left: Math.max(
                                                    Math.min(
                                                        -drag.tickB * moveby,
                                                        drag.tickB * bounce
                                                    ),
                                                    maxs[1]
                                                )
                                            });
                                            drag.wheeltimer = setTimeout(drag.redrawH, 100);
                                        });
                                        drag.s.mousedown(function (f) {
                                            f.preventDefault();
                                            drag.s.data({ hold: false });
                                            var initial =
                                                drag.s.parent().offset().left -
                                                (drag.s.offset().left - f.pageX);
                                            $(document).mousemove(function (e) {
                                                e.preventDefault();
                                                if (drag.s.data("hold") == false) {
                                                    drag.s.css({
                                                        left: Math.min(
                                                            Math.max(
                                                                e.pageX - initial,
                                                                -bounce
                                                            ),
                                                            maxs[0]
                                                        )
                                                    });
                                                    drag.c.css({
                                                        left: Math.max(
                                                            Math.min(
                                                                -drag.tickB *
                                                                    (e.pageX - initial),
                                                                drag.tickB * bounce
                                                            ),
                                                            maxs[1]
                                                        )
                                                    });
                                                }
                                            });
                                        });
                                        $(document).mouseup(function () {
                                            drag.redrawH();
                                        });
                                        drag.id.bind("touchstart", function (f) {
                                            var f =
                                                f.type.indexOf("touch") != "-1"
                                                    ? f.originalEvent.changedTouches[0]
                                                    : f;
                                            var initial = drag.c.position().left;
                                            var initialx = f.pageX;
                                            $(document).bind("touchmove.slickscroll", function (
                                                f
                                            ) {
                                                // cancel scroll action ontouch with single finger
                                                var touches =
                                                    f.type.indexOf("touch") != "-1"
                                                        ? f.originalEvent.changedTouches.length
                                                        : 0;
                                                var f =
                                                    f.type.indexOf("touch") != "-1"
                                                        ? f.originalEvent.changedTouches[0]
                                                        : f;
                                                var moveby = f.pageX - initialx;
                                                drag.s.css({
                                                    left: Math.min(
                                                        Math.max(
                                                            -drag.tickC * (initial + moveby),
                                                            -bounce
                                                        ),
                                                        maxs[0]
                                                    )
                                                });
                                                drag.c.css({
                                                    left: Math.max(
                                                        Math.min(
                                                            initial + moveby,
                                                            drag.tickB * bounce
                                                        ),
                                                        maxs[1]
                                                    )
                                                });
                                                if (touches == 1)
                                                    // cancel scroll action ontouch with single finger
                                                    return false;
                                            });
                                        });
                                        drag.id.bind("touchend", function (f) {
                                            $(document).unbind("touchmove.slickscroll");
                                            drag.redrawH();
                                        });
                                        drag.b.click(function (e) {
                                            if (drag.s.data("click") == false) {
                                                var initial =
                                                    drag.s.parent().offset().left +
                                                    drag.s.width() / 2;
                                                drag.s.animate({ left: e.pageX - initial });
                                                drag.c.animate(
                                                    { left: -drag.tickB * (e.pageX - initial) },
                                                    {
                                                        complete: function () {
                                                            drag.redrawH();
                                                        }
                                                    }
                                                );
                                            }
                                        });
                                        break;
                                    case "vertical":
                                        drag.elements("vertical");
                                        var maxs = drag.setdimensions("vertical");
                                        drag.s.data({ click: false });
                                        drag.s.mouseover(function () {
                                            drag.s.data({ click: true });
                                        });
                                        drag.s.mouseout(function () {
                                            drag.s.data({ click: false });
                                        });
                                        drag.id.bind("mousewheel", function (f, delta) {
                                            f.preventDefault();
                                            clearTimeout(drag.wheeltimer);
                                            var initial = drag.s.position().top,
                                                moveby;
                                            drag.s.css({
                                                top: Math.min(
                                                    Math.max(
                                                        (moveby = -10 * delta + initial),
                                                        -bounce
                                                    ),
                                                    maxs[0]
                                                )
                                            });
                                            drag.c.css({
                                                top: Math.max(
                                                    Math.min(
                                                        -drag.tickB * moveby,
                                                        drag.tickB * bounce
                                                    ),
                                                    maxs[1]
                                                )
                                            });
                                            drag.wheeltimer = setTimeout(drag.redrawV, 100);
                                        });
                                        drag.s.bind("mousedown", function (f) {
                                            f.preventDefault();
                                            drag.s.data({ hold: false });
                                            var initial =
                                                drag.s.parent().offset().top -
                                                (drag.s.offset().top - f.pageY);
                                            $(document).bind("mousemove", function (e) {
                                                e.preventDefault();
                                                if (drag.s.data("hold") == false) {
                                                    drag.s.css({
                                                        top: Math.min(
                                                            Math.max(
                                                                e.pageY - initial,
                                                                -bounce
                                                            ),
                                                            maxs[0]
                                                        )
                                                    });
                                                    drag.c.css({
                                                        top: Math.max(
                                                            Math.min(
                                                                -drag.tickB *
                                                                    (e.pageY - initial),
                                                                drag.tickB * bounce
                                                            ),
                                                            maxs[1]
                                                        )
                                                    });
                                                }
                                            });
                                        });
                                        $(document).bind("mouseup", function () {
                                            drag.redrawV();
                                        });
                                        drag.id.bind("touchstart", function (f) {
                                            var f =
                                                f.type.indexOf("touch") != "-1"
                                                    ? f.originalEvent.changedTouches[0]
                                                    : f;
                                            var initial = drag.c.position().top;
                                            var initialy = f.pageY;
                                            $(document).bind("touchmove.slickscroll", function (
                                                f
                                            ) {
                                                // cancel scroll action ontouch with single finger
                                                var touches =
                                                    f.type.indexOf("touch") != "-1"
                                                        ? f.originalEvent.changedTouches.length
                                                        : 0;
                                                var f =
                                                    f.type.indexOf("touch") != "-1"
                                                        ? f.originalEvent.changedTouches[0]
                                                        : f;
                                                var moveby = f.pageY - initialy;
                                                drag.s.css({
                                                    top: Math.min(
                                                        Math.max(
                                                            -drag.tickC * (initial + moveby),
                                                            -bounce
                                                        ),
                                                        maxs[0]
                                                    )
                                                });
                                                drag.c.css({
                                                    top: Math.max(
                                                        Math.min(
                                                            initial + moveby,
                                                            drag.tickB * bounce
                                                        ),
                                                        maxs[1]
                                                    )
                                                });
                                                if (touches == 1)
                                                    // cancel scroll action ontouch with single finger
                                                    return false;
                                            });
                                        });
                                        drag.id.bind("touchend", function (f) {
                                            $(document).unbind("touchmove.slickscroll");
                                            drag.redrawV();
                                        });

                                        drag.b.click(function (e) {
                                            if (drag.s.data("click") == false) {
                                                var initial =
                                                    drag.s.parent().offset().top +
                                                    drag.s.height() / 2;
                                                drag.s.animate({ top: e.pageY - initial });
                                                drag.c.animate(
                                                    { top: -drag.tickB * (e.pageY - initial) },
                                                    {
                                                        complete: function () {
                                                            drag.redrawV();
                                                        }
                                                    }
                                                );
                                            }
                                        });
                                        break;
                                }
                                $("a").click(function () {
                                    if ($(this).attr("rel")) {
                                        drag.move(
                                            "#" + $(this).attr("rel"),
                                            $(this).attr("parent")
                                        );
                                    }
                                });

                                $(window).resize(function () {
                                    //DD added event
                                    drag.setdimensions(drag.d);
                                    var resetpos =
                                        drag.d == "horizontal" ? { left: 0 } : { top: 0 };
                                    drag.c.css(resetpos);
                                });

                                // $(window).unload(function () {
                                //     drag.destroy();
                                // });
                            },
                            redrawV: function () {
                                drag.s.data({ hold: true });
                                if (
                                    drag.s.parent().height() <
                                    drag.s.position().top + drag.s.height()
                                ) {
                                    drag.s.animate(
                                        { top: drag.s.parent().height() - drag.s.height() },
                                        250
                                    );
                                    drag.c.animate(
                                        { top: drag.s.parent().height() - drag.c.height() },
                                        250
                                    );
                                } else if (drag.s.position().top < 0) {
                                    drag.s.animate({ top: 0 }, 250);
                                    drag.c.animate({ top: 0 }, 250);
                                }
                            },
                            redrawH: function () {
                                drag.s.data({ hold: true });
                                if (
                                    drag.s.parent().width() <
                                    drag.s.position().left + drag.s.width()
                                ) {
                                    drag.s.animate(
                                        { left: drag.s.parent().width() - drag.s.width() },
                                        250
                                    );
                                    drag.c.animate(
                                        { left: drag.s.parent().width() - drag.c.width() },
                                        250
                                    );
                                } else if (drag.s.position().left < 0) {
                                    drag.s.animate({ left: 0 }, 250);
                                    drag.c.animate({ left: 0 }, 250);
                                }
                            },
                            move: function (where, par) {
                                if (drag.d == "vertical" && drag.t == par) {
                                    if (
                                        drag.tickC * $(where).position().top >
                                        drag.s.parent().height() - drag.s.height()
                                    ) {
                                        drag.s.animate(
                                            { top: drag.s.parent().height() - drag.s.height() },
                                            { duration: 250 }
                                        );
                                        drag.c.animate(
                                            { top: drag.s.parent().height() - drag.c.height() },
                                            { duration: 250 }
                                        );
                                    } else {
                                        drag.s.animate(
                                            { top: drag.tickC * $(where).position().top },
                                            { duration: 250 }
                                        );
                                        drag.c.animate(
                                            { top: -$(where).position().top },
                                            { duration: 250 }
                                        );
                                    }
                                } else if (drag.d == "horizontal" && drag.t == par) {
                                    if (
                                        drag.tickC * $(where).position().left >
                                        drag.s.parent().width() - drag.s.width()
                                    ) {
                                        drag.s.animate(
                                            { left: drag.s.parent().width() - drag.s.width() },
                                            { duration: 250 }
                                        );
                                        drag.c.animate(
                                            { left: drag.s.parent().width() - drag.c.width() },
                                            { duration: 250 }
                                        );
                                    } else {
                                        drag.s.animate(
                                            { left: drag.tickC * $(where).position().left },
                                            { duration: 250 }
                                        );
                                        drag.c.animate(
                                            { left: -$(where).position().left },
                                            { duration: 250 }
                                        );
                                    }
                                }
                            },
                            elements: function (where) {
                                drag.id.css({ overflow: "hidden", position: "relative" });
                                drag.id.wrapInner('<div class="' + drag.t + '-content"></div>');
                                drag.c = $("." + drag.t + "-content");
                                drag.id.append('<div class="' + drag.t + '-bar"></div>');
                                drag.b = $("." + drag.t + "-bar");
                                drag.b.append('<div class="' + drag.t + '-drag"></div>');
                                drag.s = $("." + drag.t + "-drag");
                            },
                            destroy: function () {
                                // What happens in DOM, stays in DOM. Unless...
                                $("*").each(function () {
                                    $(this).remove();
                                });
                            }
                        };
                        drag.create();
                    });
                };

                (function (a) {
                    function d(b) {
                        var c = b || window.event,
                            d = [].slice.call(arguments, 1),
                            e = 0,
                            f = !0,
                            g = 0,
                            h = 0;
                        return (
                            (b = a.event.fix(c)),
                            (b.type = "mousewheel"),
                            c.wheelDelta && (e = c.wheelDelta / 120),
                            c.detail && (e = -c.detail / 3),
                            (h = e),
                            c.axis !== undefined &&
                                c.axis === c.HORIZONTAL_AXIS &&
                                ((h = 0), (g = -1 * e)),
                            c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120),
                            c.wheelDeltaX !== undefined && (g = (-1 * c.wheelDeltaX) / 120),
                            d.unshift(b, e, g, h),
                            (a.event.dispatch || a.event.handle).apply(this, d)
                        );
                    }
                    var b = ["DOMMouseScroll", "mousewheel"];
                    if (a.event.fixHooks)
                        for (var c = b.length; c; )
                            a.event.fixHooks[b[--c]] = a.event.mouseHooks;
                    (a.event.special.mousewheel = {
                        setup: function () {
                            if (this.addEventListener)
                                for (var a = b.length; a; )
                                    this.addEventListener(b[--a], d, !1);
                            else this.onmousewheel = d;
                        },
                        teardown: function () {
                            if (this.removeEventListener)
                                for (var a = b.length; a; )
                                    this.removeEventListener(b[--a], d, !1);
                            else this.onmousewheel = null;
                        }
                    }),
                        a.fn.extend({
                            mousewheel: function (a) {
                                return a
                                    ? this.bind("mousewheel", a)
                                    : this.trigger("mousewheel");
                            },
                            unmousewheel: function (a) {
                                return this.unbind("mousewheel", a);
                            }
                        });
                })(jQuery);
                // ---end
            });
        },
        scrollToIntroPage:function(string){
            let self = this;
            setTimeout(() => {
                var headerHeight = $(".header-wrap").outerHeight();
                if(string == 'js-intro-cm'){
                    $('html, body').stop().animate({
                        scrollTop: $(".intro-slider-wrap").offset().top - headerHeight
                    }, 300);
                }else if(string == 'js-intro-pd'){
                    $('html, body').stop().animate({
                        scrollTop: $("#js-intro-pd").offset().top - headerHeight
                    }, 300);
                }else if(string == 'js-intro-brand'){
                    $('html, body').stop().animate({
                        scrollTop: $("#js-intro-brand").offset().top - headerHeight
                    }, 300);
                }else if(string == 'js-intro-partner'){
                    $('html, body').stop().animate({
                        scrollTop: $("#js-intro-partner").offset().top - headerHeight
                    }, 300);
                }
            }, 200);
        },
        //////////////////////// 檢查各項目 ////////////////////////
        ///
        // 檢查該使用者是否可以瀏覽該頁面
        checkUrl:function(){
            let self = this;
            let url = new URL(location.href);
            var array = url.hash.split("#/");
            // console.log(array)
            if(array[1] != ''){
                if(array[1] == 'index'){
                    // self.init_index();
                    this.$router.replace('/index').catch(err => {});
                }else if(array[1] == 'intro'){
                    // self.init_intro();
                    this.$router.replace('/intro').catch(err => {});
                }else if(array[1] == 'template'){
                    self.showTemplateData = true;
                    this.$router.replace('/index').catch(err => {});
                }else{
                    // self.init_index();
                    this.$router.replace('/index').catch(err => {});
                }
            }else{
                // self.init_index();
                this.$router.replace('/index').catch(err => {});
            }
        },
        //傳入版型資料傳出相對應的class name
        checkTags:function(data){
            let self = this;
            var layout = ['l-straight','l-horizontal','l-multi','l-diagonal','l-norules'];
            var style = ['s-fashion','s-classical','s-gorgeous','s-simple'];
            var type = ['t-casino','t-sports','t-card','t-live','t-lottery','t-mahjong','t-fishing']
            var string = layout[data.pd_layout-1] + ' ' + style[data.pd_style-1] + ' ' + type[data.pd_type-1] + ' ';
            var colors = JSON.parse( data.pd_colors );
            for(var i = 0;i < colors.length;i++){
                string = string + 'c-' + colors[i] + ' ';
            }
            return string;
        },
        //傳入版型色系傳出css code
        checkColors:function(data){
            let self = this;
            var colors = JSON.parse(data);
            var string = '';
            if(colors.length == 1){
                string = 'background:'+(colors[0]=='coffee'?'brown':colors[0]);
            }else if(colors.length == 2){
                string = 'background: linear-gradient(to right,' + (colors[0]=='coffee'?'brown':colors[0]) + ' 0%,' + (colors[1]=='coffee'?'brown':colors[1]) + ' 100%);';
            }else if(colors.length == 3){
                string = 'background: linear-gradient(to right,' + (colors[0]=='coffee'?'brown':colors[0]) + ' 0%,' + (colors[1]=='coffee'?'brown':colors[1]) + ' 50%,'+ (colors[2]=='coffee'?'brown':colors[2]) +' 100%);';
            }
            return string;
        },
        ///
        //////////////////////// 檢查各項目 end /////////////////////

        //////////////////////// 取值專區 ////////////////////////
        ///
        //取得版型資料
        getProjects:function(){
            let self = this;
            axios.get('../projects')
                .then(function (response) {
                    self.projects = response.data;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //單獨取得BBIN資料
        getBBINLogo:function(){
            let self = this;
            axios.get('../bbinlogo')
                .then(function (response) {
                    self.bbinlogo = response.data;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        //取得合作夥伴資料
        getLogos:function(){
            let self = this;
            axios.get('../logos')
                .then(function (response) {
                    self.logolist = response.data;
                })
                .catch(function (response) {
                    self.notification('系統出錯','failure');
                });
        },
        ///
        //////////////////////// 取值專區 end ///////////////////////

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
        //////////////////////// 推播框設定 end ////////////////////
    },
    watch: {
	}
}
</script>