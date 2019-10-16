<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody-bg">
        <div id="mainBody">
            <div id="page-header">
                <div class="header-top">
                    <div class="flag-wrap header-list">
                        <div class="lang-wrap">
                            <a href="#" class="cn flag01"></a>
                            <a href="#" class="tw flag02"></a>
                            <a href="#" class="en flag03"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="page-container">
                <div id="page-body">
                    <div id="page-left">
                        <!--                    start login-->
                        <div id="first-login-wrap">
                            <a href="index.php" class="logo"></a>
                            <div id="first-login">
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
                        <a href="#" class="btn-download"></a>
                        <a href="#" class="btn-promotion"></a>
                    </div>
                    <div id="page-right">
                        <div class="title-first-wrap">
                            <!--slideshow -->
                            <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                                    <ul>
                                        <li data-autoplaytime="5000">
                                            <a href="#"><img src="image/not-use/slider01.png"></a>
                                        </li>
                                        <li data-autoplaytime="5000">
                                            <a href="#"><img src="image/not-use/slider02.png"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- /.slideshow -->
                        </div>
                        <!--                    end first-title-->
                        <div class="first-news ">
                            <marquee direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为
                            </marquee>
                        </div>
                    </div>
                    <div id="page-bottom">
                        <!--                    導覽列-->
                        <div id="mainNav" class="mainnav">
                            <ul>
                                <li id="LS-ball">
                                    <a href="sports_login.php" class="nav-sports"></a>
                                    <div id="nav-ball" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                        </div>
                                    </div>
                                </li>
                                <li id="LS-live">
                                    <a href="live.php" class="nav-live"></a>
                                    <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                                </li>

                                <li id="LS-game">
                                    <a href="casino_login.php" class="nav-casino"></a>
                                    <div id="nav-game" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="" class="nav-promotions"></a>
                                </li>
                                <li>
                                    <a href="lottery.php" class="nav-lottery"></a>
                                </li>
                                <li>
                                    <a href="" class="nav-mobil"></a>
                                </li>
                                <li class="nav-service-box">
                                    <a href="" class="nav-service"></a>
                                </li>
                            </ul>
                        </div>
                        <!--            結束導覽列-->
                    </div>
                </div>
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
    </div>
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',
            isNav: 1,
            isNumber: 1,
        });
    </script>
</body>

</html>
