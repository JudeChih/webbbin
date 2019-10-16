<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN TEMPLAT</title>
    {{-- <link rel="shortcut icon" type="image/x-icon" href="{{asset('image/index_ad.png')}}"> --}}
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/add_extra.css') }}">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
</head>
<body>
    <div id="mainBody">
        <!-- CONTAINER -->
        <div id="page-container">
            <div id="page-body" class="page-body">
                <!-- INDEX START -->
                <div class="index-wrap clearfix">
                    <span class="index-logo"></span>
                    <div id="particles">
                    </div>
                    <article class="index-text">
                        <figure><img src="image/index_title_adaptive.png"></figure>
                        <h2>WEBSITE DESIGN</h2>
                        <p>独一无二的风格</p>
                        <p>全然不凡的质感</p>
                        <p>视觉品质的坚持</p>
                        <p>展现个人品牌价值</p>
                        <button class="btnAdaptive">版型挑选</button>
                        {{-- <button class="btnRwd" style="display: none;">版型挑选</button> --}}
                    </article>
                    <button id="aboutOpen" class="about-open-btn move">我们的团队</button>

                    <div class="index-ad-btn"><span></span><img src="image/index_ad.png" /></div>
                    <div class="index-ad-cover"></div>
                    <div class="index-ad">
                        <button class="index-ad-close"></button>
                        <a href="https://goo.gl/forms/W5RVpySHPOCm9pUJ3" target="_blank" class="index-ad-link">填写问卷</a>
                    </div>
                </div>
                <!-- INDEX END -->

                <!-- ABOUT PAGE START -->
                <about-page></about-page>
                <!-- ABOUT PAGE END -->

                <!-- ADAPTIVE PAGE START -->
                <div id="adaptiveCont" class="page-wrap">
                    <div class="nav-wrap">
                        <nav class="nav-main">
                            <button id="adaptiveBack" class="nav-back">
                                <i class="fa fa-angle-left"></i><b></b>
                            </button>
                            <button class="nav-switch nav-switch-adaptive mobile-on" data-filter="*">
                                <span><b>固定网版</b><i>所有款式</i></span>
                            </button>
                            <button id="navSwitchRWD" class="nav-switch nav-switch-rwd">
                                <span><b>RWD网版</b></span>
                            </button>
                            <ul class="nav-filter clearfix">
                                <li class="nav-filter-hot">
                                    <button data-filter=".hot">热门版型</button>
                                </li>
                                <li class="nav-filter-layout">
                                    <span class="subtouch">版型布局</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button id="adapNumLa" class="nav-filter-btn-layout-straight" data-filter=".L-a"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="adapNumLb" class="nav-filter-btn-layout-horizontal" data-filter=".L-b"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="adapNumLc" class="nav-filter-btn-layout-multi" data-filter=".L-c"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="adapNumLd" class="nav-filter-btn-layout-diagonal" data-filter=".L-d"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="adapNumLe" class="nav-filter-btn-layout-norules" data-filter=".L-e"><i></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-filter-style">
                                    <span class="subtouch">设计风格</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button id="adapNumF" class="nav-filter-btn-style-fashion" data-filter=".S-fashion">前卫时尚</button>
                                            </li>
                                            <li>
                                                <button id="adapNumC" class="nav-filter-btn-style-classical" data-filter=".S-classical">复古典雅</button>
                                            </li>
                                            <li>
                                                <button id="adapNumG" class="nav-filter-btn-style-gorgeous" data-filter=".S-gorgeous">精致华丽</button>
                                            </li>
                                            <li>
                                                <button id="adapNumS" class="nav-filter-btn-style-simple" data-filter=".S-simple">简约大气</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-filter-color">
                                    <span class="subtouch">颜色色系</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button class="nav-filter-btn-white" data-filter=".white"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-gray" data-filter=".gray"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-black" data-filter=".black"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-blue" data-filter=".blue"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-green" data-filter=".green"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-yellow" data-filter=".yellow"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-brown" data-filter=".coffee"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-orange" data-filter=".orange"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-red" data-filter=".red"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-pink" data-filter=".pink"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-purple" data-filter=".purple"></button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <button class="nav-view nav-view-grid"></button>
                    </div>
                    <div class="page-main page-view-grid">
                        <dl id="MixItUpAdap" class="removeTextNodes">
                            <item-view asset="{{ asset('') }}" source="projects" rwd="0" wms="http://admin.bbinpartner.com" />
                        </dl>
                    </div>
                    <button class="btn-top btn-top-adaptive"><i class="fa fa-angle-up"></i></button>
                </div>
                <!-- ADAPTIVE PAGE END -->
                <!-- RWD PAGE START -->
                <div id="rwdCont" class="page-wrap rwd">
                    <div class="nav-wrap">
                        <nav class="nav-main">
                            <button id="rwdBack" class="nav-back">
                                <i class="fa fa-angle-left"></i><b></b>
                            </button>
                            <button id="navSwitchAdaptive" class="nav-switch nav-switch-adaptive">
                                <span><b>固定网版</b></span>
                            </button>
                            <button class="nav-switch nav-switch-rwd mobile-on" data-filter="*">
                                <span><b>RWD 网版</b><i>所有款式</i></span>
                            </button>
                            <ul class="nav-filter clearfix">
                                <li class="nav-filter-hot">
                                    <button data-filter=".hot">热门版型</button>
                                </li>
                                <li class="nav-filter-layout">
                                    <span class="subtouch">版型布局</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button id="rwdNumLa" class="nav-filter-btn-layout-straight" data-filter=".L-a"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="rwdNumLb" class="nav-filter-btn-layout-horizontal" data-filter=".L-b"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="rwdNumLc" class="nav-filter-btn-layout-multi" data-filter=".L-c"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="rwdNumLd" class="nav-filter-btn-layout-diagonal" data-filter=".L-d"><i></i></button>
                                            </li>
                                            <li>
                                                <button id="rwdNumLe" class="nav-filter-btn-layout-norules" data-filter=".L-e"><i></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-filter-style">
                                    <span class="subtouch">设计风格</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button id="rwdNumF" class="nav-filter-btn-style-fashion" data-filter=".S-fashion">前卫时尚</button>
                                            </li>
                                            <li>
                                                <button id="rwdNumC" class="nav-filter-btn-style-classical" data-filter=".S-classical">复古典雅</button>
                                            </li>
                                            <li>
                                                <button id="rwdNumG" class="nav-filter-btn-style-gorgeous" data-filter=".S-gorgeous">精致华丽</button>
                                            </li>
                                            <li>
                                                <button id="rwdNumS" class="nav-filter-btn-style-simple" data-filter=".S-simple">简约大气</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-filter-color">
                                    <span class="subtouch">颜色色系</span>
                                    <div class="submenu">
                                        <ul>
                                            <li>
                                                <button class="nav-filter-btn-white" data-filter=".white"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-gray" data-filter=".gray"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-black" data-filter=".black"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-blue" data-filter=".blue"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-green" data-filter=".green"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-yellow" data-filter=".yellow"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-brown" data-filter=".coffee"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-orange" data-filter=".orange"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-red" data-filter=".red"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-pink" data-filter=".pink"></button>
                                            </li>
                                            <li>
                                                <button class="nav-filter-btn-purple" data-filter=".purple"></button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <button class="nav-view nav-view-grid"></button>
                    </div>
                    <div class="page-main page-view-grid">
                        <dl id="MixItUpRwd" class="removeTextNodes">
                            <item-view asset="{{ asset('') }}"  source="projects" rwd="1" wms="http://admin.bbinpartner.com" />
                        </dl>
                    </div>
                    <button class="btn-top btn-top-rwd"><i class="fa fa-angle-up"></i></button>
                </div>
                <!-- RWD PAGE END -->
                <span class="mask-bg"></span>
            </div>
        </div>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69409182-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-69409182-1');
    </script>
    <script src="{{ asset('js/string.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/isotope.min.js') }}"></script>
    <script src="{{ asset('js/parallaxmouse.min.js') }}"></script>
    <script src="{{ asset('js/particle.js') }}"></script>
    <script src="{{ asset('js/particleground.js') }}"></script>
</body>
</html>
