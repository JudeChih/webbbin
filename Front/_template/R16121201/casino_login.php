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
        <div id="page-header" class="header-bg">
            <div class="header-top">
                <div class="header-top-main removeTextNodes">
                    <div class="mem">
                        <div class="acc-name">
                            <span>帐号: admin</span>
                            <span class="last">余额: 168.08</span>
                        </div>
                        <div class="obalance">
                            <i class="fa fa-plus-square"></i>
                            <div id="Member-Sub">
                                <div class="MemberDate">
                                    <ul>
                                        <li>体育投注余额：100.08</li>
                                        <li>AG视讯余额：---</li>
                                        <li>歐博視訊餘額：68.00</li>
                                    </ul>
                                    <div class="MemberChange">
                                        <a href="#" class="btn_change">额度转换</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="link">
                        <a href="#0">会员中心</a>
                        <span> | </span>
                        <a href="#0">线上存款</a>
                        <span> | </span>
                        <a href="#0">线上取款</a>
                        <span> | </span>
                        <a href="#0">额度转换</a>
                        <span> | </span>
                        <a href="#0">登出</a>
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
                        <li id="LS-game" class="active">
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
                <div class="page-bg">
                    <div class="page-main">
                        <div class="page-title">
                            <h2>电子游艺</h2>
                        </div>
                        <div class="game-wrap">
                            <?php include '../template/casino/slider.php'; ?>
                            <?php include '../template/casino/index.php'; ?>
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
        <div class="login-wrap logon">
            <div class="login-bg">
                <div class="login-title">
                    <h2>会员专区</h2>
                </div>
                <div class="login-member-btn">
                    <a href="#">会员中心</a>
                </div>
                <div class="login-info">
                    <span class="user">帐号：admin</span>
                    <span class="bbinamount">
                        BBIN余额：168.08
                        <i id="bbinAmount" class="fa fa-plus-square"></i>
                    </span>
                </div>
                <div class="login-details">
                    <ul>
                        <li>体育投注余额：100.08</li>
                        <li>AG视讯余额：---</li>
                        <li>歐博视讯餘額：68.00</li>
                        <li>OG视讯餘額 ：---</li>
                        <li>GD视讯餘額 ：---</li>
                        <li>PT电子餘額 ：---</li>
                        <li>MG电子餘額 ：---</li>
                        <li>GNS电子餘額 ：---</li>
                        <li>ISB电子餘額 ：---</li>
                    </ul>
                </div>
                <div class="login-member">
                    <ul class="removeTextNodes clearfix">
                        <li class="member"><a href="#0">会员中心</a></li>
                        <li class="deposit"><a href="#0">线上存款</a></li>
                        <li class="withdraw"><a href="#0">线上取款</a></li>
                        <li class="switch"><a href="#0">额度转换</a></li>
                        <li class="msg"><a href="#0">未读讯息(<b>1</b>)</a></li>
                        <li class="login-btn"><a href="index.php">登出</a></li>
                    </ul>
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
