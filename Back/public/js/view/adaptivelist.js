$(function(){

$('.btn_submit').on('click',function(){
    $(this).parents('form').submit();
})


$('.search_num').on('click',function(){
	var num = $(this).text();
	$('input[name=search_num]').val(num);
	$('.top_search form').submit();
})

$('.close-btn').on('click',function(){
	$('#searchWrap input[name=pd_num]').val('');
	$('#searchWrap').submit();
})

// var COOKIE_NAME = 'username';
//  if( $.cookie(COOKIE_NAME) ){
//    $("#username").val( $.cookie(COOKIE_NAME) );
//  }
//  $("#check").click(function(){
//    if(this.checked){
//      $.cookie(COOKIE_NAME, $("#username").val() , { path: '/', expires: 10 });
//      var date = new Date();
//      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000)); //一天後的這個時候過期
//      $.cookie(COOKIE_NAME, $("#username").val(), { path: '/', expires: date });
//    }else{
//      $.cookie(COOKIE_NAME, null, { path: '/' }); //刪除cookie
//    }
//  });

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