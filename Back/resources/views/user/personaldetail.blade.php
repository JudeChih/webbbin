@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/personaldetail.js"></script>
@endsection
@section("content_body")
<div class="content-title clearfix">
    個人資料<span class="text-nar">Admin</span>
</div>
<div class="content-body clearfix">
    <form action="/personal-user-modify" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
        {!! csrf_field() !!}
        <input type="hidden" name="ud_id" value="{{$userdata['ud_id']}}">
        <table class="table-order">
            <tr class="table-sepa">
                <td>使用者帳號</td>
                <td><span>{{$userdata['ud_account']}}</span></td>
            </tr>
            <tr class="isname">
                <td>使用者名稱</td>
                <td><input type="text" name="ud_name" value="{{$userdata['ud_name']}}"></td>
            </tr>
            <tr class="table-sepa">
                <td>舊密碼</td>
                <td><input class="check_unit" type="password" data-toggle="tooltip" title="請輸入舊密碼" name="ud_password" value=""></td>
            </tr>
            <tr>
                <td>新密碼</td>
                <td><input class="check_unit" type="password" data-toggle="tooltip" title="請輸入新密碼" name="ud_new_password" value=""></td>
            </tr>
            <tr>
                <td>確認密碼</td>
                <td><input class="check_unit" type="password" data-toggle="tooltip" title="請再次輸入新密碼" name="ud_new_password_confirm" value=""></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <a href="/index" title="返回" class="btn btn-cancel">返回</a>
                    <input type="submit" value="送出">
                </td>
            </tr>
        </table>
    </form>
</div>
@endsection