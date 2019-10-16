<!DOCTYPE html>
<html class="livetop zh-cn">

<head>
    <meta charset="UTF-8">
    <title>视讯直播</title>
    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody">
        <div id="page-header" class="page-header02">
            <div class="header_top">
                <div class="flag_box">
                    <div class="Flag">
                        <div class="flag01"></div>
                        <div class="flag02"></div>
                        <div class="flag03"></div>
                    </div>
                    <div class="loginbox">
                        <div class="login_txt_box">
                            <div class="login_txt">帐号：</div>
                        </div>
                        <div class="login_txt_box">
                            <div class="login_txt">密码：</div>
                        </div>
                        <div class="login_txt_box02">
                            <div class="login_txt">验证码：</div>
                        </div>
                        <div class="no"></div>
                        <div class="btn_login"><a href="index_login.php">登入</a></div>
                        <div class="btn_password">忘记密码</div>
                        <div class="btn_joinus">免费注册</div>
                    </div>
                </div>
                <div class="logo_bg">
                    <a href="index.php"></a>
                </div>
                <div class="nav">
                    <div class="nav left"></div>
                    <div class="nav bg">
                        <ul class="mainnav">
                            <li><a href="index.php"> 首页</a></li>
                            <div class="nav line"></div>
                            <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div class="nav line"></div>
                            <li id="LS-live"><a href="live.php" class="current"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                            <div class="nav line"></div>
                            <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                                <div id="nav-game" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <div class="nav line"></div>
                            <li><a href="lottery.php">彩票游戏</a></li>
                            <div class="nav line"></div>
                            <li><a href="#" id="textGlitter">优惠专区</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">手机下注</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">在线客服</a></li>
                            <div class="nav line"></div>
                            <li><a href="#">下载区</a></li>
                        </ul>
                    </div>
                    <div class="nav right"></div>
                </div>
            </div>
            <div class="header_title">
                <div class="header_title_box live"></div>
            </div>
        </div>
        <div class="clearfix" id="page-container">
            <div class="clearfix" id="page_body">
                <div class="container_box">
                    <!-- live -->
                    <div class="livetop-wrap">
                        <?php include "../template/livetop/index.php"; ?>
                    </div>
                    <!-- /.live -->
                </div>
            </div>
        </div>
        <div id="page-footer02">
            <div class="footer">
                <div class="footer_img">
                    <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer_right">
                    <div class="footer_nav">
                        <ul>
                            <li><a href="about.php">关于我们</a>|</li>
                            <li><a href="#">联系我们</a>|</li>
                            <li><a href="#">合作伙伴</a>|</li>
                            <li><a href="#">存款帮助</a>|</li>
                            <li><a href="#">取款帮助</a>|</li>
                            <li><a href="#">常见问题</a>|</li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="copyright"> Copyright © BBIN 娛樂城 Reserved </div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
