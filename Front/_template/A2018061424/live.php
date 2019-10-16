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
    <div id="mainBody01">
        <div id="page-header">
            <div id="header">
                <div id="mainNav" class="mainnav">
                    <ul>
                        <li><a href="index.php" class="home">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php" class="sport">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="live.php" class="active">视讯直播</a>
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
                        <li><a href="lottery.php">彩票游戏</a></li>
                        <li id="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                    </ul>
                    <div id="icon_hot"></div>
                </div>
            </div>
            <div class="slider_box01">
                <div id="logo"> </div>
                <div class="title_live clearfix"> </div>
                <div class="login_bg clearfix">
                    <div class="btn_login_text"> </div>
                    <div id="header_top">
                        <div id="lang_box">
                            <a href="#" class="lang_arrow"></a> <a href="#" class="lang">简体中文</a> </div>
                        <div id="loginBox">
                            <div class="INPUTlogin">帐号</div>
                            <div class="INPUTlogin">密码</div>
                            <div class="INPUTlogin">验证码</div>
                            <a href="#" class="join_us">加入我们</a>
                            <div id="line">|</div>
                            <a href="#" class="forgot_password">忘记密码</a>
                            <a href="#" class="btn_login"></a>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn_download">下载专区 </a>
                <a href="#" class="btn_partners">合作伙伴 </a>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="title-page">
                </div>
                <!-- live -->
                <div class="livetop-wrap">
                    <?php include "../template/livetop/index.php"; ?>
                </div>
                <!-- /.live -->
            </div>
        </div>
        <div id="page-footer" class="page-footer01">
            <div class="footer_box">
                <div class="footer-top">
                    <a href="#" class="arrow-top005"></a>
                </div>
                <div class="footer-btn ">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="90px"></a>
                    <a href="#" class="ublogo"></a>
                </div>
                <div class="footer-box01">
                    <div class="footer-list">
                        <ul>
                            <li><a href="about.php">关于我们</a></li>
                            <li>|</li>
                            <li><a href="#">联系我们</a></li>
                            <li>|</li>
                            <li><a href="#">合作伙伴</a></li>
                            <li>|</li>
                            <li><a href="#">存款帮助</a></li>
                            <li>|</li>
                            <li><a href="#">取款帮助 </a></li>
                            <li>|</li>
                            <li><a href="#">常见问题</a></li>
                            <li>|</li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                    <div class="copyright">Copyright © BBIN Casino Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#B15832', '#FFF'], 600);
    </script>
</body>

</html>
