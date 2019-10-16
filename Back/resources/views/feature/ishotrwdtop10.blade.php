@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ishotrwdtop10.js"></script>
@endsection
@section("content_body")
<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
    <div class="x_panel">
        <div class="x_title">
            <h2>編輯熱門版型推薦-RWD版型<small>edit</small></h2>
            <div class="clearfix"></div>
        </div>
        <div class="x_content">
            <br>
            <form action="/ishot-rwd-top10" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="pd_id" value="">

                @if(isset($top10data))
                    @if(count($top10data) > 0)
                        <div class="form-group istop10">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">已選熱門版型</label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <div class="col-md-9 col-sm-9 col-xs-12 top10_block p_l_r_dis">
                                    @foreach ($top10data as $data1)
                                    <div class="input-group">
                                        <input class="top10_data form-control" data-id="{{$data1['pd_id']}}" value="{{$data1['pd_num']}}" readonly>
                                        <span class="input-group-btn">
                                            <button class="btn btn-danger btn_remove_top10" type="button"><i class="fa fa-remove" style="font-size: 20px;"></i></button>
                                        </span>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    @else
                        <div class="form-group istop10">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">已選熱門版型</label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <div class="col-md-9 col-sm-9 col-xs-12 top10_block p_l_r_dis">
                                    <input class="top10_none form-control" value="請選擇任一熱門版型" readonly>
                                </div>
                            </div>
                        </div>
                    @endif
                @endif
                <div class="form-group istemplate">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">選擇熱門版型</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <div class="col-md-9 col-sm-9 col-xs-12 p_l_r_dis">
                            <select class="form-control top10_select" data-toggle="tooltip" title="請選擇任一版型，不可重覆">
                                @if(isset($templatedata))
                                    @if(count($templatedata) > 0)
                                        @foreach ($templatedata as $data)
                                            <option value="{{$data['pd_id']}}" data-num="{{$data['pd_num']}}">
                                                {{$data['pd_num']}}
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
                <div class="ln_solid"></div>
                <div class="form-group">
                    <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                        <button type="button" class="btn btn-warning btn_back">返回</button>
                        <button type="button" class="btn btn-success btn_save">送出</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection