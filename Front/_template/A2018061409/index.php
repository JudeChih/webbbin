<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
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
                    <div class="header-right">
                        <div id="login">
                            <ul>
                                <form class="login-input form-group">
                                    <p>
                                        <input type="text" class="form-control name" placeholder="帐号:">
                                        <input type="text" class="form-control key" placeholder="密码">
                                        <input type="text" class="form-control key" placeholder="验证码:">
                                </form>
                            </ul>
                            <ul>
                                <a href="index_login.php" class="btn-submit"></a>
                            </ul>
                            <ul><a href="#" class="getPW">忘记密码</a></ul>
                            <!--lang-->
                            <div id="lang-wrap">
                                <div id="langTitle"></div>
                                <div id="langOption">
                                    <a href="#" target="mem_index" class="zh-tw"><img src="image/not-use/lang_tw.png" /></a>
                                    <a href="#" target="mem_index" class="en"><img src="image/not-use/lang_en.png" /></a>
                                </div>
                            </div>
                            <!--end of lang-->
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
                            </ul>
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
                            <td class="txt-center"><img src="image/btn_mobilebet.png" /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="page-footer">
            <div class="footer_btnbox clearfix">
                <div class="f_btn01">
                    <span>PROMOTIONS</span>
                    <p>独享会员专属优惠<br />天天超高反水</p>
                    <a href="#" class="f_link">MORE</a>
                </div>
                <div class="f_btn01">
                    <span>JOIN US</span>
                    <p>即刻加入VIP会员<br />立即进行游戏体验</p>
                    <a href="#" class="f_link">GO</a>
                </div>
                <div class="f_btn01">
                    <span>ONLINE SERVICE</span>
                    <p>线上客服24小时<br />在线服务</p>
                    <a href="#" class="f_link">CALL ME</a>
                </div>
            </div>
            <div class="footer clearfix">
                <div class="footer_btnbox">
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
                            <p>Copyright © BBIN Reserved</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="page-footer2">
                <div class="footer2">超过35家便捷的银行支付服务
                    <ul class="fooimg"></ul>
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
