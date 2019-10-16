<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN TEMPLATE</title>

    
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
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
        <item-detail source="{{ asset('projects') }}" asset="{{ asset('') }}" id="{{ $id }}" wms="http://admin.bbinpartner.com" />
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
    <script scr="{{ asset('js/bootstrap.min.js')}}"></script>
    <script scr="{{ asset('js/venobox.min.js')}}"></script>
    
</body>
</html>
