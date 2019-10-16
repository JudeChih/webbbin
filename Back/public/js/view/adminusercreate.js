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

    if($.trim($('input[name=ud_account]').val()).length === 0){
		$('.isaccount .check_unit').tooltip('show');
		boolean = false;
	}else{
        if ($('input[name=ud_account]').val().match(/[^a-z^A-Z^0-9]/g)) {
            $('.alert-wrap .btn-cancel').hide();
            $(".mask-bg").toggleClass("active");
            $(".alert-wrap").toggleClass("active");
            $('.alert-wrap .text_ask').text('請填入');
            $('.alert-wrap .text_active').text('英文或數字');
            $('.alert-wrap .text_type').text('組合成的帳號');
            $('.alert-wrap .btn_edit').on('click',function(){
                $('.mask-bg').removeClass("active");
                $('.alert-wrap').removeClass("active");
            })
            boolean = false;
        }
    }

	if($.trim($('input[name=ud_password]').val()).length === 0){
		$('.ispass .check_unit').tooltip('show');
		boolean = false;
	}else{
        if ($('input[name=ud_password]').val().match(/[^a-z^A-Z^0-9]/g)) {
            $('.alert-wrap .btn-cancel').hide();
            $(".mask-bg").toggleClass("active");
            $(".alert-wrap").toggleClass("active");
            $('.alert-wrap .text_ask').text('請填入');
            $('.alert-wrap .text_active').text('英文或數字');
            $('.alert-wrap .text_type').text('組合成的密碼');
            $('.alert-wrap .btn_edit').on('click',function(){
                $('.mask-bg').removeClass("active");
                $('.alert-wrap').removeClass("active");
            })
            boolean = false;
        }
    }

	if($.trim($('input[name=ud_name]').val()).length === 0){
		$('.isname .check_unit').tooltip('show');
		boolean = false;
	}

    if(boolean){
        $(this).parents('form').submit();
    }
})




// 表單送出前的判斷
function checkForm(){
	var isFormValid = true;
	$('.check_unit').each(function(){
		var $this = $(this);
		if($.trim($this.val()).length === 0){
			$this.tooltip('show');
			isFormValid = false;
		}
	})
	return isFormValid;
}

})