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
    <div id="mainBody-bg" class="clearfix">
        <div id="mainBody">
            <div id="page-header">
                <div id="header" class="wrapper">
                    <div class="header-top">
                        <a href="index.php" class="logo"></a>
                        <!--                    nav star-->
                        <div class="mainnav-wrap">
                            <div class="mainnav">
                                <ul>
                                    <li id="LS-first"><a class="current" href="index.php">首页</a></li>
                                    <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                                        <div id="nav-ball" style="display:none" class="ele-drop-group">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
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
                                    <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                                        <div id="nav-game" style="display:none" class="ele-drop-group">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-lottery"><a href="lottery.php">彩票游戏</a></li>
                                    <li id="LS-mobile"><a href="">手机下注</a></li>
                                    <li id="LS-memberexclusiveii"><a href="" class="textGlitter">优惠活动</a></li>
                                    <li id="LS-download"><a href="">下载区</a></li>
                                    <li id="LS-service"><a href="">在线客服</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 語系 -->
                    <div class="headerbar">
                        <div id="lang-wrap">
                            <div id="langTitle">简体中文</div>
                            <div id="langOption">
                                <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                                <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                                <a href="#" target="mem_index" class="en">English</a>
                            </div>
                        </div>
                        <div class="logon-list">
                            <ul>
                                <li class="btn-mem"><a href="#">会员中心</a></li>
                                <li>|</li>
                                <li><a href="#">线上存款</a></li>
                                <li>|</li>
                                <li><a href="#">线上取款</a></li>
                                <li>|</li>
                                <li><a href="#">额度转换</a></li>
                                <li>|</li>
                                <li><a href="#">未读讯息 <span>(0)</span></a></li>
                                <li>|</li>
                                <li><a href="index.php">登出</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--banner-->
                    <div id="first-banner">
                        <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                            <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                                <ul>
                                    <li data-autoplaytime="5000">
                                        <a href="#">
                                            <img src="image/not-use/slider01.jpg">
                                        </a>
                                    </li>
                                    <li data-autoplaytime="5000">
                                        <a href="#">
                                            <img src="image/not-use/slider02.jpg">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.slideshow -->
                        <div id="logonBox">
                            <div id="logon">
                                <!-- meminfo -->
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
                            <div class="jackpot"><span>1362,162.62</span></div>
                            <a href="" class="btn-service"></a>
                        </div>
                    </div>
                    <!--banner end-->
                </div>
                <!--header end-->
            </div>
            <!--    end page-header-->
            <div id="page-container" class="wrapper">
                <div class="first-btn">
                    <a href="" class="btn-download"></a>
                    <a href="about.php" class="btn-welcome"></a>
                    <div class="first-news ">
                        <marquee direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为最新优惠公告：尊敬的BBIN会员，由即日起公司入款最低存款金额将调整为
                        </marquee>
                    </div>
                </div>
                <!--game-->
                <div id="game-wrap">
                    <div id="prev" class="scroll">PREV</div>
                    <div class="box">
                        <ul style="left:0px;" id="pics" class="pics">
                            <li>
                                <p>
                                    <a class="game01" href="live.php"></a>
                                </p>
                                <p>
                                    <a class="game02" href="sports.php"></a>
                                </p>
                                <p>
                                    <a class="game03" href="lottery.php"></a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a class="game04" href="casino_login.php"></a>
                                </p>
                                <p>
                                    <a class="game05" href="sports.php"></a>
                                </p>
                                <p>
                                    <a class="game06" href="lottery.php"></a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div id="next" class="scroll">NEXT</div>
                </div>
                <!--game end-->
            </div>
            <!--    end page-container-->
            <div id="page-footer">
                <div class="footer wrapper">
                    <a href="#" class="bbin"><img src="image/not-use/white.png" width="80px"></a>
                    <a href="#" class="ublogo"></a>
                    <div class="copyright-wrap">
                        <div class="footer-list">
                            <ul>
                                <li><a href="about.php">关于我们</a></li>
                                <li>|</li>
                                <li><a href="">联系我们</a></li>
                                <li>|</li>
                                <li><a href="">合作伙伴</a></li>
                                <li>|</li>
                                <li><a href="">存款幫助</a></li>
                                <li>|</li>
                                <li><a href="">取款幫助</a></li>
                                <li>|</li>
                                <li><a href="">常见问题</a></li>
                                <li>|</li>
                                <li><a href="">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="copyright">Copyright © BBIN Reserved </div>
                    </div>
                </div>
            </div>
            <!--    end page-footer-->
        </div>
        <!--end mainBody-->
    </div>
    <?php include '../template/base.php'; ?>
    <!-- Slideshow for this template -->
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    //- 輪播圖
    $('#js-ele-slideshow').slideshow({
        animationType  : 'fade',
        isNav          : 1,
        isNumber       : 1,
        navPosition    : 'right'
    });
    //- 文字閃爍
    new toggleColor('.textGlitter', ['#FF0', '#fff'], 600);
    //- game輪播語法
    (function() {
        var vari = {
            width: 810,
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
                    vari.width = 810;
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
</body>

</html>
