$(function(){

$('.btn_submit').on('click',function(){
    $(this).parents('form').submit();
})

$('.search_num').on('click',function(){
	var num = $(this).text();
	$('input[name=search_num]').val(num);
	$('.top_search form').submit();
})






$('.prompt_body_admin .btn_yes').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
    window.location="/rwd-list"+document.location.search;
})

$('.prompt_body_admin .btn_no').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
    window.location="/rwd-list"+document.location.search;
})

$('.prompt_body .btn_yes').on('click',function(){
	$('.prompt_body').fadeOut(400);
	$('.prompt_body').remove();
})




});