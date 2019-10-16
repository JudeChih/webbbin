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
        <!-- HEADER -->
        <div id="page-header">
            <div class="header-main clearfix">
                <div class="header-top clearfix">
                    <div class="header-logo"><a href="index.php"><img src="image/logo.png"></a></div>

                    <!-- MENU -->
                    <div class="mainnav-btn-nav"></div>
                    <div class="mainnav-wrap clearfix">
                        <ul class="mainnav removeTextNodes">
                            <li id="LS-first">
                                <a href="index.php">首页</a>
                            </li>
                            <li id="LS-ball">
                                <a href="#0" class="subClick">体育赛事</a>
                                <ul id="nav-ball" class="subList">
                                    <li v-for="todo in todos"><a :href="todo.link">{{ todo.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-live">
                                <a href="live.php">视讯直播</a>
                            </li>
                            <li id="LS-game">
                                <a href="#0" class="subClick">电子游艺</a>
                                <ul id="nav-game" class="subList">
                                    <li v-for="todo in todos"><a :href="todo.link">{{ todo.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-ltlottery">
                                <a href="lottery.php">彩票游戏</a>
                            </li>
                            <li id="LS-memberexclusiveii">
                                <a href="promotions.php">优惠活动</a>
                            </li>
                        </ul>
                    </div>

                    <!-- LANG -->
                    <div id="ele-lang-wrap" class="ele-lang-wrap">
                        <a id="js-ele-lang" class="btn-icon" href="#lang">
                            <i class="icon icon-lang icon-cn"></i>
                        </a>
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

                    <!-- MEMBER_ICON -->
                    <div class="mainnav-btn-member"></div>
                </div>

                <!-- LOGIN -->
                <div class="login-wrap">
                    <div class="login-main removeTextNodes">
                        <div class="login-title"><h2>会员登入</h2></div>
                        <div class="login-unit login-unit-user">
                            <input name="username" type="text" placeholder="帐号">
                        </div>
                        <div class="login-unit login-unit-pwd">
                            <input name="passwd" type="password" placeholder="密码">
                        </div>
                        <div class="login-unit login-unit-chk">
                            <input name="rmNum" type="text" placeholder="验证码">
                        </div>
                        <a href="index_login.php" class="login-submit">登入</a>
                        <p class="login-link">
                            <a href="#0" class="login-register">注册</a>
                            <a href="#0" class="login-forget">忘记密码</a>
                        </p>
                    </div>
                    <a href="#" class="login-close"></a>
                </div>
            </div>
        </div>

        <!-- CONTAINER -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-main">
                    <div class="page-cotainer clearfix">
                        <div class="page-left">
                            <ul>
                                <li><a href="#" class="active">BB体育</a></li>
                                <li><a href="#">体育投注</a></li>
                                <li><a href="#">视讯直播</a></li>
                                <li><a href="#">BB电子</a></li>
                                <li><a href="#">MG电子</a></li>
                                <li><a href="#">彩票游戏</a></li>
                                <li><a href="#">加入会员</a></li>
                            </ul>
                        </div>
                        <div class="page-right">
                            <div class="page-article">
                                <div class="about-title">关于我们</div>
                                <h3>关于BBIN</h3>
                                <p>BBIN线上娱乐城，登记注册于哥斯达黎加，为专业于系统、软体开发公司营运，公司员工总数超过1000人， 是负责任的博彩公司，一切博彩营业行为皆遵从哥斯特黎加政府博彩条约。</p>
                                <h23>安全与信誉保障</h3>
                                <p>严谨的风险控管，以及第三方资金保险，100％保证玩家资金。</p>
                                <p>真人娱乐视頻现场，持有菲律宾政府核发牌照，现场运营完全依照国际赌场管理条例。</p>
                                <p>BBIN为诺顿分级所评级的安全网站，绝无任何恶意软体。</p>
                                <p>进行任何游戏操作，皆使用相同帐号/密码，全程数据加密，玩家资料绝不外泄。</p>
                                <h3>优质服务</h3>
                                <p>BBIN不但拥有多元化的产品，以及最高的信誉保证，我们的用心随处可见，以服务会员不打烊的精神，24小时提供玩家种种的咨询与服务，让每位玩家有宾至如归的感觉。BBIN绝对是玩家最聪明的选择!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- FOOTER -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-pay">
                        <div class="footer-pay-title">多项付款方式可供选择让您更便利</div>
                        <ul>
                            <li><img src="image/footer_img01.png"></li>
                            <li><img src="image/footer_img02.png"></li>
                            <li><img src="image/footer_img03.png"></li>
                            <li><img src="image/footer_img04.png"></li>
                        </ul>
                    </div>
                    <div class="footer-about">
                        <p>关于 BBIN</p>
                        <p>BBIN营运的产品：</p>
                        <p>视讯直播、体育投注、彩票、电子游艺，均由官方博彩委员会颁发执照及进行监管。如临场般刺激愉快的感官享受。</p>
                    </div>
                </div>
                <div class="footer-bottom clearfix">
                    <div class="footer-bottom-wrap">
                        <div class="footer-copyright">
                            <ul class="footer-link clearfix">  
                                <li v-for="footerLink in footerLinks"><a :href="footerLink.link">{{footerLink.name}}</a></li>
                            </ul>
                            <p>Copyright &copy; BBIN Reserved</p>
                            <p class="footer-info"></p>
                        </div>
                        <div class="footer-logo">
                            <a id="bblogo" href="#0">
                                <img src="image/not-use/white.png" width="93">
                            </a>
                            <a id="browser-logo" href="#0">
                                <img src="image/ublogo.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    

    <?php include '../template/base.php'; ?>
    <script src="js/vue-app.js"></script>
    <script src="js/ele-popup.js"></script>
    <script src="js/ele-dropmenu.js"></script>
    <script src="js/ele-common.js"></script>
    <script src="js/main.js"></script>
</body>
</html>