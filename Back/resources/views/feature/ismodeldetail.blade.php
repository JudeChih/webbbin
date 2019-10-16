@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ismodeldetail.js"></script>
@endsection
@section("content_body")
<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
    <div class="x_panel">
      	<div class="x_title">
        	<h2>{{ $modeldata['mr_name'] }}<small>Detail</small></h2>
        	<div class="clearfix"></div>
      	</div>
      	<div class="x_content">
            <br>
        	<form action="/ismodel-modify" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="pd_id" value="{{$modeldata['pd_id']}}">
                <input type="hidden" name="mr_id" value="{{$modeldata['mr_id']}}">
                <input type="hidden" name="mr_view_img" value="{{$modeldata['mr_view_img']}}">

                <div class="form-group istemplate">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">選擇網版</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <select class="form-control">
                            @if(isset($templatedata))
                                @if(count($templatedata) > 0)
                                    @foreach ($templatedata as $data)
                                        <option value="{{$data['pd_id']}}">
                                            {{$data['pd_num']}}
                                            @if($data['pd_rwd'] == 0)
                                                "固定網版"
                                            @elseif($data['pd_rwd'] == 1)
                                                "RWD網版"
                                            @endif
                                        </option>
                                    @endforeach
                                @else
                                    <option value="0">暫無任何網版</option>
                                @endif
                            @endif
                        </select>
                    </div>
                </div>
                <div class="form-group isdate">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">時間</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請選擇時間">
                        <input type="text" class="form-control check_unit" id="mr_date" name="mr_date" readonly value="{{$modeldata['mr_date']}}">
                    </div>
                </div>
          		<div class="form-group isname">
            		<label class="control-label col-md-3 col-sm-3 col-xs-12">租網名稱</label>
            		<div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入租網名稱">
              			<input type="text" class="form-control" name="mr_name" placeholder="租網名稱" value="{{$modeldata['mr_name']}}">
            		</div>
          		</div>
                <div class="form-group isdesigner">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">視覺</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入視覺">
                        <input type="text" class="form-control" name="mr_designer" placeholder="視覺" value="{{$modeldata['mr_designer']}}">
                    </div>
                </div>
                <div class="form-group istpl">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">TPL</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入TPL">
                        <input type="text" class="form-control" name="mr_tpl" placeholder="TPL" value="{{$modeldata['mr_tpl']}}">
                    </div>
                </div>
                <div class="form-group isfilepath">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">檔案路徑</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入檔案路徑">
                        <input type="text" class="form-control" name="mr_filepath" placeholder="檔案路徑" value="{{$modeldata['mr_filepath']}}">
                    </div>
                </div>
                <div class="form-group isurl">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">租網連結</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入租網連結">
                        <input type="text" class="form-control" name="mr_url" placeholder="租網連結" value="{{ $modeldata['mr_url'] }}">
                    </div>
                </div>
                <div class="form-group isviewimg">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">示意圖上傳</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請上傳示意圖">
                        <div class="input-group">
                            <input style="display: none;" type="file" id="mr_view_img" name="mr_view_img_upload">
                            <input type="text" class="form-control url_readonly" readonly value="{{$modeldata['mr_view_img']}}">
                            <span class="input-group-btn">
                                <button class="btn btn-success" type="button" onclick="mr_view_img_upload.click()">檔案上傳</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ln_solid"></div>
                <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                        <a href="/ismodel-list" class="btn btn-warning">返回</a>
                        <button type="button" class="btn btn-danger btn_delete">刪除</button>
                        <button type="button" class="btn btn-success btn_save">送出</button>
                    </div>
                </div>
            </form>
            <form class="delete_form" action="/ismodel-delete" method="post" accept-charset="utf-8" style="display:none;">
                {!! csrf_field() !!}
                <input type="hidden" name="mr_id" value="{{ $modeldata['mr_id'] }}">
                <input type="hidden" name="pd_id" value="{{ $modeldata['pd_id'] }}">
            </form>
        </div>
    </div>
</div>
@endsection