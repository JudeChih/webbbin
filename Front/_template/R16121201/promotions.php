<!DOCTYPE html>
<html class="madvertis memberexclusiveii zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
    <script src="js/jquery.js"></script>
</head>
<body>
    <div id="mainBody" class="page-wrap promotions">
        <!-- HEADER -->
        <div id="page-header" class="header-bg">
            <div class="header-top">
                <div class="header-top-main removeTextNodes">
                    <div class="user">
                        <input type="text" placeholder="帐号">
                    </div>
                    <div class="pwd">
                        <input type="text" placeholder="密码">
                    </div>
                    <div class="chk">
                        <input type="text" placeholder="验证码">
                    </div>
                    <div class="loginBtn">
                        <a href="#0">登入</a>
                    </div>
                    <div class="link">
                        <a href="#0">加入会员</a>
                        <span> | </span>
                        <a href="#0">忘记密码</a>
                    </div>
                </div>
            </div>
            <div class="header-main clearfix">
                <div class="header-logo">
                    <a href="index.php"></a>
                </div>
                <div class="mainnav header-nav clearfix">
                    <ul class="basic removeTextNodes clearfix">
                        <li id="LS-first"><a href="index.php">首页</a></li>
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
                        <li id="LS-memberexclusiveii" class="active"><a href="promotions.php">优惠活动</a></li>
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
                <div class="page-bg">
                    <div class="page-main">
                        <div class="page-title">
                            <h2>优惠活动</h2>
                        </div>
                        <div id="memberexclusiveii-wrap">
                            <div class="memberexclusiveii-content">
                                <ul class="removeTextNodes clearfix">
                                    <li id="memExclusive_1" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions01">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event01.jpg" class="img-orign">
                                                <img src="image/not-use/event01_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>好运来了！在这幸运的月里，您将有机会赢得一百万大奖！</p></div>
                                        </a>
                                    </li>
                                    <li id="memExclusive_2" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions02">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event02.jpg" class="img-orign">
                                                <img src="image/not-use/event02_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>首次储值可享50%回馈金，存越多赚越多！</p></div>
                                        </a>
                                    </li>
                                    <li id="memExclusive_3" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions03">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event03.jpg" class="img-orign">
                                                <img src="image/not-use/event03_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>老虎机与桌上游戏累积大奖等着您来赢取！</p></div>
                                        </a>
                                    </li>
                                    <li id="memExclusive_4" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions04">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event04.jpg" class="img-orign">
                                                <img src="image/not-use/event04_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>超过一千两百万人民币等您来赢得！</p></div>
                                        </a>
                                    </li>
                                    <li id="memExclusive_5" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions05">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event05.jpg" class="img-orign">
                                                <img src="image/not-use/event05_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>財神來啦！不管輸贏，天天玩現金返水回饋1.2%</p></div>
                                        </a>
                                    </li>
                                    <li id="memExclusive_6" class="memExclusive">
                                        <a href="#0" class="promotionsImg promotions06">
                                            <div class="promotionsImgBox">
                                                <img src="image/not-use/event06.jpg" class="img-orign">
                                                <img src="image/not-use/event06_over.jpg" class="img-hover">
                                            </div>
                                            <div class="promotionsTtl"><p>享有红利次次存，次次送，绝不峰顶，免费彩金888元</p></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
        <!-- LOGIN START-->
        <div class="login-wrap">
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
