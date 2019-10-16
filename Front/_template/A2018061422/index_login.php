<!DOCTYPE html>
<html class="first is-login zh-cn">

<head>
	<meta charset="UTF-8">
	<title>首页</title>
	<link rel="stylesheet" href="../template/css/font-awesome.css">
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
                                <li><a href="#">未读讯息(<span>1</span>)</a></li>
                                <li><a href="index.php">登出</a></li>
                            </ul>
						</div>
					</div>
					<!--end login -->
					<div class="mainnav">
						<ul class="nav">
							<li id="LS-fist" class="LS-first current"><a href="index.php">首页</a></li>
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
			</div>
			<!-- end header-top -->
			<!-- being slideshow -->
	        <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
	            <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
	                <ul>
	                    <li data-autoplaytime="5000">
	                        <a href="#">
	                            <div class="img" style="background-image: url('image/not-use/slider01.png');"></div>
	                        </a>
	                    </li>
	                    <li data-autoplaytime="5000">
	                        <a href="#">
	                            <div class="img" style="background-image: url('image/not-use/slider02.png');"></div>
	                        </a>
	                    </li>
	                </ul>
	            </div>
	            <div class="header-scroll"><img src="image/scroll_btn.png"></div>
	        </div>
	        <!-- end slideshow -->
		</div>
		<!-- end page-header -->
		<!-- begin page-container -->
		<div id="page-container">
			<!-- begin first -->
			<div class="first-wrap">
				<div class="first-game-bar01"></div>
				<!-- begin news -->
				<div id="news" class="news">
					<div class="news-wrap">
						<div class="news-title">最新消息<span>News</span></div>
							<marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="1" direction="up" onmouseover="this.stop();" onmouseout="this.start();">
								<p>【 超大惊喜 】新注册开户惊喜，送18元体验金，赢到100即可申请提款。</p>
							</marquee>
					</div>
				</div>
				<!-- end news -->
				<!-- begin first-game01 -->
				<div class="first-game01">
					<div class="wrapper">
						<div class="first-game-title01">SPORTS<span>体育赛事</span></div>
						<div class="first-game-item01">
							<ul>
								<li>足球赛事<span>/</span>Soccer Game</li>
								<li>滚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;球<span>/</span>Running Ball</li>
								<li>NBA篮球<span>/</span>NBA Basketball</li>
								<li>冠&nbsp;&nbsp;军&nbsp;&nbsp;赛<span>/</span>Championship</li>
							</ul>
						</div>
						<div class="first-game-link"><a href="sports.php"></a></div>
						<div class="first-game-text01">
							<ul>
								<li>
									<p class="first-game-subtitle">欧洲五大联赛</p>
									体育在线投注是线上体育游戏娱乐姓的平台，将体育游戏赋予游戏化的多重玩法，以娱乐的形式与互动。
								</li>
								<li>
									<p class="first-game-subtitle">各类体育赛事</p>
									不同类别的体育赛事，涵盖世界范围内主要体育运动包括足球、美式足球、篮球、羽毛球、棒球、板球、曲棍球、手球、排球等等。
								</li>
								<li>
									<p class="first-game-subtitle">世界足坛顶尖赛事</p>
									目前有波音平台与沙巴平台，在游戏中体验的不仅仅是看球的乐趣。
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- end first-game01 -->
				<!-- begin first-game02 -->
				<div class="first-game-bar02"></div>
				<div class="first-game02">
					<div class="wrapper">
						<div class="first-game-title02">LIVE CASINO<span>视讯直播</span></div>
						<div class="first-game-item02">
							<ul>
								<li>百&nbsp;&nbsp;家&nbsp;&nbsp;乐<span>/</span>Baccarat</li>
								<li>轮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盘<span>/</span>Roulette</li>
								<li>温州牌九<span>/</span>Wenzhou Pai Gow</li>
								<li>德州扑克<span>/</span>Texas Hold’em</li>
							</ul>
						</div>
						<div class="first-game-link"><a href="live.php"></a></div>
						<div class="first-game-text02">
							<div class="first-game-subtitle">身历其境 无时差</div>
							<p>24小时营运的视讯直播产品，品项多样为亚洲之冠，以清晰的直播画面提供百家乐、德州扑克、温州牌九、轮盘、番摊和骰宝等多款热门产品，保证玩家在线上浏览最即时与公平的游戏实况，在任何地点都能体验如亲临现场般刺激愉快的感官享受。此外BBIN也提供竞眯厅、金臂厅、金臂多台、与多台下注等产品选项，增加多元的投注方式，予您值得信赖的服务品质。</p>
						</div>
					</div>
				</div>
				<!-- end first-game02 -->
				<!-- begin first-game03 -->
				<div class="first-game-bar03"></div>
				<div class="first-game03">
					<div class="wrapper">
						<div class="first-game-title03">LOTTERY<span>彩票游戏</span></div>
						<div class="first-game-item03">
							<ul>
								<li>六&nbsp;&nbsp;&nbsp;&nbsp;合&nbsp;&nbsp;&nbsp;&nbsp;彩<span>/</span>Mark Six</li>
								<li>BB3D时时彩<span>/</span>BB3D</li>
								<li>北 京 快 乐8<span>/</span>Beijing Keno</li>
								<li>BB&nbsp;快&nbsp;&nbsp;乐&nbsp;&nbsp;彩<span>/</span>BB KENO</li>
							</ul>
						</div>
						<div class="first-game-link"><a href="lottery.php"></a></div>
						<div class="first-game-text03">
							<div class="first-game-subtitle">创新娱乐大升级</div>
							<p>近年来我们致力于投资开发多种类的彩票游戏，2014年更打造了电视台等级数位摄影棚，并推出亚洲首创Lottery Live Show ─ BB LOTTO LIVE SHOW，以创新的节目方式让彩票产品娱乐升级。3D时时彩、快乐彩及滚球王，皆为BBIN自主研发的彩票产品，满足玩家多变的需求。</p>
						</div>
					</div>
				</div>
				<!-- end first-game03 -->
				<!-- begin first-game03 -->
				<div class="first-game-bar04"></div>
				<div class="first-game04">
					<div class="wrapper">
						<div class="first-game-title04">CASINO<span>电子游艺</span></div>
						<div class="first-game-item04">
							<ul>
								<li>老  虎  机<span>/</span>Slots Game</li>
								<li>电动扑克<span>/</span>Video Poker</li>
								<li>大型电玩<span>/</span>Big Game Machine</li>
								<li>桌上游戏<span>/</span>Table Game</li>
							</ul>
						</div>
						<div class="first-game-link"><a href="casino_login.php"></a></div>
						<div class="first-game-text04">
							<div class="first-game-subtitle">创新娱乐大升级</div>
							<p>BBIN提供超过百款机率游戏，近年来更积极开发多人对战游戏，希望能以丰富的玩法、视觉及声光效果提供顶级的娱乐享受，BBIN只想给您充满娱乐享受的游戏体验。</p>
						</div>
					</div>
				</div>
				<!-- end first-game03 -->
			</div>
			<!-- end first -->
		</div>
		<!-- end page-container -->
		<!-- begin page-footer -->
		<div id="page-footer">
			<div class="footer-gotop"><a href="#"><img src="image/first_gotop.png"></a></div>
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
	<script src="../template/js/TweenMax.min.js"></script>
	<script src="../template/js/tween.slideshow.js"></script>
	<script src="js/scroll.js"></script>
	<script>
		$('#js-ele-slideshow').slideshow({
			animationType: 'fade',
			isArrow: true
		});
		$(".header-scroll").click(function(){
				jQuery("html,body").animate({
					scrollTop: $(".first-game-title01").offset().top
				},1000);
			});
		$(".footer-gotop").click(function(){
			jQuery("html,body").animate({
				scrollTop:0
			},1000);
		});
	</script>
</body>
</html>