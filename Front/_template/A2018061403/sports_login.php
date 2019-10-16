<!DOCTYPE html>
<html class="ball is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>体育赛事</title>
    <link rel="stylesheet" href="css/style.css" />
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody">
        <div id="page-header" class="page-header02">
            <div class="header_top">
                <div class="flag_box">
                    <div class="Flag">
                        <div class="flag01"></div>
                        <div class="flag02"></div>
                        <div class="flag03"></div>
                    </div>
                    <div class="loginbox_acc">
                        <div class="loginbox title"></div>
                        <div class="loginbox_acc left"></div>
                        <div class="loginbox_acc bg">
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
                        <div class="laginbox_acc right"></div>
                    </div>
                </div>
                <div class="logo_bg">
                    <a href="index.php"></a>
                </div>
                <div class="nav">
                    <div class="nav left"></div>
                    <div class="nav bg">
                        <ul class="mainnav">
                            <li><a href="index.php"> 首页</a></li>
                            <div class="nav line"></div>
                            <li id="LS-ball"><a href="sports_login.php" class="current">体育赛事</a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div class="nav line"></div>
                            <li id="LS-live"><a href="live.php"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                            <div class="nav line"></div>
                            <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div class="nav line"></div>
                            <li><a href="lottery.php">彩票游戏</a></li>
                            <div class="nav line"></div>
                            <li><a href="#" id="textGlitter">优惠专区</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">手机下注</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">在线客服</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">下载区</a></li>
                        </ul>
                    </div>
                    <div class="nav right"></div>
                </div>
                <div class="login_txt02">
                    <ul>
                        <li><a href="#">下注记录</a></li>
                        <li>|</li>
                        <li><a href="#">会员中心</a></li>
                        <li>|</li>
                        <li><a href="#">线上存款</a></li>
                        <li>|</li>
                        <li><a href="#">线上取款</a></li>
                        <li>|</li>
                        <li><a href="#">额度转换</a></li>
                        <li>|</li>
                        <li><a href="#">规则说明</a></li>
                        <li>|</li>
                        <li><a href="index.php">登出</a></li>
                    </ul>
                </div>
            </div>
            <div class="header_title">
                <div class="header_title_box sports"></div>
            </div>
        </div>
        <div class="clearfix" id="page-container">
            <div class="clearfix" id="page_body">
                <div class="container_box">
                    <!--體育-->
                    <div class="ele-ball-wrap clearfix">
                        <div class="ball-wrap">
                            <?php include "../template/ball/index.php"; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer02">
            <div class="footer">
                <div class="footer_img">
                    <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer_right">
                    <div class="footer_nav">
                        <ul>
                            <li><a href="about.php">关于我们</a>|</li>
                            <li><a href="#">联系我们</a>|</li>
                            <li><a href="#">合作伙伴</a>|</li>
                            <li><a href="#">存款帮助</a>|</li>
                            <li><a href="#">取款帮助</a>|</li>
                            <li><a href="#">常见问题</a>|</li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="copyright"> Copyright © BBIN 娛樂城 Reserved </div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
