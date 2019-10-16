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
    <div id="mainBody">
        <div id="page-header">
            <div class="header-top row">
                <div id="logo">
                    <a href="###" class="logo"></a>
                </div>
                <!-- 登入區-->
                <div id="login" class="login-wrap">
                    <!--國旗區域-->
                    <div class="lang-wrap clearfix">
                        <a href="#" class="cn flag02"></a>
                        <a href="#" class="tw flag01"></a>
                        <a href="#" class="en flag03"></a>
                    </div>
                    <form class="login-input form-group">
                        <input type="text" placeholder="帐号" class="form-control name">
                        <input type="text" placeholder="密码" class="form-control password">
                        <input type="text" placeholder="验证码" class="form-control key">
                    </form>
                    <a class="btn-submit" href="index_login.php"></a>
                    <ul class="login-ls">
                        <li><a href="#" class="btn-joinus">加入会员</a></li>
                        <li><a href="#" class="getPW">忘记密码</a></li>
                    </ul>
                </div>
            </div>
            <!--導覽列-->
            <div class="mainnav row">
                <ul id="nav" class="clearfix">
                    <li id="LS-first" class="LS-first"><a href="index.php">首 页</a></li>
                    <li id="LS-ball" class="LS-ball"><a href="sports_login.php">体育赛事</a>
                        <div id="nav-ball" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-live" class="LS-live current"><a href="live.php">视讯直播</a>
                    <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
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
                    <li id="LS-memberexclusiveii" class="LS-memberexclusiveii"><a href="###" class="textGlitter">优惠活动</a></li>
                    <li id="LS-mobile" class="LS-mobile"><a href="###">手机下注</a></li>
                    <li id="LS-service" class="LS-service"><a href="###">在线客服</a></li>
                </ul>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="title-wrap"></div>
                <!-- live -->
                <div class="livetop-wrap">
                    <?php include "../template/livetop/index.php"; ?>
                </div>
                <!-- /.live -->
            </div>
        </div>
        <div id="page-footer">
            <div class="footer clearfix">
                <a href="#" class="bbinlogo"><img src="image/not-use/red.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                <div class="footer-link-copyright">
                    <ul class="footer-link">
                        <li><a href="about.php">关於我们</a></li>
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
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
