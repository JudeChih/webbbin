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
    <div id="mainBody" class="clearfix">
        <div id="page-header">
            <div id="header01">
                <a href="index.php" class="logo"></a>
                <div id="header_top">
                    <!--loginBox-->
                    <div id="loginBox">
                        <!--語系切換-->
                        <div class="lang-wrap">
                            <a href="#" class="cn flag03"></a>
                            <a href="#" class="tw flag02"></a>
                            <a href="#" class="en flag01"></a>
                        </div>
                        <div class="link">
                            <ul>
                                <li>
                                    <li><a href="#">加入会员</a></li>
                                    <li>｜</li>
                                    <li><a href="#">忘记密码</a></li>
                            </ul>
                        </div>
                        <a href="index_login.php" class="btn_login">登入</a>
                        <form class="login-input">
                            <input type="text" class="form-control key" placeholder="验证码">
                        </form>
                        <form class="login-input">
                            <input type="text" class="form-control password" placeholder="密　码">
                        </form>
                        <form class="login-input">
                            <input type="text" class="form-control name" placeholder="帐　号">
                        </form>
                    </div>
                    <!--end of loginBox-->
                    <div class="mainnav">
                        <ul>
                            <li><a href="index.php" class="home">首页</a></li>
                            <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
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
                            <li id="LS-game"><a href="#">电子游艺</a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li><a href="lottery.php">彩票游戏</a></li>
                            <li><a href="#" id="textGlitter">优惠活动</a></li>
                            <li><a href="#">手机下注</a></li>
                            <li><a href="#" class="service">在线客服</a></li>
                        </ul>
                    </div>
                </div>
                <!--end header_top-->
            </div>
            <div id="titleBox"><img src="image/lang/zh-cn/title_live.png" width="1000" height="232" /></div>
        </div>
        <!--end page-header-->
        <div id="page-container" class="clearfix">
            <div id="page-body02" class="clearfix">
                <!-- live -->
                <div class="livetop-wrap">
                    <?php include "../template/livetop/index.php"; ?>
                </div>
                <!-- /.live -->
            </div>
            <!--end page-body02-->
        </div>
        <!--end page-container-->
        <!--page-footer-->
        <div id="page-footer">
            <div id="footer02">
                <a href="#" class="ublogo"></a>
                <a href="#" class="bbinlogo"><img src="image/not-use/red.png" width="90px"></a>
                <div class="footer_nav">
                    <ul>
                        <li><a href="#">责任博彩</a></li>
                        <li>|</li>
                        <li><a href="#">常见问题</a></li>
                        <li>|</li>
                        <li><a href="#">取款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">存款帮助</a></li>
                        <li>|</li>
                        <li><a href="#">合作伙伴</a></li>
                        <li>|</li>
                        <li><a href="#">联系我们</a></li>
                        <li>|</li>
                        <li><a href="about.php">关于我们</a></li>
                    </ul>
                </div>
                <div class="copyright">Copyright © BBIN Reserved</div>
            </div>
        </div>
        <!--end page-footer-->
    </div>
    <!--end mainBody01-->
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('#textGlitter', ['#ffffff', '#ff0000'], 500);
    </script>
</body>

</html>
