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
        <!--Header-->
        <div id="page-header" class="page-header clearfix">
            <div class="header clearfix">
                <a href="index.php" class="logo"></a>
                <div class="flag">
                    <div class="flag01"></div>
                    <div class="flag02"></div>
                    <div class="flag03"></div>
                </div>
                <div class="member">
                    <!-- meminfo -->
                    <div class="meminfo-wrap">
                        <div class="mem-info">
                            <div class="ele-accinfo ele-acc-name"><span>帳號：</span><strong>{{memAccount}}</strong></div>
                            <div class="ele-acc-unit">
                                <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                                    <span>BBIN餘額：</span>
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
                <div class="main-Menual">
                    <ul class="mainnav">
                        <li><a href="index.php" class="current">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                         <li id="LS-live"><a href="live.php">视讯直播</a>
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
                        <li><a href="promotions.php" id="textGlitter">优惠活动</a></li>
                        <li><a href="#">手机下注</a></li>
                        <li><a href="#">在线客服</a></li>
                    </ul>
                </div>
                <div class="mem_info-list" style="width: 400px;">
                    <ul>
                        <li><a href="#">会员中心</a></li>
                        <li>|</li>
                        <li><a href="#">线上存款</a></li>
                        <li>|</li>
                        <li><a href="#">线上取款</a></li>
                        <li>|</li>
                        <li><a href="#">额度转换</a></li>
                        <li>|</li>
                        <li><a href="#">未读讯息 (0)</a></li>
                        <li>|</li>
                        <li><a href="index.php">登出</a></li>
                    </ul>
                </div>
            </div>
            <!-- slideshow -->
            <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                    <ul>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="image/not-use/slider01.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="image/not-use/slider02.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="image/not-use/slider03.jpg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /.slideshow -->
        </div>
        <!-- page-header end-->
        <!--Container-->
        <div class="page-container clearfix">
            <div class="container clearfix">
                <div class="first-game">
                    <a href="promotions.php" class="btn_event"></a>
                    <div class="jackpot"><img src="image/bbin_icon.png" width="44" height="44" alt="" style="float:left; margin:102px 0 0 79px;" />999999999999</div>
                    <a href="#" class="btn_welcome"></a>
                </div>
                <div class="first-btn-wrap">
                    <a href="#" class="btn_service"></a>
                    <div class="first-news"></div>
                    <marquee height="50" scrollamount="3" onmouseover="this.stop();" onmouseout="this.start();">VIP客户可享受公司所有的优惠政策.VIP客户通过公司账号汇款可享受2%的优惠..</marquee>
                </div>
            </div>
        </div>
        <!-- Container end-->
        <!--Footer-->
        <div class="page-footer clearfix">
            <div class="footer">
                <div class="footer-list">
                    <ul>
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
                    </ul>
                </div>
               <a href="#" class="ublogo"></a>
                <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="80px"></a>
                <div class="copyright">Copyright © BBIN Reserved</div>
            </div>
        </div>
        <!--Footer end-->
        <!--End-mainBody-->
    </div>
    <?php include '../template/base.php'; ?>
    <!-- Slideshow for this template -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
    $('#js-ele-slideshow').slideshow({
        navPosition: 'right',
        animationType: 'fade',
        isNav: 1,
        isNumber: 1
    });
    </script>
</body>

</html>
