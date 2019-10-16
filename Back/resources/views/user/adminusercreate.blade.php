@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/adminusercreate.js"></script>
@endsection
@section("content_body")
<div class="content-title clearfix">
    新增使用者
</div>
<div class="content-body clearfix">
    <form action="/admin-user-create" class="" enctype="multipart/form-data" method="post">
        {!! csrf_field() !!}
        <input type="hidden" name="ud_status" value="0">
        <input type="hidden" name="ud_admin" value="0">
        <table class="table-order">
            <tr class="table-sepa isaccount">
                <td>使用者帳號</td>
                <td><input type="text" class="check_unit" name="ud_account" value="" data-toggle="tooltip" title="請輸入使用者帳號"></td>
            </tr>
            <tr class="ispass">
                <td>使用者密碼</td>
                <td><input type="password" class="check_unit" name="ud_password" value="" data-toggle="tooltip" title="請輸入使用者密碼"></td>
            </tr>
            <tr class="isname">
                <td>使用者名稱</td>
                <td><input type="text" class="check_unit" name="ud_name" value="" data-toggle="tooltip" title="請輸入使用者名稱"></td>
            </tr>
            <tr class="isstatus">
                <td>使用者狀態</td>
                <td class="js-table-btn">
                    <button type="button" class="table-enable table-active" data-value='1'>啟用</button>
                    <button type="button" class="table-disable" data-value='0'>停用</button>
                </td>
            </tr>
            <tr class="isadmin">
                <td>使用者權限</td>
                <td>
                    <p>
                        <input name="isadmin" id="normaluser" type="radio" value="0" checked="checked">
                        <label name="isadmin" for="normaluser">一般使用者</label>
                    </p>
                    <p>
                        <input name="isadmin" id="adminuser" type="radio" value="1">
                        <label name="isadmin" for="adminuser">管理員</label>
                    </p>
                </td>
            </tr>
            <tr class="">
                <td></td>
                <td>
                    <button type="button" class="btn_save">送出</button>
                    <a href="/admin-user-list" title="返回使用者列表" class="btn btn-cancel">返回</a>
                </td>
            </tr>
        </table>
    </form>
</div>
@endsection