<!DOCTYPE html>
<html class="game game-bbin is-login zh-cn">
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
    <div id="mainBody" class="page-wrap">
        <!-- HEADER -->
        <div id="page-header" class="header-wrap">
            <div class="header-main">
                <div class="header-bg01"></div>
                <div class="header-bg02"></div>
                <div class="header-logo">
                    <a href="index.php"></a>
                </div>
                <div class="header-lang clearfix">
                    <a href="#0" class="header-lang-btn">
                        <img src="image/not-use/cn.png">
                        <span>简体中文</span>
                        <i class="arrow"></i>
                    </a>
                </div>
                <div class="header-nav">
                    <div class="header-nav-title">
                        <img src="image/nav_title.png">
                    </div>
                    <ul>
                        <li id="LS-first">
                            <a href="index.php">首页</a>
                        </li>
                        <li id="LS-ball">
                            <a href="sports.php">体育赛事</a>
                            <span class="subClick">体育赛事<i></i></span>
                            <ul id="nav-ball" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                            </ul>
                        </li>
                        <li id="LS-live">
                            <a href="live.php">视讯直播</a>
                        </li>
                        <li id="LS-game">
                            <a href="casino_login.php">电子游艺</a>
                            <span class="subClick">电子游艺<i></i></span>
                            <ul id="nav-game" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                            </ul>
                        </li>
                        <li id="LS-ltlottery">
                            <a href="lottery.php">彩票游戏</a>
                        </li>
                        <li id="LS-bbop">
                            <a href="#0">BB一元夺宝</a>
                        </li>
                        <li id="LS-memberexclusiveii">
                            <a href="promotions.php">优惠活动</a>
                        </li>
                        <li id="LS-rmobile">
                            <a href="#0">手机下注</a>
                        </li>
                        <li id="LS-service">
                            <a href="#0">在线客服</a>
                        </li>
                    </ul>
                    <div class="header-nav-lang">
                        <i></i>
                        <select>
                            <option>繁體中文</option>
                            <option selected="selected">简体中文</option>
                            <option>English</option>
                        </select>
                    </div>
                    <span class="header-nav-close"></span>
                </div>
                <div class="header-btn clearfix">
                    <a href="#0" class="btn-member"></a>
                    <a href="#0" class="btn-nav"></a>
                </div>
                <?php include '../template/casino/slider.php'; ?>
                <div class="login-wrap">
                    <div class="header-nav-title">
                        <img src="image/login_title02.png">
                    </div>
                    <div class="logon-main removeTextNodes">
                        <div class="logon-btn-member">
                            <a href="#0">会员中心</a>
                        </div>
                        <span class="logon-line"></span>
                        <div class="logon-info">
                            <div class="user">帐号：admin</div>
                            <div class="bbinamount">
                                余额：168.08
                                <i id="bbinAmount" class="fa fa-plus-square"></i>
                                <div class="logon-details">
                                    <ul>
                                        <li>体育投注余额：100.08</li>
                                        <li>AG视讯余额：---</li>
                                        <li>歐博视讯餘額：68.00</li>
                                        <li>OG视讯餘額：---</li>
                                        <li>GD视讯餘額：---</li>
                                        <li>PT电子餘額：---</li>
                                        <li>MG电子餘額：---</li>
                                        <li>GNS电子餘額：---</li>
                                        <li>ISB电子餘額：---</li>
                                    </ul>
                                    <div class="logon-details-btn">
                                        <a href="#0">餘額轉換</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="logon-line"></span>
                        <div class="logon-member">
                            <ul class="removeTextNodes">
                                <li class="first"><a href="#0">会员中心</a></li>
                                <li><a href="#0">线上存款</a></li>
                                <li><a href="#0">线上取款</a></li>
                                <li><a href="#0">额度转换</a></li>
                                <li class="last"><a href="index.php">登出</a></li>
                            </ul>
                        </div>
                        <div class="logon-btn-bottom clearfix">
                            <div class="logon-btn-switch">
                                <a href="#0">额度转换</a>
                            </div>
                            <div class="logon-btn-logout">
                                <a href="index.php">登  出</a>
                            </div>
                        </div>
                    </div>
                    <span class="header-nav-close"></span>
                </div>
                <div class="mask-bg"></div>
            </div>
        </div>
        <!-- CONTAINER -->
        <div id="page-container" class="container">
            <div id="page-body">
                <div class="page-bg">
                    <div class="page-main">
                        <div class="game-wrap">
                            <?php include '../template/casino/index.php'; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FOORTER -->
        <div id="page-footer" class="footer-wrap">
            <div class="footer-main clearfix">
                <span class="btn-top">PAGE TOP</span>
                <div class="footer-link clearfix">
                    <div class="footer-link-content">
                        <h2>相关连结</h2>
                        <ul>
                            <li><a href="about.php">关于BBIN</a></li>
                            <li><a href="#0">BBIN技术</a></li>
                            <li><a href="#0">协议与规则</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">寰宇浏览器</a></li>
                        </ul>
                    </div>
                    <div class="footer-link-content">
                        <h2>需要帮助吗?</h2>
                        <ul>
                            <li><a href="#0">联络我们</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">存/取款帮助</a></li>
                            <li><a href="#0">下载区</a></li>
                            <li><a href="#0">报修系统</a></li>
                            <li><a href="#0">诺顿分级 - 安全网站</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-pay">
                    <h2>提供多种且快速的付款方式</h2>
                    <ul class="removeTextNodes">
                        <li>
                            <img src="image/footer_pay_img01.png">
                        </li>
                        <li>
                            <img src="image/footer_pay_img02.png">
                        </li>
                        <li>
                            <img src="image/footer_pay_img03.png">
                        </li>
                        <li class="last">
                            <img src="image/footer_pay_img04.png">
                        </li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <a href="#0">
                        <img src="image/footer_logo_bbin.png">
                    </a>
                    <a href="#0">
                        <img src="image/footer_logo_ub.png">
                    </a>
                </div>
                <div class="footer-copyright">COOPYRIGHT © BBIN RESERVED</div>
            </div>
            <div class="footer-bg"></div>
        </div>
        <!-- LANG -->
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
    </div>

    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
</body>
</html>
