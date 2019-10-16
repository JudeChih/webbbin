<!DOCTYPE html>
<html class="first is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody">
        <div class="bg01">
            <div class="bg_shadow">
                <div id="page-header">
                    <div class="header">
                        <a href="index.php" class="logo"></a>
                        <div class="header-right">
                            <div class="flag-wrap header-list">
                                <div class="lang-wrap">
                                    <a href="#" class="cn flag01"></a>
                                    <a href="#" class="tw flag02"></a>
                                    <a href="#" class="en flag03"></a>
                                </div>
                            </div>
                            <div class="logon-list">
                                <ul>
                                    <li><a href="#">会员中心</a></li>
                                    <li>|</li>
                                    <li><a href="#">线上存款</a></li>
                                    <li>|</li>
                                    <li><a href="#">线上取款</a></li>
                                    <li>|</li>
                                    <li><a href="#">额度转换</a></li>
                                    <li>|</li>
                                    <li><a href="#">未读讯息 <span>(1)</span></a></li>
                                    <li>|</li>
                                    <li><a href="index.php">登出</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mainnav">
                            <ul class="nav">
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-first"><a href="index.php" class="current"><span>首页</span></a></li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-ball" class="LS-ball ">
                                    <a href="sports_login.php" class=" " title="体育赛事">体育赛事</a>
                                    <div id="nav-ball" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
                                        </div>
                                    </div>
                                </li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-live"><a href="live.php"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-game">
                                    <a href="casino_login.php"><span>电子游艺</span></a>
                                    <div id="nav-game" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{game.name}}</a>
                                        </div>
                                    </div>
                                </li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-memberexclusiveii">
                                    <a href="#" class="textGlitter"><span>优惠活动</span></a>
                                </li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                                <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                                <li><img src="image/nav_line.png" width="2" height="70" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="new_bg">
                        <div class="news-wrap">
                            <div class="news-item">
                                <marquee id="ele-msgNews" behavior="scroll" scrollamount="1" direction="left" style="height:42px;">
                                    ※　即日起只要参与投注天天娱乐 所有四层彩金之电子游艺游戏，即有机会获得天天娱乐 每日之超级彩金特别奖!祝福尊贵的会员们拉中大奖! ※
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <div class="h_01">
                        <div id="logon">
                            <div class="login_welcome"></div>
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
                        <div class="slider">
                            <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                                <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                                    <ul>
                                        <li data-autoplaytime="5000">
                                            <a href="#">
                                                <div class="img" style="background-image: url('image/not-use/slider01.jpg');"></div>
                                            </a>
                                        </li>
                                        <li data-autoplaytime="5000">
                                            <a href="#">
                                                <div class="img" style="background-image: url('image/not-use/slider02.jpg');"></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--end slideshow-->
                        </div>
                    </div>
                </div>
                <div id="page-container">
                    <div id="page-body">
                        <div class="page_left">
                            <a href="#" class="btn_join_replace"></a>
                            <a href="#" class="btn_service"></a>
                            <div class="jp_bg">
                                <h3>
                                    <img src="image/jp_number.png" title="00,197,678,223">
                                </h3>
                            </div>
                        </div>
                        <div class="page_right">
                            <div class="first-game">
                                <a href="#" class="first-game01"></a>
                                <a href="#" class="first-game02"></a>
                                <a href="#" class="first-game03"></a>
                                <a href="#" class="first-game04"></a>
                                <a href="#" class="first-game05"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-footer">
                    <div class="footer">
                        <div class="footer_left">
                            <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="80px"></a>
                            <a href="#" class="ublogo"></a>
                        </div>
                        <div class="footer_right">
                            <div class="footer_list">
                                <ul>
                                    <li><a href="about.php">关于我们</a></li>
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
                            <div class="footer_line"></div>
                            <div class="copyright">Copyright © 天天娱乐 Reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    new toggleColor('.textGlitter', ['#FF0', '#fff'], 600);
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isNav: 1,
        isNumber: 1,
        navPosition: 'right'
    });
    </script>
</body>

</html>
