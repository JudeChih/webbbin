<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>BBIN</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/jquery.fancybox.css') }}">
    <!-- Fonts -->
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

    <script src="{{ asset('vendor/crip/cripfilesys/tinymce/tinymce.min.js') }}"></script>

    <script type="text/javascript">
        window.Laravel = {
            csrfToken : "<?= csrf_token();  ?>"
        };
    </script>
</head>

<body>

    <div id="app">
        <item-add asset="{{ asset('') }}"/>
    </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/jquery.fancybox.js') }}"></script>

    <script>
    tinymce.init({
        plugins: [
            'advlist autolink link image lists charmap print preview hr anchor',
            'pagebreak searchreplace wordcount visualblocks visualchars',
            'insertdatetime media nonbreaking table contextmenu directionality',
            'emoticons paste textcolor cripfilesys',
        ],
        toolbar: 'undo redo | insert | styleselect | bold italic | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image cripfilesys-btn',
        relative_urls: false,
        language: 'en',
        selector: '.tinymce',
        external_filemanager_path: "{{ asset('/packages/filemanager') }}",
        external_plugins: { filemanager: "{{ asset('/vendor/crip/cripfilesys/tinymce/plugin.js') }}" }
    })

    fancyboxOpen();
    $('.addRow').click(function() {
        fancyboxOpen();
    })  
    function fancyboxOpen() {
        $(document).ready(function() {
            $('.fancybox').fancybox({
                iframe: {
                    preload: false,
                    scrolling: 'yes',
                    css: {
                        maxWidth: '1200px'
                    }
                }
            })  
        });
    }
    </script>
    <script src="{{ asset('js/datepicker.js') }}"></script>
    <script>
        //選擇次數-DATEPICKER
        $('#datepicker').datepicker({
            todayHighlight: true,
            format: "yyyy-mm-dd",
        }).on('changeDate', function(e) {
            $('input[name=date]').val(e.format());
        });
        //DATEPICKER
        $('#date').datepicker();
    </script>
</body>

</html>