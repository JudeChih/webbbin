<!DOCTYPE html>
<html class="first zh-cn">
<head>
<meta charset="UTF-8">
<title>首页</title>
<link rel="stylesheet" href="../template/css/font-awesome.css">
<link rel="stylesheet" href="css/style.css">
<!-- Share core Javascript -->
<script src="../template/js/jquery.js"></script>
</head>
<body>
<!--mainBody Bg-->
<div class="mainBody-bg">
	<!--mainBody -->
	<div id="mainBody">
		<div id="page-header">
			<div id="logo">
				<a href="index.php" class="logo"></a>
			</div>
			<div class="header-right">
				<a href="index.php" class="btn-logout"></a>
				<!--國旗區域-->
				<div class="lang-select">
					<input type="checkbox">
					<label data-default="简体中文" data-focus="选择语系"></label>
					<ul>
						<li><a href="#">繁體中文</a></li>
						<li><a href="#">English</a></li>
					</ul>
				</div>
				<ul class="logon-list list-dividing">
					<li><a href="#">会员中心</a></li>
					<li><a href="#">线上存款</a></li>
					<li><a href="#">线上取款</a></li>
					<li><a href="#">额度转换</a></li>
					<li><a href="#">未读讯息<span>(1)</span></a></li>
				</ul>
				<!--登入後區域-->
				<div id="logon">
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
					<!-- <div class="logon-acc">
						<div class="acc-name"><span>帐号 :</span><strong>artweb2</strong></div>
						<div class="first-balance"><span>BBIN余额 :</span><strong>0</strong></div>
						<div class="obalance"><a href="#" class="MemberDate"><i class="fa fa-plus-square"></i></a>
							<div id="Member-Sub">
								<div class="MemberDate">
									<ul>
										<li>体育投注余额：100.08</li>
										<li>AG视讯余额：---</li>
										<li>歐博視訊餘額：68.00</li>
									</ul>
									<div class="MemberChange"><a href="#" class="btn_change">额度转换</a></div>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
			<!--導覽列-->
			<div class="mainnav">
				<ul id="nav"class="clearfix">
					<li id="LS-first" class="LS-first"><a href="index.php" class="current">首 页</a></li>
					<li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事</a>
					<!--子選單-->
					<div id="nav-ball" style="display:none" class="ele-drop-group">
						<div class="lsub-inner-wrap">
							<div class="lsub-inner-wrap">
								<a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
							</div>
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
					<li id="LS-game" class="LS-game "><a href="#">电子游艺</a>
					<!--子選單-->
					<div id="nav-game" style="display:none" class="ele-drop-group">
						<div class="lsub-inner-wrap">
							<a v-for="game in games" :href="game.link">{{game.name}}</a>
						</div>
					</div>
					</li>
					<li id="LS-lottery" class="LS-lottery "><a href="lottery.php">彩票游戏</a></li>
					<li id="LS-memberexclusiveii" class="LS-memberexclusiveii "><a href="#" class="textGlitter">优惠活动</a></li>
					<li id="LS-mobile" class="LS-mobile"><a href="#">手机下注</a></li>
					<li id="LS-affiliation" class="LS-affiliation"><a href="#">合作伙伴</a></li>
					<li id="LS-service" class="LS-service"><a href="#">在线客服</a></li>
				</ul>
			</div>

		</div>

		<div id="page-container">
			<div id="page-body">
				<!--slideshow -->
				<div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
				    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
				        <ul>
				            <li data-autoplaytime="5000">
				                <a href="#"><img src="image/not-use/slider01.png"></a>
				            </li>
				            <li data-autoplaytime="5000">
				                <a href="#"><img src="image/not-use/slider02.png"></a>
				            </li>
				        </ul>
				    </div>
				</div>
				<!-- /.slideshow -->
				<div class="first-game-wrap">
					<div class="first-game">
						<a href="bb-sports.php" class="first-game01"></a>
						<a href="live.php" class="first-game02"></a>
						<a href="casino.php" class="first-game03"></a>
						<a href="lottery.php" class="first-game04"></a>
					</div>
				</div>

				<a href="#" class="btn-service"></a>
				<div class="first-news-jackpot-wrap clearfix">
					<!-- 最新消息-->
					<div id="first-news" class="news-wrap">
						<marquee id="ele-msgNews" class="msgNews" behavior="scroll" scrollamount="4" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
							<p>
								NEWS..欢迎光临BBIN娱乐城我们将24小时为您服务，打造高品质游戏平台，热络的网路博彩市场中，不断地求新求变，全新电子游艺【加勒比扑克】，游戏画面..
							</p>
						</marquee>
					</div>
					<div class="first-jackpot">
						<span>5,994,567.74</span>
					</div>
				</div>


			</div>
		</div>
		<!--page-footer-->
		<div id="page-footer">
			<div class="footer clearfix">
				<div class="footer-logo">
					<a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="80px"></a>
					<a href="#" class="ublogo"></a>
				</div>
				<div class="footer-link-copyright">

					<ul class="footer-link list-dividing">
						<li><a href="about.php">关於我们</a></li>
						<li><a href="#">联系我们</a></li>
						<li><a href="#">合作伙伴</a></li>
						<li><a href="#">存款帮助</a></li>
						<li><a href="#">取款帮助</a></li>
						<li><a href="#">常见问题</a></li>
						<li><a href="#">责任博彩</a></li>
					</ul>

					<div class="copyright">COPYRIGHT &copy; BBIN RESERVED</div>
				</div>
			</div>
		</div>
		<!--end page-footer-->
	</div>
	<!--end mainBody-->
</div>
<!--end mainBody Bg-->
<?php include '../template/base.php'; ?>
<script src="js/main.js"></script>
<script src="../template/js/TweenMax.min.js"></script>
<script src="../template/js/tween.slideshow.js"></script>
<script>
	$('#js-ele-slideshow').slideshow({
	    animationType: 'fade',
	    isNav: 1,
	    navPosition: 'left'
	});
</script>

</body>
</html>
