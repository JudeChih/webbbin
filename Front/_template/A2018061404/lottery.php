<!DOCTYPE html>
<html class="ltlottery zh-cn">

<head>
    <meta charset="UTF-8">
    <title>彩票游戏</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody-bg01" class="clearfix">
        <div id="mainBody03">
            <div id="page-header">
                <div id="header" class="wrapper">
                    <div class="header-top">
                        <a href="index.php" class="logo"></a>
                        <!--nav star-->
                        <div class="mainnav-wrap">
                            <div class="mainnav">
                                <ul>
                                    <li id="LS-first"><a href="index.php">首页</a></li>
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
                                    <li id="LS-lottery"><a class="current" href="lottery.php">彩票游戏</a></li>
                                    <li id="LS-mobile"><a href="">手机下注</a></li>
                                    <li id="LS-memberexclusiveii"><a href="" class="textGlitter">优惠活动</a></li>
                                    <li id="LS-download"><a href="">下载区</a></li>
                                    <li id="LS-service"><a href="">在线客服</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 語系 -->
                    <div class="headerbar01">
                        <div id="lang-wrap">
                            <div id="langTitle">简体中文</div>
                            <div id="langOption">
                                <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                                <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                                <a href="#" target="mem_index" class="en">English</a>
                            </div>
                        </div>
                    </div>
                    <!--banner-->
                    <div class="title-wrap">
                        <div class="title title-lottery"> </div>
                        <div id="loginBox01">
                            <div id="login01">
                                <form id="form" name="form" method="post" action="">
                                    <input type="text" class="login-unit login-unit-user" placeholder="帐号">
                                    <input type="text" class="login-unit login-unit-pw" placeholder="密码">
                                    <input type="text" class="login-unit login-unit-chk" placeholder=" 验证码">
                                    <div class="co"></div>
                                </form>
                                <div class="login-list">
                                    <ul>
                                        <li class="btn-joinus01"><a href="">加入会员</a></li>
                                        <li>|</li>
                                        <li class="btn-getpw"><a href="">忘记密码</a></li>
                                    </ul>
                                </div>
                                <a href="index_login.php" class="btn-login">登 入</a>
                            </div>
                        </div>
                    </div>
                    <!--banner end-->
                </div>
                <!--header end-->
            </div>
            <!--    end page-header-->
            <div id="page-container01" class="wrapper">
                <div id="page-body" class="clearfix wrapper">
                    <!--live-->
                    <div class="ltlottery-wrap">
                        <?php include "../template/ltlottery/index.php"; ?>
                    </div>
                    <!--end of lottey-->
                </div>
                <div class="container-bottom"></div>
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
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#FF0', '#fff'], 600);
    </script>
</body>

</html>
