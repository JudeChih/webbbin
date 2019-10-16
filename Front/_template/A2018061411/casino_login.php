<!DOCTYPE html>
<html class="game is-login zh-cn">

<head>
	<meta charset="UTF-8">
	<title>电子游艺</title>
	<link rel="stylesheet" href="../template/css/font-awesome.css">
	<link rel="stylesheet" href="css/style.css">
	<!-- Share core Javascript -->
	<script src="../template/js/jquery.js"></script>
</head>

<body>
	<div id="mainBody">
		<div id="page-header">
			<!--mainnav-->
			<div class="mainnav">
				<div class="page-wrap">
					<ul class="nav" id="menu-left">
						<li id="LS-first" class="LS-first"><a href="index.php">首页</a></li>
						<li id="LS-ball" class="LS-ball"><a herf="sports_login.php">体育赛事</a>
							<div id="nav-ball" class="ele-drop-group" style="display:none">
								<div class="lsub-inner-wrap">
									<a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
								</div>
							</div>
						</li>
						<li id="LS-live" class="LS-live"><a href="live.php">视讯直播</a>
						<div id="nav-lives" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                            </div>
                        </div>
						</li>
						<li id="LS-game" class="LS-game current"><a href="casino_login.php">电子游艺</a>
							<div id="nav-game" class="ele-drop-group" style="display:none">
								<div class="lsub-inner-wrap">
									<a v-for="game in games" :href="game.link">{{game.name}}</a>
								</div>
							</div>
						</li>
					</ul>
					<div class="logo"><a href="index.php"><img src="image/logo.png"></a></div>
					<ul class="nav" id="menu-right">
						<li id="LS-lottery" class="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
						<li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="promotions.php">优惠活动</a></li>
						<li id="LS-mobile" class="LS-mobile"><a href="#">手机下注</a></li>
						<li id="LS-service" class="LS-service"><a href="#">在线客服</a></li>
					</ul>
				</div>
			</div>
			<!--end mainnav-->
			<div class="banner"><?php include '../template/game/slider.php'; ?></div>
			<!--login -->
			<div class="login-wrap">
				<div id="login">
					<div class="meminfo-wrap">
					    <div class="mem-info">
					        <div class="ele-accinfo ele-acc-name"><span>帐号：</span><strong>{{memAccount}}</strong></div>
					        <div class="ele-acc-unit">
					            <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
					                <span>余额：</span>
					                <strong>{{memTotal}}</strong>
					            </div>
					            <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
					                <div class="ele-accinfo ele-other-balance">
					                    <i class="fa fa-plus-square"></i>
					                </div>
					            </div>
					            <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
					                <div class="ele-obalance-item">
					                    <div class="ele-obalance" v-for="membalance in membalances">
					                        <span>{{membalance.name}}</span>
					                        <strong>{{membalance.balance}}</strong>
					                    </div>
					                </div>
					                <div class="ele-balance-tool">
					                    <a href="#">额度转换</a>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
					<ul class="logon-list list-dividing">
						<li><a href="#">会员中心</a></li>
						<li><a href="#">线上存款</a></li>
						<li><a href="#">线上取款</a></li>
						<li><a href="#">额度转换</a></li>
						<li><a href="index.php">登出</a></li>
					</ul>
				</div>
				<!--lang-wrap -->
				<div id="lang-wrap" class="lang-wrap">
					<div id="ele-lang-wrap" class="langTitle">
						<a href="#" class="flag02">简体中文</a>
					</div>
					<div id="ele-lang-group" style="display: none;">
						<a href="#" class="zh-ch flag02">简体中文</a>
						<a href="#" class="zh-tw flag01">繁體中文</a>
						<a href="#" class="en flag03">ENGLISH</a>
					</div>
				</div>
				<!--end lang-wrap -->
			</div>
			<!--end login -->
		</div>
		<!--end page-header-->
		<!--page-container -->
		<div id="page-container">
			<!--page-body -->
			<div class="page-body">
				<!--game-->
				<div class="game-wrap">
					<?php include '../template/game/index.php'; ?>
				</div>
				<!--end game-->
			</div>
			<!--end page-body -->
		</div>
		<!--end page-container -->

		<!--page-footer-->
		<div id="page-footer">
			<div class="footer">
			<div class="footer-note">
				<ul>
					<li>
						<img src="image/footer_icon01.jpg" align="absmiddle">
						<p class="footer-note-title">提供多种快速且便利的付款方式</p>
						<p class="footer-note-subtitle">The most rapid service efficiency</p>
					</li>
					<li>
						<img src="image/footer_icon02.jpg">
						<p class="footer-note-title">24hr全天候线上客服</p>
						<p class="footer-note-subtitle">24hr online service all the day</p>
					</li>
					<li>
						<img src="image/footer_icon03.jpg">
						<p class="footer-note-title">拥有全新娱乐手机下注平台</p>
						<p class="footer-note-subtitle">Play on your mobile</p>
					</li>
				</ul>
			</div>
			<div class="footer-info">
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
				<div class="footer-logo">
					<a href="#"><img src="image/not-use/gray.png" width="77px"></a>
                    <a href="#"><img src="image/ublogo.jpg" /></a>
				</div>
				<div class="copyright">COPYRIGHT &copy; BBIN RESERVED</div>
			</div>
			</div>
		</div>
		<!--end page-footer-->
	</div>
	<!--end mainBody -->

<?php include '../template/base.php'; ?>
</body>
</html>