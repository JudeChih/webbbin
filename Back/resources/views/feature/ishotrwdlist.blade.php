@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/ishotlist.js"></script>
@endsection
@section("content_body")
<div class="page-title">
  	<div class="title_left">
    	<h1>熱門版型RWD版型列表</h1>
  	</div>
  	<div class="title_right">
  		@if(!empty(Session::get('admin')))
            @if(Session::get('admin') == 1)
			<div class="radio issystem">
				<label>
	  				<input type="radio" class="flat" name="ishot" style="display:none;" data-value="1"><span class="m_l">自動</span>
				</label>
				<label>
	  				<input type="radio" class="flat" name="ishot" style="display:none;" data-value="2"><span class="m_l">手動</span>
				</label>
				<button type="button" class="btn btn-success btn_save"><i class="fa fa-gear"></i> 設置</button>
			</div>
			@endif
		@endif
		@if(isset($systemdata))
			<form class="system_form" action="/ishot-rwd-modify" method="post" accept-charset="utf-8" style="display:none;">
	            {!! csrf_field() !!}
	            <input type="hidden" name="sp_id" value="{{ $systemdata['sp_id'] }}">
	            <input type="hidden" name="sp_parametervalue" value="{{ $systemdata['sp_parametervalue'] }}">
	        </form>
        @endif
  	</div>
</div>
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ishotlist_wrap">
    	<div class="x_panel">
            @if($systemdata['sp_parametervalue'] == 2)
	            {{-- <div class="x_title">
	                <h3 style="float: left;">熱門排行推薦</h3>
	                <ul class="nav navbar-right panel_toolbox">
	                    <li><a class="btn btn-default" href="/ishot-rwd-top10"><i class="fa fa-plus"></i>編輯</a>
	                    </li>
	                </ul>
	                <div class="clearfix"></div>
	            </div>
	            <br>
				<div class="x_content">
					@if(isset($hotdata))
						@if(count($hotdata)!=0)
							@foreach ($hotdata as $data)
								@if($data['pd_hot_top'] == 1)
			      					<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			      						<form action="/ishot-delete" class="col-md-12 col-sm-12 col-xs-12 p_l_r_dis" method="post">
			      							{!! csrf_field() !!}
											<input type="hidden" name="pd_id" value="{{ $data['pd_id'] }}">
											<input type="hidden" name="pd_rwd" value="{{ $data['pd_rwd'] }}">
							    			<div class="thumbnail">
							      				<div class="image view view-first">
							        				<img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image">
							        				<div class="mask no-caption">
							          					<div class="tools tools-bottom">
										                    <a href="#" class="btn_delete"><i class="fa fa-remove"></i></a>
							          					</div>
							        				</div>
							      				</div>
							      				<div class="caption">
							        				<p><strong>{{ $data['pd_num'] }}</strong></p>
							      				</div>
							    			</div>
							    		</form>
			  						</div>
		  						@endif
		  					@endforeach
		  				@else
							<p>查無相符的版型紀錄資料</p>
		  				@endif
		  			@else
		  				<p>目前暫無版型紀錄資料</p>
		  			@endif
            	</div> --}}
            @endif
            @if($systemdata['sp_parametervalue'] == 1)
            	<div class="x_content">
	                <table class="table table-striped">
	                  	<thead>
		                    <tr>
			                    <th>No</th>
			                    <th>網版編號</th>
			                    <th>圖示</th>
			                    <th>選擇次數</th>
		                    </tr>
	                  	</thead>
	                  	<tbody>
	                  		@if(isset($hotdata))
								@if(count($hotdata)!=0)
									@foreach ($hotdata as $key => $data)
				                    	<tr>
				                      		<th class="col-md-2" scope="row">{{$key+1}}</th>
				                      		<td class="col-md-5">{{ $data['pd_num'] }}</td>
				                      		<td class="col-md-3"><img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image"></td>
				                      		<td class="col-md-2">{{ $data['count'] }}</td>
				                    	</tr>
				                    @endforeach
				                @else
									<p>目前暫無熱門排行的資料</p>
				                @endif
				            @else
								<p>目前暫無熱門排行的資料</p>
				            @endif
	                  	</tbody>
	                </table>
	            </div>
            @elseif($systemdata['sp_parametervalue'] == 2)
                <div class="x_title">
					<h3 style="float: left;">熱門排行列表</h3>
	                <ul class="nav navbar-right panel_toolbox">
	                    <li><a class="btn btn-default" href="/ishot-create?template=rwd"><i class="fa fa-plus"></i> 新增</a>
	                    </li>
	                </ul>
	                <div class="clearfix"></div>
            	</div>
	            <br>
				<div class="x_content">
					@if(isset($hotdata))
						@if(count($hotdata)!=0)
							@foreach ($hotdata as $data)
								@if($data['pd_hot_top'] == 0)
			      					<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			      						<form action="/ishot-delete" class="col-md-12 col-sm-12 col-xs-12 p_l_r_dis" method="post">
			      							{!! csrf_field() !!}
											<input type="hidden" name="pd_id" value="{{ $data['pd_id'] }}">
											<input type="hidden" name="pd_rwd" value="{{ $data['pd_rwd'] }}">
							    			<div class="thumbnail">
							      				<div class="image view view-first">
							        				<img style="width: 100%; display: block;" src="{{ $data['pd_view_img'] }}" alt="image">
							        				<div class="mask no-caption">
							          					<div class="tools tools-bottom">
										                    <a href="#" class="btn_delete"><i class="fa fa-remove"></i></a>
							          					</div>
							        				</div>
							      				</div>
							      				<div class="caption">
							        				<p><strong>{{ $data['pd_num'] }}</strong></p>
							      				</div>
							    			</div>
							    		</form>
			  						</div>
		  						@endif
		  					@endforeach
		  				@else
							<p>查無相符的版型紀錄資料</p>
		  				@endif
		  			@else
		  				<p>目前暫無版型紀錄資料</p>
		  			@endif
            	</div>
            @endif
    	</div>
  	</div>
</div>
@if($systemdata['sp_parametervalue'] == 1)
	<div class="row paginate_box">
		{{ $hotdata }}
	</div>
@endif
@endsection
