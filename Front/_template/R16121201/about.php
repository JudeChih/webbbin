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
    <div id="mainBody" class="page-wrap about">
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
                            <h2>欢迎光临</h2>
                        </div>
                    </div>
                    <div class="about-content clearfix">
                        <div class="about-title">关于我们</div>
                        <div class="about-link-bg">
                            <div class="about-link clearfix">
                                <ul>
                                    <li><a href="#0">BB体育</a></li>
                                    <li><a href="#0">体育投注</a></li>
                                    <li class="acitve"><a href="#0">视讯直播</a></li>
                                    <li><a href="#0">BB电子</a></li>
                                    <li><a href="#0">MG电子</a></li>
                                    <li><a href="#0">彩票游戏</a></li>
                                    <li><a href="#0">加入会员</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="about-main">
                            <div class="about-text">
                                <span class="top-line"></span>
                                <span class="title01"></span>
                                <span class="title02"></span>
                                <div class="content">
                                    <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                                    <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                                    <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
                                </div>
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
