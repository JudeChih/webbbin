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
    <!--最外層包裝-->
    <div id="mainbody">
        <!--page-header-->
        <div id="page-header">
            <div id="header">
                <!--Nav選單-->
                <div id="nav" class="mainnav">
                    <!--主選單的選項-->
                    <ul>
                        <li><a href="index.php">首　页</a></li>
                        <li id="target" class="LS-ball"><a href="sports_login.php">体育赛事</a>
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
                        <li id="LS-game"><a href="casino_login.php">电子游艺</a>
                            <div id="nav-game" style="display:none" class="ele-drop-group">
                                <div class="lsub-inner-wrap">
                                    <a v-for="game in games" :href="game.link">{{ game.name }}</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="lottery.php">彩票游戏</a></li>
                        <li><a href="promotions.php">优惠活动</a></li>
                        <li><a href="#">手机下注</a></li>
                        <li><a href="#">下载专区</a></li>
                        <li><a href="#">在线客服</a></li>
                    </ul>
                </div>
                <!--Nav選單 end-->
                <div id="logo">
                    <a href="index.php"><img src="image/logo.png" /></a>
                </div>
                <div id="login">
                    <div id="langbar">
                        <select name="" id="lang">
                            <option>简体中文</option>
                            <option>繁體中文</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div id="loginBox">
                        <div class="login">
                            <form id="form1" name="form1" method="post" action="">
                                <div style="width:158px; float:left;">
                                    <input name="textfield" type="text" id="textfield" placeholder="帐号" class="INPUTlogin" />
                                </div>
                                <div style="width:158px; float:left;">
                                    <input name="textfield2" type="text" id="textfield2" placeholder="密码" class="INPUTlogin" />
                                </div>
                                <div style="width:158px; float:left;">
                                    <input name="textfield3" type="text" id="textfield3" placeholder="验证码" class="INPUTlogin" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="btn_joinus"> + <a href="">加入会员</a>｜<a href="">忘记密码</a></div>
                    <div id="btn_login"><a href="index_login.php">登入</a></div>
                </div>
            </div>
            <!--header end-->
        </div>
        <!--page-header end-->
        <!--page-container-->
        <div id="page-container">
            <div id="container_inside1">
                <div id="page_left">
                    <div id="title"><img src="image/lang/zh-cn/title_about.png" /></div>
                    <div id="sidebar">
                        <ul>
                            <li><a href="#" class="current">关於我们</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">合作伙伴</a></li>
                            <li><a href="#">存款帮助</a></li>
                            <li><a href="#">取款帮助</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">责任博彩</a></li>
                        </ul>
                    </div>
                </div>
                <div id="page_right">
                    <div id="about">
                        <p><b>关于我们</b>
                            <br />
                            <br /> 　　与bbin进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。 我们一切博彩营业行为皆遵从菲律宾政府博彩条约。 我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的創意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。
                            <br />
                            <br /> 　　我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心享受多元的娱乐性游戏。所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!
                            <br />
                            <br /> 　　在市场上众多的博彩网站中，除了多元化的产品，也是因为宝发国际-波音公司良好的信誉，以及高品质的服务 ，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。宝发国际以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉! 我们自豪的以业界最强的各种优惠方式回馈我们的会员，宝发国际绝对是玩家最明智的选择!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--page-container end-->
        <!--page-footer-->
        <div id="page-footer">
            <div class="footer">
                <div id="footer_img"><img src="image/not-use/white.png" width="80px"></div>
                <div id="footer_img"><img src="image/not-use/ublogo.png" height="42" width="128"></div>
                <div id="bottom_menu">
                    <div id="bottom_menu_list">
                        <a href="about.php">关于我们</a>　︱
                        <a href="*">联系我们</a>　︱
                        <a href="*">合作伙伴</a>　︱
                        <a href="*">存款帮助</a>　︱
                        <a href="*">取款帮助</a>　︱
                        <a href="*">常见问题</a>　︱
                        <a href="*">责任博彩</a>
                    </div>
                </div>
                <div id="copyright"> Copyright © BBIN Reserved
                </div>
            </div>
        </div>
        <!--page-footer end-->
    </div>
    <?php include '../template/base.php'; ?>
</body>

</html>
