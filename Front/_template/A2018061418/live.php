<!DOCTYPE html>
<html class="livetop zh-cn">
<head>
    <meta charset="UTF-8">
    <title>视讯直播</title>
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
                    <li id="LS-live" class="LS-live"><a href="live.php" class="current"><span>视讯直播</span></a>
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
             <!-- banner -->
             <div class="page-title banner-wrap"></div>
            <!-- end banner-->
        </div>
    </div>
    <!-- end page-header -->
	<div id="page-container">
		<div id="page-body">
			<!--livetop-->
			<div class="livetop-wrap">
				<?php include "../template/livetop/index.php"; ?>
			</div>
			<!--end livetop -->
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
<?php include '../template/base.php'; ?>
</body>
</html>