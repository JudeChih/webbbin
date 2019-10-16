<!DOCTYPE html>
<html class="first zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css?v=0.1">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
    <script src="js/jquery.js"></script>
</head>
<body>
    <div id="mainBody" class="wrap">
        <!-- HEADER -->
        <div id="page-header" class="header-bg">
            <div class="header-main clearfix">
                <div class="header-logo">
                    <a href="index.php"></a>
                </div>
                <div class="mainnav header-nav clearfix">
                    <ul class="basic removeTextNodes clearfix">
                        <li id="LS-first" class="active"><a href="index.php">首页</a></li>
                        <li id="LS-ball">
                            <a href="sports.php" class="subClick">体育赛事</a>
                            <ul id="nav-ball" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                            </ul>
                        </li>
                        <li id="LS-live"><a href="live.php">视讯直播</a></li>
                        <li id="LS-game">
                            <a href="casino_login.php" class="subClick">电子游艺</a>
                            <ul id="nav-game" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                            </ul>
                        </li>
                        <li id="LS-ltlottery"><a href="lottery.php">彩票游戏</a></li>
                        <li id="LS-memberexclusiveii"><a href="promotions.php">优惠活动</a></li>
                        <li id="LS-rmobile"><a href="#0">手機下注</a></li>
                        <li id="LS-service"><a href="#0">在线客服</a></li>
                    </ul>
                    <div class="header-langSelect">
                        <select>
                            <option>繁體中文</option>
                            <option selected="selected">简体中文</option>
                            <option>English</option>
                        </select>
                    </div>
                </div>
                <div class="header-lang">
                    <a href="#0"><img src="image/not-use/cn.png"></a>
                </div>
                <span class="header-nav-btn"></span>
                <span class="header-login-btn"></span>
            </div>
        </div>
        <!-- CONTAINER -->
        <div id="page-container" class="container">
            <div id="page-body">
                <!-- TOP START-->
                <div class="first-top-bg clearfix">
                    <div class="first-top-main">
                        <!-- LOGIN START-->
                        <div class="login-wrap first-login">
                            <div class="login-bg">
                                <div class="login-title">
                                    <h2>会员登入</h2>
                                </div>
                                <div class="login-input user">
                                    <input type="text" placeholder="帐号">
                                </div>
                                <div class="login-input pwd">
                                    <input type="text" placeholder="密码">
                                </div>
                                <div class="login-input chk">
                                    <input type="text" placeholder="验证码">
                                </div>
                                <div class="login-btn">
                                    <a href="index_login.php">登　　入</a>
                                </div>
                                <div class="login-link">
                                    <a href="#0">忘记密码</a>
                                    <span>/</span>
                                    <a href="#0">加入会员</a>
                                </div>
                                <span class="login-close"></span>
                            </div>
                        </div>
                        <div class="first-top-content">
                            <div class="title"></div>
                            <ul class="clearfix">
                                <li>
                                    <a href="sports.php">
                                        <div class="img">
                                            <img src="image/first_top_sports.jpg" class="img-orign">
                                            <img src="image/first_top_sports_hover.jpg" class="img-hover">
                                        </div>
                                        <h2>
                                            <span class="en">SPORTS</span>
                                            <span class="lang">体育赛事</span>
                                        </h2>
                                        <span class="detail">DETAIL</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="live.php">
                                        <div class="img">
                                            <img src="image/first_top_live.jpg" class="img-orign">
                                            <img src="image/first_top_live_hover.jpg" class="img-hover">
                                        </div>
                                        <h2>
                                            <span class="en">LIVE CASINO</span>
                                            <span class="lang">视讯直播</span>
                                        </h2>
                                        <span class="detail">DETAIL</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="casino_login.php">
                                        <div class="img">
                                            <img src="image/first_top_game.jpg" class="img-orign">
                                            <img src="image/first_top_game_hover.jpg" class="img-hover">
                                        </div>
                                        <h2>
                                            <span class="en">CASINO</span>
                                            <span class="lang">电子游艺</span>
                                        </h2>
                                        <span class="detail">DETAIL</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="lottery.php">
                                        <div class="img">
                                            <img src="image/first_top_lottery.jpg" class="img-orign">
                                            <img src="image/first_top_lottery_hover.jpg" class="img-hover">
                                        </div>
                                        <h2>
                                            <span class="en">LOTTERY</span>
                                            <span class="lang">彩票游戏</span>
                                        </h2>
                                        <span class="detail">DETAIL</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- TOP END-->
                <!-- MARQUEE START-->
                <div class="first-news-bg">
                    <div class="first-news-main">
                        <div class="first-news-content">
                            <div class="first-news-title">
                                <span>NEWS</span><h2>最新消息</h2>
                            </div>
                            <marquee class="first-news-marquee" scrollamount="2" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">
                                <a href="#0">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过...</a>
                            </marquee>
                        </div>
                    </div>
                </div>
                <!-- MARQUEE END-->
                <!-- SPORTS START-->
                <div class="first-sports-bg">
                    <div class="first-sports-main">
                        <div class="first-sports-content">
                            <div class="first-sports-title">
                                <img src="image/first_title_sports.png" class="desktop">
                                <img src="image/first_title_sports_m.png" class="mobile">
                                <h2>精彩刺激的BB体育赛事</h2>
                            </div>
                            <div class="first-sports-intro">
                                <ul>
                                    <li>
                                        <h2>欧洲五大联赛</h2>
                                        <p>体育在线投注是线上体育游戏娱乐姓的平台，将体育游戏赋予游戏化的多重玩法，以娱乐的形式与互动。</p>
                                    </li>
                                    <li>
                                        <h2>各类体育赛事</h2>
                                        <p>不同类别的体育赛事，涵盖世界范围内主要体育运动包括足球、美式足球、篮球、羽毛球、棒球、板球、曲棍球、手球、排球等等。</p>
                                    </li>
                                    <li>
                                        <h2>世界足坛顶尖赛事</h2>
                                        <p>目前有波音平台与沙巴平台，在游戏中体验的不仅仅是看球的乐趣。</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="first-btn-more first-sports-btn"><a href="sports.php"></a></div>
                        <div class="first-sports-img">
                            <img src="image/first_img_sports.jpg">
                        </div>
                    </div>
                </div>
                <!-- SPORTS END-->
                <!-- LIVE START-->
                <div class="first-live-bg">
                    <div class="first-live-main clearfix">
                        <div class="first-live-content">
                            <div class="first-live-title">
                                <img src="image/first_title_live.png">
                                <h2>身历其境 无时差</h2>
                            </div>
                            <div class="first-live-intro">
                                24小时营运的视讯直播产品，品项多样为亚洲之冠，以清晰的直播画面提供百家乐、德州扑克、温州牌九、轮盘、番摊和骰宝等多款热门产品，保证玩家在线上浏览最即时与公平的游戏实况，在任何地点都能体验如亲临现场般刺激愉快的感官享受。
                            </div>
                            <img src="image/first_betitem01.png" class="first-live-img01">
                            <img src="image/first_betitem02.png" class="first-live-img02">
                            <img src="image/first_betitem03.png" class="first-live-img03">
                            <img src="image/first_betitem04.png" class="first-live-img04">
                            <img src="image/first_betitem05.png" class="first-live-img05">
                        </div>
                        <div class="first-btn-more first-live-btn"><a href="live.php"></a></div>
                    </div>
                </div>
                <!-- LIVE END-->
                <!-- LOTTERY START-->
                <div class="first-lottery-bg">
                    <div class="first-lottery-main clearfix">
                        <div class="first-lottery-content">
                            <div class="first-lottery-title">
                                <img src="image/first_title_lottery.png">
                                <h2>创新娱乐大升级</h2>
                            </div>
                            <div class="first-lottery-intro">
                                近年来我们致力于投资开发多种类的彩票游戏，2014年更打造了电视台等级数位摄影棚，并推出亚洲首创Lottery Live Show ─ BB LOTTO LIVE SHOW，以创新的节目方式让彩票产品娱乐升级。3D时时彩、快乐彩及滚球王，皆为BBIN自主研发的彩票产品，满足玩家多变的需求。
                            </div>
                        </div>
                        <div class="first-btn-more first-lottery-btn"><a href="lottery.php"></a></div>
                        <div class="first-lottery-img">
                            <span><img src="image/first_img_lottery.jpg"></span>
                        </div>
                        <div class="first-lottery-line"></div>
                    </div>
                </div>
                <!-- LOTTERY END-->
                <!-- GAME START-->
                <div class="first-game-bg">
                    <div class="first-game-main clearfix">
                        <div class="first-game-content">
                            <div class="first-game-title">
                                <img src="image/first_title_game.png">
                                <h2 class="clearfix"></h2>
                            </div>
                            <div class="first-game-intro">
                                BBIN提供超过百款机率游戏，近年来更积极开发多人对战游戏，希望能以丰富的玩法、视觉及声光效果提供顶级的娱乐享受，BBIN只想给您充满娱乐享受的游戏体验。
                            </div>
                            <div class="first-btn-more first-game-btn"><a href="casino_login.php"></a></div>
                            <div class="first-game-img">
                                <ul class="clearfix">
                                    <li class="img01"><img src="image/first_img_game01.jpg"></li>
                                    <li class="img02"><img src="image/first_img_game02.jpg"></li>
                                    <li class="img03"><img src="image/first_img_game03.jpg"></li>
                                </ul>
                            </div>
                            <div class="first-game-line"></div>
                        </div>
                    </div>
                </div>
                <!-- GAME END-->
            </div>
        </div>
        <!-- FOORTER -->
        <div id="page-footer" class="footer-bg">
            <div class="footer-info clearfix">
                <div class="footer-content clearfix">
                    <div class="footer-link">
                        <ul class="removeTextNodes">
                            <li><a href="about.php">关于我们</a></li>
                            <li><a href="#0">联系我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li class="last"><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="footer-pay">
                        <h2>提供多种快速且便利的付款方式</h2>
                        <div class="img removeTextNodes">
                            <img src="image/footer_pay_img01.png">
                            <img src="image/footer_pay_img02.png">
                            <img src="image/footer_pay_img03.png">
                            <img src="image/footer_pay_img04.png" class="last">
                        </div>
                    </div>
                    <div class="footer-partner">
                        <h2>合作伙伴</h2>
                        <div class="img removeTextNodes">
                            <img src="image/footer_logo01.png">
                            <img src="image/footer_logo02.png">
                            <img src="image/footer_logo03.png">
                            <img src="image/footer_logo04.png">
                            <img src="image/footer_logo05.png">
                            <img src="image/footer_logo06.png">
                            <img src="image/footer_logo07.png" class="last">
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom clearfix">
                <div class="footer-content clearfix">
                    <div class="footer-glc">
                        <h2>责任博彩</h2>
                        <p>
                            <span>BBIN 游戏由具公信力的第三方单位 GLI 进行认证，确保游戏公平性，保护玩家权益，其用心值得肯定。</span>
                            <img src="image/footer_glc.png">
                        </p>
                    </div>
                    <div class="footer-copyright">
                        <div class="logo removeTextNodes">
                            <a href="#0"><img src="image/footer_logo_bbin.png" class="bbin"></a>
                            <a href="#0"><img src="image/footer_logo_ub.png"></a>
                        </div>
                        <p>COOPYRIGHT © BBIN RESERVED</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- LOGIN END-->
        <!-- LANG START -->
        <div id="lang-wrap" class="lang-wrap">
            <div class="lang-ttl">
                <img src="image/lang/zh-cn/lang_title.png" />
            </div>
            <div class="lang-content">
                <div class="lang-lang active"><span>简体中文</span></div>
                <div class="lang-button">
                    <ul>
                        <li><a href=""><span><i class="lang icon-tw"></i></span><b>繁體中文</b></a></li>
                        <li class="active"><a href=""><span><i class="lang icon-cn"></i></span><b>简体中文</b></a></li>
                        <li><a href=""><span><i class="lang icon-vi"></i></span><b>Vietnam</b></a></li>
                        <li><a href=""><span><i class="lang icon-ug"></i></span><b>Uighur</b></a></li>
                        <li><a href=""><span><i class="lang icon-th"></i></span><b>คนไทย</b></a></li>
                        <li><a href=""><span><i class="lang icon-lo"></i></span><b>Lao</b></a></li>
                        <li><a href=""><span><i class="lang icon-ko"></i></span><b>한국어</b></a></li>
                        <li><a href=""><span><i class="lang icon-ca"></i></span><b>Cambodia</b></a></li>
                        <li><a href=""><span><i class="lang icon-id"></i></span><b>Indonesia</b></a></li>
                        <li><a href=""><span><i class="lang icon-es"></i></span><b>Español</b></a></li>
                        <li><a href=""><span><i class="lang icon-en"></i></span><b>English</b></a></li>
                    </ul>
                </div>
            </div>
            <span class="lang-close"></span>
        </div>
        <!-- LANG END-->
    </div>
    <span id="navMask" class="mask-bg"></span>
    <span id="loginMask" class="mask-bg"></span>
    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
</body>
</html>
