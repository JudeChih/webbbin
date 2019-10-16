<!DOCTYPE html>
<html class="madvertis at1 zh-cn">
<head>
    <meta charset="UTF-8">
    <title>关于我们</title>
    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>
<body>
<div id="mainBody">
    <!-- page-header -->
    <div id="page-header">
        <div class="header-top clearfix">
            <!-- lang -->
            <!-- inline -->
            <!-- <div class="ele-lang-wrap">
                <div class="ele-lang-group">
                    <a href="#" class="ele-lang-option flag01"></a>
                    <a href="#" class="ele-lang-option flag02 ele-lang-current"></a>
                    <a href="#" class="ele-lang-option flag03"></a>
                </div>
            </div> -->
            <!-- select -->
            <div id="ele-lang-wrap" class="ele-lang-wrap">
                <div class="ele-lang-title">
                    <a href="#" class="flag02">简体中文</a>
                </div>
                <div id="ele-lang-group" class="ele-lang-group" style="display: none;">
                    <a href="#" class="ele-lang-option flag01">繁体中文</a>
                    <a href="#" class="ele-lang-option flag02 ele-lang-current">简体中文</a>
                    <a href="#" class="ele-lang-option flag03">ENGLISH</a>
                </div>
            </div>
            <!-- end lang -->
            <!-- logon link -->
            <div class="SU-Menual clearfix">
            <!-- <ul class="login-Menual">
                <li><a href="#">会员中心</a></li>
                <li><a href="#">线上存款</a></li>
                <li><a href="#">线上取款</a></li>
                <li><a href="#">额度转换</a></li>
                <li><a href="#">未读讯息(0) </a></li>
                <li><a href="index.php">登出</a></li>
            </ul> -->
            </div>
            <!-- end logon link -->
            <div id="ele-logo-wrap" class="logo">
                <a href="index.php" id="ele-logo-img"></a>
            </div>
            <!-- mainnav -->
            <div class="mainnav-wrap">
                <ul class="mainnav clearfix" data-lsub-style="fade">
                    <!--
                    data-lsub-style="slide/fade" 初始设定slide
                    data-lsub-delay="100" 延迟
                    data-lsub-align="center/left" 初始设定center
                    data-lsub-y="100" x距离
                    data-lsub-x="100" y距离
                    -->
                    <li id="LS-first" class="LS-first"><a href="index.php"><span>首页</span></a></li>
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
                    <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="#" class="js-article-color" data-color="#CF4647|#FFCC01"><span>优惠活动</span></a></li>
                    <li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                    <li id="LS-affiliation" class="LS-affiliation"><a href="#"><span>合作伙伴</span></a></li>
                    <li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                </ul>
            </div>
            <!-- end mainnav -->
            <!-- news -->
            <div class="news-wrap">
                <div class="news-title"></div>
                <marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="5" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                    <a href="#">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                </marquee>
            </div>
            <!-- end news -->
        </div>
        <div class="header-bottom clearfix">
            <!-- banner -->
            <div class="page-title banner-wrap"></div>
            <!-- end banner-->
            <!-- login -->
            <div class="login-wrap">
                <div class="login-title"></div>
                <div id="LoginForm">
                    <p class="login-unit login-unit-user">
                        <label name="username" for="username" class="login-placeholder">帐号</label>
                        <input name="username" type="text" class="login-input">
                    </p>
                    <p class="login-unit login-unit-pwd">
                        <label name="passwd" for="passwd" class="login-placeholder">密码</label>
                        <input name="passwd" type="password" class="login-input">
                    </p>
                    <p class="login-unit login-unit-chk">
                        <label name="rmNum" for="rmNum" class="login-placeholder">验证码</label>
                        <input name="rmNum" type="text" class="login-input">
                    </p>
                    <a class="link-login" href="index_login.php"></a>
                    <a class="link-forgetpw" href="#">忘记密码</a>
                    <a class="link-join" href="#">立即加入</a>
                </div>
            </div>
            <!-- end login -->
        </div>
    </div>
    <!-- end page-header -->
    <!-- page-container -->
    <div id="page-container">
        <div id="page-body">
			<!--about -->
			<div class="about-wrap">
				<!-- sidebar -->
				<div id="page-sidebar" class="page-sidebar">
					<div class="sidemenu-header"></div>
					<div class="sidemenu-body">
						<ul class="sidemenu">
							<li class="current"><a href="about.php">关于我们</a></li>
							<li><a href="#">联系我们</a></li>
							<li><a href="#">合作伙伴</a></li>
							<li><a href="#">存款帮助</a></li>
							<li><a href="#">取款帮助</a></li>
							<li><a href="#">常见问题</a></li>
							<li><a href="#">责任博彩</a></li>
						</ul>
					</div>
					<div class="sidemenu-footer"></div>
				</div>
				<!-- end sidebar -->
				<!-- article -->
				<div class="page-right">
                    <h3>关于我们</h3>
					<p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
					<p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
					<p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
				</div>
				<!-- end article-->
			</div>
			<!--end about -->
		</div>
	</div>
	<!--end page-container-->
	<!-- page-footer -->
    <div id="page-footer">
        <a href="#" class="bblogo">
            <img src="image/not-use/red.png" width="80">
        </a>
        <a href="#" class="browser-logo">
            <img src="image/not-use/ublogo/ublogo_a.png" width="92">
        </a>
        <div class="article-menu">
            <a href="about.php">关于我们</a>
            <a href="#">联系我们</a>
            <a href="#">合作伙伴</a>
            <a href="#">存款帮助</a>
            <a href="#">取款帮助</a>
            <a href="#">常见问题</a>
            <a href="#" class="last-child">责任博彩</a>
        </div>
        
        <div class="footer-info"></div>
        <div class="copyright">COPYRIGHT © BBIN RESERVED</div>
    </div>
    <!-- end page-footer -->
</div>
<?php include('../template/base.php'); ?>
</body>
</html>