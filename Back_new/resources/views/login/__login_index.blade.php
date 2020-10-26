<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ isset($title) ? $title.' | ' : '' }}BBIN template</title>
        <!-- Styles -->
        {{-- <link href="{{ URL::asset('css/lib/bootstrap.min.css') }}" rel="stylesheet"> --}}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" rel="stylesheet">
        <link href="{{ URL::asset('css/app.css') }}" rel="stylesheet">
        <style type="text/css">
            html{
                height:100%;
            }
            body{
                overflow: hidden;
                width:unset;
                min-width: unset;
            }
        </style>
        <!-- Scripts -->
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script>
            window.Laravel = <?php
                echo json_encode(['csrfToken' => csrf_token()]);
            ?>
        </script>
    </head>
    <body class="login_body">
        @yield('content')
        <script src="js/main.js"></script>
    </body>
</html>
