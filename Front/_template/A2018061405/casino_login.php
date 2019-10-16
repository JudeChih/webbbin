<!DOCTYPE html>
<html class="game is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>电子游艺</title>
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
                        <li id="LS-first"><a href="index.php">首 页</a></li>
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
                        <li id="LS-game"><a href="casino_login.php" class="current">电子游艺</a>
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
                <div class="mem_info-list">
                    <ul>
                        <li><a href="#">会员中心</a></li>
                        <li>|</li>
                        <li><a href="#">线上存款</a></li>
                        <li>|</li>
                        <li><a href="#">线上取款</a></li>
                        <li>|</li>
                        <li><a href="#">额度转换</a></li>
                        <li>|</li>
                        <li><a href="index.php">登出</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- page-header end-->
        <!--Container-->
        <div id="page-container" class="container clearfix">
            <div id="page-body" class="main-wrap">
                <!-- game star -->
                <div class="game-wrap">
                    <?php include '../template/game/slider.php'; ?>
                    <?php include '../template/game/index.php'; ?>
                </div>
            </div>
        </div>
    </div>
    <!-- Container end-->
    <!--Footer-->
    <div id="page-footer" class="page-footer clearfix">
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
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
    </script>
</body>

</html>
