<!DOCTYPE html>
<html class="about zh-cn">

<head>
	<meta charset="UTF-8">
	<title>联系我们</title>
	<link rel="stylesheet" href="css/style.css">
	<!-- Share core Javascript -->
	<script src="../template/js/jquery.js"></script>
</head>

<body>
	<div id="mainBody">
		<!-- begin page-header -->
		<div id="page-header">
			<div class="header-top">
				<div class="page-position">
					<div class="logo">
						<a href="index.php"><img src="image/logo.png"></a>
					</div>
					<!-- begin lang-wrap -->
					<div id="lang-wrap" class="lang-wrap">
						<div id="ele-lang-wrap">
							<a href="#">简体中文</a>
						</div>
						<div id="ele-lang-group" style="display: none;">
							<a href="#" class="zh-tw">繁體中文</a>
							<a href="#" class="en">ENGLISH</a>
						</div>
					</div>
					<!-- end lang-wrap -->
					<!-- begin login -->
					<div class="login-wrap">
						<div id="login">
							<form class="login-input form-group">
								<input type="text" placeholder="帐号" class="form-control name">
								<input type="text" placeholder="密码" class="form-control password">
								<input type="text" placeholder="验证码" class="form-control key">
								<a class="login-btn btn-submit" href="index_login.php">登入</a>
							</form>
							<div class="login-btn-wrap">
								<ul>
									<li><a href="#" class="login-btn btn-joinus">忘记密码</a></li>
									<li><a href="#" class="getPW">加入会员</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!--end login -->
					<div class="mainnav">
						<ul class="nav">
							<li id="LS-fist" class="LS-first"><a href="index.php">首页</a></li>
							<li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事</a>
								<div id="nav-ball" style="display:none" class="ele-drop-group">
                                	<a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
							</li>
							<li id="LS-live" class="LS-live"><a href="live.php">视讯直播</a>
							<div id="nav-lives" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                            </div>
                        </div>
							</li>
							<li id="LS-game" class="LS-game"><a href="casino_login.php">电子游艺</a>
								<div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
							</li>
							<li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
							<li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="promotions.php">优惠活动</a></li>
							<li id="LS-service" class="LS-service"><a href="#">在线客服</a></li>
						</ul>
					</div>
				</div>
				<div class="banner"></div>
			</div>
			<!-- end header-top -->
		</div>
		<!--end page-header -->

		<!-- begin page-container -->
		<div id="page-container">
			<!--begin page-body -->
			<div class="page-body">
				 <!-- begin about -->
				<div class="about-wrap">
					<div class="page-position">
						<div class="about-title"></div>
					</div>
					<!-- begin sidebar -->
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
						<div class="sidemenu-bottom clearfix">
							<img src="image/sidebar_bottom.png" />
						</div>
					</div>
					<!-- end sidebar -->
					<!-- begin article -->
					<div class="article">
						<p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
						<p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
						<p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
						<p>BBIN与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
						<p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
						<p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择 !</p>
					</div>
					<!-- end article-->
				</div>
				<!-- end about -->
			</div>
			<!-- end page-body -->
		</div>
		<!-- end page-container -->

		<!-- begin page-footer -->
		<div id="page-footer">
			<div class="wrapper">
				<div class="footer-infor clearfix">
					<ul>
						<li>
							<div class="footer-infor-title">MOBILE BET</div>
							<div class="footer-infor-content"><a href="#"><img src="image/lang/zh-cn/footer_mobile.png"></a></div>
						</li>
						<li>
							<div class="footer-infor-title">PAYMENT METHODS</div>
							<div class="footer-infor-content"><img src="image/footer_img.png"></div>
						</li>
						<li>
							<div class="footer-infor-title">ONLINE SERVICE</div>
							<div class="footer-infor-content"><a href="#"><img src="image/footer_service.png"></a></div>
						</li>
					</ul>;

				</div>
				<div class="footer-logo">
					<a href="#"><img src="image/not-use/gray.png" width="90px"></a>
                    <a href="#"><img src="image/ublogo.png" /></a>
				</div>
				<div class="footer-nav">
					<ul>
						<li><a href="about.php">关于我们</a></li>
						<li><a href="#">联系我们</a></li>
						<li><a href="#">合作伙伴</a></li>
						<li><a href="#">存款帮助</a></li>
						<li><a href="#">取款帮助</a></li>
						<li><a href="#">常见问题</a></li>
						<li><a href="#">责任博彩</a></li>
					</ul>
				</div>
				<div class="footer-copyright">COOPYRIGHT &copy; BBIN RESERVED</div>
			</div>
		</div>
		<!-- end page-footer -->
		</div>
		<!--end mainBody -->

<?php include '../template/base.php'; ?>
<script>
	$(".langTitle").click(function(){
		$(this).toggleClass('lang-turn');
	});
</script>
</body>
</html>