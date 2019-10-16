<!DOCTYPE html>
<html class="madvertis at1 zh-cn">

<head>
    <meta charset="UTF-8">
    <title>欢迎光临</title>
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
                            <li id="LS-live"><a href="live.php"><span>视讯直播</span></a>
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
                <div class="header_title_box welcome"></div>
            </div>
        </div>
        <div class="clearfix" id="page-container">
            <div class="clearfix" id="page_body">
                <div class="container_box">
                    <div class="page_left">
                        <div class="sidebar">
                            <div class="sidebar_top"></div>
                            <div class="sidebar_y">
                                <div class="sidebar_bg">
                                    <a href="#" class="sidebar_btn">关於我们</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">联系我们</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">合作伙伴</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">存款帮助</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">取款帮助</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">常见问题</a>
                                    <div class="sidebar_line"></div>
                                    <a href="#" class="sidebar_btn">责任博彩</a>
                                    </div>
                            </div>
                            <div class="sidebar_bottom"></div>
                        </div>
                    </div>
                    <div class="page_right">
                        <div class="right_txt">
                            关于我们
                            <br />
                            <br /> BBIN 娛樂城与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的創意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。
                            <p>
                                <br /> 　　　我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。视讯直播游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。BBIN 娛樂城所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!
                                <p>
                                    <br /> 　　在市场上众多的博彩网站中，玩家选择BBIN 娛樂城，除了多元化的产品，也是因为BBIN 娛樂城良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。BBIN 娛樂城以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN 娛樂城绝对是玩家最明智的选择!
                                    <p>
                                        <br />
                                        <br />
                                        <br />
                        </div>
                    </div>
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
