//REMOVE INLINE-BLOCK NODE
$('.removeTextNodes').contents().filter(function() {
	return this.nodeType === 3;
}).remove();


//HEADER NAV
$(".header-btn .btn-nav").click(function(){
    $(this).toggleClass("active");
    $("html, body").addClass("no-scroll");
    $(".mask-bg").toggleClass("active");
    $(".header-nav").toggleClass("active");
});
$(".header-btn .btn-member").click(function(){
    $(this).toggleClass("active");
    $("html, body").addClass("no-scroll");
    $(".mask-bg").toggleClass("active");
    $(".login-wrap").toggleClass("active");
});
$(".header-nav-close").click(function(){
    $("html, body").removeClass("no-scroll");
	$(".header-nav").removeClass("active");
    $(".login-wrap").removeClass("active");
	$(".mask-bg").removeClass("active");
});
$(".mask-bg").click(function(){
	$(this).removeClass("active");
    $("html, body").removeClass("no-scroll");
	$(".header-nav").removeClass("active");
    $(".login-wrap").removeClass("active");
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


//餘額展開
$("#bbinAmount").click(function(){
    $(".logon-details").slideToggle();
});


//ABOUT CATEGORY
$(".about-link-btn").click(function(){
    $(".about-link ul").slideToggle();
});


//語系HOVER
$(".header-lang-btn").click(function(){
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


//GOTOP
$(function(){
    $(".btn-top").click(function(){
        $("html,body").animate({
            scrollTop: 0
        },1000);
    });
});


// form placeholder
$('input[type="text"] , input[type="password"] , textarea').each(function(){
    $(this).focus(function(){
        $(this).addClass('placeholder');
    });
    $(this).blur(function(){
        $(this).removeClass('placeholder');
    });
});