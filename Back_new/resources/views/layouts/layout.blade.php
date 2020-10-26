<html lang="en" data-livestyle-extension="available">
<head>
    <title> BBIN template </title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <!-- 導入metatag資料 -->
    @include('layouts.metatag_list')

    <!-- 導入css -->
    @include('layouts.css_list')

    <!-- jQuery -->
    {{-- <script src="{{ URL::asset('js/plugin/jquery.min.js') }}"></script> --}}
</head>
<body class="nav-md">
<!-- 提示框 -->
@yield('prompt_box')
<!-- 提示框 end -->
<div id="mainBody" class="clearfix">
    <!--header-->
    <div id="header" class="clearfix">
        <div class="header-wrap">
            <!-- logo -->
            <a href="/index" class="logo"></a>
            <!-- nav -->
            <div class="mainnav-wrap">
                <div class="mainnav">
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:void(0)" class="fa drop-title drop-title-down">版型管理</a>
                            <div class="drop-group drop-open">
                                <a href="/template-create" class="{{ Request::path() ==  'template-create' ? 'current' : ''}}">新增版型</a>
                                <a href="/adaptive-list" class="{{ Request::path() ==  'adaptive-list' ? 'current' : ''}}">網版列表</a>
                                <a href="javascript:void(0)" id="open_image_manager">圖片管理</a>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="fa drop-title drop-title-down">合作夥伴管理</a>
                            <div class="drop-group drop-open">
                                <a href="/logo-create" class="{{ Request::path() ==  'logo-create' ? 'current' : ''}}">新增合作夥伴</a>
                                <a href="/logo-list" class="{{ Request::path() ==  'logo-list' ? 'current' : ''}}">合作夥伴列表</a>
                            </div>
                        </li>
                        <li>
                            <a href="{{config('global.rentSearch')}}" target="_blank">租網檢索</a>
                        </li>
                        @if(!empty(Session::get('admin')))
                            @if(Session::get('admin') > 0)
                                <li>
                                    <a href="javascript:void(0)" class="fa drop-title drop-title-down">後台管理</a>
                                    <div class="drop-group drop-open">
                                        <a href="/istransaction-list" class="{{ Request::path() ==  'istransaction-list' ? 'current' : ''}}">紀錄列表</a>
                                        <a href="/admin-user-list" class="{{ Request::path() ==  'admin-user-list' ? 'current' : ''}}">使用者列表</a>
                                    </div>
                                </li>
                            @endif
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="container">
        <!--staut-->
        <div class="staut">
            <a href="/personal-user-modify" title="{{ Session::get('user_name') }}" class="btn staut-edit">
                @if(!empty(Session::get('user_name')))
                    {{ Session::get('user_name') }}
                @endif
            </a>
            <a href="/logout" title="登出" class="btn staut-logout">登出</a>
        </div>
        <!--content-->
        <div class="content-wrap clearfix">
            @yield('content_body')
        </div>
    </div>
</div>
<!--alert-->
<div class="alert-wrap">
    <a href="##" class="fa alert-close"></a>
    <div class="alert-content">
        <p>
            <span class="text_ask">是否</span>
            <span class="text-warning text_active">關閉</span>
            <span class="text_type">狀態?</span>
        </p>
    </div>
    <div class="alert-link">
        <a href="##" class="btn btn_edit">確認</a>
        <a href="##" class="btn btn-cancel">取消</a>
    </div>
</div>
<div class="mask-bg"></div>
@if($errors->any())

<div class="tip-wrap" style="display: none;">
    <a href="##" class="fa tip-close"></a>
    <div class="tip-content">
        <p>
            <span class="text_ask">{{$errors->first()}}</span>
        </p>
    </div>
</div>
<script>
    $('.tip-close').on('click',function(){
        $('.tip-wrap').fadeOut(500,function(){
            $('.tip-wrap').remove();
        });
    })
    $('.tip-wrap').fadeIn(1000);
    setTimeout(function(){
        $('.tip-wrap').fadeOut(1000,function(){
            $('.tip-wrap').remove();
        });
    },3000)
</script>
{{-- <div class="overlay"></div> --}}
@endif

<!-- 導入js -->
@include('layouts.js_list')

<!-- 各頁面各別的JS匯入 -->
@yield('put_script')
</body>
</html>
