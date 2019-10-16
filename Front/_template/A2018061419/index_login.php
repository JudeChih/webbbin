<!DOCTYPE html>
<html class="first zh-cn is-login">

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
        <div id="page-header">
            <div class="header-top row">
                <div id="logo">
                    <a href="###" class="logo"></a>
                </div>
                <!--登入後區域-->
                <div id="logon" class="login-wrap">
                    <!--國旗區域-->
                    <div class="lang-wrap clearfix">
                        <a href="#" class="cn flag02"></a>
                        <a href="#" class="tw flag01"></a>
                        <a href="#" class="en flag03"></a>
                    </div>
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
                    <a class="btn-logout" href="index.php"></a>
                </div>
                <ul class="logon-list">
                    <li><a href="###">会员中心</a></li>
                    <li>|</li>
                    <li><a href="###">线上存款</a></li>
                    <li>|</li>
                    <li><a href="###">线上取款</a></li>
                    <li>|</li>
                    <li><a href="###">额度转换</a></li>
                    <li>|</li>
                    <li><a href="###">未读讯息<span>(1)</span></a></li>
                </ul>
            </div>
            <!--導覽列-->
            <div class="mainnav row">
                <ul id="nav" class="clearfix">
                    <li id="LS-first" class="LS-first current"><a href="index.php">首 页</a></li>
                    <li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事</a>
                        <div id="nav-ball" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-live" class="LS-live"><a href="live.php">视讯直播</a>
                    <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                    </li>
                    <li id="LS-game" class="LS-game"><a href="casino_login.php">电子游艺</a>
                        <div id="nav-game" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
                    <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="###" class="textGlitter">优惠活动</a></li>
                    <li id="LS-mobile" class="LS-mobile"><a href="###">手机下注</a></li>
                    <li id="LS-service" class="LS-service"><a href="###">在线客服</a></li>
                </ul>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="first-game clearfix">
                    <a href="#" class="first-game01"></a>
                    <a href="#" class="first-game02"></a>
                    <a href="#" class="first-game03"></a>
                    <a href="#" class="first-game04"></a>
                </div>
                <div class="first-btn-slider-wrap">
                    <ul class="first-btn">
                        <li>
                            <a href="#" class="first-btn-welcome"></a>
                        </li>
                        <li>
                            <a href="#" class="first-btn-promotions"></a>
                        </li>
                        <li>
                            <a href="#" class="first-btn-service"></a>
                        </li>
                    </ul>
                    <div id="first-slider">
                        <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                            <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
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
                        </div>
                        <!--end slideshow-->
                    </div>
                </div>
                <!-- 最新消息-->
                <div id="first-news">
                    <div class="news-title"></div>
                    <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="6" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                        <p>
                            NEWS..欢迎光临BBIN娱乐城我们将24小时为您服务，打造高品质游戏平台，热络的网路博彩市场中，不断地求新求变，全新电子游艺【加勒比扑克】，游戏画面..
                        </p>
                    </marquee>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer clearfix">
                <a href="#" class="bbinlogo"><img src="image/not-use/red.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                <div class="footer-link-copyright">
                    <ul class="footer-link">
                        <li><a href="about.php">关於我们</a></li>
                        <li>|</li>
                        <li><a href="#">联系我们</a></li>
                        <li>|</li>
                        <li><a href="#">合作伙伴</a></li>
                        <li>|</li>
                        <li><a href="#">存款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">取款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">常见问题</a></li>
                        <li>|</li>
                        <li><a href="#">责任博彩</a></li>
                        <li>|</li>
                    </ul>
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    new toggleColor('.textGlitter', ['#FF0', '#fff'], 600);
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isNav: 1,
        navPosition: 'right'
    });
    </script>
</body>

</html>
