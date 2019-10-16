<!DOCTYPE html>
<html class="memberexclusiveii zh-cn">

<head>
	<meta charset="UTF-8">
	<title>优惠活动</title>
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
							<li id="LS-lottery" class="LS-lotterÍy"><a href="lottery.php">彩票游戏</a></li>
							<li id="LS-memberexclusiveii" class="LS-memberexclusiveii current"><a href="promotions.php">优惠活动</a></li>
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
				 <!-- begin promotions -->
				<div class="memberexclusiveii-wrap">
					<div id="memExclusive_1" class="memExclusive">
						<a href="#" class="promotionsImg  promotions01">
						</a>
					</div>
					<div id="memExclusive_2" class="memExclusive">
						<a href="#" class="promotionsImg promotions02">
						</a>
					</div>
					<div id="memExclusive_3" class="memExclusive">
						<a href="#" class="promotionsImg promotions03">
						</a>
					</div>
				</div>
				<!-- end promotions -->
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