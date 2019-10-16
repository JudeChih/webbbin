<!DOCTYPE html>
<html class="first is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody02" class="clearfix">
        <div id="page-header">
            <div id="header02">
                <a href="index.php" class="logo"></a>
                <div id="header_top">
                    <!--loginBox-->
                    <div id="loginBox">
                        <!--語系切換-->
                        <div class="lang-wrap">
                            <a href="#" class="cn flag03"></a>
                            <a href="#" class="tw flag02"></a>
                            <a href="#" class="en flag01"></a>
                        </div>
                        <!--loginONNAV-->
                        <div class="loginONNAV">
                            <ul>
                                <li><a href="#">会员中心</a></li>
                                <li>｜</li>
                                <li><a href="#">线上存款</a></li>
                                <li>｜</li>
                                <li><a href="#">线上取款</a></li>
                                <li>｜</li>
                                <li><a href="#">额度转换</a></li>
                                <li>｜</li>
                                <li><a href="#">未读讯息(1)</a></li>
                                <li>｜</li>
                                <li><a href="index.php">登出</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--end of loginONNAV-->
                    <div class="mainnav">
                        <ul>
                            <li><a href="index.php" class="current">首页</a></li>
                            <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                             <li id="LS-live"><a href="live.php"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                            <li id="LS-game"><a href="#">电子游艺</a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li><a href="lottery.php">彩票游戏</a></li>
                            <li><a href="#" id="textGlitter">优惠活动</a></li>
                            <li><a href="#">手机下注</a></li>
                            <li><a href="#" class="service">在线客服</a></li>
                        </ul>
                    </div>
                </div>
                <!--end header_top-->
                <!--logoutBox-->
                <div class="logoutBox">
                    <div class="logoutTitle"><img src="image/lang/zh-cn/c_logout_title.png" width="368" height="30" /></div>
                    <div class="meminfo-wrap">
                        <div class="mem-info">
                            <div class="ele-accinfo ele-acc-name"><span>帐号：</span><strong>{{memAccount}}</strong></div>
                            <div class="ele-acc-unit">
                                <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                                    <span>余额：</span>
                                    <strong>{{memTotal}}</strong>
                                </div>
                                <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                    <div class="ele-accinfo ele-other-balance">
                                        <i class="fa fa-plus-square"></i>
                                    </div>
                                </div>
                                <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
                                    <div class="ele-obalance-item">
                                        <div class="ele-obalance" v-for="membalance in membalances">
                                            <span>{{membalance.name}}</span>
                                            <strong>{{membalance.balance}}</strong>
                                        </div>
                                    </div>
                                    <div class="ele-balance-tool">
                                        <a href="#">额度转换</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end of logoutBox-->
            </div>
        </div>
        <!--end page-header-->
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <a href="#" class="btn_download"></a>
                <a href="event.html" class="btn_promotions"></a>
                <a href="#" class="btn_service"></a>
                <div id="containerLeft">
                    <!--slideshow -->
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#"><img src="image/not-use/slider01.png"></a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#"><img src="image/not-use/slider02.png"></a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#"><img src="image/not-use/slider03.png"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.slideshow -->
                </div>
                <div id="containerRight">
                    <div class="btn_welcome"></div>
                    <div class="prize"><span style="color:#fff;">168,888.00</span> </div>
                    <div class="newsBox">
                        <marquee scrollamount="2" scrolldelay="50" direction="up" onmouseover="this.stop();" onmouseout="this.start();
                    ">真人荷官，實勁娛樂體驗無須下載即可享受真實的娛樂場體驗..</marquee>
                    </div>
                    <!--home game-->
                    <div id="homeGame">
                        <ul>
                            <li>
                                <a href="live.php" class="game01"></a>
                            </li>
                            <li>
                                <a href="casino_login.php" class="game02"></a>
                            </li>
                            <li>
                                <a href="lottery.php" class="game03"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--end page-body-->
        </div>
        <!--end page-container-->
        <!--page-footer-->
        <div id="page-footer">
            <div id="footer">
                <a href="#" class="ublogo"></a>
                <a href="#" class="bbinlogo"><img src="image/not-use/red.png" width="90px"></a>
                <div class="footer_nav">
                    <ul>
                        <li><a href="#">责任博彩</a></li>
                        <li>|</li>
                        <li><a href="#">常见问题</a></li>
                        <li>|</li>
                        <li><a href="#">取款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">存款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">合作伙伴</a></li>
                        <li>|</li>
                        <li><a href="#">联系我们</a></li>
                        <li>|</li>
                        <li><a href="about.php">关于我们</a></li>
                    </ul>
                </div>
                <div class="copyright">Copyright © BBIN Reserved</div>
            </div>
        </div>
        <!--end page-footer-->
    </div>
    <!--end mainBody01-->
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',
            isNav: 1,
            isNumber: 1,
            navPosition: 'left'
        });
        new toggleColor('#textGlitter', ['#ffffff', '#ff0000'], 500);
    </script>
</body>

</html>
