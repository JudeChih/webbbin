<!DOCTYPE html>
<html class="first is-login zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- page-header -->
        <div id="page-header">
            <div class="header-main">
                <div class="header-top clearfix">
                    <!-- logo -->
                    <div class="logo">
                        <a href="index.php"></a>
                    </div>
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <div class="mainnav">
                            <div class="mainnav-title">MENU</div>
                            <ul class="clearfix">
                                <li id="LS-first" class="current"><a href="index.php"><span>首页</span></a></li>
                                <li id="LS-ball" class="LS-ball drop-down">
                                    <a href="#" class="drop-menu"><span>体育赛事</span></a>
                                    <div id="nav-ball" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-live" class="LS-live drop-down">
                                    <a href="#" class="drop-menu"><span>视讯直播</span></a>
                                    <div id="nav-live" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-game" class="LS-game drop-down">
                                    <a href="#" class="drop-menu"><span>电子游艺</span></a>
                                    <div id="nav-game" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                                <li id="LS-memberexclusiveii"><a href="promotions.php"><span>优惠活动</span></a></li>
                            </ul>
                            <div id="ele-lang-wrap" class="ele-lang-wrap">
                                <a id="js-ele-lang" class="btn-icon" href="#lang">
                                    <i class="icon icon-lang icon-cn"></i>
                                </a>
                            </div>
                        </div>
                        <span class="nav-close close-btn"></span>
                    </div>
                    <!-- 導覽列 mainnav RWD 型態的觸發按鈕 -->
                    <div class="mainnav-btn clearfix">
                        <a href="#0" class="btn-member"></a>
                        <a href="#0" class="btn-nav"></a>
                    </div>
                    <!-- 語系 lang -->
                    <div id="ele-popup-group" class="ele-popup-group">
                        <div class="popup-group-inner">
                            <div class="popup-lang-title">
                                <img src="image/lang/zh-cn/lang_title.png">
                                <p>简体中文</p>
                            </div>
                            <div class="popup-lang-wrap">
                                <a href="#" title="繁體中文"><i class="icon-lang icon-tw"></i><span>繁體中文</span></a>
                                <a href="#" title="简体中文" class="popup-lang-current"><i class="icon-lang icon-cn"></i><span>简体中文</span></a>
                                <a href="#" title="Vietnam"><i class="icon-lang icon-vi"></i><span>Vietnam</span></a>
                                <a href="#" title="Uighur"><i class="icon-lang icon-ug"></i><span>Uighur</span></a>
                                <a href="#" title="คนไทย"><i class="icon-lang icon-th"></i><span><คนไทย</span></a>
                                <a href="#" title="한국어"><i class="icon-lang icon-ko"></i><span>한국어</span></a>
                                <a href="#" title="日本語"><i class="icon-lang icon-ja"></i><span>日本語</span></a>
                                <a href="#" title="Indonesia"><i class="icon-lang icon-id"></i><span>Indonesia</span></a>
                                <a href="#" title="Español"><i class="icon-lang icon-es"></i><span>Español</span></a>
                                <a href="#" title="English"><i class="icon-lang icon-en"></i><span>English</span></a>
                            </div>
                        </div>
                    </div>
                    <!-- 輪播圖 slideshow -->
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <div class="img" style="background-image: url('image/slider01.png');"></div>
                                    </a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <div class="img" style="background-image: url('image/slider02.png');"></div>
                                    </a>
                                </li>
                            </ul>
                            <div class="js-ele-slideshow-text-wrap ele-slideshow-text-wrap">
                                <img src="image/slider01t.png" class="ele-slideshow-text ele-text-position0" data-index="ele-slideshow-text0">
                                <img src="image/slider02t.png" class="ele-slideshow-text ele-text-position1" data-index="ele-slideshow-text1">
                            </div>
                        </div>
                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                    </div>
                </div>
                
                <div class="header-wrap">
                    <!-- 登入後 meminfo -->
                    <div class="meminfo-wrap">
                        <div class="meminfo-main clearfix">
                            <div class="meminfo-title">MEMBER</div>
                            <div class="meminfo-btn-mem">
                                <a href="#0">会员中心</a>
                            </div>
                            <div class="meminfo-group">
                                <div class="mem-info">
                                    <div class="ele-accinfo ele-acc-name">
                                        <span>帐号：</span><strong>{{ memAccount }}</strong>
                                    </div>
                                    <div class="ele-acc-unit">
                                        <span>BBIN余额：</span><strong>{{ memTotal }}</strong>
                                        <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                            <div class="ele-accinfo ele-other-balance">
                                                <i class="fa fa-plus-square"></i>
                                            </div>
                                        </div>
                                        <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
                                            <ul class="ele-obalance-item">
                                                <li v-for="membalance in membalances">
                                                    <span>{{membalance.name}}：</span>
                                                    <strong>{{membalance.balance}}</strong>
                                                </li>
                                            </ul>
                                            <div class="ele-balance-tool">
                                                <a href="#0">餘額轉換</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="SU-Menual">
                                    <ul class="login-Menual clearfix">
                                        <li class="first"><a href="#0">会员中心</a></li>
                                        <li><a href="#0">线上存款</a></li>
                                        <li><a href="#0">线上取款</a></li>
                                        <li><a href="#0">额度转换</a></li>
                                        <li><a href="#0">未读讯息(<b>1</b>)</a></li>
                                        <li class="last"><a href="index.php">登出</a></li>
                                    </ul>
                                </div>
                                <div class="meminfo-tool clearfix">
                                    <div class="meminfo-btn-switch">
                                        <a href="#0">额度转换</a>
                                    </div>
                                    <div class="meminfo-btn-logout">
                                        <a href="index.php">登  出</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="meminfo-close close-btn"></span>
                    </div>
                    <!-- 遮罩 overlay -->
                    <div class="overlay-bg"></div>
                    <!-- 最新消息 news -->
                    <div class="first-news-wrap">
                        <div class="first-news-main">
                            <h2>最新消息</h2>
                            <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="3" scrolldelay="100" direction="up" onmouseover="this.stop();" onmouseout="this.start();">
                                <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <!-- 四大產品 first-game -->
                <div class="ele-firstgame-wrap" onselectstart="return false">
                    <div class="clearfix ele-firstgame" id="js-firstgame-slider">
                        <a href="sports_login.php" class="ele-firstgame-1 js-ele-firstgame-fade">
                            <span></span>
                        </a>
                                <a href="live.php" class="ele-firstgame-2 js-ele-firstgame-fade">
                            <span></span>
                        </a>
                                <a href="casino_login.php" class="ele-firstgame-3 js-ele-firstgame-fade">
                            <span></span>
                        </a>
                                <a href="lottery.php" class="ele-firstgame-4 js-ele-firstgame-fade">
                            <span></span>
                        </a>
                    </div>
                </div>
                <div class="first-intro-wrap clearfix">
                    <!-- 快速服務 -->
                    <div class="first-service-wrap">
                        <div class="first-service-main">
                            <div class="first-service-title"><span>快速的服务效率</span></div>
                            <div class="first-service-group">
                                <ul>
                                    <li class="first-service-list01">
                                        <h3>25<span>秒</span></h3>
                                        <div class="first-service-content">
                                            <p>
                                                存款火速到帐
                                                <span class="en">DEPOSIT SPEED</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="first-service-list02">
                                        <h3>28<span>家</span></h3>
                                        <div class="first-service-content">
                                            <p>
                                                便捷银行服务
                                                <span class="en">BANK SERVICE</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li class="first-service-list03">
                                        <h3>24HR</h3>
                                        <div class="first-service-content">
                                            <p>
                                                线上客服
                                                <span class="en">ONLINE SERVICE</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="first-service-slogan">SERVICE 	SPEED</div>
                        </div>
                    </div>
                    <!-- 產品優勢 -->
                    <div class="first-products-wrap">
                        <div class="first-products-main">
                            <div class="first-products-title">产品平台优势</div>
                            <ul class="first-products-group">
                                <li class="first-products-list01">
                                    <h4>体育赛事</h4>
                                    <span>
                                    体育投注系统支援手机投注版面简洁易操作，世界杯、欧洲杯、英超西甲J联赛皆可投注，精彩瞬间从不错过。
                                    </span>
                                </li>
                                <li class="first-products-list02">
                                    <h4>视讯直播</h4>
                                    <span>
                                    真人娱乐玩法众多，如百家乐、骰宝、龙虎，您可以畅游真人娱乐的精彩世界。
                                    </span>
                                </li>
                                <li class="first-products-list03">
                                    <h4>电子游艺</h4>
                                    <span>
                                    多种的游戏玩法包括扑克、老虎机等在线娱乐场游戏，此外您更有机会赢得累积超级奖金。
                                    </span>
                                </li>
                                <li class="first-products-list04">
                                    <h4>彩票游戏</h4>
                                    <span>
                                    拥有全球最好的彩票系统，全面覆盖PC/苹果/安卓/ WAP等所有网路移动终端，深受广大用户玩家欢迎。
                                    </span>
                                </li>
                            </ul>
                            <div class="first-products-slogan"><img src="image/products_slogan.png"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-link">
                        <h3>相关连结</h3>
                        <ul>
                            <li><a href="about.php">关于我们</a></li>
                            <li><a href="#0">联络我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <h3>联络方式</h3>
                        <ul>
                            <li class="footer-contact-phone">
                            客服专线: <span>+86-123-4567</span>
                            </li>
                            <li class="footer-contact-email">
                            客服信箱: <span>bbincasino@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <a id="bblogo" href="#0">
                        <img src="image/not-use/white.png" width="95">
                    </a>
                    <a id="browser-logo" href="#0">
                        <img src="image/not-use/ublogo/ublogo_k.png" width="239">
                    </a>
                </div>
                <div class="footer-info">test test test test test </div>
                <div class="footer-copyright">COPYRIGHT © BBIN RESERVED</div>
                
            </div>
        </div>
        <!-- TOP 按鈕 -->
        <span class="btn-top"><i class="fa fa-angle-up"></i></span>
    </div>

    <script src="../template/js/vue.js"></script>
    <script src="../template/js/vue-app.js"></script>
    <script src="../template/js/ele-popup.js"></script>
    <script src="../template/js/ele-dropmenu.js"></script>
    <script src="../template/js/ele-common.js"></script>
    <!-- <script src="../template/js/ele-obalance.js"></script> -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script src="js/main.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',    // 動畫效果 fade=漸變, overlay=疊加, slideh=區塊左右, slidev=區塊上下
            isNav        : 0,         // 是否需要 dots 是=1, 否=0
            isNumber     : 0,         // 是否需要 數值 是=1, 否=0
            navPosition  : 'center',  // 繼承上一問題__dots 位置
            isArrow      : 1,         // 是否需要 箭頭 是=1, 否=0
            isRunLine    : 1,          // 是否需要 runline 是=1, 否=0
            isAutoPlay   : 1,
            navPosition: 'center',
            isText: true,
            textX: 14,
            textY: 'auto',
        });
    </script>
</body>
</html>






