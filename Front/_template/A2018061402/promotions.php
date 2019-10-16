<!DOCTYPE html>
<html class="madvertis memberexclusiveii zh-cn">
<head>
    <meta charset="UTF-8">
    <title>优惠活动</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <div id="page-header">
            <div id="header">
                <div class="header-top">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <div class="header-right">
                        <div id="login">
                            <ul>
                                <form class="login-input form-group">
                                    <p>
                                        <input type="text" class="form-control name" placeholder="帐号:">
                                        <input type="text" class="form-control key" placeholder="密码">
                                        <input type="text" class="form-control key" placeholder="验证码:">
                                </form>
                            </ul>
                            <ul>
                                <a href="index_login.php" class="btn-submit"></a>
                            </ul>
                            <ul><a href="#" class="getPW">忘记密码</a></ul>
                            <!--lang-->
                            <div id="lang-wrap">
                                <div id="ele-lang-wrap">简体中文</div>
                                <div id="ele-lang-group">
                                    <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                                    <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                                    <a href="#" target="mem_index" class="en">English</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mainnav">
                    <ul class="nav">
                        <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                        <li id="LS-ball"><a href="sports_login.php"><span>体育赛事</span></a>
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
                        <li id="LS-game"><a href="#"><span>电子游艺</span></a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii"><a href="promotions.php" class="current"><span>优惠活动</span></a></li>
                        <li id="LS-affiliation"><a href="#"><span>手机下注</span></a></li>
                        <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="page-container">
        <div id="page-body">
            <div class="title-page"></div>
            <div class="about-wrap" class="clearfix">
                <div class="page-top"></div>
                <div class="page-y" class="clearfix">
                    <div>
                        <ul>
                            <a href="#" class="promotions-banner01"></a>
                        </ul>
                        <ul>
                            <a href="#" class="promotions-banner02"></a>
                        </ul>
                    </div>
                </div>
                <div class="page-bottom"></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div id="page-footer">
        <div class="footer">
            <div class="footer-top">
                <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="80px"></a>
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
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
