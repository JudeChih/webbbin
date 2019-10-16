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
    <div id="mainBody-bg02">
        <div id="mainBody" class="clearfix">
            <div id="page-header" class="clearfix">
                <div id="header" class="wrapper header-casino">
                    <div class="header-top">
                        <a href="index.php" class="logo"></a>
                        <!--nav star-->
                        <div class="mainnav-wrap">
                            <div class="mainnav">
                                <ul>
                                    <li id="LS-first"><a href="index.php">首页</a></li>
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
                                    <li id="LS-game"><a class="current" href="casino_login.php">电子游艺</a>
                                        <div id="nav-game" style="display:none" class="ele-drop-group">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
                                    <li id="LS-mobile"><a href="">手机下注</a></li>
                                    <li id="LS-memberexclusiveii"><a href="" class="textGlitter">优惠活动</a></li>
                                    <li id="LS-download"><a href="">下载区</a></li>
                                    <li id="LS-service"><a href="">在线客服</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 語系 -->
                    <div class="headerbar02">
                        <div id="lang-wrap">
                            <div id="langTitle">简体中文</div>
                            <div id="langOption">
                                <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                                <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                                <a href="#" target="mem_index" class="en">English</a>
                            </div>
                        </div>
                    </div>
                    <!--banner-->
                    <div class="title-wrap">
                        <?php include '../template/game/slider.php'; ?>
                        <div id="logonBox01">
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
                            </div>
                        </div>
                    </div>
                    <!--banner end-->
                </div>
                <!--header end-->
            </div>
            <!--    end page-header-->
            <div id="page-container01" class="wrapper ">
                <div id="page-body01" class="clearfix">
                    <div class="casino-login-list">
                        <ul>
                            <li><a href="index.php">登出</a></li>
                            <li>|</li>
                            <li><a href="#">额度转换</a></li>
                            <li>|</li>
                            <li><a href="#">线上取款</a></li>
                            <li>|</li>
                            <li><a href="#">线上存款</a></li>
                            <li>|</li>
                            <li class="btn-mem"><a href="#">会员中心</a></li>
                        </ul>
                    </div>
                </div>
                <!-- game menu -->
                <div class="game-wrap" class="clearfix">
                    <?php include '../template/game/index.php'; ?>
                </div>
            </div>
            <!--    end page-container-->
            <div id="page-footer">
                <div class="footer wrapper">
                    <a href="#" class="bbin"><img src="image/not-use/white.png" width="80px"></a>
                    <a href="#" class="ublogo"></a>
                    <div class="copyright-wrap">
                        <div class="footer-list">
                            <ul>
                                <li><a href="about.php">关于我们</a></li>
                                <li>|</li>
                                <li><a href="">联系我们</a></li>
                                <li>|</li>
                                <li><a href="">合作伙伴</a></li>
                                <li>|</li>
                                <li><a href="">存款幫助</a></li>
                                <li>|</li>
                                <li><a href="">取款幫助</a></li>
                                <li>|</li>
                                <li><a href="">常见问题</a></li>
                                <li>|</li>
                                <li><a href="">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="copyright">COPYRIGHT © BBIN RESERVED.</div>
                    </div>
                </div>
            </div>
            <!--    end page-footer-->
        </div>
    </div>
    <!--end mainBody-bg01-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#FF0', '#fff'], 600);
    </script>
</body>

</html>