<!DOCTYPE html>
<html class="madvertis memberexclusiveii zh-cn">
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
                                <li id="LS-first" class=""><a href="index.php"><span>首页</span></a></li>
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
                                <li id="LS-memberexclusiveii" class="current"><a href="promotions.php"><span>优惠活动</span></a></li>
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
                </div>
                
                <div class="header-wrap">
                    <div class="page-title">
                        <img src="image/title_memberexclusiveii.png">
                    </div>
                    <img src="image/title_memberexclusiveii_img.png" alt="" class="page-title-img">
                    <!-- 登入前 login -->
                    <div class="login-wrap">
                        <div class="login-main clearfix">
                            <div class="login-title">LOGIN</div>
                            <div class="login-input">
                                <div class="login-unit login-unit-user">
                                    <input name="username" type="text" placeholder="帐号">
                                </div>
                                <div class="login-unit login-unit-pwd">
                                    <input name="passwd" type="text" placeholder="密码">
                                </div>
                                <div class="login-unit login-unit-chk">
                                    <input name="rmNum" type="text" placeholder="验证码">
                                </div>
                            </div>
                            <div class="login-btn-group">
                                <a href="index_login.php" class="login-submit">登入</a>
                                <p class="login-link">
                                    <a href="#0">忘记密码</a>
                                    <span> / </span>
                                    <a href="#0">加入会员</a>
                                </p>
                            </div>
                        </div>
                        <span class="login-close close-btn"></span>
                    </div>
                    <!-- 遮罩 overlay -->
                    <div class="overlay-bg"></div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-main">
                    <div id="memberexclusiveii-wrap">
                        <div id="ele-mem-exclusive-dialog-area" class="memberexclusiveii-content">
                            <ul class="clearfix">
                                <li id="memExclusive_1" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions01">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img01.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img01_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>享有红利次次存，次次送，绝不峰顶，免费彩金888元</h2>
                                        </div>
                                    </a>
                                </li>
                                <li id="memExclusive_2" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions02">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img02.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img02_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>首次储值可享50%回馈金，存越多赚越多！</h2>
                                        </div>
                                    </a>
                                </li><li id="memExclusive_3" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions03">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img03.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img03_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>全新VIP會員奢華開啟，人人都能成為VIP！親情打造，為每一位尊貴的您！</h2>
                                        </div>
                                    </a>
                                </li><li id="memExclusive_4" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions04">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img04.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img04_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>老虎机与桌上游戏累积大奖等着您来赢取！</h2>
                                        </div>
                                    </a>
                                </li><li id="memExclusive_5" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions05">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img05.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img05_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>财神来啦！不管输赢，天天玩现金返水回馈1.2%</h2>
                                        </div>
                                    </a>
                                </li><li id="memExclusive_6" class="memExclusive eventcontent-dialog">
                                    <a href="#0" class="promotionsImg promotions06">
                                        <div class="ele-mem-dialog-wrap">
                                            <img src="image/pro_img06.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-default">
                                            <img src="image/pro_img06_over.jpg" class="js-exclusive-dialog-img js-exclusive-dialog-hover">
                                        </div>
                                        <div class="ele-mem-dialog-title">
                                            <h2>这个周末最疯狂！返水强势升级。 0.4%现金返水，无需投注即可提款</h2>
                                        </div>
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
    <script src="js/main.js"></script>
</body>
</html>
