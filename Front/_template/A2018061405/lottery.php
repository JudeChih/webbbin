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
        <!--Header-->
        <div id="page-header" class="page-header clearfix">
            <div class="header clearfix">
                <a href="index.php" class="logo"></a>
                <div class="flag">
                    <div class="flag01"></div>
                    <div class="flag02"></div>
                    <div class="flag03"></div>
                </div>
                <div class="login">
                    <div class="login_box">
                        <input type="text" placeholder=" 验证码" class="INPUTlogin" />
                        <a href="#" class="no"></a>
                        <input type="text" placeholder=" 密 码" class="INPUTlogin" />
                        <input type="text" placeholder=" 帐 号" class="INPUTlogin" />
                        <a href="index_login.php" class="btn-joinus01">登 入</a>
                        <a href="#" class="getPW">忘记密码</a>
                        <div class="btn-line">|</div>
                        <a href="index_login.php" class="btn-submit">加入会员</a>
                    </div>
                </div>
                <div class="main-Menual">
                    <ul class="mainnav">
                        <li id="LS-first"><a href="index.php">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                         <li id="LS-live"><a href="live.php">视讯直播</a>
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
                        <li><a href="lottery.php" class="current">彩票游戏</a></li>
                        <li><a href="promotions.php" id="textGlitter">优惠活动</a></li>
                        <li><a href="#">手机下注</a></li>
                        <li><a href="#">在线客服</a></li>
                    </ul>
                </div>
                <div class="banner-inside banner-lottery">
                    <div class="title"></div>
                </div>
            </div>
        </div>
        <!-- page-header end-->
        <!--Container-->
        <div class="page-container clearfix">
            <div class="container clearfix">
                <div class="ltlottery-wrap">
                    <?php include "../template/ltlottery/index.php"; ?>
                </div>
            </div>
        </div>
        <!-- Container end-->
        <!--Footer-->
        <div class="page-footer clearfix">
            <div class="footer">
                <div class="footer-list">
                    <ul>
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
                    </ul>
                </div>
                <a href="#" class="ublogo"></a>
                <a href="#" class="bbinlogo"><img src="image/not-use/black.png" width="80px"></a>
                <div class="copyright">Copyright © BBIN Reserved</div>
            </div>
        </div>
        <!--Footer end-->
        <!--End-mainBody-->
    </div>
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('#textGlitter', ['#FFFF00', '#DF0000'], 500);
    </script>
</body>

</html>
