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
                            <form class="login-input form-group">
                                <input type="text" placeholder="帐号" class="form-control name">
                                <input type="text" placeholder="密码" class="form-control password">
                                <input type="text" placeholder="验证码" class="form-control key">
                                <a class="login-btn btn-submit" href="index_login.php">登入</a>
                            </form>
                            <div class="login-btn-wrap">
                                <ul>
                                    <li><a href="#" class="login-btn btn-joinus">忘记密码</a></li>
                                    <li><a href="#" class="getPW">加入會員</a></li>
                                </ul>
                            </div>
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
                            <li id="LS-first" class="LS-first"><a href="index.php" class="current"><span>首页</span></a></li>
                            <li id="LS-ball" class="LS-ball"><a href="sports_login.php"><span>体育赛事</span></a>
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
        <!-- slideshow -->
        <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
            <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                <ul>
                    <li data-autoplaytime="5000">
                        <a href="#">
                            <div class="img" style="background-image: url('image/not-use/slider01.png');"></div>
                        </a>
                    </li>
                    <li data-autoplaytime="5000">
                        <a href="#">
                            <div class="img" style="background-image: url('image/not-use/slider02.png');"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.slideshow -->
        <div id="page-container">
            <div class="page-bg">
                <div id="page-body">
                    <!-- first -->
                    <div class="first-wrap">
                        <!-- news-->
                        <div id="news" class="news">
                            <div class="news-title">最新消息</div>
                            <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                                <p>
                                    【 超大惊喜 】新注册开户惊喜，送18元体验金，赢到100即可申请提款。
                                </p>
                            </marquee>
                        </div>
                        <!-- /.news -->
                        <!-- first-game -->
                        <div class="first-game clearfix">
                            <a href="sports.php" class="first-game01"></a>
                            <a href="live.php" class="first-game02"></a>
                            <a href="casino_login.php" class="first-game03"></a>
                            <a href="lottery.php" class="first-game04"></a>
                        </div>
                        <!-- /.first-game -->
                        <!-- first-btn -->
                        <div class="first-btn-wrap">
                            <ul class="first-btn clearfix">
                                <li class="first-btn-title">
                                    <img src="image/lang/zh-cn/first_title.png" />
                                </li>
                                <li class="first-btn-promotions">
                                    <img src="image/first_01.png" />
                                </li>
                                <li class="first-btn-joinus">
                                    <a href="#" class="first-btn-joinus-link">
                                        立即加入
                                    </a>
                                    <img src="image/lang/zh-cn/first_bg_join.png" />
                                </li>
                                <li class="first-btn-mobi">
                                    <a href="#" class="first-btn-mobi-link">
                                        立即下载
                                    </a>
                                    <img src="image/lang/zh-cn/first_bg_mobi.png" />
                                </li>
                            </ul>
                        </div>
                        <!-- /.first-btn -->
                    </div>
                    <!-- first -->
                </div>
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

    <?php include '../template/base.php' ?>
    <!-- Slideshow for this template -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isArrow: 1
    });
    </script>
</body>

</html>
