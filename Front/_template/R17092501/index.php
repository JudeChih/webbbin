<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN - 首頁</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="loading">
        <!-- page-header -->
        <div id="page-header">
            <div class="header-main">
                <div class="header-top container clearfix">
                    <!-- logo -->
                    <div class="logo">
                        <a href="index.php"></a>
                    </div>
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <div class="mainnav">
                            <ul class="clearfix">
                                <li class="mobile-lang-wrap">
                                    <div id="ele-lang-wrap" class="ele-lang-wrap">
                                        <div class="ele-lang-title">
                                            <a href="#" class="flag02"><i></i>简体中文</a>
                                        </div>
                                        <div id="ele-lang-group" class="ele-lang-group" style="display: none;">
                                            <a href="#" class="ele-lang-option flag01"><i></i>繁體中文</a>
                                            <a href="#" class="ele-lang-option flag02 ele-lang-current"><i></i>简体中文</a>
                                            <a href="#" class="ele-lang-option flag03"><i></i>ENGLISH</a>
                                        </div>
                                    </div>
                                </li>
                                <li id="LS-first" class="current">
                                    <a href="index.php" title="首页">首页</a>
                                </li>
                                <li id="LS-ball" class="LS-ball drop-down">
                                    <a href="#" class="drop-menu" title="体育赛事"><i></i>体育赛事</a>
                                    <div id="nav-ball" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-live" class="LS-live drop-down">
                                    <a href="#" class="drop-menu" title="视讯直播"><i></i>视讯直播</a>
                                    <div id="nav-live" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-game" class="LS-game drop-down">
                                    <a href="#" class="drop-menu" title="电子游艺"><i></i>电子游艺</a>
                                    <div id="nav-game" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-lottery">
                                    <a href="lottery.php" title="彩票游戏">彩票游戏</a>
                                </li>
                                <li id="LS-memberexclusiveii" class="LS-memberexclusiveii">
                                    <a href="promotions.php" title="优惠活动">优惠活动</a>
                                </li>
                                <li id="LS-mobile" class="LS-mobile">
                                    <a href="#" title="手机下注">手机下注</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 導覽列 mainnav RWD 型態的觸發按鈕 -->
                    <div class="main-btn clearfix">
                        <a href="#0" class="btn-nav"></a>
                        <a href="#0" class="btn-member"></a>
                    </div>
                </div>
                <!-- 四大產品 fitst-game -->
                <div class="first-game-wrap">
                    <div class="first-game-main">
                        <ul class="container clearfix">
                            <li class="first-game first-game01">
                                <a href="#0"><img src="image/game01_over.png"></a>
                            </li>
                            <li class="first-game first-game02">
                                <a href="#0"><img src="image/game02_over.png"></a>
                            </li>
                            <li class="first-game first-game03">
                                <a href="#0"><img src="image/game03_over.png"></a>
                            </li>
                            <li class="first-game first-game04">
                                <a href="#0"><img src="image/game04_over.png"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="first-gaame-bg"></div>
                </div>
                <div class="header-bottom">
                    <div class="news-lang-wrap">
                        <div class="news-lang-main container clearfix">
                            <!-- 最新消息 news -->
                            <div class="news-wrap">
                                <h3>最新消息</h3>
                                <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="6" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                                    <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                                </marquee>
                            </div>
                            <!-- dekstop Lang -->
                            <div class="lang-wrap">
                                <a href="#" class="cn flag01"></a>
                                <a href="#" class="tw flag02"></a>
                                <a href="#" class="en flag03"></a>
                            </div>
                        </div>
                    </div>
                    <!-- 登入前 login -->
                    <div class="account-wrap">
                        <div class="account-inner">
                            <div class="login-wrap container clearfix">
                                <div class="account-title">
                                    <div class="login-title"></div>
                                </div>
                                <div class="login-input">
                                    <div class="login-unit login-unit-user">
                                        <input name="username" type="text" placeholder="帐号">
                                    </div>
                                    <div class="login-unit login-unit-pwd">
                                        <input name="passwd" type="text" placeholder="密码">
                                    </div>
                                    <div class="login-unit login-unit-chk">
                                        <input name="rmNum" type="text" placeholder="验证码">
                                    </div>
                                </div>
                                <div class="login-btn-group">
                                    <a href="index_login.php" class="login-submit">登入</a>
                                    <div class="login-link">
                                        <a href="#0">忘记密码</a>
                                        <a href="#0" class="login-link-last">加入会员</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="first-wrap container clearfix">
                    <!-- 四大產品 first-game -->
                    <div class="first-game-inner clearfix">
                        <div class="first-game-bc"></div>
                    </div>
                    <!-- <div class="ele-firstgame-wrap" onselectstart="return false">
                        <div class="clearfix ele-firstgame" id="js-firstgame-slider">
                            <a href="sports_login.php" class="ele-firstgame-1 js-ele-firstgame-fade">
                            </a>
                            <a href="live.php" class="ele-firstgame-2 js-ele-firstgame-fade">
                            </a>
                            <a href="casino_login.php" class="ele-firstgame-3 js-ele-firstgame-fade">
                            </a>
                            <a href="lottery.php" class="ele-firstgame-4 js-ele-firstgame-fade">
                            </a>
                        </div>
                    </div> -->
                    <!-- 輪播圖 slideshow -->
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap">
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
                            <div class="js-ele-slideshow-text-wrap ele-slideshow-text-wrap">
                                <img src="image/not-use/slider01t.png" class="ele-slideshow-text ele-text-position0" data-index="ele-slideshow-text0">
                                <img src="image/not-use/slider02t.png" class="ele-slideshow-text ele-text-position1" data-index="ele-slideshow-text1">
                            </div>
                        </div>
                        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                    </div>

                    <div class="first-btn-wrap">
                        <a href="#" class="first-btn01"></a>
                        <a href="#" class="first-btn02"></a>
                        <a href="#" class="first-btn03"></a>
                        <a href="#" class="first-btn04"></a>
                    </div>

                    <div class="first-game-group clearfix">
                        <div class="first-live">
                            <div class="first-live-bbinlogo"></div>
                            <div class="first-live-title">
                                <img src="image/first_live_title.png" alt="">
                                <div class="first-live-line"></div>
                            </div>
                            <div class="first-live-content">
                                <p>让您在何处都能体验真实赌场刺激愉快的感官享受。</p>
                                <p class="first-game-en">Make you can experience and enjoy real casino‘s excited sensation everywhere.</p>
                            </div>
                            <div class="first-btn">
                                <a href="live.php" class="first-btn-more">MORE</a>
                            </div>
                        </div>
                        <div class="first-sports">
                            <div class="first-game-col">
                                <div class="first-game-img"><img src="image/first_sports.png" alt=""></div>
                                <p>全世界主要的体育运动，并保证提供最即时的赛事结果。</p>
                                <a href="sports_login.php" class="first-btn-more">MORE</a>
                            </div>
                        </div>
                        <div class="first-casino">
                            <div class="first-game-col">
                                <div class="first-game-img"><img src="image/first_casino.png" alt=""></div>
                                <p>多种线数组合的老虎机，应有尽有。</p>
                                <p class="first-game-en">There are multiple line combinationslot machines.There are multiple line combination slot machines.</p>
                                <a href="casino_login.php" class="first-btn-more">MORE</a>
                            </div>
                        </div>
                        <div class="first-lottery">
                            <div class="first-game-col">
                                <div class="first-game-img"><img src="image/first_lottery.png" alt=""></div>
                                <p>我們提供世界各城市與各國彩票遊戲。</p>
                                <a href="lottery.php" class="first-btn-more">MORE</a>
                            </div>
                        </div>

                        <div class="first-img"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-link container">
                        <ul>
                            <li>
                                <a href="about.php">关于我们</a>
                            </li>
                            <li>
                                <a href="#0">联络我们</a>
                            </li>
                            <li>
                                <a href="#0">合作伙伴</a>
                            </li>
                            <li>
                                <a href="#0">存款帮助</a>
                            </li>
                            <li>
                                <a href="#0">取款帮助</a>
                            </li>
                            <li>
                                <a href="#0">常见问题</a>
                            </li>
                            <li>
                                <a href="#0">责任博彩</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-content container clearfix">
                    <div class="footer-content-wrap clearfix">
                        <div class="footer-content-about">
                            <h3>关于BBIN</h3>
                            <p>BBIN是一个可看见真实游戏环境的娱乐平台，在这里不仅可以体验丰富有趣的百家乐游戏，更可以与美丽的荷官共同在牌桌上斗智力拼运气。</p>
                        </div>
                        <div class="footer-content-help">
                            <h3>使用帮助</h3>
                            <ul>
                                <li><a href="#">优惠活动<span>Promotions</span></a></li>
                                <li><a href="#">代理合作<span>Affiliation</span></a></li>
                                <li><a href="#">在线客服<span>Online server</span></a></li>
                                <li><a href="#">下载中心<span>Download</span></a></li>
                            </ul>
                        </div>
                        <div class="footer-content-bank">
                            <h3>提供多种便捷付款方式</h3>
                            <img src="image/footer_img.png" alt="">
                        </div>
                    </div>
                    <div class="footer-content-desktop">
                        <div class="footer-content-info">
                            <h3>BBIN责任博彩</h3>
                            <p>提倡有节制赌博。望客户高兴与满意本公司提供的网上博彩服务。<br>我们会为客户在博彩自律方面提供多方面的帮助。<br>如您担心博彩绘严重影响您或他人生活，我们建议阁下遵守以下一些基本规则：</p>
                        </div>
                        <div class="footer-content-list clearfix">
                            <ul class="footer-content-list-l">
                                <li>禁止未满18岁的人士参与赌博游戏。加入游戏之前，请您确认您已满18周岁。</li>
                                <li>在登入我们系统时，请勿让年人士在萤光幕显示范围内观看或停留。</li>
                                <li>如果用户需要离开系统的操作范围，请谨慎使用密码锁住电脑。</li>
                                <li>用户务必将BBIN赌场帐户及密码放置安全地方。</li>
                                <li>切勿与未成年人士分享信用卡或帐户等相关资讯。</li>
                            </ul>
                            <ul>
                                <li>当用户从他人电脑登入BBIN赌场，或从远端位置（无线网吧，机场，酒店或其他公共场所）进行登录及娱乐活动时请留意是否已隔离任何未成年人士。</li>
                                <li>请勿过于沉迷游戏。</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-wrap container clearfix">
                        <div class="footer-info"></div>

                        <div class="footer-logo">
                            <a id="bblogo" href="#0">
                                <img src="image/not-use/gray.png" width="60">
                            </a>
                            <a id="browser-logo" href="#0">
                                <img src="image/not-use/ublogo/ublogo_g.png" width="100">
                            </a>
                        </div>

                        <div class="footer-copyright">COPYRIGHT © BBIN RESERVED</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- TOP 按鈕 -->
        <div class="btn-top">
            <i class="fa fa-angle-up"></i>
        </div>
        <!-- 關閉 close -->
        <div class="close-btn"></div>
        <!-- 遮罩 overlay -->
        <div class="overlay-bg"></div>
    </div>

    <script src="../template/js/vue.js"></script>
    <script src="../template/js/vue-app.js"></script>
    <script src="../template/js/ele-popup.js"></script>
    <script src="../template/js/ele-dropmenu.js"></script>
    <script src="../template/js/ele-common.js"></script>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script src="js/main.js"></script>
    <script src="js/first.js"></script>
