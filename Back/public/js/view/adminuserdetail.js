$(function(){
$('.js-table-btn button').each(function(){
    if($(this).data('value') == $('input[name=ud_status').val()){
        $(this).addClass('table-active');
        $(this).siblings().removeClass('table-active');
    }
})

$('input[name=isadmin]').change(function(){
    $(this).prop('checked',function(){
        $('input[name=ud_admin]').val($(this).val());
    })
})

// 送出按鈕
$('.btn_save').on('click',function(){
	var boolean = true;
	$('.isstatus .flat').each(function(){
        if($(this).parent('div').hasClass('checked')){
            $('input[name=ud_status]').val($(this).data('value'));
        }
    })
    $('.isadmin .flat').each(function(){
        if($(this).parent('div').hasClass('checked')){
            $('input[name=ud_admin]').val($(this).data('value'));
        }
    })

	if($.trim($('input[name=ud_name]').val()).length === 0){
		$('.isname .check_unit').tooltip('show');
		boolean = false;
	}

	if(boolean){
        $(this).parents('form').submit();
    }
})

})