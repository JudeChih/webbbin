<!DOCTYPE html>
<html class="ball is-login zh-cn">
<head>
    <meta charset="UTF-8">
    <title>体育赛事</title>
    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <div id="page-header">
            <div class="page-c">
                <div class="logo">
                    <a href="index.php"><img src="image/logo.png" /></a>
                </div>
            </div>
            <div class="header-top">
                <div class="page-c">
                    <!-- #login -->
                    <div class="login-wrap">
                        <div id="login">
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
                            <ul class="logon-list list-dividing">
                                <li><a href="#">下注记录</a></li>
                                <li><a href="#">会员中心</a></li>
                                <li><a href="#">线上存款</a></li>
                                <li><a href="#">线上取款</a></li>
                                <li><a href="#">额度转换</a></li>
                                <li><a href="#">规则说明</a></li>
                                <li><a href="index.php">登出</a></li>
                            </ul>
                        </div>
                        <!-- .lang-wrap -->
                        <div id="lang-wrap" class="lang-wrap">
                            <div id="ele-lang-wrap">
                                <a href="#" class="flag02"></a>
                            </div>
                            <div id="ele-lang-group" style="display: none;">
                                <a href="#" class="zh-tw flag02"></a>
                                <a href="#" class="en flag03"></a>
                            </div>
                        </div>
                        <!-- /.lang-wrap -->
                    </div>
                    <!-- /#login -->
                </div>
            </div>
            <div class="header-bottom">
                <div class="mainnav">
                    <div class="page-c">
                        <ul class="nav">
                            <li id="LS-first" class="LS-first"><a href="index.php"><span>首页</span></a></li>
                            <li id="LS-ball" id="LS-ball"><a href="sports_login.php" class="current"><span>体育赛事</span></a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live" class="LS-live"><a href="live.php"><span>视讯直播</span></a>
                            <div id="nav-lives" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                            </div>
                        </div>
                            </li>
                            <li id="LS-game" class="LS-game"><a href="#"><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-lottery" class="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="promotions.php"><span>优惠活动</span></a></li>
                            <li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                            <li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <!-- sports -->
                <div class="ball-wrap">
                    <?php include "../template/ball/index.php"; ?>
                </div>
                <!-- /.sports -->
            </div>
        </div>
        <div id="page-footer">
            <div class="footer-link">
                <div class="page-c">
                    <ul class="footer-link-list">
                        <li><a href="about.php">关於我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">合作伙伴</a></li>
                        <li><a href="#">存款帮助</a></li>
                        <li><a href="#">取款帮助</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-infor">
                <div class="page-c">
                    <ul class="footer-infor-list">
                        <li class="first">
                            <img src="image/footer_title01.png" />
                            <div class="message">
                                BBIN 游戏由具公信力的第三方单位 GLI 进行认证，确保游戏公平性，保护玩家权益，其用心值得肯定。
                            </div>
                            <img src="image/icon_glc.png" />
                        </li>
                        <li class="second">
                            <div class="service-wrap">
                                <a href="#" class="service-btn">线上客服</a>
                                <img src="image/footer_bg_service.png" />
                            </div>
                        </li>
                        <li class="third">
                            <img src="image/footer_title02.png" />
                            <div class="browser">
                                <a href="#"><img src="image/not-use/gray.png" width="80px"></a>
                                <a href="#"><img src="image/ublogo.png" /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="page-c copyright">Copyright © <a href="">BBIN</a> Reserved</div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>
</html>
