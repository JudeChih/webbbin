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
        <div id="page-header">
            <div id="header">
                <div class="header-top">
                    <!--nav-->
                    <div class="mainnav">
                        <ul class="nav">
                            <li id="LS-first"><a href="index.php">HOME<br /><span>首页</span></a></li>
                            <li id="LS-ball"><a href="sports_login.php">SPORTS<br /><span>体育赛事</span></a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php">LIVE CASINO<br /><span>视讯直播</span></a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                            </li>
                            <li id="LS-game"><a href="" class="current">CASINO<br /><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div id="logo">
                                <a href="index.php"></a>
                            </div>
                            <li id="LS-lottery"><a href="lottery.php">LOTTERY<br /><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="promotions.php">PROMOTIONS<br /><span>优惠活动</span></a></li>
                            <li id="LS-affiliation"><a href="#">MOBILE BET<br /><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#">SERVICE<br /><span>在线客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header2">
                <div id="top1000">
                    <!--登入區-->
                    <div id="login">
                        <div class="loginbox">
                            <!--語系-->
                            <div id="lang-wrap">
                                <div id="ele-lang-wrap">简体中文</div>
                                <div id="ele-lang-group">
                                    <a href="#" target="mem_index" class="zh-tw langCurrent">简体中文</a>
                                    <a href="#" target="mem_index" class="zh-cn">繁體中文</a>
                                    <a href="#" target="mem_index" class="en">English</a>
                                </div>
                            </div>
                            <!--帳號餘額-->
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
                            <!--登入後連結-->
                            <div class="logon-list">
                                <ul>
                                    <li><a href="#">会员中心</a></li>
                                    <li> │ </li>
                                    <li><a href="#">线上存款</a></li>
                                    <li> │ </li>
                                    <li><a href="#">线上取款</a></li>
                                    <li> │ </li>
                                    <li><a href="#">额度转换</a></li>
                                </ul>
                            </div>
                            <!--登入按鈕-->
                            <div>
                                <a href="index.php" class="btn-submit">LOGOUT</a>
                            </div>
                        </div>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <!-- game star -->
                <div class="game-wrap">
                    <?php include '../template/game/slider.php'; ?>
                    <?php include '../template/game/index.php'; ?>
                </div>
            </div>
        </div>
        <div id="page-footer" class="clearfix">
            <div class="footer">
                <div class="footer-top">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关于我们</a></li>
                        <li> │ </li>
                        <li><a href="#">联系我们</a></li>
                        <li> │ </li>
                        <li><a href="#">合作伙伴</a></li>
                        <li> │ </li>
                        <li><a href="#">存款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">取款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">常见问题</a></li>
                        <li> │ </li>
                        <li><a href="#">责任博彩</a></li>
                        <br />
                        <p>Copyright © BBIN Reserved</p>
                    </ul>
                </div>
                <div class="footercasino"></div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
