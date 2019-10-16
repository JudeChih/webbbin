@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/templateupload.js"></script>
@endsection
@section("content_body")
<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
    <div class="x_panel">
      	<div class="x_title">
        	<h2>上傳版型專案<small>upload</small></h2>
        	<div class="clearfix"></div>
      	</div>
      	<div class="x_content">
            <br>
        	<form action="/template-upload" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="pd_id" value="">
                <input type="hidden" name="pd_live" value="1">
                <div class="form-group istemplate">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">選擇版型</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <div class="col-md-9 col-sm-9 col-xs-12 p_l_r_dis">
                            <select class="form-control">
                                @if(isset($templatedata))
                                    @if(count($templatedata) > 0)
                                        @foreach ($templatedata as $data)
                                            <option value="{{$data['pd_id']}}" data-num="{{$data['pd_num']}}">
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
                </div>
                <div class="form-group isliveurl">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">版型專案上傳</label>
                    <div class="col-md-9 col-sm-9 col-xs-12 check_unit" data-toggle="tooltip" title="請上傳版型專案">
                        <div class="input-group">
                            <input type="text" class="form-control url_readonly" id="pd_live_url" name="pd_live_url" readonly>
                            <span class="input-group-btn">
                                <button class="btn btn-success pd_live_url" data-input="pd_live_url" data-preview="holder" type="button">檔案上傳</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ln_solid"></div>
                <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                        <a href="/index" class="btn btn-warning">返回</a>
                        <button type="button" class="btn btn-success btn_save">送出</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection