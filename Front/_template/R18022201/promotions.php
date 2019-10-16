<!DOCTYPE html>
<html class="madvertis memberexclusiveii zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="../template/js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- page-header -->
        <div id="page-header">
            <!-- Nav -->
            <div class="mainnav-wrap">
                <div class="mainnav">
                    <ul class="clearfix">
                        <li id="LS-first" class="LS-first">
                            <a href="index.php">首页</a>
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
                            <a href="promotions.php" class="current">优惠活动</a>
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
                <!-- login -->
                <div class="login-wrap">
                    <div class="login-title"></div>
                    <div class="login-main clearfix">
                        <form id="LoginForm" class="clearfix">
                            <p class="login-unit login-unit-user">
                                <label name="username" for="username" class="login-placeholder">帐号</label>
                                <input name="username" type="text" id="rmNum" class="login-input">
                            </p>
                            <p class="login-unit login-unit-pwd">
                                <label name="passwd" for="passwd" class="login-placeholder">密码</label>
                                <input name="passwd" type="password" id="passwd" class="login-input">
                            </p>
                            <p class="login-unit login-unit-chk">
                                <label name="rmNum" for="rmNum" class="login-placeholder">验证码</label>
                                <input name="rmNum" type="text" id="username" class="login-input">
                            </p>
                        </form>
                        <a href="index_login.php" class="login-submit">登入</a>
                        <p class="login-link">
                            <a href="#0" class="login-forgetpw">忘记密码</a>
                            <span> / </span>
                            <a href="#0" class="login-join">加入会员</a>
                        </p>
                    </div>
                    <span class="login-close close-btn"></span>
                </div>
                <!-- 遮罩 overlay -->
                <div class="overlay-bg"></div>
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
            <!-- page-title -->
            <div class="page-title">
                <img src="image/lang/zh-cn/bg_05_m.png" class="tablet">
                <img src="image/lang/zh-cn/bg_05_s.png" class="mobile">
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-main">
                    <div id="memberexclusiveii-wrap">
                        <div class="memberexclusiveii-content">
                            <ul class="clearfix">
                                <li id="memExclusive_1" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions01">
                                        <img src="image/not-use/event01.png" class="origin">
                                        <img src="image/not-use/event01_over.png" class="hover">
                                        <h2>享有红利次次存，次次送，绝不峰顶，免费彩金888元</h2>
                                    </a>
                                </li>
                                <li id="memExclusive_2" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions02">
                                        <img src="image/not-use/event02.png" class="origin">
                                        <img src="image/not-use/event02_over.png" class="hover">
                                        <h2>首次储值可享50%回馈金，存越多赚越多！</h2>
                                    </a>
                                </li>
                                <li id="memExclusive_3" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions03">
                                        <img src="image/not-use/event03.png" class="origin">
                                        <img src="image/not-use/event03_over.png" class="hover">
                                        <h2>全新VIP會員奢華開啟，人人都能成為VIP！親情打造，為每一位尊貴的您！</h2>
                                    </a>
                                </li>
                                <li id="memExclusive_4" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions04">
                                        <img src="image/not-use/event04.png" class="origin">
                                        <img src="image/not-use/event04_over.png" class="hover">
                                        <h2>老虎机与桌上游戏累积大奖等着您来赢取！</h2>
                                    </a>
                                </li>
                                <li id="memExclusive_5" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions05">
                                        <img src="image/not-use/event05.png" class="origin">
                                        <img src="image/not-use/event05_over.png" class="hover">
                                        <h2>财神来啦！不管输赢，天天玩现金返水回馈1.2%</h2>
                                    </a>
                                </li>
                                <li id="memExclusive_6" class="memExclusive">
                                    <a href="#0" class="promotionsImg promotions06">
                                        <img src="image/not-use/event06.png" class="origin">
                                        <img src="image/not-use/event06_over.png" class="hover">
                                        <h2>这个周末最疯狂！返水强势升级。 0.4%现金返水，无需投注即可提款</h2>
                                    </a>
                                </li>
                            </ul>
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
</body>
</html>
