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
                    <li id="LS-lottery"><a href="lottery.php" class="navlink"><span>彩票游戏</span></a></li>
                    <li id="LS-memberexclusiveii"><a href="promotions.php" class="navlink"><span>优惠活动</span></a></li>
                    <li id="LS-affiliation"><a href="#" class="navlink"><span>手机下注</span></a></li>
                    <li id="LS-service"><a href="#" class="navlink"><span>线上客服</span></a></li>
                </ul>
            </div>
            <div class="adBanner">
                <div class="adBanner-con">
                    <div class="adBanner-bg">
                        <div id="js-ele-slideshow" class="ele-slideshow-wrap" onselectstart="return false;">
                            <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                                <ul>
                                    <li data-autoplaytime="5000">
                                        <a href="#">
                                            <img src="image/not-use/slider01.png">
                                        </a>
                                    </li>
                                    <li data-autoplaytime="5000">
                                        <a href="#">
                                            <img src="image/not-use/slider02.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.slideshow -->
                    </div>
                    <div class="news-wrap">
                        <div class="news-item">
                            <marquee id="ele-msgNews" behavior="scroll" scrollamount="5" direction="left">【超大惊喜】新注册开户惊喜，送18元体验金，赢到100即可申请提款，马上免费开户，领取奖金吧!劲爆惊喜不容错过... </marquee>
                        </div>
                    </div>
                </div>
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
                        <div>
                            <a href="index_login.php" class="btn-submit">LOGIN</a>
                        </div>
                        <div class="getPW">
                            <a href="#">忘记密码</a>｜<a href="#">加入会员</a>
                        </div>
                    </div>
                </div>
                <!--登入區 end-->
            </div>
        </div>
        <div id="page-container">
            <div id="page-body" class="game-body">
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
        <div id="page-live">
            <div id="txt_box">
                <!-- 一般不使用列表或排列不需要使用ul當容器 -->
                <div class="txt-box-inner">
                    <div class="title_h1">THE EXPERIENCE <span>IS REAL</span></div>
                    <div class="title_h2">身历其境 无时差</div>
                    <div class="txt">24小时营运的视讯直播产品，品项多样为亚洲之冠，以清晰的直播画面提供百家乐、德州扑克、温州牌九、轮盘、番摊和骰宝等多款热门产品，保证玩家在线上浏览最即时与公平的游戏实况，在任何地点都能体验如亲临现场般刺激愉快的感官享受。此外BBIN也提供竞眯厅、金臂厅、金臂多台、与多台下注等产品选项，增加多元的投注方式，予您值得信赖的服务品质。</div>
                </div>
            </div>
            <div class="boxright">
                <div class="live_btn">
                    <a href="#"></a>
                </div>
            </div>
        </div>
        <div id="page-lottery">
            <div class="page-lottery-inner">
                <div id="txt_box">
                    <div class="title_h2">创新娱乐大升级</div>
                    <div class="txt">近年来我们致力于投资开发多种类的彩票游戏，2014年更打造了电视台等级数位摄影棚，并推出亚洲首创Lottery Live Show ─ BB LOTTO LIVE SHOW，以创新的节目方式让彩票产品娱乐升级。3D时时彩、快乐彩及滚球王，皆为BBIN自主研发的彩票产品，满足玩家多变的需求。</div>
                    <div class="title_h3">CREATIVE LOTTERY GAMES</div>
                    <div class="title_h1">BBIN LOTTERY</div>
                </div>
                <div class="boxright">
                    <div class="lottery_btn">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-casino">
            <div class="page-casino-inner">
                <div id="txt_box2">
                    <div class="title_h2">百款游戏 任意选</div>
                    <div class="txt">BBIN提供超过百款机率游戏，近年来更积极开发多人对战游戏，希望能以丰富的玩法、视觉及声光效果提供顶级的娱乐享受，BBIN只想给您充满娱乐享受的游戏体验。</div>
                </div>
                <div id="txt_box">
                    <div class="title_h1">
                        <img src="image/first_casino_title.jpg" >
                    </div>
                </div>
                <div class="casino-box-img">
                    <img src="image/first_bg04_2.png" />
                </div>
                <div class="boxright">
                    <div class="casino_btn">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <div id="page-sports">
            <div id="bigsports">
                <img src="image/first_bg05_2.png" />
                <div class="sports_btn">
                    <a href="#"></a>
                </div>
            </div>
            <div id="txt_box">
                <ul>
                    <li class="txt_box1">
                        <div class="title_h1">
                            <img src="image/first_sports_title.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="title_h2">世界足坛顶尖赛事</div>
                        <div class="txt">目前有波音平台与沙巴平台，在游戏中，体验的不仅仅是看球的乐趣。</div>
                    </li>
                    <li>
                        <div class="title_h2">各类体育赛事</div>
                        <div class="txt">不同类别的体育赛事， 涵盖世界范围内主要体育运动包括足球、美式足球、 篮球 、羽毛球 、棒球、板球 、曲棍球、 手球、 排球等等。</div>
                    </li>
                    <li>
                        <div class="title_h2">欧洲五大联赛</div>
                        <div class="txt">体育在线投注是线上体育游戏娱乐姓的平台，将体育游戏赋予游戏化的多重玩法，以娱乐的形式与互动。</div>
                    </li>
                </ul>
            </div>

        </div>
        <div id="page-footer" class="first-footer">
            <div class="tit">
                BBIN提倡有节制赌博。望客户高兴与满意本公司提供的网上博彩服务。我们会为客户在博彩自律方面提供多方面的帮助。如您担心博彩会严重影响您或他人的生活，我们建议阁下遵守以下一些基本规则
            </div>
            <div class="txt">
                • 禁止未满18岁的人士参与赌博游戏。加入游戏之前，请您确定您已年满18周岁。<br />
                • 在登入我们的系统时，请勿让未成人士在萤光幕显示范围内观看或停留。<br />
                • 如果用户需要离开系统的操作范围，请谨记使用密码锁住电脑。<br />
                • 用户务必将BBIN赌场帐户及密码放置安全地方。<br />
                • 切勿与未成年人士分享信用卡或帐户等相关资讯。<br />
                • 当用户从他人电脑登入BBIN赌场，或从远端位置(无线网吧、机场、酒店或其他公共场所)进行登录及娱乐活动时<br />
                请留意是否已隔离任何未成年人士。<br />
                • 请勿过于沉迷游戏。<br />
            </div>
            <div class="gotop">
                <a href="#"></a>
            </div>
        </div>
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
                    <div class="fooimg"></div>
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

    <?php include '../template/base.php' ?>
    <script src="../template/js/TweenMax.min.js"></script>
    <script src="../template/js/tween.slideshow.js"></script>
    <script>
        $('#js-ele-slideshow').slideshow({
            animationType  : 'fade',
            isArrow          : 1
        });
    </script>
</body>
</html>
