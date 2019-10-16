$(function(){


// 監聽選擇熱門版型
$('.top10_select').change(function(){
	if($('.top10_data').length == 0){
		$('.top10_none').remove();
	}
	if($('.top10_data').length < 10){
		var id = $(this).find('option:selected').val();
		var num = $(this).find('option:selected').data('num');
		var string = '<div class="input-group">'+
					 	'<input class="top10_data form-control" data-id="'+id+'" value="'+num+'" readonly>'+
					 	'<span class="input-group-btn">'+
                        	'<button class="btn btn-danger btn_remove_top10" type="button"><i class="fa fa-remove" style="font-size: 20px;"></i></button>'+
                     	'</span>'+
                     '</div>';
		$('.top10_block').append(string);
		$('.btn_remove_top10').last().on('click',function(){
			$(this).parents('.input-group').remove();
			if($('.top10_data').length == 0){
				var string = '<input class="top10_none form-control" value="請選擇任一熱門版型" readonly>';
				$('.top10_block').append(string);
			}
		})
		}else{
		$('.prompt_box_admin h2').text('只能新增10個熱門版型推薦');
		$('.prompt_body_admin .btn_yes').on('click',function(){
		    $('.prompt_body_admin').fadeOut(400);
		    $('.delete_form').submit();
		})
		$('.prompt_body_admin').fadeIn(400);
	}
})

// 送出按鈕
$('.btn_save').on('click',function(){
	var boolean = true;
	var pd_id = [];
	$('.top10_data').each(function(){
		pd_id.push($(this).data('id'));
	})

	if(pd_id.length > 0){
		for(var i = 0 ; i < pd_id.length ; i++){
			var g = 0;
			for(var j = 0 ; j < pd_id.length ; j++){
				if(pd_id[j] == pd_id[i]){
					g = g+1;
				}
				if(g == 2){
					boolean = false;
					$('.prompt_box_admin h2').text('不能選擇重覆的版型');
					$('.prompt_body_admin .btn_yes').on('click',function(){
					    $('.prompt_body_admin').fadeOut(400);
					    $('.delete_form').submit();
					})
					$('.prompt_body_admin').fadeIn(400);
				}
			}
		}
	}

	if(boolean){
		$('input[name=pd_id]').val(pd_id);
		$(this).parents('form').submit();
	}
})

// 返回按鈕
$('.btn_back').on('click',function(){
	window.history.back();
})

// 刪除熱門版型推薦按鈕
$('.btn_remove_top10').on('click',function(){
	$(this).parents('.input-group').remove();
	if($('.top10_data').length == 0){
		var string = '<input class="top10_none form-control" value="請選擇任一熱門版型" readonly>';
		$('.top10_block').append(string);
	}
})

// 新增熱門版型推薦按鈕
$('.btn_add_top10').on('click',function(){
	var template = $('.input-group').html();
	console.log(template);
	var len = template.length;
	var num = $('.image_block .input-group').length;
    var string =    '<div class="input-group">'+
                        template +
                    '</div>';
    $('.top10_block').append(string);
    $('.btn_remove_img').on('click',function(){
        $(this).parents('.input-group').remove();
        resetIdName();
        resetFileManager();
    })
    resetIdName();
    resetFileManager();
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