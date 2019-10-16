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
    <div id="mainBody02" class="clearfix">
        <div id="page-header">
            <div id="page-header02" class="clearfix">
                <div class="header-top">
                    <div class="flag-wrap ">
                        <div class="lang-wrap">
                            <a href="#" class="cn flag01"></a>
                            <a href="#" class="tw flag02"></a>
                            <a href="#" class="en flag03"></a>
                        </div>
                    </div>
                </div>
                <!--        star header-->
                <div id="header" class="wrapper">
                    <!--          start login-->
                    <div id="login-wraper">
                        <a href="index.php" class="logo"></a>
                        <div id="login">
                            <input class="name" type="text" value="asdqwe123456789@esb" />
                            <input class="password" type="text" value="密码" />
                            <input class="code" type="text" value="验证码" />
                        </div>
                        <div class="login-btn-wrap">
                            <a href="#" class="GetPW">忘记密码</a>
                            <a href="#" class="btn-joinus"></a>
                            <a href="index_login.php" class="btn-login"></a>
                        </div>
                    </div>
                    <!--          end login-->
                    <div class="mainnav02 mainnav">
                        <ul class="nav02">
                            <li id="LS-first"><a href="index.php">首页</a></li>
                            <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                             <li id="LS-live"><a href="live.php"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                            <li id="LS-game"><a href="casino_login.php"><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="" class="textGlitter"><span>优惠活动</span></a></li>
                            <li id="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                        </ul>
                    </div>
                    <div class="title-wrap title-welcome">
                    </div>
                </div>
            </div>
        </div>
        <!--          end page-header-->
        <div id="page-container02">
            <div id="page-body">
                <!--側邊欄-->
                <div id="sidebar">
                    <div class="sidebar-top"></div>
                    <div class="sidebar-y">
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
                    <div class="sidebar-bottom"></div>
                </div>
                <!--側邊欄 END-->
                <!--關於我文章-->
                <div class="article">
                    <p>关于我们</p>
                    <p> 本公司与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。 我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。本公司所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开! 在市场上众多的博彩网站中，玩家选择本公司，除了多元化的产品，也是因为BBIN娱乐城良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。本公司以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN娱乐城绝对是玩家最明智的选择!</p>
                </div>
                <!--關於我文章 END-->
            </div>
            <!--          end page-body-->
        </div>
        <div id="page-footer">
            <div class="footer-wraper">
                <div class="footer">
                    <div class="footer-list">
                        <ul>
                            <li><a href="about.php">关於我们</a></li>
                            <li> | </li>
                            <li><a href="#">联系我们</a></li>
                            <li> | </li>
                            <li><a href="#">合作伙伴</a></li>
                            <li> | </li>
                            <li><a href="#">存款帮助</a></li>
                            <li> | </li>
                            <li><a href="#">取款帮助</a></li>
                            <li> | </li>
                            <li><a href="#">常见问题</a></li>
                            <li> | </li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="footer-logo">
                        <ul>
                            <a href="#0"><li class="ublogo"></li></a>
                                <a href="#0"><img src="image/not-use/white.png" width="80px"></a>
                            <li></li>
                        </ul>
                    </div>
                    <!--        footer-logo-->
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
