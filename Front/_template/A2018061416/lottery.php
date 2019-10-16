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
    <div id="mainBody02" class="clearfix">
        <div id="page-header">
            <div id="lottery-bg" class="clearfix">
                <div class="header-top">
                    <div class="flag-wrap ">
                        <div class="lang-wrap">
                            <a href="#" class="cn flag01"></a>
                            <a href="#" class="tw flag02"></a>
                            <a href="#" class="en flag03"></a>
                        </div>
                    </div>
                </div>
                <!--        star header-->
                <div id="header" class="wrapper">
                    <!--                    start login-->
                    <div id="login-wraper">
                        <a href="index.php" class="logo"></a>
                        <div id="login">
                            <input class="name" type="text" value="asdqwe123456789@esb" />
                            <input class="password" type="text" value="密码" />
                            <input class="code" type="text" value="验证码" />
                        </div>
                        <div class="login-btn-wrap">
                            <a href="#" class="GetPW">忘记密码</a>
                            <a href="#" class="btn-joinus"></a>
                            <a href="index_login.php" class="btn-login"></a>
                        </div>
                    </div>
                    <!--                    end login-->
                    <div class="mainnav02 mainnav">
                        <ul class="nav02">
                            <li id="LS-first"><a href="index.php">首页</a></li>
                            <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
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
                            </div></li>
                            <li id="LS-game"><a href="casino_login.php"><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-lottery"><a href="lottery.php" class="current"><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="" class="textGlitter"><span>优惠活动</span></a></li>
                            <li id="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                        </ul>
                    </div>
                    <div class="title-wrap title-lottery">
                    </div>
                </div>
            </div>
        </div>

        <!--          end page-header-->
        <div id="page-container02">
            <div id="page-body">
                <div class="ltlottery-wrap">
                    <?php include "../template/ltlottery/index.php"; ?>
                </div>
            </div>
            <!--          end page-body-->
        </div>
        <div id="page-footer">
            <div class="footer-wraper">
                <div class="footer">
                    <div class="footer-list">
                        <ul>
                            <li><a href="about.php">关於我们</a></li>
                            <li> | </li>
                            <li><a href="#">联系我们</a></li>
                            <li> | </li>
                            <li><a href="#">合作伙伴</a></li>
                            <li> | </li>
                            <li><a href="#">存款帮助</a></li>
                            <li> | </li>
                            <li><a href="#">取款帮助</a></li>
                            <li> | </li>
                            <li><a href="#">常见问题</a></li>
                            <li> | </li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="footer-logo">
                        <ul>
                            <a href="#0"><li class="ublogo"></li></a>
                                <a href="#0"><img src="image/not-use/white.png" width="80px"></a>
                            <li></li>
                        </ul>
                    </div>
                    <!--                footer-logo-->
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
