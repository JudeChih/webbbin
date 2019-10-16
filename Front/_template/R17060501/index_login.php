<!DOCTYPE html>
<html class="first is-login zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
    <script src="../js/TweenMax.min.js"></script>
    <script src="../js/tween.slideshow.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- HEADER -->
        <div id="page-header">
            <div class="header-main clearfix">
                <div class="header-top clearfix">
                    <div class="header-logo"><a href="index.php"><img src="image/logo.png"></a></div>

                    <!-- MENU -->
                    <a href="#" class="mainnav-btn-nav"></a>
                    <div class="mainnav-wrap clearfix">
                        <ul class="mainnav removeTextNodes">
                            <li id="LS-first" class="current">
                                <a href="index.php">首页</a>
                            </li>
                            <li id="LS-ball">
                                <a href="#0" class="subClick">体育赛事</a>
                                <ul id="nav-ball" class="subList">
                                    <li v-for="todo in todos"><a :href="todo.link">{{ todo.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-live">
                                <a href="live.php">视讯直播</a>
                            </li>
                            <li id="LS-game">
                                <a href="#0" class="subClick">电子游艺</a>
                                <ul id="nav-game" class="subList">
                                    <li v-for="todo in todos"><a :href="todo.link">{{ todo.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-ltlottery">
                                <a href="lottery.php">彩票游戏</a>
                            </li>
                            <li id="LS-memberexclusiveii">
                                <a href="promotions.php">优惠活动</a>
                            </li>
                        </ul>
                    </div>

                    <!-- LANG -->
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

                    <!-- MEMBER_ICON -->
                    <a href="#" class="mainnav-btn-member"></a>
                </div>

                <!-- LOGON -->
                <div class="meminfo-wrap">
                    <div class="meminfo-main removeTextNodes">
                        <div class="login-title"><h2>会员登入</h2></div>
                        <div class="meminfo-btn-mem">
                            <a href="#0">会员中心</a>
                        </div>
                        <span class="logon-line"></span>
                        <div class="mem-info">
                            <div class="ele-accinfo ele-acc-name">
                                <span>帐号：</span><strong>{{ memAccount }}</strong>
                            </div>
                            <div class="ele-acc-unit">
                                <span>余额：</span><strong>{{ memTotal }}</strong>
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
                        <span class="logon-line"></span>
                        <div class="SU-Menual">
                            <ul class="login-Menual removeTextNodes">
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
                    <a href="#" class="login-close"></a>
                </div>
            </div>

            <!-- SLIDER -->
            <div class="first-slider clearfix">
                <div id="js-ele-slideshow1" class="ele-slideshow-wrap" onselectstart="return false;">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li data-autoplaytime="5000"><a href="##1"><div class="ele-slideshow-full-img" style="background-image: url(image/not-use/first_slider01.jpg);"></div></a></li>
                            <li data-autoplaytime="5000"><a href="##1"><div class="ele-slideshow-full-img" style="background-image: url(image/not-use/first_slider01.jpg);"></div></a></li>
                            <li data-autoplaytime="5000"><a href="##1"><div class="ele-slideshow-full-img" style="background-image: url(image/not-use/first_slider01.jpg);"></div></a></li>
                            <li data-autoplaytime="5000"><a href="##1"><div class="ele-slideshow-full-img" style="background-image: url(image/not-use/first_slider01.jpg);"></div></a></li>
                        </ul>
                        <div class="js-ele-slideshow-text-wrap ele-slideshow-text-wrap">
                            <img src="image/not-use/first_slider01t.png" class="ele-slideshow-text ele-text-position0" data-index="ele-slideshow-text0">
                            <img src="image/not-use/first_slider01t.png" class="ele-slideshow-text ele-text-position1" data-index="ele-slideshow-text1">
                            <img src="image/not-use/first_slider01t.png" class="ele-slideshow-text ele-text-position2" data-index="ele-slideshow-text2">
                            <img src="image/not-use/first_slider01t.png" class="ele-slideshow-text ele-text-position3" data-index="ele-slideshow-text3">
                        </div>
                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CONTAINER -->
        <div id="page-container">
            <div id="page-body" class="clearfix">
                <!-- NEWS-->
                <div class="first-news-wrap">
                    <div class="first-news-title"></div>
                    <marquee scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" class="marquee">
                        <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                    </marquee>
                    <marquee direction="up" scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" class="marquee_vertical">
                        <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                    </marquee>
                </div>

                <!-- JP -->
                <a class="first-jp-img" href="#">
                    <div class="first-jp-text"></div>
                    <div class="first-jp-button"></div>
                </a>

                <!-- GAME_LIST -->
                <div class="first-game-wrap">
                    <div class="first-game-main">
                        <ul class="removeTextNodes">
                            <li class="first-game first-game01">
                                <a href="live.php">
                                    <img src="image/game01.png" class="img-orign">
                                    <img src="image/game01_over.png" class="img-hover">
                                </a>
                            </li>
                            <li class="first-game first-game02">
                                <a href="casino_login.php">
                                    <img src="image/game02.png" class="img-orign">
                                    <img src="image/game02_over.png" class="img-hover">
                                </a>
                            </li>
                            <li class="ffirst-game first-game03">
                                <a href="lottery.php">
                                    <img src="image/game03.png" class="img-orign">
                                    <img src="image/game03_over.png" class="img-hover">
                                </a>
                            </li>
                            <li class="first-game first-game04">
                                <a href="sports.php">
                                    <img src="image/game04.png" class="img-orign">
                                    <img src="image/game04_over.png" class="img-hover">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- MOBILE -->
                <a class="first-mobile-wrap" href="#">
                    <div class="first-mobile-text"></div>
                    <div class="first-mobile-link"></div>
                </a>

                <a class="first-join-wrap" href="#"></a>
                <a class="first-download-wrap" href="#"></a>

                <a class="first-promotion-wrap" href="promotions.php">
                    <div class="first-promotion-title"></div>
                    <div class="first-promotion-link"></div>
                </a>
                <a class="first-service-wrap" href="#">
                    <div class="first-service-title"></div>
                    <div class="first-service-link"></div>
                </a>
            </div>
        </div>

        <!-- FOOTER -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-pay">
                        <div class="footer-pay-title">多项付款方式可供选择让您更便利</div>
                        <ul>
                            <li><img src="image/footer_img01.png"></li>
                            <li><img src="image/footer_img02.png"></li>
                            <li><img src="image/footer_img03.png"></li>
                            <li><img src="image/footer_img04.png"></li>
                        </ul>
                    </div>
                    <div class="footer-about">
                        <p>关于 BBIN</p>
                        <p>BBIN营运的产品：</p>
                        <p>视讯直播、体育投注、彩票、电子游艺，均由官方博彩委员会颁发执照及进行监管。如临场般刺激愉快的感官享受。</p>
                    </div>
                </div>
                <div class="footer-bottom clearfix">
                    <div class="footer-bottom-wrap">
                        <div class="footer-copyright">
                            <ul class="footer-link clearfix">  
                                <li v-for="footerLink in footerLinks"><a :href="footerLink.link">{{footerLink.name}}</a></li>
                            </ul>
                            <p>Copyright &copy; BBIN Reserved</p>
                            <p class="footer-info"></p>
                        </div>
                        <div class="footer-logo">
                            <a id="bblogo" href="#0">
                                <img src="image/not-use/white.png" width="93">
                            </a>
                            <a id="browser-logo" href="#0">
                                <img src="image/ublogo.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    

    <?php include '../template/base.php'; ?>
    <script src="js/vue-app.js"></script>
    <script src="js/ele-popup.js"></script>
    <script src="js/ele-dropmenu.js"></script>
    <script src="js/ele-common.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/tween.slideshow.js"></script>
    <script src="js/main.js"></script>
    <script src="js/index.js"></script>

</body>
<html>