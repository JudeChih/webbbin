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
        <!--Header-->
        <div id="page-header" class="page-header clearfix">
            <div class="header clearfix">
                <a href="index.php" class="logo"></a>
                <div class="flag">
                    <div class="flag01"></div>
                    <div class="flag02"></div>
                    <div class="flag03"></div>
                </div>
                <div class="login">
                    <div class="login_box">
                        <input type="text" placeholder=" 验证码" class="INPUTlogin" />
                        <a href="#" class="no"></a>
                        <input type="text" placeholder=" 密 码" class="INPUTlogin" />
                        <input type="text" placeholder=" 帐 号" class="INPUTlogin" />
                        <a href="index_login.php" class="btn-joinus01">登 入</a>
                        <a href="#" class="getPW">忘记密码</a>
                        <div class="btn-line">|</div>
                        <a href="index_login.php" class="btn-submit">加入会员</a>
                    </div>
                </div>
                <div class="main-Menual">
                    <ul class="mainnav">
                        <li id="LS-first"><a href="index.php">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                         <li id="LS-live"><a href="live.php">视讯直播</a>
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
                        <li><a href="promotions.php" id="textGlitter">优惠活动</a></li>
                        <li><a href="#">手机下注</a></li>
                        <li><a href="#">在线客服</a></li>
                    </ul>
                </div>
                <div class="banner-inside banner-about">
                    <div class="title"></div>
                </div>
            </div>
        </div>
        <!-- page-header end-->
        <!--Container-->
        <div class="page-container clearfix">
            <div class="container clearfix">
                <div class="main-wrap clearfix">
                    <!--Sidebar Menu-->
                    <div class="gameMenual">
                        <div class="gameMenualTop"></div>
                        <div class="gameMenualII">
                            <ul>
                                <li><a href="#" class="current">关於我们</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">合作伙伴</a></li>
                            <li><a href="#">存款帮助</a></li>
                            <li><a href="#">取款帮助</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="gameMenualDown"></div>
                    </div>
                    <!--Main-->
                    <div class="articles">
                        <div>
                            <h4>关于我们</h4>
                            <p>与bbin进行技术合作，共同打造高质量游戏平台，目前拥有哥斯特黎加合法注册之博彩公司。我们一切博彩营业行为皆遵从哥斯特黎加政府博彩条约。我们在越来越热络的网络博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高质量的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                            <p>我们的体育博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是默认的计算机机率结果，以高科技的网络直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数生成机率，让玩家安心享受多元的娱乐性游戏。我們所有的游戏皆有共同的优点：无须下载、接口操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                            <P>在市场上众多的博彩网站中，玩家选择我們，除了多元化的产品，也是因为我們拥有良好的信誉，以及高质量的服务，我们的用心随处可见，绝无任何恶意软件，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员数据均经过加密，保障玩家隐私。我們以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，绝对是玩家最明智的选择!</P>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container end-->
        <!--Footer-->
        <div class="page-footer clearfix">
            <div class="footer">
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关於我们</a></li>
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
                <a href="#" class="ublogo"></a>
                <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="80px"></a>
                <div class="copyright">Copyright © BBIN Reserved</div>
            </div>
        </div>
        <!--Footer end-->
        <!--End-mainBody-->
    </div>
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
    </script>
</body>

</html>
