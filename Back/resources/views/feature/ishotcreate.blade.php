@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ishotcreate.js"></script>
@endsection
@section("content_body")

<div class="page-title">
    <div class="title_left">
        @if(isset($searchdata))
            @if($searchdata['template'] == 'rwd')
                <h1>新增熱門版型-RWD版型<small>create</small></h1>
            @elseif($searchdata['template'] == 'adaptive')
                <h1>新增熱門版型-固定版型<small>create</small></h1>
            @endif
        @endif
    </div>
    <div class="title_right">
        {{-- <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <form action="/adaptive-list" method="get" accept-charset="utf-8">
                <div class="input-group">
                    @if(isset($searchdata['pd_num']))
                        <input type="text" name="pd_num" class="form-control" value="{{ $searchdata['pd_num'] }}" placeholder="Search for...">
                    @else
                        <input type="text" name="pd_num" class="form-control" placeholder="Search for...">
                    @endif
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        </div> --}}
    </div>
</div>
<div class="row">
    <form style="display:none;" class="hot_form" action="/ishot-create" method="post">
        {!! csrf_field() !!}
        <input type="hidden" name="pd_id_array" value="">
        @if(isset($searchdata))
            @if($searchdata['template'] == 'rwd')
                <input type="hidden" name="pd_rwd" value="1">
            @elseif($searchdata['template'] == 'adaptive')
                <input type="hidden" name="pd_rwd" value="0">
            @endif
        @endif
    </form>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 adaptivelist_wrap">
        <div class="x_panel">
            {{-- <h3 style="float: left;">熱門排行列表</h3> --}}
            <ul class="nav navbar-right panel_toolbox">
                <li><button type="button" class="btn btn-warning btn_back"><i class="fa fa-mail-reply"></i> 返回</button>
                </li>
                @if(isset($templatedata))
                    @if(count($templatedata)!=0)
                        <li><button type="button" class="btn btn-success btn_save"><i class="fa fa-send"></i> 送出</button>
                    @endif
                @endif
                </li>
            </ul>
            <div class="clearfix"></div>
            {{-- <div class="x_title">
                <h2>排序 <small>Last Login</small></h2>
                <div class="clearfix"></div>
            </div> --}}
            <br>
            @if(isset($templatedata))
                @if(count($templatedata)!=0)
                    @foreach ($templatedata as $data)
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="thumbnail not_hot" data-value="{{ $data['pd_id'] }}">
                                <div class="overlay">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="image view view-first">
                                    <img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image">
                                    <div class="mask no-caption">
                                        <div class="tools tools-bottom">
                                            <a href="#" class="btn_submit"></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="caption">
                                    <p><strong>{{ $data['pd_num'] }}</strong></p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <p>目前暫無未設定為熱門版型的資料</p>
                @endif
            @else
                <p>目前暫無未設定為熱門版型的資料</p>
            @endif
        </div>
    </div>
</div>
{{-- <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
    <div class="x_panel">
      	<div class="x_title">
            @if(isset($searchdata))
                @if($searchdata['template'] == 'rwd')
                    <h2>新增熱門版型-RWD版型<small>create</small></h2>
                @elseif($searchdata['template'] == 'adaptive')
                    <h2>新增熱門版型-固定版型<small>create</small></h2>
                @endif
            @endif
        	<div class="clearfix"></div>
      	</div>
      	<div class="x_content">
            <br>
        	<form action="/ishot-create" class="form-horizontal form-label-left" enctype="multipart/form-data" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="pd_id" value="">

                <div class="form-group istemplate">
                    <label class="control-label col-md-3 col-sm-3 col-xs-12">選擇網版</label>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <select class="form-control">
                            @if(isset($templatedata))
                                @if(count($templatedata) > 0)
                                    @foreach ($templatedata as $data)
                                        <option value="{{$data['pd_id']}}">
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
</div> --}}
@endsection