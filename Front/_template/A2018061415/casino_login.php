<!DOCTYPE html>
<html class="game game-bbin is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>电子游艺</title>
    <!-- Share core CSS -->
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="clearfix">
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
                                <li><a href="#">登出</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--end of loginONNAV-->
                    <div class="mainnav">
                        <ul>
                            <li><a href="index.php" class="home">首页</a></li>
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
                            <li id="LS-game"><a href="#" class="current">电子游艺</a>
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
            </div>
            <div class="float-box">
                <div class="logoutBox02">
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
            </div>
        </div>
        <!--end page-header-->
        <div id="page-container" class="clearfix">
            <div id="page-body02">
                <!-- game star -->
                <div class="game-wrap">
                    <?php include '../template/game/slider.php'; ?>
                    <?php include '../template/game/index.php'; ?>
                </div>
            </div>
        </div>
        <!--end page-body02-->
    </div>
    <!--end page-container-->
    <!--page-footer-->
    <div id="page-footer">
        <div id="footer02">
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
    <!--end mainBody01-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('#textGlitter', ['#ffffff', '#ff0000'], 500);
    </script>
</body>

</html>
