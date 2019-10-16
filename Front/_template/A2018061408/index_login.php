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
    <div id="mainBody">
        <!--page_header-->
        <div id="page-header">
            <div class="header">
                <div class="header-logo">
                    <a href="index.php"></a>
                </div>
                <div class="header-top">
                    <!--lang-->
                    <div class="lang-wrap">
                        <div id="ele-lang-wrap" class="lang-title">简体中文</div>
                        <div id="ele-lang-group" class="lang-option">
                            <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                            <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                            <a href="#" target="mem_index" class="en">English</a>
                        </div>
                    </div>
                    <!--Login後-->
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
                    <div class="member-list">
                        <a href="">会员中心</a>
                        <a href="">未线上存款</a>
                        <a href="">线上取款</a>
                        <a href="">额度转换</a>
                        <a href="">未读讯息(1)</a>
                        <a href="index.php">登出</a>
                    </div>
                </div>
                <!--主選單的選項-->
                <!-- mainnav -->
                <div class="mainnav">
                    <ul class="clearfix">
                        <li id="LS-first"><a href="index.php" class="current">首页</a></li>
                        <li id="LS-ball">
                            <a href="sports_login.php">体育赛事</a>
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
                        <li id="LS-game">
                            <a href="casino_login.php">电子游艺</a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
                        <li id="LS-memberexclusiveii"><a href="#">优惠活动</a></li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!--Containder-->
        <div id="page-container">
            <div class="first-wrap">
                <div class="first-banner-ad clearfix">
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap clearfix" onselectstart="return false;">
                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider01.png">
                                    </a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider02.png">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--end slideshow-->
                </div>
                <div class="first-newbox">
                    <marquee scrollamount="2" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">2014年7月25日（週五）將進行例行性維護，時間早上09:00〜11:50，若有造成不便，煩請見諒！</marquee>
                </div>
                <div class="first-gamebox clearfix">
                    <div class="gameset game01"></div>
                    <div class="gameset game02"></div>
                    <div class="btn-welcome"></div>
                    <div class="gameset game03"></div>
                    <div class="gameset game04"></div>
                </div>
            </div>
        </div>
        <!--Footer-->
        <div id="page-footer">
            <div class="footer">
                <div class="footer-list">
                    <ul class="removeNodes">
                        <li><a href="about.php">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">合作伙伴</a></li>
                        <li><a href="#">存款帮助</a></li>
                        <li><a href="#">取款帮助</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="60px"></a>
                    <a href="#" class="ublogo"></a>
                    <a href="#" class="btn-up"></a>
                    <div class="copyright">Copyright © BBIN Reserved.</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',
            isNav: true
        });
    </script>
</body>

</html>
