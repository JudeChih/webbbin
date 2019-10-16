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
<div class="mainBody-bg">
	<div id="mainBody">
		<div id="page-header">
			<div id="logo">
				<a href="index.html" class="logo"></a>
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
				</div>
			</div>
			<!--導覽列-->
			<!--導覽列-->
			<div class="mainnav">
				<ul id="nav"class="clearfix">
					<li id="LS-first" class="LS-first"><a href="index.php">首 页</a></li>
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
					<li id="LS-game" class="LS-game "><a href="#" class="current">电子游艺</a>
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
			<div class="title-wrap">
			</div>
		</div>
		<div id="page-continer">
			<div id="page-body">
				<div class="banner"><?php include '../template/game/slider.php'; ?></div>
				<!--game-->
				<div class="game-wrap">
					<?php include '../template/game/index.php'; ?>
				</div>
				<!--end game-->
			</div>
		</div>
		<div id="page-footer">
			<div class="footer clearfix">
				<div class="footer-logo">
					<a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="80px"></a>
					<a href="#" class="ublogo"></a>
				</div>
				<div class="footer-link-copyright">
					<ul class="footer-link">
						<li><a href="about.html">关於我们</a></li>
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
						<li>|</li>
					</ul>
					<div class="copyright">
						COPYRIGHT &copy; BBIN RESERVED
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../template/base.php'; ?>
<script src="js/main.js"></script>
</body>
</html>
