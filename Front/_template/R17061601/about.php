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
            <div class="header-main clearfix">
               <div class="left">
                <!-- logo -->
                <div class="logo">
                    <a href="index.php"></a>
                </div>
                </div>
                <div class="right">
                    <!-- 登入前 login -->
                    <div class="login-wrap">
                        <div class="login-main clearfix">
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
                            <div class="login_lang">
                            <p class="login-link">
                                <a href="#0">忘记密码</a>
                                <span> ｜ </span>
                                <a href="#0">加入会员</a>
                            </p>
                             <!-- Flag -->
                           <div class="ele-lang-wrap">
                             <div class="ele-lang-group">
                              <a href="#" class="ele-lang-option flag01"></a>
                              <a href="#" class="ele-lang-option flag02 ele-lang-current"></a>
                              <a href="#" class="ele-lang-option flag03"></a>
                             </div>
                         </div>
                        </div>
                        </div>
                        <!--<span class="login-close close-btn"></span>-->
                    </div>
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <ul class="mainnav">
                            <li id="LS-first">
                                <a href="index.php">首页</a>
                            </li>
                            <li id="LS-ball">
                                <a href="#0" class="subClick">体育赛事</a>
                                <ul class="subList">
                                    <li v-for="ball in balls"><a :href="ball.link">{{ ball.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-live">
                                <a href="live.php">视讯直播</a>
                            </li>
                            <li id="LS-game">
                                <a href="#0" class="subClick">电子游艺</a>
                                <ul class="subList">
                                    <li v-for="game in games"><a :href="game.link">{{ game.name }}</a></li>
                                </ul>
                            </li>
                            <li id="LS-ltlottery">
                                <a href="lottery.php">彩票游戏</a>
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
                    </div>
                    <!-- 導覽列 mainnav RWD 型態的觸發按鈕 -->
                    <div class="mainnav-btn clearfix">
                      <div class="btn-member"><a href="#0"><i></i></a></div>
                      <div class="btn-nav"><a href="#0"><i></i></a></div>
                      <div class="btn-lang"><a href="#0"></a></div>
                    </div>
                    <!-- TABLET以下的語系彈窗 -->
                    <div class="ele-popup-group">
                        <div class="popup-group-inner">
                            <div class="popup-lang-wrap">
                                <a href="" title="繁體中文"><i class="icon-lang icon-tw"></i><span>繁體中文</span></a>
                                <a href="" title="简体中文" class="popup-lang-current"><i class="icon-lang icon-cn"></i><span>简体中文</span></a>
                                <a href="" title="English"><i class="icon-lang icon-en"></i><span>English</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 遮罩 overlay -->
                <div class="overlay-bg"></div>
                <div class="page-title clearfix">
                    <img src="image/title_welcome.png">
                </div>
            </div>
        </div>

        <!-- page-container -->
        <div id="page-container">
            <div id="page-body" class="clearfix">
                <div class="page-main clearfix">
                    <div class="page-left">
                    <div class="page-sidebar">
                        <ul class="page-sidebar-content">
                            <li><a href="#0" class="current">关于我们</a></li>
                            <li><a href="#0">联系我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="page-right">
                        <div class="page-article">
                            <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <br>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                            <br>
                            <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
                        </div>
                    </div>
                </div>
            <div class="shadow-page"></div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main clearfix">
              <div class="left">
                <div class="footer-link clearfix">
                    <ul>
                    <li><a href="about.php">关于我们</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">合作伙伴</a></li>
                    <li><a href="#">存款帮助</a></li>
                    <li><a href="#">取款帮助</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>

                <div class="footer-bottom">
                    <a id="bblogo" href="#0">
                        <img src="image/not-use/black.png" width="88px">
                    </a>
                    <a id="browser-logo" href="#0">
                        <img src="image/ublogo.png">
                    </a>
                </div>
                </div>
                <div class="right">
                <div class="footer-info">
                    客服专线：0063-93078888</br>
                    客服邮箱：bbincasino@gmail.com</br>
                    VIP邮箱：vip-bbincasino@gmail.com 
                </div>
                </div>
                <div class="footer-copyright">COPYRIGHT © BBIN RESERVED</div>
            </div>
        </div>
        <!-- TOP 按鈕 -->
        <span class="btn-top"></span>
    </div>

    <script src="js/vue.js"></script>
    <script src="js/vue-app.js"></script>
    <script src="js/ele-popup.js"></script>
    <script src="js/ele-dropmenu.js"></script>
    <script src="js/ele-common.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            isNav: false,
            isArrow: true,
            isAutoPlay: true
        });
    </script>
</body>
</html>
