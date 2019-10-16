$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var scrollBottom = $(this).scrollTop() + $(window).height();
    //console.log(scrollBottom)
    var fg02 = $(".first-game02").offset().top + 400;
    var fg03 = $(".first-game03").offset().top + 500;
    var fg04 = $(".first-game04").offset().top + 500;
    var fgBar02 = $(".first-game-bar02").offset().top + $(".first-game-bar02").height() + 200;
    var fgBar03 = $(".first-game-bar03").offset().top + $(".first-game-bar03").height() + 300;
    var fgBar04 = $(".first-game-bar04").offset().top + $(".first-game-bar03").height() + 300;
    var fgTitle02 = $(".first-game-title02").offset().top + $(".first-game-title02").height() + 100;
    var fgTitle03 = $(".first-game-title03").offset().top + $(".first-game-title03").height() + 100;
    var fgTitle04 = $(".first-game-title04").offset().top + $(".first-game-title04").height() + 100;
    var linkHeight = $(".first-game-link a").height();
    var fgLink02 = $(".first-game02 .first-game-link a").offset().top + linkHeight + 50;
    var fgLink03 = $(".first-game03 .first-game-link a").offset().top + linkHeight + 50;
    var fgLink04 = $(".first-game04 .first-game-link a").offset().top + linkHeight + 50;
    var fgItem02 = $(".first-game-item02").offset().top + $(".first-game-item02").height() + 200;
    var fgItem03 = $(".first-game-item03").offset().top + $(".first-game-item03").height() + 200;
    var fgItem04 = $(".first-game-item04").offset().top + $(".first-game-item04").height() + 200;
    var fgText02 = $(".first-game-text02").offset().top + $(".first-game-text02").height();
    var fgText03 = $(".first-game-text03").offset().top + $(".first-game-text03").height() + 50;
    var fgText04 = $(".first-game-text04").offset().top + $(".first-game-text04").height() + 50;

    //----- FIRST-GAME01區塊 -----//
    if(scrollTop >= 200) {
        $(".first-game01").css({
            "opacity" : 1
        })
    }
    if(scrollTop >= 300){
        $(".first-game-title01").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollTop >= 400){
        $(".first-game-item01").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollTop >= 500){
        $(".first-game01 .first-game-link a").addClass('link-turn').delay(1000).queue(function(){
            $(this).addClass("link-turn2").dequeue();
        });
    }
    if(scrollTop >= 550){
        $(".first-game-text01").css({
            "opacity" : 1,
            "top": 0
        })
    }

    //----- FIRST-GAME02區塊 -----//
    if(scrollBottom >= fg02){
        $(".first-game02").css({
            "opacity" : 1
        })
    }
    if(scrollBottom >= fgBar02){
        $(".first-game-bar02").css({
            "background-position" : "center, top",
            "margin" : "-700px 0 0 0"
        })
    }
    if(scrollBottom >= fgTitle02){
        $(".first-game-title02").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgItem02){
        $(".first-game-item02").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgLink02){
        $(".first-game02 .first-game-link a").addClass('link-turn').delay(1000).queue(function(){
            $(this).addClass("link-turn2").dequeue();
        })
    }
    if(scrollBottom >= fgText02){
        $(".first-game-text02").css({
            "opacity" : 1,
            "top" : 0
        })
    }


    //----- FIRST-GAME03區塊 -----//
    if(scrollBottom >= fg03){
        $(".first-game03").css({
            "opacity" : 1
        })
    }
    if(scrollBottom >= fgBar03){
        $(".first-game-bar03").css({
            "background-position" : "center top",
            "margin" : "-630px 0 0 0"
        })
    }
    if(scrollBottom >= fgTitle03){
        $(".first-game-title03").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgItem03){
        $(".first-game-item03").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgLink03){
        $(".first-game03 .first-game-link a").addClass('link-turn').delay(1000).queue(function(){
            $(this).addClass("link-turn2").dequeue();
        })
    }
    if(scrollBottom >= fgText03){
        $(".first-game-text03").css({
            "opacity" : 1,
            "top" : 0
        })
    }

   //----- FIRST-GAME04區塊 -----//
    if(scrollBottom >= fg04){
        $(".first-game04").css({
            "opacity" : 1
        })
    }
    if(scrollBottom >= fgBar04){
        $(".first-game-bar04").css({
            "background-position" : "center top",
            "margin" : "-620px 0 0 0"
        })
    }
    if(scrollBottom >= fgTitle04){
        $(".first-game-title04").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgItem04){
        $(".first-game-item04").css({
            "opacity" : 1,
            "top" : 0
        })
    }
    if(scrollBottom >= fgLink04){
        $(".first-game04 .first-game-link a").addClass('link-turn').delay(1000).queue(function(){
            $(this).addClass("link-turn2").dequeue();
        })
    }
    if(scrollBottom >= fgText04){
        $(".first-game-text04").css({
            "opacity" : 1,
            "top" : 0
        })
    }
});