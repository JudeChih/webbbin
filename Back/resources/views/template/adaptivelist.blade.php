@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/adaptivelist.js"></script>
@endsection
@section("content_body")
<div class="page-title">
  	<div class="content-title">
    	網版列表<p>共有<span class="text-nar">{{$searchdata['adaptive_count']}}</span>個版</p>
    	<form id="searchWrap" action="/adaptive-list" method="get" accept-charset="utf-8">
    		<input type="hidden" name="model" value="{{$searchdata['model']}}">
            <input type="hidden" name="change_model" value="0">
    		<input type="hidden" name="orderBy" value="{{$searchdata['orderBy']}}">
            @if(isset($searchdata['limit']))
				<input type="hidden" name="limit" value="{{$searchdata['limit']}}">
  			@else
				<input type="hidden" name="limit" value="10">
  			@endif
  			@if(isset($searchdata['pd_num']))
    			<input type="text" name="pd_num" class="search-bar" value="{{ $searchdata['pd_num'] }}" placeholder="Search for...">
    		@else
				<input type="text" name="pd_num" class="search-bar" placeholder="Search for...">
    		@endif
            @if(isset($searchdata['pd_num']))
                <input type="button" class="fa close-btn" value="">
            @else
                <input type="submit" class="fa search-btn" value="">
            @endif
        </form>
  	</div>
</div>
@if(isset($templatedata))
	<div class="paginate_box">
		@if($searchdata['limit'] != 'all')
			@if(isset($searchdata['pd_num']))
				{{ $templatedata->appends(['pd_num' => $searchdata['pd_num'],'model' => $searchdata['model'],'limit' => $searchdata['limit'],'orderBy' => $searchdata['orderBy']]) }}
			@else
				{{ $templatedata->appends(['model' => $searchdata['model'],'limit' => $searchdata['limit'],'orderBy' => $searchdata['orderBy']]) }}
			@endif
		@endif
		<div class="pagination-select">
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
		<div class="model-wrap">
			@if($searchdata['model'] == 'list')
				<a href="##" title="" class="fa model-btn model-list"></a>
			@else
				<a href="##" title="" class="fa model-btn model-list model-img"></a>
			@endif
		    <select name="adaptive_order" id="adaptive_order">
		        @if($searchdata['orderBy'] == 'pd_date')
		            <option value="pd_date" selected=selected>上架日期排行</option>
		            <option value="pd_hot">熱門項目</option>
		        @else
		            <option value="pd_date">上架日期排行</option>
		            <option value="pd_hot" selected=selected>熱門項目</option>
		        @endif
		    </select>
        </div>
	</div>
