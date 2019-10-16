<!DOCTYPE html>
<html class="first zh-cn">

<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <!-- Custom styles for this template -->
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
                            <li id="LS-first"><a href="index.php" class="current">HOME<br /><span>首页</span></a></li>
                            <li id="LS-ball"><a href="sports_login.php">SPORTS<br /><span>体育赛事</span></a>
                                <div id="nav-ball" style="display:none" class="ele-drop-group">
                                    <div class="lsub-inner-wrap">
                                        <a v-for="ball in balls" :href="ball.link">{{ ball.name }}</a>
                                    </div>
                                </div>
                            </li>
                            <li id="LS-live"><a href="live.php">LIVE CASINO<br /><span>视讯直播</span></a>
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
                            <li id="LS-affiliation"><a href="#">MOBILE BET<br><span>手机下注</span></a></li>
                            <li id="LS-service"><a href="#">SERVICE<br><span>在线客服</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="header2">
                <div id="ADbanner-bg">
                    <div id="ADbanner">
                        <!--輪播圖片-->
                        <div id="slides">
                            <div><img src="image/not-use/slider01.png" /></div>
                            <div><img src="image/not-use/slider02.png" /></div>
                            <div><img src="image/not-use/slider01.png" /></div>
                            <div><img src="image/not-use/slider02.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-container" class="clearfix">
            <div id="page-body">
                <!--登入區-->
                <div class="slides-next">
                    <a href=""></a>
                </div>
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
                <div class="gameBox">
                    <ul>
                        <a href="#" class="btn-game01"></a>
                    </ul>
                    <ul>
                        <a href="#" class="btn-game02"></a>
                    </ul>
                    <ul>
                        <a href="#" class="btn-game03"></a>
                    </ul>
                    <ul>
                        <a href="#" class="btn-game04"></a>
                    </ul>
                </div>
                <div class="footerBox">
                    <div class="f_btn01">
                        <span>颠覆性产品</span>
                        <p>每一款全新上线的BB casino产品都是经过大量测试後证实最符合亚洲人的产品，这是一个对既定现状做出强势挑战的创新团队。</p>
                    </div>
                    <div class="f_btn01">
                        <span>快乐彩</span>
                        <li>KENO</li>
                        <p>BB快乐彩大小单双1.86赔率全球最高全面覆盖PC/苹果/Wap等所有网络移动终端。</p>
                        <span>体育平台</span>
                        <li>SPORT BET</li>
                        <p>BB体育拥有市面最快滚球确认系统，让你走到那都能一手掌握赛事瞬间。</p>
                        <span>真人娱乐城</span>
                        <li>LIVE CASINO</li>
                        <p>BB娱乐城坐拥AG/欧博/东方3大平台，所有游戏经由TST Game国际认证并保证公平公正。</p>
                    </div>
                    <div class="f_btn02">
                        <span>合作夥伴</span>
                        <img src="image/footer_img01.png" height="46" width="300">
                    </div>
                </div>
                <div class="news-wrap">
                    <div class="news-item">
                        <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                    </div>
                </div>
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
                        <br>
                        <p>Copyright © BBIN Reserved</p>
                    </ul>
                </div>
                <div class="footercasino"></div>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
    <script src="js/slider.js"></script>
    <script type="text/javascript">
    $('#slides').slick();
    </script>
</body>

</html>
