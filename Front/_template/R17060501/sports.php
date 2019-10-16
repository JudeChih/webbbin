<!DOCTYPE html>
<html class="ball is-login zh-cn">
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
                            <li id="LS-ball" class="current">
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
                    <div class="ball-wrap">
                        <?php include "../template/sports/index.php"; ?>
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
    <script src="js/main_sports.js"></script>
    <script src="js/main.js"></script>
</body>
</html>