@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ismodelcreate.js"></script>
@endsection
@section("content_body")
<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
    <div class="x_panel">
      	<div class="x_title">
        	<h2>新增版型紀錄<small>create</small></h2>
        	<div class="clearfix"></div>
      	</div>
      	<div class="x_content">
            <br>
        	<form action="/ismodel-create" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="pd_id" value="">
                <input type="hidden" name="mr_name" value="">

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
                <div class="form-group iswebsite">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">選擇租網</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <select class="form-control">
                            @if(isset($websitedata))
                                @if(count($websitedata) > 0)
                                    @foreach ($websitedata as $data)
                                        <option value="{{$data['caseName']}}">{{$data['caseName']}}</option>
                                    @endforeach
                                @else
                                    <option value="0">暫無任何租網</option>
                                @endif
                            @endif
                        </select>
                    </div>
                </div>
                <div class="form-group isurl">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">租網連結</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請輸入租網連結">
                        <input type="text" class="form-control" name="mr_url" placeholder="租網連結">
                    </div>
                </div>
                <div class="ln_solid"></div>
                <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                        <button type="button" class="btn btn-warning btn_back">返回</a>
                        <button type="button" class="btn btn-success btn_save">送出</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection