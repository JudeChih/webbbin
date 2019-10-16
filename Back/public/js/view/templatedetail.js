$(function(){
$('html').addClass('template_detail');
$("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: "yy-mm-dd"
});

if($('input[name=pd_live]').val() == 0){
    $('.hide_or_show').animate({'height':0},500);
}


$('.islive .live_btn').on('click',function(){
    if($(this).data('value') == 1){
        $('.hide_or_show').animate({'height':$('.table-copy-btn').outerHeight()},500);
    }else{
        $('.hide_or_show').animate({'height':0},500);
    }
})

// 頁面初始化需要針對傳入的值調整相對應的顯示
$('.islayout option').each(function(){
    if($(this).val() == $('input[name=pd_layout]').val()){
        $(this).prop('selected',true);
    }
})
$('.isstyle option').each(function(){
    if($(this).val() == $('input[name=pd_style]').val()){
        $(this).prop('selected',true);
    }
})
var color = JSON.parse($('input[name=pd_colors]').val());
for(var i = 0 ; i < color.length ; i++){
    $('.color[data-value='+color[i]+']').addClass('color-active')
}
$('#datepicker').change(function(){
    $('input[name=pd_date]').val($(this).val())
})
$('.isshow').find('button[data-value='+$('input[name=pd_show]').val()+']').addClass('table-active');
$('.isnew').find('button[data-value='+$('input[name=pd_new]').val()+']').addClass('table-active');
$('.ishot').find('button[data-value='+$('input[name=pd_hot]').val()+']').addClass('table-active');
$('.islive').find('button[data-value='+$('input[name=pd_live]').val()+']').addClass('table-active');



// 各欄位監聽
$('.isshow button').on('click',function(){
    $('input[name=pd_show]').val($(this).data('value'));
})
$('.isnew button').on('click',function(){
    $('input[name=pd_new]').val($(this).data('value'));
})
$('.ishot button').on('click',function(){
    $('input[name=pd_hot]').val($(this).data('value'));
})
$('.islive .js-table-btn > button').on('click',function(){
    $('input[name=pd_live]').val($(this).data('value'));
})
$('.islayout select').change(function(){
    $('input[name=pd_layout]').val($(this).find('option:selected').val());
})
$('.isstyle select').change(function(){
    $('input[name=pd_style]').val($(this).find('option:selected').val());
})

//// 初始化檔案總管
$('.pd_banner_img').filemanager('image');
$('.pd_view_img').filemanager('image');
$('.istemplateimg').find('.btn_upload_img').each(function(){
    $(this).filemanager('image');
})
$('.ismodelimg').find('.btn_upload_img').each(function(){
    $(this).filemanager('image');
})

// 送出按鈕
$('.btn_save').on('click',function(){
    var boolean = true;
    if($('input[name=pd_date]').val() == '' || $('input[name=pd_date]').val() == '0000-00-00'){
        boolean = false;
        $('.isdate .check_unit').tooltip('show');
    }
    if($('input[name=pd_num]').val() == ''){
        boolean = false;
        $('.isnum .check_unit').tooltip('show');
    }
    var color_array = [];
    var len = 0;
    var real_len = $('.iscolor .color-active').length;
    $('.iscolor .color-active').each(function(){
        len += 1;
        color_array.push($(this).data('value'));
        if(len == real_len){
            if(color_array.length == 0){
                boolean = false;
                $('.iscolor .check_unit').tooltip('show');
            }else{
                $('input[name=pd_colors]').val(JSON.stringify(color_array));
            }
        }
    })
    if($('input[name=pd_live]').val() == 1){
        if($('input[name=pd_live_url]').val() == ''){
            boolean = false;
            $('input[name=pd_live_url]').tooltip('show');
        }
    }else{
        $('input[name=pd_live_url]').val('');
    }
    if($('input[name=pd_banner_img]').val() == ''){
        boolean = false;
        $('.isviewimg .check_unit input').tooltip('show');
    }
    if($('input[name=pd_view_img]').val() == ''){
        boolean = false;
        $('.isbannerimg .check_unit input').tooltip('show');
    }
    if(!$('.istemplateimg .js-img-wrap').length == 0){
        var template_array = [];
        var len = 0;
        var real_len = $('.istemplateimg .js-img-wrap').length;
        $('.istemplateimg .js-img-wrap').each(function(){
            len += 1;
            if($(this).find('.url_readonly').val() != ''){
                template_array.push($(this).find('.url_readonly').val());
            }else{
                $(this).remove();
            }
            if(len == real_len){
                if(template_array.length != 0){
                    $('input[name=pd_template_img]').val(JSON.stringify(template_array));
                }
            }
        })
    }
    if(!$('.ismodelimg .js-model-wrap').length == 0){
        var model_array = [];
        var len = 0;
        var real_len = $('.ismodelimg .js-model-wrap').length;
        $('.ismodelimg .js-model-wrap').each(function(){
            len += 1;
            if($(this).find('.url_readonly').val() != ''){
                model_array.push($(this).find('.url_readonly').val());
            }else{
                $(this).remove();
            }
            if(len == real_len){
                if(model_array.length != 0){
                    $('input[name=pd_model_img]').val(JSON.stringify(model_array));
                }
            }
        })
    }

    if(boolean){
        $('.form_template_detail').submit();
    }
})

// 刪除按鈕
$('.btn_delete').on('click',function(){
    $('.prompt_box_admin h2').text('確定要刪除該網版？');
    $('.prompt_body_admin .btn_yes').on('click',function(){
        $('.prompt_body_admin').fadeOut(400);
        $('.delete_form').submit();
    })
    $('.prompt_body_admin').fadeIn(400);
})

// 新增圖片按鈕
$('.btn_add_img').on('click',function(){
    var string =    '<div class="js-img-wrap">'+
                        '<p class="table-template-edit-add clearfix">'+
                            '<input type="text" class="url_readonly" id="">'+
                            '<button type="button" class="btn btn-upload btn_upload_img" data-input="" data-preview="holder">檔案上傳</button>'+
                            '<button type="button" class="btn btn-del-circle js-del-input_i btn_remove_img"><span class="fa"></span></button>'+
                        '</p>'+
                    '</div>';
    $('.image_block').append(string);
    $('.btn_remove_img').on('click',function(){
        $(this).parents('.js-img-wrap').remove();
        resetIdName();
        resetFileManager();
    })
    resetIdName();
    resetFileManager();
})

// 複製路徑按鈕
$('.btn_copy_url').on('click',function(){

    if($('input[id=pd_live_url]').val() != '' && $('input[name=pd_num]').val() != ''){
        var url = $('input[id=pd_live_url]').val();
        url.substr(0, 1)
        if(url.substr(0, 1) != '/'){
            url = '/'+url;
        }
        $('#pd_live_demo_url').val(string.url.webbbin_front + url);
        $('#pd_live_demo_url').CopyToClipboard();
    }else if($('input[name=pd_num]').val() != ''){
        $('#pd_live_demo_url').val(string.url.webbbin_front + string.folder.live_demo + $('input[name=pd_num]').val());
        $('#pd_live_demo_url').CopyToClipboard();
    }else{
        // $('.prompt_box_admin h2').text('請先填寫網版名稱及線上Demo路徑！');
        // $('.isnum .check_unit').tooltip('show');
        // $('.isurl .check_unit').tooltip('show');
        // $('.prompt_body_admin').fadeIn(400);
        //alert 確定是否更動的警示視窗
        $(".mask-bg").toggleClass("active");
        $(".alert-wrap").toggleClass("active");
        $('.alert-wrap .text_ask').text('請先填寫');
        $('.alert-wrap .text_active').text('網版名稱及線上Demo路徑');
        $('.alert-wrap .text_type').text('');
        $('.alert-wrap .btn_edit').on('click',function(){
            $('.mask-bg').removeClass("active");
            $('.alert-wrap').removeClass("active");
        });
    }
})

// 產生路徑按鈕
$('.btn_add_url').on('click',function(){
    if($('input[name=pd_num]').val() != ''){
        $('input[name=pd_live_url]').val(string.folder.live_demo + $('input[name=pd_num]').val())
    }else{
        $('.isnum .check_unit').tooltip('show');
    }
})

// 新增圖片按鈕
$('.btn_add_img_model').on('click',function(){
    var string =    '<div class="js-model-wrap">'+
                        '<p class="table-template-edit-add clearfix">'+
                            '<input type="text" class="url_readonly" id="">'+
                            '<button type="button" class="btn btn-upload btn_upload_img" data-input="" data-preview="holder" type="button">檔案上傳</button>'+
                            '<button type="button" class="btn btn-del-circle js-del-input_m btn_remove_img_model"><span class="fa"></span></button>'+
                        '</p>'+
                    '</div>';
    $('.image_model_block').append(string);
    $('.btn_remove_img_model').on('click',function(){
        $(this).parents('.js-model-wrap').remove();
        resetModelIdName();
        resetModelFileManager();
    })
    resetModelIdName();
    resetModelFileManager();
})

// 刪除圖片按鈕
$('.btn_remove_img').on('click',function(){
    $(this).parents('.js-img-wrap').remove();
    resetIdName();
    resetFileManager();
})
$('.btn_remove_img_model').on('click',function(){
    $(this).parents('.js-model-wrap').remove();
    resetModelIdName();
    resetModelFileManager();
})

// 重新賦予檔案總管的相關設定
resetFileManager = function(){
    $('.istemplateimg .js-img-wrap').find('.btn_upload_img').each(function(){
        $(this).data('input','image_'+$(this).parents('.js-img-wrap').index());
        $(this).data('preview','holder');
        $(this).filemanager('image');
    })
};
resetModelFileManager = function(){
    $('.ismodelimg .js-model-wrap').find('.btn_upload_img').each(function(){
        $(this).data('input','image_model_'+$(this).parents('.js-model-wrap').index());
        $(this).data('preview','holder');
        $(this).filemanager('image');
    })
};

// 重新編排圖片的id跟name的命名
resetIdName = function(){
    var len = $('.image_block .js-img-wrap').length;
    for(var i = 0 ; i < len ; i++){
        var aa = $('.image_block .js-img-wrap').eq(i);
        aa.find('.url_readonly').prop({'id':'image_'+i});
    }
}
resetModelIdName = function(){
    var len = $('.image_model_block .js-model-wrap').length;
    for(var i = 0 ; i < len ; i++){
        var aa = $('.image_model_block .js-model-wrap').eq(i);
        aa.find('.url_readonly').prop({'id':'image_model_'+i});
    }
}

});