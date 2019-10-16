@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/adminuserlist.js"></script>
@endsection
@section("content_body")
<div class="content-title clearfix">
    使用者列表
    <p>共有<span class="text-nar">{{count($userdata)}}</span>個使用者</p>
    <a href="/admin-user-create" title="新增使用者" class="btn btn-cancel content-righttop-btn">
        <span class="fa"></span>新增使用者
    </a>
</div>
<div class="content-body clearfix">
    <table class="table-list">
        <thead>
            <tr class="table-list-user">
                <td class="tNum">序號</td>
                <td class="tName">名稱</td>
                <td class="tId">帳號</td>
                <td class="tPw">密碼</td>
                <td class="tPer">權限</td>
                <td class="tStaut">狀態</td>
                <td class="tDate">最後一次登入</td>
                <td class="tEdit">編輯</td>
            </tr>
        </thead>
        <tbody>
        @if(isset($userdata))
            @if(count($userdata)!=0)
                @foreach ($userdata as $key => $data)
                    <tr>
                        <td>
                            {{$key+1+($searchdata['page']-1)*15}}
                        </td>
                        <td class="tLeft table-username">
                            <a href="/admin-user-modify?ud_id={{ $data['ud_id'] }}" title="{{$data['ud_name']}}">
                                {{$data['ud_name']}}
                            </a>
                        </td>
                        <td class="tLeft">{{$data['ud_account']}}</td>
                        <td class="tLeft">{{$data['ud_password']}}</td>
                        <td>
                            @if($data['ud_admin'] == 1)
                                管理員
                            @elseif($data['ud_admin'] == 0)
                                一般使用者
                            @endif
                        </td>
                        <td>
                            @if($data['ud_status'] == 1)
                                <span class="">啟用中</span>
                            @elseif($data['ud_status'] == 0)
                                <span class="text-warning">停用中</span>
                            @endif
                        </td>
                        <td>
                            @if(is_null($data['ud_last_login']))
                                尚未登入過
                            @else
                                {{$data['ud_last_login']}}
                            @endif
                        </td>
                        <td class="tLink">
                            <a href="/admin-user-modify?ud_id={{ $data['ud_id'] }}" title="編輯" class="btn btn-s">編輯</a>
                            <button type="button" title="刪除" class="btn btn-s btn-s-del" data-type="delete_user">刪除</button>
                            <form class="delete_form" action="/admin-user-delete" method="post" accept-charset="utf-8" style="display:none;">
                                {!! csrf_field() !!}
                                <input type="hidden" name="ud_id" value="{{ $data['ud_id'] }}">
                            </form>
                        </td>
                    </tr>
                @endforeach
            @else
                <tr>
                    <td colspan="6">查無相符的使用者資料</td>
                </tr>
            @endif
        @else
            <tr>
                <td colspan="6">目前暫無使用者資料</td>
            </tr>
        @endif
        </tbody>
    </table>
</div>
@if(isset($userdata))
	<div class="paginate_box">
		{{ $userdata }}
        <div class="pagination-gotoTop">
            <a href="javascript:void(0)" title="gototop" class="fa js-gotoTop"></a>
        </div>
	</div>
@endif

@endsection
