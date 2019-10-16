<!DOCTYPE html>
<html class="madvertis memberexclusiveii zh-cn">

<head>
    <meta charset="UTF-8">
    <title>优惠活动</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody">
        <div id="page-header" class="clearfix">
            <div id="header" class="clearfix">
                <!--Logo-->
                <div id="logo" class="floatL">
                    <a href="index.php"><img src="image/logo.png" /></a>
                </div>
                <!--header右邊區域-->
                <div id="headerInfo" class="floatR">
                    <!--語系切換-->
                    <div class="lang-wrap">
                        <a href="#" class="cn flag03"></a>
                        <a href="#" class="tw flag02"></a>
                        <a href="#" class="en flag01"></a>
                    </div>
                    <!--Login前-->
                    <div id="loginWrap" class="floatR">
                        <p class="loginUnit floatL">
                            <label>帐号</label>
                            <input type="text" class="loginInput" />
                        </p>
                        <p class="loginUnit floatL">
                            <label>密码</label>
                            <input type="password" class="loginInput" />
                        </p>
                        <p class="loginUnit floatL">
                            <label>验证码</label>
                            <input type="password" class="loginInput" />
                        </p>
                        <a href="index_login.php" class="btnLogin floatL"></a>
                        <div class="btnJoin floatL"><a href="#">忘记密码</a>|<a href="#">立即注册</a></div>
                    </div>
                </div>
                <!--Nav-->
                <div class="mainnav" data-lsub-y="-17">
                    <ul class="clearfix">
                        <li><a href="index.php">首页<span>HOME</span></a></li>
                        <li id="LS-ball"><a href="sports_login.php">体育赛事<span>SPORTS</span></a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="live.php">视讯直播<span>LIVE CASINO</span></a>
                         <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game"><a href="casino_login.php">电子游艺<span>CASINO</span></a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="lottery.php">彩票游戏<span>LOTTERY</span></a></li>
                        <li><a href="promotions.php" class="textGlitter current">优惠活动<span class="textGlitter">PROMOTIONS</span></a></li>
                        <li><a href="#">手机下注<span>MOBILE BET</span></a></li>
                        <li><a href="#">在线客服<span>ONLINE SERVICE</span></a></li>
                        <li><a href="#">下载区<span>DOWNLOAD</span></a></li>
                    </ul>
                </div>
                <!--Banner-->
                <div id="banner">
                    <img src="image/banner05.png">
                    <img src="image/title_memberexclusiveii.png">
                </div>
                <!--News-->
                <div id="news">
                    <marquee scrollamount="2" scrolldelay="50" onmouseover="this.stop();" onmouseout="this.start();">全天24小时不限次数提款，手续费全免，【天天返水】不计输赢最高返点1.2%，最高优惠可达11888元，VIP无上限，返水已经如数存至各会员..</marquee>
                </div>
            </div>
        </div>
        <!--Container-->
        <div id="page-container02" class="clearfix">
            <div id="page-body" class="clearfix">
                <div class="events-wrap">
                    <a href="#" class="event"><img src="image/not-use/events01.png"></a>
                    <a href="#" class="event"><img src="image/not-use/events02.png"></a>
                    <a href="#" class="event"><img src="image/not-use/events03.png"></a>
                </div>
            </div>
        </div>
        <!--Footer-->
        <div id="page-footer">
            <!--底部按鈕-->
            <ul class="footerBtn">
                <li>
                    <a href="#" title="会员免费注册" class="footerBtn01">
                        <strong>会员免费注册</strong> 开设BBIN账户即可享受所有线上投注的优惠及高品质、高赔率的娱乐游戏。我们致力于提供全球客户各类存款红利及优惠。
                    </a>
                </li>
                <li>
                    <a href="#" title="优惠活动" class="footerBtn02">
                        <strong>优惠活动</strong> 新用户享有首次存款红利及开户特制礼品。现有客户同样享有现金返水及再次存款红利。
                    </a>
                </li>
                <li>
                    <a href="#" title="公平游戏" class="footerBtn03">
                        <strong>公平游戏</strong> BBIN致力为玩家提供最公正的环境，在一个结合体育博彩及网路直播的娱乐平台上尽情享乐，亚洲市场最具权威及最先进的科技系统所提供。
                    </a>
                </li>
                <li>
                    <a href="#" title="联络我们" class="footerBtn04">
                        <strong>联络我们</strong> 如果您有任何关于娱乐场的疑问，可通过在线客服、电话及电邮方式与我们取得联系。BBIN提供24/7小时客户服务。
                    </a>
                </li>
                <li>
                    <a href="#" title="帮助中心" class="footerBtn05">
                        <strong>帮助中心</strong> 您可以通过常见问题栏目获得有关开户、存款、提款及技术方面的帮助。
                    </a>
                </li>
            </ul>
            <!--Top-->
            <div id="top" class="top">
                <div class="hoverFade" style="background-position:left bottom;">
                    <a href="#" title="Top" style="background-position:left top; opacity:1;"></a>
                </div>
            </div>
            <!--底部資訊-->
            <div class="footer clearfix">
                <a href="#" class="bbinlogo  floatL"><img src="image/not-use/white.png" width="80px"></a>
                <a href="#" class="ublogo  floatL"></a>
                <div class="footerInfo floatR">
                    <div class="footerLink">
                        <a href="about.php">关于我们</a>
                        <a href="#">联系我们</a>
                        <a href="#">合作伙伴</a>
                        <a href="#">存款帮助</a>
                        <a href="#">取款帮助</a>
                        <a href="#">常见问题</a>
                        <a href="#">责任博彩</a>
                    </div>
                    <div class="copyright">Copyright © BBIN Reserved.</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/main.js"></script>
</body>

</html>