<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="utf-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <!--架構-->
    <div id="mainBody">
        <div id="page-header">
            <div class="header">
                <div class="header-top">
                    <!-- 登入區-->
                    <div id="login" class="login-logon-wrap">
                        <a href="#" class="login-btn"></a>
                        <div class="login-wrap">
                            <div class="login-bbin"></div>
                            <form class="login-input form-group">
                                <input type="text" placeholder="帐号" class="form-control name">
                                <input type="text" placeholder="密码" class="form-control password">
                                <input type="text" placeholder="验证码" class="form-control key">
                                <a class="btn-submit" href="index_login.php">LOGIN</a>
                            </form>
                            <ul class="login-ls">
                                <li><a href="#" class="btn-joinu">・加入会员</a></li>
                                <li><a href="#" class="getPW">・忘记密码</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--國旗區域-->
                    <div class="lang-wrap login-lang">
                        <a href="#" class="cn flag01"></a>
                        <a href="#" class="tw flag02"></a>
                        <a href="#" class="en flag03"></a>
                    </div>
                </div>
                <div class="header-wrap">
                    <a href="#" class="logo"></a>
                    <!--導覽列-->
                    <div class="mainnav" data-lsub-y="29">
                        <ul id="nav" class="clearfix">
                            <li id="LS-first" class="LS-first current"><a href="index.php">首页<span>HOME</span></a></li>
                            <li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事<span>SPORTS</span></a>
                                <!--子选单-->
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live" class="LS-live"><a href="live.php">视讯直播<span>LIVE CASINO</span></a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                            </li>
                            <li id="LS-game" class="LS-game "><a href="casino_login.php">电子游艺<span>CASINO</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏<span>LOTTERY</span></a></li>
                            <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="promotions.php" class="textGlitter">优惠活动<span>PROMOTIONS</span></a></li>
                            <li id="LS-mobile" class="LS-mobile"><a href="###">手机投注<span>MOBILE BET</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div id="first-game-slides">
                    <div class="slides-ctrl">
                        <a href="#" class="btn-prev" onclick="prev(); return false;"></a>
                        <a href="#" class="btn-next" onclick="next(); return false;"></a>
                        <div class="plus"></div>
                    </div>
                    <div class="first-game">
                        <a href="#" class="first-game01"></a>
                        <a href="#" class="first-game02"></a>
                        <a href="#" class="first-game03"></a>
                        <a href="#" class="first-game04"></a>
                    </div>
                </div>
                <div id="first-slider">
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
                </div>
                <div class="first-btn clearfix">
                    <a href="#" class="btn-vip"></a>
                    <a href="#" class="btn-hot"></a>
                </div>
                <div class="first-jp-news clearfix">
                    <div class="jp-wrap">
                        <div class="jp-title"></div>
                        <p>
                            6,977,618.12
                        </p>
                    </div>
                    <!-- 最新消息-->
                    <div id="first-news">
                        <div class="news-title"></div>
                        <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="2" direction="up" onmouseover="this.stop();" onmouseout="this.start();">
                            <p>
                                若当您无法顺利利用手机上网投注，请您使用手机登入，将您的 IP 以及资讯回报的代码提供给线上客服，我们会尽快帮您处理
                            </p>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer-top">
                <div class="footer-top-wrap">
                    <a href="#" class="btn-mobile"></a>
                    <div class="footer-slogan-list">
                        <div class="footer-slogan"></div>
                        <ul class="footer-list">
                            <li><a href="#" class="icon-guide">Guide <span>新手指南</span></a></li>
                            <li><a href="#" class="icon-download">Download <span>下载区</span></a></li>
                            <li><a href="#" class="icon-affiliation">Affiliation <span>代理专区</span></a></li>
                            <li><a href="#" class="icon-promotions">Promotions <span>优惠活动</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-wrap clearfix">
                    <div class="footer-link-copyright">
                        <div class="footer-link">
                            <ul>
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
                            </ul>
                        </div>
                        <div class="copyright">Copyright © BBIN Reserved</div>
                    </div>
                    <a href="#" class="ublogo"></a>
                    <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="85px"></a>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',
            isNav: 1

        });
    </script>
</body>

</html>
