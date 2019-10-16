<!DOCTYPE html>
<html class="ball is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>体育赛事</title>
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="clearfix">
        <div id="page-header" class="clearfix">
            <div id="header" class="clearfix">
                <div class="header-top wrapper ">
                    <div class="logon-list logon-list-Inside">
                        <ul>
                            <li><a href="#">下注记录</a></li>
                            <li>|</li>
                            <li><a href="#">会员中心</a></li>
                            <li>|</li>
                            <li><a href="#">线上存款</a></li>
                            <li>|</li>
                            <li><a href="#">线上取款</a></li>
                            <li>|</li>
                            <li><a href="#">额度转换</a></li>
                            <li>|</li>
                            <li><a href="#">规则说明</a></li>
                            <li>|</li>
                            <li><a href="index.php">登出</a></li>
                        </ul>
                    </div>
                    <a href="index.php" class="logo"></a>
                    <div class="header-right right02">
                        <!-- 語系 -->
                        <div class="lang-wrap">
                            <a href="" class="cn flag01"></a>
                            <a href="" class="tw flag02"></a>
                            <a href="" class="en flag03"></a>
                        </div>
                        <!--                    start login-->
                        <div id="logoutBox">
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
                        <!--                        end login-wrap-->
                    </div>
                </div>
                <!--mainnav-->
                <div class="mainnav-wrap">
                    <ul class="mainnav">
                        <li id="LS-first" class="LS-first"><a href="index.php"><span>首頁</span></a></li>
                        <li id="LS-ball" class="LS-ball"><a href="#" class="current"><span>体育赛事</span></a>
                            <div id="nav-ball" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-live" class="LS-live"><a href="live.php"><span>视讯直播</span></a>
                            <div id="nav-live" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="live in lives" :href="live.link">{{live.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game" class="LS-game"><a href="#"><span>电子游艺</span></a>
                            <div id="nav-game" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{game.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery" class="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                        <li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                        <li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                    </ul>
                </div>
                <!--end mainnav-->
            </div>
            <!--header end-->
            <div class="title-wrap">
                <div class="title title-sports"> </div>
            </div>
        </div>
        <!--    end page-header-->
        <div id="page-container">
            <div id="page-body">
                <div class="ball-wrap ">
                    <?php include '../template/ball/index.php'; ?>
                </div>
            </div>
        </div>
        <!--    end page-container-->
        <div id="page-footer">
            <div class="footer wrapper">
                <ul class="footer-list clearfix">
                    <li class="last"><a href="about.php">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">存款幫助</a></li>
                    <li><a href="">取款幫助</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">责任博彩</a></li>
                </ul>
                <div class="footer-bottom">
                    <a href="index.php" class="bbinlogo">
                        <img src="image/not-use/white.png" width="80">
                    </a>
                    <a href="#" class="ublogo">
                        <img src="image/not-use/ublogo/ublogo_a.png" width="120">
                    </a>
                    <div class="copyright">Copyright © BBIN Reserved </div>
                </div>
            </div>
        </div>
        <!--    end page-footer-->
    </div>
    <!--end mainBody-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#D8A300', '#fff'], 600);
    </script>
</body>

</html>