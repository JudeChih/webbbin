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

$('.istemplate').find('option').each(function(){
	if($(this).val() == $('input[name=pd_id]').val()){
		$(this).prop('selected',true);
	}
})

// 監聽所有欄位的change動態更新input的值
// f.name // f.type // f.size
$('.isviewimg input').change(function(evt) {
    var files = evt.target.files;
    var f = files[0];
    $(this).parent().find('.url_readonly').val(f.name);
    $('input[name=mr_view_img]').remove();
});

// 刪除按鈕
$('.btn_delete').on('click',function(){
	$('.prompt_box_admin h2').text('確定要刪除該版型紀錄？');
    $('.prompt_body_admin .btn_yes').on('click',function(){
        $('.prompt_body_admin').fadeOut(400);
        $('.delete_form').submit();
    })
    $('.prompt_body_admin').fadeIn(400);
})

// 送出按鈕
$('.btn_save').on('click',function(){
	var boolean = true;
	$('.istemplate').find('option').each(function(){
		if($(this).prop('selected')){
			$('input[name=pd_id]').val($(this).val());
		}
	})
	if($('input[name=mr_date]').val() == ''){
		boolean = false;
		$('.isdate .check_unit').tooltip('show');
	}
	if($('input[name=mr_name]').val() == ''){
		boolean = false;
		$('.isname .check_unit').tooltip('show');
	}
	if($('input[name=mr_designer]').val() == ''){
		boolean = false;
		$('.isdesigner .check_unit').tooltip('show');
	}
	if($('input[name=mr_tpl]').val() == ''){
		boolean = false;
		$('.istpl .check_unit').tooltip('show');
	}
	if($('input[name=mr_filepath]').val() == ''){
		boolean = false;
		$('.isfilepath .check_unit').tooltip('show');
	}
	if(!$('.isviewimg').find('input[type=file]').val() && $('input[name=mr_view_img]').val() == ''){
        boolean = false;
        $('.isviewimg .check_unit').tooltip('show');
    }
	if(boolean){
		$(this).parents('form').submit();
	}

})





$('.prompt_body .btn_yes').on('click',function(){
	$('.prompt_body').fadeOut(400);
	$('.prompt_body').remove();
})




});