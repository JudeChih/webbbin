<!DOCTYPE html>
<html class="ball is-login zh-cn">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN - 体育赛事</title>
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
                                <li id="LS-ball" class="LS-ball drop-down current">
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
                    <!-- mainnav RWD 型態的觸發按鈕 -->
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
                    <!-- 登入後 logon -->
                    <div class="account-wrap">
                        <div class="account-inner">
                            <div class="meminfo-wrap container clearfix">
                                <div class="account-title">
                                    <div class="meminfo-title"></div>
                                </div>
                                <div class="meminfo-btn-mem">
                                    <a href="#0">会员中心</a>
                                </div>
                                <div class="meminfo-group">
                                    <div class="mem-info">
                                        <div class="ele-accinfo ele-acc-name">
                                            <span>帐号：</span><strong>{{ memAccount }}</strong>
                                        </div>
                                        <div class="ele-acc-unit">
                                            <span>BBIN余额：</span><strong>{{ memTotal }}</strong>
                                            <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                                <div class="ele-accinfo ele-other-balance">
                                                    <i class="fa fa-plus-square"></i>
                                                </div>
                                            </div>
                                            <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
                                                <ul class="ele-obalance-item">
                                                    <li v-for="membalance in membalances">
                                                        <span>{{membalance.name}}：</span>
                                                        <strong>{{membalance.balance}}</strong>
                                                    </li>
                                                </ul>
                                                <div class="ele-balance-tool">
                                                    <a href="#0">额度转换</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="SU-Menual">
                                        <ul class="login-Menual clearfix">
                                            <li class="first"><a href="#0">下注记录</a></li>
                                            <li><a href="#0">会员中心</a></li>
                                            <li><a href="#0">线上存款</a></li>
                                            <li><a href="#0">线上取款</a></li>
                                            <li><a href="#0">额度转换</a></li>
                                            <li class="last"><a href="#0">规则说明</a></li>
                                        </ul>
                                    </div>
                                    <a href="index.php" class="btn-logout">登出</a>
                                    <div class="meminfo-tool clearfix">
                                        <div class="meminfo-btn-switch">
                                            <a href="#0">额度转换</a>
                                        </div>
                                        <div class="meminfo-btn-logout">
                                            <a href="index.php">登出</a>
                                        </div>
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
                <div class="ball-wrap">
                    <?php include "../template/ball/index.php"; ?>
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
        <div class="btn-top ">
            <i class="fa fa-angle-up "></i>
        </div>
        <!-- 關閉 close -->
        <div class="close-btn"></div>
        <!-- 遮罩 overlay -->
        <div class="overlay-bg"></div>
    </div>

    <script src="../template/js/vue.js "></script>
    <script src="../template/js/vue-app.js "></script>
    <script src="../template/js/ele-popup.js "></script>
    <script src="../template/js/ele-dropmenu.js "></script>
    <script src="../template/js/ele-common.js "></script>
    <script src="js/main.js "></script>
</body>

</html>