@endif
<!--template 列表 -->
@if($searchdata['model'] == 'list')
{{-- list模式 --}}
<div class="template-list-wrap clearfix">
    <div class="template-title clearfix">
        <div class="temp-num">序號</div>
        <div class="temp-img">縮圖</div>
        <div class="temp-name">名稱</div>
        <div class="temp-date">上線日期</div>
        <div class="temp-layout">網版佈局</div>
        <div class="temp-style">網版風格</div>
        <div class="temp-color">
            色系
        </div>
        <div class="temp-staut">
            狀態
        </div>
        <div class="temp-icon">
            New icon
        </div>
        <div class="temp-edit">
            編輯
        </div>
        <div class="temp-demo">
            Demo
        </div>
    </div>
    <div class="template-content clearfix">
        @foreach ($templatedata as $key => $data)
            <div class="template-item">
                <div class="temp-num">
                    @if($searchdata['limit'] != 'all')
                    {{$key+1+($searchdata['page']-1)*$searchdata['limit']}}
                    @else
                    {{$key+1}}
                    @endif
                </div>
                <div class="temp-img">
                    <a href="/template-modify?pd_id={{$data['pd_id']}}"><img src="{{ $data['pd_view_img'] }}" alt=""></a>
                </div>
                <div class="temp-name">
                    <a href="/template-modify?pd_id={{$data['pd_id']}}" title="{{$data['pd_num']}}">{{$data['pd_num']}}</a>
                </div>
                <div class="temp-date">
                    {{$data['pd_date']}}
                </div>
                <div class="temp-layout">
                    @if($data['pd_layout'] == 1)
                        直向大小
                    @elseif($data['pd_layout'] == 2)
                        橫向大小
                    @elseif($data['pd_layout'] == 3)
                        多面切割
                    @elseif($data['pd_layout'] == 4)
                        對角線
                    @elseif($data['pd_layout'] == 5)
                        無規則
                    @endif
                </div>
                <div class="temp-style">
                    @if($data['pd_style'] == 1)
                        前衛時尚
                    @elseif($data['pd_style'] == 2)
                        復古典雅
                    @elseif($data['pd_style'] == 3)
                        精緻華麗
                    @elseif($data['pd_style'] == 4)
                        簡約大氣
                    @endif
                </div>
                <div class="temp-color alLeft">
                    @foreach (json_decode($data['pd_colors']) as $val)
                        <span class="color color-{{$val}}"></span>
                    @endforeach
                    @if(count(json_decode($data['pd_colors'])) == 1)
                        <span class="color"></span>
                    @endif
                </div>
                {{-- 狀態顯示 --}}
                @if($data['pd_show'] == 1)
                    <div class="temp-staut temp-active js-sv">
                        <a href="javascript:void(0)" data-href="/template-edit/pd_show/{{$data['pd_id']}}" data-value="{{$data['pd_show']}}" data-type="pd_show" class="btn btn-s" title=""></a>
                    </div>
                @else
                    <div class="temp-staut js-sv">
                        <a href="javascript:void(0)" data-href="/template-edit/pd_show/{{$data['pd_id']}}" data-value="{{$data['pd_show']}}" data-type="pd_show" class="btn btn-s" title=""></a>
                    </div>
                @endif
                {{-- 最新顯示 --}}
                @if($data['pd_new'] == 1)
                    <div class="temp-icon temp-active js-sv">
                        <a href="javascript:void(0)" data-href="/template-edit/pd_new/{{$data['pd_id']}}" data-value="{{$data['pd_new']}}" data-type="pd_new" class="btn btn-s" title=""></a>
                    </div>
                @else
                    <div class="temp-icon js-sv">
                        <a href="javascript:void(0)" data-href="/template-edit/pd_new/{{$data['pd_id']}}" data-value="{{$data['pd_new']}}" data-type="pd_new" class="btn btn-s" title=""></a>
                    </div>
                @endif
                {{-- 編輯按鈕 --}}
                <div class="temp-edit js-sv">
                    <a href="/template-modify?pd_id={{$data['pd_id']}}" class="btn btn-s" title="編輯"></a>
                </div>
                {{-- Demo連結 --}}
                @if($data['pd_live'] == 1)
                    <div class="temp-demo js-sv">
                        <a href="http://web.bbinpartner.com/liveDemo/{{$data['pd_id']}}" target="_blank" class="btn btn-s" title="Demo"></a>
                    </div>
                @else
                    <div class="temp-demo js-sv">
                    </div>
                @endif
            </div>
        @endforeach
    </div>
</div>
@else
{{-- image模式 --}}
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p_l_r_dis adaptivelist_wrap">
    	<div class="x_panel">
    		@if(isset($templatedata))
				@if(count($templatedata)!=0)
					@foreach ($templatedata as $data)
      					<div class="col-lg-4 col-sm-6 col-xs-6">
							<form action="/template-modify" class="col-lg-12 col-sm-12 col-xs-12 p_l_r_dis form_item" method="get">
      							{!! csrf_field() !!}
								<input type="hidden" name="pd_id" value="{{ $data['pd_id'] }}">
				    			<div class="item_block">
				      				<div class="image view view-first">
				      					<a href="/template-modify?pd_id={{$data['pd_id']}}" class="" title="{{ $data['pd_num'] }}"><img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image"></a>
				      				</div>
				      				<div class="caption">
				        				<p><strong><a href="/template-modify?pd_id={{$data['pd_id']}}" class="" title="{{ $data['pd_num'] }}">{{ $data['pd_num'] }}</a></strong></p>
				        				@if($data['pd_live'] == 1 && $data['pd_live_url'] != '')
				        					<a href="/template-modify?pd_id={{$data['pd_id']}}" class="modify_url">編輯</a>
				        					<a class="live_url" href="{{config('global.webbbin_front')}}{{$data['pd_live_url']}}" target="_blank">Demo</a>
				        				@else
											<a href="/template-modify?pd_id={{$data['pd_id']}}" class="modify_url">編輯</a>
				        				@endif
				      				</div>
				    			</div>
				    		</form>
  						</div>
  					@endforeach
  				@else
					<p>查無相符的固定網版資料</p>
  				@endif
  			@else
  				<p>目前暫無固定網版資料</p>
  			@endif
    	</div>
  	</div>
</div>
@endif

@if(isset($templatedata))
	<div class="paginate_box">
		@if($searchdata['limit'] != 'all')
			@if(isset($searchdata['pd_num']))
				{{ $templatedata->appends(['pd_num' => $searchdata['pd_num'],'model' => $searchdata['model'],'limit' => $searchdata['limit'],'orderBy' => $searchdata['orderBy']]) }}
			@else
				{{ $templatedata->appends(['model' => $searchdata['model'],'limit' => $searchdata['limit'],'orderBy' => $searchdata['orderBy']]) }}
			@endif
		@endif
        <div class="pagination-gotoTop">
            <a href="javascript:void(0)" title="gototop" class="fa js-gotoTop"></a>
        </div>
	</div>
@endif

@endsection
