<!DOCTYPE html>
<html class="madvertis at1 zh-cn">
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
                <div class="page-title">
                    <img src="image/about_title.png">
                    <h2>欢迎光临</h2>
                </div>
                <div class="login-wrap">
                    <div class="header-nav-title">
                        <img src="image/login_title01.png">
                    </div>
                    <div class="login-main removeTextNodes">
                        <div class="login-unit login-unit-user">
                            <input type="text" placeholder="帐号">
                        </div>
                        <div class="login-unit login-unit-pwd">
                            <input type="text" placeholder="密码">
                        </div>
                        <div class="login-unit login-unit-chk">
                            <input type="text" placeholder="验证码">
                        </div>
                        <a href="index_login.php" class="login-submit">登入</a>
                        <p class="login-other">
                            <a href="#0">忘记密码</a>
                            <span> / </span>
                            <a href="#0">加入会员</a>
                        </p>
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
                        <div class="page-container clearfix">
                            <div class="page-sidebar">
                                <span class="page-sidebar-top"></span>
                                <ul>
                                    <li><a href="#0">BB体育</a></li>
                                    <li><a href="#0">体育投注</a></li>
                                    <li><a href="#0">视讯直播</a></li>
                                    <li><a href="#0" class="active">BB电子</a></li>
                                    <li><a href="#0">MG电子</a></li>
                                    <li><a href="#0">彩票游戏</a></li>
                                    <li><a href="#0">加入会员</a></li>
                                </ul>
                                <span class="page-sidebar-bottom"></span>
                            </div>
                            <div class="page-right">
                                <div class="page-article">
                                    <div class="about-title">关于我们<span></span></div>
                                    <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                                    <br>
                                    <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                                    <br>
                                    <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
                                </div>
                            </div>
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
