@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/transactionrecordlist.js"></script>
@endsection
@section("content_body")
<div class="content-title clearfix">
    紀錄列表
    <p class="tab-title1"></p>
</div>
<div class="content-body clearfix">
    <div id="tab-link">
        <ul class="clearfix">
            <li><a href="#tab1" title="異動紀錄" class="active">異動紀錄</a></li>
            <li><a href="#tab2" title="登入紀錄">登入紀錄</a></li>
        </ul>
    </div>
    <div id="tab-content">
        <!--tab1-->
        <div id="tab1">
            <table class="table-list">
                <thead>
                    <tr class="table-list-modify">
                        <td class="tNum">序號</td>
                        <td class="tAct">動作</td>
                        <td class="tCon">內容</td>
                        <td class="tUser">操作者</td>
                        <td class="tDate">時間</td>
                    </tr>
                </thead>
                <tbody>
                @if(isset($transactiondata))
                    @if(count($transactiondata)!=0)
                        @foreach ($transactiondata as $key => $data)
                            <tr>
                                <td>
                                    @if($searchdata['limit'] != 'all')
                                        {{$key+1+($searchdata['page']-1)*$searchdata['limit']}}
                                    @else
                                        {{$key+1}}
                                    @endif
                                </td>
                                <td>
                                    @if($data['tr_action'] == 1)
                                        新增版型
                                    @elseif($data['tr_action'] == 2)
                                        修改版型
                                    @elseif($data['tr_action'] == 3)
                                        刪除版型
                                    @elseif($data['tr_action'] == 4)
                                        設定熱門
                                    @elseif($data['tr_action'] == 5)
                                        新增版型紀錄
                                    @elseif($data['tr_action'] == 6)
                                        修改版型紀錄
                                    @elseif($data['tr_action'] == 7)
                                        刪除版型紀錄
                                    @elseif($data['tr_action'] == 8)
                                        新增使用者
                                    @elseif($data['tr_action'] == 9)
                                        修改使用者
                                    @elseif($data['tr_action'] == 10)
                                        刪除使用者
                                    @endif
                                </td>
                                <td class="tLeft">
                                    @if($data['tr_action'] == 1)
                                        新增版型，版型編號為{{$data['pd_id']}}
                                    @elseif($data['tr_action'] == 2)
                                        修改版型編號為{{$data['pd_id']}}的版型
                                    @elseif($data['tr_action'] == 3)
                                        刪除版型編號為{{$data['pd_id']}}的版型
                                    @elseif($data['tr_action'] == 4)
                                        變更熱門排行頁面的顯示方式
                                    @elseif($data['tr_action'] == 5)
                                        新增版型編號為{{$data['pd_id']}}的版型紀錄，版型紀錄編號為{{$data['mr_id']}}
                                    @elseif($data['tr_action'] == 6)
                                        修改版型編號為{{$data['pd_id']}}的版型紀錄，版型紀錄編號為{{$data['mr_id']}}
                                    @elseif($data['tr_action'] == 7)
                                        刪除版型編號為{{$data['pd_id']}}的版型紀錄，版型紀錄編號為{{$data['mr_id']}}
                                    @elseif($data['tr_action'] == 8)
                                        新增使用者，使用者編號為{{$data['ud_id']}}
                                    @elseif($data['tr_action'] == 9)
                                        修改使用者編號為{{$data['ud_id']}}的使用者
                                    @elseif($data['tr_action'] == 10)
                                        刪除使用者編號為{{$data['ud_id']}}的使用者
                                    @endif
                                </td>
                                <td>
                                    <span class="text-tip">{{$data['tr_user']}}</span>
                                </td>
                                <td>{{$data['create_date']}}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="6">目前暫無異動紀錄</td>
                        </tr>
                    @endif
                @else
                    <tr>
                        <td colspan="6">目前暫無異動紀錄</td>
                    </tr>
                @endif
                </tbody>
            </table>
            <!--pagination-->
            <div class="paginate_box">
                @if($searchdata['limit'] != 'all')
                    {{ $transactiondata->appends(['limit' => $searchdata['limit']]) }}
                @endif
                <div class="pagination-select">
                    <form action="/istransaction-list" method="get" id="searchWrap">
                        <input type="hidden" name="limit" value="{{$searchdata['limit']}}">
                    </form>
                    <select name="page_limit" id="page_limit">
                        @if($searchdata['limit'] == '10')
                            <option value="10" selected=selected>10項 / 頁</option>
                            <option value="50">50項 / 頁</option>
                            <option value="all">全部列出</option>
                        @elseif($searchdata['limit'] == '50')
                            <option value="10">10項 / 頁</option>
                            <option value="50" selected=selected>50項 / 頁</option>
                            <option value="all">全部列出</option>
                        @elseif($searchdata['limit'] == 'all')
                            <option value="10">10項 / 頁</option>
                            <option value="50">50項 / 頁</option>
                            <option value="all" selected=selected>全部列出</option>
                        @endif
                    </select>
                </div>
                <div class="pagination-gotoTop">
                    <a href="javascript:void(0)" title="gototop" class="fa js-gotoTop"></a>
                </div>
            </div>
        </div>
        <!--tab1 //-->
        <!--tab2-->
        <div id="tab2">
            <table class="table-list table-login-width">
                <thead>
                    <tr class="table-list-login-record">
                        <td class="tUser">操作者</td>
                        <td class="tDate">時間</td>
                    </tr>
                </thead>
                <tbody>
                @if(isset($userlogindata))
                    @if(count($userlogindata)!=0)
                        @foreach ($userlogindata as $data)
                            <tr>
                                <td>
                                    <span class="text-tip">{{$data['ud_name']}}</span>
                                </td>
                                <td>{{$data['ud_last_login']}}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="6">目前暫無登入紀錄</td>
                        </tr>
                    @endif
                @else
                    <tr>
                        <td colspan="6">目前暫無登入紀錄</td>
                    </tr>
                @endif
                </tbody>
            </table>
            <!--pagination-->
            <div class="paginate_box">
                @if($searchdata['limit'] != 'all')
                    {{ $userlogindata->appends(['limit' => $searchdata['limit']]) }}
                @endif
                <div class="pagination-select">
                    <form action="/istransaction-list" method="get" id="searchWrap">
                        <input type="hidden" name="limit" value="{{$searchdata['limit']}}">
                    </form>
                    <select name="page_limit" id="page_limit">
                        @if($searchdata['limit'] == '10')
                            <option value="10" selected=selected>10項 / 頁</option>
                            <option value="50">50項 / 頁</option>
                            <option value="all">全部列出</option>
                        @elseif($searchdata['limit'] == '50')
                            <option value="10">10項 / 頁</option>
                            <option value="50" selected=selected>50項 / 頁</option>
                            <option value="all">全部列出</option>
                        @elseif($searchdata['limit'] == 'all')
                            <option value="10">10項 / 頁</option>
                            <option value="50">50項 / 頁</option>
                            <option value="all" selected=selected>全部列出</option>
                        @endif
                    </select>
                </div>
                <div class="pagination-gotoTop">
                    <a href="javascript:void(0)" title="gototop" class="fa js-gotoTop"></a>
                </div>
            </div>
        </div>
        <!--tab2 //-->
    </div>
</div>

@endsection
