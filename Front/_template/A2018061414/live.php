<!DOCTYPE html>
<html class="livetop zh-cn">
<head>
<meta charset="UTF-8">
<title>视讯直播</title>
<link rel="stylesheet" href="css/style.css">
<!-- Share core Javascript -->
<script src="../template/js/jquery.js"></script>
</head>
<body>
<!-- 登入區-->
<div class="login-area">
	<div class="login-wrap">
		<div id="login">
			<div class="login-title">
			</div>
			<form class="login-input form-group">
				<input type="text" placeholder="帐　号" class="form-control name">
				<input type="text" placeholder="密　码" class="form-control password">
				<input type="text" placeholder="验证码" class="form-control key">
			</form>
			<a class="btn-submit" href="index_login.php"></a>
			<ul class="login-ls">
				<li><a href="#" class="btn-joinus">加入会员</a></li>
				<li><a href="#" class="getPW">忘记密码</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="mainBody-bg">
	<div id="mainBody">
		<div id="page-header">
			<div id="logo">
				<a href="index.php" class="logo"></a>
			</div>
			<div class="header-right">
				<a href="#" class="btn-login"></a>
				<!--國旗區域-->
				<div class="lang-select">
					<input type="checkbox">
					<label data-default="简体中文" data-focus="选择语系"></label>
					<ul>
						<li><a href="#">繁體中文</a></li>
						<li><a href="#">English</a></li>
					</ul>
				</div>
			</div>
			<!--導覽列-->
			<div class="mainnav">
				<ul id="nav"class="clearfix">
					<li id="LS-first" class="LS-first"><a href="index.php">首 页</a></li>
					<li id="LS-ball"><a href="sports_login.php">体育赛事</a>
					<!--子選單-->
					<div id="nav-ball" style="display:none" class="ele-drop-group">
						<div class="lsub-inner-wrap">
							<div class="lsub-inner-wrap">
								<a v-for="ball in balls" :href="ball.link">{{ball.name}}</a>
							</div>
						</div>
					</div>
					</li>
					 <li id="LS-live"><a href="live.php" class="current"><span>视讯直播</span></a>
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
			<div class="title-wrap">
			</div>
		</div>
		<div id="page-container">
			<div id="page-body">
				<div class="content-top"></div>
				<div class="content-wrap">
					<!--live -->
					<div class="livetop-wrap">
						<?php include "../template/livetop/index.php"; ?>
					</div>
					<!--end live -->
				</div>
				<div class="content-bottom"></div>
			</div>
		</div>
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
