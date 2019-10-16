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
    <div id="mainBody" class="clearfix">
        <div id="page-header">
            <div id="header">
                <div id="box">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <!--登入區-->
                    <div id="login">
                        <ul class="loginbox">
                            <!--lang-->
                            <div class="lang-wrap">
                                <a href="#" title="简体中文" class="lang-option lang-zh-cn"></a>
                                <a href="#" title="繁體中文" class="lang-option lang-zh-tw"></a>
                                <a href="#" title="English" class="lang-option lang-en"></a>
                            </div>
                            <!--end of lang-->
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
                            <!--帳號餘額 end-->
                            <!--登入後連結-->
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
                                </ul>
                            </div>
                            <!--登入後連結 end-->
                            <div>
                                <a href="index.php" class="btn-submit">登出</a>
                            </div>
                        </ul>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
            <div class="mainnav" data-lsub-y="13">
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
                     <div id="nav-lives" style="display:none" class="ele-drop-group">
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
                    <li id="LS-memberexclusiveii"><a href="promotions.php"><span>优惠活动</span></a></li>
                    <li id="LS-affiliation"><a href="#"><span>手机下注</span></a></li>
                    <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                </ul>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <div class="ball-wrap">
                    <?php include "../template/ball/index.php"; ?>
                </div>
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
                    <p>COPYRIGHT © BBIN RESERVED</p>
                </ul>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
