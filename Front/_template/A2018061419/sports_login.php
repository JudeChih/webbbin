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
    <div id="mainBody">
        <div id="page-header">
            <div class="header-top row">
                <div id="logo">
                    <a href="###" class="logo"></a>
                </div>
                <!-- 登入區-->
                <div id="logon" class="login-wrap">
                    <!--國旗區域-->
                    <div class="lang-wrap clearfix">
                        <a href="#" class="cn flag02"></a>
                        <a href="#" class="tw flag01"></a>
                        <a href="#" class="en flag03"></a>
                    </div>
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
                    <a class="btn-logout" href="index.php"></a>
                </div>
                <ul class="logon-list">
                    <li><a href="###">下注记录</a></li>
                    <li>|</li>
                    <li><a href="###">会员中心</a></li>
                    <li>|</li>
                    <li><a href="###">线上存款</a></li>
                    <li>|</li>
                    <li><a href="###">线上取款</a></li>
                    <li>|</li>
                    <li><a href="###">额度转换</a></li>
                    <li>|</li>
                    <li><a href="###">规则说明</a></li>
                    <li>|</li>
                    <li><a href="###">登出</a></li>
                </ul>
            </div>
            <!--導覽列-->
            <div class="mainnav row">
                <ul id="nav" class="clearfix">
                    <li id="LS-first" class="LS-first"><a href="index.php">首 页</a></li>
                    <li id="LS-ball" class="LS-ball current"><a href="sports_login.php">体育赛事</a>
                        <div id="nav-ball" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-live" class="LS-live"><a href="live.php">视讯直播</a>
                    <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                    </li>
                    <li id="LS-game" class="LS-game"><a href="casino_login.php">电子游艺</a>
                        <div id="nav-game" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
                    <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="###" class="textGlitter">优惠活动</a></li>
                    <li id="LS-mobile" class="LS-mobile"><a href="###">手机下注</a></li>
                    <li id="LS-service" class="LS-service"><a href="###">在线客服</a></li>
                </ul>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="title-wrap"></div>
                <div class="ball-wrap">
                    <?php include "../template/ball/index.php"; ?>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer clearfix">
                <a href="#" class="bbinlogo"><img src="image/not-use/red.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                <div class="footer-link-copyright">
                    <ul class="footer-link">
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
                        <li>|</li>
                    </ul>
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
