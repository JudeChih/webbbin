$(function(){

// $('#mr_date').datetimepicker({
//     format: 'yyyy-mm-dd',//format: 'yyyy-mm-dd hh:ii:ss',
//     language: 'zh-TW',
//     weekStart: 7,
//     todayBtn: 1,
//     autoclose: 1,
//     todayHighlight: 1,
//     startView: 3,
//     minView: 2,
//     forceParse: 0
// });

// 監聽所有欄位的change動態更新input的值
// f.name // f.type // f.size
$('.isviewimg input').change(function(evt) {
    var files = evt.target.files;
    var f = files[0];
    $(this).parent().find('.url_readonly').val(f.name);
    $('input[name=mr_view_img]').remove();
});

// 返回按鈕
$('.btn_back').on('click',function(){
	window.history.back();
})

// 送出按鈕
$('.btn_save').on('click',function(){
	var boolean = true;
	$('.istemplate').find('option').each(function(){
		if($(this).prop('selected')){
			$('input[name=pd_id]').val($(this).val());
		}
	})
	$('.iswebsite').find('option').each(function(){
		if($(this).prop('selected')){
			$('input[name=mr_name]').val($(this).val());
		}
	})

	if(boolean){
		$(this).parents('form').submit();
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