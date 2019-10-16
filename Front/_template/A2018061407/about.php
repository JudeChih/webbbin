<!DOCTYPE html>
<html class="ltlottery zh-cn">

<head>
    <meta charset="UTF-8">
    <title>关于我们</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody" class="clearfix">
        <div id="page-header" class="clearfix">
            <div id="header" class="clearfix">
                <div class="header-top wrapper ">
                    <a href="index.php" class="logo"></a>
                    <div class="header-right">
                        <!-- 語系 -->
                        <div class="lang-wrap">
                            <a href="" class="cn flag01"></a>
                            <a href="" class="tw flag02"></a>
                            <a href="" class="en flag03"></a>
                        </div>
                        <!--					start login-->
                        <div id="loginBox">
                            <div class="login-list-wrap">
                                <div class="login-list">
                                    <a class="btn-joinus01" href="">．免费加入</a>
                                    <a class="btn-getpw" href="">．忘记密码</a>
                                </div>
                                <a href="index_login.php" class="btn-login"></a>
                            </div>
                            <div id="login">
                                <form id="form" name="form" method="post" action="">
                                    <input type="text" class="login-unit login-unit-user " placeholder="帐号">
                                    <input type="text" class="login-unit login-unit-pw " placeholder="密码">
                                    <input type="text" class="login-unit login-unit-chk" placeholder="验证码">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!--mainnav-->
                <div class="mainnav-wrap">
                    <ul class="mainnav">
                        <li id="LS-first" class="LS-first"><a href="index.php"><span>首頁</span></a></li>
                        <li id="LS-ball" class="LS-ball"><a href="#"><span>体育赛事</span></a>
                            <div id="nav-ball" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-live" class="LS-live"><a href="live.php"><span>视讯直播</span></a>
                            <div id="nav-live" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="live in lives" :href="live.link">{{live.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game" class="LS-game"><a href="#"><span>电子游艺</span></a>
                            <div id="nav-game" class="ele-drop-group" style="display:none">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{game.name}}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery" class="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                        <li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                        <li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                    </ul>
                </div>
                <!--end mainnav-->
            </div>
            <!--header end-->
            <div class="title-wrap">
                <div class="title title-welcome"> </div>
            </div>
        </div>
        <!--	end page-header-->
        <div id="page-container">
            <div id="page-body" class="clearfix">
                <!--側邊欄-->
                <div id="page-left">
                    <div class="sidebar-top"></div>
                    <div class="sidebar-middle">
                        <ul class="sidebar clearfix">
                            <li><a href="sports_login.php">BB体育</a></li>
                            <li><a href="#">NEW BB体育</a></li>
                            <li><a href="#">体育投注</a></li>
                            <li><a href="live.php">BB视讯</a></li>
                            <li><a href="#">AG视讯</a></li>
                            <li><a href="#">欧博视讯</a></li>
                            <li><a href="#">OG视讯</a></li>
                            <li><a href="#">GD视讯</a></li>
                            <li><a href="casino_login.php">BB电子</a></li>
                            <li><a href="#">MG电子</a></li>
                            <li><a href="#">GNS电子</a></li>
                            <li><a href="#">ISB电子</a></li>
                            <li><a href="#">HB电子</a></li>
                            <li><a href="lottery.php">彩票游戏</a></li>
                        </ul>
                    </div>
                    <div class="sidebar-bottom"></div>
                </div>
                <!--側邊欄 END-->
                <div id="page-right">
                    <div class="txt-wrap">
                        <div class="about-title">关于我们</div>
                        <br>
                        <div class="about-text">
                            <p>与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的創意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <br>
                            <br>
                            <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                            <br>
                            <br>
                            <p>在市场上众多的博彩网站中，除了多元化的产品，也是因为XX俱樂部-波音公司良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。XX俱樂部以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! </p>
                            <p>我们自豪的以业界最强的各种优惠方式回馈我们的会员，XX俱樂部绝对是玩家最明智的选择!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--	end page-container-->
        <div id="page-footer">
            <div class="footer wrapper">
                <ul class="footer-list clearfix">
                    <li class="last"><a href="about.php">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">存款幫助</a></li>
                    <li><a href="">取款幫助</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">责任博彩</a></li>
                </ul>
                <div class="footer-bottom">
                    <a href="index.php" class="bbinlogo">
                        <img src="image/not-use/white.png" width="80">
                    </a>
                    <a href="#" class="ublogo">
                        <img src="image/not-use/ublogo/ublogo_a.png" width="120">
                    </a>
                    <div class="copyright">Copyright © BBIN Reserved </div>
                </div>
            </div>
        </div>
        <!--	end page-footer-->
    </div>
    <!--end mainBody-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#D8A300', '#fff'], 600);
    </script>
</body>

</html>
