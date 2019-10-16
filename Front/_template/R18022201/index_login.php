<!DOCTYPE html>
<html class="first is-login zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="../template/js/jquery.js"></script>
    <script src="../template/js/jquery.easing.1.3.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- 光點背景 -->
        <div class="page-bg"></div>
        <!-- page-header -->
        <div id="page-header">
            <!-- Nav -->
            <div class="mainnav-wrap">
                <div class="mainnav">
                    <ul class="clearfix">
                        <li id="LS-first" class="LS-first">
                            <a href="index.php" class="current">首页</a>
                        </li>
                        <li id="LS-ball" class="LS-ball">
                            <a href="#0" class="subClick">体育赛事</a>
                            <ul class="subList">
                                <li v-for="ball in balls"><a :href="ball.link">{{ ball.name }}</a></li>
                            </ul>
                        </li>
                        <li id="LS-live" class="LS-live">
                            <a href="#0" class="subClick">视讯直播</a>
                            <ul class="subList">
                                <li v-for="lives in lives"><a :href="lives.link">{{ lives.name }}</a></li>
                            </ul>
                        </li>
                        <li id="LS-game" class="LS-game">
                            <a href="#0" class="subClick">电子游艺</a>
                            <ul class="subList">
                                <li v-for="game in games"><a :href="game.link">{{ game.name }}</a></li>
                            </ul>
                        </li>
                        <li id="LS-lottery" class="LS-lottery">
                            <a href="lottery.php">彩票游戏</a>
                        </li>
                        <li id="LS-memberexclusiveii" class="LS-memberexclusiveii">
                            <a href="promotions.php">优惠活动</a>
                        </li>
                        <li id="LS-mobile" class="LS-service">
                            <a href="#0">手机下注</a>
                        </li>
                        <li id="LS-service" class="LS-service">
                            <a href="#0">在线客服</a>
                        </li>
                    </ul>
                </div>
                <!-- lang -->
                <div id="ele-lang-wrap" class="ele-lang-wrap">
                    <a id="js-ele-lang" class="btn-icon" href="#lang">
                        <i class="icon icon-lang icon-cn"></i>
                    </a>
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
                                <a href="#" title="คนไทย"><i class="icon-lang icon-th"></i><span>คนไทย</span></a>
                                <a href="#" title="한국어"><i class="icon-lang icon-ko"></i><span>한국어</span></a>
                                <a href="#" title="日本語"><i class="icon-lang icon-ja"></i><span>日本語</span></a>
                                <a href="#" title="Indonesia"><i class="icon-lang icon-id"></i><span>Indonesia</span></a>
                                <a href="#" title="Español"><i class="icon-lang icon-es"></i><span>Español</span></a>
                                <a href="#" title="English"><i class="icon-lang icon-en"></i><span>English</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- RWD member button -->
                <a href="#0" class="btn-member"></a>
                <!-- RWD close button -->
                <span class="mainnav-close close-btn"></span>
            </div>
            <div class="header-main">
                <!-- logo -->
                <div class="logo">
                    <a href="index.php"></a>
                </div>
                <!-- Nav RWD型態的觸發按鈕 -->
                <div class="btn-nav"></div>
                <!-- meminfo -->
                <div id="meminfo-wrap" class="meminfo-wrap">
                    <div class="mem-info clearfix">
                        <div class="ele-accinfo ele-acc-name">
                            <span>帳號：</span>
                            <strong>{{ memAccount }}</strong>
                        </div>
                        <div class="ele-acc-unit">
                            <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                                <span>BBIN餘額：</span>
                                <strong>{{ memTotal }}</strong>
                            </div>
                            <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                <div class="ele-accinfo ele-other-balance">
                                    <i class="fa fa-plus-square"></i>
                                </div>
                            </div>
                            <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap ele-item-style-cover">
                                <div class="ele-obalance-item">
                                    <div class="ele-obalance" v-for="membalance in membalances">
                                        <span>{{ membalance.name }}</span>
                                        <strong>{{ membalance.balance }}</strong>
                                    </div>
                                </div>
                                <div class="ele-balance-tool">
                                    <a href="#">额度转换</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="SU-Menual">
                        <ul class="login-Menual clearfix">
                            <li><a href="#">会员中心</a></li>
                            <li><a href="#">线上存款</a></li>
                            <li><a href="#">线上取款</a></li>
                            <li><a href="#">额度转换</a></li>
                            <li><a href="#">未读讯息<span>(1)</span></a></li>
                            <li><a href="index.php">登出</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 行動裝置會員彈跳視窗 -->
                <div id="ele-popup-account-fixed" class="ele-popup-account-fixed">
                    <div class="meminfo-title"></div>
                    <div class="ele-popup-account-wrap">
                        <div id="js-popup-account-close" class="ele-popup-account-close"></div>
                        <div class="ele-popup-account-title"></div>
                        <a class="ele-popup-btn ele-popup-btn-member" href="#0">會員中心</a>
                        <div class="ele-popup-mem-info">
                            <div class="ele-popup-accinfo ele-popup-acc-name"><span>帳號：</span><strong>artweb</strong></div>
                            <div class="ele-popup-acc-unit">
                                <div id="_bbsportBalance" class="ele-popup-accinfo ele-popup-first-balance">
                                    <span>BBIN 餘額：</span>
                                    <strong>{{ memTotal }}</strong>
                                </div>
                                <div id="js-popup-obalance-wrap" class="ele-popup-obalance-wrap">
                                    <div class="ele-popup-accinfo ele-popup-other-balance">
                                        <i class="fa fa-plus-square"></i>
                                    </div>
                                </div>
                            </div>
                            <div id="js-ele-popup-obalance-inner" class="ele-popup-obalance-inner ele-popup-item-cover">
                                <div class="ele-popup-obalance-item">
                                    <div class="ele-popup-obalance" v-for="membalance in membalances">
                                        <span>{{ membalance.name }}</span>
                                        <strong>{{ membalance.balance }}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ele-popup-btn-wrap clearfix">
                        <a class="ele-popup-btn ele-popup-btn-switch" href="#0">額度轉換</a>
                        <a class="ele-popup-btn ele-popup-btn-logout" href="index.php">登出</a>
                    </div>
                </div>
                <!-- page-title -->
                <div class="page-title">
                    <img src="image/bg_01_m.png" class="tablet">
                    <img src="image/bg_01_s.png" class="mobile">
                </div>
                <!-- 輪播圖 slideshow -->
                <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider01.png');"></div>
                                </a>
                            </li>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider02.png');"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                </div>
                <!-- 遮罩 overlay -->
                <div class="overlay-bg"></div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <!-- first-game -->
                <div class="first-game-wrap">
                    <div class="first-game-main">
                        <ul class="clearfix">
                            <li class="first-game first-game01">
                                <a href="#0"><img src="image/lang/zh-cn/game01_over.png"></a>
                            </li>
                            <li class="first-game first-game02">
                                <a href="#0"><img src="image/lang/zh-cn/game02_over.png"></a>
                            </li>
                            <li class="first-game first-game03">
                                <a href="#0"><img src="image/lang/zh-cn/game03_over.png"></a>
                            </li>
                            <li class="first-game first-game04">
                                <a href="#0"><img src="image/lang/zh-cn/game04_over.png"></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- news -->
                <div class="news-wrap">
                    <div class="news-main">
                        <h2 class="news-title"></h2>
                        <div class="news-item">
                            <marquee scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">
                                <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                            </marquee>
                        </div>
                    </div>
                </div>
                <!-- 手機下注 -->
                <div class="first-mobile-wrap">
                    <div class="first-mobile-main">
                        <div class="first-mobile-aritcle">
                            <div class="first-mobile-title">
                                <img src="image/lang/zh-cn/first_mobile_title.png">
                            </div>
                            <div class="first-mobile-content">
                                <p>玩家们可以透过行动装置下载手机APP，经由APP可享受刺激的体验、细腻的版型和极致的操作，全新手机APP让您享受精彩娱乐不分界线。</p>
                                <p>多元化移动平台，精彩随时随地，一切尽在掌中！美女荷官相伴，刺激不打烊。即时下注，让您走到哪玩到哪！</p>
                            </div>
                            <div class="first-mobile-icon"></div>
                        </div>
                        <div class="first-mobile-bottom"></div>
                        <div class="first-mobile-bg">
                            <img src="image/first_mobile_img.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main clearfix">
                <div class="footer-txt clearfix">
                    <div class="article-menu">
                        <a href="about.php">关于我们</a>
                        <a href="#0">联络我们</a>
                        <a href="#0">合作伙伴</a>
                        <a href="#0">存款帮助</a>
                        <a href="#0">取款帮助</a>
                        <a href="#0">常见问题</a>
                        <a href="#0">责任博彩</a>
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
                <div class="copyright">copyright © BBIN reserved</div>
                <div class="footer-info"></div>
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',    // 動畫效果 fade=漸變, overlay=疊加, slideh=區塊左右, slidev=區塊上下
            isNav        : 1,         // 是否需要 dots 是=1, 否=0
            isNumber     : 0,         // 是否需要 數值 是=1, 否=0
            navPosition  : 'center',  // 繼承上一問題__dots 位置
            isArrow      : 0,         // 是否需要 箭頭 是=1, 否=0
            isRunLine    : 1,          // 是否需要 runline 是=1, 否=0
            isAutoPlay   : 1
        });
    </script>
</body>
</html>
