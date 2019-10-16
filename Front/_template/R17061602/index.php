<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>

<body>
    <!--↓↓架構↓↓ 1250px first-wrap -->
    <div id="mainBody" class="clearfix">
        <!-- HEADER -->
        <div id="page-header">
            <div class="first-side-fixed">
                <p class="page-nav-height"></p>
                <div class="first-nav mainnav-wrap">
                    <ul class="mainnav clearfix">
                        <li class="lang-mobile-show">
                            <!-- 語系 -->
                            <div class="lang-mobile-wrap">
                                <div class="lang-title">
                                    <a href="#0">
                                        <p class="lang-cn">简体中文</p>
                                    </a>
                                </div>
                                <div class="lang-group" style="display:none;">
                                    <a href="#0">
                                        <p class="lang-cn">简体中文</p>
                                    </a>
                                    <a href="#0">
                                        <p class="lang-tw">繁體中文</p>
                                    </a>
                                    <a href="#0">
                                        <p class="lang-en">English</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="login-mobile-show">
                            <!-- 會員登入 -->
                            <div class="login-lightbox">
                                <a href="#0" title="会员登入" class="btn-login-m">
                                    <p>会员登入</p>
                                </a>
                            </div>
                        </li>
                        <li id="LS-first">
                            <a href="index.php" class="active">首页</a>
                        </li>
                        <li id="LS-ball">
                            <a href="#0" class="subLink">体育赛事</a>
                            <ul id="nav-ball" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                            </ul>
                        </li>
                        <li id="LS-live">
                            <a href="live.php">视讯直播</a>
                        </li>
                        <li id="LS-game">
                            <a href="#0" class="subLink">电子游艺</a>
                            <ul id="nav-game" class="subList">
                                <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
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
            </div>
        </div>
        <!-- CONTENT -->
        <div id="page-container" class="clearfix">
            <!-- LOGO -->
            <a href="index.php" class="first-logo">
                <img src="image/logo.png" alt="">
            </a>
            <!-- MOBILE NAV -->
            <a href="#0" class="btn-side-m">
                <p class="mobile-nav-btn">
                    <span class="page-nav-btn-line1"></span>
                    <span class="page-nav-btn-line2"></span>
                    <span class="page-nav-btn-line3"></span>
                </p>
                <p class="mobile-close-btn">
                    <span class="page-nav-btn-line1"></span>
                    <span class="page-nav-btn-line2"></span>
                </p>
            </a>
            <!-- SLIDER -->
            <div class="first-slider clearfix">
                <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider01.png');"></div>
                                </a>
                            </li>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider02.png');"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
                </div>
            </div>
            <div class="first-slider-bg"></div>
            <!--平板lightbox關閉按鈕-->
            <a href="#0" class="btn-box-close">
                <span class="btn-close-line1"></span>
                <span class="btn-close-line2"></span>
            </a>
            <!-- LOGIN -->
            <div class="first-function-wrap">
                <!-- 國旗 -->
                <div class="lang-wrap">
                    <a href="#" class="cn flag"></a>
                    <a href="#" class="tw flag"></a>
                    <a href="#" class="en flag"></a>
                </div>
                <!-- LOGIN -->
                <div id="login">
                    <div class="first-login clearfix">
                        <form>
                            <input type="text" class="form-control name" placeholder="帐号：">
                            <input type="text" class="form-control password" placeholder="密码：">
                            <input type="text" class="form-control key" placeholder="验证码：">
                            <a href="index_login.php" class="btn-login">登入</a>
                            <a href="#" class="joinUs"><span>加入會員</span></a>
                            <a href="#" class="getPW"><span>忘记密码</span></a>
                        </form>
                    </div>
                </div>
            </div>
            <!-- NEWS -->
            <div id="news" class="first-news">
                <span>最新消息</span>
                <marquee id="ele-msgNews" behavior="scroll" scrollamount="6" direction="left" height="60">
                    第五期现金回馈已提前揭开面纱，最高可获88145元！三重优惠，邀您畅 ...
                </marquee>
            </div>
            <!-- GAME -->
            <div class="first-game-wrap clearfix">
                <a href="#" class="first-game first-game01">
                    <img src="image/lang/zh-cn/game01.png" alt="">
                </a>
                <a href="#" class="first-game first-game02">
                    <img src="image/lang/zh-cn/game02.png" alt="">
                </a>
                <a href="#" class="first-game first-game03">
                    <img src="image/lang/zh-cn/game03.png" alt="">
                </a>
                <a href="#" class="first-game first-game04">
                    <img src="image/lang/zh-cn/game04.png" alt="">
                </a>
            </div>
            <!-- INTRO -->
            <div class="first-intro clearfix">
                <img src="image/first-bg2.png" alt="">
                <p>BBIN是一个可看见真实游戏环境的娱乐平台，在这里不仅可以体验丰富有趣的百家乐游戏，更可以与美丽的荷官共同在牌桌上斗智力拼运气。即时的现场、愉快的气氛，超越了空间的限制将最真实真切的游戏现场呈现在任何角落，带来了休闲娱乐与视觉感官的完美结合。<br/> 赶快加入！<br/> 让我们一起在真实与欢乐的Live游戏中享受实况气氛带来的一切！
                </p>
            </div>
        </div>
        <!-- FOORTER -->
        <div id="page-footer">
            <div class="footer-area">
                <div class="footer-nav clearfix">
                    <div class="footer-item">
                        <ul>
                            <li>
                                <a href="index.php" title="首页">首页</a>
                            </li>
                            <li>
                                <a href="live.php" title="视讯直播">视讯直播</a>
                            </li>
                            <li>
                                <a href="lottery.php" title="彩票游戏">彩票游戏</a>
                            </li>
                            <li>
                                <a href="promotions.php" title="优惠活动">优惠活动</a>
                            </li>
                            <li>
                                <a href="#0" title="手机下注">手机下注</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item footer-list">
                        <ul>
                            <li>
                                <a href="sports.php" title="体育赛事" class="footer-fix">
                                    <p>体育赛事</p>
                                </a>
                            </li>
                            <li>
                                <a href="sports.php">BB 体育</a>
                            </li>
                            <li>
                                <a href="sports.php">NEW BB 体育</a>
                            </li>
                            <li>
                                <a href="sports.php">体育投注</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item footer-list">
                        <ul>
                            <li>
                                <a href="casino_login.php" title="电子游艺" class="footer-fix">
                                    <p>电子游艺</p>
                                </a>
                            </li>
                            <li>
                                <a href="casino_login.php" title="BB电子">BB电子</a>
                            </li>
                            <li>
                                <a href="casino_login.php" title="MG电子">MG电子</a>
                            </li>
                            <li>
                                <a href="casino_login.php" title="GNS电子">GNS电子</a>
                            </li>
                            <li>
                                <a href="casino_login.php" title="ISB电子">ISB电子</a>
                            </li>
                            <li>
                                <a href="casino_login.php" title="PT电子">PT电子</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item footer-contact">
                        <ul>
                            <li>
                                <span>客服专线</span>0000-12345678912
                            </li>
                            <li>
                                <span>24小时热线</span>0000-12345678912
                            </li>
                            <li>
                                <span>客服邮箱</span>0000-12345678912
                            </li>
                            <li>
                                <span>QQ</span>0000-12345678912
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom page-wrap clearfix">
                <div class="footer-info">
                    測試文字，不跑版，即可隱藏
                </div>
                <div class="footer-link">
                    <ul>
                        <li><a href="about.php">关於我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">合作伙伴</a></li>
                        <li><a href="#">存款帮助</a></li>
                        <li><a href="#">取款帮助</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                    <p>copyright © BBIN reserved.</p>
                </div>
                <a href="#" class="Ubrowser"></a>
                <a href="#" class="bbinlogo">
                    <img src="image/not-use/gray.png" alt="" width="70">
                </a>
            </div>
            <div class="footerRightBg"></div>
        </div>
    </div>
    <!--↑↑架構↑↑ 1250px first-wrap -->
    
    <!-- 右上角背景延伸 -->
    <div class="sideRightBg"></div>
    <!-- 遮罩 -->
    <div class="mask-bg"></div>

    <?php include '../template/base.php'; ?>
    <script src="js/index.js"></script>
    <script src="js/main.js"></script>
    <!--slider-->
    <script src="../js/TweenMax.min.js"></script>
    <script src="../js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType: 'fade',
            isNav: true,
            isArrow: true,
            isRunLine: true
        });
    </script>
</body>

</html>