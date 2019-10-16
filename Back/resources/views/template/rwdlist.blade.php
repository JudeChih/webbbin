
@extends('layouts/layout')
@section("prompt_box")
{{-- 暫時用不到任何提示框 --}}
@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/rwdlist.js"></script>
@endsection
@section("content_body")
<div class="page-title">
  	<div class="title_left">
    	<h1>RWD網版列表</h1>
  	</div>
  	<div class="title_right">
    	<div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
    		<form action="/rwd-list" method="get" accept-charset="utf-8">
	      		<div class="input-group">
	      			@if(isset($searchdata['search_num']))
						<input type="hidden" name="search_num" value="{{$searchdata['search_num']}}">
	      			@else
						<input type="hidden" name="search_num" value="40">
	      			@endif
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
    	</div>
  	</div>
</div>
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 rwdlist_wrap">
    	<div class="x_panel">
    		<div class="x_title">
                @if(isset($searchdata['search_num']) && isset($searchdata['rwd_count']))
    				@if($searchdata['search_num'] == 40)
                		<p>目前 {{$searchdata['rwd_count']}} 個RWD網版<span class="m_l_r">|</span>檢視 <span class="search_num active">40</span> <span class="search_num">100</span></p>
                	@elseif($searchdata['search_num'] == 100)
						<p>目前 {{$searchdata['rwd_count']}} 個RWD網版<span class="m_l_r">|</span>檢視 <span class="search_num">40</span> <span class="search_num active">100</span></p>
                	@endif
                @else
					<p>目前沒有任何RWD網版<span class="m_l_r">|</span>檢視 <span class="search_num active">40</span> <span class="search_num">100</span></p>
                @endif
            </div>
            <br>
    		@if(isset($templatedata))
				@if(count($templatedata)!=0)
					@foreach ($templatedata as $data)
      					<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      						@if($data['pd_new'] == 1)
      							<form action="/template-modify" class="col-md-12 col-sm-12 col-xs-12 p_l_r_dis ui-ribbon-container" method="get">
      							<div class="ui-ribbon-wrapper">
					                <div class="ui-ribbon">
					                    New
					                </div>
					            </div>
      						@else
								<form action="/template-modify" class="col-md-12 col-sm-12 col-xs-12 p_l_r_dis" method="get">
      						@endif
      							{!! csrf_field() !!}
								<input type="hidden" name="pd_id" value="{{ $data['pd_id'] }}">
				    			<div class="thumbnail">
				      				<div class="image view view-first">
				        				<img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image">
				        				<div class="mask no-caption">
				          					<div class="tools tools-bottom">
							                    <a href="#" class="btn_submit"><i class="fa fa-pencil"></i></a>
				          					</div>
				        				</div>
				      				</div>
				      				<div class="caption">
				        				<p><strong>{{ $data['pd_num'] }}</strong></p>
				        				@if($data['pd_live'] == 1 && $data['pd_live_url'] != '')
				        					<a class="live_url" href="{{config('global.webbbin_front')}}{{$data['pd_live_url']}}" target="_blank">Demo</a>
				        				@endif
				      				</div>
				    			</div>
				    		</form>
  						</div>
  					@endforeach
  				@else
					<p>查無相符的RWD網版資料</p>
  				@endif
  			@else
  				<p>目前暫無RWD網版資料</p>
  			@endif
    	</div>
  	</div>
</div>
@if(isset($templatedata))
	<div class="row paginate_box">
		@if(isset($searchdata['pd_num']))
			{{ $templatedata->appends(['pd_num' => $searchdata['pd_num']]) }}
		@else
			{{ $templatedata }}
		@endif
	</div>
@endif
@endsection
