<!DOCTYPE html>
<html class="game is-login zh-cn">

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
    <div id="mainBody">
        <div id="page-header">
            <div class="header">
                <!--lang-->
                <div id="lang-wrap">
                    <div id="ele-lang-wrap">繁體中文</div>
                    <div id="ele-lang-group">
                        <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                        <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                        <a href="#" target="mem_index" class="en">English</a>
                    </div>
                </div>
                <!--end of lang-->
                <a href="index.php" class="logo"></a>
                <div class="mainnav">
                    <ul class="nav">
                        <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                        <li id="LS-ball">
                            <a href="sports_login.php" title="体育赛事">体育赛事</a>
                            <!-- 子選單 -->
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
                        <li id="LS-game" class="current">
                            <a href="casino_login.php" title="电子游艺">电子游艺</a>
                            <!-- 子選單 -->
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                        <li id="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="page-c clearfix">
                <div class="page_left">
                    <div id="logon01">
                        <h3> 请检视您的帐户View Account</h3>
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
                    <div class="loginbg_02"></div>
                </div>
                <div class="page_right">
                    <div class="container_homebannerbg"></div>
                    <div class="logon-list01">
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
                    <div id="js-ele-gamebanner" class="ele-gamebanner-wrap">
                        <?php include '../template/game/slider.php'; ?>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <!-- game star -->
                <div class="game-wrap">
                    <?php include '../template/game/index.php'; ?>
                </div>
            </div>
            <div id="page-footer">
                <div class="wrap">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="80px"></a>
                    <a href="#" class="ublogo"></a>
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
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#000', '#FF0000'], 600);
    </script>
</body>

</html>
