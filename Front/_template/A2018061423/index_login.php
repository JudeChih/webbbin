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
    <!--最外層包裝-->
    <div id="mainbody">
        <!--page-header-->
        <div id="page-header">
            <div id="header">
                <!--Nav選單-->
                <div id="nav" class="mainnav" data-lsub-y="-10">
                    <!--主選單的選項-->
                    <ul>
                        <li class="current"><a href="index.php">首　页</a></li>
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
                        <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="lottery.php">彩票游戏</a></li>
                        <li><a href="promotions.php">优惠活动</a></li>
                        <li><a href="#">手机下注</a></li>
                        <li><a href="#">下载专区</a></li>
                        <li><a href="#">在线客服</a></li>
                    </ul>
                </div>
                <!--Nav選單 end-->
                <div id="logo">
                    <a href="index.php"><img src="image/logo.png" /></a>
                </div>
                <div id="login">
                    <div id="langbar">
                        <select name="" id="lang">
                            <option>简体中文</option>
                            <option>繁體中文</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div id="logon">
                        <!-- meminfo -->
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
                        <div id="member_list">
                            <a href="">会员中心</a> | <a href="">线上存款</a> | <a href="">线上取款</a> | <a href="">额度转换</a> |
                            <a href="">未读讯息(0)</a> | <a href="index.php">登出</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--header end-->
        </div>
        <!--page-header end-->
        <!--page-container-->
        <div id="page-container">
            <div id="container">
                <div id="main">
                    <div id="news">
                        <p>NEWS..欢迎光临BBIN娱乐城我们将24小时为您服务，打造高品质游戏平台，热络的网路博彩市场中，不断地求新求变......</p>
                    </div>
                    <div id="btn_promotions"><a href="promotions.php">优惠活动</a></div>
                    <div id="btn_bbin"><a href="index.php">BBIN</a></div>
                    <div id="btn_welcome"><a href="">立即注册</a></div>
                    <div id="btn_download"><a href="">下载区</a></div>
                    <div id="btn_service"><a href="">在线客服</a></div>
                </div>
                <!-- slideshow -->
                <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
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
                <!-- /.slideshow -->
            </div>
        </div>
        <!--page-container end-->
        <!--page-footer-->
        <div id="page-footer">
            <div class="footer">
                <div id="footer_img"><img src="image/not-use/white.png" width="80px"></div>
                <div id="footer_img"><img src="image/not-use/ublogo.png" height="42" width="128"></div>
                <div id="bottom_menu">
                    <div id="bottom_menu_list">
                        <a href="about.php">关于我们</a>　︱
                        <a href="#">联系我们</a>　︱
                        <a href="#">合作伙伴</a>　︱
                        <a href="#">存款帮助</a>　︱
                        <a href="#">取款帮助</a>　︱
                        <a href="#">常见问题</a>　︱
                        <a href="#">责任博彩</a>
                    </div>
                </div>
                <div id="copyright"> Copyright © BBIN Reserved
                </div>
            </div>
        </div>
        <!--page-footer end-->
    </div>
    <!--最外層包裝 結束-->
    <?php include '../template/base.php'; ?>
    <!-- Slideshow for this template -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        navPosition: 'left',
        isNav: 1
    });
    </script>
</body>
</html>
