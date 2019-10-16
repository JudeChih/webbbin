@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ismodellist.js"></script>
@endsection
@section("content_body")
<div class="page-title">
  	<div class="title_left">
    	<h1>版型紀錄列表</h1>
  	</div>
  	<div class="title_right">
    	<div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
    		<form action="/ismodel-list" method="get" accept-charset="utf-8">
	      		<div class="input-group">
	      			@if(isset($searchdata['mr_name']))
	        			<input type="text" name="mr_name" class="form-control" value="{{ $searchdata['mr_name'] }}" placeholder="Search for...">
	        		@else
						<input type="text" name="mr_name" class="form-control" placeholder="Search for...">
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
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ismodellist_wrap">
    	<div class="x_panel">
    		<div class="x_title">
                {{-- <h2>功能</h2> --}}
                <ul class="nav navbar-right panel_toolbox">
                    <li><a class="btn btn-default" href="/ismodel-create"><i class="fa fa-plus"></i>新增</a>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <br>
    		@if(isset($modeldata))
				@if(count($modeldata)!=0)
					@foreach ($modeldata as $data)
      					<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      						<form action="/ismodel-delete" class="col-md-12 col-sm-12 col-xs-12 p_l_r_dis" method="get">
      							{!! csrf_field() !!}
								<input type="hidden" name="mr_id" value="{{ $data['mr_id'] }}">
								<input type="hidden" name="pd_id" value="{{ $data['pd_id'] }}">
				    			<div class="thumbnail">
				      				<div class="image view view-first">
				        				<img style="width: 100%; display: block;" src="{{ $data['mr_view_img'] }}" alt="image">
				        				<div class="mask no-caption">
				          					<div class="tools tools-bottom">
							                    <a href="#" class="btn_submit"><i class="fa fa-pencil"></i></a>
				          					</div>
				        				</div>
				      				</div>
				      				<div class="caption">
				        				<p>
				        					<strong>{{ $data['mr_name'] }}</strong>
											@if(!is_null($data['mr_url']))
					        					<a class="mr_url_block" href="{{$data['mr_url']}}" target="_blank">租網連結</a>
					        				@endif
				        				</p>
				        				<p>參考版型：<a href="/template-modify?pd_id={{$data['pd_id']}}">{{ $data['pd_num'] }}</a></p>
				      				</div>
				    			</div>
				    		</form>
  						</div>
  					@endforeach
  				@else
					<p>查無相符的版型紀錄資料</p>
  				@endif
  			@else
  				<p>目前暫無版型紀錄資料</p>
  			@endif
    	</div>
  	</div>
</div>
@if(isset($modeldata))
	<div class="row paginate_box">
		@if(isset($searchdata['mr_name']))
			{{ $modeldata->appends(['mr_name' => $searchdata['mr_name']]) }}
		@else
			{{ $modeldata }}
		@endif
	</div>
@endif

@endsection
