<?php
	$title = "登入";
?>
@extends('login/__login_index')
@section('content')
	<div class="login-wrap">
        <div class="login-bg">
            <!-- logo -->
            <div class="logo"></div>
            <p class="login-txt-wrap">
                <span class="login-txt">bbin template system</span>
                @if($errors->any())
					<span class="login-tip text-warning">{{$errors->first()}}</span>
				@else
					<span class="login-tip text-warning"></span>
				@endif
            </p>
            <!--login form-->
            <form id="LoginForm" action="/login" method="post">
            	{!! csrf_field() !!}
                <p>
                    <label name="ud_account" for="ud_account" style="opacity: 1;">ID</label>
                    <input type="text" id="ud_account" class="login-input" name="ud_account">
                </p>
                <p>
                    <label name="ud_pwd" for="ud_pwd" style="opacity: 1;">PW</label>
                    <input id="ud_pwd" name="ud_pwd" type="password" class="login-input">
                </p>
                <p>
                    <input type="submit" class="login-submit" value="登入">
                </p>
            </form>
            <div class="login-ball01"></div>
            <div class="login-ball02"></div>
        </div>
    </div>
@endsection