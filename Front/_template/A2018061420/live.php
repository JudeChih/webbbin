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
            <div id="header">
                <div class="header-top">
                    <!--nav-->
                    <div class="mainnav">
                        <ul class="nav">
                            <li id="LS-first"><a href="index.php">HOME<br /><span>首页</span></a></li>
                            <li id="LS-ball"><a href="sports_login.php">SPORTS<br /><span>体育赛事</span></a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php" class="current">LIVE CASINO<br /><span>视讯直播</span></a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                            </li>
                            <li id="LS-game"><a href="">CASINO<br /><span>电子游艺</span></a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div id="logo">
                                <a href="index.php"></a>
                            </div>
                            <li id="LS-lottery"><a href="lottery.php">LOTTERY<br /><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="promotions.php">PROMOTIONS<br /><span>优惠活动</span></a></li>
                            <li id="LS-affiliation"><a href="#">MOBILE BET<br /><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#">SERVICE<br /><span>在线客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header2">
                <div id="top1000">
                    <!--登入區-->
                    <div id="login">
                        <div class="loginbox">
                            <div id="lang-wrap">
                                <div id="ele-lang-wrap">简体中文</div>
                                <div id="ele-lang-group">
                                    <a href="#" target="mem_index" class="zh-tw langCurrent">简体中文</a>
                                    <a href="#" target="mem_index" class="zh-cn">繁體中文</a>
                                    <a href="#" target="mem_index" class="en">English</a>
                                </div>
                            </div>
                            <div class="inputall">
                                <ul class="name">帐号</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="inputall">
                                <ul class="name">密码</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="inputall">
                                <ul class="name">验证码</ul>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="getPW"><a href="#">忘记密码</a>｜<a href="#">加入会员</a></div>
                            <div>
                                <a href="index_login.php" class="btn-submit">LOGIN</a>
                            </div>
                        </div>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <div class="title-page"></div>
                <!-- live -->
                <div class="livetop-wrap">
                    <?php include "../template/livetop/index.php"; ?>
                </div>
                <!-- /.live -->
            </div>
        </div>
        <div id="page-footer" class="clearfix">
            <div class="footer">
                <div class="footer-top">
                   <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关于我们</a></li>
                        <li> │ </li>
                        <li><a href="#">联系我们</a></li>
                        <li> │ </li>
                        <li><a href="#">合作伙伴</a></li>
                        <li> │ </li>
                        <li><a href="#">存款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">取款帮助</a></li>
                        <li> │ </li>
                        <li><a href="#">常见问题</a></li>
                        <li> │ </li>
                        <li><a href="#">责任博彩</a></li>
                        <br />
                        <p>Copyright © BBIN Reserved</p>
                    </ul>
                </div>
                <div class="footercasino"></div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
