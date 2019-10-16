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
            <div id="header">
                <div class="header-top">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <div class="header-right">
                        <div id="login">
                            <div class="lang-wrap">
                                <a href="#" class="lang_t">简体中文</a>
                            </div>
                            <!-- meminfo -->
                            <div class="meminfo-wrap">
                                <div class="mem-info">
                                    <div class="ele-accinfo ele-acc-name"><span>帐号：</span><strong>{{memAccount}}</strong></div>
                                    <div class="ele-acc-unit">
                                        <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                                            <span>BBIN余额：</span>
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
                <div class="mainnav" data-lsub-y="-3">
                    <ul class="nav">
                        <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                        <li id="LS-ball"><a href="sports_login.php" class="current"><span>体育赛事</span></a>
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
                        <li id="LS-memberexclusiveii"><a href="#"><span>优惠活动</span></a></li>
                        <li id="LS-affiliation"><a href="#"><span>手机下注</span></a></li>
                        <li id="LS-mobile"><a href="#"><span>合作伙伴</span></a></li>
                        <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                    </ul>
                </div>
                <div class="logon-list">
                    <ul>
                        <li><a href="#">下注记录</a></li>
                        <li> │ </li>
                        <li><a href="#">会员中心</a></li>
                        <li> │ </li>
                        <li><a href="#">线上存款</a></li>
                        <li> │ </li>
                        <li><a href="#">线上取款</a></li>
                        <li> │ </li>
                        <li><a href="#">额度转换</a></li>
                        <li> │ </li>
                        <li><a href="#">规则说明</a></li>
                        <li> │ </li>
                        <li><a href="#">登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="title-page"></div>
                <div class="ball-wrap">
                    <?php include "../template/ball/index.php"; ?>
                </div>
            </div>
        </div>
        <div id="page-footer">
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
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
