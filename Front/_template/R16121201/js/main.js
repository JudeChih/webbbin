//REMOVE INLINE-BLOCK NODE
$('.removeTextNodes').contents().filter(function() {
	return this.nodeType === 3;
}).remove();


//HEADER NAV
$(".header-nav-btn").click(function(){
    $(this).toggleClass("active");
    $("#navMask").toggleClass("active");
    $(".mainnav").slideToggle();
    $(".header-bg").toggleClass("active");
    $("#loginMask").removeClass("login-active");
});
$(".header-login-btn").click(function(){
    $("#loginMask").toggleClass("login-active");
    $(".login-wrap").toggleClass("active");
    $("#navMask").removeClass("active");
    $(".mainnav").slideUp();
    $(".header-bg").removeClass("active");
});
$(".login-close").click(function(){
	$(".login-wrap").removeClass("active");
	$("#loginMask").removeClass("login-active");
    $(".header-bg").removeClass("active");
});
$(".mask-bg").click(function(){
	$(this).removeClass("active");
	$(this).removeClass("login-active");
	$(".header-nav-btn").removeClass("active");
	$(".login-wrap").removeClass("active");
	$(".mainnav").slideUp();
    $(".header-bg").removeClass("active");
});
$(".subClick").on("click", function(e){
    if($(this).parent().has(".subList")) {
        e.preventDefault();
    }
    if(!$(this).hasClass("active")) {
        $(".subList").slideUp();
        $(".subClick").removeClass("active");
        $(this).next(".subList").slideDown();
        $(this).addClass("active");
    }
    else if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next(".subList").slideUp();
    }
});
$(".header-login-btn").click(function(){
    $("body").addClass('overflow');
});
$(".login-close").click(function(){
    $("body").removeClass('overflow');
});

var w = $(window).width();
if(w >= 768){
    $("#bbinAmount").hover(function(){
        $("#Member-Sub").stop().slideToggle(500);
    });
    $(".oblance").hover(function(){
        $("#Member-Sub").stop().slideToggle(500);
    });
}
var w = $(window).width();
if(w < 768){
    $("#bbinAmount").click(function(){
        $("#Member-Sub").stop().slideToggle(500);
    });
}


//餘額展開
$("#bbinAmount").click(function(){
    $(".login-details").slideToggle();
});


//ABOUT CATEGORY
$(".about-link-btn").click(function(){
    $(".about-link ul").slideToggle();
});


//語系HOVER
$(".header-lang").click(function(){
    $(".lang-wrap").addClass("active");
});
$(".lang-close").click(function(){
    $(".lang-wrap").removeClass("active");
});
$(".lang-button ul li").mouseover(function(){
    $(".lang-lang").removeClass("active");
});
$(".lang-button ul li").mouseout(function(){
    $(".lang-lang").addClass("active");
});
