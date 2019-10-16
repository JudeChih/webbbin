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
    <div id="mainBody" class="clearfix">
        <div id="page-header" class="clearfix">
            <div id="header" class="clearfix">
                <div class="header-top wrapper ">
                    <div class="logon-list">
                        <ul>
                            <li><a href="#">会员中心</a></li>
                            <li>|</li>
                            <li><a href="#">线上存款</a></li>
                            <li>|</li>
                            <li><a href="#">线上取款</a></li>
                            <li>|</li>
                            <li><a href="#">额度转换</a></li>
                            <li>|</li>
                            <li><a href="#">未读讯息 <span>(1)</span></a></li>
                            <li>|</li>
                            <li><a href="index.php">登出</a></li>
                        </ul>
                    </div>
                    <a href="index.php" class="logo"></a>
                    <div class="header-right right02">
                        <!-- 語系 -->
                        <div class="lang-wrap">
                            <a href="" class="cn flag01"></a>
                            <a href="" class="tw flag02"></a>
                            <a href="" class="en flag03"></a>
                        </div>
                        <!--					start login-->
                        <div id="logoutBox">
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
                        <!--          end login-wrap-->
                    </div>
                </div>
                <!--mainnav-->
                <div class="mainnav-wrap">
                	<ul class="mainnav">
                		<li id="LS-first" class="LS-first"><a href="index.php" class="current"><span>首頁</span></a></li>
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
                		<li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                		<li id="LS-mobile" class="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                		<li id="LS-service" class="LS-service"><a href="#"><span>在线客服</span></a></li>
                	</ul>
                </div>
                <!--end mainnav-->
            </div>
            <!--header end-->
        </div>
        <!--	end page-header-->
        <div id="page-container" class="wrapper">
            <div id="page-body" class="wrapper">
                <div class="first-news ">
                    <marquee direction="left" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为
                    </marquee>
                </div>
                <!--banner-->
                <div class="first-banner-wrap clearfix">
                    <div class="first-btn">
                        <a href="" class="btn-welcome"></a>
                        <a href="" class="btn-promotions"></a>
                        <a href="" class="btn-service"></a>
                    </div>
                    <!--slideshow-->
					<div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
			            <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
			                <ul>
			                    <li data-autoplaytime="5000">
			                        <a href="#">
			                            <div class="img" style="background-image: url('image/not-use/slider01.jpg');"></div>
			                        </a>
			                    </li>
			                    <li data-autoplaytime="5000">
			                        <a href="#">
			                            <div class="img" style="background-image: url('image/not-use/slider02.jpg');"></div>
			                        </a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			        <!--end slideshow-->
                </div>
                <!--banner end-->
                <!--game-->
                <div id="game-wrap">
                    <div id="prev" class="scroll">PREV</div>
                    <div class="box">
                        <ul style="left:0px;" id="pics" class="pics">
                            <li>
                                <p>
                                    <a class="game01" href="bbsport.php"></a>
                                </p>
                                <p>
                                    <a class="game02" href="bbsport.php"></a>
                                </p>
                                <p>
                                    <a class="game03" href="live.php"></a>
                                </p>
                                <p>
                                    <a class="game04" href="lottery.php"></a>
                                </p>
                                <p>
                                    <a class="game05" href="casino_login.php"></a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a class="game06" href=""></a>
                                </p>
                                <p>
                                    <a class="game07" href="bbsport.php"></a>
                                </p>
                                <p>
                                    <a class="game08" href="bbsport.php"></a>
                                </p>
                                <p>
                                    <a class="game09" href="live.php"></a>
                                </p>
                                <p>
                                    <a class="game10" href="lottery.php"></a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div id="next" class="scroll">NEXT</div>
                </div>
                <!--game end-->
                <!--game輪播語法 -->
                <script type=text/javascript>
                (function() {
                    var vari = {
                        width: 858,
                        pics: document.getElementById("pics"),
                        prev: document.getElementById("prev"),
                        next: document.getElementById("next"),
                        len: document.getElementById("pics").getElementsByTagName("li").length,
                        intro: document.getElementById("pics").getElementsByTagName("p"),
                        now: 1,
                        step: 5,
                        dir: null,
                        span: null,
                        span2: null,
                        begin: null,
                        begin2: null,
                        end2: null,
                        move: function() {
                            if (parseInt(vari.pics.style.left, 10) > vari.dir * vari.now * vari.width && vari.dir == -1) {
                                vari.step = (vari.step < 2) ? 1 : (parseInt(vari.pics.style.left, 10) - vari.dir * vari.now * vari.width) / 5;
                                vari.pics.style.left = parseInt(vari.pics.style.left, 10) + vari.dir * vari.step + "px";
                            } else if (parseInt(vari.pics.style.left, 10) < -vari.dir * (vari.now - 2) * vari.width && vari.dir == 1) {
                                vari.step = (vari.step < 2) ? 1 : (-vari.dir * (vari.now - 2) * vari.width - parseInt(vari.pics.style.left, 10)) / 5;
                                vari.pics.style.left = parseInt(vari.pics.style.left, 10) + vari.dir * vari.step + "px";
                            } else {
                                vari.now = vari.now - vari.dir;
                                clearInterval(vari.begin);
                                vari.begin = null;
                                vari.step = 5;
                                vari.width = 858;
                            }
                        },
                        scr: function() {
                            if (parseInt(vari.span.style.top, 10) > -31) {
                                vari.span.style.top = parseInt(vari.span.style.top, 10) - 5 + "px";
                            } else {
                                clearInterval(vari.begin2);
                                vari.begin2 = null;
                            }
                        },
                        stp: function() {
                            if (parseInt(vari.span2.style.top, 10) < 0) {
                                vari.span2.style.top = parseInt(vari.span2.style.top, 10) + 10 + "px";
                            } else {
                                clearInterval(vari.end2);
                                vari.end2 = null;
                            }
                        }
                    };
                    vari.prev.onclick = function() {
                        if (!vari.begin && vari.now != 1) {
                            vari.dir = 1;
                            vari.begin = setInterval(vari.move, 20);
                        } else if (!vari.begin && vari.now == 1) {
                            vari.dir = -1
                            vari.width *= vari.len - 1;
                            vari.begin = setInterval(vari.move, 20);
                        };
                    };
                    vari.next.onclick = function() {
                        if (!vari.begin && vari.now != vari.len) {
                            vari.dir = -1;
                            vari.begin = setInterval(vari.move, 20);
                        } else if (!vari.begin && vari.now == vari.len) {
                            vari.dir = 1
                            vari.width *= vari.len - 1;
                            vari.begin = setInterval(vari.move, 20);
                        };
                    };
                })();
                </script>
                <!--game輪播語法 end-->
            </div>
        </div>
        <!--	end page-container-->
        <div id="page-footer">
            <div class="footer wrapper">
                <ul class="footer-list clearfix">
                    <li class="last"><a href="about.php">关于我们</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">合作伙伴</a></li>
                    <li><a href="">存款幫助</a></li>
                    <li><a href="">取款幫助</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">责任博彩</a></li>
                </ul>
                <div class="footer-bottom">
                    <a href="index.php" class="bbinlogo">
                        <img src="image/not-use/white.png" width="80">
                    </a>
                    <a href="#" class="ublogo">
                        <img src="image/not-use/ublogo/ublogo_a.png" width="120">
                    </a>
                    <div class="copyright">Copyright © BBIN Reserved </div>
                </div>
            </div>
        </div>
        <!--	end page-footer-->
    </div>
    <!--end mainBody-->
    <?php include '../template/base.php'; ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isNav: 1,
        isNumber: 1
    });
    new toggleColor('.textGlitter', ['#D8A300', '#fff'], 600);
    </script>
</body>

</html>
