<!DOCTYPE html>
<html class="first is-login zh-cn">

<head>
	<meta charset="UTF-8">
	<title>首页</title>
	<link rel="stylesheet" href="../template/css/font-awesome.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/slick.css"/>
	<!-- Share core Javascript -->
	<script src="../template/js/jquery.js"></script>
</head>

<body>
	<!--mainBody -->
	<div id="mainBody">
		<!--page-header -->
		<div id="page-header">
			<!--mainnav-->
			<div class="mainnav">
				<div class="page-wrap">
					<ul class="nav" id="menu-left">
						<li id="LS-first" class="LS-first current"><a href="index.php">首页</a></li>
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
						<li id="LS-game" class="LS-game"><a href="casino_login.php">电子游艺</a>
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
			<!--slideshow -->
			<div class="slideshow">
				<div class="slider-cover"></div>
			  	<div class="slider slider-bg">
					<img src="image/not-use/slider01.jpg">
					<img src="image/not-use/slider02.jpg">
					<img src="image/not-use/slider01.jpg">
					<img src="image/not-use/slider02.jpg">
				</div>
				<div class="slider-lining"><img src="image/first_header_bg.png"></div>
				<div class="slider-wrap">
					<div class="slider slider-inner">
						<div><img src="image/not-use/slider01.jpg"></div>
						<div><img src="image/not-use/slider02.jpg"></div>
						<div><img src="image/not-use/slider01.jpg"></div>
						<div><img src="image/not-use/slider02.jpg"></div>
					</div>
				</div>
			</div>
		    <!--end slideshow -->
		    <!--news -->
			<div id="news" class="news">
				<div class="news-wrap">
					<div class="news-title"><img src="image/lang/zh-cn/news_title.png"></div>
						<marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="5" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
							<p>【 超大惊喜 】新注册开户惊喜，送18元体验金，赢到100即可申请提款。</p>
						</marquee>
				</div>
			</div>
			<!--end news -->
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
                        <li><a href="#">未读讯息(<span>1</span>)</a></li>
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
			<!--first-wrap-->
			<div class="first-wrap">
				<!--first-game-->
				<div class="first-game">
					<!--first-game01-->
					<div class="first-game01">
						<a href="sports.php"></a>
					</div>
					<!--end first-game01-->
					<!--first-game02-->
					<div class="first-game02">
						<a href="live.php"></a>
					</div>
					<!--end first-game02-->
				</div>
				<!--end first-game-->
				<!--first-best-->
				<div class="first-best">
					<div class="first-best-wrap">
						<div class="first-best-girl"><img src="image/first_best_girl.png"></div>
						<div class="first-best-item">
							<div class="first-best-title"><img src="image/lang/zh-cn/first_best_title.png"></div>
							<div class="first-best-subtitle">BBIN is your Best Choice.</div>
							<div class="first-best-text">BB视讯直播产品丰富玩法多样，每日24小时营运直播，提供最即时且公平的投注实况，在任何地点都能体验如亲临现场般刺激愉快的感官享受。</div>
						</div>
					</div>
				</div>
				<!--end first-best-->
				<!--first-wrap-->
				<div class="first-game">
					<!--first-game03-->
					<div class="first-game03">
						<a href="lottery.php"></a>
					</div>
					<!--end first-game03-->
					<!--first-game04-->
					<div class="first-game04">
						<a href="casino_login.php"></a>
					</div>
					<!--end first-game04-->
				</div>
				<!--end first-game-->
				<div class="first-responsible">
					<div class="first-responsible-wrap">
						<div class="first-responsible-text">BBIN提倡有节制赌博，望客户高兴与满意本公司提供的网上博彩服务，我们会为客户在博彩自律方面提供多方面的帮助，如您担心博彩会严重影响您或他人的生活，我们建议阁下遵守以下基本规则</div>
						<div class="first-responsible-list">
							<ul>
								<li>禁止未满18岁的人士参与赌博游戏。加入游戏之前，请您确定您已年满18周岁。</li>
								<li>在登入我们的系统时，请勿让未成人士在萤光幕显示范围内观看或停留。</li>
								<li>如果用户需要离开系统的操作范围，请谨记使用密码锁住电脑。</li>
								<li>用户务必将BBIN赌场帐户及密码放置安全地方。</li>
								<li>切勿与未成年人士分享信用卡或帐户等相关资讯。</li>
								<li>当用户从他人电脑登入BBIN赌场，或从远端位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时请留意是否已隔离任何未成年人士。</li>
  								<li>请勿过于沉迷游戏。</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--end first-wrap-->
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
	<!--end mainBody-->
	<?php include '../template/base.php'; ?>
	<script src="js/slick.js"></script>
	<script>
		$('.slider-bg').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			asNavFor: '.slider-inner'
		});
		$('.slider-inner').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.slider-bg',
			autoplay: true,
			autoplaySpeed: 5000,
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1024,
	      			settings: {
				        slidesToShow: 1
				    }
				}
			]
		});
	</script>
</body>
</html>