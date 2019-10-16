<!DOCTYPE html>
<html class="ball is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>体育赛事</title>
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
                    <!--lang-->
                    <div class="lang-wrap">
                        <div id="ele-lang-wrap" class="lang-title">简体中文</div>
                        <div id="ele-lang-group" class="lang-option">
                            <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                            <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                            <a href="#" target="mem_index" class="en">English</a>
                        </div>
                    </div>
                    <!--Login後-->
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
                    <div class="member-list">
                        <a href="">下注记录</a>
                        <a href="">会员中心</a>
                        <a href="">线上存款</a>
                        <a href="">线上取款</a>
                        <a href="">额度转换</a>
                        <a href="">规则说明</a>
                        <a href="">登出</a>
                    </div>
                </div>
                <!-- mainnav -->
                <div class="mainnav">
                    <ul class="clearfix">
                        <li id="LS-first"><a href="index.php">首页</a></li>
                        <li id="LS-ball">
                            <a href="sports_login.php" class="current">体育赛事</a>
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
                        <li id="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
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
            <div class="ball-wrap">
                <?php include "../template/ball/index.php"; ?>
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
