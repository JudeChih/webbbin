<!DOCTYPE html>
<html class="first zh-cn">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <div id="page-header">
            <div id="header">
                <div id="mainNav" class="mainnav">
                    <ul>
                        <li><a href="index.php" class="home active">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php" class="sport ">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="live.php">视讯直播</a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="lottery.php">彩票游戏</a></li>
                        <li id="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                    </ul>
                    <div id="icon_hot"></div>
                </div>
            </div>
            <div class="slider_box">
                <div id="logo"> </div>
                <a href="#" class="btn_free"></a>
                <a href="#" class="btn_mobile "></a>
                <a href="#" class="btn_service"></a>
                <!--banner轮播-->
                <div id="firstAD">
                    <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                            <ul>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider01.png">
                                    </a>
                                </li>
                                <li data-autoplaytime="5000">
                                    <a href="#">
                                        <img src="image/not-use/slider02.png">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.slideshow -->
                </div>
                <div class="login_bg clearfix">
                    <div class="btn_login_text"> </div>
                    <div id="header_top">
                        <div class="lang_bg">
                            <div id="lang_box">
                                <a href="#" class="lang_arrow"></a> <a href="#" class="lang">简体中文</a> </div>
                        </div>
                        <div id="loginBox">
                            <div class="INPUTlogin">帐号</div>
                            <div class="INPUTlogin">密码</div>
                            <div class="INPUTlogin">验证码</div>
                            <a href="#" class="join_us">加入我们</a>
                            <div id="line">|</div>
                            <a href="#" class="forgot_password">忘记密码</a>
                            <a href="index_login.php" class="btn_login"></a>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn_download">下载专区 </a>
                <a href="#" class="btn_partners">合作伙伴 </a>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="login_nav01 clearfix">
                </div>
                <div class="first-wrap">
                    <div class="first-game">
                        <a href="live.php" class="first-game01"></a>
                        <a href="casino_login.php" class="first-game02"></a>
                        <a href="#" class="first-game03"></a>
                        <a href="lottery.php" class="first-game04"></a>
                        <a href="sports.php" class="first-game05"></a>
                    </div>
                </div>
                <div class="news-wrap">
                    <div class="news-item">
                        <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer">
                <div id="wrap">
                    <div id="text_box01">
                        <h3>信息</h3>
                        <span>注册</span>
                        <p>开设***账户即可享受所有线上投注的优惠及高品质、高赔率的娱乐游戏。我们致力于提供全球客户各类存款红利及优惠。 </p>
                        <span>合作伙伴</span>
                        <p>今天开始加入***的合作伙伴计划。通过介绍新客户往***，您将每月将获取丰厚的佣金。 </p>
                        <span>责任博彩</span>
                        <p>***积极为客户提供一个优质的娱乐平台，并设置及升级多项安全设施，以确保游戏的公平。 </p>
                        <span>安全与保障</span>
                        <p>我们采用坚实、稳定与安全的博彩系统。由于您的信息保密度至关重要。我们将坚持实行严格保密和隐私制度。 </p>
                    </div>
                    <div id="text_box">
                        <h3>产品</h3>
                        <span>体育博彩与滚球投注</span>
                        <p>我们提供您最爱投注的体育赛事。如英格兰超级联赛（英超）、西班牙联赛、FIFA世界杯、冠军杯、法甲联赛、德甲，意甲、NFL、NBA、NCAA以及女篮、排球、F1赛车等。除了体育赛事以外，我们也提供其它的博彩项目供您游乐。</p>
                        <span>线上娱乐场</span>
                        <p>您可选择的游戏包括轮盘、21点、电子扑克、老虎机、累积游戏等在线娱乐场游戏。此外您更有机会赢得***的各类累积奖金。</p>
                        <span>视讯直播</span>
                        <p>在我们的视讯直播，您可饱览整个赌场大厅和靓丽的美女荷官。玩法众多如真人百家乐，真人骰宝，真人龙虎以及真人轮盘。您也可以选择容易上手的线上老虎机或KENO快乐彩消遣时光。</p>
                    </div>
                    <div id="text_box">
                        <h3>信息中心</h3>
                        <span>优惠活动</span>
                        <p>新用户享有首次存款红利及开户特制礼品。现有客户同样享有现金返水及再次存款红利。</p>
                        <span>帮助中心</span>
                        <p>您可以通过常见问题栏目获得有关开户、存款、提款及技术方面的帮助。</p>
                        <span>支付方式</span>
                        <p>***为客户提供快速便捷的存取款服务，如：本地银行的转账及汇款、线上充值，并保障过程顺利及时，我们的开户奖金与优惠活动正等待您赢取！</p>
                        <span>联络我们</span>
                        <p>如果您有任何关于滚球投注及娱乐场的疑问，可通过在线客服、电话及电邮方式与我们取得联系。***提供24/7小时客户服务。</p>
                    </div>
                    <div id="text_box02">
                        <h3>投注信息</h3>
                        <span>赛果</span>
                        <p>您可查阅***网站内所有体育赛事的赛果。</p>
                        <span>数据统计</span>
                        <p>我们提供最快捷，最全面的体育资讯。包括超过200场主要赛事的积分榜、赛程、伤情、停赛、球队与球员状态，助您作出正确的选择。</p>
                        <span>体育博彩规则</span>
                        <p>所有在***的投注都需要遵从我们体育博彩规则中的条款。</p>
                        <span>体育博彩规则</span>
                        <p>我们的真人娱乐城提供限额查询、即时彩池、结果查询及回放历史视频。您所须的所有信息将显示在荧幕上，以便您进行投注。您亦可选择显示或隐藏个别的信息。</p>
                    </div>
                </div>
                <div class="footer_box">
                    <div class="footer-top">
                        <a href="#" class="arrow-top005"></a>
                    </div>
                    <div class="footer-btn ">
                        <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                    </div>
                    <div class="footer-box01">
                        <div class="footer-list">
                            <ul>
                                <li><a href="about.php">关于我们</a></li>
                                <li>|</li>
                                <li><a href="#">联系我们</a></li>
                                <li>|</li>
                                <li><a href="#">合作伙伴</a></li>
                                <li>|</li>
                                <li><a href="#">存款帮助</a></li>
                                <li>|</li>
                                <li><a href="#">取款帮助 </a></li>
                                <li>|</li>
                                <li><a href="#">常见问题</a></li>
                                <li>|</li>
                                <li><a href="#">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="copyright">Copyright © BBIN Casino Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <!-- Slideshow for this template -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        new toggleColor('.textGlitter', ['#B15832', '#FFF'], 600);
        $('#js-ele-slideshow').slideshow({
            animationType  : 'fade',
            isNav          : 1,
            navPosition    : 'center'
        });
    </script>
</body>

</html>
