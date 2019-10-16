$(function(){

// 送出按鈕
$('.btn_save').on('click',function(){
	var boolean = true;
	var pd_id_array = [];
	if($('.not_hot.checked').length < 1){
		boolean = false;
		$('.prompt_box_admin h2').text('請至少選擇一筆送出');
	    $('.prompt_body_admin').fadeIn(400);
	}
	$('.not_hot.checked').each(function(){
		pd_id_array.push($(this).data('value'));
	})
	$('input[name=pd_id_array]').val(JSON.stringify(pd_id_array));
	if(boolean){
		$('.hot_form').submit();
	}
})

// 返回按鈕
$('.btn_back').on('click',function(){
	window.history.back();
})


$('.not_hot').on('click',function(){
	if($(this).hasClass('checked')){
		$(this).removeClass('checked');
	}else{
		$(this).addClass('checked');
	}
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