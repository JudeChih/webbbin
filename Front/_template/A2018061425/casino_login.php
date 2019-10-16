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
                    <div class="mainnav">
                        <ul class="nav">
                            <div id="logo">
                                <a href="index.php"></a>
                            </div>
                            <li id="LS-ball"><a href="sports_login.php" class="navlink"><span>体育赛事</span></a>
                                <div id="nav-ball" class="ls-item">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php" class="navlink"><span>视讯直播</span></a>
                                <div id="nav-ball" class="ls-item">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </li>
                            <li id="LS-game"><a href="#" class="navlink current"><span>电子游艺</span></a>
                                <div id="nav-game" class="ls-item">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </li>
                            <li id="LS-lottery"><a href="lottery.php" class="navlink"><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="promotions.php" class="navlink"><span>优惠活动</span></a></li>
                            <li id="LS-affiliation"><a href="#" class="navlink"><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#" class="navlink"><span>线上客服</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="title-page"></div>
                    <!--登入區-->
                    <div id="login">
                        <div class="loginbox">
                            <div id="lang-wrap">
                                <div id="ele-lang-wrap">简体中文</div>
                                <div id="ele-lang-group">
                                    <a href="#" target="mem_index" class="zh-tw langCurrent">简体中文</a>
                                    <a href="#" target="mem_index" class="zh-cn">繁體中文</a>
                                    <a href="#" target="mem_index" class="en">English</a>
                                </div>
                            </div>
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
                            <!--登入後連結-->
                            <div class="logon-list">
                                <ul>
                                    <li><a href="#">会员中心</a></li>
                                    <li> │ </li>
                                    <li><a href="#">线上存款</a></li>
                                    <li> │ </li>
                                    <li><a href="#">线上取款</a></li>
                                    <li> │ </li>
                                    <br />
                                    <li><a href="#">额度转换</a></li>
                                    <li> │ </li>
                                </ul>
                            </div>
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
        <div id="page-footer">
            <div class="footer">
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关于我们 </a></li>
                        <li> · </li>
                        <li><a href="#">联系我们 </a></li>
                        <li> · </li>
                        <li><a href="#">合作伙伴 </a></li>
                        <li> · </li>
                        <li><a href="#">存款帮助 </a></li>
                        <li> · </li>
                        <li><a href="#">取款帮助 </a></li>
                        <li> · </li>
                        <li><a href="#">常见问题 </a></li>
                        <li> · </li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer2">
                <div class="footer2-all">
                    <div class="footer2-left">PAYMENT METHODS︰
                        <ul class="fooimg"></ul>
                    </div>
                    <div class="footer2-center">NEED HELP︰
                        <a class="foobut" href="#">24HR ONLINE SERVICE</a>
                        <p>The Best Customer Service For You</p>
                    </div>
                    <div class="footer2-right">DOWNLOAD BROWSER︰
                        <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                        <a href="#" class="ublogo"></a>
                    </div>
                </div>
            </div>
            <div id="footer3">
                <p>Copyright © BBIN Reserved</p>
            </div>
        </div>
    </div>
    <?php include '../template/base.php' ?>
</body>
</html>
