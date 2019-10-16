<!DOCTYPE html>
<html class="first is-login zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="../template/css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody">
        <div id="page-header">
            <div id="header">
                <div class="header-top">
                    <div id="logo">
                        <a href="index.php"></a>
                    </div>
                    <div class="header-top">
                        <div id="logo">
                            <a href="index.php"></a>
                        </div>
                        <div class="header-right">
                            <div id="logon">
                                <!--lang-->
                                <div id="lang-wrap">
                                    <div id="langTitle"></div>
                                    <div id="langOption">
                                        <a href="#" target="mem_index" class="zh-tw"><img src="image/not-use/lang_tw.png" /></a>
                                        <a href="#" target="mem_index" class="en"><img src="image/not-use/lang_en.png" /></a>
                                    </div>
                                </div>
                                <!--end of lang-->
                                <!--登入後連結-->
                                <div class="logon-list">
                                    <ul>
                                        <li><a href="#">会员中心</a></li>
                                        <li> │ </li>
                                        <li><a href="#">线上存款</a></li>
                                        <li> │ </li>
                                        <li><a href="#">线上取款</a></li>
                                        <li> │ </li>
                                        <li><a href="#">额度转换</a></li>
                                        <li> │ </li>
                                        <li><a href="#">未讀訊息(1)</a></li>
                                        <li> │ </li>
                                        <li><a href="index.php">登出</a></li>
                                    </ul>
                                </div>
                                <!--帳號餘額-->
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news-wrap">
                    <div class="news-item">
                        <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                    </div>
                </div>
            </div>
            <div id="header2">
                <!-- slideshow -->
                <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                    <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                        <ul>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider01.png');"></div>
                                </a>
                            </li>
                            <li data-autoplaytime="5000">
                                <a href="#">
                                    <div class="img" style="background-image: url('image/not-use/slider02.png');"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /.slideshow -->
            </div>
            <div class="mainnav">
                <ul class="nav">
                    <li id="LS-first"><a href="index.php" class="current"><span>首页</span></a></li>
                    <li id="LS-ball"><a href="sports_login.php"><span>体育赛事</span></a>
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
                    <li id="LS-service"><a href="#"><span>线上客服</span></a></li>
                </ul>
            </div>
        </div>
        <div id="page-container">
            <div id="page-body" class="game-body">
                <div>
                    <div id="first-btn-wrap">
                        <div class="gameBox">
                            <ul class="gameBox-list">
                                <li>
                                    <a href="#" class="btn-game01"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game02"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game03"></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-game04"></a>
                                </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container2">
            <div class="pu">
                <div class="pu-a">
                    <table class="pu-table">
                        <tr>
                            <td><img src="image/img01.png" /></td>
                        </tr>
                        <tr>
                            <td>
                                <a href="">
                                    <span class="pu-casino">CASINO</span>
                                    <img src="image/btn_casino.gif" />
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="pu-b">
                    <div class="pu-b-con"><img src="image/img05.png" /></div>
                </div>
                <div class="pu-c">
                    <table class="pu-table">
                        <tr>
                            <td><img src="image/img02.png" /></td>
                            <td><img src="image/img03.png" /></td>
                            <td><img src="image/img04.png" /></td>
                        </tr>
                        <tr>
                            <td colspan="2"><img src="image/btn_sports.gif" /></td>
                            <td><img src="image/btn_mobilebet.png" /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer2 clearfix">
                <div class="about">
                    <div class="long">
                        <h2>颠覆性产品</h2>
                        <ul>每一款全新上线的BB casino产品都是经过大量测试後证实最符合亚洲人的产品，这是一个对既定现状做出强势挑战的创新团队。</ul>
                    </div>
                    <div class="short1">
                        <h2>电子游艺</h2>
                        <ul>我们的游戏包括轮盘、电子扑克、老虎机等...在线娱乐场游戏。此外您更有机会赢得累积超级奖金。</ul>
                    </div>
                    <div class="short2">
                        <h2>快乐彩</h2>
                        <ul>BB快乐彩大小单双1.86赔率全球最高全面覆盖PC/苹果/Wap等所有网络移动终端。</ul>
                    </div>
                    <div class="short1">
                        <h2>体育平台</h2>
                        <ul>BB体育拥有市面最快滚球确认系统，让你走到那都能一手掌握赛事瞬间。</ul>
                    </div>
                    <div class="short2">
                        <h2>真人娱乐城</h2>
                        <ul>BB娱乐城坐拥AG/欧博/东方3大平台，所有游戏经由TST Game国际认证并保证公平公正。</ul>
                    </div>
                    <div class="long">
                        <h2>PAYMENT METHODS</h2>
                        <ul class="icon"></ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer">
                    <div class="footer-top">
                        <a href="#" class="bbinlogo"><img src="image/not-use/gray.png" width="80px"></a>
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
    </div>
    <?php include '../template/base.php' ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
    $('#js-ele-slideshow').slideshow({
        isArrow: 1
    });
    </script>
</body>

</html>
