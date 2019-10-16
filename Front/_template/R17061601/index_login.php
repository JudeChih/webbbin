<!DOCTYPE html>
<html class="first is-login zh-cn">
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
                    <!-- 登入後 meminfo -->
                    <div class="meminfo-wrap">
                        <div class="meminfo-main clearfix">
                            <div class="meminfo-btn-mem">
                                <a href="#0">会员中心</a>
                            </div>
                            <div class="mem-info">
                                <div class="ele-accinfo ele-acc-name">
                                    <span>帐号：</span><strong>{{ memAccount }}</strong>
                                </div>
                                <div class="ele-acc-unit">
                                    <span>余额：</span><strong>{{ memTotal }}</strong>
                                    <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                        <div class="ele-accinfo ele-other-balance">
                                            <i class="fa fa-plus-square"></i>
                                        </div>
                                    </div>
                                    <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
                                        <ul class="ele-obalance-item">
                                            <li v-for="(membalance, key) in membalances" :class="key == 9 ? 'last' : ''">
                                                <span>{{membalance.name}}：</span>
                                                <strong>{{membalance.balance}}</strong>
                                            </li>
                                        </ul>
                                        <div class="ele-balance-tool">
                                            <a href="#0">餘額轉換</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="SU-Menual">
                                <ul class="login-Menual">
                                    <li class="first"><a href="#0">会员中心</a></li>
                                    <li><a href="#0">线上存款</a></li>
                                    <li><a href="#0">线上取款</a></li>
                                    <li><a href="#0">额度转换</a></li>
                                    <li class="last"><a href="#0">未读讯息(<b>1</b>)</a></li>
                                </ul>
                            </div>
                            <div class="logout-submit"><a href="index.php">登出</a></div>
                            <div class="meminfo-tool clearfix">
                                <div class="meminfo-btn-switch">
                                    <a href="#0">额度转换</a>
                                </div>
                                <div class="meminfo-btn-logout">
                                    <a href="index.php">登  出</a>
                                </div>
                            </div>
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
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <ul class="mainnav">
                            <li id="LS-first">
                                <a href="index.php" class="current">首页</a>
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
            </div>
             <div class="header-main2 clearfix">
            <!-- 輪播圖 slideshow -->
                <div id="js-ele-slideshow" class="ele-slideshow-wrap clearfix">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                        <img src="image/not-use/slider01.jpg">
                                </a>
                            </li>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                        <img src="image/not-use/slider02.jpg">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                </div>
                <!-- 最新消息 news -->
                <div class="first-news-wrap">
                    <div class="first-news-main">
                        <marquee scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">
                            <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                        </marquee>
                    </div>
                </div>
           </div>
        </div>

        <!-- page-container -->
        <div id="page-container">
            <div id="page-body" class="clearfix">
                <div class="left">
                <div class="home-top1">
                    <img src="image/home_top.png" />
                    <div class="txt">
                    BBIN是亚洲领先的iGaming的软件供应商。随着20年的支持超过500个客户端的经验，使我们成为该领域最合适的合作伙伴。BBIN以客户为导向，将继续在未来提供了广泛的娱乐服务。
                    </div>
                </div>    
                </div>
                <div class="right">
                <!-- 四大產品 fitst-game -->
                <div class="first-game-wrap">
                    <div class="first-game-main">
                        <ul>
                            <li class="first-game first-game01">
                                <a href="#0"><img src="image/game01_over.jpg"></a>
                            </li>
                            <li class="first-game first-game02">
                                <a href="#0"><img src="image/game02_over.jpg"></a>
                            </li>
                            <li class="first-game first-game03">
                                <a href="#0"><img src="image/game03_over.jpg"></a>
                            </li>
                            <li class="first-game first-game04">
                                <a href="#0"><img src="image/game04_over.jpg"></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="shadow"></div>
               </div> 
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main clearfix">
           <div id="footer-service" class="clearfix">
             <div id="service-body">
                <div id="service_01">
                <div class="service-big-img"></div>
                <div class="txt">
                <img src="image/safety_txt.png" />
                <span>
                 严谨的风险控管，以及第三方资金保险，100％保证玩家资金。</br>
真人娱乐视頻现场，持有菲律宾政府核发牌照，现场运营完全依照国际赌场管理条例。</br>
BBIN为诺顿分级所评级的安全网站，绝无任何恶意软体。</br>
进行任何游戏操作，皆使用相同帐号/密码，全程数据加密，玩家资料绝不外泄。
</span></div>   
                </div>
                <div id="service_02">
                 <img src="image/slogan_01.png" />
                 <img src="image/slogan_02.png" />
                 <img src="image/slogan_03.png" />
                </div>
                </div>
                <div id="homelink-body">
                  <div id="homelink">
                    <div class="title">
                        <span></span>
                        <p>快速通道</p>
                    </div>
                    <ul class="link_txt">
                        <li><a href="#">免费开户</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt">
                        <li><a href="#">手机下注</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt">
                        <li><a href="#">加盟合作</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt">
                        <li><a href="#">充值中心</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt2">
                        <li><a href="#">下载专区</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                  </div>
                  <div id="homelink">
                    <div class="title">
                        <span></span>
                        <p>服务帮助</p>
                    </div>
                    <ul class="link_txt">
                        <li><a href="#">在线客服</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt">
                        <li><a href="#">投诉与建议</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt">
                        <li><a href="#">如何存取款</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                    <ul class="link_txt2">
                        <li><a href="#">备用网址</a></li>
                        <span><a href="#"></a></span>
                    </ul>
                  </div>
                </div>
                </div>



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
