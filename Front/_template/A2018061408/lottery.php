<!DOCTYPE html>
<html class="ltlottery zh-cn">

<head>
    <meta charset="UTF-8">
    <title>彩票游戏</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <!--最外層包裝-->
    <div id="mainBody">
        <!--page_header-->
        <div id="page-header">
            <div class="header">
                <div class="header-logo">
                    <a href="index.php"></a>
                </div>
                <div class="header-top">
                    <!--Login前-->
                    <input type="text" value="帐 号" class="login-lab" />
                    <input type="text" value="密 码" class="login-lab" />
                    <input type="text" value="验证码" class="login-lab" />
                    <a href="index_login.php" class="login-submit"></a>
                    <div class="login-btn floatL">
                        <a href="#">免费加入</a>
                        <a href="#">忘记密码</a>
                    </div>
                    <!--lang-->
                    <div class="lang-wrap">
                        <div id="ele-lang-wrap" class="lang-title">简体中文</div>
                        <div id="ele-lang-group" class="lang-option">
                            <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                            <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                            <a href="#" target="mem_index" class="en">English</a>
                        </div>
                    </div>
                </div>
                <!--主選單的選項-->
                <!-- mainnav -->
                <div class="mainnav">
                    <ul class="clearfix">
                        <li id="LS-first"><a href="index.php">首页</a></li>
                        <li id="LS-ball">
                            <a href="sports_login.php">体育赛事</a>
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
                        <li id="LS-game">
                            <a href="casino_login.php">电子游艺</a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery"><a href="lottery.php" class="current">彩票游戏</a></li>
                        <li id="LS-memberexclusiveii"><a href="#">优惠活动</a></li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!--Containder-->
        <div id="page-container">
            <div class="page-title"></div>
            <div class="page-bg"></div>
            <div class="ltlottery-wrap">
                <?php include "../template/ltlottery/index.php"; ?>
            </div>
        </div>
        <!--Footer-->
        <div id="page-footer">
            <div class="footer">
                <div class="footer-list">
                    <ul class="removeNodes">
                        <li><a href="about.php">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">合作伙伴</a></li>
                        <li><a href="#">存款帮助</a></li>
                        <li><a href="#">取款帮助</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="60px"></a>
                    <a href="#" class="ublogo"></a>
                    <a href="#" class="btn-up"></a>
                    <div class="copyright">Copyright © BBIN Reserved.</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
