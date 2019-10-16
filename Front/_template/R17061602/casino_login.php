<!DOCTYPE html>
<html class="game is-login zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>电子游艺｜BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>

<body>
    <!--↓↓架構↓↓ 1000px -->
    <div id="mainBody" class="clearfix">
        <!-- HEADER -->
        <div id="page-header">
            <div class="page-wrap">
                <div class="casino-title">
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
                    <!-- LOGO -->
                    <a href="index.php" class="page-logo">
                        <img src="image/logo.png" alt="">
                    </a>
                    <div class="page-side">
                        <div class="page-side-fixed">
                            <p class="page-nav-height"></p>
                            <!-- NAV -->
                            <div class="page-nav mainnav-wrap">
                                <ul class="mainnav removeTextNodes clearfix">
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
                                            <a href="#0" title="会员专区" class="btn-login-m">
                                                <p>会员专区</p>
                                            </a>
                                        </div>
                                    </li>
                                    <li id="LS-first">
                                        <a href="index.php">首页</a>
                                    </li>
                                    <li id="LS-ball" class="page-sub-link">
                                        <a href="#0" class="subLink">体育赛事</a>
                                        <ul id="nav-ball" class="subList">
                                            <li v-for="todo in todos"><a :href="todo.link">{{todo.name}}</a></li>
                                        </ul>
                                    </li>
                                    <li id="LS-live">
                                        <a href="live.php">视讯直播</a>
                                    </li>
                                    <li id="LS-game" class="page-sub-link page-sub-link-active">
                                        <a href="#0" class="subLink">电子游艺</a>
                                        <ul id="nav-game" class="subList">
                                            <li v-for="(todo, key) in todos" :class="key == 0 ? 'current' : ''"><a :href="todo.link">{{todo.name}}</a></li>
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
                    <!-- 國旗 -->
                    <div class="page-lang-wrap">
                        <a href="#0" class="cn flag"></a>
                        <a href="#0" class="tw flag"></a>
                        <a href="#0" class="en flag"></a>
                    </div>
                    <!-- NEWS -->
                    <div id="news" class="page-news">
                        <h2>电子游艺</h2>
                        <span>最新消息</span>
                        <marquee id="ele-msgNews" behavior="scroll" scrollamount="6" direction="left">
                            第五期现金回馈已提前揭开面纱，最高可获88145元！三重优惠，邀您畅 ...
                        </marquee>
                    </div>
                    <!--平板lightbox關閉按鈕-->
                    <a href="#0" class="btn-box-close">
                        <span class="btn-close-line1"></span>
                        <span class="btn-close-line2"></span>
                    </a>
                    <!-- 登入後 -->
                    <div id="logon">
                        <div class="page-logon clearfix">
                            <div>
                                <!--首頁會員中心按鈕-->
                                <div class="logon-btn-member clearfix">
                                    <a href="#0">会员中心</a>
                                </div>
                                <!--會員資訊-->
                                <div class="logon-info clearfix">
                                    <div class="mem-Id">
                                        <span>帐号：</span><strong>admin</strong>
                                    </div>
                                    <div class="mem-amount">
                                        <span>BBIN 余额：</span>
                                        <strong class="memAccInfo">
                                            168.08 <i id="memPlusClick" class="fa fa-plus-square"></i>
                                        </strong>

                                        <div class="mem-info">
                                            <i id="memPlusHover" class="fa fa-plus-square"></i>
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
                                                <div class="mem-change clearfix">
                                                    <a href="#" class="mem-btn-change">额度转换</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="logon-list clearfix">
                                    <ul>
                                        <li><a href="#0">会员中心</a></li>
                                        <li><a href="#0">线上存款</a></li>
                                        <li><a href="#0">线上取款</a></li>
                                        <li class="first-logon-chang">
                                            <a href="#0">额度转换</a>
                                        </li>
                                        <li class="first-logon-line">
                                            <a href="#0">未读讯息 <span>(1)</span></a>
                                        </li>
                                        <li class="first-logon-last">
                                            <a href="index.php">登出</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTAINER -->
        <div id="page-container">
            <div id="page-body" class="casino-wrap clearfix">
                <div class="page-casino-wrap clearfix">
                    <?php include '../template/casino/slider.php'; ?>
                    <?php include '../template/casino/index.php'; ?>
                </div>
            </div>
        </div>
        <!-- FOORTER -->
        <div id="page-footer">
            <div class="footer-area">
                <div class="page-wrap">
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
            </div>
            <div class="footer-bottom page-wrap clearfix">
                <div class="footer-info">
                    <!--測試文字，不跑版，即可隱藏-->
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
        </div>
    </div>
    <!--↑↑架構↑↑ 1000px  -->
    <!-- 遮罩 -->
    <div class="mask-bg"></div>
    
    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
    <script>
        $("a.MemberDate").subTabs();
    </script>

</html>