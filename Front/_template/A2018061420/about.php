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
        <div id="page-header">
            <div id="header">
                <div class="header-top">
                    <!--nav-->
                    <div class="mainnav">
                        <ul class="nav">
                            <li id="LS-first active"><a href="index.php">HOME<br /><span>首页</span></a></li>
                            <li id="LS-ball"><a href="sports_login.php">SPORTS<br /><span>体育赛事</span></a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php">LIVE CASINO<br /><span>视讯直播</span></a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                            </li>
                            <li id="LS-game"><a href="">CASINO<br /><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div id="logo">
                                <a href="index.php"></a>
                            </div>
                            <li id="LS-lottery"><a href="lottery.php">LOTTERY<br /><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="promotions.php">PROMOTIONS<br /><span>优惠活动</span></a></li>
                            <li id="LS-affiliation"><a href="#">MOBILE BET<br /><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#">SERVICE<br /><span>在线客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header2">
                <div id="top1000">
                    <!--登入區-->
                    <div id="login">
                        <div class="loginbox">
                            <div id="lang-wrap">
                            <div id="ele-lang-wrap">简体中文</div>
                            <div id="ele-lang-group">
                                <a href="#" target="mem_index" class="zh-tw langCurrent">简体中文</a>
                                <a href="#" target="mem_index" class="zh-cn">繁體中文</a>
                                <a href="#" target="mem_index" class="en">English</a>
                            </div>
                        </div>
                            <div class="inputall">
                                <ul class="name">帐号</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="inputall">
                                <ul class="name">密码</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="inputall">
                                <ul class="name">验证码</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="getPW"><a href="#">忘记密码</a>｜<a href="#">加入会员</a></div>
                            <div>
                                <a href="index_login.php" class="btn-submit">LOGIN</a>
                            </div>
                        </div>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <div class="title-page"></div>
                <div class="about-wrap">
                    <!--側邊欄-->
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
                    <!--側邊欄 END-->
                    <div class="article">
                        <p><span>服务 | 产品 | 娱乐</span></p>
                        <p>
                            BBIN娱乐城与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的創意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                        <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。视讯直播游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。BBIN娱乐城所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                        <p>在市场上众多的博彩网站中，玩家选择BBIN娱乐城，除了多元化的产品，也是因为长江国际娱乐城-波音公司良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。BBIN娱乐城以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN娱乐城绝对是玩家最明智的选择!</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-footer" class="clearfix">
            <div class="footer">
                <div class="footer-top">
                   <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关于我们</a></li>
                        <li> │ </li>
                        <li><a href="#">联系我们</a></li>
                        <li> │ </li>
                        <li><a href="#">合作伙伴</a></li>
                        <li> │ </li>
                        <li><a href="#">存款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">取款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">常见问题</a></li>
                        <li> │ </li>
                        <li><a href="#">责任博彩</a></li>
                        <br />
                        <p>Copyright © BBIN Reserved</p>
                    </ul>
                </div>
                <div class="footercasino"></div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
