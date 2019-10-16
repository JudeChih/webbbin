<!DOCTYPE html>
<html class="madvertis at1 zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>关於我们｜BBIN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>

<body>
    <!--↓↓架構↓↓ 1000px -->
    <div id="mainBody" class="clearfix">
        <!-- HEADER -->
        <div id="page-header">
            <div class="page-wrap">
                <div class="welcome-title">
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
                                            <a href="#0" title="会员登入" class="btn-login-m">
                                                <p>会员登入</p>
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
                                    <li id="LS-game" class="page-sub-link">
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
                    <!-- 國旗 -->
                    <div class="page-lang-wrap">
                        <a href="#0" class="cn flag"></a>
                        <a href="#0" class="tw flag"></a>
                        <a href="#0" class="en flag"></a>
                    </div>
                    <!-- NEWS -->
                    <div id="news" class="page-news">
                        <h2>欢迎光临</h2>
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
                    <!-- LOGIN -->
                    <div id="login">
                        <div class="page-login clearfix">
                            <form>
                                <input type="text" class="form-control name" placeholder="帐号">
                                <input type="text" class="form-control password" placeholder="密码">
                                <input type="text" class="form-control key" placeholder="验证码">
                                <a href="#0" class="page-login-btn">登入</a>
                                <a href="#0" class="joinUs"><span>加入會員</span></a>
                                <a href="#0" class="getPW"><span>忘记密码</span></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTAINER -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-about-wrap clearfix">
                    <div id="sidebar" class="page-sidebar clearfix">
                        <ul>
                            <li><a href="#0" class="active">BB体育</a></li>
                            <li><a href="#0">体育投注</a></li>
                            <li><a href="#0">视讯直播</a></li>
                            <li><a href="#0">BB电子</a></li>
                            <li><a href="#0">MG电子</a></li>
                            <li><a href="#0">彩票游戏</a></li>
                            <li><a href="#0">加入会员</a></li>
                        </ul>
                    </div>
                    <div class="page-left">
                        <div class="page-article">
                            <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点:
                                无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                            <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择
                                !
                            </p>
                        </div>
                    </div>
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
</body>

</html>