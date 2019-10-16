<!DOCTYPE html>
<html class="madvertis at1 zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN - 关于我们</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="loading">
        <!-- page-header -->
        <div id="page-header">
            <div class="header-main">
                <div class="header-top container clearfix">
                    <!-- logo -->
                    <div class="logo">
                        <a href="index.php"></a>
                    </div>
                    <!-- 導覽列 mainnav -->
                    <div class="mainnav-wrap">
                        <div class="mainnav">
                            <ul class="clearfix">
                                <li class="mobile-lang-wrap">
                                    <div id="ele-lang-wrap" class="ele-lang-wrap">
                                        <div class="ele-lang-title">
                                            <a href="#" class="flag02"><i></i>简体中文</a>
                                        </div>
                                        <div id="ele-lang-group" class="ele-lang-group" style="display: none;">
                                            <a href="#" class="ele-lang-option flag01"><i></i>繁體中文</a>
                                            <a href="#" class="ele-lang-option flag02 ele-lang-current"><i></i>简体中文</a>
                                            <a href="#" class="ele-lang-option flag03"><i></i>ENGLISH</a>
                                        </div>
                                    </div>
                                </li>
                                <li id="LS-first">
                                    <a href="index.php" title="首页">首页</a>
                                </li>
                                <li id="LS-ball" class="LS-ball drop-down">
                                    <a href="#" class="drop-menu" title="体育赛事"><i></i>体育赛事</a>
                                    <div id="nav-ball" class="ele-drop-group" style="display:none">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-live" class="LS-live drop-down">
                                    <a href="#" class="drop-menu" title="视讯直播"><i></i>视讯直播</a>
                                    <div id="nav-live" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="live in lives" :href="live.link">{{ live.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-game" class="LS-game drop-down">
                                    <a href="#" class="drop-menu" title="电子游艺"><i></i>电子游艺</a>
                                    <div id="nav-game" style="display:none" class="ele-drop-group">
                                        <div class="lsub-inner-wrap">
                                            <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                        </div>
                                    </div>
                                    <div id="sidemenu-ball" class="ele-sidemenu-group" style="display: none;">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </li>
                                <li id="LS-lottery">
                                    <a href="lottery.php" title="彩票游戏">彩票游戏</a>
                                </li>
                                <li id="LS-memberexclusiveii" class="LS-memberexclusiveii">
                                    <a href="promotions.php" title="优惠活动">优惠活动</a>
                                </li>
                                <li id="LS-mobile" class="LS-mobile">
                                    <a href="#" title="手机下注">手机下注</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 導覽列 mainnav RWD 型態的觸發按鈕 -->
                    <div class="main-btn clearfix">
                        <a href="#0" class="btn-nav"></a>
                        <a href="#0" class="btn-member"></a>
                    </div>
                </div>
                <!-- banner -->
                <div class="banner-wrap">
                    <div class="banner-inner">
                        <div class="page-title container">
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="news-lang-wrap">
                        <div class="news-lang-main container clearfix">
                            <!-- 最新消息 news -->
                            <div class="news-wrap">
                                <h3>最新消息</h3>
                                <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="6" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                                    <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                                </marquee>
                            </div>
                            <!-- dekstop Lang -->
                            <div class="lang-wrap">
                                <a href="#" class="cn flag01"></a>
                                <a href="#" class="tw flag02"></a>
                                <a href="#" class="en flag03"></a>
                            </div>
                        </div>
                    </div>
                    <!-- 登入前 login -->
                    <div class="account-wrap">
                        <div class="account-inner">
                            <div class="login-wrap container clearfix">
                                <div class="account-title">
                                    <div class="login-title"></div>
                                </div>
                                <div class="login-input">
                                    <div class="login-unit login-unit-user">
                                        <input name="username" type="text" placeholder="帐号">
                                    </div>
                                    <div class="login-unit login-unit-pwd">
                                        <input name="passwd" type="text" placeholder="密码">
                                    </div>
                                    <div class="login-unit login-unit-chk">
                                        <input name="rmNum" type="text" placeholder="验证码">
                                    </div>
                                </div>
                                <div class="login-btn-group">
                                    <a href="index_login.php" class="login-submit">登入</a>
                                    <div class="login-link">
                                        <a href="#0">忘记密码</a>
                                        <a href="#0" class="login-link-last">加入会员</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="welcome-wrap">
                    <div class="page-sidebar">
                        <ul class="page-sidebar-content container">
                            <li><a href="#0" class="active">关于我们</a></li>
                            <li><a href="#0">联络我们</a></li>
                            <li><a href="#0">合作伙伴</a></li>
                            <li><a href="#0">存款帮助</a></li>
                            <li><a href="#0">取款帮助</a></li>
                            <li><a href="#0">常见问题</a></li>
                            <li><a href="#0">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="page-article container">
                        <h3 class="case-article-title">关于我们</h3>
                        <div class="article-title-line"></div>
                        <div class="article-content">
                            <p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点:无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开
                                !
                            </p>
                            <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main">
                <div class="footer-top clearfix">
                    <div class="footer-link container">
                        <ul>
                            <li>
                                <a href="about.php">关于我们</a>
                            </li>
                            <li>
                                <a href="#0">联络我们</a>
                            </li>
                            <li>
                                <a href="#0">合作伙伴</a>
                            </li>
                            <li>
                                <a href="#0">存款帮助</a>
                            </li>
                            <li>
                                <a href="#0">取款帮助</a>
                            </li>
                            <li>
                                <a href="#0">常见问题</a>
                            </li>
                            <li>
                                <a href="#0">责任博彩</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-content container clearfix">
                    <div class="footer-content-wrap clearfix">
                        <div class="footer-content-about">
                            <h3>关于BBIN</h3>
                            <p>BBIN是一个可看见真实游戏环境的娱乐平台，在这里不仅可以体验丰富有趣的百家乐游戏，更可以与美丽的荷官共同在牌桌上斗智力拼运气。</p>
                        </div>
                        <div class="footer-content-help">
                            <h3>使用帮助</h3>
                            <ul>
                                <li><a href="#">优惠活动<span>Promotions</span></a></li>
                                <li><a href="#">代理合作<span>Affiliation</span></a></li>
                                <li><a href="#">在线客服<span>Online server</span></a></li>
                                <li><a href="#">下载中心<span>Download</span></a></li>
                            </ul>
                        </div>
                        <div class="footer-content-bank">
                            <h3>提供多种便捷付款方式</h3>
                            <img src="image/footer_img.png" alt="">
                        </div>
                    </div>
                    <div class="footer-content-desktop">
                        <div class="footer-content-info">
                            <h3>BBIN责任博彩</h3>
                            <p>提倡有节制赌博。望客户高兴与满意本公司提供的网上博彩服务。<br>我们会为客户在博彩自律方面提供多方面的帮助。<br>如您担心博彩绘严重影响您或他人生活，我们建议阁下遵守以下一些基本规则：</p>
                        </div>
                        <div class="footer-content-list clearfix">
                            <ul class="footer-content-list-l">
                                <li>禁止未满18岁的人士参与赌博游戏。加入游戏之前，请您确认您已满18周岁。</li>
                                <li>在登入我们系统时，请勿让年人士在萤光幕显示范围内观看或停留。</li>
                                <li>如果用户需要离开系统的操作范围，请谨慎使用密码锁住电脑。</li>
                                <li>用户务必将BBIN赌场帐户及密码放置安全地方。</li>
                                <li>切勿与未成年人士分享信用卡或帐户等相关资讯。</li>
                            </ul>
                            <ul>
                                <li>当用户从他人电脑登入BBIN赌场，或从远端位置（无线网吧，机场，酒店或其他公共场所）进行登录及娱乐活动时请留意是否已隔离任何未成年人士。</li>
                                <li>请勿过于沉迷游戏。</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-wrap container clearfix">
                        <div class="footer-info"></div>
                        <div class="footer-logo">
                            <a id="bblogo" href="#0">
                                <img src="image/not-use/gray.png" width="60">
                            </a>
                            <a id="browser-logo" href="#0">
                                <img src="image/not-use/ublogo/ublogo_g.png" width="100">
                            </a>
                        </div>
                        <div class="footer-copyright">COPYRIGHT © BBIN RESERVED</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- TOP 按鈕 -->
        <div class="btn-top">
            <i class="fa fa-angle-up"></i>
        </div>
        <!-- 關閉 close -->
        <div class="close-btn"></div>
        <!-- 遮罩 overlay -->
        <div class="overlay-bg"></div>
    </div>

    <script src="../template/js/vue.js"></script>
    <script src="../template/js/vue-app.js"></script>
    <script src="../template/js/ele-popup.js"></script>
    <script src="../template/js/ele-dropmenu.js"></script>
    <script src="../template/js/ele-common.js"></script>
    <script src="js/main.js"></script>
</body>

</html>