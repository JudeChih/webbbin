<!DOCTYPE html>
<html class="madvertis at1 zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- page-header -->
        <div id="page-header">
            <div class="header-main">
                <div class="header-top clearfix">
                    <!-- logo -->
                    <div class="logo">
                        <a href="index.php"></a>
                    </div>
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <div class="mainnav">
                            <div class="mainnav-title">MENU</div>
                            <ul class="clearfix">
                                <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                                <li id="LS-ball" class="LS-ball">
                                    <a href="#" class="drop-menu"><span>体育赛事</span></a>
                                    <div id="nav-ball" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-live">
                                    <a href="#" class="drop-menu"><span>视讯直播</span></a>
                                    <div id="nav-live" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-game" class="LS-game">
                                    <a href="#" class="drop-menu"><span>电子游艺</span></a>
                                    <div id="nav-game" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                                <li id="LS-memberexclusiveii"><a href="promotions.php"><span>优惠活动</span></a></li>
                            </ul>
                            <div id="ele-lang-wrap" class="ele-lang-wrap">
                                <a id="js-ele-lang" class="btn-icon" href="#lang">
                                    <i class="icon icon-lang icon-cn"></i>
                                </a>
                            </div>
                        </div>
                        <span class="nav-close close-btn"></span>
                    </div>
                    <!-- 導覽列 mainnav RWD 型態的觸發按鈕 -->
                    <div class="mainnav-btn clearfix">
                        <a href="#0" class="btn-member"></a>
                        <a href="#0" class="btn-nav"></a>
                    </div>
                    <!-- 語系 lang -->
                    <div id="ele-popup-group" class="ele-popup-group">
                        <div class="popup-group-inner">
                            <div class="popup-lang-title">
                                <img src="image/lang/zh-cn/lang_title.png">
                                <p>简体中文</p>
                            </div>
                            <div class="popup-lang-wrap">
                                <a href="#" title="繁體中文"><i class="icon-lang icon-tw"></i><span>繁體中文</span></a>
                                <a href="#" title="简体中文" class="popup-lang-current"><i class="icon-lang icon-cn"></i><span>简体中文</span></a>
                                <a href="#" title="Vietnam"><i class="icon-lang icon-vi"></i><span>Vietnam</span></a>
                                <a href="#" title="Uighur"><i class="icon-lang icon-ug"></i><span>Uighur</span></a>
                                <a href="#" title="คนไทย"><i class="icon-lang icon-th"></i><span><คนไทย</span></a>
                                <a href="#" title="한국어"><i class="icon-lang icon-ko"></i><span>한국어</span></a>
                                <a href="#" title="日本語"><i class="icon-lang icon-ja"></i><span>日本語</span></a>
                                <a href="#" title="Indonesia"><i class="icon-lang icon-id"></i><span>Indonesia</span></a>
                                <a href="#" title="Español"><i class="icon-lang icon-es"></i><span>Español</span></a>
                                <a href="#" title="English"><i class="icon-lang icon-en"></i><span>English</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="page-title">
                        <img src="image/title_welcome.png">
                    </div>
                    <img src="image/title_welcome_img.png" alt="" class="page-title-img">
                    <!-- 登入前 login -->
                    <div class="login-wrap">
                        <div class="login-main clearfix">
                            <div class="login-title">LOGIN</div>
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
                                <p class="login-link">
                                    <a href="#0">忘记密码</a>
                                    <span> / </span>
                                    <a href="#0">加入会员</a>
                                </p>
                            </div>
                        </div>
                        <span class="login-close close-btn"></span>
                    </div>
                    <!-- 遮罩 overlay -->
                    <div class="overlay-bg"></div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-main clearfix">
                    <div class="page-sidebar">
                        <h2 class="page-sidebar-title">关于我们</h2>
                        <ul class="page-sidebar-content">
                            <li><a href="#0" class="active">关于我们</a></li>
                            <li><a href="#0">联络我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="page-right">
                        <h3 class="case-article-title">关于我们</h3>
                        <div class="page-article">
                            <!-- <p>
                                <span style="color:#FFFFFF; font-size: 30px; font-style: italic; font-weight: bold;">关于我们</span>
                            </p> -->
                            <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <br>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                            <br>
                            <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
                        </div>
                        <div class="page-article-welcome">WELCOME</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-link">
                        <h3>相关连结</h3>
                        <ul>
                            <li><a href="about.php">关于我们</a></li>
                            <li><a href="#0">联络我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <h3>联络方式</h3>
                        <ul>
                            <li class="footer-contact-phone">
                            客服专线: <span>+86-123-4567</span>
                            </li>
                            <li class="footer-contact-email">
                            客服信箱: <span>bbincasino@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <a id="bblogo" href="#0">
                        <img src="image/not-use/white.png" width="95">
                    </a>
                    <a id="browser-logo" href="#0">
                        <img src="image/not-use/ublogo/ublogo_k.png" width="239">
                    </a>
                </div>
                <div class="footer-info">test test test test test </div>
                <div class="footer-copyright">COPYRIGHT © BBIN RESERVED</div>
                
            </div>
        </div>
        <!-- TOP 按鈕 -->
        <span class="btn-top"><i class="fa fa-angle-up"></i></span>
    </div>

    <script src="../template/js/vue.js"></script>
    <script src="../template/js/vue-app.js"></script>
    <script src="../template/js/ele-popup.js"></script>
    <script src="../template/js/ele-dropmenu.js"></script>
    <script src="../template/js/ele-common.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
