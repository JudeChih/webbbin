<!DOCTYPE html>
<html class="ltlottery zh-cn">

<head>
    <meta charset="UTF-8">
    <title>視訊直播</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="clearfix">
        <div id="page-header" class="clearfix">
            <div id="header" class="clearfix">
                <div class="header-top wrapper ">
                    <a href="index.php" class="logo"></a>
                    <div class="header-right">
                        <!-- 語系 -->
                        <div class="lang-wrap">
                            <a href="" class="cn flag01"></a>
                            <a href="" class="tw flag02"></a>
                            <a href="" class="en flag03"></a>
                        </div>
                        <!--					start login-->
                        <div id="loginBox">
                            <div class="login-list-wrap">
                                <div class="login-list">
                                    <a class="btn-joinus01" href="">．免费加入</a>
                                    <a class="btn-getpw" href="">．忘记密码</a>
                                </div>
                                <a href="index_login.php" class="btn-login"></a>
                            </div>
                            <div id="login">
                                <form id="form" name="form" method="post" action="">
                                    <input type="text" class="login-unit login-unit-user " placeholder="帐号">
                                    <input type="text" class="login-unit login-unit-pw " placeholder="密码">
                                    <input type="text" class="login-unit login-unit-chk" placeholder="验证码">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--mainnav-->
                <div class="mainnav-wrap">
                    <ul class="mainnav">
                        <li id="LS-first" class="LS-first"><a href="index.php"><span>首頁</span></a></li>
                        <li id="LS-ball" class="LS-ball"><a href="#"><span>体育赛事</span></a>
                            <div id="nav-ball" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-live" class="LS-live"><a href="live.php"><span>视讯直播</span></a>
                            <div id="nav-live" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="live in lives" :href="live.link">{{live.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game" class="LS-game"><a href="#"><span>电子游艺</span></a>
                            <div id="nav-game" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{game.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery" class="LS-lottery"><a href="lottery.php" class="current"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                        <li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                        <li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                    </ul>
                </div>
                <!--end mainnav-->
            </div>
            <!--header end-->
            <div class="title-wrap">
                <div class="title title-lottery"> </div>
            </div>
        </div>
        <!--	end page-header-->
        <div id="page-container">
            <div id="page-body">
                <div class="ltlottery-wrap">
                    <?php include '../template/ltlottery/index.php'; ?>
                </div>
            </div>
        </div>
        <!--	end page-container-->
        <div id="page-footer">
            <div class="footer wrapper">
                <ul class="footer-list clearfix">
                    <li class="last"><a href="about.php">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">存款幫助</a></li>
                    <li><a href="">取款幫助</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">责任博彩</a></li>
                </ul>
                <div class="footer-bottom">
                    <a href="index.php" class="bbinlogo">
                        <img src="image/not-use/white.png" width="80">
                    </a>
                    <a href="#" class="ublogo">
                        <img src="image/not-use/ublogo/ublogo_a.png" width="120">
                    </a>
                    <div class="copyright">Copyright © BBIN Reserved </div>
                </div>
            </div>
        </div>
        <!--	end page-footer-->
    </div>
    <!--end mainBody-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#D8A300', '#fff'], 600);
    </script>
</body>

</html>
