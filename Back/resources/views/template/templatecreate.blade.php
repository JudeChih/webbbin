@extends('layouts/layout')
@section("prompt_box")

@endsection
@section("put_script")
<!-- 崁入各頁面的JS -->
<script type="text/javascript" src="/js/view/templatecreate.js"></script>
@endsection
@section("content_body")

<div class="content-title clearfix">
    新增網版
    <span class="text-nar">create</span>
</div>
<form action="/template-create" class="form_template_create form-horizontal form-label-left" enctype="multipart/form-data" method="post">
    {!! csrf_field() !!}
    <input type="hidden" name="pd_new" value="1">
    <input type="hidden" name="pd_show" value="1">
    <input type="hidden" name="pd_hot" value="0">
    <input type="hidden" name="pd_live" value="0">
    <input type="hidden" name="pd_rwd" value="0">
    <input type="hidden" name="pd_layout" value="1">
    <input type="hidden" name="pd_style" value="1">
    <input type="hidden" name="pd_colors" value="">
    <input type="hidden" name="pd_template_img" value="">
    <input type="hidden" name="pd_model_img" value="">
    <table class="table-template-edit">
        <tr class="temp-title">
            <td colspan="2">基本設定</td>
        </tr>
        <tr class="isnum">
            <td>網版名稱</td>
            <td>
                <input type="text" class="check_unit" name="pd_num" data-toggle="tooltip" title="請輸入網版名稱">
            </td>
        </tr>
        <tr class="isdate">
            <td>上線日期</td>
            <td>
                <label for="" class="fa date-icon"></label><input id="datepicker" type="text" class="date-input check_unit" name="pd_date" data-toggle="tooltip" title="請選擇上線日期">
            </td>
        </tr>
        <tr class="isshow">
            <td>網版 顯示 & 隱藏</td>
            <td class="js-table-btn">
                <button type="button" class="table-enable" data-value="1">顯示</button>
                <button type="button" class="table-disable" data-value="0">隱藏</button>
            </td>
        </tr>
        <tr class="isnew">
            <td>顯示new icon</td>
            <td class="js-table-btn ">
                <button type="button" class="table-enable" data-value="1">顯示</button>
                <button type="button" class="table-disable" data-value="0">隱藏</button>
            </td>
        </tr>
        <tr class="ishot">
            <td>熱門版型</td>
            <td class="js-table-btn">
                <button type="button" class="table-enable" data-value="1">是</button>
                <button type="button" class="table-disable" data-value="0">否</button>
            </td>
        </tr>
        <tr class="temp-title">
            <td colspan="2">風格設定</td>
        </tr>
        <tr class="islayout">
            <td>網版布局</td>
            <td>
                <select name="" id="">
                    <option value="1">直向大小</option>
                    <option value="2">橫向大小</option>
                    <option value="3">多面切割</option>
                    <option value="4">對角線</option>
                    <option value="5">無規則</option>
                </select>
            </td>
        </tr>
        <tr class="isstyle">
            <td>網版風格</td>
            <td>
                <select name="" id="">
                    <option value="1">前衛時尚</option>
                    <option value="2">復古典雅</option>
                    <option value="3">精緻華麗</option>
                    <option value="4">簡約大氣</option>
                </select>
            </td>
        </tr>
        <tr class="iscolor">
            <td>網版色系</td>
            <td class="js-color-pick">
                <p class="fa check_unit" data-toggle="tooltip" title="至少選擇一個色系">
                    <span class="color color-white" data-value="white"></span>
                    <span class="color color-gray" data-value="gray"></span>
                    <span class="color color-black" data-value="black"></span>
                    <span class="color color-blue" data-value="blue"></span>
                    <span class="color color-green" data-value="green"></span>
                    <span class="color color-yellow" data-value="yellow"></span>
                    <span class="color color-coffee" data-value="coffee"></span>
                    <span class="color color-orange" data-value="orange"></span>
                    <span class="color color-red" data-value="red"></span>
                    <span class="color color-pink" data-value="pink"></span>
                    <span class="color color-purple" data-value="purple"></span>
                </p>
            </td>
        </tr>
        <tr class="temp-title">
            <td colspan="2">版面設定</td>
        </tr>
        <tr class="islive">
            <td>網版Demo</td>
            <td class="js-table-btn">
                <button type="button" class="live_btn table-enable" data-value="1">有</button>
                <button type="button" class="live_btn table-disable" data-value="0">無</button>
                <div class="hide_or_show">
                    <div class="table-copy-btn">
                        <input type="hidden" id="pd_live_demo_url" value="">
                        <input type="text" class="check_unit" id="pd_live_url" name="pd_live_url" data-toggle="tooltip" title="請輸入Demo路徑">
                        <button type="button" class="btn btn-path btn_add_url">產生路徑</button>
                        <button type="button" class="btn btn-copy btn_copy_url">
                            <span class="fa"></span>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="isviewimg">
            <td>列表圖上傳</td>
            <td class="check_unit">
                <input type="text" class="url_readonly" id="pd_view_img" name="pd_view_img" data-toggle="tooltip" title="請上傳列表圖">
                <button type="button" class="btn btn-upload pd_view_img" data-input="pd_view_img" data-preview="holder">檔案上傳</button>
            </td>
        </tr>
        <tr class="isbannerimg">
            <td>Banner上傳</td>
            <td class="check_unit">
                <input type="text" class=" url_readonly" id="pd_banner_img" name="pd_banner_img" data-toggle="tooltip" title="請上傳Banner">
                <button type="button" class="btn btn-upload pd_banner_img" data-input="pd_banner_img" data-preview="holder">檔案上傳</button>
            </td>
        </tr>
        <tr class="istemplateimg">
            <td>示意圖上傳</td>
            <td>
                <div class="image_block">
                    <div class="js-img-wrap">
                        <p class="table-template-edit-add clearfix">
                            <input type="text" class=" url_readonly" id="image_0">
                            <button type="button" class="btn btn-upload btn_upload_img" data-input="image_0" data-preview="holder">檔案上傳</button>
                            <button type="button" class="btn btn-del-circle js-del-input_i btn_remove_img">
                                <span class="fa"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <button type="button" class="btn btn-add-item js-add-img btn_add_img">
                    <span class="fa"></span>新增圖片
                </button>
            </td>
        </tr>
        <tr class="ismodelimg">
            <td>Model圖上傳</td>
            <td>
                <div class="image_model_block">
                    <div class="js-model-wrap">
                        <p class="table-template-edit-add clearfix">
                            <input type="text" class=" url_readonly" id="image_model_0">
                            <button type="button" class="btn btn-upload btn_upload_img" data-input="image_model_0" data-preview="holder">檔案上傳</button>
                            <button type="button" class="btn btn-del-circle js-del-input_m btn_remove_img_model">
                                <span class="fa"></span>
                            </button>
                        </p>
                    </div>
                </div>
                <button type="button" class="btn btn-add-item js-add-model btn_add_img_model">
                    <span class="fa"></span>新增圖片
                </button>
            </td>
        </tr>
        <tr class="isnotice">
            <td>注意事項</td>
            <td>
                <textarea class="" name="pd_notices"></textarea>
                <p class="text-warning">＊兩行以上請加入，區隔
                </p>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <button type="button" class="btn btn_save">送出</button>
                <a href="/adaptive-list" class="btn btn-cancel btn_back">返回</a>
            </td>
        </tr>
    </table>
</form>
@endsection