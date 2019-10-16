<!DOCTYPE html>
<html class="madvertis at1 zh-cn">

<head>
    <meta charset="UTF-8">
    <title>欢迎光临</title>
    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Share core Javascript -->
    <script src="../template/js/jquery.js"></script>
</head>

<body>
    <div id="mainBody01">
        <div id="page-header01">
            <div id="header">
                <div id="mainNav" class="mainnav">
                    <ul>
                        <li><a href="index.php" class="home">首 页</a></li>
                        <li id="LS-ball"><a href="sports_login.php" class="sport">体育赛事</a>
                            <div id="nav-ball" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="todo in todos" :href="todo.link">{{ todo.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="live.php">视讯直播</a>
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
                                    <a v-for="todo in todos" :href="todo.link">{{ todo.name }}</a>
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
                <div class="title_welcome clearfix"> </div>
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
                <div class="container_article_top">
                    <div class="login-nav-box">
                    </div>
                </div>
                <div class="container_article_y clearfix">
                    <!--侧边栏-->
                    <div id="sidebar">
                        <div class="sidebar-top"></div>
                        <div class="sidebar-y">
                            <ul class="sidemenu">
                                <li><a href="#" class="current">关於我们</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">合作伙伴</a></li>
                            <li><a href="#">存款帮助</a></li>
                            <li><a href="#">取款帮助</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="sidebar-bottom"></div>
                    </div>
                    <!--侧边栏 END-->
                    <div id="about_textBox">
                        <h3> 关于我们</h3>
                        <span>与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。 </span>
                        <span>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开! </span>
                        <span>在市场上众多的博彩网站中，除了多元化的产品，也是因为XX俱乐部-波音公司良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。XX俱乐部以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! </span>
                        <span>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验!</span> </div>
                </div>
                <div class="container_article_bottom clearfix"> </div>
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
