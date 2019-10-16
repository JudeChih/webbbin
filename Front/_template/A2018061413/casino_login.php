<!DOCTYPE html>
<html class="game is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>电子游艺</title>
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainbody" class="mainbody_inside">
        <!--page_header-->
        <div id="page-header" class="page_header_inside">
            <div class="title_game">
                <div id="header_inside">
                    <a href="index.php" class="logo"></a>
                    <div id="topbox">
                        <div id="member">
                            <div id="langbar">
                                <select name="简体中文" id="lang">
                                    <option class="langfrome">简体中文</option>
                                    <option class="langfrome">繁體中文</option>
                                    <option class="langfrome">English</option>
                                </select>
                            </div>
                            <div class="meminfo-wrap">
                                <div class="mem-info">
                                    <div class="ele-accinfo ele-acc-name"><span>帐号：</span><strong>{{memAccount}}</strong></div>
                                    <div class="ele-acc-unit">
                                        <div id="_bbsportBalance" class="ele-accinfo ele-first-balance">
                                            <span>余额：</span>
                                            <strong>{{memTotal}}</strong>
                                        </div>
                                        <div id="js-ele-obalance-wrap" class="ele-obalance-wrap">
                                            <div class="ele-accinfo ele-other-balance">
                                                <i class="fa fa-plus-square"></i>
                                            </div>
                                        </div>
                                        <div id="js-ele-obalance-item-wrap" class="ele-obalance-item-wrap">
                                            <div class="ele-obalance-item">
                                                <div class="ele-obalance" v-for="membalance in membalances">
                                                    <span>{{membalance.name}}</span>
                                                    <strong>{{membalance.balance}}</strong>
                                                </div>
                                            </div>
                                            <div class="ele-balance-tool">
                                                <a href="#">额度转换</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="loginONNAV">
                                <ul>
                                    <li><a href="#">会员中心</a></li>
                                    <li>│</li>
                                    <li><a href="#">线上存款</a></li>
                                    <li>│</li>
                                    <li><a href="#">线上取款</a></li>
                                    <li>│</li>
                                    <li><a href="#">额度转换</a></li>
                                    <li>│</li>
                                    <li><a href="#">登出</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 主選單 -->
                        <div class="mainnav">
                            <ul>
                                <li><a href="index.php">首页</a></li>
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
                                <li id="LS-game"><a href="#" class="current">电子游艺</a>
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
                </div>
                <!--header end-->
            </div>
        </div>
        <!--page_header end-->
        <!--page_container-->
        <div id="page_container_inside_x">
            <div id="page_container_inside2_y">
                <div id="page_container_inside2">
                    <div id="page_container_inside_bottom">
                        <div id="container_inside">
                            <div id="news_inside">
                                <div id="abgne_marquee">
                                    <ul>
                                        <li>尊敬的会员您好，为了您能更加流畅的浏览我们公司网站，请使用Chrome浏览器浏览网页，或者使用最新版的IE浏览器，以达到最佳视觉效果。</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- game star -->
                            <div class="game-wrap">
                                <?php include '../template/game/slider.php'; ?>
                                <?php include '../template/game/index.php'; ?>
                            </div>
                        </div>
                    </div>
                    <!--page_footer-->
                    <div id="page-footer" class="page-footer_inside">
                        <div class="footer">
                            <a href="#" class="bbinlogo02"><img src="image/not-use/white.png" width="80px"></a>
                            <a href="#" class="ublogo"></a>
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
                            <div class="copyright">COPYRIGHT © BBIN RESERVED.</div>
                        </div>
                    </div>
                    <!--page_footer end-->
                </div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/marquee.js"></script>
    <script type="text/javascript">
    //- 優惠活動文字閃爍語法
    new toggleColor('#textGlitter', ['#e5fb2a', '#FFF'], 600);
    </script>
</body>

</html>
