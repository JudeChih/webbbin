<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
    <style>
        @font-face {
            font-family: 'FontAwesome';
            src: url("{{ asset('fonts/fontawesome-webfont.eot?v=4.6.3') }}");
            src: url("{{ asset('fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') }}") format('embedded-opentype'),
            url("{{ asset('fonts/fontawesome-webfont.woff2?v=4.6.3') }}") format('woff2'),
            url("{{ asset('fonts/fontawesome-webfont.woff?v=4.6.3') }}") format('woff'),
            url("{{ asset('fonts/fontawesome-webfont.ttf?v=4.6.3') }}") format('truetype'),
            url("{{ asset('fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') }}") format('svg');
            font-weight: normal;
            font-style: normal;
        }
    </style>
</head>
<body>
    
    <div id="app">
        <item-view asset="{{ asset('') }}"  source="projects" rwd="1"></item-view>
    </div>
    <!-- FOORTER -->
    <div id="page-footer" class="footer-wrap clearfix">
        <a href="{{ route('logout') }}"
            class="footer-logout"
            onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
            登出
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
    </div>
    <!-- JS -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
