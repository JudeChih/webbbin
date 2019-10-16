$(function(){

$('.btn_submit').on('click',function(){
    $(this).parents('form').submit();
})








$('.prompt_body_admin .btn_yes').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
    window.location="/adaptive-list"+document.location.search;
})

$('.prompt_body_admin .btn_no').on('click',function(){
	$('.prompt_body_admin').fadeOut(400);
    window.location="/adaptive-list"+document.location.search;
})

$('.prompt_body .btn_yes').on('click',function(){
	$('.prompt_body').fadeOut(400);
	$('.prompt_body').remove();
})




});