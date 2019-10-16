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
            <div id="header">
                <div class="header-top">
                    <div class="header-right">
                        <div id="login">
                            <!--lang-->
                            <div class="lang-wrap">
                                <a href="#" title="简体中文" class="lang-option lang-zh-cn"></a>
                                <a href="#" title="繁體中文" class="lang-option lang-zh-tw"></a>
                                <a href="#" title="English" class="lang-option lang-en"></a>
                            </div>
                            <!--end of lang-->
                            <ul>
                                <form class="login-input form-group">
                                    <p>
                                        <input type="text" class="form-control name" placeholder="帐号">
                                        <input type="text" class="form-control name" placeholder="密码">
                                        <input type="text" class="form-control key" placeholder="验证码">
                                </form>
                            </ul>
                            <ul class="btn-submit"><a href="index_login.php">登 入</a></ul>
                            <ul class="getPW">
                                <a href="#">忘记密码</a>
                                <li>｜</li>
                                <a href="#">加入会员</a></ul>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <ul class="mainnav">
                        <li id="LS-first" class="current"><a href="index.php"><span>首页</span></a></li>
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
            </div>
            <div id="header2">
                <div id="ADbanner-bg">
                    <!-- slideshow -->
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#"><div class="img" style="background-image: url('image/not-use/slider01.jpg');"></div></a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#"><div class="img" style="background-image: url('image/not-use/slider02.jpg');"></div></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.slideshow -->
                    <div class="slide_buttons">
                    </div>
                    <div class="directional_nav">
                        <div class="previous_btn" title="Previous">
                        </div>
                        <div class="next_btn" title="Next">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body" class="game-body">
                <div>
                    <div id="first-btn-wrap">
                        <div class="gameBox">
                            <ul class="gameBox-list">
                                <li>
                                    <a href="#" class="btn-game01"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game02"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game03"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game04"></a>
                                </li>
                        </div>
                        <div class="news-wrap">
                            <div class="news-item">
                                <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                            </div>
                        </div>
                    </div>
                    <div class="gameSLG">
                        <p><span>OUR PRODUCTS</span><br />
                            <br />
                        </p>
                        <p>We hope to provide you the best entertainment by <br />
                            enhancing user interaction experience,<br />
                            and providing superior visual effects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer2 clearfix">
                <div class="about">
                    <div class="long short1">
                        <h2>颠覆性产品</h2>
                        <p>每一款全新上线的BB casino产品都是经过大量测试後证实最符合亚洲人的产品，这是一个对既定现状做出强势挑战的创新团队。</p>
                    </div>
                    <div class="long short2">
                        <h2>电子游艺</h2>
                        <p>我们的游戏包括轮盘、电子扑克、老虎机等...在线娱乐场游戏。此外您更有机会赢得累积超级奖金。</p>
                    </div>
                    <div class="long short3">
                        <h2>快乐彩</h2>
                        <p>BB快乐彩大小单双1.86赔率全球最高全面覆盖PC/苹果/Wap等所有网络移动终端。</p>
                    </div>
                    <div class="long short4">
                        <h2>体育平台</h2>
                        <p>BB体育拥有市面最快滚球确认系统，让你走到那都能一手掌握赛事瞬间。</p>
                    </div>
                    <div class="long short5">
                        <h2>真人娱乐城</h2>
                        <p>BB娱乐城坐拥AG/欧博/东方3大平台，所有游戏经由TST Game国际认证并保证公平公正。</p>
                    </div>
                    <div class="long_bottom">
                        <h2>PAYMENT METHODS</h2>
                        <p class="icon"></p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
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
    </div>
    <?php include '../template/base.php' ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    $('#js-ele-slideshow').slideshow({
        isArrow: 1
    });
    </script>
</body>

</html>
