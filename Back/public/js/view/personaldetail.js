$(function(){
// 修改、新增、刪除之後在頁面會跳出的小視窗，確認的按鈕
// $('.btn_yes').on('click', function() {
//   $('.prompt_body').fadeOut(400, function() {
//     $('.prompt_body').remove();
//   });
// })


// 送出按鈕
// $('.btn_save').on('click',function(){
// 	var boolean = true;

// 	if($.trim($('input[name=ud_name]').val()).length === 0){
// 		$('.isname').find('.check_unit').tooltip('show');
// 		boolean = false;
// 	}

// 	if($.trim($('input[name=ud_password]').val()).length != 0){
// 		if($.trim($('input[name=ud_new_password]').val()).length === 0){
// 			$('.isnewpass').find('.check_unit').tooltip('show');
// 			boolean = false;
// 		}
// 		if($.trim($('input[name=ud_new_password_confirm]').val()).length === 0){
// 			$('.isnewpassconfirm').find('.check_unit').tooltip('show');
// 			boolean = false;
// 		}
// 		if($.trim($('input[name=ud_new_password]').val()).length != 0 && $.trim($('input[name=ud_new_password_confirm]').val()).length != 0){
// 			if($('input[name=ud_new_password]').val() != $('input[name=ud_new_password_confirm]').val()){
// 				$('.prompt_box_admin h2').text('新密碼與確認密碼不相符！');
// 				$('.prompt_body_admin').fadeIn(400);
// 				boolean = false;
// 			}
// 		}
// 	}

// 	if(boolean){
// 		$(this).parents('form').submit();
// 	}
// })


})