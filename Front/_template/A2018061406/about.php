<!DOCTYPE html>
<html class="madvertis at1 zh-cn">

<head>
    <meta charset="UTF-8">
    <title>欢迎光临</title>
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
                            <label name="">帐号</label>
                            <input type="text" class="loginInput" />
                        </p>
                        <p class="loginUnit floatL">
                            <label name="">密码</label>
                            <input name="" type="password" class="loginInput" />
                        </p>
                        <p class="loginUnit floatL">
                            <label name="">验证码</label>
                            <input name="" type="password" class="loginInput" />
                        </p>
                        <a href="index_login.php" class="btnLogin floatL"></a>
                        <div class="btnJoin floatL"><a href="#">忘记密码</a>|<a href="#">立即注册</a></div>
                    </div>
                </div>
                <!--Nav-->
                <div class="mainnav" data-lsub-y="-17">
                    <ul class="clearfix">
                        <li><a href="index.php" class="current">首页<span>HOME</span></a></li>
                        <li id="LS-ball"><a href="sports_login.php">体育赛事<span>SPORTS</span></a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="todo in todos" :href="todo.link">{{ todo.name }}</a>
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
                                    <a v-for="todo in todos" :href="todo.link">{{ todo.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="lottery.php">彩票游戏<span>LOTTERY</span></a></li>
                        <li><a href="promotions.php" class="textGlitter">优惠活动<span class="textGlitter">PROMOTIONS</span></a></li>
                        <li><a href="#">手机下注<span>MOBILE BET</span></a></li>
                        <li><a href="#">在线客服<span>ONLINE SERVICE</span></a></li>
                        <li><a href="#">下载区<span>DOWNLOAD</span></a></li>
                    </ul>
                </div>
                <!--Banner-->
                <div id="banner">
                    <img src="image/banner01.png">
                    <img src="image/title_welcome.png">
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
                <!--Sidebar-->
                <div id="gameMenual" class="floatL">
                    <div class="gameMenualTop"></div>
                    <ul class="gameMenualList">
                        <li><a href="#" class="current">关於我们</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">合作伙伴</a></li>
                            <li><a href="#">存款帮助</a></li>
                            <li><a href="#">取款帮助</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">责任博彩</a></li>
                    </ul>
                    <div class="gameMenualBottom"></div>
                </div>
                <!--主要內容-->
                <div id="articles" class="floatR">
                    <div>
                        <h4>关于我们</h4>
                        <p>BBIN进行技术合作，共同打造高质量游戏平台，目前拥有哥斯特黎加合法注册之博彩公司。我们一切博彩营业行为皆遵从哥斯特黎加政府博彩条约。 我们在越来越热络的网络博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高质量的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                        <p>诚信经营是BBIN立足之根本，多年来我们凭借在客户中形成的良好口碑，取得了在华语区客户对我们的广泛认可。坚持诚信为本，公平、公正地处理和解决客户提出的各种问题。作为国际专业的网上博彩游戏营运商，凭著世界级的博彩信息专家、经验丰富的服务团队、市场营销专家、先进的技术人才建立起最全面、完善的体系。我们承诺为每位玩家提供最佳、最安全、最公平的网上博彩游戏，以及全方位的服务。我们坚守「诚信」，力求创新，不断进步的精神，力拓多元化的博彩娱乐。我们聘用庞大的服务团队，凭市场推广、客户服务、技术支持等优秀人员的不懈努力，为玩家提供最专业的娱乐服务。</p>
                        <P>BBIN网络博彩平台为真实陆地赌场。赌场使用由世界博彩行业赌具专业提供商Intercasino产品亚太有限公司製作的标准游戏赌具，所有在线游戏的游戏规则，与澳门赌场完全一样。BBIN完善的安全体系保护您的安全及私隐，保证您享受公平的游戏。玩家在我们平台的所有活动均严格保密，我们不会向第三方包括政府透露玩家数据。所有银行交易由国际金融机构在高规格的加密措施和机密的网络中进行，进入玩家账户必须有玩家唯一的登录ID和密码确保玩家的资金安全有保障。</P>
                        <p>BBIN致力为每位玩家提供公平、公正、安全的在线游戏，真人荷官娱乐场平台系统採用亚洲市场最具权威品牌 「波音平台」。此外，所有真人荷官及主管均经过严格训练及挑选，每局牌局均有荷官主管负责监察确保游戏的真实度，保证让每位玩家在一个公平、公正及安全下进行游戏。</p>
                    </div>
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
    <script type="text/javascript">
    //- 文字閃爍
    new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
    //- 按鈕透明度切換
    $('.hoverFade a').hover(
        function() {
            $(this).stop().animate({
                'opacity': 0
            }, 650);
        },
        function() {
            $(this).stop().animate({
                'opacity': 1
            }, 650);
        }
    );
    //- 回到頂端
    $(function() {
        $("#top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, {
                duration: 1000,
                easing: "swing"
            });
            return false;
        });
    });
    </script>
</body>

</html>
