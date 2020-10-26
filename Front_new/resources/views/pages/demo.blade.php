{{-- 框架導入 --}}
@extends('layouts.dashboard')

{{-- 個別CSS導入 --}}
@section('put_style')
{{-- <link href="{{ URL::asset('css/app.css') }}" rel="stylesheet"> --}}
@endsection

{{-- 個別JS導入 --}}
@section('put_script')
<script src="{{ URL::asset('js/demo.js') }}"></script>
@endsection

{{-- 主要內容處導入 --}}
@section('section')
<body>
	<div id="app" class="livedemo">
		<Demo></Demo>
	</div>
</body>
@endsection