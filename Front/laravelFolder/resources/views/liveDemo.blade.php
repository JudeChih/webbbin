<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN TEMPLATE</title>

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/add_extra.css') }}">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->
    {{--  <script src="js/jquery.js"></script>  --}}
</head>
<body>
    <div id="mainBody">
        <!-- CONTAINER -->
        <live-demo source="{{ asset('projects') }}" asset="{{ asset('') }}" id="{{ $id }}" wms="http://wms.bbinpartner.com" />
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
    <script src="{{ asset('js/qrcode.min.js') }}"></script>
    {{--  <script src="{{ asset('js/livedemo.js') }}"></script>  --}}
    <script>
        var qrcode = new QRCode("qrcode",{
            width: 80,
	        height: 80,
            colorDark : "#d2471b",
            correctLevel : QRCode.CorrectLevel.L
        });
    </script>
</body>
</html>
