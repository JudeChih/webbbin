@extends('layouts.layout')

@section("put_script")
<!-- 崁入各頁面的JS -->

@endsection

@section("content_body")
<!--top-->
<div class="first-wrap">
    <div class="first-item clearfix">
        <div class="title">網版總數</div>
        <div class="first-temp-num clearfix">
            <p>{{$searchdata['adaptive_count']}}</p>
        </div>
        <div class="first-temp-wrap">
            <ul>
                @foreach($newestdata as $data)
                    <li><span></span><a href="/template-modify?pd_id={{$data['pd_id']}}" title="{{$data['pd_num']}}">{{$data['pd_num']}}</a></li>
                @endforeach
            </ul>
        </div>
    </div>
    <div class="first-item">
        <div class="title">網版佈局</div>
        <div class="first-temp-wrap">
            <ul>
                <li><span class="chart1_bg1"></span>直向大小：{{$searchdata['layout_01_count']}}</li>
                <li><span class="chart1_bg2"></span>橫向大小：{{$searchdata['layout_02_count']}}</li>
                <li><span class="chart1_bg3"></span>多面切割：{{$searchdata['layout_03_count']}}</li>
                <li><span class="chart1_bg4"></span>對角線：{{$searchdata['layout_04_count']}}</li>
                <li><span class="chart1_bg5"></span>無規則：{{$searchdata['layout_05_count']}}</li>
            </ul>
        </div>
        <!--圓餅圖-->
        <canvas id="chart1"></canvas>
    </div>
    <div class="first-item">
        <div class="title">網版風格</div>
        <div class="first-temp-wrap">
            <ul>
                <li><span class="chart2_bg1"></span>前衛時尚：{{$searchdata['style_01_count']}}</li>
                <li><span class="chart2_bg2"></span>復古典雅：{{$searchdata['style_02_count']}}</li>
                <li><span class="chart2_bg3"></span>精緻華麗：{{$searchdata['style_03_count']}}</li>
                <li><span class="chart2_bg4"></span>簡約大氣：{{$searchdata['style_04_count']}}</li>
            </ul>
        </div>
        <!--圓餅圖-->
        <canvas id="chart2"></canvas>
    </div>
    <div class="first-item">
        <div class="title">網版色系</div>
        <div class="first-temp-wrap">
            <ul>
                <li><span class="white"></span>white：{{$searchdata['color_white_count']}}</li>
                <li><span class="grey"></span>grey：{{$searchdata['color_grey_count']}}</li>
                <li><span class="black"></span>black：{{$searchdata['color_black_count']}}</li>
                <li><span class="blue"></span>blue：{{$searchdata['color_blue_count']}}</li>
                <li><span class="green"></span>green：{{$searchdata['color_green_count']}}</li>
                <li><span class="yellow"></span>yellow：{{$searchdata['color_yellow_count']}}</li>
                <li><span class="brown"></span>brown：{{$searchdata['color_brown_count']}}</li>
                <li><span class="orange"></span>orange：{{$searchdata['color_orange_count']}}</li>
                <li><span class="red"></span>red：{{$searchdata['color_red_count']}}</li>
                <li><span class="pink"></span>pink：{{$searchdata['color_pink_count']}}</li>
                <li><span class="purple"></span>purple：{{$searchdata['color_purple_count']}}</li>
            </ul>
        </div>
        <!--圓餅圖-->
        <canvas id="chart3"></canvas>
    </div>
</div>
<!--bottom-->
<div class="content-body first-content clearfix ">
    <div class="title">最新網版列表</div>
    <form action="/index" method="get" class="form_orderby">
        <input type="hidden" name="orderBy" value="{{$searchdata['orderBy']}}">
    </form>
    <select name="orderList" id="orderList">
        @if($searchdata['orderBy'] == 'pd_date')
            <option value="pd_date" selected=selected>上架日期排行</option>
            <option value="pd_hot">熱門項目</option>
        @else
            <option value="pd_date">上架日期排行</option>
            <option value="pd_hot" selected=selected>熱門項目</option>
        @endif
    </select>
    <!--template 列表 -->
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
            @foreach ($adaptivedata as $data)
                <div class="template-item">
                    <div class="temp-num">
                        {{$data['pd_id']}}
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
        <a href="/adaptive-list" title="檢視更多網版" class="first-more-btn">檢視更多網版</a>
    </div>
</div>
@endsection