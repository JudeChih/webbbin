<!DOCTYPE html>
<html class="at1 zh-cn">

<head>
    <meta charset="utf-8">
    <title>欢迎光临</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
    <script src="js/main.js"></script>
</head>

<body>
    <!--架构-->
    <div id="mainBody">
        <div id="page-header">
            <div class="header">
                <div class="header-top">
                    <!-- 登入区-->
                    <div id="login" class="login-logon-wrap">
                        <a href="#" class="login-btn"></a>
                        <div class="login-wrap">
                            <div class="login-bbin"></div>
                            <form class="login-input form-group">
                                <input type="text" placeholder="帐号" class="form-control name">
                                <input type="text" placeholder="密码" class="form-control password">
                                <input type="text" placeholder="验证码" class="form-control key">
                                <a class="btn-submit" href="index_login.php">LOGIN</a>
                            </form>
                            <ul class="login-ls">
                                <li><a href="#" class="btn-joinu">・加入会员</a></li>
                                <li><a href="#" class="getPW">・忘记密码</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--国旗区域-->
                    <div class="lang-wrap login-lang">
                        <a href="#" class="cn flag01"></a>
                        <a href="#" class="tw flag02"></a>
                        <a href="#" class="en flag03"></a>
                    </div>
                </div>
                <div class="header-wrap">
                    <a href="#" class="logo"></a>
                    <!--导览列-->
                    <div class="mainnav" data-lsub-y="29">
                        <ul id="nav" class="clearfix ">
                            <li id="LS-first" class="LS-first current"><a href="index.php">首页<span>HOME</span></a></li>
                            <li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事<span>SPORTS</span></a>
                                <!--子选单-->
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live" class="LS-live"><a href="live.php">视讯直播<span>LIVE CASINO</span></a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                            </li>
                            <li id="LS-game" class="LS-game"><a href="casino_login.php">电子游艺<span>CASINO</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏<span>LOTTERY</span></a></li>
                            <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="promotions.php" class="textGlitter">优惠活动<span>PROMOTIONS</span></a></li>
                            <li id="LS-mobile" class="LS-mobile"><a href="###">手机投注<span>MOBILE BET</span></a></li>
                        </ul>
                    </div>
                    <!-- 最新消息-->
                    <div id="news" class="clearfix">
                        <div class="news-title"></div>
                        <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                            <p>
                                若当您无法顺利利用手机上网投注，请您使用手机登入，将您的 IP 以及资讯回报的代码提供给线上客服，我们会尽快帮您处理
                            </p>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="title-wrap"></div>
                <div class="about-wrap clearfix">
                    <!--侧边栏-->
                    <div id="sidebar">
                        <ul class="sidemenu">
                            <li><a href="#" class="current">关於我们</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">合作伙伴</a></li>
                            <li><a href="#">存款帮助</a></li>
                            <li><a href="#">取款帮助</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <!--文章-->
                    <div class="article">
                        <h2 class="case-article-title">服务 | 产品 | 娱乐</h2>
                        <div class="case-article">
                            <p>BBIN与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。测试文案所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                            <p>在市场上众多的博彩网站中，玩家选择测试文案，除了多元化的产品，也是因为测试文案-波音公司良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。测试文案以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，测试文案绝对是玩家最明智的选择!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer-top">
                <div class="footer-top-wrap">
                    <a href="#" class="btn-mobile"></a>
                    <div class="footer-slogan-list">
                        <div class="footer-slogan"></div>
                        <ul class="footer-list">
                            <li><a href="#" class="icon-guide">Guide <span>新手指南</span></a></li>
                            <li><a href="#" class="icon-download">Download <span>下载区</span></a></li>
                            <li><a href="#" class="icon-affiliation">Affiliation <span>代理专区</span></a></li>
                            <li><a href="#" class="icon-promotions">Promotions <span>优惠活动</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-wrap clearfix">
                    <div class="footer-link-copyright">
                        <div class="footer-link">
                            <ul>
                                <li><a href="about.php">关于我们</a></li>
                                <li>|</li>
                                <li><a href="#">联系我们</a></li>
                                <li>|</li>
                                <li><a href="#">合作伙伴</a></li>
                                <li>|</li>
                                <li><a href="#">存款帮助</a></li>
                                <li>|</li>
                                <li><a href="#">取款帮助</a></li>
                                <li>|</li>
                                <li><a href="#">常见问题</a></li>
                                <li>|</li>
                                <li><a href="#">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="copyright">Copyright © BBIN Reserved</div>
                    </div>
                    <a href="#" class="ublogo"></a>
                    <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="85px"></a>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
</body>

</html>
