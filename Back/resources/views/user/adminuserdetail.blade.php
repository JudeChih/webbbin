@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/adminuserdetail.js"></script>
@endsection
@section("content_body")
<div class="content-title clearfix">
    使用者資料<span class="text-nar">{{ $userdata['ud_name'] }}</span>
</div>
<div class="content-body clearfix">
    <form action="/admin-user-modify" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
        {!! csrf_field() !!}
        <input type="hidden" name="ud_id" value="{{$userdata['ud_id']}}">
        <input type="hidden" name="ud_status" value="{{$userdata['ud_status']}}">
        <input type="hidden" name="ud_admin" value="{{$userdata['ud_admin']}}">
        <table class="table-order">
            <tr class="table-sepa">
                <td>使用者帳號</td>
                <td><span>{{ $userdata['ud_name'] }}</span></td>
            </tr>
            <tr class="isname">
                <td>使用者名稱</td>
                <td><input type="text" class="check_unit" data-toggle="tooltip" title="請輸入使用者名稱" name="ud_name" value="{{$userdata['ud_name']}}"></td>
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
                    @if($userdata['ud_admin'] == 0)
                        <p>
                            <input name="isadmin" id="normaluser" type="radio" value="0" checked="checked">
                            <label name="isadmin" for="normaluser">一般使用者</label>
                        </p>
                        <p>
                            <input name="isadmin" id="adminuser" type="radio" value="1">
                            <label name="isadmin" for="adminuser">管理員</label>
                        </p>
                    @else
                        <p>
                            <input name="isadmin" id="normaluser" type="radio" value="0">
                            <label name="isadmin" for="normaluser">一般使用者</label>
                        </p>
                        <p>
                            <input name="isadmin" id="adminuser" type="radio" value="1" checked="checked">
                            <label name="isadmin" for="adminuser">管理員</label>
                        </p>
                    @endif
                </td>
            </tr>
            <tr class="table-sepa ispass">
                <td>修改密碼</td>
                <td><input type="password" class="check_unit" name="ud_password" value="" data-toggle="tooltip" title="請輸入使用者密碼"></td>
            </tr>
            <tr>
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