<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="welcome">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
    <title>BBIN</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <a href="{{ asset('rwd') }}" class="col-xs-6 item rwd">
                RWD
                </a>
                <a href="{{ asset('adaptive') }}"  class="col-xs-6 item fixed">
                Adaptive
                </a>
            </div>
        </div>
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


    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
