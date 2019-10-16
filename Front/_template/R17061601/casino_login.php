<!DOCTYPE html>
<html class="game is-login zh-cn">
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
                                    <li class="last"><a href="#0">额度转换</a></li>
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
                                <a href="#0" class="subClick current">电子游艺</a>
                                <ul class="subList slidedown">
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
                    <img src="image/title_casino.png">
                </div>
            </div>
        </div>

        <!-- page-container -->
        <div id="page-container">
            <div id="page-body" class="clearfix">
            <div class="page-main clearfix">
                <div class="game-wrap">
                    <?php include '../template/casino/slider.php'; ?>
                    <?php include '../template/casino/index.php'; ?>
                </div>
            </div>
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