</body>

</html>





<!-- <div class="first-game-inner clearfix">
    <a class="game-ball" href="#">
        <div class="game-img">
            <img class="img-pc" src="image/first_top_sports.jpg?v=ver11.97">
            <img class="img-mobile" src="image/first_top_sports_hover.jpg?v=ver11.97">
        </div>
        <h3 class="game-title">
            <p class="game-title-en">SPORTS</p>
            <p>體育賽事</p>
        </h3>
        <div class="game-btn-detail">DETAIL</div>
    </a>
    <a class="game-live" href="#">
        <div class="game-img">
            <img class="img-pc" src="image/first_top_live.jpg?v=ver11.97">
            <img class="img-mobile" src="image/first_top_live_hover.jpg?v=ver11.97">
        </div>
        <h3 class="game-title">
            <p class="game-title-en">LIVE CASINO</p>
            <p>視訊直播</p>
        </h3>
        <div class="game-btn-detail">DETAIL</div>
    </a>
    <a class="game-casino" href="#">
        <div class="game-img">
            <img class="img-pc" src="image/first_top_game.jpg?v=ver11.97">
            <img class="img-mobile" src="image/first_top_game_hover.jpg?v=ver11.97">
        </div>
        <h3 class="game-title">
            <p class="game-title-en">CASINO</p>
            <p>電子遊藝</p>
        </h3>
        <div class="game-btn-detail">DETAIL</div>
    </a>
    <a class="game-lottery" href="#">
        <div class="game-img">
            <img class="img-pc" src="image/first_top_lottery.jpg?v=ver11.97">
            <img class="img-mobile" src="image/first_top_lottery_hover.jpg?v=ver11.97">
        </div>
        <h3 class="game-title">
            <p class="game-title-en">LOTTERY</p>
            <p>彩票遊戲</p>
        </h3>
        <div class="game-btn-detail">DETAIL</div>
    </a>
</div> -->