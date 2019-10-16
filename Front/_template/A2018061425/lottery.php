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
    <div id="mainBody">
        <div id="page-header">
            <div id="header">
                <div class="header-top">
                    <div class="mainnav">
                        <ul class="nav">
                            <div id="logo">
                                <a href="index.php"></a>
                            </div>
                            <li id="LS-ball"><a href="sports_login.php" class="navlink"><span>体育赛事</span></a>
                                <div id="nav-ball" class="ls-item">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php" class="navlink"><span>视讯直播</span></a>
                                <div id="nav-ball" class="ls-item">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </li>
                            <li id="LS-game"><a href="#" class="navlink"><span>电子游艺</span></a>
                                <div id="nav-game" class="ls-item">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </li>
                            <li id="LS-lottery"><a href="lottery.php" class="navlink current"><span>彩票游戏</span></a></li>
                            <li id="LS-memberexclusiveii"><a href="promotions.php" class="navlink"><span>优惠活动</span></a></li>
                            <li id="LS-affiliation"><a href="#" class="navlink"><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#" class="navlink"><span>线上客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header2">
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="clearfix">
                    <div class="title-page"></div>
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
                                <input type="text" class="form-control" placeholder="帐号">
                            </div>
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="密码">
                            </div>
                            <div class="inputall">
                                <input type="text" class="form-control" placeholder="验证码">
                            </div>
                            <div class="getPW">
                                <a href="#">忘记密码</a>｜<a href="#">加入会员</a>
                            </div>
                            <div>
                                <a href="index_login.php" class="btn-submit">LOGIN</a>
                            </div>
                        </div>
                    </div>
                    <!--登入區 end-->
                </div>
                <div class="ltlottery-wrap">
                    <?php include "../template/ltlottery/index.php"; ?>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer">
                <div class="footer-list">
                    <ul>
                        <li><a href="about.php">关于我们 </a></li>
                        <li> · </li>
                        <li><a href="#">联系我们 </a></li>
                        <li> · </li>
                        <li><a href="#">合作伙伴 </a></li>
                        <li> · </li>
                        <li><a href="#">存款帮助 </a></li>
                        <li> · </li>
                        <li><a href="#">取款帮助 </a></li>
                        <li> · </li>
                        <li><a href="#">常见问题 </a></li>
                        <li> · </li>
                        <li><a href="#">责任博彩</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer2">
                <div class="footer2-all">
                    <div class="footer2-left">PAYMENT METHODS︰
                        <ul class="fooimg"></ul>
                    </div>
                    <div class="footer2-center">NEED HELP︰
                        <a class="foobut" href="#">24HR ONLINE SERVICE</a>
                        <p>The Best Customer Service For You</p>
                    </div>
                    <div class="footer2-right">DOWNLOAD BROWSER︰
                        <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                        <a href="#" class="ublogo"></a>
                    </div>
                </div>
            </div>
            <div id="footer3">
                <p>Copyright © BBIN Reserved</p>
            </div>
        </div>
    </div>
    <?php include '../template/base.php' ?>
</body>
</html>
