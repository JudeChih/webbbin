$(function(){

// $('.title_right .radio').find('')

$('.issystem .flat').each(function(){
    if($(this).data('value') == $('input[name=sp_parametervalue]').val()){
        $(this).iCheck('check');
    }
})

// 設置按鈕
$('.issystem .btn_save').on('click',function(){
	var boolean = false;
	$('.issystem .flat').each(function(){
		if($(this).parent('div').hasClass('checked')){
	        $('input[name=sp_parametervalue').val($(this).data('value'));
	        boolean = true;
	    }
	});
	if(boolean){
		$('.system_form').submit();
	}
})

// 刪除按鈕
$('.btn_delete').on('click',function(){
	var form = $(this).parents('form');
	$('.prompt_box_admin h2').text('確定要將該版型移除熱門版型？');
    $('.prompt_body_admin .btn_yes').on('click',function(){
        $('.prompt_body_admin').fadeOut(400);
        form.submit();
    })
    $('.prompt_body_admin').fadeIn(400);
})





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