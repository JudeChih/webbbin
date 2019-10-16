//REMOVE INLINE-BLOCK NODE
$('.removeTextNodes').contents().filter(function() {
	return this.nodeType === 3;
}).remove();


//HEADER NAV
$(".mainnav-btn-member").click(function(){
    $(".meminfo-wrap").fadeIn(100);
    $(".login-wrap").fadeIn(100);
});

$(".mainnav-btn-nav").click(function(){
    $(this).toggleClass('active');
    $("#mainBody").toggleClass('nav-mask');
    $(".mainnav-wrap").toggleClass('active');
    $("#mainBody").removeClass('mem-mask');
    $(".meminfo-wrap").removeClass('active');
    $(".login-wrap").removeClass('active');
    $(".mainnav-btn-member").removeClass('active');
});
$(".nav-mask").click(function(){
    $(".mainnav-btn-nav").removeClass('active');
    $(".mainnav-wrap").removeClass('active');
});
$(".login-close").click(function(){
    $(".meminfo-wrap").fadeOut(100);
    $(".login-wrap").fadeOut(100);
});

var w = $(window).width();
if(w > 768){
    $(".mainnav li").hover(function(){
        $(this).children(".subList").stop().slideToggle(300);
    });
}

