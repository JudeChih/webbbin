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
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="帐号">
                            </div>
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="密码">
                            </div>
                            <div class="inputall2">
                                <input type="text" class="form-control" placeholder="验证码">
                            </div>
                            <div>
                                <a href="index_login.php" class="btn-submit">登入</a>
                            </div>
                            <div class="getPW">
                                <a href="#">忘记密码</a>｜<a href="#">加入会员</a>
                            </div>
                        </ul>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
            <div class="mainnav" data-lsub-y="13">
                <ul class="nav">
                    <li id="LS-first"><a href="index.php" class="current"><span>首页</span></a></li>
                    <li id="LS-ball"><a href="sports_login.php"><span>体育赛事</span></a>
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
            <div id="header2">
                <div id="ADbanner-bg">
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider01.png">
                                    </a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider02.png">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--end slideshow-->
                    <div class="news-wrap">
                        <div class="news-item">
                            <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div class="first-banner">
                <div class="scroll-banner banner-product">
                    <div class="img" style="background: url('image/title_home02.png');"></div>
                </div>
            </div>
            <div class="page-game-body">
                <div id="game-body">
                    <div id="hometxt">
                        <img src="image/home_txt01.png" />
                    </div>
                    <div id="gamebox">
                        <ul id="btn-gameall">
                            <li class="btn-game">
                                <a href="#">
                                    <img src="image/lang/zh-cn/game01.png" data-alt-src="image/lang/zh-cn/game01_over.png" /></a>
                            </li>
                            <li class="btn-game">
                                <a href="#">
                                    <img src="image/lang/zh-cn/game02.png" data-alt-src="image/lang/zh-cn/game02_over.png" /></a>
                            </li>
                            <li class="btn-game">
                                <a href="#">
                                    <img src="image/lang/zh-cn/game03.png" data-alt-src="image/lang/zh-cn/game03_over.png" /></a>
                            </li>
                            <li class="btn-game">
                                <a href="#">
                                    <img src="image/lang/zh-cn/game04.png" data-alt-src="image/lang/zh-cn/game04_over.png" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-service">
            <div class="first-banner">
                <div class="scroll-banner banner-service">
                    <div class="img" style="background: url('image/title_home03.png');"></div>
                </div>
            </div>
            <div id="service-body">
                <div id="service_01">
                    <img src="image/home_tit02.png" />
                    <img src="image/service.gif" />
                    <a href="#">
                        <img src="image/joinus_btn.png" data-alt-src="image/joinus_btn_over.png" /></a>
                </div>
                <div id="service_01">
                    <a href="#">
                        <img src="image/promotions_btn.png" data-alt-src="image/promotions_btn_over.png" /></a>
                </div>
                <div id="service_01">
                    <a href="#">
                        <img src="image/service_btn.png" data-alt-src="image/service_btn_over.png" /></a>
                    <img src="image/home_txt02.png" />
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
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/scroll.js"></script>
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
