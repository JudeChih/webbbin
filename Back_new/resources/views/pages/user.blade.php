{{-- 框架導入 --}}
@extends('layouts.dashboard')

{{-- 個別CSS導入 --}}
@section('put_style')

@endsection

{{-- 個別JS導入 --}}
@section('put_script')
<script src="{{ URL::asset('js/user.js') }}"></script>
@endsection

{{-- 主要內容處導入 --}}
@section('section')
<body>
	<div id="app" class="user_page">
		<User></User>
	</div>
</body>
@endsection