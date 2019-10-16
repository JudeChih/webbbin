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
            <div class="header">
                <!--lang-->
                <div id="lang-wrap">
                    <div id="ele-lang-wrap">繁體中文</div>
                    <div id="ele-lang-group">
                        <a href="#" target="mem_index" class="zh-tw langCurrent">繁體中文</a>
                        <a href="#" target="mem_index" class="zh-cn">简体中文</a>
                        <a href="#" target="mem_index" class="en">English</a>
                    </div>
                </div>
                <!--end of lang-->
                <a href="index.php" class="logo"></a>
                <div class="mainnav">
                    <ul class="nav">
                        <li id="LS-first"><a href="index.php"><span>首页</span></a></li>
                        <li id="LS-ball">
                            <a href="sports_login.php" title="体育赛事">体育赛事</a>
                            <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                </div>
                            </div>
                        </li>
                       <li id="LS-live" class="current"><a href="live.php"><span>视讯直播</span></a>
                        <!-- 子選單 -->
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="lives in lives" :href="lives.link">{{ lives.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-game">
                            <a href="casino_login.php" title="电子游艺">电子游艺</a>
                            <!-- 子選單 -->
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li id="LS-lottery"><a href="lottery.php"><span>彩票游戏</span></a></li>
                        <li id="LS-memberexclusiveii"><a href="#" class="textGlitter"><span>优惠活动</span></a></li>
                        <li id="LS-mobile"><a href="#"><span>手机下注</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body">
                <div class="page_left">
                    <div id="login01">
                        <a href="#" class="btn-joinus01"></a>
                        <form class="login-input form-group">
                            <input type="text" class="form-control name" placeholder="  帐  号">
                            <input type="text" class="form-control password" placeholder="  密 码">
                            <input type="text" class="form-control key" placeholder="  验证码">
                        </form>
                        <div class="btn_box">
                            <a href="#" class="btn_joinus01">▎加入会员</a>
                            <a href="#" class="getPW">▎忘记密码</a>
                        </div>
                        <a href="index_login.php" class="btn_login01"></a>
                    </div>
                    <a href="#" class="btn_service01"></a>
                </div>
                <div class="page_right">
                    <div class="container_homebannerbg"></div>
                    <div class="title_live"></div>
                </div>
                <div class="container_shadowimg"></div>
            </div>
            <!-- live -->
            <div class="livetop-wrap">
                <?php include "../template/livetop/index.php"; ?>
            </div>
            <!-- /.live -->
            <div id="page-footer">
                <div class="wrap">
                    <a href="#" class="bbinlogo"><img src="image/not-use/white.png" width="80px"></a>
                    <a href="#" class="ublogo"></a>
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
                    <div class="copyright">Copyright © BBIN Reserved</div>
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script type="text/javascript">
    new toggleColor('.textGlitter', ['#000', '#FF0000'], 600);
    </script>
</body>

</html>
