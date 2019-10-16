$(function(){

//// 初始化檔案總管
$('.pd_live_url').filemanager('file');

// 送出按鈕
$('.btn_save').on('click',function(){
    var boolean = true;
    if($('input[name=pd_live_url]').val() == ''){
        boolean = false;
        $('.isviewimg .check_unit').tooltip('show');
    }

    if(boolean){
        $(this).parents('form').submit();
    }
})


// 重新賦予檔案總管的相關設定
resetFileManager = function(){
    $('.istemplateimg .input-group').find('.btn_upload_img').each(function(){
        $(this).data('input','image_'+$(this).parents('.input-group').index());
        $(this).data('preview','holder');
        $(this).filemanager('image');
    })
};

// 關閉提示框的按鈕
$('.prompt_body_admin .btn_yes').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
})

$('.prompt_body_admin .btn_no').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
})

$('.prompt_body .btn_yes').on('click',function(){
	$('.prompt_body').fadeOut(400);
	$('.prompt_body').remove();
})




});