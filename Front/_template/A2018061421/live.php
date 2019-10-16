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
            <div id="header">
                <div id="box">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <!--登入區-->
                    <div id="login">
                        <ul class="loginbox">
                            <!--lang-->
                            <div class="lang-wrap">
                                <a href="#" title="简体中文" class="lang-option lang-zh-cn"></a>
                                <a href="#" title="繁體中文" class="lang-option lang-zh-tw"></a>
                                <a href="#" title="English" class="lang-option lang-en"></a>
                            </div>
                            <!--end of lang-->
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="帐号">
                            </div>
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="密码">
                            </div>
                            <div class="inputall2">
                                <input type="text" class="form-control" placeholder="验证码">
                            </div>
                            <div>
                                <a href="index_login.php" class="btn-submit">登入</a>
                            </div>
                            <div class="getPW">
                                <a href="#">忘记密码</a>｜<a href="#">加入会员</a>
                            </div>
                        </ul>
                    </div>
                    <!--登入區 end-->
                </div>
            </div>
            <div class="mainnav" data-lsub-y="13">
                <ul class="nav">
                    <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                    <li id="LS-ball"><a href="sports_login.php"><span>体育赛事</span></a>
                        <div id="nav-ball" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-live"><a href="live.php" class="current"><span>视讯直播</span></a>
                     <div id="nav-lives" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-game"><a href="#"><span>电子游艺</span></a>
                        <div id="nav-game" style="display:none" class="ele-drop-group">
                            <div class="lsub-inner-wrap">
                                <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                            </div>
                        </div>
                    </li>
                    <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                    <li id="LS-memberexclusiveii"><a href="promotions.php"><span>优惠活动</span></a></li>
                    <li id="LS-affiliation"><a href="#"><span>手机下注</span></a></li>
                    <li id="LS-service"><a href="#"><span>在线客服</span></a></li>
                </ul>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <!-- live -->
                <div class="livetop-wrap">
                    <?php include "../template/livetop/index.php"; ?>
                </div>
                <!-- /.live -->
            </div>
        </div>
        <div id="page-footer">
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
                        <p>COPYRIGHT © BBIN RESERVED</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
